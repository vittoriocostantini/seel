import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import TravelCard from './travel-card';
import { Tour } from '../../types/tour';

const { width } = Dimensions.get('window');

interface TravelCardsCarouselProps {
  trips: Tour[];
}

const TravelCardsCarousel: React.FC<TravelCardsCarouselProps> = ({ trips }) => {
  if (!trips.length) {
    return null;
  }

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        width={width * 1}
        height={420}
        data={trips}
        style={{ alignSelf: 'center' }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 70,
          parallaxAdjacentItemScale: 0.7,
        }}
        renderItem={({ item }) => (
          <TravelCard
            id={item.id}
            image={item.image}
            title={item.title}
            duration={item.duration}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            isFavorite={item.isFavorite}
            onFavoritePress={item.onFavoritePress}
            onActionPress={item.onActionPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TravelCardsCarousel; 