import { IMAGES } from './images-countries-data';

export interface TourData {
  id: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  image: any;
}

// Datos de tours por país
export const TOURS_DATA: Record<string, Record<string, TourData[]>> = {
  'africa': {
    'egypt': [
      {
        id: 'egypt-tour-1',
        title: 'Aventura Cultural en El Cairo',
        duration: '5 días',
        price: '$799',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.africa.egypt['card1.jpg']
      },
      {
        id: 'egypt-tour-2',
        title: 'Crucero el Nilo',
        duration: '7 días',
        price: '$999',
        rating: 4.9,
        reviews: 189,
        image: IMAGES.africa.egypt['card2.jpg']
      },
      {
        id: 'egypt-tour-3',
        title: 'Alejandria y delta del Nilo',
        duration: '6 días',
        price: '$899',
        rating: 4.7,
        reviews: 167,
        image: IMAGES.africa.egypt['card3.jpg']
      },
      {
        id: 'egypt-tour-4',
        title: 'Luxor y Aswan',
        duration: '4 días',
        price: '$649',
        rating: 4.6,
        reviews: 134,
        image: IMAGES.africa.egypt['card4.jpg']
      }
    ],
    'morocco': [
      {
        id: 'morocco-tour-1',
        title: 'Marrakech imperial',
        duration: '3 días',
        price: '$499',
        rating: 4.6,
        reviews: 98,
        image: IMAGES.africa.morocco['card2.jpg']
      },
      {
        id: 'morocco-tour-2',
        title: 'Fez y Meknes',
        duration: '3 días',
        price: '$499',
        rating: 4.6,
        reviews: 98,
        image: IMAGES.africa.morocco['card4.jpg']
      },
      {
        id: 'morocco-tour-3',
        title: 'Desierto del Sahara',
        duration: '4 días',
        price: '$599',
        rating: 4.7,
        reviews: 145,
        image: IMAGES.africa.morocco['card3.jpg']
      },
      {
        id: 'morocco-tour-4',
        title: 'Costa Atlantica',
        duration: '3 días',
        price: '$449',
        rating: 4.5,
        reviews: 112,
        image: IMAGES.africa.morocco['card5.jpg']
      }
    ],
    'kenya': [
      {
        id: 'kenya-tour-1',
        title: 'Safari clasico de Kenya',
        duration: '5 días',
        price: '$899',
        rating: 4.8,
        reviews: 145,
        image: IMAGES.africa.kenya['card2.jpg']
      },
      {
        id: 'kenya-tour-2',
        title: 'Nairobi urbana',
        duration: '5 días',
        price: '$899',
        rating: 4.8,
        reviews: 145,
        image: IMAGES.africa.kenya['card4.jpg']
      },
      {
        id: 'kenya-tour-3',
        title: 'Costa de Kenya',
        duration: '3 días',
        price: '$549',
        rating: 4.6,
        reviews: 98,
        image: IMAGES.africa.kenya['card3.jpg']
      },
      {
        id: 'kenya-tour-4',
        title: 'Monte Kenya',
        duration: '4 días',
        price: '$699',
        rating: 4.7,
        reviews: 123,
        image: IMAGES.africa.kenya['card5.jpg']
      }
    ]
  },
  'asia': {
    'japan': [
      {
        id: 'japan-tour-1',
        title: 'Tokio Moderno y Tradicional',
        duration: '7 días',
        price: '$1199',
        rating: 4.9,
        reviews: 267,
        image: IMAGES.asia.japan['card1.jpg']
      },
      {
        id: 'japan-tour-2',
        title: 'Osaka y Kobe gastronomico',
        duration: '10 días',
        price: '$1499',
        rating: 4.8,
        reviews: 198,
        image: IMAGES.asia.japan['card2.jpg']
      },
      {
        id: 'japan-tour-3',
        title: 'Cultura japonesa profunda',
        duration: '5 días',
        price: '$899',
        rating: 4.7,
        reviews: 134,
        image: IMAGES.asia.japan['card4.jpg']
      },
      {
        id: 'japan-tour-4',
        title: 'Hokkaido natural',
        duration: '6 días',
        price: '$1099',
        rating: 4.8,
        reviews: 189,
        image: IMAGES.asia.japan['card3.jpg']
      }
    ],
    'china': [
      {
        id: 'china-tour-1',
        title: 'Beijing Imperial',
        duration: '7 días',
        price: '$999',
        rating: 4.7,
        reviews: 223,
        image: IMAGES.asia.china['card1.jpg']
      },
      {
        id: 'china-tour-2',
        title: 'La Gran Muralla',
        duration: '5 días',
        price: '$799',
        rating: 4.8,
        reviews: 178,
        image: IMAGES.asia.china['card2.jpg']
      },
      {
        id: 'china-tour-3',
        title: 'Xian imperial',
        duration: '3 días',
        price: '$599',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.asia.china['card4.jpg']
      },
      {
        id: 'china-tour-4',
        title: 'Shanghai Moderno',
        duration: '4 días',
        price: '$699',
        rating: 4.7,
        reviews: 156,
        image: IMAGES.asia.china['card3.jpg']
      }
    ],
    'india': [
      {
        id: 'india-tour-1',
        title: 'Delhi Histórica',
        duration: '5 días',
        price: '$699',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.asia.india['card1.jpg']
      },
      {
        id: 'india-tour-2',
        title: 'Taj Mahal Express',
        duration: '4 días',
        price: '$599',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.asia.india['card2.jpg']
      },
      {
        id: 'india-tour-3',
        title: 'Varanasi espiritual',
        duration: '6 días',
        price: '$799',
        rating: 4.7,
        reviews: 189,
        image: IMAGES.asia.india['card3.jpg']
      },
      {
        id: 'india-tour-4',
        title: 'Goa playas',
        duration: '5 días',
        price: '$649',
        rating: 4.5,
        reviews: 145,
        image: IMAGES.asia.india['card4.jpg']
      }
    ],
    'indonesia': [
      {
        id: 'indonesia-tour-1',
        title: 'Jakarta Vibrante',
        duration: '4 días',
        price: '$549',
        rating: 4.5,
        reviews: 89,
        image: IMAGES.asia.indonesia['card1.jpg']
      },
      {
        id: 'indonesia-tour-2',
        title: 'Bali tropical',
        duration: '7 días',
        price: '$899',
        rating: 4.8,
        reviews: 267,
        image: IMAGES.asia.indonesia['card2.jpg']
      },
      {
        id: 'indonesia-tour-3',
        title: 'Yogyakarta Cultural',
        duration: '5 días',
        price: '$649',
        rating: 4.6,
        reviews: 156,
        image: IMAGES.asia.indonesia['card3.jpg']
      },
      {
        id: 'indonesia-tour-4',
        title: 'Surabaya Histórica',
        duration: '4 días',
        price: '$499',
        rating: 4.4,
        reviews: 123,
        image: IMAGES.asia.indonesia['card4.jpg']
      }
    ],
    'thailand': [
      {
        id: 'thailand-tour-1',
        title: 'Bangkok Auténtico',
        duration: '6 días',
        price: '$749',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.asia.thailand['card2.jpg']
      },
      {
        id: 'thailand-tour-2',
        title: 'Chiang Mai Tradicional',
        duration: '5 días',
        price: '$649',
        rating: 4.7,
        reviews: 189,
        image: IMAGES.asia.thailand['card3.jpg']
      },
      {
        id: 'thailand-tour-3',
        title: 'Phuket Tropical',
        duration: '7 días',
        price: '$899',
        rating: 4.8,
        reviews: 267,
        image: IMAGES.asia.thailand['card4.jpg']
      },
      {
        id: 'thailand-tour-4',
        title: 'Ayutthaya Histórica',
        duration: '4 días',
        price: '$549',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.asia.thailand['card5.jpg']
      }
    ],
    'philippines': [
      {
        id: 'philippines-tour-1',
        title: 'Manila Colonial',
        duration: '4 días',
        price: '$599',
        rating: 4.7,
        reviews: 156,
        image: IMAGES.asia.philippines['card2.jpg']
      },
      {
        id: 'philippines-tour-2',
        title: 'Cebú Histórica',
        duration: '5 días',
        price: '$699',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.asia.philippines['card3.jpg']
      },
      {
        id: 'philippines-tour-3',
        title: 'Palawan Salvaje',
        duration: '6 días',
        price: '$799',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.asia.philippines['card4.jpg']
      },
      {
        id: 'philippines-tour-4',
        title: 'Davao Natural',
        duration: '4 días',
        price: '$549',
        rating: 4.5,
        reviews: 134,
        image: IMAGES.asia.philippines['card5.jpg']
      }
    ],
    'singapore': [
      {
        id: 'singapore-tour-1',
        title: 'Marina Bay Experience',
        duration: '3 días',
        price: '$699',
        rating: 4.9,
        reviews: 289,
        image: IMAGES.asia.singapore['card2.jpg']
      },
      {
        id: 'singapore-tour-2',
        title: 'Sentosa Island',
        duration: '4 días',
        price: '$799',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.asia.singapore['card3.jpg']
      },
      {
        id: 'singapore-tour-3',
        title: 'Chinatown Cultural',
        duration: '3 días',
        price: '$599',
        rating: 4.7,
        reviews: 189,
        image: IMAGES.asia.singapore['card4.jpg']
      },
      {
        id: 'singapore-tour-4',
        title: 'Jurong Bird Park',
        duration: '2 días',
        price: '$449',
        rating: 4.6,
        reviews: 156,
        image: IMAGES.asia.singapore['card5.jpg']
      }
    ]
  },
  'europe': {
    'france': [
      {
        id: 'france-tour-1',
        title: 'París y Castillos del Loira',
        duration: '6 días',
        price: '$1,399',
        rating: 4.8,
        reviews: 345,
        image: IMAGES.europe.france['card2.jpg']
      },
      {
        id: 'france-tour-2',
        title: 'Riviera Francesa y Provenza',
        duration: '7 días',
        price: '$1,599',
        rating: 4.9,
        reviews: 234,
        image: IMAGES.europe.france['card3.jpg']
      },
      {
        id: 'france-tour-3',
        title: 'Normandía y Bretaña Histórica',
        duration: '5 días',
        price: '$1,199',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.france['card4.jpg']
      },
      {
        id: 'france-tour-4',
        title: 'Gastronomía Francesa',
        duration: '5 días',
        price: '$1,199',
        rating: 4.8,
        reviews: 267,
        image: IMAGES.europe.france['card5.jpg']
      }
    ],
    'germany': [
      {
        id: 'germany-tour-1',
        title: 'Berlín y la Ruta de la Historia',
        duration: '5 días',
        price: '$999',
        rating: 4.7,
        reviews: 223,
        image: IMAGES.europe.germany['card2.jpg']
      },
      {
        id: 'germany-tour-2',
        title: 'Baviera y Castillos de Ensueño',
        duration: '6 días',
        price: '$1,399',
        rating: 4.8,
        reviews: 178,
        image: IMAGES.europe.germany['card3.jpg']
      },
      {
        id: 'germany-tour-3',
        title: 'Hamburgo y el Norte Marítimo',
        duration: '4 días',
        price: '$899',
        rating: 4.6,
        reviews: 156,
        image: IMAGES.europe.germany['card4.jpg']
      },
      {
        id: 'germany-tour-4',
        title: 'Selva Negra y Ruta de los Relojes',
        duration: '5 días',
        price: '$1,099',
        rating: 4.5,
        reviews: 134,
        image: IMAGES.europe.germany['card5.jpg']
      }
    ],
    'spain': [
      {
        id: 'spain-tour-1',
        title: 'Madrid y Castilla Histórica',
        duration: '5 días',
        price: '$999',
        rating: 4.6,
        reviews: 189,
        image: IMAGES.europe.spain['card2.jpg']
      },
      {
        id: 'spain-tour-2',
        title: 'Andalucía y el Sur Mágico',
        duration: '7 días',
        price: '$1,399',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.europe.spain['card3.jpg']
      },
      {
        id: 'spain-tour-3',
        title: 'Barcelona y Cataluña Moderna',
        duration: '5 días',
        price: '$1,099',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.spain['card4.jpg']
      },
      {
        id: 'spain-tour-4',
        title: 'Islas Canarias y Paraíso Atlántico',
        duration: '6 días',
        price: '$1,299',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.europe.spain['card5.jpg']
      }
    ],
    'italy': [
      {
        id: 'italy-tour-1',
        title: 'Roma, Florencia y Venecia',
        duration: '7 días',
        price: '$1,599',
        rating: 4.8,
        reviews: 267,
        image: IMAGES.europe.italy['card2.jpg']
      },
      {
        id: 'italy-tour-2',
        title: 'Costa Amalfitana y Sur de Italia',
        duration: '6 días',
        price: '$1,399',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.italy['card3.jpg']
      },
      {
        id: 'italy-tour-3',
        title: 'Milán, Lagos y Alpes Italianos',
        duration: '5 días',
        price: '$1,199',
        rating: 4.6,
        reviews: 156,
        image: IMAGES.europe.italy['card4.jpg']
      },
      {
        id: 'italy-tour-4',
        title: 'Sicilia y Cultura Mediterránea',
        duration: '8 días',
        price: '$1,799',
        rating: 4.8,
        reviews: 223,
        image: IMAGES.europe.italy['card5.jpg']
      }
    ],
    'united-kingdom': [
      {
        id: 'uk-tour-1',
        title: 'Londres Clásico',
        duration: '5 días',
        price: '$899',
        rating: 4.7,
        reviews: 234,
        image: IMAGES.europe['united-kingdom']['card2.jpg']
      },
      {
        id: 'uk-tour-2',
        title: 'Inglaterra Medieval',
        duration: '6 días',
        price: '$1,099',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.europe['united-kingdom']['card3.jpg']
      },
      {
        id: 'uk-tour-3',
        title: 'Escocia Mística',
        duration: '7 días',
        price: '$1,299',
        rating: 4.8,
        reviews: 198,
        image: IMAGES.europe['united-kingdom']['card4.jpg']
      },
      {
        id: 'uk-tour-4',
        title: 'Gales y Castillos',
        duration: '4 días',
        price: '$799',
        rating: 4.5,
        reviews: 134,
        image: IMAGES.europe['united-kingdom']['card5.jpg']
      }
    ],
    'greece': [
      {
        id: 'greece-tour-1',
        title: 'Atenas y Clásicos de la Antigüedad',
        duration: '5 días',
        price: '$999',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.europe.greece['card2.jpg']
      },
      {
        id: 'greece-tour-2',
        title: 'Islas Cicladas (Santorini y Mykonos)',
        duration: '6 días',
        price: '$1,499',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.europe.greece['card3.jpg']
      },
      {
        id: 'greece-tour-3',
        title: 'Creta y el Sur Griego',
        duration: '6 días',
        price: '$1,399',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.greece['card4.jpg']
      },
      {
        id: 'greece-tour-4',
        title: 'Tesalónica y Macedonia',
        duration: '5 días',
        price: '$1,199',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.europe.greece['card5.jpg']
      }
    ],
    'austria': [
      {
        id: 'austria-tour-1',
        title: 'Viena Imperial',
        duration: '5 días',
        price: '$899',
        rating: 4.9,
        reviews: 289,
        image: IMAGES.europe.austria['card2.jpg']
      },
      {
        id: 'austria-tour-2',
        title: 'Salzburgo y los Alpes',
        duration: '6 días',
        price: '$1,099',
        rating: 4.8,
        reviews: 223,
        image: IMAGES.europe.austria['card3.jpg']
      },
      {
        id: 'austria-tour-3',
        title: 'Tirol y Aventura Alpina',
        duration: '7 días',
        price: '$1,299',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.austria['card4.jpg']
      },
      {
        id: 'austria-tour-4',
        title: 'Austria Escénica',
        duration: '4 días',
        price: '$799',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.europe.austria['card5.jpg']
      }
    ],
    'netherlands': [
      {
        id: 'netherlands-tour-1',
        title: 'Ámsterdam Cultural',
        duration: '4 días',
        price: '$749',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.netherlands['card2.jpg']
      },
      {
        id: 'netherlands-tour-2',
        title: 'Holanda y Tulipanes',
        duration: '5 días',
        price: '$899',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.europe.netherlands['card3.jpg']
      },
      {
        id: 'netherlands-tour-3',
        title: 'Rotterdam Moderna',
        duration: '3 días',
        price: '$599',
        rating: 4.5,
        reviews: 134,
        image: IMAGES.europe.netherlands['card4.jpg']
      },
      {
        id: 'netherlands-tour-4',
        title: 'La Haya y Costa',
        duration: '4 días',
        price: '$699',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.europe.netherlands['card5.jpg']
      }
    ],
    'switzerland': [
      {
        id: 'switzerland-tour-1',
        title: 'Zúrich Financiera',
        duration: '3 días',
        price: '$799',
        rating: 4.8,
        reviews: 223,
        image: IMAGES.europe.switzerland['card2.jpg']
      },
      {
        id: 'switzerland-tour-2',
        title: 'Alpes Suizos',
        duration: '6 días',
        price: '$1,299',
        rating: 4.9,
        reviews: 267,
        image: IMAGES.europe.switzerland['card3.jpg']
      },
      {
        id: 'switzerland-tour-3',
        title: 'Ginebra y Lago Lemán',
        duration: '4 días',
        price: '$899',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.switzerland['card4.jpg']
      },
      {
        id: 'switzerland-tour-4',
        title: 'Berna Medieval',
        duration: '3 días',
        price: '$699',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.europe.switzerland['card5.jpg']
      }
    ],
    'portugal': [
      {
        id: 'portugal-tour-1',
        title: 'Lisboa Histórica',
        duration: '4 días',
        price: '$649',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.europe.portugal['card2.jpg']
      },
      {
        id: 'portugal-tour-2',
        title: 'Oporto y Vino',
        duration: '5 días',
        price: '$799',
        rating: 4.7,
        reviews: 178,
        image: IMAGES.europe.portugal['card3.jpg']
      },
      {
        id: 'portugal-tour-3',
        title: 'Algarve y Playas',
        duration: '6 días',
        price: '$999',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.europe.portugal['card4.jpg']
      },
      {
        id: 'portugal-tour-4',
        title: 'Madeira y Naturaleza',
        duration: '5 días',
        price: '$899',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.europe.portugal['card5.jpg']
      }
    ],
    'turkey': [
      {
        id: 'turkey-tour-1',
        title: 'Estambul Mágica',
        duration: '6 días',
        price: '$899',
        rating: 4.7,
        reviews: 234,
        image: IMAGES.europe.turkey['card2.jpg']
      },
      {
        id: 'turkey-tour-2',
        title: 'Capadocia y Globos',
        duration: '5 días',
        price: '$799',
        rating: 4.8,
        reviews: 198,
        image: IMAGES.europe.turkey['card3.jpg']
      },
      {
        id: 'turkey-tour-3',
        title: 'Costa Turca',
        duration: '7 días',
        price: '$1,099',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.europe.turkey['card4.jpg']
      },
      {
        id: 'turkey-tour-4',
        title: 'Ankara y Anatolia',
        duration: '4 días',
        price: '$649',
        rating: 4.5,
        reviews: 134,
        image: IMAGES.europe.turkey['card5.jpg']
      }
    ],
    'russia': [
      {
        id: 'russia-tour-1',
        title: 'Moscú Imperial',
        duration: '7 días',
        price: '$1,099',
        rating: 4.5,
        reviews: 178,
        image: IMAGES.europe.russia['card2.jpg']
      },
      {
        id: 'russia-tour-2',
        title: 'San Petersburgo Cultural',
        duration: '6 días',
        price: '$999',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.europe.russia['card3.jpg']
      },
      {
        id: 'russia-tour-3',
        title: 'Transiberiano',
        duration: '10 días',
        price: '$1,599',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.europe.russia['card4.jpg']
      },
      {
        id: 'russia-tour-4',
        title: 'Lago Baikal',
        duration: '8 días',
        price: '$1,299',
        rating: 4.8,
        reviews: 167,
        image: IMAGES.europe.russia['card5.jpg']
      }
    ]
  },
  'northamerica': {
    'canada': [
      {
        id: 'canada-tour-1',
        title: 'Toronto Multicultural',
        duration: '5 días',
        price: '$899',
        rating: 4.7,
        reviews: 223,
        image: IMAGES.northamerica.canada['card2.jpg']
      },
      {
        id: 'canada-tour-2',
        title: 'Montañas Rocosas',
        duration: '8 días',
        price: '$1,299',
        rating: 4.8,
        reviews: 267,
        image: IMAGES.northamerica.canada['card3.jpg']
      },
      {
        id: 'canada-tour-3',
        title: 'Cataratas del Niágara',
        duration: '3 días',
        price: '$599',
        rating: 4.6,
        reviews: 189,
        image: IMAGES.northamerica.canada['card4.jpg']
      },
      {
        id: 'canada-tour-4',
        title: 'Vancouver Natural',
        duration: '6 días',
        price: '$999',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.northamerica.canada['card5.jpg']
      }
    ],
    'panama': [
      {
        id: 'panama-tour-1',
        title: 'Canal de Panamá',
        duration: '4 días',
        price: '$699',
        rating: 4.6,
        reviews: 156,
        image: IMAGES.northamerica.panama['card2.jpg']
      },
      {
        id: 'panama-tour-2',
        title: 'Casco Viejo Colonial',
        duration: '3 días',
        price: '$549',
        rating: 4.5,
        reviews: 134,
        image: IMAGES.northamerica.panama['card3.jpg']
      },
      {
        id: 'panama-tour-3',
        title: 'Bocas del Toro',
        duration: '5 días',
        price: '$799',
        rating: 4.7,
        reviews: 178,
        image: IMAGES.northamerica.panama['card4.jpg']
      },
      {
        id: 'panama-tour-4',
        title: 'San Blas y Kuna Yala',
        duration: '4 días',
        price: '$649',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.northamerica.panama['card5.jpg']
      }
    ],
    'united-states': [
      {
        id: 'us-tour-1',
        title: 'Nueva York Icono',
        duration: '6 días',
        price: '$1,199',
        rating: 4.8,
        reviews: 345,
        image: IMAGES.northamerica['united-states']['card2.jpg']
      },
      {
        id: 'us-tour-2',
        title: 'California y Costa Oeste',
        duration: '8 días',
        price: '$1,499',
        rating: 4.7,
        reviews: 267,
        image: IMAGES.northamerica['united-states']['card3.jpg']
      },
      {
        id: 'us-tour-3',
        title: 'Florida y Parques',
        duration: '7 días',
        price: '$1,299',
        rating: 4.6,
        reviews: 198,
        image: IMAGES.northamerica['united-states']['card4.jpg']
      },
      {
        id: 'us-tour-4',
        title: 'Las Vegas y Desierto',
        duration: '5 días',
        price: '$999',
        rating: 4.5,
        reviews: 178,
        image: IMAGES.northamerica['united-states']['card5.jpg']
      }
    ],
    'mexico': [
      {
        id: 'mexico-tour-1',
        title: 'Ciudad de México',
        duration: '5 días',
        price: '$699',
        rating: 4.7,
        reviews: 234,
        image: IMAGES.northamerica.mexico['card2.jpg']
      },
      {
        id: 'mexico-tour-2',
        title: 'Cancún y Riviera Maya',
        duration: '6 días',
        price: '$899',
        rating: 4.8,
        reviews: 267,
        image: IMAGES.northamerica.mexico['card3.jpg']
      },
      {
        id: 'mexico-tour-3',
        title: 'Guadalajara y Tequila',
        duration: '4 días',
        price: '$599',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.northamerica.mexico['card4.jpg']
      },
      {
        id: 'mexico-tour-4',
        title: 'Oaxaca Cultural',
        duration: '5 días',
        price: '$649',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.northamerica.mexico['card5.jpg']
      }
    ],
    'guatemala': [
      {
        id: 'guatemala-tour-1',
        title: 'Guatemala Maya',
        duration: '4 días',
        price: '$549',
        rating: 4.5,
        reviews: 123,
        image: IMAGES.northamerica.guatemala['card2.jpg']
      },
      {
        id: 'guatemala-tour-2',
        title: 'Lago Atitlán',
        duration: '5 días',
        price: '$649',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.northamerica.guatemala['card3.jpg']
      },
      {
        id: 'guatemala-tour-3',
        title: 'Chichicastenango',
        duration: '3 días',
        price: '$399',
        rating: 4.4,
        reviews: 98,
        image: IMAGES.northamerica.guatemala['card4.jpg']
      },
      {
        id: 'guatemala-tour-4',
        title: 'Semuc Champey',
        duration: '4 días',
        price: '$499',
        rating: 4.5,
        reviews: 134,
        image: IMAGES.northamerica.guatemala['card5.jpg']
      }
    ],
    'dominican-republic': [
      {
        id: 'dr-tour-1',
        title: 'Santo Domingo Colonial',
        duration: '4 días',
        price: '$599',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.northamerica['dominican-republic']['card2.jpg']
      },
      {
        id: 'dr-tour-2',
        title: 'Punta Cana Paradise',
        duration: '5 días',
        price: '$799',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.northamerica['dominican-republic']['card3.jpg']
      },
      {
        id: 'dr-tour-3',
        title: 'Samaná Natural',
        duration: '4 días',
        price: '$649',
        rating: 4.5,
        reviews: 145,
        image: IMAGES.northamerica['dominican-republic']['card4.jpg']
      },
      {
        id: 'dr-tour-4',
        title: 'La Romana y Bayahibe',
        duration: '4 días',
        price: '$549',
        rating: 4.6,
        reviews: 134,
        image: IMAGES.northamerica['dominican-republic']['card5.jpg']
      }
    ],
    'honduras': [
      {
        id: 'honduras-tour-1',
        title: 'Tegucigalpa Natural',
        duration: '3 días',
        price: '$449',
        rating: 4.5,
        reviews: 98,
        image: IMAGES.northamerica.honduras['card2.jpg']
      },
      {
        id: 'honduras-tour-2',
        title: 'Copán Ruinas',
        duration: '4 días',
        price: '$549',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.northamerica.honduras['card3.jpg']
      },
      {
        id: 'honduras-tour-3',
        title: 'Islas de la Bahía',
        duration: '5 días',
        price: '$799',
        rating: 4.7,
        reviews: 178,
        image: IMAGES.northamerica.honduras['card4.jpg']
      },
      {
        id: 'honduras-tour-4',
        title: 'Lago Yojoa',
        duration: '3 días',
        price: '$399',
        rating: 4.4,
        reviews: 87,
        image: IMAGES.northamerica.honduras['card5.jpg']
      }
    ],
    'nicaragua': [
      {
        id: 'nicaragua-tour-1',
        title: 'Managua Volcánica',
        duration: '3 días',
        price: '$399',
        rating: 4.4,
        reviews: 87,
        image: IMAGES.northamerica.nicaragua['card2.jpg']
      },
      {
        id: 'nicaragua-tour-2',
        title: 'Granada Colonial',
        duration: '4 días',
        price: '$499',
        rating: 4.5,
        reviews: 123,
        image: IMAGES.northamerica.nicaragua['card3.jpg']
      },
      {
        id: 'nicaragua-tour-3',
        title: 'León y Volcanes',
        duration: '4 días',
        price: '$449',
        rating: 4.6,
        reviews: 134,
        image: IMAGES.northamerica.nicaragua['card4.jpg']
      },
      {
        id: 'nicaragua-tour-4',
        title: 'San Juan del Sur',
        duration: '3 días',
        price: '$399',
        rating: 4.5,
        reviews: 98,
        image: IMAGES.northamerica.nicaragua['card5.jpg']
      }
    ]
  },
  'oceania': {
    'australia': [
      {
        id: 'australia-tour-1',
        title: 'Sídney Icónico',
        duration: '6 días',
        price: '$1,299',
        rating: 4.7,
        reviews: 289,
        image: IMAGES.oceania.australia['card2.jpg']
      },
      {
        id: 'australia-tour-2',
        title: 'Gran Barrera de Coral',
        duration: '8 días',
        price: '$1,599',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.oceania.australia['card3.jpg']
      },
      {
        id: 'australia-tour-3',
        title: 'Outback Australiano',
        duration: '7 días',
        price: '$1,399',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.oceania.australia['card4.jpg']
      },
      {
        id: 'australia-tour-4',
        title: 'Melbourne Cultural',
        duration: '5 días',
        price: '$1,099',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.oceania.australia['card5.jpg']
      }
    ],
    'new-zealand': [
      {
        id: 'nz-tour-1',
        title: 'Auckland de las Velas',
        duration: '5 días',
        price: '$999',
        rating: 4.8,
        reviews: 223,
        image: IMAGES.oceania['new-zealand']['card2.jpg']
      },
      {
        id: 'nz-tour-2',
        title: 'Wellington y Cultura',
        duration: '4 días',
        price: '$799',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.oceania['new-zealand']['card3.jpg']
      },
      {
        id: 'nz-tour-3',
        title: 'Christchurch y Canterbury',
        duration: '5 días',
        price: '$899',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.oceania['new-zealand']['card4.jpg']
      },
      {
        id: 'nz-tour-4',
        title: 'Queenstown y Aventura',
        duration: '6 días',
        price: '$1,199',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.oceania['new-zealand']['card5.jpg']
      }
    ],
    'fiji': [
      {
        id: 'fiji-tour-1',
        title: 'Suva Tropical',
        duration: '4 días',
        price: '$799',
        rating: 4.6,
        reviews: 156,
        image: IMAGES.oceania.fiji['card2.jpg']
      },
      {
        id: 'fiji-tour-2',
        title: 'Islas Mamanuca',
        duration: '5 días',
        price: '$999',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.oceania.fiji['card3.jpg']
      },
      {
        id: 'fiji-tour-3',
        title: 'Yasawa Islands',
        duration: '6 días',
        price: '$1,199',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.oceania.fiji['card4.jpg']
      },
      {
        id: 'fiji-tour-4',
        title: 'Tavaruni Island',
        duration: '4 días',
        price: '$899',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.oceania.fiji['card5.jpg']
      }
    ]
  },
  'southamerica': {
    'argentina': [
      {
        id: 'argentina-tour-1',
        title: 'Buenos Aires Tango',
        duration: '6 días',
        price: '$899',
        rating: 4.7,
        reviews: 234,
        image: IMAGES.southamerica.argentina['card2.jpg']
      },
      {
        id: 'argentina-tour-2',
        title: 'Patagonia Salvaje',
        duration: '10 días',
        price: '$1,899',
        rating: 4.8,
        reviews: 198,
        image: IMAGES.southamerica.argentina['card3.jpg']
      },
      {
        id: 'argentina-tour-3',
        title: 'Cataratas del Iguazú',
        duration: '4 días',
        price: '$699',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.southamerica.argentina['card4.jpg']
      },
      {
        id: 'argentina-tour-4',
        title: 'Mendoza Vinícola',
        duration: '5 días',
        price: '$799',
        rating: 4.7,
        reviews: 178,
        image: IMAGES.southamerica.argentina['card5.jpg']
      }
    ],
    'brazil': [
      {
        id: 'brazil-tour-1',
        title: 'Río de Janeiro Vibrante',
        duration: '7 días',
        price: '$1,099',
        rating: 4.8,
        reviews: 289,
        image: IMAGES.southamerica.brazil['card2.jpg']
      },
      {
        id: 'brazil-tour-2',
        title: 'Amazonas Profundo',
        duration: '8 días',
        price: '$1,299',
        rating: 4.7,
        reviews: 223,
        image: IMAGES.southamerica.brazil['card3.jpg']
      },
      {
        id: 'brazil-tour-3',
        title: 'São Paulo Moderno',
        duration: '5 días',
        price: '$799',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.southamerica.brazil['card4.jpg']
      },
      {
        id: 'brazil-tour-4',
        title: 'Salvador de Bahía',
        duration: '6 días',
        price: '$899',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.southamerica.brazil['card5.jpg']
      }
    ],
    'chile': [
      {
        id: 'chile-tour-1',
        title: 'Santiago Andino',
        duration: '5 días',
        price: '$749',
        rating: 4.6,
        reviews: 189,
        image: IMAGES.southamerica.chile['card2.jpg']
      },
      {
        id: 'chile-tour-2',
        title: 'Valle de la Luna',
        duration: '6 días',
        price: '$1,099',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.southamerica.chile['card3.jpg']
      },
      {
        id: 'chile-tour-3',
        title: 'Isla de Pascua',
        duration: '5 días',
        price: '$1,299',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.southamerica.chile['card4.jpg']
      },
      {
        id: 'chile-tour-4',
        title: 'Patagonia Chilena',
        duration: '7 días',
        price: '$1,499',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.southamerica.chile['card5.jpg']
      }
    ],
    'colombia': [
      {
        id: 'colombia-tour-1',
        title: 'Bogotá Cultural',
        duration: '4 días',
        price: '$599',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.southamerica.colombia['card2.jpg']
      },
      {
        id: 'colombia-tour-2',
        title: 'Cartagena Colonial',
        duration: '5 días',
        price: '$799',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.southamerica.colombia['card3.jpg']
      },
      {
        id: 'colombia-tour-3',
        title: 'Medellín Moderno',
        duration: '4 días',
        price: '$649',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.southamerica.colombia['card4.jpg']
      },
      {
        id: 'colombia-tour-4',
        title: 'Café Colombiano',
        duration: '6 días',
        price: '$899',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.southamerica.colombia['card5.jpg']
      }
    ],
    'peru': [
      {
        id: 'peru-tour-1',
        title: 'Lima Gastronómica',
        duration: '4 días',
        price: '$649',
        rating: 4.5,
        reviews: 167,
        image: IMAGES.southamerica.peru['card2.jpg']
      },
      {
        id: 'peru-tour-2',
        title: 'Machu Picchu Místico',
        duration: '6 días',
        price: '$1,199',
        rating: 4.8,
        reviews: 234,
        image: IMAGES.southamerica.peru['card3.jpg']
      },
      {
        id: 'peru-tour-3',
        title: 'Arequipa Colonial',
        duration: '5 días',
        price: '$899',
        rating: 4.6,
        reviews: 178,
        image: IMAGES.southamerica.peru['card4.jpg']
      },
      {
        id: 'peru-tour-4',
        title: 'Lago Titicaca',
        duration: '5 días',
        price: '$999',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.southamerica.peru['card5.jpg']
      }
    ],
    'ecuador': [
      {
        id: 'ecuador-tour-1',
        title: 'Quito Colonial',
        duration: '3 días',
        price: '$499',
        rating: 4.6,
        reviews: 145,
        image: IMAGES.southamerica.ecuador['card2.jpg']
      },
      {
        id: 'ecuador-tour-2',
        title: 'Galápagos Salvaje',
        duration: '7 días',
        price: '$1,599',
        rating: 4.9,
        reviews: 267,
        image: IMAGES.southamerica.ecuador['card3.jpg']
      },
      {
        id: 'ecuador-tour-3',
        title: 'Cuenca Cultural',
        duration: '4 días',
        price: '$649',
        rating: 4.7,
        reviews: 178,
        image: IMAGES.southamerica.ecuador['card4.jpg']
      },
      {
        id: 'ecuador-tour-4',
        title: 'Amazonas Ecuatoriano',
        duration: '5 días',
        price: '$899',
        rating: 4.6,
        reviews: 198,
        image: IMAGES.southamerica.ecuador['card5.jpg']
      }
    ],
    'bolivia': [
      {
        id: 'bolivia-tour-1',
        title: 'La Paz Andina',
        duration: '4 días',
        price: '$549',
        rating: 4.4,
        reviews: 123,
        image: IMAGES.southamerica.bolivia['card2.jpg']
      },
      {
        id: 'bolivia-tour-2',
        title: 'Salar de Uyuni',
        duration: '6 días',
        price: '$1,099',
        rating: 4.7,
        reviews: 198,
        image: IMAGES.southamerica.bolivia['card3.jpg']
      },
      {
        id: 'bolivia-tour-3',
        title: 'Sucre Colonial',
        duration: '4 días',
        price: '$649',
        rating: 4.5,
        reviews: 145,
        image: IMAGES.southamerica.bolivia['card4.jpg']
      },
      {
        id: 'bolivia-tour-4',
        title: 'Lago Titicaca Boliviano',
        duration: '5 días',
        price: '$699',
        rating: 4.6,
        reviews: 167,
        image: IMAGES.southamerica.bolivia['card5.jpg']
      }
    ]
  }
};

// Función helper para obtener tours de un país específico
export const getToursForCountry = (continent: string, country: string): TourData[] => {
  return TOURS_DATA[continent]?.[country] || [];
};

// Función helper para obtener todos los tours de un continente
export const getToursForContinent = (continent: string): TourData[] => {
  const continentTours = TOURS_DATA[continent];
  if (!continentTours) return [];
  
  return Object.values(continentTours).flat();
}; 