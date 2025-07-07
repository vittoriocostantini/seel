export interface Tour {
  id: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  image: any;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
  onActionPress?: () => void;
} 