import { createSlice, createSelector } from '@reduxjs/toolkit';
import { IMAGES } from './images-carousel-store';
import { CONTINENT_COUNTRY_MAP } from './country-map';



const CONTINENT_KEY_MAP: Record<string, string> = {
  asia: 'asia',
  europa: 'europe',
  sudamerica: 'south-america',
  africa: 'africa',
  oceania: 'oceania',
  northamerica: 'north-america',
};


const getCarouselData = (
  continentKey: string,
  countries: typeof CONTINENT_COUNTRY_MAP[string],
): Array<{
  key: string;
  title: string;
  country: string;
  image: any;
  rating: number;
  reviews: number;
}> => {
  return countries.flatMap((countryObj) =>
    countryObj.images.map((imgObj, idx) => ({
      key: `${countryObj.country}-${idx}`,
      title: imgObj.title,
      country: countryObj.country,
      image: IMAGES[continentKey]?.[countryObj.folder]?.[imgObj.file],
      rating: 4.8,
      reviews: 100 + idx * 10,
    }))
  );
};

const initialState = {
  continentCountryMap: CONTINENT_COUNTRY_MAP,
  continentKeyMap: CONTINENT_KEY_MAP,
  images: IMAGES,
};

const carouselCardsSlice = createSlice({
  name: 'carouselCards',
  initialState,
  reducers: {},
});

const selectContinentKey = (state: any, continent: string) => state.carouselCards.continentKeyMap[continent] || 'asia';
const selectCountries = (state: any, continent: string) => {
  const continentKey = selectContinentKey(state, continent);
  return state.carouselCards.continentCountryMap[continentKey] || [];
};

export const selectCarouselData = createSelector(
  [selectContinentKey, selectCountries],
  (continentKey, countries) => getCarouselData(continentKey, countries)
);

export default carouselCardsSlice.reducer; 