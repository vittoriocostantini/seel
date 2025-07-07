import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RatingRow from '../../common/rating-row';
import TravelCardsCarousel from '../../common/travel-cards-carousel';
import Animated, { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler, withTiming } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import CountryFlag from 'react-native-country-flag';
import { useSelector, useDispatch } from 'react-redux';
import { selectToursForContinentCountry, toggleFavorite } from '../../../redux/tours-slice/tours-data-slice';
import { Tour } from '../../../types/tour';

interface BottomSheetProps {
  countryData: {
    country: string;
    description: string;
    rating: number;
    reviews: number;
    images: { title: string }[];
    isoCode?: string;
  };
  showFullDescription: boolean;
  setShowFullDescription: (value: boolean | ((prev: boolean) => boolean)) => void;
  continent: string;
  country: string;
  styles: any;
  sheetPosition: any; // valor compartido de reanimated
  translateY: any; // valor compartido para la posición Y
  SHEET_EXPANDED: number;
  SHEET_COLLAPSED: number;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  countryData,
  showFullDescription,
  setShowFullDescription,
  continent,
  country,
  styles,
  sheetPosition,
  translateY,
  SHEET_EXPANDED,
  SHEET_COLLAPSED,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const dispatch = useDispatch();
  
  // Obtener tours del slice
  const tours = useSelector((state) => selectToursForContinentCountry(state, continent, country));

  // Sincronizar estado colapsado con sheetPosition animado
  useEffect(() => {
    const id = setInterval(() => {
      if (sheetPosition.value === 1 && !isCollapsed) setIsCollapsed(true);
      if (sheetPosition.value < 1 && isCollapsed) setIsCollapsed(false);
    }, 50);
    return () => clearInterval(id);
  }, [sheetPosition, isCollapsed]);

  // Handler del gesto
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx: any) => {
      let newY = ctx.startY + event.translationY;
      newY = Math.max(SHEET_EXPANDED, Math.min(SHEET_COLLAPSED, newY));
      translateY.value = newY;
      sheetPosition.value = Math.min(1, Math.max(0, (newY - SHEET_EXPANDED) / (SHEET_COLLAPSED - SHEET_EXPANDED)));
    },
    onEnd: () => {
      if (translateY.value > (SHEET_COLLAPSED / 2)) {
        translateY.value = withTiming(SHEET_COLLAPSED, { duration: 350 });
        sheetPosition.value = 1;
      } else {
        translateY.value = withTiming(SHEET_EXPANDED, { duration: 350 });
        sheetPosition.value = 0;
      }
    },
  });

  // Función para expandir el bottom sheet desde el botón flotante
  const expandSheet = () => {
    translateY.value = withTiming(SHEET_EXPANDED, { duration: 350 });
    sheetPosition.value = 0;
  };

  // Estilo animado para el bottom sheet
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  // Preparar tours con handlers
  const toursWithHandlers: Tour[] = tours.map((tour: any) => ({
    ...tour,
    onFavoritePress: () => {
      dispatch(toggleFavorite({ 
        tourId: tour.id, 
        countryKey: `${continent}-${country}` 
      }));
    },
    onActionPress: () => {
      // Aquí puedes agregar la navegación al detalle del tour
      console.log('Tour selected:', tour.id);
    },
  }));

  return (
    <>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          <View style={{ alignItems: 'center', paddingVertical: 6 }}>
            <View style={{ width: 40, height: 5, borderRadius: 2.5, backgroundColor: '#ccc', marginBottom: 8 }} />
          </View>
          <View style={[styles.rowTitleRating, { marginBottom: 4 }]}> 
            <Text style={styles.title}>{countryData.images[0].title}</Text>
            <RatingRow
              rating={countryData.rating}
              reviews={countryData.reviews}
              style={styles.ratingRow}
              styleSpan={styles.ratingRowSpan}
              styleText={styles.ratingRowText}
              styleReviews={styles.ratingRowReviews}
              starColor={'#212529'}
            />
          </View>
          <View style={styles.infoRow}>
            <View style={styles.countryRow}>
              {countryData.isoCode ? (
                <CountryFlag isoCode={countryData.isoCode.toLowerCase()} size={17} style={{ marginRight: 6, borderRadius: 4 }} />
              ) : null}
              <Text style={styles.country}>{countryData.country}</Text>
            </View>
          </View>
          <Text style={styles.description} numberOfLines={showFullDescription ? undefined : 2}>
            {countryData.description}
          </Text>
          <TouchableOpacity onPress={() => setShowFullDescription((prev) => !prev)}>
            <Text style={styles.readMore}>{showFullDescription ? 'Read less' : 'Read more'}</Text>
          </TouchableOpacity>
          <View style={styles.toursRow}>
            <Text style={styles.upcoming}>Upcomings tours</Text>
          </View>
          <TravelCardsCarousel trips={toursWithHandlers} />
        </Animated.View>
      </PanGestureHandler>
      {isCollapsed && (
        <TouchableOpacity
          style={styles.expandSheet}
          onPress={expandSheet}
          activeOpacity={0.8}
        >
          <Ionicons name="chevron-up" size={28} color="#212529" />
        </TouchableOpacity>
      )}
    </>
  );
};
export default BottomSheet;
