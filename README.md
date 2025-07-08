# Seel - Travel App UI

> Modern user interface for a travel app.  
> **Note:** This project is UI only and is under development.

---

[![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB&style=flat)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?logo=redux&logoColor=fff&style=flat)](https://redux.js.org/)
[![Expo](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=fff&style=flat)](https://expo.dev/)
[![Status](https://img.shields.io/badge/Status-In%20progress-yellow?style=flat)](#)

---

## 📸 Screenshot

![Screenshot](path/to/your/screenshot.png)

---

## 🚀 Description

Seel is a user interface for a travel app, focused on visual experience and intuitive navigation.  
This project is an example of best practices in modern UI development with React Native, using modular architecture and reusable components.

---

## 🛠 Installation

Clone the repository and run the app locally:

```bash
git clone https://github.com/your-username/seel.git
cd seel
npm install
npm start
```

> Requirements: Node.js, npm/yarn, and a React Native compatible environment.

---

## 💡 Usage

Currently, the app displays sample screens to explore tours, countries, and trip details.  
You can navigate through the different sections using the bottom menu.

---

## 🧑‍💻 Development Environment

To contribute or modify the project:

```bash
# Install dependencies
npm install

# Start the project in development mode
npm start
```

> You can use Expo or React Native CLI as you prefer.

---

## 📦 Project Structure

- `src/components/` – Reusable UI components
- `src/screens/` – Main app screens
- `src/redux/` – Global state and Redux slices
- `src/data/` – Sample data

---

## 🗂️ State Management: Redux Toolkit, Store & Slices

This project uses **Redux Toolkit** for state management, following a modular and scalable architecture. The state is organized into slices, each responsible for a specific domain (countries, tours, favorites, etc.), and combined in a central store.

### 🏪 Store Configuration

The Redux store is configured in `src/store/store.ts` using `configureStore` from Redux Toolkit.  
All reducers from the different slices are combined here:

```ts
import { configureStore } from '@reduxjs/toolkit';
import {
  countriesDataReducer,
  countryFavoritesSlice,
} from '../redux/countries-slice';
import { toursReducer, tourFavoritesSlice } from '../redux/tours-slice';

const store = configureStore({
  reducer: {
    carouselCards: countriesDataReducer,
    tours: toursReducer,
    countryFavorites: countryFavoritesSlice.reducer,
    tourFavorites: tourFavoritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
```

### 🧩 Slices Structure

Each slice manages a specific part of the state and exposes actions and selectors.

#### 1. **Countries Data Slice**
- **File:** `src/redux/countries-slice/countries-data-slice.ts`
- **Purpose:** Manages country and continent data, including images and carousel data.
- **Selectors:** For accessing countries by continent, images, etc.

#### 2. **Country Favorites Slice**
- **File:** `src/redux/countries-slice/favorite-slice-countries/country-favorites-slice.ts`
- **Purpose:** Manages favorite countries (by continent-country key).
- **Actions:** `toggleCountryFavorite`
- **Selectors:** `selectCountryFavorite`

#### 3. **Tours Data Slice**
- **File:** `src/redux/tours-slice/tours-data-slice.ts`
- **Purpose:** Manages tours by country.
- **Actions:** `initializeToursForCountry`
- **Selectors:** `selectToursForCountry`, `selectToursForContinentCountry`

#### 4. **Tour Favorites Slice**
- **File:** `src/redux/tours-slice/favorite-slice-tours/tour-favorites-slice.ts`
- **Purpose:** Manages favorite tours (by countryKey-tourId).
- **Actions:** `toggleTourFavorite`
- **Selectors:** `selectTourFavorite`, `selectTourFavoritesForCountry`

---

### 🗃️ Data Structure

#### **Images Data**
- **File:** `src/data/images-countries-data.ts`
- **Structure:** Nested object by continent, country, and image file.
- **Purpose:** Provides URLs for country/tour images.

#### **Tours Data**
- **File:** `src/data/tours-data.ts`
- **Structure:** Array of tour objects per country, with fields like `id`, `title`, `duration`, `price`, `rating`, `reviews`, `image`.
- **Purpose:** Provides the main data for tours displayed in the UI.

#### **Tour Details Data**
- **File:** `src/data/tours-details-data.ts`
- **Structure:** Object keyed by tour ID, each containing an array of day-by-day itinerary details.
- **Purpose:** Supplies detailed information for each tour, used in the trip details screens.

---

### ⚙️ How It Works

- The UI dispatches actions (e.g., to toggle favorites or initialize tours for a country).
- Slices update their part of the state accordingly.
- Selectors are used throughout the app to access and display the relevant data.
- All data is static/sample and loaded from the `src/data/` directory.

---

## 📝 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more information.

---

## 👤 Author

Developed by [vittoriocostantini](https://github.com/vittoriocostantini).

---

## 📋 Project Status

🚧 In progress – UI only, no backend logic or real persistence.

---

> Inspired by best practices from [dbader.org](https://dbader.org/blog/write-a-great-readme-for-your-github-project)
