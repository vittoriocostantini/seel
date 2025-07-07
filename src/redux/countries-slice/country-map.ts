interface Country {
    country: string;
    folder: string;
    images: Array<{ file: string; title: string }>;
    description: string;
    rating: number;
    reviews: number;
    isoCode?: string;
  }
  

export const CONTINENT_COUNTRY_MAP: Record<string, Array<Country>> = {
    africa: [
      { country: 'Egypt', folder: 'egypt', images: [
        { file: 'card1.jpg', title: 'El Cairo' },
      ], description: 'Egipto, cuna de una de las civilizaciones más antiguas del mundo, es famoso por sus majestuosas pirámides, templos y el legendario río Nilo. El Cairo, su capital, es una ciudad vibrante donde la historia y la modernidad se entrelazan. Visitar las Pirámides de Giza y la Esfinge es una experiencia única, mientras que los bazares y museos ofrecen un viaje fascinante por la cultura egipcia.', rating: 4.8, reviews: 234 },
      { country: 'Morocco', folder: 'morocco', images: [
        { file: 'card1.jpg', title: 'Tinmel Mosque' },
      ], description: 'La Mezquita de Tinmel, ubicada en las montañas del Alto Atlas de Marruecos, es un tesoro arquitectónico del siglo XII que representa el esplendor de la dinastía almohade. Esta joya histórica, construida en piedra y adobe, destaca por su diseño geométrico único y su ubicación estratégica en el valle de Nfis. La mezquita es un testimonio de la rica herencia islámica de Marruecos y ofrece a los visitantes una experiencia espiritual y cultural única en un entorno de montañas impresionantes.', rating: 4.7, reviews: 210 },
      { country: 'Kenya', folder: 'kenya', images: [
        { file: 'card1.jpg', title: 'Nairobi' },
      ], description: 'Kenia es el corazón de los safaris africanos, famoso por sus vastas sabanas y abundante vida salvaje. Nairobi, su capital, combina la modernidad urbana con la proximidad a parques nacionales como el Nairobi National Park, donde se pueden ver leones, jirafas y rinocerontes con el horizonte de la ciudad de fondo. Es el destino ideal para los amantes de la naturaleza y la aventura.', rating: 4.6, reviews: 190 },
    ],
    asia: [
      { country: 'Japan', folder: 'japan', images: [
        { file: 'card1.jpg', title: 'Tokio' },
      ], description: 'Japón es un país donde la tradición milenaria y la tecnología de vanguardia conviven en perfecta armonía. Tokio, su capital, es una metrópolis vibrante llena de rascacielos, templos antiguos y barrios temáticos. Desde la tranquilidad de los jardines imperiales hasta la energía de Shibuya, Japón ofrece una experiencia cultural única y fascinante.', rating: 4.9, reviews: 250 },
      { country: 'China', folder: 'china', images: [
        { file: 'card1.jpg', title: 'Beijing' },
      ], description: 'Beijing, la capital milenaria de China, es una metrópolis donde la historia imperial se fusiona con la modernidad. La majestuosa Ciudad Prohibida, residencia de emperadores durante siglos, contrasta con el vibrante distrito financiero. Desde la Gran Muralla en las afueras hasta los hutongs tradicionales, Beijing ofrece una experiencia única que combina palacios antiguos, templos budistas y una gastronomía excepcional que refleja la rica herencia cultural china.', rating: 4.7, reviews: 200 },
      { country: 'India', folder: 'india', images: [
        { file: 'card1.jpg', title: 'New Delhi' },
      ], description: 'India es un país de colores intensos, espiritualidad profunda y una historia milenaria. Nueva Delhi, su capital, es un mosaico de monumentos históricos, templos y bazares bulliciosos. Desde el majestuoso Fuerte Rojo hasta la serenidad de la Puerta de la India, cada rincón ofrece una experiencia sensorial única.', rating: 4.6, reviews: 180 },
      { country: 'Indonesia', folder: 'indonesia', images: [
        { file: 'card1.jpg', title: 'Jakarta' },
      ], description: 'Indonesia, el mayor archipiélago del mundo, es famoso por sus playas paradisíacas, volcanes y selvas tropicales. Yakarta, la capital, es una ciudad dinámica que mezcla la modernidad con la tradición. Desde Bali hasta Borneo, Indonesia es un destino ideal para los amantes de la naturaleza y la aventura.', rating: 4.5, reviews: 170 },
      { country: 'Thailand', folder: 'thailand', images: [
        { file: 'card1.jpg', title: 'Bangkok' },
      ], description: 'Tailandia es conocida por su hospitalidad, templos dorados y playas de ensueño. Bangkok, la capital, es una ciudad vibrante donde los mercados flotantes, palacios y la vida nocturna crean una atmósfera única. La gastronomía tailandesa y la calidez de su gente hacen de este país un destino inolvidable.', rating: 4.8, reviews: 220 },
      { country: 'Philippines', folder: 'philippines', images: [
        { file: 'card1.jpg', title: 'Manila' },
      ], description: 'Filipinas es un archipiélago de más de 7,000 islas, famoso por sus playas de arena blanca, aguas cristalinas y hospitalidad. Manila, la capital, combina historia colonial, modernidad y una vibrante vida cultural. Es el punto de partida ideal para explorar paraísos como Palawan y Boracay.', rating: 4.7, reviews: 200 },
      { country: 'Singapore', folder: 'singapore', images: [
        { file: 'card1.jpg', title: 'Marina Bay, Singapore' },
      ], description: 'Marina Bay es el corazón moderno de Singapur, donde la arquitectura futurista se encuentra con la innovación urbana. El icónico Marina Bay Sands, con su piscina infinita en la azotea, domina el skyline junto a los espectaculares Gardens by the Bay y sus Supertrees. Esta zona emblemática representa la visión de Singapur como ciudad del futuro, con rascacielos de cristal, el Merlion y el espectáculo nocturno de luces y agua que transforma la bahía en un escenario mágico.', rating: 4.9, reviews: 240 },
    ],
    europe: [
      { country: 'France', folder: 'france', images: [
        { file: 'card1.jpg', title: 'Paris' },
      ], description: 'Francia es sinónimo de arte, moda y gastronomía. París, la "Ciudad de la Luz", deslumbra con la Torre Eiffel, el Louvre y sus encantadores cafés. El país ofrece paisajes que van desde los viñedos de Burdeos hasta la Riviera Francesa, haciendo de cada visita una experiencia romántica y cultural.', rating: 4.8, reviews: 234 },
      { country: 'Germany', folder: 'germany', images: [
        { file: 'card1.jpg', title: 'Berlin' },
      ], description: 'Alemania destaca por su historia, tecnología y paisajes variados. Berlín, su capital, es un símbolo de resiliencia y creatividad, con monumentos como la Puerta de Brandeburgo y el Muro de Berlín. El país es ideal para explorar castillos, bosques y ciudades llenas de vida.', rating: 4.7, reviews: 210 },
      { country: 'Spain', folder: 'spain', images: [
        { file: 'card1.jpg', title: 'Madrid' },
      ], description: 'España es famosa por su cultura vibrante, fiestas tradicionales y playas soleadas. Madrid, la capital, ofrece una mezcla de arte, historia y gastronomía. Desde la Alhambra de Granada hasta la Sagrada Familia en Barcelona, el país es un mosaico de experiencias únicas.', rating: 4.6, reviews: 190 },
      { country: 'Italy', folder: 'italy', images: [
        { file: 'card1.jpg', title: 'Rome' },
      ], description: 'Italia es cuna del arte, la historia y la buena comida. Roma, la "Ciudad Eterna", fascina con el Coliseo, el Vaticano y sus plazas llenas de vida. El país invita a recorrer la Toscana, Venecia y la Costa Amalfitana, disfrutando de su patrimonio y su exquisita cocina.', rating: 4.8, reviews: 220 },
      { country: 'United Kingdom', folder: 'united-kingdom', images: [
        { file: 'card1.jpg', title: 'London' },
      ], description: 'El Reino Unido mezcla tradición y modernidad en ciudades como Londres, famosa por el Big Ben, el Palacio de Buckingham y sus museos de clase mundial. El país ofrece paisajes verdes, castillos y una rica herencia literaria y musical.', rating: 4.7, reviews: 200 },
      { country: 'Greece', folder: 'greece', images: [
        { file: 'card1.jpg', title: 'Athens' },
      ], description: 'Grecia es el origen de la filosofía y la democracia. Atenas, con la Acrópolis y sus templos antiguos, es un viaje al pasado glorioso. Las islas griegas, con sus aguas turquesas y casas blancas, son el destino perfecto para relajarse y disfrutar de la gastronomía mediterránea.', rating: 4.6, reviews: 180 },
      { country: 'Austria', folder: 'austria', images: [
        { file: 'card1.jpg', title: 'Vienna' },
      ], description: 'Austria es famosa por su música clásica, palacios imperiales y paisajes alpinos. Viena, la capital, es un centro cultural con óperas, museos y cafés históricos. El país es ideal para los amantes de la naturaleza y la historia.', rating: 4.9, reviews: 240 },
      { country: 'Netherlands', folder: 'netherlands', images: [
        { file: 'card1.jpg', title: 'Amsterdam' },
      ], description: 'Países Bajos es tierra de tulipanes, molinos y canales. Ámsterdam, con sus museos, bicicletas y arquitectura única, es una ciudad acogedora y cosmopolita. El país invita a recorrer pueblos pintorescos y disfrutar de su ambiente relajado.', rating: 4.7, reviews: 200 },
      { country: 'Switzerland', folder: 'switzerland', images: [
        { file: 'card1.jpg', title: 'Zurich' },
      ], description: 'Suiza es conocida por sus montañas, lagos y relojes de precisión. Zúrich, la ciudad más grande, combina modernidad y tradición a orillas de un hermoso lago. El país es ideal para practicar deportes de invierno y disfrutar de paisajes de ensueño.', rating: 4.8, reviews: 220 },
      { country: 'Portugal', folder: 'portugal', images: [
        { file: 'card1.jpg', title: 'Lisbon' },
      ], description: 'Portugal ofrece historia, playas doradas y la melancolía del fado. Lisboa, la capital, es famosa por sus colinas, tranvías y barrios históricos. El país es perfecto para descubrir castillos, viñedos y una exquisita gastronomía.', rating: 4.6, reviews: 190 },
      { country: 'Turkey', folder: 'turkey', images: [
        { file: 'card1.jpg', title: 'Istanbul' },
      ], description: 'Turquía une Europa y Asia en una sola ciudad: Estambul. Sus mezquitas, bazares y palacios reflejan siglos de historia y diversidad cultural. El país ofrece paisajes únicos como la Capadocia y playas en la Riviera Turca.', rating: 4.7, reviews: 200 },
      { country: 'Russia', folder: 'russia', images: [
        { file: 'card1.jpg', title: 'Moscow' },
      ], description: 'Rusia es el país más grande del mundo, rico en cultura, arte y paisajes impresionantes. Moscú, la capital, deslumbra con la Plaza Roja, el Kremlin y sus catedrales. El país invita a explorar desde San Petersburgo hasta el lago Baikal.', rating: 4.5, reviews: 170 },
    ],
    northamerica: [
      { country: 'Canada', folder: 'canada', images: [
        { file: 'card1.jpg', title: 'Toronto' },
      ], description: 'Canadá es un país de vastos paisajes naturales, desde las Montañas Rocosas hasta las Cataratas del Niágara. Toronto, la ciudad más grande, es un centro multicultural con una vibrante escena artística y gastronómica. Es el destino ideal para los amantes de la naturaleza y la diversidad.', rating: 4.7, reviews: 200 },
      { country: 'Panama', folder: 'panama', images: [
        { file: 'card1.jpg', title: 'Panama City' },
      ], description: 'Panamá es famosa por su canal, que une dos océanos y es una maravilla de la ingeniería. Ciudad de Panamá combina rascacielos modernos con el encanto colonial del Casco Viejo. El país ofrece playas, selvas y una rica biodiversidad.', rating: 4.6, reviews: 180 },
      { country: 'United States', folder: 'united-states', images: [
        { file: 'card1.jpg', title: 'New York' },
      ], description: 'Estados Unidos es un país de grandes contrastes y oportunidades. Nueva York, la "Gran Manzana", es un icono mundial con su skyline, Central Park y una oferta cultural inigualable. Desde los parques nacionales hasta las grandes ciudades, el país ofrece experiencias para todos los gustos.', rating: 4.8, reviews: 220 },
      { country: 'Mexico', folder: 'mexico', images: [
        { file: 'card1.jpg', title: 'Mexico City' },
      ], description: 'México es un país de historia milenaria, sabores intensos y paisajes variados. Ciudad de México, una de las urbes más grandes del mundo, combina ruinas aztecas, arquitectura colonial y una vibrante vida cultural. El país es famoso por sus playas, gastronomía y tradiciones.', rating: 4.7, reviews: 200 },
      { country: 'Guatemala', folder: 'guatemala', images: [
        { file: 'card1.jpg', title: 'Guatemala City' },
      ], description: 'Guatemala es el corazón del mundo maya, con volcanes, lagos y selvas exuberantes. Ciudad de Guatemala es el punto de partida para explorar ruinas como Tikal y pueblos llenos de color. El país destaca por su cultura ancestral y paisajes impresionantes.', rating: 4.5, reviews: 170 },
      { country: 'Dominican Republic', folder: 'dominican-republic', images: [
        { file: 'card1.jpg', title: 'Santo Domingo' },
      ], description: 'República Dominicana es famosa por sus playas de arena blanca y aguas turquesas. Santo Domingo, la capital, es la ciudad más antigua de América y conserva un encantador centro histórico. El país es ideal para disfrutar del Caribe, la música y la hospitalidad.', rating: 4.6, reviews: 180 },
      { country: 'Honduras', folder: 'honduras', images: [
        { file: 'card1.jpg', title: 'Tegucigalpa' },
      ], description: 'Honduras ofrece una naturaleza exuberante, ruinas mayas y playas en el Caribe. Tegucigalpa, la capital, es una ciudad rodeada de montañas y cultura. El país es perfecto para los amantes del ecoturismo y la aventura.', rating: 4.5, reviews: 170 },
 
    ],
    oceania: [
      { country: 'Australia', folder: 'australia', images: [
        { file: 'card1.jpg', title: 'Sydney' },
      ], description: 'Australia es famosa por su naturaleza salvaje, playas interminables y ciudades modernas. Sídney, con su icónica Ópera y el Harbour Bridge, es una ciudad vibrante junto al mar. El país invita a explorar la Gran Barrera de Coral, el Outback y una fauna única en el mundo.', rating: 4.7, reviews: 200 },
      { country: 'New Zealand', folder: 'new-zealand', images: [
        { file: 'card1.jpg', title: 'Auckland' },
      ], description: 'Nueva Zelanda es un paraíso para los amantes de la aventura y la naturaleza. Auckland, la ciudad de las velas, está rodeada de volcanes y bahías. El país es famoso por sus paisajes de película, cultura maorí y actividades al aire libre.', rating: 4.8, reviews: 220 },
      { country: 'Fiji', folder: 'fiji', images: [
        { file: 'card1.jpg', title: 'Suva' },
      ], description: 'Fiyi es un archipiélago tropical en el Pacífico Sur, conocido por sus playas de arena blanca, arrecifes de coral y hospitalidad. Suva, la capital, es una ciudad animada y multicultural. El destino perfecto para relajarse y disfrutar de la naturaleza.', rating: 4.6, reviews: 180 },
      { country: 'Papua New Guinea', folder: 'papua-new-guinea', images: [
        { file: 'card1.jpg', title: 'Port Moresby' },
      ], description: 'Papúa Nueva Guinea es un país de selvas vírgenes, culturas ancestrales y paisajes espectaculares. Port Moresby, la capital, es la puerta de entrada a un mundo de biodiversidad y tradiciones únicas. Ideal para los viajeros más aventureros.', rating: 4.5, reviews: 170 }
    ],
    southamerica: [
      { country: 'Argentina', folder: 'argentina', images: [
        { file: 'card1.jpg', title: 'Buenos Aires' },
      ], description: 'Argentina es un país de paisajes imponentes, desde la Patagonia hasta las Cataratas del Iguazú. Buenos Aires, la capital, es famosa por el tango, su arquitectura europea y su vibrante vida nocturna. El país invita a disfrutar de su gastronomía, vinos y cultura apasionada.', rating: 4.7, reviews: 200 },
      { country: 'Brazil', folder: 'brazil', images: [
        { file: 'card1.jpg', title: 'Rio de Janeiro' },
      ], description: 'Brasil es sinónimo de alegría, música y naturaleza exuberante. Río de Janeiro, con el Cristo Redentor y sus playas icónicas, es una ciudad llena de ritmo y color. El país ofrece selvas, cataratas y una cultura vibrante que enamora a todos los visitantes.', rating: 4.8, reviews: 220 },
      { country: 'Chile', folder: 'chile', images: [
        { file: 'card1.jpg', title: 'Santiago' },
      ], description: 'Chile es un país de extremos, con desiertos, glaciares y una costa interminable. Santiago, la capital, está rodeada de montañas y es el punto de partida para explorar viñedos, el desierto de Atacama y la Patagonia. Un destino ideal para los amantes de la naturaleza.', rating: 4.6, reviews: 180 },
      { country: 'Colombia', folder: 'colombia', images: [
        { file: 'card1.jpg', title: 'Bogotá' },
      ], description: 'Colombia es un país de paisajes verdes, café de calidad y ciudades llenas de vida. Bogotá, la capital, combina historia colonial, arte urbano y una gastronomía en auge. El país invita a descubrir Cartagena, Medellín y sus parques naturales.', rating: 4.7, reviews: 200 },
      { country: 'Peru', folder: 'peru', images: [
        { file: 'card1.jpg', title: 'Lima' },
      ], description: 'Perú es famoso por Machu Picchu, su herencia inca y su exquisita gastronomía. Lima, la capital, es una ciudad costera con una vibrante escena culinaria y barrios históricos. El país es ideal para los amantes de la historia, la aventura y la buena comida.', rating: 4.5, reviews: 170 },
      { country: 'Ecuador', folder: 'ecuador', images: [
        { file: 'card1.jpg', title: 'Quito' },
      ], description: 'Ecuador es un país pequeño pero diverso, con volcanes, selvas y las Islas Galápagos. Quito, su capital, tiene un centro histórico declarado Patrimonio de la Humanidad. El país es perfecto para explorar la naturaleza y la cultura andina.', rating: 4.6, reviews: 180 },
    ],
  };

export const COUNTRY_MAP: Record<string, Country & { continent: string }> = {};
export const COUNTRY_ISO_MAP: Record<string, string> = {
  'Egypt': 'EG',
  'Morocco': 'MA',
  'Kenya': 'KE',
  'Japan': 'JP',
  'China': 'CN',
  'India': 'IN',
  'Indonesia': 'ID',
  'Thailand': 'TH',
  'Philippines': 'PH',
  'Singapore': 'SG',
  'France': 'FR',
  'Germany': 'DE',
  'Spain': 'ES',
  'Italy': 'IT',
  'United Kingdom': 'GB',
  'Greece': 'GR',
  'Austria': 'AT',
  'Netherlands': 'NL',
  'Switzerland': 'CH',
  'Portugal': 'PT',
  'Turkey': 'TR',
  'Russia': 'RU',
  'Canada': 'CA',
  'Panama': 'PA',
  'United States': 'US',
  'Mexico': 'MX',
  'Guatemala': 'GT',
  'Dominican Republic': 'DO',
  'Honduras': 'HN',
  'Nicaragua': 'NI',
  'Australia': 'AU',
  'New Zealand': 'NZ',
  'Fiji': 'FJ',
  'Papua New Guinea': 'PG',
  'Tonga': 'TO',
  'Argentina': 'AR',
  'Brazil': 'BR',
  'Chile': 'CL',
  'Colombia': 'CO',
  'Peru': 'PE',
  'Ecuador': 'EC',
  'Bolivia': 'BO',
};

Object.entries(CONTINENT_COUNTRY_MAP).forEach(([continent, countries]) => {
  countries.forEach((country) => {
    COUNTRY_MAP[`${continent}-${country.folder}`] = { ...country, continent, isoCode: COUNTRY_ISO_MAP[country.country] };
  });
});