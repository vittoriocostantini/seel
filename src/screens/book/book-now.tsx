import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ExpandCard from './expand-card';

function BookNow() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <ExpandCard
        image={require('../../assets/countries/southamerica/brazil/card1.jpg')}
        day="Day 1"
        title="Arrival to Rio de Janeiro"
        subTitle="Highlights"
        details={[
          { label: 'Morning', text: 'Arrive in Rio de Janeiro and transfer to your hotel' },
          { label: 'Afternoon', text: 'Free time to relax or explore the nearby area' },
          { label: 'Evening', text: 'Welcome dinner at a traditional Brazilian restaurant' },
        ]}
      />
      <ExpandCard
        image={require('../../assets/countries/southamerica/brazil/card2.jpg')}
        day="Day 2"
        title="Christ the Redeemer & Sugarloaf"
        subTitle="Iconic Sights"
        details={[
          { label: 'Morning', text: 'Guided tour to Christ the Redeemer' },
          { label: 'Afternoon', text: 'Cable car ride to Sugarloaf Mountain' },
          { label: 'Evening', text: 'Dinner at a local restaurant' },
        ]}
      />
      <ExpandCard
        image={require('../../assets/countries/southamerica/brazil/card3.jpg')}
        day="Day 3"
        title="Beaches & Departure"
        subTitle="Relax & Goodbye"
        details={[
          { label: 'Morning', text: 'Relax at Copacabana Beach' },
          { label: 'Afternoon', text: 'Shopping and leisure time' },
          { label: 'Evening', text: 'Transfer to airport for departure' },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
});

export default BookNow;