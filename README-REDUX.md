# Arquitectura Redux y Gestión de Store

## Estructura General

El proyecto utiliza Redux Toolkit para la gestión de estado global, estructurando los datos en slices independientes por dominio funcional. La store centraliza el acceso y actualización de los datos, permitiendo un flujo de datos predecible y desacoplado.

---

## Store Principal (`src/store/store.ts`)

- **Definición:** Configura la store de Redux, integrando todos los slices relevantes.
- **Tipos:**
  - `RootState`: Tipo inferido del estado global.
  - `AppDispatch`: Tipo del método dispatch global.
- **Propósito:** Punto único de acceso y dispatch para toda la aplicación.

---

## Slices y Datos

### 1. `images-countries-data.ts`
- **Propósito:** Mapa estático de imágenes por continente y país.
- **Estructura:**
  - Objeto `IMAGES` de tres niveles: continente → país → archivo de imagen.
  - Uso de `require` para importar imágenes locales.
- **Uso:** Referenciado por los datos de tours para asociar imágenes a cada tour.

### 2. `tours-data.ts`
- **Propósito:** Datos estáticos de tours organizados por continente y país.
- **Estructura:**
  - `TOURS_DATA`: Objeto anidado continente → país → array de tours.
  - Cada tour incluye: id, título, duración, precio, rating, reviews, imagen.
  - Las imágenes se obtienen desde `IMAGES`.
- **Helpers:**
  - `getToursForCountry(continent, country)`: Devuelve los tours de un país.
  - `getToursForContinent(continent)`: Devuelve todos los tours de un continente.

### 3. `tours-details-data.ts`
- **Propósito:** Detalles diarios de cada tour.
- **Estructura:**
  - `TourDayDetail`: Interfaz para el detalle de un día de tour.
  - `TourDetailsData`: Mapa de `tourId` a array de `TourDayDetail`.
- **Uso:** Permite mostrar itinerarios detallados por tour.

### 4. `countries-data-slice.ts`
- **Propósito:** Slice para datos de países y carouseles.
- **Estructura:**
  - Funciones para obtener datos de países, carouseles y claves de continente.
  - Selectores: `selectContinentKey`, `selectCountries`.
- **Uso:** Gestiona la lógica de visualización y selección de países por continente.

### 5. `country-map.ts`
- **Propósito:** Define la estructura de datos de un país.
- **Estructura:**
  - Interfaz `Country` con campos: nombre, carpeta, imágenes, descripción, rating, reviews, isoCode.
- **Uso:** Base para la representación y manipulación de datos de países.

### 6. `country-favorites-slice.ts` (`/favorite-slice-countries`)
- **Propósito:** Slice para favoritos de países.
- **Estructura:**
  - Estado: `favorites` (mapa de `${continent}-${country}` a boolean).
  - Acciones: añadir/quitar país favorito.
  - Selector: `selectCountryFavorite`.
- **Uso:** Permite marcar países como favoritos a nivel global.

### 7. `tour-favorites-slice.ts` (`/favorite-slice-countries`)
- **Propósito:** Slice para favoritos de tours.
- **Estructura:**
  - Estado: `favorites` (mapa de `${countryKey}-${tourId}` a boolean).
  - Acciones: añadir/quitar tour favorito.
  - Selector: `selectTourFavorite`.
- **Uso:** Permite marcar tours como favoritos a nivel global.

### 8. `tours-data-slice.ts`
- **Propósito:** Slice para la gestión de tours por país.
- **Estructura:**
  - Estado: `toursByCountry` (mapa de país a array de tours).
  - Función de conversión: `convertTourDataToTour`.
- **Uso:** Centraliza la obtención y almacenamiento de tours por país.

---

## Flujo de Datos

1. **Carga de datos estáticos:**
   - Imágenes y datos de tours se cargan desde archivos estáticos.
2. **Gestión de favoritos:**
   - Slices independientes para países y tours, con selectores para acceso eficiente.
3. **Visualización:**
   - Los datos de países y tours se obtienen mediante selectores y helpers, desacoplando la UI de la estructura interna.
4. **Escalabilidad:**
   - La estructura modular permite añadir nuevos países, tours o funcionalidades sin afectar el resto del sistema.

---

## Buenas Prácticas Aplicadas

- Separación estricta de dominios en slices.
- Tipado fuerte con TypeScript en todos los datos y estados.
- Selectores para acceso eficiente y desacoplado.
- Helpers para encapsular lógica de obtención de datos.
- Estado inmutable y acciones puras.
- Estructura de carpetas clara y orientada a dominio.

---

## Resumen

La gestión de estado se basa en Redux Toolkit, con slices independientes para cada dominio funcional (países, tours, favoritos). Los datos estáticos se organizan en archivos dedicados y se accede a ellos mediante helpers y selectores. La arquitectura es escalable, mantenible y alineada con buenas prácticas senior de React Native + TypeScript. 