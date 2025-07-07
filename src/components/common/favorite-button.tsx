import React from 'react';
import IconButton from './icon-button';
import { StyleProp, ViewStyle } from 'react-native';

interface FavoriteButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
  isFavorite?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  onPress, 
  style, 
  color = '#212529', 
  size = 28,
  isFavorite = false 
}) => (
  <IconButton
    name={isFavorite ? "heart" : "heart-outline"}
    size={size}
    color={isFavorite ? "#ff4757" : color}
    onPress={onPress}
    style={style}
  />
);

export default FavoriteButton; 