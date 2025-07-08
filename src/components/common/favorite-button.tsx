import React from 'react';
import IconButton from './icon-button';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FavoriteButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
  isFavorite?: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconNameOff?: keyof typeof Ionicons.glyphMap;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  onPress, 
  style, 
  color = '#212529', 
  size = 28,
  isFavorite = false,
  iconName = 'heart',
  iconNameOff = 'heart-outline',
}) => (
  <IconButton
    name={isFavorite ? iconName : iconNameOff}
    size={size}
    color={isFavorite ? '#ff4757' : color}
    onPress={onPress}
    style={style}
  />
);

export default FavoriteButton; 