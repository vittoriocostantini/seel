interface Country {
    country: string;
    folder: string;
    images: Array<{ file: string; title: string }>;
  }
  

export const CONTINENT_COUNTRY_MAP: Record<string, Array<Country>> = {
    africa: [
      { country: 'Egypt', folder: 'egypt', images: [
        { file: 'card1.jpg', title: 'El Cairo' },
      ] },
      { country: 'Morocco', folder: 'morocco', images: [
        { file: 'card1.jpg', title: 'Marrakech' },
      ] },
      { country: 'Kenya', folder: 'kenya', images: [
        { file: 'card1.jpg', title: 'Nairobi' },
      ] },
    ],
    asia: [
      { country: 'Japan', folder: 'japan', images: [
        { file: 'card1.jpg', title: 'Tokio' },
      ] },
      { country: 'China', folder: 'china', images: [
        { file: 'card1.jpg', title: 'Pekín' },
      ] },
      { country: 'India', folder: 'india', images: [
        { file: 'card1.jpg', title: 'New Delhi' },
      ] },
      { country: 'Indonesia', folder: 'indonesia', images: [
        { file: 'card1.jpg', title: 'Jakarta' },
      ] },
      { country: 'Thailand', folder: 'thailand', images: [
        { file: 'card1.jpg', title: 'Bangkok' },
      ] },
      { country: 'Philippines', folder: 'philippines', images: [
        { file: 'card1.jpg', title: 'Manila' },
      ] },
      { country: 'Singapore', folder: 'singapore', images: [
        { file: 'card1.jpg', title: 'Singapore' },
      ] },
    ],
    europe: [
      { country: 'France', folder: 'France', images: [
        { file: 'card1.jpg', title: 'Paris' },
      ] },
      { country: 'Germany', folder: 'germany', images: [
        { file: 'card1.jpg', title: 'Berlin' },
      ] },
      { country: 'Spain', folder: 'spain', images: [
        { file: 'card1.jpg', title: 'Madrid' },
      ] },
      { country: 'Italy', folder: 'italy', images: [
        { file: 'card1.jpg', title: 'Rome' },
      ] },
      { country: 'United Kingdom', folder: 'united-kingdom', images: [
        { file: 'card1.jpg', title: 'London' },
      ] },
      { country: 'Greece', folder: 'greece', images: [
        { file: 'card1.jpg', title: 'Athens' },
      ] },
      { country: 'Austria', folder: 'austria', images: [
        { file: 'card1.jpg', title: 'Vienna' },
      ] },
      { country: 'Netherlands', folder: 'netherlands', images: [
        { file: 'card1.jpg', title: 'Amsterdam' },
      ] },
      { country: 'Switzerland', folder: 'switzerland', images: [
        { file: 'card1.jpg', title: 'Zurich' },
      ] },
      { country: 'Portugal', folder: 'portugal', images: [
        { file: 'card1.jpg', title: 'Lisbon' },
      ] },
      { country: 'Turkey', folder: 'turkey', images: [
        { file: 'card1.jpg', title: 'Istanbul' },
      ] },
      { country: 'Russia', folder: 'russia', images: [
        { file: 'card1.jpg', title: 'Moscow' },
      ] },
    ],
    'north-america': [
      { country: 'Canada', folder: 'canada', images: [
        { file: 'card1.jpg', title: 'Toronto' },
      ] },
      { country: 'Panama', folder: 'panama', images: [
        { file: 'card1.jpg', title: 'Panama City' },
      ] },
      { country: 'United States', folder: 'united-states', images: [
        { file: 'card1.jpg', title: 'New York' },
      ] },
      { country: 'Mexico', folder: 'mexico', images: [
        { file: 'card1.jpg', title: 'Mexico City' },
      ] },
      { country: 'Guatemala', folder: 'guatemala', images: [
        { file: 'card1.jpg', title: 'Guatemala City' },
      ] },
      { country: 'Dominican Republic', folder: 'dominican-republic', images: [
        { file: 'card1.jpg', title: 'Santo Domingo' },
      ] },
      { country: 'Honduras', folder: 'honduras', images: [
        { file: 'card1.jpg', title: 'Tegucigalpa' },
      ] },
      { country: 'Nicaragua', folder: 'nicaragua', images: [
        { file: 'card1.jpg', title: 'Managua' },
      ] },
    ],
    oceania: [
      { country: 'Australia', folder: 'Australia', images: [
        { file: 'card1.jpg', title: 'Sydney' },
      ] },
      { country: 'New Zealand', folder: 'new-zealand', images: [
        { file: 'card1.jpg', title: 'Auckland' },
      ] },
      { country: 'Fiji', folder: 'fiji', images: [
        { file: 'card1.jpg', title: 'Suva' },
      ] },
      { country: 'Papua New Guinea', folder: 'papua-new-guinea', images: [
        { file: 'card1.jpg', title: 'Port Moresby' },
      ] },
      { country: 'Tonga', folder: 'tonga', images: [
        { file: 'card1.jpg', title: 'Nukuʻalofa' },
      ] }
    ],
    'south-america': [
      { country: 'Argentina', folder: 'argentina', images: [
        { file: 'card1.jpg', title: 'Buenos Aires' },
      ] },
      { country: 'Brazil', folder: 'brazil', images: [
        { file: 'card1.jpg', title: 'Rio de Janeiro' },
      ] },
      { country: 'Chile', folder: 'chile', images: [
        { file: 'card1.jpg', title: 'Santiago' },
      ] },
      { country: 'Colombia', folder: 'colombia', images: [
        { file: 'card1.jpg', title: 'Bogotá' },
      ] },
      { country: 'Peru', folder: 'peru', images: [
        { file: 'card1.jpg', title: 'Lima' },
      ] },
      { country: 'Ecuador', folder: 'ecuador', images: [
        { file: 'card1.jpg', title: 'Quito' },
      ] },
      { country: 'Bolivia', folder: 'bolivia', images: [
        { file: 'card1.jpg', title: 'La Paz' },
      ] },
    ],
  };