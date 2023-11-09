import  {createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null }
    onRegister?: (username: string, email:string, password: string, profilePic: string) => Promise<any>
    onLogin?: (username: string, password: string) => Promise<any>
    onLogout?: () => Promise<any>
}

const TOKEN_KEY = 'my-jwt'
export const API_URL = 'http://192.168.0.3:8000/api'
const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: any) => {

    const [authState, setAuthState] = useState<{
        token: string | null
        authenticated: boolean | null
    }>({
        token: null,
        authenticated: null
    })

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY)
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                setAuthState({
                    token: token, 
                    authenticated: true
                })
            }
        }
        loadToken()
    }, [])

    const register = async (username: string, email:string, password: string, photo_url: string) => {
        try{
            return await axios.post(`${API_URL}/register/`, {username, email, password, photo_url})
        } catch (e) {
            return { error: true, message: (e as any).response.data.message }
        }
    }

    const login = async (username: string, password: string) => {
        try{
            const response = await axios.post(`${API_URL}/token/`, {username, password})
            setAuthState({
                token: response.data.access, 
                authenticated: true
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`

            await SecureStore.setItemAsync(TOKEN_KEY, response.data.access)

            return response

        } catch (e) {
            console.log(e)
            return { error: true, message: (e as any).response.data.detail }
        }
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY)

        axios.defaults.headers.common['Authorization'] = ''

        setAuthState({
            token: null, 
            authenticated: false
        })
    }

    const value ={
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}