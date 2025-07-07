import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface RatingRowProps {
  rating: number;
  reviews: number;
  style?: any;
  styleText?: any;
  styleReviews?: any;
  styleSpan?: any;
  starColor?: string;
}

const RatingRow: React.FC<RatingRowProps> = ({
  rating,
  reviews,
  style,
  styleText,
  styleReviews,
  styleSpan,
  starColor = '#F8F8F8',
}) => {
  return (
    <View style={style}>
      <View style={styleSpan}>
        <Feather name="star" size={16} color={starColor} style={{ marginRight: 4 }} />
        <Text style={styleText}>{typeof rating === 'number' ? rating.toFixed(1) : '0.0'}</Text>
      </View>
      <Text style={styleReviews}>{typeof reviews === 'number' ? reviews : 0} reviews</Text>
    </View>
  );
};

export default RatingRow; 