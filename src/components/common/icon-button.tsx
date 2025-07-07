import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<IconButtonProps> = ({ name, size = 24, color = '#222', onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Ionicons name={name} size={size} color={color} />
  </TouchableOpacity>
);

export default IconButton; 