import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BackButton from '../../components/common/back-button';
import FavoriteButton from '../../components/common/favorite-button';
import RatingRow from '../../components/common/rating-row';
import TravelCardsCarousel from '../../components/common/travel-cards-carousel';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { StackParamList } from '../../types/navigation';
import { selectCountryData } from '../../redux/countries-slice/countries-data-slice';
import { initializeToursForCountry } from '../../redux/tours-slice/tours-data-slice';
import BottomSheet from '../../components/layout/bottom-sheet/bottom-sheet';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolate, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const SHEET_EXPANDED = 0;
const SHEET_COLLAPSED = height - 120;

function Trip() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<StackParamList, 'Trip'>>();
  const { continent, country } = route.params;
  const countryData = useSelector((state) => selectCountryData(state, continent, country));
  const [showFullDescription, setShowFullDescription] = useState(false);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  // Valor compartido para la posición del bottom sheet
  const sheetPosition = useSharedValue(0); // 0 = expandido, 1 = colapsado
  // Valor compartido para la posición Y del bottom sheet
  const translateY = useSharedValue(SHEET_EXPANDED);

  // Inicializar tours para el país cuando se monta el componente
  useEffect(() => {
    dispatch(initializeToursForCountry({ continent, country }));
  }, [continent, country, dispatch]);

  // Estilo animado para la imagen
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      width: '100%', // Mantener el ancho fijo
      height: translateY.value + 320, // La imagen se expande con el bottom sheet
    };
  });

  if (!countryData) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text style={{ color: '#212529', fontSize: 18 }}>Destino no encontrado.</Text>
      </View>
    );
  }



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image source={countryData.image} style={[styles.mainImage, animatedImageStyle]} resizeMode="cover" />
        <BackButton
          onPress={() => navigation.goBack()}
          style={[styles.backButton, {
            top: insets.top + 40,
            left: insets.left + 20
          }]}
        />
        <FavoriteButton
          style={[styles.favoriteButton, {
            top: insets.top + 40,
            right: insets.right + 20
          }]}
        />
      </View>
      <BottomSheet
        countryData={countryData}
        showFullDescription={showFullDescription}
        setShowFullDescription={setShowFullDescription}
        continent={continent}
        country={country}
        styles={styles}
        sheetPosition={sheetPosition}
        translateY={translateY}
        SHEET_EXPANDED={SHEET_EXPANDED}
        SHEET_COLLAPSED={SHEET_COLLAPSED}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 320,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    padding: 6,
    elevation: 2,
  },
  favoriteButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  bottomSheet: {
    width: width,
    backgroundColor: '#f5f6f7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 24,
    minHeight: 620,
    position: 'absolute',
    bottom: 0,
    left: 0,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -2 },
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  country: {
    fontSize: 16,
    color: '#212529',
  },
  description: {
    fontSize: 15,
    paddingVertical: 5,
    color: '#212529',
  },
  readMore: {
    color: '#212529',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 5,
    textDecorationLine: 'underline',
  },
  rowTitleRating: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  ratingRowSpan: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#212529',
    paddingHorizontal: 6,
  },
  ratingRowText: {
    fontSize: 16,
    color: '#212529',
    marginRight: 4,
    fontWeight: 'bold',
  },
  ratingRowReviews: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#212529',
    fontWeight: '600',
  },
  upcoming: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    paddingVertical: 5,
  },
  toursRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expandSheet: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 24,
    padding: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.17,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 100,
  },
});

export default Trip;