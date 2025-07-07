import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FavoriteButton from './favorite-button';

interface TravelCardProps {
  id: string;
  image: any;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  onFavoritePress?: () => void;
  onActionPress?: () => void;
  isFavorite?: boolean;
}

const { width } = Dimensions.get('window');

const TravelCard: React.FC<TravelCardProps> = ({
  id,
  image,
  title,
  duration,
  price,
  rating,
  reviews,
  onActionPress,
  onFavoritePress,
  isFavorite = false,
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <FavoriteButton
        style={styles.favoriteButton}
        onPress={onFavoritePress}
        isFavorite={isFavorite}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.duration}>{duration}</Text>
          <Text style={styles.dot}> • </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="star-outline" size={16} color="#212529" style={{ marginRight: 2 }} />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.reviews}>  {reviews} reviews</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.actionButton} onPress={onActionPress || (() => {})}>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 1,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 310,
    borderRadius: 30,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
    zIndex: 2,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  duration: {
    fontSize: 14,
    color: '#212529',
  },
  dot: {
    fontSize: 14,
    color: '#212529',
  },
  price: {
    fontSize: 14,
    color: '#212529',
  },
  rating: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212529',
  },
  reviews: {
    fontSize: 14,
    color: '#212529',
    textDecorationLine: 'underline',
  },
  actionButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#212529',
    borderRadius: 24,
    padding: 8,
    elevation: 2,
    zIndex: 2,
  },
});

export default TravelCard; 