import React, { useState } from 'react'
import { View } from 'react-native'
import { Calendar, MarkedDates } from 'react-native-calendars'

interface Activity {
  date: string;
  activityName: string;
}

const CalendarComponent: React.FC = () => {
  const [activities, setActivities] = useState<{ [date: string]: MarkedDates }>({})

  const onDayPress = (day: any) => {
    const date = day.dateString

    if (activities[date]) {
        const { [date]: deletedDate, ...remainingActivities } = activities;
        setActivities(remainingActivities)
    } else {
        const updatedActivities: MarkedDates = {
            ...activities,
            [date]: { marked: true, selected: true, selectedColor: 'blue' },
        }
        setActivities(updatedActivities);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={activities}
        markingType="multi-dot"
      />
    </View>
  );
};

export default CalendarComponent;
