import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../components/layout';
import ContinentBar from '../../components/layout/continent-bar/continent-bar';
import CarouselCards from '../../components/layout/carousel-cards/carousel-cards';


function Home() {
  const [selectedContinent, setSelectedContinent] = useState('asia');
  return (
    <View style={styles.container}>
      <Header />
      <ContinentBar selected={selectedContinent} onSelect={setSelectedContinent} />
      <View style={styles.content}>
        <CarouselCards continent={selectedContinent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingVertical: 50,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default Home;