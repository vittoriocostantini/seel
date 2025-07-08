import React from 'react';
import { ExpandCard } from '../../components/forms/card-tours-details';
import { View, StyleSheet, Text } from 'react-native';
import { TOURS_DETAILS_DATA } from '../../data';

interface BookNowProps {
  tourId: string;
}

function BookNow({ tourId }: BookNowProps) {
  const details = TOURS_DETAILS_DATA[tourId];
  if (!details) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>No details available for this tour.</Text>
      </View>
    );
  }
  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{details[0]?.title || 'Tour Details'}</Text>
      </View>
      {details.map((day, idx) => (
        <ExpandCard
          key={idx}
          day={day.day}
          title={day.title}
          subTitle={day.subTitle}
          details={day.details}
        />
      ))}
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,

  },
  header: {
    height: 'auto'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#212529',
  },
});

export default BookNow;