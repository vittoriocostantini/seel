import React from 'react';
import IconButton from './icon-button';
import { StyleProp, ViewStyle } from 'react-native';

interface BackButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress, style, color = '#212529', size = 24 }) => (
  <IconButton
    name="chevron-back"
    size={size}
    color={color}
    onPress={onPress}
    style={style}
  />
);

export default BackButton; 