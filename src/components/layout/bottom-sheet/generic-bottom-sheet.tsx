import React, { useCallback, forwardRef, useImperativeHandle, useMemo } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler, withTiming, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteButton from '../../common/favorite-button';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountryFavorite, toggleCountryFavorite } from '../../../redux/countries-slice/favorite-slice-countries/country-favorites-slice';
import { selectTourFavorite, toggleTourFavorite } from '../../../redux/tours-slice/favorite-slice-tours/tour-favorites-slice';
import { selectToursForCountry } from '../../../redux/tours-slice/tours-data-slice';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const SHEET_EXPANDED = 0;
const SHEET_COLLAPSED = SCREEN_HEIGHT;
const SHEET_HEIGHT = SCREEN_HEIGHT;

interface GenericBottomSheetProps {
  children: React.ReactNode;
  continent?: string;
  country?: string;
  title?: string;
  tourId?: string;
  countryKey?: string;
}

const GenericBottomSheet = forwardRef<any, GenericBottomSheetProps>(({ children, continent, country, title, tourId, countryKey }, ref) => {
  const translateY = useSharedValue(SHEET_COLLAPSED);
  const dispatch = useDispatch();

  // Estado de favorito: depende si es tour o país
  let isFavorite = false;
  let onFavoritePress = () => {};
  let price: string | undefined = undefined;

  if (tourId && countryKey) {
    isFavorite = useSelector((state: any) => selectTourFavorite(state, countryKey, tourId));
    onFavoritePress = useCallback(() => {
      dispatch(toggleTourFavorite({ countryKey, tourId }));
    }, [countryKey, tourId, dispatch]);
    // Obtener el precio del tour
    const tours = useSelector((state: any) => selectToursForCountry(state, countryKey));
    const tour = tours.find((t: any) => t.id === tourId);
    price = tour?.price;
  } else if (continent && country) {
    isFavorite = useSelector((state: any) => selectCountryFavorite(state, continent, country));
    onFavoritePress = useCallback(() => {
      dispatch(toggleCountryFavorite({ continent, country }));
    }, [continent, country, dispatch]);
  }

  // Derived value para saber si está colapsado
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const updateCollapsed = useCallback((collapsed: boolean) => {
    setIsCollapsed(collapsed);
  }, []);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx: any) => {
      let newY = ctx.startY + event.translationY;
      newY = Math.max(SHEET_EXPANDED, Math.min(SHEET_COLLAPSED, newY));
      translateY.value = newY;
    },
    onEnd: () => {
      if (translateY.value > SHEET_COLLAPSED / 2) {
        translateY.value = withTiming(SHEET_COLLAPSED, { duration: 350 }, (finished) => {
          if (finished) runOnJS(updateCollapsed)(true);
        });
      } else {
        translateY.value = withTiming(SHEET_EXPANDED, { duration: 350 }, (finished) => {
          if (finished) runOnJS(updateCollapsed)(false);
        });
      }
    },
  });

  const expandSheet = useCallback(() => {
    translateY.value = withTiming(SHEET_EXPANDED, { duration: 350 }, (finished) => {
      if (finished) runOnJS(updateCollapsed)(false);
    });
  }, [translateY, updateCollapsed]);

  useImperativeHandle(ref, () => ({
    expandSheet,
  }), [expandSheet]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          <View style={styles.header}>
            <View style={styles.headerRow}>
              <TouchableOpacity style={styles.chevronButton} onPress={() => {
                translateY.value = withTiming(SHEET_COLLAPSED, { duration: 350 }, (finished) => {
                  if (finished) runOnJS(updateCollapsed)(true);
                });
              }}>
                <Ionicons name="chevron-down" size={28} color="#212529" />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'Tour Details'}</Text>
              {(tourId && countryKey) || (continent && country) ? (
                <FavoriteButton
                  isFavorite={isFavorite}
                  onPress={onFavoritePress}
                  style={styles.favoriteButton}
                />
              ) : <View style={{ width: 44 }} />}
            </View>
            {/* Subtítulo debajo del título */}
            {tourId && price && (
              <Text style={styles.subtitle}>All this included for {price}</Text>
            )}
          </View>
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
          <TouchableOpacity style={styles.bookButton} activeOpacity={0.85}>
            <View style={styles.bookButtonInner}>
              <Ionicons name="calendar-outline" size={22} color="#fff" style={{ marginRight: 8 }} />
              <Animated.Text style={styles.bookButtonText}>Book a tour</Animated.Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F6F7',
    height: 130,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    height: 80,
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: SHEET_HEIGHT,
    top: SHEET_EXPANDED,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    elevation: 24,
    zIndex: 100,
  },
  handleContainer: {
    alignItems: 'center',

    paddingVertical: 6,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ccc',
    marginBottom: 8,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  expandSheet: {
    
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 150,
    alignItems: 'center',
    zIndex: 200,
  },
  favoriteButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 22,
    elevation: 2,
  },
  chevronButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 22,
    elevation: 2,
  },
  bookButton: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 32,
    backgroundColor: '#212529',
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    flexDirection: 'row',
    zIndex: 300,
  },
  bookButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212529',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#212529',
    fontSize: 15,
    marginTop: 2,
    fontWeight: '400',
  },
});

export default GenericBottomSheet;
