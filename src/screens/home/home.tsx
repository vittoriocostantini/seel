import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/layout';
import ContinentBar from '../../components/layout/continent-bar/continent-bar';
import CarouselCards from '../../components/layout/carousel-cards/carousel-cards';
import { ContinentKey } from '../../types/continent-key';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function Home() {
  const [selectedContinent, setSelectedContinent] = useState<ContinentKey>('asia');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const insets = useSafeAreaInsets();
  
  const handleSeeMore = (countryData: any) => {
    navigation.navigate('Trip', { continent: selectedContinent, country: countryData.folder });
  };
  
  return (
    <View style={[styles.container, {
      paddingTop: insets.top + 10,
      paddingBottom: insets.bottom
    }]}>
      <Header />
      <ContinentBar selected={selectedContinent} onSelect={setSelectedContinent} />
      <View style={styles.content}>
        <CarouselCards continent={selectedContinent} onSeeMore={handleSeeMore} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default Home;