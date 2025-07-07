import { createSlice, createSelector } from '@reduxjs/toolkit';
import { IMAGES } from '../../store/images-countries';
import { CONTINENT_COUNTRY_MAP, COUNTRY_MAP } from '../countries-slice/country-map';



const CONTINENT_KEY_MAP: Record<string, string> = {
  asia: 'asia',
  europe: 'europe',
  southamerica: 'southamerica',
  africa: 'africa',
  oceania: 'oceania',
  northamerica: 'northamerica',
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
  description: string;
  folder: string;
}> => {
  return countries.flatMap((countryObj) =>
    countryObj.images.map((imgObj, idx) => ({
      key: `${countryObj.country}-${idx}`,
      title: imgObj.title,
      country: countryObj.country,
      image: IMAGES[continentKey]?.[countryObj.folder]?.[imgObj.file],
      rating: countryObj.rating,
      reviews: countryObj.reviews,
      description: countryObj.description || '',
      folder: countryObj.folder,
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

export const selectCountryData = createSelector(
  [(_: any, continent: string) => continent, (_: any, __: string, country: string) => country],
  (continent, country) => {
    const countryObj = COUNTRY_MAP[`${continent}-${country}`];
    if (!countryObj) return undefined;
    const mainImageFile = countryObj.images[0]?.file;
    const image = IMAGES[continent]?.[country]?.[mainImageFile];
    return { ...countryObj, image, isoCode: countryObj.isoCode };
  }
);

export default carouselCardsSlice.reducer; 