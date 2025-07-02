import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectCarouselData } from '../../../store/carousel-cards-slice';

const { width } = Dimensions.get('window');

interface CarouselCardsProps {
  continent: string;
}

const CarouselCards: React.FC<CarouselCardsProps> = ({ continent }) => {
  const data = useSelector((state: any) => selectCarouselData(state, continent));

  if (!data.length) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
        <Text style={{ color: '#888', fontSize: 18 }}>No hay destinos para este continente.</Text>
      </View>
    );
  }

  return (
    <Carousel
      width={width}
      height={620}
      data={data}
      style={{ alignSelf: 'center' }}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 120,
        parallaxAdjacentItemScale: 0.7,
      }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <LinearGradient
            colors={["rgba(0,0,0,0.7)", "transparent"]}
            style={styles.cardGradientTop}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            style={styles.cardGradient}
          />
          <TouchableOpacity style={styles.heartIcon}>
            <AntDesign name="hearto" size={20} color="#fff" />
          </TouchableOpacity>
          <View style={styles.cardInfoOverlay}>
            <Text style={styles.cardCountry}>{item.country}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.cardRatingRow}>
              <View style={styles.cardRatingSpan}>
                <Feather name="star" size={16} color="#F8F8F8" style={{ marginRight: 4 }} />
                <Text style={styles.cardRating}>{item.rating.toFixed(1)}</Text>
              </View>
              <Text style={styles.cardReviews}>{item.reviews} reviews</Text>
            </View>
            <TouchableOpacity style={styles.cardButton}>
              <View style={styles.cardButtonContent}>
                <Text style={[styles.cardButtonText, styles.cardButtonTextCentered]}>See more</Text>
                <View style={styles.cardButtonIconWrapper}>
                  <View style={styles.cardButtonIconCircle}>
                    <Feather name="chevron-right" size={28} color="#000" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 7,
    width: width * 1,
    alignSelf: 'center',
    minHeight: 450,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 24,
  },
  cardGradientTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    opacity: 0.5,
    height: 50,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  cardGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heartIcon: {
    position: 'absolute',
    top: 18,
    right: 18,
    borderRadius: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: '#fff',
    zIndex: 2,
  },
  cardInfoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    zIndex: 2,
  },
  cardCountry: {
    color: '#fff',
    backgroundColor: 'rgba(34,34,34,0.7)',
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 13,
    marginBottom: 6,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  cardRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    
  },
  cardRatingSpan: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#F8F8F8',
    paddingHorizontal: 4,

  },
  cardRating: {
    fontSize: 16,
    color: '#F8F8F8',
    marginRight: 4,
  },
  cardReviews: {
    fontSize: 14,
    color: '#F8F8F8',
    marginLeft: 4,
    fontWeight: '600',
  },
  cardButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: '100%',
    height: 50,
    borderRadius: 100,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  cardButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cardButtonTextCentered: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 1,
  },
  cardButtonIconWrapper: {
    position: 'absolute',
    right: 0,
  },
  cardButtonIconCircle: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CarouselCards; 