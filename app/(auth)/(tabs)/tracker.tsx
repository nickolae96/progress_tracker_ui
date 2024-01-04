import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalendarComponent from '../../../src/components/Calendar';

const Tracker: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Your other UI elements can go here */}
      <CalendarComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Tracker;
