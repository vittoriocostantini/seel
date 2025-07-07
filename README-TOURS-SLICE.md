# Tours Slice - Redux Implementation

## Descripción

Se ha implementado un nuevo slice de Redux para manejar los tours de cada país en la aplicación de viajes. Este slice centraliza la gestión de tours, favoritos y utiliza una store de datos centralizada para obtener la información de los tours.

## Arquitectura

### Estructura de archivos

```
src/
├── redux/
│   └── tours-slice/
│       └── tours-data-slice.ts    # Slice principal de tours
├── store/
│   ├── tours-data.ts              # Store de datos de tours
│   ├── images-countries.ts        # Imágenes centralizadas
│   └── store.ts                   # Store de Redux
├── types/
│   └── tour.ts                    # Interfaz Tour centralizada
├── components/
│   ├── common/
│   │   ├── travel-card.tsx        # Componente actualizado
│   │   ├── travel-cards-carousel.tsx
│   │   └── favorite-button.tsx    # Componente actualizado
│   └── layout/
│       └── bottom-sheet/
│           └── bottom-sheet.tsx   # Componente actualizado
└── screens/
    └── trip-details/
        └── trip.tsx               # Pantalla actualizada
```

## Funcionalidades

### 1. Store de Datos de Tours (`tours-data.ts`)

- **Datos centralizados**: Contiene todos los tours organizados por continente y país
- **Datos reales**: Cada tour tiene información específica y realista
- **Optimización**: Reutiliza las imágenes existentes de `images-countries.ts`
- **Funciones helper**: Proporciona funciones para obtener tours por país o continente

### 2. Gestión de Tours

- **Datos desde store**: Los tours se obtienen de la store centralizada
- **Conversión automática**: Convierte `TourData` a `Tour` con estado de favorito
- **Lazy loading**: Los tours se cargan solo cuando se necesitan

### 3. Sistema de Favoritos

- **Estado persistente**: Los favoritos se mantienen en Redux
- **Toggle funcional**: Permite agregar/quitar tours de favoritos
- **Indicador visual**: El botón de favorito cambia de apariencia según el estado

### 4. Integración con Componentes

- **TravelCard**: Muestra información completa del tour con funcionalidad de favoritos
- **TravelCardsCarousel**: Carrusel de tours con animaciones
- **BottomSheet**: Integra el slice para mostrar tours del país seleccionado

## API del Slice

### Estado

```typescript
interface ToursState {
  toursByCountry: Record<string, Tour[]>;
}
```

### Acciones

```typescript
// Cambiar estado de favorito
toggleFavorite({ tourId: string, countryKey: string })

// Inicializar tours para un país
initializeToursForCountry({ continent: string, country: string })
```

### Selectores

```typescript
// Obtener tours por país
selectToursForContinentCountry(state, continent, country)

// Obtener tours por clave de país
selectToursForCountry(state, countryKey)
```

## Store de Datos

### Interfaz TourData

```typescript
interface TourData {
  id: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  image: any;
}
```

### Funciones Helper

```typescript
// Obtener tours de un país específico
getToursForCountry(continent: string, country: string): TourData[]

// Obtener todos los tours de un continente
getToursForContinent(continent: string): TourData[]
```

## Interfaz Tour

```typescript
interface Tour {
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
```

## Uso

### 1. Inicializar tours en un componente

```typescript
import { useDispatch } from 'react-redux';
import { initializeToursForCountry } from '../redux/tours-slice/tours-data-slice';

const dispatch = useDispatch();

useEffect(() => {
  dispatch(initializeToursForCountry({ continent, country }));
}, [continent, country]);
```

### 2. Obtener tours del estado

```typescript
import { useSelector } from 'react-redux';
import { selectToursForContinentCountry } from '../redux/tours-slice/tours-data-slice';

const tours = useSelector((state) => 
  selectToursForContinentCountry(state, continent, country)
);
```

### 3. Manejar favoritos

```typescript
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/tours-slice/tours-data-slice';

const dispatch = useDispatch();

const handleFavoritePress = (tourId: string) => {
  dispatch(toggleFavorite({ 
    tourId, 
    countryKey: `${continent}-${country}` 
  }));
};
```

### 4. Usar datos directamente desde la store

```typescript
import { getToursForCountry } from '../store/tours-data';

const toursData = getToursForCountry('europe', 'france');
```

## Datos de Tours

### Ejemplos de Tours por País

**Francia:**
- París Romántico (7 días, $1299)
- Gastronomía Francesa (5 días, $999)
- Arte y Cultura (6 días, $1099)
- Riviera Francesa (8 días, $1499)
- Castillos del Loira (4 días, $799)

**Japón:**
- Tokio Moderno y Tradicional (7 días, $1199)
- Cultura Japonesa Profunda (10 días, $1499)
- Aventura en el Campo (5 días, $899)

**Canadá:**
- Toronto Multicultural (5 días, $899)
- Montañas Rocosas (8 días, $1299)
- Cataratas del Niágara (3 días, $599)
- Vancouver Natural (6 días, $999)

## Ventajas de la Implementación

1. **Separación de responsabilidades**: Datos separados de la lógica de estado
2. **Datos realistas**: Tours con información específica y variada
3. **Reutilización**: Usa imágenes existentes sin duplicar
4. **Escalabilidad**: Fácil agregar nuevos tours o modificar existentes
5. **Performance**: Carga bajo demanda, no carga innecesaria
6. **Mantenibilidad**: Código limpio y bien tipado
7. **Consistencia**: Misma estructura de datos en toda la app
8. **Flexibilidad**: Puedes usar datos directamente o a través del slice

## Consideraciones Técnicas

- **Lazy Loading**: Los tours se cargan solo cuando se necesitan
- **Memoización**: Los selectores están optimizados con `createSelector`
- **TypeScript**: Tipado completo para prevenir errores
- **Redux Toolkit**: Usa las mejores prácticas de Redux moderno
- **Store Centralizada**: Datos organizados y fáciles de mantener 