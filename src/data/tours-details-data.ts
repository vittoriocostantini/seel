export interface TourDayDetail {
  day: string;
  title: string;
  subTitle?: string;
  details: { label: string; text: string }[];
}

export interface TourDetailsData {
  [tourId: string]: TourDayDetail[];
}

export const TOURS_DETAILS_DATA: TourDetailsData = {
  'egypt-tour-1': [
    {
      day: 'Day 1',
      title: 'Cultural Adventure in Cairo',
      details: [
        { label: 'Morning', text: 'Cairo International Airport' },
        { label: 'Afternoon', text: 'Check-in at downtown hotel' },
        { label: 'Evening', text: 'Welcome dinner with traditional Egyptian cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Giza Pyramids & Sphinx',
      details: [
        { label: 'Morning', text: 'Great Pyramid of Khufu and Pyramid of Khafre' },
        { label: 'Afternoon', text: 'The Great Sphinx and Solar Boat Museum' },
        { label: 'Evening', text: 'Camel ride in the desert' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Egyptian Museum & Islamic City',
      details: [
        { label: 'Morning', text: 'Egyptian Museum of Antiquities and Tutankhamun Collection' },
        { label: 'Afternoon', text: 'Ibn Tulun Mosque and Saladin Citadel' },
        { label: 'Evening', text: 'Khan el-Khalili Bazaar and Muhammad Ali Mosque' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Memphis & Saqqara',
      details: [
        { label: 'Morning', text: 'Saqqara Necropolis and Step Pyramid of Djoser' },
        { label: 'Afternoon', text: 'Ancient city of Memphis and Colossus of Ramses II' },
        { label: 'Evening', text: 'Temple of Ptah and traditional dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Coptic Cairo & Departure',
      details: [
        { label: 'Morning', text: 'Hanging Church (Saint Mary) and Church of St. Sergius' },
        { label: 'Afternoon', text: 'Ben Ezra Synagogue and Coptic Museum' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'egypt-tour-2': [
    {
      day: 'Day 1',
      title: 'Nile Cruise',
      details: [
        { label: 'Morning', text: 'Arrival and check-in on Nile cruise' },
        { label: 'Afternoon', text: 'Karnak Temple and Luxor Temple' },
        { label: 'Evening', text: 'Sunset Nile cruise' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Valley of the Kings',
      details: [
        { label: 'Morning', text: 'Valley of the Kings (tombs of Tutankhamun, Ramses VI, Seti I)' },
        { label: 'Afternoon', text: 'Temple of Hatshepsut and Colossi of Memnon' },
        { label: 'Evening', text: 'Medinet Habu Temple and dinner on cruise' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Sailing to Edfu',
      details: [
        { label: 'Morning', text: 'Sailing on the Nile' },
        { label: 'Afternoon', text: 'Temple of Horus at Edfu' },
        { label: 'Evening', text: 'Kom Ombo Temple and night sailing' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Aswan',
      details: [
        { label: 'Morning', text: 'Aswan High Dam' },
        { label: 'Afternoon', text: 'Philae Temple and Unfinished Obelisk' },
        { label: 'Evening', text: 'Felucca ride on the Nile' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Abu Simbel (Optional)',
      details: [
        { label: 'Morning', text: 'Excursion to Abu Simbel - Temples of Ramses II and Nefertari' },
        { label: 'Afternoon', text: 'Return to Aswan and sailing' },
        { label: 'Evening', text: 'Special dinner on cruise' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Return Sailing',
      details: [
        { label: 'Morning', text: 'Esna Temple' },
        { label: 'Afternoon', text: 'Sailing to Luxor' },
        { label: 'Evening', text: 'Farewell dinner on cruise' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Return to Cairo',
      details: [
        { label: 'Morning', text: 'Breakfast and cruise check-out' },
        { label: 'Afternoon', text: 'Flight to Cairo' },
        { label: 'Evening', text: 'Transfer to airport or free visit' },
      ],
    },
  ],
  'egypt-tour-3': [
    {
      day: 'Day 1',
      title: 'Alexandria and the Nile Delta',
      details: [
        { label: 'Morning', text: 'Flight to Luxor and hotel transfer' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Upper Egypt cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'West Luxor',
      details: [
        { label: 'Morning', text: 'Valley of the Kings and royal tombs' },
        { label: 'Afternoon', text: 'Temple of Hatshepsut and Colossi of Memnon' },
        { label: 'Evening', text: 'Dinner at restaurant with Nile view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'East Luxor',
      details: [
        { label: 'Morning', text: 'Karnak Temple and Avenue of Sphinxes' },
        { label: 'Afternoon', text: 'Luxor Temple and open-air museum' },
        { label: 'Evening', text: 'Sound and light show at Karnak' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Luxor - Edfu',
      details: [
        { label: 'Morning', text: 'Nile sailing to Edfu' },
        { label: 'Afternoon', text: 'Temple of Horus at Edfu' },
        { label: 'Evening', text: 'Dinner on cruise and night sailing' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Edfu - Kom Ombo - Aswan',
      details: [
        { label: 'Morning', text: 'Kom Ombo Temple and Crocodile Museum' },
        { label: 'Afternoon', text: 'Arrival in Aswan and check-in' },
        { label: 'Evening', text: 'Dinner at Nubian restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Full Aswan',
      details: [
        { label: 'Morning', text: 'Aswan High Dam and Unfinished Obelisk' },
        { label: 'Afternoon', text: 'Philae Temple and felucca ride' },
        { label: 'Evening', text: 'Dinner with Nubian music' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Aswan - Abu Simbel',
      details: [
        { label: 'Morning', text: 'Excursion to Abu Simbel (Ramses II temples)' },
        { label: 'Afternoon', text: 'Return to Aswan and free time' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Aswan - Return',
      details: [
        { label: 'Morning', text: 'Aswan market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Cairo' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'egypt-tour-4': [
    {
      day: 'Day 1',
      title: 'Luxor and Aswan',
      details: [
        { label: 'Morning', text: 'Transfer to Alexandria by road' },
        { label: 'Afternoon', text: 'Check-in and lunch at seafood restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Mediterranean fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Alexandria',
      details: [
        { label: 'Morning', text: 'Alexandria Library and Greco-Roman Museum' },
        { label: 'Afternoon', text: 'Catacombs of Kom el-Shuqafa' },
        { label: 'Evening', text: 'Dinner at restaurant with sea view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Coastal Alexandria',
      details: [
        { label: 'Morning', text: 'Qaitbay Citadel and Lighthouse of Alexandria' },
        { label: 'Afternoon', text: 'Montazah Palace and gardens' },
        { label: 'Evening', text: 'Walk along the Corniche and dinner' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Alexandria - Return',
      details: [
        { label: 'Morning', text: 'Fish market and shopping' },
        { label: 'Afternoon', text: 'Return transfer to Cairo' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'morocco-tour-1': [
    {
      day: 'Day 1',
      title: 'Imperial Marrakech',
      details: [
        { label: 'Morning', text: 'Marrakech airport and transfer to riad' },
        { label: 'Afternoon', text: 'Check-in and lunch in the medina' },
        { label: 'Evening', text: 'Welcome dinner with gnawa music' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Marrakech',
      details: [
        { label: 'Morning', text: 'Jemaa el-Fna square and Koutoubia Mosque' },
        { label: 'Afternoon', text: 'Bahia Palace and Ben Youssef Madrasa' },
        { label: 'Evening', text: 'Dinner at traditional restaurant with belly dance' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Marrakech',
      details: [
        { label: 'Morning', text: 'Majorelle Gardens and Yves Saint Laurent Museum' },
        { label: 'Afternoon', text: 'Mellah (Jewish quarter) and Saadian Tombs' },
        { label: 'Evening', text: 'Traditional hammam and massage' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Atlas Mountains Excursion',
      details: [
        { label: 'Morning', text: 'Transfer to the Atlas Mountains' },
        { label: 'Afternoon', text: 'Visit to Berber village and local lunch' },
        { label: 'Evening', text: 'Return to Marrakech and dinner on rooftop' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Spice market and shopping in souks' },
        { label: 'Afternoon', text: 'Mint tea in the square and free time' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'morocco-tour-2': [
    {
      day: 'Day 1',
      title: 'Fez and Meknes',
      details: [
        { label: 'Morning', text: 'Road trip to Ouarzazate' },
        { label: 'Afternoon', text: 'Visit to Ait Ben Haddou (UNESCO site)' },
        { label: 'Evening', text: 'Dinner and night in traditional kasbah' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Ouarzazate - Merzouga',
      details: [
        { label: 'Morning', text: 'Atlas film studios and Taourirt Kasbah' },
        { label: 'Afternoon', text: 'Dades Valley and Todra Gorges' },
        { label: 'Evening', text: 'Arrival in Merzouga and desert preparation' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Sahara Desert',
      details: [
        { label: 'Morning', text: 'Camel ride through the dunes' },
        { label: 'Afternoon', text: 'Lunch at Berber camp' },
        { label: 'Evening', text: 'Dinner under the stars and Tuareg music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Sahara - Fez',
      details: [
        { label: 'Morning', text: 'Sunrise in the dunes and breakfast' },
        { label: 'Afternoon', text: 'Transfer to Fez via Middle Atlas' },
        { label: 'Evening', text: 'Arrival in Fez and dinner in the medina' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Imperial Fez',
      details: [
        { label: 'Morning', text: 'Fez medina (UNESCO site)' },
        { label: 'Afternoon', text: 'Al-Qarawiyyin University and tanneries' },
        { label: 'Evening', text: 'Dinner at traditional riad' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Fez - Return',
      details: [
        { label: 'Morning', text: 'Royal Palace and Jewish quarter' },
        { label: 'Afternoon', text: 'Return flight from Fez' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'morocco-tour-3': [
    {
      day: 'Day 1',
      title: 'Sahara Desert',
      details: [
        { label: 'Morning', text: 'Marrakech - Fez' },
        { label: 'Afternoon', text: 'Check-in and lunch in the medina' },
        { label: 'Evening', text: 'Welcome dinner with Fassi cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Fez',
      details: [
        { label: 'Morning', text: 'Fez medina (UNESCO site)' },
        { label: 'Afternoon', text: 'Al-Qarawiyyin University and tanneries' },
        { label: 'Evening', text: 'Dinner at traditional riad' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Fez - Meknes',
      details: [
        { label: 'Morning', text: 'Transfer to Meknes and city visit' },
        { label: 'Afternoon', text: 'Volubilis (Roman ruins)' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Meknes - Fez',
      details: [
        { label: 'Morning', text: 'Royal Palace of Meknes' },
        { label: 'Afternoon', text: 'Return to Fez and free time' },
        { label: 'Evening', text: 'Dinner with Andalusian music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Fez - Return',
      details: [
        { label: 'Morning', text: 'Handicraft market and shopping' },
        { label: 'Afternoon', text: 'Return flight to Marrakech' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'morocco-tour-4': [
    {
      day: 'Day 1',
      title: 'Atlantic Coast',
      details: [
        { label: 'Morning', text: 'Transfer to Essaouira by road' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Coastal Essaouira',
      details: [
        { label: 'Morning', text: 'Essaouira medina and fishing port' },
        { label: 'Afternoon', text: 'Essaouira beach and water sports' },
        { label: 'Evening', text: 'Dinner at restaurant with sea view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Essaouira',
      details: [
        { label: 'Morning', text: 'Fish market and handicrafts' },
        { label: 'Afternoon', text: 'Portuguese fortress and city walls' },
        { label: 'Evening', text: 'Dinner with gnawa music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Essaouira - Return',
      details: [
        { label: 'Morning', text: 'Free time at the beach' },
        { label: 'Afternoon', text: 'Return transfer to Marrakech' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'kenya-tour-1': [
    {
      day: 'Day 1',
      title: 'Classic Kenya Safari',
      details: [
        { label: 'Morning', text: 'Jomo Kenyatta International Airport' },
        { label: 'Afternoon', text: 'Hotel check-in and lunch at Carnivore Restaurant' },
        { label: 'Evening', text: 'Welcome dinner with traditional Maasai dances' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Classic Kenya Safari',
      details: [
        { label: 'Morning', text: 'Transfer to Amboseli and lodge check-in' },
        { label: 'Afternoon', text: 'Afternoon safari looking for elephants' },
        { label: 'Evening', text: 'Dinner with view of Mount Kilimanjaro' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Classic Kenya Safari',
      details: [
        { label: 'Morning', text: 'Morning safari to see active animals' },
        { label: 'Afternoon', text: 'Visit to Maasai community and traditional lunch' },
        { label: 'Evening', text: 'Night safari with flashlights' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Classic Kenya Safari',
      details: [
        { label: 'Morning', text: 'Farewell safari in Amboseli' },
        { label: 'Afternoon', text: 'Transfer to Lake Nakuru and check-in' },
        { label: 'Evening', text: 'Lake safari to see flamingos' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Classic Kenya Safari',
      details: [
        { label: 'Morning', text: 'Morning safari in Nakuru to see rhinos' },
        { label: 'Afternoon', text: 'Transfer to Masai Mara and camp check-in' },
        { label: 'Evening', text: 'Welcome safari in the savannah' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Classic Kenya Safari',
      details: [
        { label: 'Morning', text: 'Morning safari to see the great migration' },
        { label: 'Afternoon', text: 'Lunch in the savannah and afternoon safari' },
        { label: 'Evening', text: 'Farewell dinner with Maasai stories' },
      ],
    },
  ],
  'kenya-tour-2': [
    {
      day: 'Day 1',
      title: 'Urban Nairobi',
      details: [
        { label: 'Morning', text: 'Mombasa airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Visit to Fort Jesus and Old Town' },
        { label: 'Evening', text: 'Dinner at seafood restaurant on the beach' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Kenya Coast',
      details: [
        { label: 'Morning', text: 'Traditional dhow ride in the harbor' },
        { label: 'Afternoon', text: 'Visit to Seafood Market and Nyali Beach' },
        { label: 'Evening', text: 'Dinner with taarab music in Old Town' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Kenya Coast',
      details: [
        { label: 'Morning', text: 'Flight to Lamu and check-in at traditional hotel' },
        { label: 'Afternoon', text: 'Walk through Lamu Town (UNESCO site)' },
        { label: 'Evening', text: 'Dinner on rooftop with view of Indian Ocean' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Kenya Coast',
      details: [
        { label: 'Morning', text: 'Visit to Lamu Museum and House of Poets' },
        { label: 'Afternoon', text: 'Dhow ride to Shela Beach and lunch on the beach' },
        { label: 'Evening', text: 'Dinner at local restaurant with Swahili cuisine' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Kenya Coast',
      details: [
        { label: 'Morning', text: 'Morning walk on the promenade and local breakfast' },
        { label: 'Afternoon', text: 'Return flight to Mombasa' },
        { label: 'Evening', text: 'Transfer to airport or optional extension' },
      ],
    },
  ],
  'kenya-tour-3': [
    {
      day: 'Day 1',
      title: 'Kenya Coast',
      details: [
        { label: 'Morning', text: 'Transfer to Nanyuki and lodge check-in' },
        { label: 'Afternoon', text: 'Lunch and mountain preparation' },
        { label: 'Evening', text: 'Welcome dinner with view of Mount Kenya' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Mount Kenya',
      details: [
        { label: 'Morning', text: 'Hiking on the slopes of Mount Kenya' },
        { label: 'Afternoon', text: 'Visit to waterfalls and montane forest' },
        { label: 'Evening', text: 'Dinner at mountain lodge' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Mount Kenya',
      details: [
        { label: 'Morning', text: 'Transfer to Lake Nakuru' },
        { label: 'Afternoon', text: 'Lake safari to see flamingos' },
        { label: 'Evening', text: 'Dinner at lodge with lake view' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Mount Kenya',
      details: [
        { label: 'Morning', text: 'Morning safari in Nakuru' },
        { label: 'Afternoon', text: 'Transfer to Lake Naivasha and boat ride' },
        { label: 'Evening', text: 'Dinner at Naivasha lodge' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Mount Kenya',
      details: [
        { label: 'Morning', text: 'Transfer to Lake Bogoria' },
        { label: 'Afternoon', text: 'Flamingo and geyser observation' },
        { label: 'Evening', text: 'Dinner at camp' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Mount Kenya',
      details: [
        { label: 'Morning', text: 'Morning safari in Bogoria' },
        { label: 'Afternoon', text: 'Return to Nairobi' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Mount Kenya',
      details: [
        { label: 'Morning', text: 'Visit to Nairobi National Museum' },
        { label: 'Afternoon', text: 'Free time for shopping' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'kenya-tour-4': [
    {
      day: 'Day 1',
      title: 'Mount Kenya',
      details: [
        { label: 'Morning', text: 'Flight to Mombasa and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Urban Nairobi',
      details: [
        { label: 'Morning', text: 'Fort Jesus and Old Town' },
        { label: 'Afternoon', text: 'Seafood Market and Nyali Beach' },
        { label: 'Evening', text: 'Dinner with taarab music' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Urban Nairobi',
      details: [
        { label: 'Morning', text: 'Transfer to Diani Beach' },
        { label: 'Afternoon', text: 'Diani Beach and water sports' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Urban Nairobi',
      details: [
        { label: 'Morning', text: 'Excursion to Wasini Island' },
        { label: 'Afternoon', text: 'Snorkeling in coral reefs' },
        { label: 'Evening', text: 'Dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Urban Nairobi',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Return flight to Nairobi' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'japan-tour-1': [
    {
      day: 'Day 1',
      title: 'Modern and Traditional Tokyo',
      details: [
        { label: 'Morning', text: 'Narita/Haneda airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local ramen' },
        { label: 'Evening', text: 'Welcome dinner with sushi at Tsukiji' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Tokyo',
      details: [
        { label: 'Morning', text: 'Senso-ji Temple in Asakusa' },
        { label: 'Afternoon', text: 'Imperial Palace and gardens' },
        { label: 'Evening', text: 'Dinner at traditional izakaya' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Modern Tokyo',
      details: [
        { label: 'Morning', text: 'Shibuya Crossing and Harajuku' },
        { label: 'Afternoon', text: 'Tokyo Tower and Roppongi Hills' },
        { label: 'Evening', text: 'Dinner at panoramic view restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Tokyo',
      details: [
        { label: 'Morning', text: 'Tokyo National Museum' },
        { label: 'Afternoon', text: 'Meiji Shrine and Yoyogi Park' },
        { label: 'Evening', text: 'Traditional tea ceremony' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Nikko Excursion',
      details: [
        { label: 'Morning', text: 'Excursion to Nikko (UNESCO)' },
        { label: 'Afternoon', text: 'Toshogu Shrine and Shinkyo Bridge' },
        { label: 'Evening', text: 'Return to Tokyo and dinner in Ginza' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Contemporary Tokyo',
      details: [
        { label: 'Morning', text: 'Akihabara (electronics district)' },
        { label: 'Afternoon', text: 'Odaiba and Rainbow Bridge' },
        { label: 'Evening', text: 'Dinner at tempura restaurant' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Toyosu fish market' },
        { label: 'Afternoon', text: 'Shopping in Ginza and free time' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'japan-tour-2': [
    {
      day: 'Day 1',
      title: 'Osaka and Kobe Gastronomic',
      details: [
        { label: 'Morning', text: 'Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Introduction to Japanese culture' },
        { label: 'Evening', text: 'Traditional kaiseki dinner' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Tokyo - Kyoto',
      details: [
        { label: 'Morning', text: 'Shinkansen to Kyoto' },
        { label: 'Afternoon', text: 'Kinkaku-ji Temple (Golden Pavilion)' },
        { label: 'Evening', text: 'Dinner at traditional ryokan' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Imperial Kyoto',
      details: [
        { label: 'Morning', text: 'Kyoto Imperial Palace' },
        { label: 'Afternoon', text: 'Ryoan-ji Temple and zen garden' },
        { label: 'Evening', text: 'Dinner with geishas in Gion' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Traditional Kyoto',
      details: [
        { label: 'Morning', text: 'Fushimi Inari Shrine and red torii' },
        { label: 'Afternoon', text: 'Kiyomizu-dera Temple' },
        { label: 'Evening', text: 'Walk through Pontocho and dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Kyoto - Nara',
      details: [
        { label: 'Morning', text: 'Transfer to Nara' },
        { label: 'Afternoon', text: 'Todai-ji Temple and Great Buddha' },
        { label: 'Evening', text: 'Deer park and return to Kyoto' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Kyoto - Osaka',
      details: [
        { label: 'Morning', text: 'Osaka Castle' },
        { label: 'Afternoon', text: 'Dotonbori and local gastronomy' },
        { label: 'Evening', text: 'Dinner at okonomiyaki restaurant' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Osaka - Hiroshima',
      details: [
        { label: 'Morning', text: 'Shinkansen to Hiroshima' },
        { label: 'Afternoon', text: 'Peace Park and Museum' },
        { label: 'Evening', text: 'Miyajima Island and floating torii' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Hiroshima - Kanazawa',
      details: [
        { label: 'Morning', text: 'Transfer to Kanazawa' },
        { label: 'Afternoon', text: 'Kenroku-en Garden' },
        { label: 'Evening', text: 'Higashi Chaya geisha district' },
      ],
    },
    {
      day: 'Day 9',
      title: 'Kanazawa - Tokyo',
      details: [
        { label: 'Morning', text: 'Kanazawa Castle' },
        { label: 'Afternoon', text: 'Shinkansen back to Tokyo' },
        { label: 'Evening', text: 'Farewell dinner in Akasaka' },
      ],
    },
    {
      day: 'Day 10',
      title: 'Tokyo - Return',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'Return flight' },
      ],
    },
  ],
  'japan-tour-3': [
    {
      day: 'Day 1',
      title: 'Deep Japanese Culture',
      details: [
        { label: 'Morning', text: 'Shinkansen to Osaka and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch in Dotonbori' },
        { label: 'Evening', text: 'Welcome dinner with takoyaki' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Osaka',
      details: [
        { label: 'Morning', text: 'Osaka Castle and park' },
        { label: 'Afternoon', text: 'Shitennoji and Tennoji district' },
        { label: 'Evening', text: 'Dinner at okonomiyaki restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Osaka - Kobe',
      details: [
        { label: 'Morning', text: 'Transfer to Kobe and port visit' },
        { label: 'Afternoon', text: 'Kitano district and foreign houses' },
        { label: 'Evening', text: 'Dinner with Kobe beef' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Kobe - Osaka',
      details: [
        { label: 'Morning', text: 'Mount Rokko and cable car' },
        { label: 'Afternoon', text: 'Return to Osaka and Universal Studios' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Osaka - Return',
      details: [
        { label: 'Morning', text: 'Kuromon market and shopping' },
        { label: 'Afternoon', text: 'Shinkansen back to Tokyo' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'japan-tour-4': [
    {
      day: 'Day 1',
      title: 'Natural Hokkaido',
      details: [
        { label: 'Morning', text: 'Flight to Sapporo and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Sapporo ramen' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Urban Sapporo',
      details: [
        { label: 'Morning', text: 'Clock Tower and Odori Park' },
        { label: 'Afternoon', text: 'Sapporo Beer Museum' },
        { label: 'Evening', text: 'Dinner at seafood restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Sapporo - Otaru',
      details: [
        { label: 'Morning', text: 'Transfer to Otaru and historic canal' },
        { label: 'Afternoon', text: 'Music and glass museum' },
        { label: 'Evening', text: 'Dinner with Hokkaido sushi' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Otaru - Niseko',
      details: [
        { label: 'Morning', text: 'Transfer to Niseko and mountains' },
        { label: 'Afternoon', text: 'Hiking in summer or skiing in winter' },
        { label: 'Evening', text: 'Dinner at mountain ryokan' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Niseko - Sapporo',
      details: [
        { label: 'Morning', text: 'Onsen (hot springs) and relaxation' },
        { label: 'Afternoon', text: 'Return to Sapporo' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Sapporo - Return',
      details: [
        { label: 'Morning', text: 'Fish market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Tokyo' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'india-tour-1': [
    {
      day: 'Day 1',
      title: 'Historic Delhi',
      details: [
        { label: 'Morning', text: 'Delhi International Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with traditional curry' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Delhi',
      details: [
        { label: 'Morning', text: 'Red Fort and Jama Masjid' },
        { label: 'Afternoon', text: 'Raj Ghat and Gandhi memorial' },
        { label: 'Evening', text: 'Rickshaw ride through Chandni Chowk' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Modern Delhi',
      details: [
        { label: 'Morning', text: 'India Gate and Rashtrapati Bhavan' },
        { label: 'Afternoon', text: 'Lotus Temple and Qutub Minar' },
        { label: 'Evening', text: 'Dinner at restaurant with classical Indian music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Delhi',
      details: [
        { label: 'Morning', text: 'Akshardham Temple' },
        { label: 'Afternoon', text: 'National Museum and Connaught Place' },
        { label: 'Evening', text: 'Classical Indian dance show' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Spice market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'india-tour-2': [
    {
      day: 'Day 1',
      title: 'Taj Mahal Express',
      details: [
        { label: 'Morning', text: 'High-speed train to Agra' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Dinner with view of the Taj Mahal' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Agra',
      details: [
        { label: 'Morning', text: 'Taj Mahal at sunrise' },
        { label: 'Afternoon', text: 'Agra Fort and Mehtab Bagh' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Agra - Jaipur',
      details: [
        { label: 'Morning', text: 'Agra Fort and Baby Taj' },
        { label: 'Afternoon', text: 'Transfer to Jaipur (Pink City)' },
        { label: 'Evening', text: 'Welcome dinner in Jaipur' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Jaipur - Return',
      details: [
        { label: 'Morning', text: 'Hawa Mahal and City Palace' },
        { label: 'Afternoon', text: 'Amber Fort and return flight' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'india-tour-3': [
    {
      day: 'Day 1',
      title: 'Spiritual Varanasi',
      details: [
        { label: 'Morning', text: 'Flight to Varanasi and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Aarti ceremony at the ghats' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Sacred Varanasi',
      details: [
        { label: 'Morning', text: 'Boat ride on the Ganges at sunrise' },
        { label: 'Afternoon', text: 'Main ghats and temples' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Varanasi',
      details: [
        { label: 'Morning', text: 'Kashi Vishwanath Temple' },
        { label: 'Afternoon', text: 'Banaras Hindu University' },
        { label: 'Evening', text: 'Dinner with classical Indian music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Varanasi - Return',
      details: [
        { label: 'Morning', text: 'Silk market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Delhi' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'india-tour-4': [
    {
      day: 'Day 1',
      title: 'Goa Beaches',
      details: [
        { label: 'Morning', text: 'Flight to Goa and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Goa',
      details: [
        { label: 'Morning', text: 'Panaji and Portuguese quarter' },
        { label: 'Afternoon', text: 'Basilica of Bom Jesus and Se Cathedral' },
        { label: 'Evening', text: 'Dinner at colonial restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Goa Beaches',
      details: [
        { label: 'Morning', text: 'Calangute and Baga Beach' },
        { label: 'Afternoon', text: 'Anjuna Beach and hippie market' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Natural Goa',
      details: [
        { label: 'Morning', text: 'Dudhsagar Waterfalls' },
        { label: 'Afternoon', text: 'Palolem Beach and water sports' },
        { label: 'Evening', text: 'Dinner with live music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Goa - Return',
      details: [
        { label: 'Morning', text: 'Spice market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Delhi' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'china-tour-1': [
    {
      day: 'Day 1',
      title: 'Imperial Beijing',
      details: [
        { label: 'Morning', text: 'Beijing International Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Peking duck' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Beijing',
      details: [
        { label: 'Morning', text: 'Forbidden City and Tiananmen Square' },
        { label: 'Afternoon', text: 'Summer Palace and gardens' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Historic Beijing',
      details: [
        { label: 'Morning', text: 'Temple of Heaven and ceremonies' },
        { label: 'Afternoon', text: 'Lama Temple and hutong district' },
        { label: 'Evening', text: 'Rickshaw ride through hutongs' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Great Wall',
      details: [
        { label: 'Morning', text: 'Transfer to the Great Wall (Mutianyu)' },
        { label: 'Afternoon', text: 'Walk along the wall and lunch' },
        { label: 'Evening', text: 'Return to Beijing and dim sum dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Cultural Beijing',
      details: [
        { label: 'Morning', text: 'Confucius Temple and Imperial Academy' },
        { label: 'Afternoon', text: 'Beihai Park and lake' },
        { label: 'Evening', text: 'Traditional Beijing opera' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Modern Beijing',
      details: [
        { label: 'Morning', text: 'Olympic Stadium (Birds Nest)' },
        { label: 'Afternoon', text: 'Wangfujing shopping district' },
        { label: 'Evening', text: 'Dinner at panoramic restaurant' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Panjiayuan Antique Market' },
        { label: 'Afternoon', text: 'Free time for shopping' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'china-tour-2': [
    {
      day: 'Day 1',
      title: 'The Great Wall',
      details: [
        { label: 'Morning', text: 'Flight to Shanghai and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Shanghai cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Shanghai',
      details: [
        { label: 'Morning', text: 'Jade Buddha Temple' },
        { label: 'Afternoon', text: 'Yuyuan Garden and Old City' },
        { label: 'Evening', text: 'Walk along the Bund at sunset' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Modern Shanghai',
      details: [
        { label: 'Morning', text: 'Oriental Pearl Tower' },
        { label: 'Afternoon', text: 'Pudong financial district' },
        { label: 'Evening', text: 'Dinner with city view' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Shanghai',
      details: [
        { label: 'Morning', text: 'Shanghai Museum' },
        { label: 'Afternoon', text: 'French Quarter and Xintiandi' },
        { label: 'Evening', text: 'Dim sum dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Shanghai - Return',
      details: [
        { label: 'Morning', text: 'Silk market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Beijing' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'china-tour-3': [
    {
      day: 'Day 1',
      title: 'Imperial Xian',
      details: [
        { label: 'Morning', text: 'Flight to Xian and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with dumplings' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Xian',
      details: [
        { label: 'Morning', text: 'Terracotta Warriors and museum' },
        { label: 'Afternoon', text: 'Emperor Qin Mausoleum' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Xian',
      details: [
        { label: 'Morning', text: 'Xian City Wall and Bell Tower' },
        { label: 'Afternoon', text: 'Muslim Quarter and Great Mosque' },
        { label: 'Evening', text: 'Halal cuisine dinner' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Imperial Xian',
      details: [
        { label: 'Morning', text: 'Giant Wild Goose Pagoda' },
        { label: 'Afternoon', text: 'Shaanxi History Museum' },
        { label: 'Evening', text: 'Tang Dynasty dance show dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Xian - Return',
      details: [
        { label: 'Morning', text: 'Handicraft market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Beijing' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'china-tour-4': [
    {
      day: 'Day 1',
      title: 'Modern Shanghai',
      details: [
        { label: 'Morning', text: 'Flight to Guilin and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with river fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Natural Guilin',
      details: [
        { label: 'Morning', text: 'Li River and cruise through the mountains' },
        { label: 'Afternoon', text: 'Reed Flute Caves' },
        { label: 'Evening', text: 'Dinner at panoramic restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Guilin - Yangshuo',
      details: [
        { label: 'Morning', text: 'Transfer to Yangshuo' },
        { label: 'Afternoon', text: 'Cycling through countryside and rice fields' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Full Yangshuo',
      details: [
        { label: 'Morning', text: 'Rock climbing in the mountains' },
        { label: 'Afternoon', text: 'Bamboo raft ride' },
        { label: 'Evening', text: 'Dinner with local cuisine' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Yangshuo - Guilin',
      details: [
        { label: 'Morning', text: 'Local market and handicrafts' },
        { label: 'Afternoon', text: 'Return to Guilin' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Guilin - Return',
      details: [
        { label: 'Morning', text: 'Seven Star Park' },
        { label: 'Afternoon', text: 'Flight back to Beijing' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'thailand-tour-1': [
    {
      day: 'Day 1',
      title: 'Authentic Bangkok',
      details: [
        { label: 'Morning', text: 'Suvarnabhumi Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with pad thai' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Royal Bangkok',
      details: [
        { label: 'Morning', text: 'Grand Palace and Temple of the Emerald Buddha' },
        { label: 'Afternoon', text: 'Wat Pho and Reclining Buddha' },
        { label: 'Evening', text: 'Boat ride on the Chao Phraya River' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Bangkok',
      details: [
        { label: 'Morning', text: 'Wat Arun (Temple of Dawn)' },
        { label: 'Afternoon', text: 'Chinatown and flower market' },
        { label: 'Evening', text: 'Dinner at restaurant with traditional music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Modern Bangkok',
      details: [
        { label: 'Morning', text: 'MBK Shopping Center and Siam' },
        { label: 'Afternoon', text: 'Jim Thompson House and Thai silk' },
        { label: 'Evening', text: 'Dinner at rooftop with city view' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Ayutthaya Excursion',
      details: [
        { label: 'Morning', text: 'Transfer to Ayutthaya (UNESCO Heritage)' },
        { label: 'Afternoon', text: 'Historical temples and ruins' },
        { label: 'Evening', text: 'Return to Bangkok and dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Damnoen Saduak Floating Market' },
        { label: 'Afternoon', text: 'Free time for shopping' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'thailand-tour-2': [
    {
      day: 'Day 1',
      title: 'Traditional Chiang Mai',
      details: [
        { label: 'Morning', text: 'Flight to Chiang Mai and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with northern curry' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Chiang Mai',
      details: [
        { label: 'Morning', text: 'Doi Suthep Temple on the mountain' },
        { label: 'Afternoon', text: 'Old City and ancient temples' },
        { label: 'Evening', text: 'Sunday Walking Street night market' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Natural Chiang Mai',
      details: [
        { label: 'Morning', text: 'Doi Inthanon National Park' },
        { label: 'Afternoon', text: 'Waterfalls and tribal villages' },
        { label: 'Evening', text: 'Dinner at restaurant with mountain view' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Traditional Chiang Mai',
      details: [
        { label: 'Morning', text: 'Thai cooking class' },
        { label: 'Afternoon', text: 'Traditional massage and spa' },
        { label: 'Evening', text: 'Dinner at restaurant with local music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Chiang Mai - Return',
      details: [
        { label: 'Morning', text: 'Warorot Market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Bangkok' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'thailand-tour-3': [
    {
      day: 'Day 1',
      title: 'Tropical Phuket',
      details: [
        { label: 'Morning', text: 'Flight to Phuket and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Phuket',
      details: [
        { label: 'Morning', text: 'Phuket Old Town and Sino-Portuguese architecture' },
        { label: 'Afternoon', text: 'Wat Chalong Temple and Big Buddha' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Phuket - Phi Phi Islands',
      details: [
        { label: 'Morning', text: 'Cruise to Phi Phi Islands' },
        { label: 'Afternoon', text: 'Snorkeling in Maya Bay and Monkey Beach' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Phuket - James Bond Island',
      details: [
        { label: 'Morning', text: 'Excursion to James Bond Island (Khao Phing Kan)' },
        { label: 'Afternoon', text: 'Kayaking in Phang Nga Bay' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Phuket Beaches',
      details: [
        { label: 'Morning', text: 'Patong Beach and water sports' },
        { label: 'Afternoon', text: 'Kata and Karon Beach' },
        { label: 'Evening', text: 'Dinner with live music' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Phuket - Return',
      details: [
        { label: 'Morning', text: 'Phuket Market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Bangkok' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'thailand-tour-4': [
    {
      day: 'Day 1',
      title: 'Historic Ayutthaya',
      details: [
        { label: 'Morning', text: 'Transfer to Ayutthaya (UNESCO Heritage)' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with local cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Ayutthaya',
      details: [
        { label: 'Morning', text: 'Historical temples and ruins' },
        { label: 'Afternoon', text: 'Royal Palace and Wat Phra Si Sanphet' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Ayutthaya - Sukhothai',
      details: [
        { label: 'Morning', text: 'Transfer to Sukhothai (UNESCO Heritage)' },
        { label: 'Afternoon', text: 'Sukhothai Historical Park' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Complete Sukhothai',
      details: [
        { label: 'Morning', text: 'Sukhothai temples and museum' },
        { label: 'Afternoon', text: 'Cycling through the historical park' },
        { label: 'Evening', text: 'Dinner with traditional music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Sukhothai - Return',
      details: [
        { label: 'Morning', text: 'Local market and shopping' },
        { label: 'Afternoon', text: 'Return transfer to Bangkok' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'indonesia-tour-1': [
    {
      day: 'Day 1',
      title: 'Vibrant Jakarta',
      details: [
        { label: 'Morning', text: 'Denpasar Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Balinese cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Cultural Bali',
      details: [
        { label: 'Morning', text: 'Tanah Lot Temple and Uluwatu' },
        { label: 'Afternoon', text: 'Kecak dance and sunset' },
        { label: 'Evening', text: 'Dinner at restaurant with sea view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Spiritual Bali',
      details: [
        { label: 'Morning', text: 'Besakih Temple (Mother of all temples)' },
        { label: 'Afternoon', text: 'Tirta Empul Temple and purification' },
        { label: 'Evening', text: 'Traditional Balinese ceremony' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Natural Bali',
      details: [
        { label: 'Morning', text: 'Tegalalang Rice Terraces' },
        { label: 'Afternoon', text: 'Tegenungan Waterfall and Monkey Forest' },
        { label: 'Evening', text: 'Dinner at Ubud restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Bali Beaches',
      details: [
        { label: 'Morning', text: 'Nusa Dua Beach and water sports' },
        { label: 'Afternoon', text: 'Snorkeling in nearby islands' },
        { label: 'Evening', text: 'Dinner on the beach with local music' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Ubud Market and shopping' },
        { label: 'Afternoon', text: 'Free time on the beach' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'indonesia-tour-2': [
    {
      day: 'Day 1',
      title: 'Tropical Bali',
      details: [
        { label: 'Morning', text: 'Jakarta Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with satay' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Jakarta',
      details: [
        { label: 'Morning', text: 'Kota Tua (Old Town) and Fatahillah' },
        { label: 'Afternoon', text: 'National Museum and Monas' },
        { label: 'Evening', text: 'Walk through Glodok (Chinatown)' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Modern Jakarta',
      details: [
        { label: 'Morning', text: 'Grand Indonesia Shopping Center' },
        { label: 'Afternoon', text: 'Taman Mini Indonesia Indah' },
        { label: 'Evening', text: 'Dinner at restaurant with traditional music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Jakarta - Return',
      details: [
        { label: 'Morning', text: 'Pasar Baru Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'indonesia-tour-3': [
    {
      day: 'Day 1',
      title: 'Cultural Yogyakarta',
      details: [
        { label: 'Morning', text: 'Flight to Yogyakarta and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Javanese cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Yogyakarta',
      details: [
        { label: 'Morning', text: 'Sultan Palace (Kraton)' },
        { label: 'Afternoon', text: 'Taman Sari and water castle' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Yogyakarta - Borobudur',
      details: [
        { label: 'Morning', text: 'Borobudur Temple (UNESCO Heritage)' },
        { label: 'Afternoon', text: 'Mendut and Pawon Temples' },
        { label: 'Evening', text: 'Dinner with temple view' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Yogyakarta - Prambanan',
      details: [
        { label: 'Morning', text: 'Prambanan Temple' },
        { label: 'Afternoon', text: 'Sewu and Plaosan Temples' },
        { label: 'Evening', text: 'Ramayana dance show' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Yogyakarta - Return',
      details: [
        { label: 'Morning', text: 'Malioboro Market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Jakarta' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'indonesia-tour-4': [
    {
      day: 'Day 1',
      title: 'Historic Surabaya',
      details: [
        { label: 'Morning', text: 'Flight to Makassar and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Makassar',
      details: [
        { label: 'Morning', text: 'Rotterdam Fort and museum' },
        { label: 'Afternoon', text: 'Paotere Market and port' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Makassar - Tana Toraja',
      details: [
        { label: 'Morning', text: 'Flight to Tana Toraja' },
        { label: 'Afternoon', text: 'Check-in and visit to traditional villages' },
        { label: 'Evening', text: 'Dinner with Toraja cuisine' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Complete Tana Toraja',
      details: [
        { label: 'Morning', text: 'Cliff cemeteries' },
        { label: 'Afternoon', text: 'Traditional tongkonan houses' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Tana Toraja - Makassar',
      details: [
        { label: 'Morning', text: 'Handicraft market and shopping' },
        { label: 'Afternoon', text: 'Flight back to Makassar' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Makassar - Return',
      details: [
        { label: 'Morning', text: 'Free time to explore' },
        { label: 'Afternoon', text: 'Flight back to Jakarta' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'philippines-tour-1': [
    {
      day: 'Day 1',
      title: 'Colonial Manila',
      details: [
        { label: 'Morning', text: 'Manila Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with adobo' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Manila',
      details: [
        { label: 'Morning', text: 'Intramuros and Fort Santiago' },
        { label: 'Afternoon', text: 'Manila Cathedral and San Agustin' },
        { label: 'Evening', text: 'Walk along Manila Bay' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Modern Manila',
      details: [
        { label: 'Morning', text: 'Makati and financial center' },
        { label: 'Afternoon', text: 'National Museum and Rizal Park' },
        { label: 'Evening', text: 'Dinner at restaurant with Filipino music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Manila - Return',
      details: [
        { label: 'Morning', text: 'Divisoria Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'philippines-tour-2': [
    {
      day: 'Day 1',
      title: 'Historic Cebu',
      details: [
        { label: 'Morning', text: 'Flight to Puerto Princesa and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Puerto Princesa',
      details: [
        { label: 'Morning', text: 'Underground River (UNESCO Heritage)' },
        { label: 'Afternoon', text: 'Honda Bay Beach and snorkeling' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 3',
      title: 'El Nido',
      details: [
        { label: 'Morning', text: 'Transfer to El Nido' },
        { label: 'Afternoon', text: 'Tour A - lagoons and beaches' },
        { label: 'Evening', text: 'Dinner with bay view' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Complete El Nido',
      details: [
        { label: 'Morning', text: 'Tour C - caves and secret beaches' },
        { label: 'Afternoon', text: 'Kayaking in the lagoons' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Coron',
      details: [
        { label: 'Morning', text: 'Flight to Coron' },
        { label: 'Afternoon', text: 'Kayangan Lake and Twin Lagoon' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Coron - Return',
      details: [
        { label: 'Morning', text: 'Malcapuya Beach' },
        { label: 'Afternoon', text: 'Flight back to Manila' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'philippines-tour-3': [
    {
      day: 'Day 1',
      title: 'Wild Palawan',
      details: [
        { label: 'Morning', text: 'Flight to Cebu and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with lechon' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Cebu',
      details: [
        { label: 'Morning', text: 'Basilica of Santo Niño and Cathedral' },
        { label: 'Afternoon', text: 'Fort San Pedro and Magellan\'s Cross' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cebu - Bohol',
      details: [
        { label: 'Morning', text: 'Ferry to Bohol and transfer to hotel' },
        { label: 'Afternoon', text: 'Chocolate Hills and tarsiers' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Complete Bohol',
      details: [
        { label: 'Morning', text: 'Baclayon Church and Loboc River' },
        { label: 'Afternoon', text: 'Alona Beach and snorkeling' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Bohol - Return',
      details: [
        { label: 'Morning', text: 'Tagbilaran Market and shopping' },
        { label: 'Afternoon', text: 'Ferry back to Cebu and flight to Manila' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'philippines-tour-4': [
    {
      day: 'Day 1',
      title: 'Natural Davao',
      details: [
        { label: 'Morning', text: 'Flight to Caticlan and transfer to Boracay' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner on the beach' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Boracay Beaches',
      details: [
        { label: 'Morning', text: 'White Beach and water sports' },
        { label: 'Afternoon', text: 'Puka Shell Beach and snorkeling' },
        { label: 'Evening', text: 'Dinner at restaurant with sea view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Boracay Adventure',
      details: [
        { label: 'Morning', text: 'Parasailing and banana boat' },
        { label: 'Afternoon', text: 'Island hopping and diving' },
        { label: 'Evening', text: 'Dinner with live music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Boracay - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Transfer to airport and flight to Manila' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'singapore-tour-1': [
    {
      day: 'Day 1',
      title: 'Marina Bay Experience',
      details: [
        { label: 'Morning', text: 'Changi Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at hawker center' },
        { label: 'Evening', text: 'Welcome dinner with chilli crab' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Singapore',
      details: [
        { label: 'Morning', text: 'Marina Bay Sands and SkyPark' },
        { label: 'Afternoon', text: 'Gardens by the Bay and Supertree Grove' },
        { label: 'Evening', text: 'Light and water show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Singapore - Return',
      details: [
        { label: 'Morning', text: 'Orchard Road and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'singapore-tour-2': [
    {
      day: 'Day 1',
      title: 'Sentosa Island',
      details: [
        { label: 'Morning', text: 'Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at Little India' },
        { label: 'Evening', text: 'Welcome dinner in Chinatown' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Cultural Singapore',
      details: [
        { label: 'Morning', text: 'Sri Mariamman Temple and Sultan Mosque' },
        { label: 'Afternoon', text: 'Arab Quarter and Haji Lane' },
        { label: 'Evening', text: 'Dinner at Peranakan restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Natural Singapore',
      details: [
        { label: 'Morning', text: 'Sentosa Island and Universal Studios' },
        { label: 'Afternoon', text: 'Sentosa Beach and water sports' },
        { label: 'Evening', text: 'Dinner at restaurant with sea view' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Singapore - Return',
      details: [
        { label: 'Morning', text: 'Bugis Market and shopping' },
        { label: 'Afternoon', text: 'Return flight' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'singapore-tour-3': [
    {
      day: 'Day 1',
      title: 'Chinatown Cultural',
      details: [
        { label: 'Morning', text: 'Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at hawker center' },
        { label: 'Evening', text: 'Welcome dinner with chilli crab' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Natural Singapore',
      details: [
        { label: 'Morning', text: 'Singapore Botanic Gardens' },
        { label: 'Afternoon', text: 'Bukit Timah National Park' },
        { label: 'Evening', text: 'Dinner at restaurant with park view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Singapore Islands',
      details: [
        { label: 'Morning', text: 'Excursion to Pulau Ubin Island' },
        { label: 'Afternoon', text: 'Cycling and hiking on the island' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Singapore - Return',
      details: [
        { label: 'Morning', text: 'Sungei Buloh Nature Reserve' },
        { label: 'Afternoon', text: 'Free time for shopping' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'singapore-tour-4': [
    {
      day: 'Day 1',
      title: 'Jurong Bird Park',
      details: [
        { label: 'Morning', text: 'Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with dim sum' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Nocturnal Singapore',
      details: [
        { label: 'Morning', text: 'Free time to rest' },
        { label: 'Afternoon', text: 'Marina Bay Sands and SkyPark' },
        { label: 'Evening', text: 'Light and water show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Singapore - Return',
      details: [
        { label: 'Morning', text: 'Orchard Road and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'germany-tour-1': [
    {
      day: 'Day 1',
      title: 'Berlin and the History Route',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Brandenburg Gate and Unter den Linden' },
        { label: 'Evening', text: 'Dinner at Alexanderplatz' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial and Modern Berlin',
      details: [
        { label: 'Morning', text: 'Reichstag and Holocaust Memorial' },
        { label: 'Afternoon', text: 'Museum Island' },
        { label: 'Evening', text: 'Kreuzberg neighborhood' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Potsdam and Palaces',
      details: [
        { label: 'Morning', text: 'Excursion to Potsdam and Sanssouci Palace' },
        { label: 'Afternoon', text: 'Gardens and old town' },
        { label: 'Evening', text: 'Return to Berlin' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Berlin Wall and Urban Art',
      details: [
        { label: 'Morning', text: 'East Side Gallery and Wall remains' },
        { label: 'Afternoon', text: 'Prenzlauer Berg neighborhood' },
        { label: 'Evening', text: 'Dinner at typical restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'germany-tour-2': [
    {
      day: 'Day 1',
      title: 'Bavaria and Dream Castles',
      details: [
        { label: 'Morning', text: 'Arrival in Munich and transfer to hotel' },
        { label: 'Afternoon', text: 'Marienplatz and Viktualienmarkt' },
        { label: 'Evening', text: 'Dinner at traditional brewery' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Cultural Munich',
      details: [
        { label: 'Morning', text: 'Deutsches Museum and English Garden' },
        { label: 'Afternoon', text: 'Nymphenburg Palace' },
        { label: 'Evening', text: 'Opera or theater' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Romantic Route',
      details: [
        { label: 'Morning', text: 'Departure to Füssen' },
        { label: 'Afternoon', text: 'Visit to Rothenburg ob der Tauber' },
        { label: 'Evening', text: 'Dinner in medieval town' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Neuschwanstein Castle',
      details: [
        { label: 'Morning', text: 'Visit to Neuschwanstein Castle' },
        { label: 'Afternoon', text: 'Hohenschwangau Castle' },
        { label: 'Evening', text: 'Return to Munich' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Lakes and Mountains',
      details: [
        { label: 'Morning', text: 'Excursion to Bavarian Alps' },
        { label: 'Afternoon', text: 'Boat ride on Königssee Lake' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Return',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'germany-tour-3': [
    {
      day: 'Day 1',
      title: 'Hamburg and the Maritime North',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Speicherstadt and port' },
        { label: 'Evening', text: 'Dinner in St. Pauli' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Modern Hamburg',
      details: [
        { label: 'Morning', text: 'Elbphilharmonie and HafenCity' },
        { label: 'Afternoon', text: 'Fish market and Alster' },
        { label: 'Evening', text: 'Musical or theater' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Lübeck and the Baltic Coast',
      details: [
        { label: 'Morning', text: 'Excursion to Lübeck' },
        { label: 'Afternoon', text: 'Walk through the Hanseatic city' },
        { label: 'Evening', text: 'Return to Hamburg' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'germany-tour-4': [
    {
      day: 'Day 1',
      title: 'Black Forest and Clock Route',
      details: [
        { label: 'Morning', text: 'Arrival in Freiburg and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through old town and cathedral' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Triberg and Waterfalls',
      details: [
        { label: 'Morning', text: 'Excursion to Triberg, visit to Germany\'s highest waterfalls' },
        { label: 'Afternoon', text: 'Black Forest Museum and cuckoo clocks' },
        { label: 'Evening', text: 'Dinner at typical inn' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Panoramic Route',
      details: [
        { label: 'Morning', text: 'Tour along the Schwarzwaldhochstrasse panoramic road' },
        { label: 'Afternoon', text: 'Stops in towns like Titisee and Schluchsee' },
        { label: 'Evening', text: 'Spa and relaxation at hotel' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Baden-Baden and Thermal Baths',
      details: [
        { label: 'Morning', text: 'Visit to Baden-Baden and its thermal baths' },
        { label: 'Afternoon', text: 'Walk through gardens and casino' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'spain-tour-1': [
    {
      day: 'Day 1',
      title: 'Madrid and Historic Castile',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Puerta del Sol and Plaza Mayor' },
        { label: 'Evening', text: 'Tapas dinner in La Latina' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Art and Culture',
      details: [
        { label: 'Morning', text: 'Prado Museum and Retiro Park' },
        { label: 'Afternoon', text: 'Royal Palace and Almudena Cathedral' },
        { label: 'Evening', text: 'Flamenco show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Medieval Toledo',
      details: [
        { label: 'Morning', text: 'Excursion to Toledo, UNESCO World Heritage city' },
        { label: 'Afternoon', text: 'Visit to Cathedral and Jewish quarter' },
        { label: 'Evening', text: 'Return to Madrid' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Segovia and Ávila',
      details: [
        { label: 'Morning', text: 'Excursion to Segovia (aqueduct, Alcázar)' },
        { label: 'Afternoon', text: 'Ávila walls' },
        { label: 'Evening', text: 'Farewell dinner in Madrid' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'spain-tour-2': [
    {
      day: 'Day 1',
      title: 'Andalusia and the Magical South',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Santa Cruz neighborhood and Cathedral' },
        { label: 'Evening', text: 'Dinner with flamenco show' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Monumental Seville',
      details: [
        { label: 'Morning', text: 'Real Alcázar and Plaza de España' },
        { label: 'Afternoon', text: 'Walk along the Guadalquivir' },
        { label: 'Evening', text: 'Tapas in Triana' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Córdoba and its Mosque',
      details: [
        { label: 'Morning', text: 'Excursion to Córdoba' },
        { label: 'Afternoon', text: 'Visit to the Mosque and Jewish quarter' },
        { label: 'Evening', text: 'Return to Seville' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Granada and the Alhambra',
      details: [
        { label: 'Morning', text: 'Departure to Granada' },
        { label: 'Afternoon', text: 'Visit to Alhambra and Generalife' },
        { label: 'Evening', text: 'Dinner in Albaicín' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Costa del Sol',
      details: [
        { label: 'Morning', text: 'Departure to Málaga and beach walk' },
        { label: 'Afternoon', text: 'Visit to Picasso Museum' },
        { label: 'Evening', text: 'Dinner at chiringuito' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Ronda and White Villages',
      details: [
        { label: 'Morning', text: 'Excursion to Ronda' },
        { label: 'Afternoon', text: 'Route through white villages' },
        { label: 'Evening', text: 'Return to Seville' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'spain-tour-3': [
    {
      day: 'Day 1',
      title: 'Barcelona and Modern Catalonia',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Las Ramblas and Gothic Quarter' },
        { label: 'Evening', text: 'Dinner at Port Olímpic' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Gaudí and Architecture',
      details: [
        { label: 'Morning', text: 'Sagrada Familia and Passeig de Gràcia' },
        { label: 'Afternoon', text: 'Park Güell and Casa Batlló' },
        { label: 'Evening', text: 'Light show at Magic Fountain' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Montserrat and Sitges',
      details: [
        { label: 'Morning', text: 'Excursion to Montserrat' },
        { label: 'Afternoon', text: 'Visit to Sitges and its beaches' },
        { label: 'Evening', text: 'Return to Barcelona' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Girona and Figueres',
      details: [
        { label: 'Morning', text: 'Excursion to Girona' },
        { label: 'Afternoon', text: 'Dalí Museum in Figueres' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'spain-tour-4': [
    {
      day: 'Day 1',
      title: 'Canary Islands and Atlantic Paradise',
      details: [
        { label: 'Morning', text: 'Arrival at Tenerife South Airport' },
        { label: 'Afternoon', text: 'Transfer to hotel and rest' },
        { label: 'Evening', text: 'Dinner in Puerto de la Cruz' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Tenerife and El Teide',
      details: [
        { label: 'Morning', text: 'Excursion to Teide National Park' },
        { label: 'Afternoon', text: 'Cable car to Teide peak (3,718m)' },
        { label: 'Evening', text: 'Dinner with ocean views' },
      ],
    },
    {
      day: 'Day 3',
      title: 'La Gomera and Whistling',
      details: [
        { label: 'Morning', text: 'Ferry to La Gomera' },
        { label: 'Afternoon', text: 'Garajonay National Park and Gomera whistling' },
        { label: 'Evening', text: 'Return to Tenerife' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Gran Canaria',
      details: [
        { label: 'Morning', text: 'Ferry to Gran Canaria' },
        { label: 'Afternoon', text: 'Las Palmas and Las Canteras beach' },
        { label: 'Evening', text: 'Dinner in Vegueta (historic center)' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Lanzarote and Volcanoes',
      details: [
        { label: 'Morning', text: 'Ferry to Lanzarote' },
        { label: 'Afternoon', text: 'Timanfaya National Park and Los Verdes caves' },
        { label: 'Evening', text: 'Dinner in Puerto del Carmen' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time on beaches' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'france-tour-1': [
    {
      day: 'Day 1',
      title: 'Paris and Loire Castles',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk along the Seine and Notre Dame' },
        { label: 'Evening', text: 'Dinner in Montmartre' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Paris',
      details: [
        { label: 'Morning', text: 'Eiffel Tower and Champs-Élysées' },
        { label: 'Afternoon', text: 'Louvre Museum' },
        { label: 'Evening', text: 'Show at Moulin Rouge' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Versailles and Art',
      details: [
        { label: 'Morning', text: 'Excursion to Palace of Versailles' },
        { label: 'Afternoon', text: 'Latin Quarter and Luxembourg Gardens' },
        { label: 'Evening', text: 'Dinner at Parisian bistro' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Loire Castles',
      details: [
        { label: 'Morning', text: 'Departure to Loire region' },
        { label: 'Afternoon', text: 'Visit to Chambord and Chenonceau castles' },
        { label: 'Evening', text: 'Dinner and night in Tours' },
      ],
    },
    {
      day: 'Day 5',
      title: 'More Castles and Return',
      details: [
        { label: 'Morning', text: 'Amboise Castle and Clos Lucé' },
        { label: 'Afternoon', text: 'Return to Paris' },
        { label: 'Evening', text: 'Night walk through the city' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'france-tour-2': [
    {
      day: 'Day 1',
      title: 'French Riviera and Provence',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Nice old town' },
        { label: 'Evening', text: 'Dinner at Promenade des Anglais' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Monaco and Monte Carlo',
      details: [
        { label: 'Morning', text: 'Excursion to Monaco and Monte Carlo' },
        { label: 'Afternoon', text: 'Visit to Casino and Royal Palace' },
        { label: 'Evening', text: 'Return to Nice' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cannes and Antibes',
      details: [
        { label: 'Morning', text: 'Visit to Cannes and walk along La Croisette' },
        { label: 'Afternoon', text: 'Antibes and its port' },
        { label: 'Evening', text: 'Dinner at coastal restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Saint-Tropez and Beaches',
      details: [
        { label: 'Morning', text: 'Excursion to Saint-Tropez' },
        { label: 'Afternoon', text: 'Beaches and free time' },
        { label: 'Evening', text: 'Return to Nice' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Provence and Lavender Fields',
      details: [
        { label: 'Morning', text: 'Route through Provence and lavender fields (June-July)' },
        { label: 'Afternoon', text: 'Visit to villages like Gordes and Roussillon' },
        { label: 'Evening', text: 'Dinner in Avignon' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Avignon and Arles',
      details: [
        { label: 'Morning', text: 'Palace of the Popes in Avignon' },
        { label: 'Afternoon', text: 'Roman amphitheater of Arles' },
        { label: 'Evening', text: 'Return to Nice' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'france-tour-3': [
    {
      day: 'Day 1',
      title: 'Normandy and Historic Brittany',
      details: [
        { label: 'Morning', text: 'Departure from Paris to Rouen' },
        { label: 'Afternoon', text: 'Visit to cathedral and old town' },
        { label: 'Evening', text: 'Dinner in Honfleur' },
      ],
    },
    {
      day: 'Day 2',
      title: 'D-Day Beaches',
      details: [
        { label: 'Morning', text: 'Excursion to Normandy D-Day beaches' },
        { label: 'Afternoon', text: 'American cemetery and Arromanches' },
        { label: 'Evening', text: 'Dinner in Caen' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Mont Saint-Michel',
      details: [
        { label: 'Morning', text: 'Visit to Mont Saint-Michel' },
        { label: 'Afternoon', text: 'Walk through the bay' },
        { label: 'Evening', text: 'Dinner in Saint-Malo' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Medieval Brittany',
      details: [
        { label: 'Morning', text: 'Dinan and its castle' },
        { label: 'Afternoon', text: 'Rennes and old town' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Return to Paris',
      details: [
        { label: 'Morning', text: 'Return to Paris' },
        { label: 'Afternoon', text: 'Free time' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'france-tour-4': [
    {
      day: 'Day 1',
      title: 'French Gastronomy',
      details: [
        { label: 'Morning', text: 'Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Basic French cooking class' },
        { label: 'Evening', text: 'Dinner at traditional bistrot' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Gastronomic Paris',
      details: [
        { label: 'Morning', text: 'Les Halles Market and shopping' },
        { label: 'Afternoon', text: 'Cheese and wine tasting' },
        { label: 'Evening', text: 'Dinner at Michelin-starred restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Paris - Lyon',
      details: [
        { label: 'Morning', text: 'TGV to Lyon (gastronomic capital)' },
        { label: 'Afternoon', text: 'Les Halles de Lyon Market' },
        { label: 'Evening', text: 'Dinner at traditional Lyonnais bouchon' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Lyon - Burgundy',
      details: [
        { label: 'Morning', text: 'Visit to wine cellars in Beaune' },
        { label: 'Afternoon', text: 'Wine tasting and lunch' },
        { label: 'Evening', text: 'Return to Lyon and dinner at Paul Bocuse' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Lyon - Return',
      details: [
        { label: 'Morning', text: 'Lyonnais cooking class' },
        { label: 'Afternoon', text: 'TGV return to Paris' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'italy-tour-1': [
    {
      day: 'Day 1',
      title: 'Rome, Florence and Venice',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Colosseum and Roman Forum' },
        { label: 'Evening', text: 'Dinner in Trastevere' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Rome and Vatican',
      details: [
        { label: 'Morning', text: 'Visit to Vatican and St. Peter\'s Basilica' },
        { label: 'Afternoon', text: 'Vatican Museums and Sistine Chapel' },
        { label: 'Evening', text: 'Piazza Navona and Trevi Fountain' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Renaissance Florence',
      details: [
        { label: 'Morning', text: 'Train to Florence' },
        { label: 'Afternoon', text: 'Uffizi Gallery and Santa Maria del Fiore Cathedral' },
        { label: 'Evening', text: 'Dinner in Oltrarno' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Florence and Pisa',
      details: [
        { label: 'Morning', text: 'Excursion to Pisa and Leaning Tower' },
        { label: 'Afternoon', text: 'Return to Florence and shopping' },
        { label: 'Evening', text: 'Opera show' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Romantic Venice',
      details: [
        { label: 'Morning', text: 'Train to Venice' },
        { label: 'Afternoon', text: 'St. Mark\'s Square and Doge\'s Palace' },
        { label: 'Evening', text: 'Gondola ride' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Lagoon Islands',
      details: [
        { label: 'Morning', text: 'Excursion to Murano and Burano' },
        { label: 'Afternoon', text: 'Free time in Venice' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'italy-tour-2': [
    {
      day: 'Day 1',
      title: 'Amalfi Coast and Southern Italy',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through historic center' },
        { label: 'Evening', text: 'Neapolitan pizza dinner' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Pompeii and Sorrento',
      details: [
        { label: 'Morning', text: 'Excursion to Pompeii' },
        { label: 'Afternoon', text: 'Sorrento and Tyrrhenian Sea views' },
        { label: 'Evening', text: 'Dinner in Sorrento' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Amalfi Coast',
      details: [
        { label: 'Morning', text: 'Panoramic route through Amalfi and Positano' },
        { label: 'Afternoon', text: 'Free time at the beach' },
        { label: 'Evening', text: 'Dinner at coastal restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Capri and Blue Grotto',
      details: [
        { label: 'Morning', text: 'Boat excursion to Capri' },
        { label: 'Afternoon', text: 'Visit to Blue Grotto' },
        { label: 'Evening', text: 'Return to Naples' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Matera and its History',
      details: [
        { label: 'Morning', text: 'Excursion to Matera (UNESCO Heritage)' },
        { label: 'Afternoon', text: 'Tour through the Sassi' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'italy-tour-3': [
    {
      day: 'Day 1',
      title: 'Milan, Lakes and Italian Alps',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Milan Cathedral and Galleria Vittorio Emanuele II' },
        { label: 'Evening', text: 'Dinner in Brera' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Art and Fashion',
      details: [
        { label: 'Morning', text: 'Brera Pinacoteca and fashion district' },
        { label: 'Afternoon', text: 'Sforza Castle' },
        { label: 'Evening', text: 'Show at La Scala' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Lake Como',
      details: [
        { label: 'Morning', text: 'Excursion to Lake Como' },
        { label: 'Afternoon', text: 'Boat ride and visit to Bellagio' },
        { label: 'Evening', text: 'Return to Milan' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Lake Maggiore and Stresa',
      details: [
        { label: 'Morning', text: 'Excursion to Lake Maggiore' },
        { label: 'Afternoon', text: 'Borromean Islands' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'italy-tour-4': [
    {
      day: 'Day 1',
      title: 'Sicily and Mediterranean Culture',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Palermo Cathedral and historic district' },
        { label: 'Evening', text: 'Dinner at Ballarò market' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Palermo and Monreale',
      details: [
        { label: 'Morning', text: 'Palace of the Normans' },
        { label: 'Afternoon', text: 'Monreale Cathedral and Byzantine mosaics' },
        { label: 'Evening', text: 'Walk along the seafront' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Agrigento and Valley of the Temples',
      details: [
        { label: 'Morning', text: 'Excursion to Agrigento' },
        { label: 'Afternoon', text: 'Visit to Valley of the Temples' },
        { label: 'Evening', text: 'Dinner in Taormina' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Taormina and Etna',
      details: [
        { label: 'Morning', text: 'Greek Theater of Taormina' },
        { label: 'Afternoon', text: 'Excursion to Mount Etna' },
        { label: 'Evening', text: 'Dinner with volcano views' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Historic Syracuse',
      details: [
        { label: 'Morning', text: 'Excursion to Syracuse' },
        { label: 'Afternoon', text: 'Ortigia Island and cathedral' },
        { label: 'Evening', text: 'Walk through medieval quarter' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Noto and Ragusa',
      details: [
        { label: 'Morning', text: 'Visit to Noto (Sicilian baroque)' },
        { label: 'Afternoon', text: 'Ragusa Ibla and baroque architecture' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Catania and Ionian Coast',
      details: [
        { label: 'Morning', text: 'Catania Cathedral and fresh fish' },
        { label: 'Afternoon', text: 'Free time at the beach' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'uk-tour-1': [
    {
      day: 'Day 1',
      title: 'London and Southeast England',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk along the Thames and London Eye' },
        { label: 'Evening', text: 'Dinner in Covent Garden' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial London',
      details: [
        { label: 'Morning', text: 'Buckingham Palace and Changing of the Guard' },
        { label: 'Afternoon', text: 'British Museum and Piccadilly Circus' },
        { label: 'Evening', text: 'Show in West End' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Windsor Castle and Oxford',
      details: [
        { label: 'Morning', text: 'Excursion to Windsor Castle' },
        { label: 'Afternoon', text: 'Visit to University of Oxford' },
        { label: 'Evening', text: 'Return to London' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Canterbury and Dover',
      details: [
        { label: 'Morning', text: 'Excursion to Canterbury and its cathedral' },
        { label: 'Afternoon', text: 'White Cliffs of Dover' },
        { label: 'Evening', text: 'Farewell dinner in London' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'uk-tour-2': [
    {
      day: 'Day 1',
      title: 'Scotland and Highlands',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Edinburgh Castle and Royal Mile' },
        { label: 'Evening', text: 'Dinner at Scottish pub' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Edinburgh',
      details: [
        { label: 'Morning', text: 'Palace of Holyroodhouse' },
        { label: 'Afternoon', text: 'National Museum of Scotland' },
        { label: 'Evening', text: 'Bagpipe show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Loch Ness and Inverness',
      details: [
        { label: 'Morning', text: 'Excursion to Loch Ness' },
        { label: 'Afternoon', text: 'Urquhart Castle and visit to Inverness' },
        { label: 'Evening', text: 'Dinner in Highlands' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Isle of Skye',
      details: [
        { label: 'Morning', text: 'Panoramic route to Isle of Skye' },
        { label: 'Afternoon', text: 'Walk through Portree and natural landscapes' },
        { label: 'Evening', text: 'Return to Inverness' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Glasgow and Culture',
      details: [
        { label: 'Morning', text: 'Transfer to Glasgow' },
        { label: 'Afternoon', text: 'Gallery of Modern Art and Cathedral' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'uk-tour-3': [
    {
      day: 'Day 1',
      title: 'Wales and Western Britain',
      details: [
        { label: 'Morning', text: 'Departure from London to Cardiff' },
        { label: 'Afternoon', text: 'Cardiff Castle and historic center' },
        { label: 'Evening', text: 'Dinner at Welsh restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Snowdonia National Park',
      details: [
        { label: 'Morning', text: 'Excursion to Snowdonia National Park' },
        { label: 'Afternoon', text: 'Steam train ride' },
        { label: 'Evening', text: 'Dinner in traditional village' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Liverpool and The Beatles',
      details: [
        { label: 'Morning', text: 'Transfer to Liverpool' },
        { label: 'Afternoon', text: 'The Beatles Story and Albert Dock' },
        { label: 'Evening', text: 'Live music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Chester and Roman Walls',
      details: [
        { label: 'Morning', text: 'Visit to Chester and its walls' },
        { label: 'Afternoon', text: 'Shopping in The Rows' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Return to London',
      details: [
        { label: 'Morning', text: 'Return to London' },
        { label: 'Afternoon', text: 'Free time' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'uk-tour-4': [
    {
      day: 'Day 1',
      title: 'Northern Ireland and Atlantic Coast',
      details: [
        { label: 'Morning', text: 'Flight from London to Belfast' },
        { label: 'Afternoon', text: 'Belfast Castle and Titanic Quarter' },
        { label: 'Evening', text: 'Dinner at traditional Irish pub' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Antrim Coast',
      details: [
        { label: 'Morning', text: 'Excursion to Giant\'s Causeway' },
        { label: 'Afternoon', text: 'Carrick-a-Rede rope bridge' },
        { label: 'Evening', text: 'Dinner in Bushmills' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Derry and Murals',
      details: [
        { label: 'Morning', text: 'Transfer to Derry/Londonderry' },
        { label: 'Afternoon', text: 'Historic walls and political murals' },
        { label: 'Evening', text: 'Dinner in historic center' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Irish Loch Ness',
      details: [
        { label: 'Morning', text: 'Excursion to Lough Erne' },
        { label: 'Afternoon', text: 'Enniskillen Castle and navigation' },
        { label: 'Evening', text: 'Return to Belfast' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time in Belfast' },
        { label: 'Afternoon', text: 'Return flight to London' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'greece-tour-1': [
    {
      day: 'Day 1',
      title: 'Athens and Classics of Antiquity',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Plaka and Monastiraki' },
        { label: 'Evening', text: 'Dinner with Acropolis view' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Ancient Athens',
      details: [
        { label: 'Morning', text: 'Acropolis and Acropolis Museum' },
        { label: 'Afternoon', text: 'Agora and Temple of Olympian Zeus' },
        { label: 'Evening', text: 'Greek dance show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Delphi and Mysteries',
      details: [
        { label: 'Morning', text: 'Excursion to Delphi' },
        { label: 'Afternoon', text: 'Visit to oracle and museum' },
        { label: 'Evening', text: 'Return to Athens' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cape Sounion and Temple of Poseidon',
      details: [
        { label: 'Morning', text: 'Excursion to Cape Sounion' },
        { label: 'Afternoon', text: 'Temple of Poseidon and Aegean Sea views' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'greece-tour-2': [
    {
      day: 'Day 1',
      title: 'Cyclades Islands (Santorini and Mykonos)',
      details: [
        { label: 'Morning', text: 'Ferry to Santorini' },
        { label: 'Afternoon', text: 'Check-in and walk through Fira' },
        { label: 'Evening', text: 'Dinner with caldera view' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Romantic Santorini',
      details: [
        { label: 'Morning', text: 'Oia and its blue domes' },
        { label: 'Afternoon', text: 'Volcanic beaches' },
        { label: 'Evening', text: 'Sunset in Oia' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Historic Santorini',
      details: [
        { label: 'Morning', text: 'Akrotiri archaeological site' },
        { label: 'Afternoon', text: 'Wineries and wine tasting' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Mykonos and its Beaches',
      details: [
        { label: 'Morning', text: 'Ferry to Mykonos' },
        { label: 'Afternoon', text: 'Paradise and Super Paradise beaches' },
        { label: 'Evening', text: 'Nightlife in Mykonos Town' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Delos and Mythology',
      details: [
        { label: 'Morning', text: 'Excursion to Delos Island' },
        { label: 'Afternoon', text: 'Archaeological ruins' },
        { label: 'Evening', text: 'Return to Mykonos' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Return to Athens',
      details: [
        { label: 'Morning', text: 'Ferry to Athens' },
        { label: 'Afternoon', text: 'Free time' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'greece-tour-3': [
    {
      day: 'Day 1',
      title: 'Crete and Southern Greece',
      details: [
        { label: 'Morning', text: 'Flight to Crete' },
        { label: 'Afternoon', text: 'Knossos Palace' },
        { label: 'Evening', text: 'Dinner at Heraklion port' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Chania and Rethymno',
      details: [
        { label: 'Morning', text: 'Excursion to Chania' },
        { label: 'Afternoon', text: 'Walk through Rethymno' },
        { label: 'Evening', text: 'Dinner at Cretan tavern' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Samaria Gorge',
      details: [
        { label: 'Morning', text: 'Hiking in Samaria Gorge' },
        { label: 'Afternoon', text: 'Picnic in nature' },
        { label: 'Evening', text: 'Return to Heraklion' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Southern Beaches',
      details: [
        { label: 'Morning', text: 'Excursion to Elafonisi and Matala beaches' },
        { label: 'Afternoon', text: 'Free time at the beach' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Archaeology and Culture',
      details: [
        { label: 'Morning', text: 'Heraklion Archaeological Museum' },
        { label: 'Afternoon', text: 'Shopping and walk through center' },
        { label: 'Evening', text: 'Greek music show' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Return to Athens',
      details: [
        { label: 'Morning', text: 'Flight to Athens' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'greece-tour-4': [
    {
      day: 'Day 1',
      title: 'Thessaloniki and Macedonia',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk along the seafront and White Tower' },
        { label: 'Evening', text: 'Dinner in Ladadika district' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Byzantine Thessaloniki',
      details: [
        { label: 'Morning', text: 'Rotunda and Arch of Galerius' },
        { label: 'Afternoon', text: 'Church of Saint Sophia and Saint Demetrius' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Mount Athos and Chalkidiki Peninsula',
      details: [
        { label: 'Morning', text: 'Excursion to Chalkidiki Peninsula' },
        { label: 'Afternoon', text: 'Visit to coastal villages' },
        { label: 'Evening', text: 'Return to Thessaloniki' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Vergina and Philippi',
      details: [
        { label: 'Morning', text: 'Excursion to Vergina (royal tombs)' },
        { label: 'Afternoon', text: 'Philippi ruins' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'austria-tour-1': [
    {
      day: 'Day 1',
      title: 'Imperial Vienna',
      details: [
        { label: 'Morning', text: 'Airport arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and walk through historic center' },
        { label: 'Evening', text: 'Welcome dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Palaces and Music',
      details: [
        { label: 'Morning', text: 'Visit to Schönbrunn Palace' },
        { label: 'Afternoon', text: 'Tour of Hofburg Palace and museums' },
        { label: 'Evening', text: 'Classical music concert at State Opera' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Art and Cafes',
      details: [
        { label: 'Morning', text: 'Museum of Art History and Albertina Museum' },
        { label: 'Afternoon', text: 'Viennese café route and Sachertorte tasting' },
        { label: 'Evening', text: 'Dinner in Naschmarkt district' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Modern Vienna',
      details: [
        { label: 'Morning', text: 'Hundertwasserhaus and Prater' },
        { label: 'Afternoon', text: 'Shopping on Kärntner Strasse' },
        { label: 'Evening', text: 'Night walk along the Danube' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time and souvenir shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'austria-tour-2': [
    {
      day: 'Day 1',
      title: 'Salzburg and the Alps',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through old town and Mozart\'s house' },
        { label: 'Evening', text: 'Typical dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Salzburg',
      details: [
        { label: 'Morning', text: 'Hohensalzburg Fortress and Cathedral' },
        { label: 'Afternoon', text: 'Mirabell Gardens and Getreidegasse' },
        { label: 'Evening', text: 'Baroque music concert' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Lakes and Mountains',
      details: [
        { label: 'Morning', text: 'Excursion to lake region (Wolfgangsee, Hallstatt)' },
        { label: 'Afternoon', text: 'Boat ride and visit to alpine villages' },
        { label: 'Evening', text: 'Dinner in Hallstatt' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Smiles Route',
      details: [
        { label: 'Morning', text: 'Visit to Hallein salt mines' },
        { label: 'Afternoon', text: 'Panoramic route through the Alps' },
        { label: 'Evening', text: 'Return to Salzburg' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Nature and Relaxation',
      details: [
        { label: 'Morning', text: 'Hiking on alpine trails' },
        { label: 'Afternoon', text: 'Spa and relaxation at hotel' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Return',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'austria-tour-3': [
    {
      day: 'Day 1',
      title: 'Tyrol and Alpine Adventure',
      details: [
        { label: 'Morning', text: 'Arrival in Innsbruck and transfer to hotel' },
        { label: 'Afternoon', text: 'Tour of historic center and Golden Roof' },
        { label: 'Evening', text: 'Traditional Tyrolean dinner' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Mountains and Sports',
      details: [
        { label: 'Morning', text: 'Nordkette cable car and panoramic views' },
        { label: 'Afternoon', text: 'Alpine hiking or cycling' },
        { label: 'Evening', text: 'Dinner at mountain restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Castles and Culture',
      details: [
        { label: 'Morning', text: 'Visit to Ambras Castle' },
        { label: 'Afternoon', text: 'Tyrolean Museum and craft shopping' },
        { label: 'Evening', text: 'Folk show' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Nature Adventure',
      details: [
        { label: 'Morning', text: 'Rafting on the Inn River' },
        { label: 'Afternoon', text: 'Picnic in the Alps' },
        { label: 'Evening', text: 'Relaxation at alpine spa' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Traditional Villages',
      details: [
        { label: 'Morning', text: 'Excursion to Alpbach and Seefeld' },
        { label: 'Afternoon', text: 'Cheese and local products tasting' },
        { label: 'Evening', text: 'Dinner at typical inn' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Free Day',
      details: [
        { label: 'Morning', text: 'Optional: skiing, snowboarding or thermal baths' },
        { label: 'Afternoon', text: 'Free time' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Return',
      details: [
        { label: 'Morning', text: 'Transfer to airport' },
        { label: 'Afternoon', text: 'End of tour' },
        { label: 'Evening', text: '---' },
      ],
    },
  ],
  'austria-tour-4': [
    {
      day: 'Day 1',
      title: 'Scenic Austria',
      details: [
        { label: 'Morning', text: 'Departure from Vienna to Wachau Valley' },
        { label: 'Afternoon', text: 'Visit to Melk Abbey and wine tasting' },
        { label: 'Evening', text: 'Arrival in Linz and dinner on the Danube' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Linz - Salzkammergut',
      details: [
        { label: 'Morning', text: 'Tour of Linz and its modern art' },
        { label: 'Afternoon', text: 'Excursion to Salzkammergut region (Traunsee Lake)' },
        { label: 'Evening', text: 'Dinner in lakeside village' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Graz and Austrian Culture',
      details: [
        { label: 'Morning', text: 'Transfer to Graz and visit to old town' },
        { label: 'Afternoon', text: 'Art Museum and Schlossberg' },
        { label: 'Evening', text: 'Dinner with traditional music' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Return to Vienna',
      details: [
        { label: 'Morning', text: 'Return to Vienna on panoramic train' },
        { label: 'Afternoon', text: 'Free time and shopping' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'switzerland-tour-1': [
    {
      day: 'Day 1',
      title: 'Zurich and Lucerne',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk along Bahnhofstrasse and lake' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Financial Zurich',
      details: [
        { label: 'Morning', text: 'Swiss National Museum' },
        { label: 'Afternoon', text: 'Niederdorf district and Grossmünster' },
        { label: 'Evening', text: 'Night walk along the lake' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Lucerne and Mountains',
      details: [
        { label: 'Morning', text: 'Train to Lucerne' },
        { label: 'Afternoon', text: 'Chapel Bridge and walls' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Mount Pilatus',
      details: [
        { label: 'Morning', text: 'Excursion to Mount Pilatus' },
        { label: 'Afternoon', text: 'Cable car ride and cogwheel train' },
        { label: 'Evening', text: 'Return to Zurich' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'switzerland-tour-2': [
    {
      day: 'Day 1',
      title: 'Bern and Bernese Alps',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through medieval old town' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Bern',
      details: [
        { label: 'Morning', text: 'Cathedral and Clock Tower' },
        { label: 'Afternoon', text: 'Einstein House and Rosengarten' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Interlaken and Lakes',
      details: [
        { label: 'Morning', text: 'Excursion to Interlaken' },
        { label: 'Afternoon', text: 'Boat ride on Lake Thun' },
        { label: 'Evening', text: 'Dinner with mountain views' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Jungfraujoch',
      details: [
        { label: 'Morning', text: 'Excursion to Jungfraujoch' },
        { label: 'Afternoon', text: 'Walk on the glacier' },
        { label: 'Evening', text: 'Return to Bern' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Grindelwald and Adventure',
      details: [
        { label: 'Morning', text: 'Excursion to Grindelwald' },
        { label: 'Afternoon', text: 'Mountain activities' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'switzerland-tour-3': [
    {
      day: 'Day 1',
      title: 'Geneva and Lake Geneva',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk along the lake and Jet d\'Eau' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'International Geneva',
      details: [
        { label: 'Morning', text: 'Palace of Nations' },
        { label: 'Afternoon', text: 'Clock Museum and Art Museum' },
        { label: 'Evening', text: 'Walk through old town' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Lausanne and Montreux',
      details: [
        { label: 'Morning', text: 'Excursion to Lausanne' },
        { label: 'Afternoon', text: 'Chillon Castle in Montreux' },
        { label: 'Evening', text: 'Return to Geneva' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Valais and Vineyards',
      details: [
        { label: 'Morning', text: 'Excursion to wine region' },
        { label: 'Afternoon', text: 'Wine tasting' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'switzerland-tour-4': [
    {
      day: 'Day 1',
      title: 'Basel and Northern Switzerland',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through old town' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Cultural Basel',
      details: [
        { label: 'Morning', text: 'Basel Art Museum' },
        { label: 'Afternoon', text: 'Cathedral and Rathaus' },
        { label: 'Evening', text: 'Walk along the Rhine' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Fribourg and Bern',
      details: [
        { label: 'Morning', text: 'Excursion to Fribourg' },
        { label: 'Afternoon', text: 'Visit to medieval city' },
        { label: 'Evening', text: 'Return to Basel' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'netherlands-tour-1': [
    {
      day: 'Day 1',
      title: 'Amsterdam and Dutch Culture',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through historic center and Dam Square' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Museums and Art',
      details: [
        { label: 'Morning', text: 'Van Gogh Museum and Rijksmuseum' },
        { label: 'Afternoon', text: 'Anne Frank House' },
        { label: 'Evening', text: 'Boat ride through the canals' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Traditional Neighborhoods',
      details: [
        { label: 'Morning', text: 'Jordaan and Flower Market' },
        { label: 'Afternoon', text: 'Resistance Museum' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Zaanse Schans Excursion',
      details: [
        { label: 'Morning', text: 'Visit to traditional windmills' },
        { label: 'Afternoon', text: 'Wooden shoe workshop' },
        { label: 'Evening', text: 'Return to Amsterdam' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'netherlands-tour-2': [
    {
      day: 'Day 1',
      title: 'Rotterdam and Modern The Hague',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through port and modern architecture' },
        { label: 'Evening', text: 'Dinner at restaurant with port view' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Architectural Rotterdam',
      details: [
        { label: 'Morning', text: 'Cube Houses and Markthal' },
        { label: 'Afternoon', text: 'Erasmus Bridge and Euromast' },
        { label: 'Evening', text: 'Dinner in Delfshaven' },
      ],
    },
    {
      day: 'Day 3',
      title: 'The Hague and Government',
      details: [
        { label: 'Morning', text: 'Excursion to The Hague' },
        { label: 'Afternoon', text: 'Peace Palace and Binnenhof' },
        { label: 'Evening', text: 'Return to Rotterdam' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Delft and Ceramics',
      details: [
        { label: 'Morning', text: 'Excursion to Delft' },
        { label: 'Afternoon', text: 'Blue ceramics workshop' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'netherlands-tour-3': [
    {
      day: 'Day 1',
      title: 'Tulip Fields and Keukenhof',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through center' },
        { label: 'Evening', text: 'Welcome dinner' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Keukenhof and Tulips',
      details: [
        { label: 'Morning', text: 'Visit to Keukenhof (March-May)' },
        { label: 'Afternoon', text: 'Tulip fields in Lisse' },
        { label: 'Evening', text: 'Return to Amsterdam' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Alkmaar and Cheeses',
      details: [
        { label: 'Morning', text: 'Excursion to Alkmaar' },
        { label: 'Afternoon', text: 'Traditional cheese market' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'netherlands-tour-4': [
    {
      day: 'Day 1',
      title: 'Groningen and Northern Netherlands',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through historic center' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'University Groningen',
      details: [
        { label: 'Morning', text: 'University and Groninger Museum' },
        { label: 'Afternoon', text: 'Martini Tower and market' },
        { label: 'Evening', text: 'Dinner at student pub' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Frisian Islands',
      details: [
        { label: 'Morning', text: 'Excursion to Wadden Sea islands' },
        { label: 'Afternoon', text: 'Walk along beach and dunes' },
        { label: 'Evening', text: 'Return to Groningen' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Leeuwarden and Frisian Culture',
      details: [
        { label: 'Morning', text: 'Excursion to Leeuwarden' },
        { label: 'Afternoon', text: 'Frisian Province Museum' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'portugal-tour-1': [
    {
      day: 'Day 1',
      title: 'Lisbon and Sintra',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Alfama and viewpoints' },
        { label: 'Evening', text: 'Dinner with live fado' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Lisbon',
      details: [
        { label: 'Morning', text: 'Belém Tower and Monument to the Discoveries' },
        { label: 'Afternoon', text: 'Jerónimos Monastery' },
        { label: 'Evening', text: 'Walk through Baixa and Chiado' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Sintra and Palaces',
      details: [
        { label: 'Morning', text: 'Excursion to Sintra' },
        { label: 'Afternoon', text: 'Pena Palace and Quinta da Regaleira' },
        { label: 'Evening', text: 'Return to Lisbon' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cascais and Estoril',
      details: [
        { label: 'Morning', text: 'Excursion to Cascais' },
        { label: 'Afternoon', text: 'Boca do Inferno and beaches' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'portugal-tour-2': [
    {
      day: 'Day 1',
      title: 'Porto and Douro Valley',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Ribeira and Dom Luís Bridge' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Porto',
      details: [
        { label: 'Morning', text: 'Cathedral and Miragaia district' },
        { label: 'Afternoon', text: 'Lello Bookstore and Clérigos Tower' },
        { label: 'Evening', text: 'Port wine tasting' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Wine Cellars',
      details: [
        { label: 'Morning', text: 'Visit to cellars in Vila Nova de Gaia' },
        { label: 'Afternoon', text: 'Boat ride on the Douro' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Douro Valley',
      details: [
        { label: 'Morning', text: 'Excursion to Douro Valley' },
        { label: 'Afternoon', text: 'Boat ride and cellar visits' },
        { label: 'Evening', text: 'Dinner at wine estate' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Guimarães and Braga',
      details: [
        { label: 'Morning', text: 'Excursion to Guimarães (cradle of Portugal)' },
        { label: 'Afternoon', text: 'Braga and Bom Jesus Sanctuary' },
        { label: 'Evening', text: 'Return to Porto' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'portugal-tour-3': [
    {
      day: 'Day 1',
      title: 'Algarve and South Coast',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through old town' },
        { label: 'Evening', text: 'Seafood dinner' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Lagos and Points',
      details: [
        { label: 'Morning', text: 'Excursion to Lagos' },
        { label: 'Afternoon', text: 'Ponta da Piedade and beaches' },
        { label: 'Evening', text: 'Dinner at coastal restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Albufeira and Beaches',
      details: [
        { label: 'Morning', text: 'Visit to Albufeira' },
        { label: 'Afternoon', text: 'Free time at the beach' },
        { label: 'Evening', text: 'Nightlife' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Sagres and Cape St. Vincent',
      details: [
        { label: 'Morning', text: 'Excursion to Sagres' },
        { label: 'Afternoon', text: 'Fortress and Cape St. Vincent' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'portugal-tour-4': [
    {
      day: 'Day 1',
      title: 'Évora and Alentejo',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through historic center' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Évora Heritage',
      details: [
        { label: 'Morning', text: 'Temple of Diana and Chapel of Bones' },
        { label: 'Afternoon', text: 'Cathedral and University' },
        { label: 'Evening', text: 'Dinner with Alentejo wines' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Monsaraz and Castelo de Vide',
      details: [
        { label: 'Morning', text: 'Excursion to Monsaraz' },
        { label: 'Afternoon', text: 'Castelo de Vide and Marvão' },
        { label: 'Evening', text: 'Return to Évora' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'turkey-tour-1': [
    {
      day: 'Day 1',
      title: 'Istanbul and Bosphorus',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Sultanahmet' },
        { label: 'Evening', text: 'Welcome dinner' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Istanbul',
      details: [
        { label: 'Morning', text: 'Hagia Sophia and Blue Mosque' },
        { label: 'Afternoon', text: 'Topkapi Palace and Harem' },
        { label: 'Evening', text: 'Belly dance show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Historic Istanbul',
      details: [
        { label: 'Morning', text: 'Basilica Cistern and Hippodrome' },
        { label: 'Afternoon', text: 'Grand Bazaar and Spice Bazaar' },
        { label: 'Evening', text: 'Boat ride on the Bosphorus' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Modern Istanbul',
      details: [
        { label: 'Morning', text: 'Galata Tower and Beyoğlu district' },
        { label: 'Afternoon', text: 'Istiklal Street and Taksim Square' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Princes Islands',
      details: [
        { label: 'Morning', text: 'Excursion to Princes Islands' },
        { label: 'Afternoon', text: 'Carriage ride and beaches' },
        { label: 'Evening', text: 'Return to Istanbul' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'turkey-tour-2': [
    {
      day: 'Day 1',
      title: 'Cappadocia and Central Anatolia',
      details: [
        { label: 'Morning', text: 'Flight to Cappadocia' },
        { label: 'Afternoon', text: 'Check-in and walk through Göreme' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Magical Cappadocia',
      details: [
        { label: 'Morning', text: 'Hot air balloon flight at sunrise' },
        { label: 'Afternoon', text: 'Göreme Open Air Museum' },
        { label: 'Evening', text: 'Turkish dance show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Valleys and Churches',
      details: [
        { label: 'Morning', text: 'Fairy Chimneys Valley' },
        { label: 'Afternoon', text: 'Snake Church and Dark Church' },
        { label: 'Evening', text: 'Dinner at troglodyte restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Underground Cities',
      details: [
        { label: 'Morning', text: 'Derinkuyu Underground City' },
        { label: 'Afternoon', text: 'Ihlara Valley and monasteries' },
        { label: 'Evening', text: 'Return to Göreme' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Avanos and Ürgüp',
      details: [
        { label: 'Morning', text: 'Visit to Avanos (ceramics)' },
        { label: 'Afternoon', text: 'Ürgüp and Uçhisar Castle' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Return to Istanbul',
      details: [
        { label: 'Morning', text: 'Flight to Istanbul' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'turkey-tour-3': [
    {
      day: 'Day 1',
      title: 'Ephesus and Aegean Coast',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Izmir center' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Ancient Ephesus',
      details: [
        { label: 'Morning', text: 'Excursion to Ephesus' },
        { label: 'Afternoon', text: 'Library of Celsus and Great Theater' },
        { label: 'Evening', text: 'House of Virgin Mary' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Pergamon and Troy',
      details: [
        { label: 'Morning', text: 'Excursion to Pergamon' },
        { label: 'Afternoon', text: 'Acropolis and Asclepeion' },
        { label: 'Evening', text: 'Return to Izmir' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Çeşme and Alaçatı',
      details: [
        { label: 'Morning', text: 'Excursion to Çeşme' },
        { label: 'Afternoon', text: 'Alaçatı and beaches' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'turkey-tour-4': [
    {
      day: 'Day 1',
      title: 'Antalya and Turkish Coast',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Walk through Kaleiçi (old town)' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Antalya',
      details: [
        { label: 'Morning', text: 'Archaeological Museum' },
        { label: 'Afternoon', text: 'Hadrian\'s Gate and Clock Tower' },
        { label: 'Evening', text: 'Walk through the port' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Aspendos and Perge',
      details: [
        { label: 'Morning', text: 'Excursion to Aspendos' },
        { label: 'Afternoon', text: 'Roman theater and aqueducts' },
        { label: 'Evening', text: 'Return to Antalya' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Kemer and Beaches',
      details: [
        { label: 'Morning', text: 'Excursion to Kemer' },
        { label: 'Afternoon', text: 'Free time at the beach' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'russia-tour-1': [
    {
      day: 'Day 1',
      title: 'Imperial and Cultural Moscow',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Red Square and St. Basil\'s Cathedral' },
        { label: 'Evening', text: 'Dinner at traditional Russian restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Kremlin and Art',
      details: [
        { label: 'Morning', text: 'Visit to Kremlin and Armory' },
        { label: 'Afternoon', text: 'Tretyakov Gallery and Russian art' },
        { label: 'Evening', text: 'Ballet show at Bolshoi' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Metro and Architecture',
      details: [
        { label: 'Morning', text: 'Tour of metro stations' },
        { label: 'Afternoon', text: 'Christ the Savior Cathedral' },
        { label: 'Evening', text: 'Walk through Gorky Park' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Novodevichy and Views',
      details: [
        { label: 'Morning', text: 'Novodevichy Monastery' },
        { label: 'Afternoon', text: 'Sparrow Hills and University' },
        { label: 'Evening', text: 'Dinner with panoramic views' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Contemporary Art',
      details: [
        { label: 'Morning', text: 'Pushkin Museum of Fine Arts' },
        { label: 'Afternoon', text: 'Garage Contemporary Art Center' },
        { label: 'Evening', text: 'Walk through Arbat' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Izmailovo and Shopping',
      details: [
        { label: 'Morning', text: 'Izmailovo Market and crafts' },
        { label: 'Afternoon', text: 'Free time for shopping' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'russia-tour-2': [
    {
      day: 'Day 1',
      title: 'St. Petersburg and Palaces',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Nevsky Prospekt and Kazan Cathedral' },
        { label: 'Evening', text: 'Dinner at elegant restaurant' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Hermitage and Art',
      details: [
        { label: 'Morning', text: 'Hermitage Museum' },
        { label: 'Afternoon', text: 'Winter Palace' },
        { label: 'Evening', text: 'Mariinsky Ballet show' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Peterhof and Fountains',
      details: [
        { label: 'Morning', text: 'Excursion to Peterhof' },
        { label: 'Afternoon', text: 'Palace and gardens with fountains' },
        { label: 'Evening', text: 'Return by hydrofoil' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Tsarskoe Selo',
      details: [
        { label: 'Morning', text: 'Excursion to Pushkin' },
        { label: 'Afternoon', text: 'Catherine Palace and amber' },
        { label: 'Evening', text: 'Dinner at imperial restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Vasilevsky Island',
      details: [
        { label: 'Morning', text: 'Kunstkamera Museum' },
        { label: 'Afternoon', text: 'Rostral columns and university' },
        { label: 'Evening', text: 'Walk along the embankment' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Cathedrals and Churches',
      details: [
        { label: 'Morning', text: 'St. Isaac\'s Cathedral' },
        { label: 'Afternoon', text: 'Church of the Savior on Spilled Blood' },
        { label: 'Evening', text: 'Cruise through the canals' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Pavlovsk and Gatchina',
      details: [
        { label: 'Morning', text: 'Excursion to Pavlovsk' },
        { label: 'Afternoon', text: 'Gatchina Palace' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'russia-tour-3': [
    {
      day: 'Day 1',
      title: 'Golden Ring and Historic Cities',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Brief tour of Moscow' },
        { label: 'Evening', text: 'Welcome dinner' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Sergiev Posad',
      details: [
        { label: 'Morning', text: 'Excursion to Serguiev Posad' },
        { label: 'Afternoon', text: 'Trinity Lavra of St. Sergius' },
        { label: 'Evening', text: 'Return to Moscow' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Vladimir and Suzdal',
      details: [
        { label: 'Morning', text: 'Excursion to Vladimir' },
        { label: 'Afternoon', text: 'Assumption Cathedral and Golden Gate' },
        { label: 'Evening', text: 'Arrival in Suzdal' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Medieval Suzdal',
      details: [
        { label: 'Morning', text: 'Suzdal Kremlin' },
        { label: 'Afternoon', text: 'Monasteries and wooden churches' },
        { label: 'Evening', text: 'Dinner at traditional inn' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Yaroslavl and Kostroma',
      details: [
        { label: 'Morning', text: 'Excursion to Yaroslavl' },
        { label: 'Afternoon', text: 'Ipatiev Monastery in Kostroma' },
        { label: 'Evening', text: 'Return to Moscow' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time in Moscow' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'russia-tour-4': [
    {
      day: 'Day 1',
      title: 'Siberia and Lake Baikal',
      details: [
        { label: 'Morning', text: 'Arrival and transfer to hotel' },
        { label: 'Afternoon', text: 'Historic center of Irkutsk' },
        { label: 'Evening', text: 'Dinner with Siberian dishes' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Listvyanka and Baikal',
      details: [
        { label: 'Morning', text: 'Excursion to Listvyanka' },
        { label: 'Afternoon', text: 'Baikal Museum and nerpa seal' },
        { label: 'Evening', text: 'Dinner with omul fish' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Olkhon Island',
      details: [
        { label: 'Morning', text: 'Transfer to Olkhon Island' },
        { label: 'Afternoon', text: 'Burkhan Cape and Shamanka Rock' },
        { label: 'Evening', text: 'Accommodation in yurt' },
      ],
    },
    {
      day: 'Day 4',
      title: 'North of Olkhon',
      details: [
        { label: 'Morning', text: 'Excursion to north of the island' },
        { label: 'Afternoon', text: 'Khoboy Cape and panoramic views' },
        { label: 'Evening', text: 'Traditional Buryat dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Return to Irkutsk',
      details: [
        { label: 'Morning', text: 'Free time on the island' },
        { label: 'Afternoon', text: 'Return to Irkutsk' },
        { label: 'Evening', text: 'Walk along the embankment' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Trans-Siberian Railway',
      details: [
        { label: 'Morning', text: 'Train to Ulan-Ude' },
        { label: 'Afternoon', text: 'Arrival and city tour' },
        { label: 'Evening', text: 'Dinner with Mongolian influence' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Ulan-Ude and Buryatia',
      details: [
        { label: 'Morning', text: 'Ivolginsky Buddhist Monastery' },
        { label: 'Afternoon', text: 'Local History Museum' },
        { label: 'Evening', text: 'Folk show' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Return to Irkutsk',
      details: [
        { label: 'Morning', text: 'Return train' },
        { label: 'Afternoon', text: 'Arrival in Irkutsk' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 9',
      title: 'Free Time',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Optional museum visits' },
        { label: 'Evening', text: 'Last dinner' },
      ],
    },
    {
      day: 'Day 10',
      title: 'Farewell',
      details: [
        { label: 'Morning', text: 'Free time' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'End of tour' },
      ],
    },
  ],
  'canada-tour-1': [
    {
      day: 'Day 1',
      title: 'Multicultural Toronto',
      details: [
        { label: 'Morning', text: 'Pearson Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with poutine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Toronto',
      details: [
        { label: 'Morning', text: 'CN Tower and SkyPod' },
        { label: 'Afternoon', text: 'Distillery District and breweries' },
        { label: 'Evening', text: 'Dinner at restaurant with panoramic view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Toronto',
      details: [
        { label: 'Morning', text: 'Royal Ontario Museum and Canadian art' },
        { label: 'Afternoon', text: 'Casa Loma and Yorkville district' },
        { label: 'Evening', text: 'Dinner at multicultural restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Natural Toronto',
      details: [
        { label: 'Morning', text: 'Toronto Islands and ferry' },
        { label: 'Afternoon', text: 'High Park and botanical gardens' },
        { label: 'Evening', text: 'Dinner at seafood restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Toronto - Return',
      details: [
        { label: 'Morning', text: 'Eaton Centre and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'canada-tour-2': [
    {
      day: 'Day 1',
      title: 'Rocky Mountains',
      details: [
        { label: 'Morning', text: 'Flight to Calgary and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Alberta beef' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Calgary - Banff',
      details: [
        { label: 'Morning', text: 'Transfer to Banff and check-in' },
        { label: 'Afternoon', text: 'Lake Louise and Moraine Lake' },
        { label: 'Evening', text: 'Dinner at mountain restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Complete Banff',
      details: [
        { label: 'Morning', text: 'Banff Gondola cable car' },
        { label: 'Afternoon', text: 'Johnston Canyon and waterfalls' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Banff - Jasper',
      details: [
        { label: 'Morning', text: 'Icefields Parkway and Columbia Icefield' },
        { label: 'Afternoon', text: 'Arrival in Jasper and Maligne Lake' },
        { label: 'Evening', text: 'Dinner at Jasper restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Natural Jasper',
      details: [
        { label: 'Morning', text: 'Jasper National Park' },
        { label: 'Afternoon', text: 'Pyramid Lake and Mount Edith Cavell' },
        { label: 'Evening', text: 'Dinner with mountain views' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Jasper - Kamloops',
      details: [
        { label: 'Morning', text: 'Transfer to Kamloops' },
        { label: 'Afternoon', text: 'Kamloops Lake and water activities' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Kamloops - Vancouver',
      details: [
        { label: 'Morning', text: 'Transfer to Vancouver' },
        { label: 'Afternoon', text: 'Stanley Park and Vancouver Aquarium' },
        { label: 'Evening', text: 'Dinner in Gastown' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Vancouver - Return',
      details: [
        { label: 'Morning', text: 'Granville Island and market' },
        { label: 'Afternoon', text: 'Return flight to Toronto' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'canada-tour-3': [
    {
      day: 'Day 1',
      title: 'Niagara Falls',
      details: [
        { label: 'Morning', text: 'Transfer to Niagara Falls and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with local wine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Niagara Falls',
      details: [
        { label: 'Morning', text: 'Maid of the Mist and Hornblower' },
        { label: 'Afternoon', text: 'Journey Behind the Falls' },
        { label: 'Evening', text: 'Dinner at restaurant with view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Niagara Falls - Return',
      details: [
        { label: 'Morning', text: 'Niagara-on-the-Lake and wineries' },
        { label: 'Afternoon', text: 'Transfer back to Toronto' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'canada-tour-4': [
    {
      day: 'Day 1',
      title: 'Natural Vancouver',
      details: [
        { label: 'Morning', text: 'Flight to Vancouver and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch in Gastown' },
        { label: 'Evening', text: 'Welcome dinner with salmon' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Vancouver',
      details: [
        { label: 'Morning', text: 'Stanley Park and Vancouver Aquarium' },
        { label: 'Afternoon', text: 'Granville Island and market' },
        { label: 'Evening', text: 'Dinner at seafood restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Vancouver',
      details: [
        { label: 'Morning', text: 'UBC Museum of Anthropology' },
        { label: 'Afternoon', text: 'Queen Elizabeth Park and gardens' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Whistler',
      details: [
        { label: 'Morning', text: 'Transfer to Whistler and Sea to Sky Highway' },
        { label: 'Afternoon', text: 'Peak 2 Peak Gondola' },
        { label: 'Evening', text: 'Dinner at mountain restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Natural Whistler',
      details: [
        { label: 'Morning', text: 'Hiking in Whistler' },
        { label: 'Afternoon', text: 'Alta Lake and water activities' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Vancouver - Return',
      details: [
        { label: 'Morning', text: 'Free time in Vancouver' },
        { label: 'Afternoon', text: 'Return flight to Toronto' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'panama-tour-1': [
    {
      day: 'Day 1',
      title: 'Panama Canal',
      details: [
        { label: 'Morning', text: 'Tocumen Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with ceviche' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Panama Canal',
      details: [
        { label: 'Morning', text: 'Miraflores Visitor Center' },
        { label: 'Afternoon', text: 'Ship and lock observation' },
        { label: 'Evening', text: 'Dinner at restaurant with canal view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Panama City',
      details: [
        { label: 'Morning', text: 'Casco Viejo (UNESCO Heritage)' },
        { label: 'Afternoon', text: 'Canal Museum and Plaza de Francia' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Panama - Return',
      details: [
        { label: 'Morning', text: 'Seafood Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'panama-tour-2': [
    {
      day: 'Day 1',
      title: 'Bocas del Toro',
      details: [
        { label: 'Morning', text: 'Flight to Bocas del Toro and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Bocas del Toro',
      details: [
        { label: 'Morning', text: 'Island and beach tour' },
        { label: 'Afternoon', text: 'Snorkeling in coral reefs' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Natural Bocas del Toro',
      details: [
        { label: 'Morning', text: 'Bastimentos Marine National Park' },
        { label: 'Afternoon', text: 'Red Frog Beach and hiking' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Bocas del Toro',
      details: [
        { label: 'Morning', text: 'Ngäbe-Buglé indigenous community' },
        { label: 'Afternoon', text: 'Starfish Beach and kayaking' },
        { label: 'Evening', text: 'Dinner with Caribbean music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Bocas del Toro - Return',
      details: [
        { label: 'Morning', text: 'Zapatilla Beach and free time' },
        { label: 'Afternoon', text: 'Return flight to Panama' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'panama-tour-3': [
    {
      day: 'Day 1',
      title: 'Colonial Casco Viejo',
      details: [
        { label: 'Morning', text: 'Transfer to Casco Viejo and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with ceviche' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Casco Viejo',
      details: [
        { label: 'Morning', text: 'Plaza de Francia and monuments' },
        { label: 'Afternoon', text: 'San José Church and golden altar' },
        { label: 'Evening', text: 'Dinner at colonial restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Casco Viejo - Return',
      details: [
        { label: 'Morning', text: 'Crafts market and shopping' },
        { label: 'Afternoon', text: 'Transfer back to Panama' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'panama-tour-4': [
    {
      day: 'Day 1',
      title: 'San Blas and Kuna Comarca',
      details: [
        { label: 'Morning', text: 'Flight to San Blas and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch on the beach' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'San Blas Islands',
      details: [
        { label: 'Morning', text: 'Tour of paradise islands' },
        { label: 'Afternoon', text: 'Snorkeling in coral reefs' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Kuna Community',
      details: [
        { label: 'Morning', text: 'Visit to Kuna indigenous community' },
        { label: 'Afternoon', text: 'Mola and crafts workshops' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'San Blas - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Return flight to Panama' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'us-tour-1': [
    {
      day: 'Day 1',
      title: 'Iconic New York',
      details: [
        { label: 'Morning', text: 'JFK Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with New York pizza' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Imperial Manhattan',
      details: [
        { label: 'Morning', text: 'Statue of Liberty and Ellis Island' },
        { label: 'Afternoon', text: 'Wall Street and Financial District' },
        { label: 'Evening', text: 'Walk across Brooklyn Bridge' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural New York',
      details: [
        { label: 'Morning', text: 'Metropolitan Museum of Art' },
        { label: 'Afternoon', text: 'Central Park and Bethesda Fountain' },
        { label: 'Evening', text: 'Dinner in Times Square' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Historic New York',
      details: [
        { label: 'Morning', text: 'Empire State Building and Rockefeller Center' },
        { label: 'Afternoon', text: 'Natural History Museum' },
        { label: 'Evening', text: 'Dinner at restaurant with jazz music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Modern New York',
      details: [
        { label: 'Morning', text: 'High Line and Chelsea Market' },
        { label: 'Afternoon', text: 'Greenwich Village and SoHo' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'New York - Return',
      details: [
        { label: 'Morning', text: 'Fifth Avenue and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'us-tour-2': [
    {
      day: 'Day 1',
      title: 'California Dream',
      details: [
        { label: 'Morning', text: 'Flight to San Francisco and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at Fisherman\'s Wharf' },
        { label: 'Evening', text: 'Welcome dinner with Dungeness crab' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic San Francisco',
      details: [
        { label: 'Morning', text: 'Golden Gate Bridge and Presidio' },
        { label: 'Afternoon', text: 'Alcatraz and ferry' },
        { label: 'Evening', text: 'Dinner in Chinatown' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural San Francisco',
      details: [
        { label: 'Morning', text: 'Cable Cars and Lombard Street' },
        { label: 'Afternoon', text: 'San Francisco Museum of Modern Art (SFMOMA)' },
        { label: 'Evening', text: 'Dinner in North Beach' },
      ],
    },
    {
      day: 'Day 4',
      title: 'San Francisco - Los Angeles',
      details: [
        { label: 'Morning', text: 'Transfer to Los Angeles' },
        { label: 'Afternoon', text: 'Hollywood Walk of Fame and TCL Chinese Theatre' },
        { label: 'Evening', text: 'Dinner at celebrity restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Complete Los Angeles',
      details: [
        { label: 'Morning', text: 'Universal Studios Hollywood' },
        { label: 'Afternoon', text: 'Beverly Hills and Rodeo Drive' },
        { label: 'Evening', text: 'Dinner in Venice Beach' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Los Angeles - San Diego',
      details: [
        { label: 'Morning', text: 'Transfer to San Diego' },
        { label: 'Afternoon', text: 'Balboa Park and San Diego Zoo' },
        { label: 'Evening', text: 'Dinner in Gaslamp Quarter' },
      ],
    },
    {
      day: 'Day 7',
      title: 'San Diego - Return',
      details: [
        { label: 'Morning', text: 'Coronado Island and beach' },
        { label: 'Afternoon', text: 'Return flight to New York' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'us-tour-3': [
    {
      day: 'Day 1',
      title: 'Florida Sunshine',
      details: [
        { label: 'Morning', text: 'Flight to Miami and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch in South Beach' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Miami Beach',
      details: [
        { label: 'Morning', text: 'South Beach and Ocean Drive' },
        { label: 'Afternoon', text: 'Art Deco District and Vizcaya' },
        { label: 'Evening', text: 'Dinner at Cuban restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Miami - Orlando',
      details: [
        { label: 'Morning', text: 'Transfer to Orlando' },
        { label: 'Afternoon', text: 'Walt Disney World Magic Kingdom' },
        { label: 'Evening', text: 'Dinner at themed restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Orlando Parks',
      details: [
        { label: 'Morning', text: 'Universal Studios Orlando' },
        { label: 'Afternoon', text: 'Islands of Adventure' },
        { label: 'Evening', text: 'Dinner in CityWalk' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Florida - Return',
      details: [
        { label: 'Morning', text: 'Free time in Orlando' },
        { label: 'Afternoon', text: 'Return flight to New York' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'us-tour-4': [
    {
      day: 'Day 1',
      title: 'Las Vegas and Grand Canyon',
      details: [
        { label: 'Morning', text: 'Flight to Las Vegas and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch on the Strip' },
        { label: 'Evening', text: 'Welcome dinner and show' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Las Vegas Strip',
      details: [
        { label: 'Morning', text: 'Bellagio and dancing fountains' },
        { label: 'Afternoon', text: 'Venetian and gondolas' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Las Vegas - Grand Canyon',
      details: [
        { label: 'Morning', text: 'Transfer to Grand Canyon' },
        { label: 'Afternoon', text: 'South Rim and hiking' },
        { label: 'Evening', text: 'Dinner at park restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Complete Grand Canyon',
      details: [
        { label: 'Morning', text: 'Helicopter over Grand Canyon' },
        { label: 'Afternoon', text: 'Hermit Road and viewpoints' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Grand Canyon - Las Vegas',
      details: [
        { label: 'Morning', text: 'Free time in Grand Canyon' },
        { label: 'Afternoon', text: 'Transfer back to Las Vegas' },
        { label: 'Evening', text: 'Dinner at Strip restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Las Vegas - Return',
      details: [
        { label: 'Morning', text: 'Fremont Street Experience' },
        { label: 'Afternoon', text: 'Return flight to New York' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'mexico-tour-1': [
    {
      day: 'Day 1',
      title: 'Mexico City',
      details: [
        { label: 'Morning', text: 'Benito Juárez Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with al pastor tacos' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Center',
      details: [
        { label: 'Morning', text: 'Zócalo and Metropolitan Cathedral' },
        { label: 'Afternoon', text: 'Templo Mayor and National Palace' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Teotihuacán',
      details: [
        { label: 'Morning', text: 'Pyramids of the Sun and Moon' },
        { label: 'Afternoon', text: 'National Museum of Anthropology' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Coyoacán and Xochimilco',
      details: [
        { label: 'Morning', text: 'Frida Kahlo\'s Blue House' },
        { label: 'Afternoon', text: 'Trajineras in Xochimilco' },
        { label: 'Evening', text: 'Dinner with mariachis' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Mexico City - Return',
      details: [
        { label: 'Morning', text: 'Chapultepec and Castle' },
        { label: 'Afternoon', text: 'Free time for shopping' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'mexico-tour-2': [
    {
      day: 'Day 1',
      title: 'Riviera Maya',
      details: [
        { label: 'Morning', text: 'Flight to Cancún and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch on the beach' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Beachy Cancún',
      details: [
        { label: 'Morning', text: 'Dolphin Beach and snorkeling' },
        { label: 'Afternoon', text: 'Isla Mujeres and ferry' },
        { label: 'Evening', text: 'Dinner at beach restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Tulum and Cobá',
      details: [
        { label: 'Morning', text: 'Tulum ruins by the sea' },
        { label: 'Afternoon', text: 'Cobá archaeological zone' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Chichén Itzá',
      details: [
        { label: 'Morning', text: 'Kukulkán Pyramid' },
        { label: 'Afternoon', text: 'Ik Kil Cenote and swimming' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Playa del Carmen',
      details: [
        { label: 'Morning', text: 'Fifth Avenue and shopping' },
        { label: 'Afternoon', text: 'Xcaret Park and show' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Riviera Maya - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Return flight to Mexico City' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'mexico-tour-3': [
    {
      day: 'Day 1',
      title: 'Colonial Guanajuato',
      details: [
        { label: 'Morning', text: 'Flight to León and transfer to Guanajuato' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with miner enchiladas' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Guanajuato',
      details: [
        { label: 'Morning', text: 'Juárez Theater and Main Plaza' },
        { label: 'Afternoon', text: 'Kiss Alley and tunnels' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'San Miguel de Allende',
      details: [
        { label: 'Morning', text: 'Transfer to San Miguel de Allende' },
        { label: 'Afternoon', text: 'Parish Church and historic center' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Guanajuato - Return',
      details: [
        { label: 'Morning', text: 'Mummies Museum' },
        { label: 'Afternoon', text: 'Return flight to Mexico City' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'mexico-tour-4': [
    {
      day: 'Day 1',
      title: 'Cultural Oaxaca',
      details: [
        { label: 'Morning', text: 'Flight to Oaxaca and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch with mole' },
        { label: 'Evening', text: 'Welcome dinner with tlayudas' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Oaxaca',
      details: [
        { label: 'Morning', text: 'Zócalo and Oaxaca Cathedral' },
        { label: 'Afternoon', text: 'Santo Domingo and Cultures Museum' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Monte Albán',
      details: [
        { label: 'Morning', text: 'Monte Albán archaeological zone' },
        { label: 'Afternoon', text: 'Crafts workshops' },
        { label: 'Evening', text: 'Dinner with mezcal' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Hierve el Agua',
      details: [
        { label: 'Morning', text: 'Petrified waterfalls' },
        { label: 'Afternoon', text: 'Crafts market' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Oaxaca - Return',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Return flight to Mexico City' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'dr-tour-1': [
    {
      day: 'Day 1',
      title: 'Colonial Santo Domingo',
      details: [
        { label: 'Morning', text: 'Las Américas Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Dominican flag' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Colonial Zone',
      details: [
        { label: 'Morning', text: 'Primada Cathedral of America' },
        { label: 'Afternoon', text: 'Columbus Alcazar and Plaza España' },
        { label: 'Evening', text: 'Dinner at colonial restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Historic Santo Domingo',
      details: [
        { label: 'Morning', text: 'Royal Houses Museum' },
        { label: 'Afternoon', text: 'Las Damas Street and Ozama Fortress' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Santo Domingo - Return',
      details: [
        { label: 'Morning', text: 'Modelo Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'dr-tour-2': [
    {
      day: 'Day 1',
      title: 'Punta Cana Paradise',
      details: [
        { label: 'Morning', text: 'Transfer to Punta Cana and check-in' },
        { label: 'Afternoon', text: 'Lunch on the beach' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Bávaro Beach',
      details: [
        { label: 'Morning', text: 'Bávaro Beach and water activities' },
        { label: 'Afternoon', text: 'Snorkeling in coral reefs' },
        { label: 'Evening', text: 'Dinner at beach restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Saona Island',
      details: [
        { label: 'Morning', text: 'Excursion to Saona Island' },
        { label: 'Afternoon', text: 'Natural beach and included lunch' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Punta Cana',
      details: [
        { label: 'Morning', text: 'Altos de Chavón and amphitheater' },
        { label: 'Afternoon', text: 'Indigenous reserve and cigars' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Punta Cana - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Transfer back to Santo Domingo' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'dr-tour-3': [
    {
      day: 'Day 1',
      title: 'Natural Samaná',
      details: [
        { label: 'Morning', text: 'Transfer to Samaná and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Humpback Whales',
      details: [
        { label: 'Morning', text: 'Humpback whale watching' },
        { label: 'Afternoon', text: 'Rincón Beach and lunch' },
        { label: 'Evening', text: 'Dinner at beach restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'El Limón Waterfall',
      details: [
        { label: 'Morning', text: 'El Limón Waterfall and hiking' },
        { label: 'Afternoon', text: 'Las Galeras Beach' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Samaná - Return',
      details: [
        { label: 'Morning', text: 'Free time in nature' },
        { label: 'Afternoon', text: 'Transfer back to Santo Domingo' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'dr-tour-4': [
    {
      day: 'Day 1',
      title: 'La Romana and Bayahibe',
      details: [
        { label: 'Morning', text: 'Transfer to La Romana and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with lobster' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Altos de Chavón',
      details: [
        { label: 'Morning', text: 'Altos de Chavón artists village' },
        { label: 'Afternoon', text: 'Amphitheater and art workshops' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Bayahibe and Catalina Island',
      details: [
        { label: 'Morning', text: 'Ferry to Catalina Island' },
        { label: 'Afternoon', text: 'Snorkeling and virgin beach' },
        { label: 'Evening', text: 'Dinner at beach restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'La Romana - Return',
      details: [
        { label: 'Morning', text: 'Bayahibe Beach and free time' },
        { label: 'Afternoon', text: 'Transfer back to Santo Domingo' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'guatemala-tour-1': [
    {
      day: 'Day 1',
      title: 'Maya Guatemala',
      details: [
        { label: 'Morning', text: 'La Aurora Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with pepián' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Antigua Guatemala',
      details: [
        { label: 'Morning', text: 'Historic center and Santa Catalina Arch' },
        { label: 'Afternoon', text: 'La Merced Church and Cross Hill' },
        { label: 'Evening', text: 'Dinner at colonial restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Maya Tikal',
      details: [
        { label: 'Morning', text: 'Flight to Flores and transfer to Tikal' },
        { label: 'Afternoon', text: 'Maya pyramids and Great Plaza' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Guatemala - Return',
      details: [
        { label: 'Morning', text: 'Crafts market' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'guatemala-tour-2': [
    {
      day: 'Day 1',
      title: 'Lake Atitlán',
      details: [
        { label: 'Morning', text: 'Transfer to Panajachel and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with tamales' },
      ],
    },
    {
      day: 'Day 2',
      title: 'San Pedro La Laguna',
      details: [
        { label: 'Morning', text: 'Ferry to San Pedro La Laguna' },
        { label: 'Afternoon', text: 'San Pedro Volcano and hiking' },
        { label: 'Evening', text: 'Dinner at beach restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Santiago Atitlán',
      details: [
        { label: 'Morning', text: 'Ferry to Santiago Atitlán' },
        { label: 'Afternoon', text: 'Church and local market' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'San Juan La Laguna',
      details: [
        { label: 'Morning', text: 'Ferry to San Juan La Laguna' },
        { label: 'Afternoon', text: 'Weaving and coffee workshops' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Lake Atitlán - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Transfer back to Guatemala' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'guatemala-tour-3': [
    {
      day: 'Day 1',
      title: 'Chichicastenango',
      details: [
        { label: 'Morning', text: 'Transfer to Chichicastenango' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with beef broth' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Chichi Market',
      details: [
        { label: 'Morning', text: 'Largest market in Central America' },
        { label: 'Afternoon', text: 'Santo Tomás Church and stairways' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Chichicastenango - Return',
      details: [
        { label: 'Morning', text: 'Maya cemetery and rituals' },
        { label: 'Afternoon', text: 'Transfer back to Guatemala' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'guatemala-tour-4': [
    {
      day: 'Day 1',
      title: 'Semuc Champey',
      details: [
        { label: 'Morning', text: 'Transfer to Lanquín and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with chicken in jocón' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Semuc Champey',
      details: [
        { label: 'Morning', text: 'Natural pools of Semuc Champey' },
        { label: 'Afternoon', text: 'Cahabón River and caves' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Lanquín Caves',
      details: [
        { label: 'Morning', text: 'Exploration of the caves' },
        { label: 'Afternoon', text: 'Lanquín River and water activities' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Lanquín - Return',
      details: [
        { label: 'Morning', text: 'Free time in nature' },
        { label: 'Afternoon', text: 'Transfer back to Guatemala' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'honduras-tour-1': [
    {
      day: 'Day 1',
      title: 'Natural Tegucigalpa',
      details: [
        { label: 'Morning', text: 'Toncontín Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with baleadas' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Tegucigalpa',
      details: [
        { label: 'Morning', text: 'Central Plaza and Cathedral' },
        { label: 'Afternoon', text: 'National Museum and La Leona Park' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Tegucigalpa - Return',
      details: [
        { label: 'Morning', text: 'Crafts market' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'honduras-tour-2': [
    {
      day: 'Day 1',
      title: 'Copán Ruins',
      details: [
        { label: 'Morning', text: 'Transfer to Copán Ruinas and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with conch soup' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Archaeological Park',
      details: [
        { label: 'Morning', text: 'Maya ruins of Copán' },
        { label: 'Afternoon', text: 'Maya Sculpture Museum' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Copán',
      details: [
        { label: 'Morning', text: 'Maya Archaeology Museum' },
        { label: 'Afternoon', text: 'Local crafts workshops' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Copán - Return',
      details: [
        { label: 'Morning', text: 'Free time in the village' },
        { label: 'Afternoon', text: 'Transfer back to Tegucigalpa' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'honduras-tour-3': [
    {
      day: 'Day 1',
      title: 'Bay Islands',
      details: [
        { label: 'Morning', text: 'Flight to Roatán and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch on the beach' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Beachy Roatán',
      details: [
        { label: 'Morning', text: 'West Bay Beach and snorkeling' },
        { label: 'Afternoon', text: 'Coral reef and diving' },
        { label: 'Evening', text: 'Dinner at beach restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Roatán',
      details: [
        { label: 'Morning', text: 'Coxen Hole and French Harbour' },
        { label: 'Afternoon', text: 'Gumbalimba Park and monkeys' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Utila',
      details: [
        { label: 'Morning', text: 'Ferry to Utila and check-in' },
        { label: 'Afternoon', text: 'Beach and water activities' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Bay Islands - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Return flight to Tegucigalpa' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'honduras-tour-4': [
    {
      day: 'Day 1',
      title: 'Lake Yojoa',
      details: [
        { label: 'Morning', text: 'Transfer to Lake Yojoa and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with tilapia' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Panacamá National Park',
      details: [
        { label: 'Morning', text: 'Hiking in the national park' },
        { label: 'Afternoon', text: 'Waterfalls and natural pools' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Lake Yojoa - Return',
      details: [
        { label: 'Morning', text: 'Boat ride on the lake' },
        { label: 'Afternoon', text: 'Transfer back to Tegucigalpa' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'nicaragua-tour-1': [
    {
      day: 'Day 1',
      title: 'Volcanic Managua',
      details: [
        { label: 'Morning', text: 'Augusto C. Sandino Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with gallo pinto' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Managua',
      details: [
        { label: 'Morning', text: 'Revolution Plaza and Cathedral' },
        { label: 'Afternoon', text: 'National Museum and Historic Park' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Managua - Return',
      details: [
        { label: 'Morning', text: 'Roberto Huembes Market' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'nicaragua-tour-2': [
    {
      day: 'Day 1',
      title: 'Colonial Granada',
      details: [
        { label: 'Morning', text: 'Transfer to Granada and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with vigorón' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Granada',
      details: [
        { label: 'Morning', text: 'Granada Cathedral and Central Plaza' },
        { label: 'Afternoon', text: 'San Francisco Convent and museums' },
        { label: 'Evening', text: 'Dinner at colonial restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Granada Islets',
      details: [
        { label: 'Morning', text: 'Boat ride through the islets' },
        { label: 'Afternoon', text: 'Mombacho Volcano and nature reserve' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Granada - Return',
      details: [
        { label: 'Morning', text: 'Free time in the historic center' },
        { label: 'Afternoon', text: 'Transfer back to Managua' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'nicaragua-tour-3': [
    {
      day: 'Day 1',
      title: 'Cultural León',
      details: [
        { label: 'Morning', text: 'Transfer to León and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with nacatamal' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic León',
      details: [
        { label: 'Morning', text: 'León Cathedral and Central Plaza' },
        { label: 'Afternoon', text: 'Ortiz Gurdián Foundation Art Museum' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cerro Negro Volcano',
      details: [
        { label: 'Morning', text: 'Hiking on Cerro Negro Volcano' },
        { label: 'Afternoon', text: 'Poneloya Beach and surfing' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'León - Return',
      details: [
        { label: 'Morning', text: 'Crafts market' },
        { label: 'Afternoon', text: 'Transfer back to Managua' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'nicaragua-tour-4': [
    {
      day: 'Day 1',
      title: 'Ometepe Island',
      details: [
        { label: 'Morning', text: 'Transfer to San Jorge and ferry to Ometepe' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Concepción Volcano',
      details: [
        { label: 'Morning', text: 'Hiking on Concepción Volcano' },
        { label: 'Afternoon', text: 'Santo Domingo Beach' },
        { label: 'Evening', text: 'Dinner at beach restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Maderas Volcano',
      details: [
        { label: 'Morning', text: 'Hiking on Maderas Volcano' },
        { label: 'Afternoon', text: 'San Ramón Waterfall' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Ometepe',
      details: [
        { label: 'Morning', text: 'Petroglyphs and archaeological museum' },
        { label: 'Afternoon', text: 'Charco Verde Beach' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Ometepe - Return',
      details: [
        { label: 'Morning', text: 'Free time on the island' },
        { label: 'Afternoon', text: 'Return ferry and transfer to Managua' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'australia-tour-1': [
    {
      day: 'Day 1',
      title: 'Iconic Sydney',
      details: [
        { label: 'Morning', text: 'Sydney Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Australian seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Sydney',
      details: [
        { label: 'Morning', text: 'Sydney Opera House and interior tour' },
        { label: 'Afternoon', text: 'Sydney Harbour Bridge and Pylon Lookout' },
        { label: 'Evening', text: 'Dinner at restaurant with harbor view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Historic Sydney',
      details: [
        { label: 'Morning', text: 'The Rocks and Sydney Museum' },
        { label: 'Afternoon', text: 'Chinatown and Darling Harbour' },
        { label: 'Evening', text: 'Dinner at multicultural restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Natural Sydney',
      details: [
        { label: 'Morning', text: 'Bondi Beach and Coastal Walk' },
        { label: 'Afternoon', text: 'Watsons Bay and The Gap' },
        { label: 'Evening', text: 'Dinner at fish restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Cultural Sydney',
      details: [
        { label: 'Morning', text: 'Museum of Contemporary Art (MCA)' },
        { label: 'Afternoon', text: 'Royal Botanic Garden and Mrs Macquarie\'s Chair' },
        { label: 'Evening', text: 'Dinner at restaurant with live music' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Sydney - Return',
      details: [
        { label: 'Morning', text: 'Paddy\'s Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'australia-tour-2': [
    {
      day: 'Day 1',
      title: 'Great Barrier Reef',
      details: [
        { label: 'Morning', text: 'Flight to Cairns and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with tropical cuisine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Cairns - Port Douglas',
      details: [
        { label: 'Morning', text: 'Transfer to Port Douglas' },
        { label: 'Afternoon', text: 'Four Mile Beach and Mossman Gorge' },
        { label: 'Evening', text: 'Dinner at seafood restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Great Barrier Reef',
      details: [
        { label: 'Morning', text: 'Cruise to Great Barrier Reef' },
        { label: 'Afternoon', text: 'Snorkeling and diving on the reef' },
        { label: 'Evening', text: 'Dinner on the cruise' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Whitsunday Islands',
      details: [
        { label: 'Morning', text: 'Transfer to Airlie Beach' },
        { label: 'Afternoon', text: 'Sailing through Whitsunday Islands' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Whitehaven Beach',
      details: [
        { label: 'Morning', text: 'Whitehaven Beach (world\'s whitest)' },
        { label: 'Afternoon', text: 'Snorkeling in nearby reefs' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Cairns - Uluru',
      details: [
        { label: 'Morning', text: 'Flight to Uluru (Ayers Rock)' },
        { label: 'Afternoon', text: 'Check-in and lunch' },
        { label: 'Evening', text: 'Dinner under the stars' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Complete Uluru',
      details: [
        { label: 'Morning', text: 'Sunrise at Uluru' },
        { label: 'Afternoon', text: 'Kata Tjuta (The Olgas) and Valley of the Winds' },
        { label: 'Evening', text: 'Dinner with Aboriginal music' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Uluru - Return',
      details: [
        { label: 'Morning', text: 'Aboriginal Cultural Centre' },
        { label: 'Afternoon', text: 'Return flight to Sydney' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'australia-tour-3': [
    {
      day: 'Day 1',
      title: 'Australian Outback',
      details: [
        { label: 'Morning', text: 'Flight to Alice Springs and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with kangaroo meat' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Alice Springs',
      details: [
        { label: 'Morning', text: 'Alice Springs Reptile Centre' },
        { label: 'Afternoon', text: 'Telegraph Station and Anzac Hill' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Alice Springs - Uluru',
      details: [
        { label: 'Morning', text: 'Transfer to Uluru (Ayers Rock)' },
        { label: 'Afternoon', text: 'Check-in and lunch' },
        { label: 'Evening', text: 'Dinner under the stars' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Complete Uluru',
      details: [
        { label: 'Morning', text: 'Sunrise at Uluru' },
        { label: 'Afternoon', text: 'Kata Tjuta (The Olgas) and Valley of the Winds' },
        { label: 'Evening', text: 'Dinner with Aboriginal music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Uluru - Kings Canyon',
      details: [
        { label: 'Morning', text: 'Transfer to Kings Canyon' },
        { label: 'Afternoon', text: 'Hiking in Kings Canyon' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Kings Canyon - Alice Springs',
      details: [
        { label: 'Morning', text: 'Free time in Kings Canyon' },
        { label: 'Afternoon', text: 'Transfer back to Alice Springs' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Alice Springs - Return',
      details: [
        { label: 'Morning', text: 'Aboriginal Cultural Centre' },
        { label: 'Afternoon', text: 'Return flight to Sydney' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'australia-tour-4': [
    {
      day: 'Day 1',
      title: 'Cultural Melbourne',
      details: [
        { label: 'Morning', text: 'Flight to Melbourne and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Australian coffee' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Melbourne',
      details: [
        { label: 'Morning', text: 'Federation Square and Flinders Street Station' },
        { label: 'Afternoon', text: 'Royal Botanic Gardens and Shrine of Remembrance' },
        { label: 'Evening', text: 'Dinner at restaurant with river view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Melbourne',
      details: [
        { label: 'Morning', text: 'National Gallery of Victoria' },
        { label: 'Afternoon', text: 'Queen Victoria Market and shopping' },
        { label: 'Evening', text: 'Dinner at multicultural restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Great Ocean Road',
      details: [
        { label: 'Morning', text: 'Transfer to Great Ocean Road' },
        { label: 'Afternoon', text: 'Twelve Apostles and Loch Ard Gorge' },
        { label: 'Evening', text: 'Dinner at coastal restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Melbourne - Return',
      details: [
        { label: 'Morning', text: 'Brighton Beach Boxes' },
        { label: 'Afternoon', text: 'Return flight to Sydney' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'fiji-tour-1': [
    {
      day: 'Day 1',
      title: 'Tropical Suva',
      details: [
        { label: 'Morning', text: 'Nadi Airport and transfer to Suva' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with kokoda' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Suva',
      details: [
        { label: 'Morning', text: 'Fiji Museum and Thurston Gardens' },
        { label: 'Afternoon', text: 'Government House and Albert Park' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Suva',
      details: [
        { label: 'Morning', text: 'Suva Market and shopping' },
        { label: 'Afternoon', text: 'Colo-i-Suva Forest Park' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Suva - Return',
      details: [
        { label: 'Morning', text: 'Free time in Suva' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'fiji-tour-2': [
    {
      day: 'Day 1',
      title: 'Mamanuca Islands',
      details: [
        { label: 'Morning', text: 'Ferry to Mamanuca Islands' },
        { label: 'Afternoon', text: 'Check-in and lunch on the beach' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Beach and Snorkel',
      details: [
        { label: 'Morning', text: 'White sand beach and water activities' },
        { label: 'Afternoon', text: 'Snorkeling in coral reefs' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Castaway Island',
      details: [
        { label: 'Morning', text: 'Excursion to Castaway Island' },
        { label: 'Afternoon', text: 'Kayaking and paddleboarding' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Fijian Culture',
      details: [
        { label: 'Morning', text: 'Visit to Fijian village' },
        { label: 'Afternoon', text: 'Kava ceremony and traditional dances' },
        { label: 'Evening', text: 'Dinner with Fijian music' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Mamanuca Islands - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Return ferry to Nadi' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'fiji-tour-3': [
    {
      day: 'Day 1',
      title: 'Yasawa Islands',
      details: [
        { label: 'Morning', text: 'Ferry to Yasawa Islands' },
        { label: 'Afternoon', text: 'Check-in and lunch on the beach' },
        { label: 'Evening', text: 'Welcome dinner with seafood' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Natural Yasawa',
      details: [
        { label: 'Morning', text: 'Hiking on the islands' },
        { label: 'Afternoon', text: 'Sawa-i-Lau caves' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Beachy Yasawa',
      details: [
        { label: 'Morning', text: 'Blue Lagoon Beach' },
        { label: 'Afternoon', text: 'Snorkeling and diving' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Local Community',
      details: [
        { label: 'Morning', text: 'Visit to local school' },
        { label: 'Afternoon', text: 'Crafts workshops' },
        { label: 'Evening', text: 'Traditional Fijian dinner' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Yasawa Adventure',
      details: [
        { label: 'Morning', text: 'Kayaking around the islands' },
        { label: 'Afternoon', text: 'Traditional fishing' },
        { label: 'Evening', text: 'Dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Yasawa - Return',
      details: [
        { label: 'Morning', text: 'Free time on the beach' },
        { label: 'Afternoon', text: 'Return ferry to Nadi' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'fiji-tour-4': [
    {
      day: 'Day 1',
      title: 'Taveuni Island',
      details: [
        { label: 'Morning', text: 'Flight to Taveuni and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with local fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Natural Taveuni',
      details: [
        { label: 'Morning', text: 'Bouma National Heritage Park' },
        { label: 'Afternoon', text: 'Tavoro Waterfalls' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Beachy Taveuni',
      details: [
        { label: 'Morning', text: 'Lavena Beach and snorkeling' },
        { label: 'Afternoon', text: 'Rainbow Reef and diving' },
        { label: 'Evening', text: 'Dinner on the beach' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Taveuni - Return',
      details: [
        { label: 'Morning', text: 'Free time on the island' },
        { label: 'Afternoon', text: 'Return flight to Nadi' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'new-zealand-tour-1': [
    {
      day: 'Day 1',
      title: 'Auckland of the Sails',
      details: [
        { label: 'Morning', text: 'Auckland Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Auckland',
      details: [
        { label: 'Morning', text: 'Sky Tower and observatory' },
        { label: 'Afternoon', text: 'Viaduct Harbour and port' },
        { label: 'Evening', text: 'Dinner at restaurant with sea view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Natural Auckland',
      details: [
        { label: 'Morning', text: 'Mount Eden and volcanic crater' },
        { label: 'Afternoon', text: 'One Tree Hill and Cornwall Park' },
        { label: 'Evening', text: 'Dinner at traditional Māori restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Auckland',
      details: [
        { label: 'Morning', text: 'Auckland Museum and Māori art' },
        { label: 'Afternoon', text: 'Parnell Village and Rose Gardens' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Auckland - Return',
      details: [
        { label: 'Morning', text: 'Otara Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'new-zealand-tour-2': [
    {
      day: 'Day 1',
      title: 'Geothermal Rotorua',
      details: [
        { label: 'Morning', text: 'Flight to Rotorua and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Māori hangi' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Geothermal Rotorua',
      details: [
        { label: 'Morning', text: 'Wai-O-Tapu Thermal Wonderland' },
        { label: 'Afternoon', text: 'Lady Knox Geyser and mud pools' },
        { label: 'Evening', text: 'Dinner at restaurant with geyser views' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Rotorua',
      details: [
        { label: 'Morning', text: 'Te Puia and Māori Arts and Crafts Centre' },
        { label: 'Afternoon', text: 'Māori cultural show and haka' },
        { label: 'Evening', text: 'Traditional Māori dinner' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Rotorua - Taupo',
      details: [
        { label: 'Morning', text: 'Transfer to Taupo' },
        { label: 'Afternoon', text: 'Lake Taupo and Huka Falls' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Taupo - Auckland',
      details: [
        { label: 'Morning', text: 'Tongariro National Park' },
        { label: 'Afternoon', text: 'Return flight to Auckland' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Auckland - Return',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'Return flight' },
      ],
    },
  ],
  'new-zealand-tour-3': [
    {
      day: 'Day 1',
      title: 'Queenstown Adventure',
      details: [
        { label: 'Morning', text: 'Flight to Queenstown and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with New Zealand lamb' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Queenstown',
      details: [
        { label: 'Morning', text: 'Skyline Gondola and Luge' },
        { label: 'Afternoon', text: 'Lake Wakatipu and Steamer Wharf' },
        { label: 'Evening', text: 'Dinner at restaurant with mountain views' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Milford Sound',
      details: [
        { label: 'Morning', text: 'Transfer to Milford Sound' },
        { label: 'Afternoon', text: 'Cruise through Milford Sound' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Queenstown Adventure',
      details: [
        { label: 'Morning', text: 'Jet Boat on Shotover River' },
        { label: 'Afternoon', text: 'Historic Arrowtown' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Queenstown - Wanaka',
      details: [
        { label: 'Morning', text: 'Transfer to Wanaka' },
        { label: 'Afternoon', text: 'Lake Wanaka and Puzzle World' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Queenstown - Return',
      details: [
        { label: 'Morning', text: 'Free time in Queenstown' },
        { label: 'Afternoon', text: 'Return flight to Auckland' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'new-zealand-tour-4': [
    {
      day: 'Day 1',
      title: 'Cultural Wellington',
      details: [
        { label: 'Morning', text: 'Flight to Wellington and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Wellington',
      details: [
        { label: 'Morning', text: 'Te Papa Tongarewa Museum' },
        { label: 'Afternoon', text: 'Cable Car and Botanic Gardens' },
        { label: 'Evening', text: 'Dinner at restaurant with harbor view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Wellington',
      details: [
        { label: 'Morning', text: 'Weta Workshop and Lord of the Rings' },
        { label: 'Afternoon', text: 'Cuba Street and markets' },
        { label: 'Evening', text: 'Dinner at multicultural restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Wellington - Return',
      details: [
        { label: 'Morning', text: 'Zealandia Wildlife Sanctuary' },
        { label: 'Afternoon', text: 'Return flight to Auckland' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'argentina-tour-1': [
    {
      day: 'Day 1',
      title: 'Buenos Aires Tango',
      details: [
        { label: 'Morning', text: 'Ezeiza Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local grill' },
        { label: 'Evening', text: 'Welcome dinner with asado' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Buenos Aires',
      details: [
        { label: 'Morning', text: 'Plaza de Mayo and Casa Rosada' },
        { label: 'Afternoon', text: 'Metropolitan Cathedral and Cabildo' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Buenos Aires',
      details: [
        { label: 'Morning', text: 'La Boca and Caminito' },
        { label: 'Afternoon', text: 'San Telmo and antiques market' },
        { label: 'Evening', text: 'Tango show at La Ventana' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Elegant Buenos Aires',
      details: [
        { label: 'Morning', text: 'Recoleta and Cemetery' },
        { label: 'Afternoon', text: 'Palermo and botanical gardens' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Modern Buenos Aires',
      details: [
        { label: 'Morning', text: 'Puerto Madero and Puente de la Mujer' },
        { label: 'Afternoon', text: 'Museum of Latin American Art (MALBA)' },
        { label: 'Evening', text: 'Dinner with live music' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Buenos Aires - Return',
      details: [
        { label: 'Morning', text: 'San Telmo Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'argentina-tour-2': [
    {
      day: 'Day 1',
      title: 'Wild Patagonia',
      details: [
        { label: 'Morning', text: 'Flight to Ushuaia and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with centolla' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Complete Ushuaia',
      details: [
        { label: 'Morning', text: 'Tierra del Fuego National Park' },
        { label: 'Afternoon', text: 'End of the World Train' },
        { label: 'Evening', text: 'Dinner at mountain restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Ushuaia - El Calafate',
      details: [
        { label: 'Morning', text: 'Flight to El Calafate' },
        { label: 'Afternoon', text: 'Check-in and lunch' },
        { label: 'Evening', text: 'Dinner with Patagonian lamb' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Perito Moreno Glacier',
      details: [
        { label: 'Morning', text: 'Los Glaciares National Park' },
        { label: 'Afternoon', text: 'Navigation on Lake Argentino' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'El Calafate - El Chaltén',
      details: [
        { label: 'Morning', text: 'Transfer to El Chaltén' },
        { label: 'Afternoon', text: 'Hiking in National Park' },
        { label: 'Evening', text: 'Dinner at mountain refuge' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Complete El Chaltén',
      details: [
        { label: 'Morning', text: 'Mount Fitz Roy and Laguna de los Tres' },
        { label: 'Afternoon', text: 'Viedma Glacier' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 7',
      title: 'El Chaltén - Bariloche',
      details: [
        { label: 'Morning', text: 'Flight to Bariloche' },
        { label: 'Afternoon', text: 'Check-in and lunch' },
        { label: 'Evening', text: 'Dinner with Patagonian trout' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Natural Bariloche',
      details: [
        { label: 'Morning', text: 'Circuito Chico and Llao Llao' },
        { label: 'Afternoon', text: 'Campanario Hill and cable car' },
        { label: 'Evening', text: 'Dinner at mountain restaurant' },
      ],
    },
    {
      day: 'Day 9',
      title: 'Bariloche - Buenos Aires',
      details: [
        { label: 'Morning', text: 'Nahuel Huapi National Park' },
        { label: 'Afternoon', text: 'Return flight to Buenos Aires' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 10',
      title: 'Buenos Aires - Return',
      details: [
        { label: 'Morning', text: 'Free time for shopping' },
        { label: 'Afternoon', text: 'Transfer to airport' },
        { label: 'Evening', text: 'Return flight' },
      ],
    },
  ],
  'argentina-tour-3': [
    {
      day: 'Day 1',
      title: 'Iguazu Falls',
      details: [
        { label: 'Morning', text: 'Flight to Puerto Iguazú and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with local fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Argentine Falls',
      details: [
        { label: 'Morning', text: 'Iguazú National Park (Argentine side)' },
        { label: 'Afternoon', text: 'Devil\'s Throat and trails' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Brazilian Falls',
      details: [
        { label: 'Morning', text: 'Iguazú National Park (Brazilian side)' },
        { label: 'Afternoon', text: 'Helicopter over the falls' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Iguazú - Return',
      details: [
        { label: 'Morning', text: 'Three Borders Landmark' },
        { label: 'Afternoon', text: 'Return flight to Buenos Aires' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'argentina-tour-4': [
    {
      day: 'Day 1',
      title: 'Mendoza Wine',
      details: [
        { label: 'Morning', text: 'Flight to Mendoza and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with malbec wine' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Uco Valley',
      details: [
        { label: 'Morning', text: 'Wineries in Uco Valley' },
        { label: 'Afternoon', text: 'Wine tastings and lunch at winery' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Historic Mendoza',
      details: [
        { label: 'Morning', text: 'Independence Plaza and San Martín Park' },
        { label: 'Afternoon', text: 'Wine Museum and crafts' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Andes Mountain Range',
      details: [
        { label: 'Morning', text: 'Aconcagua and Puente del Inca' },
        { label: 'Afternoon', text: 'Cacheuta Hot Springs' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Mendoza - Return',
      details: [
        { label: 'Morning', text: 'Crafts market' },
        { label: 'Afternoon', text: 'Return flight to Buenos Aires' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'brazil-tour-1': [
    {
      day: 'Day 1',
      title: 'Vibrant Rio de Janeiro',
      details: [
        { label: 'Morning', text: 'Galeão Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with feijoada' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Rio',
      details: [
        { label: 'Morning', text: 'Christ the Redeemer and Corcovado' },
        { label: 'Afternoon', text: 'Sugarloaf Mountain and cable car' },
        { label: 'Evening', text: 'Dinner at restaurant with panoramic view' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Historic Rio',
      details: [
        { label: 'Morning', text: 'Historic center and Metropolitan Cathedral' },
        { label: 'Afternoon', text: 'Selarón Steps and Lapa' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Rio Beaches',
      details: [
        { label: 'Morning', text: 'Copacabana and Ipanema' },
        { label: 'Afternoon', text: 'Leblon Beach and Copacabana Fort' },
        { label: 'Evening', text: 'Dinner at seafood restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Cultural Rio',
      details: [
        { label: 'Morning', text: 'Museum of Modern Art (MAM)' },
        { label: 'Afternoon', text: 'Botanical Garden and Lage Park' },
        { label: 'Evening', text: 'Samba show in Lapa' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Natural Rio',
      details: [
        { label: 'Morning', text: 'Tijuca National Park' },
        { label: 'Afternoon', text: 'Cascatinha and Vista Chinesa' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Rio - Return',
      details: [
        { label: 'Morning', text: 'São Cristóvão Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'brazil-tour-2': [
    {
      day: 'Day 1',
      title: 'Deep Amazon',
      details: [
        { label: 'Morning', text: 'Flight to Manaus and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Amazonian fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Manaus',
      details: [
        { label: 'Morning', text: 'Amazonas Theater and Rio Negro Palace' },
        { label: 'Afternoon', text: 'Meeting of the Waters and port' },
        { label: 'Evening', text: 'Dinner at floating restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Manaus - Amazon Lodge',
      details: [
        { label: 'Morning', text: 'Transfer to jungle lodge' },
        { label: 'Afternoon', text: 'Check-in and jungle walk' },
        { label: 'Evening', text: 'Dinner at the lodge' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Amazon Jungle',
      details: [
        { label: 'Morning', text: 'Canoe ride on the river' },
        { label: 'Afternoon', text: 'Piranha fishing and river bathing' },
        { label: 'Evening', text: 'Dinner and stargazing' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Indigenous Community',
      details: [
        { label: 'Morning', text: 'Visit to indigenous community' },
        { label: 'Afternoon', text: 'Learning local crafts' },
        { label: 'Evening', text: 'Dinner with the community' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Wildlife Watching',
      details: [
        { label: 'Morning', text: 'Bird and monkey watching' },
        { label: 'Afternoon', text: 'Night hiking' },
        { label: 'Evening', text: 'Dinner at the lodge' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Lodge - Manaus',
      details: [
        { label: 'Morning', text: 'Last jungle walk' },
        { label: 'Afternoon', text: 'Return to Manaus' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 8',
      title: 'Manaus - Return',
      details: [
        { label: 'Morning', text: 'Municipal Market and shopping' },
        { label: 'Afternoon', text: 'Return flight to Rio' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'brazil-tour-3': [
    {
      day: 'Day 1',
      title: 'Modern São Paulo',
      details: [
        { label: 'Morning', text: 'Flight to São Paulo and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with São Paulo feijoada' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic São Paulo',
      details: [
        { label: 'Morning', text: 'Paulista Avenue and Art Museum (MASP)' },
        { label: 'Afternoon', text: 'Ibirapuera Park and Bandeiras Monument' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural São Paulo',
      details: [
        { label: 'Morning', text: 'Pinacoteca and Luz Station' },
        { label: 'Afternoon', text: 'Municipal Market and Liberdade' },
        { label: 'Evening', text: 'Dinner at Japanese restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Historic São Paulo',
      details: [
        { label: 'Morning', text: 'Historic center and Sé Cathedral' },
        { label: 'Afternoon', text: 'Pátio do Colégio and São Bento Monastery' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'São Paulo - Return',
      details: [
        { label: 'Morning', text: 'Crafts market and shopping' },
        { label: 'Afternoon', text: 'Return flight to Rio' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'brazil-tour-4': [
    {
      day: 'Day 1',
      title: 'Salvador de Bahía',
      details: [
        { label: 'Morning', text: 'Flight to Salvador and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with moqueca' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Pelourinho',
      details: [
        { label: 'Morning', text: 'Historic center and Pelourinho' },
        { label: 'Afternoon', text: 'Baroque churches and Lacerda Elevator' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Salvador',
      details: [
        { label: 'Morning', text: 'Afro-Brazilian Museum and Model Market' },
        { label: 'Afternoon', text: 'São Marcelo Fort and beach' },
        { label: 'Evening', text: 'Capoeira show' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Natural Salvador',
      details: [
        { label: 'Morning', text: 'Itapuã Beach and Barra Lighthouse' },
        { label: 'Afternoon', text: 'Pituaçu Metropolitan Park' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Itaparica Island',
      details: [
        { label: 'Morning', text: 'Ferry to Itaparica Island' },
        { label: 'Afternoon', text: 'Beach and water activities' },
        { label: 'Evening', text: 'Dinner on the island' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Salvador - Return',
      details: [
        { label: 'Morning', text: 'Free time in Salvador' },
        { label: 'Afternoon', text: 'Return flight to Rio' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'chile-tour-1': [
    {
      day: 'Day 1',
      title: 'Andean Santiago',
      details: [
        { label: 'Morning', text: 'Arturo Merino Benítez Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Chilean empanadas' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Santiago',
      details: [
        { label: 'Morning', text: 'Plaza de Armas and Metropolitan Cathedral' },
        { label: 'Afternoon', text: 'La Moneda Palace and Santa Lucía Hill' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Santiago',
      details: [
        { label: 'Morning', text: 'Fine Arts Museum and Forest Park' },
        { label: 'Afternoon', text: 'Bellavista neighborhood and La Chascona' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Maipo Valley',
      details: [
        { label: 'Morning', text: 'Concha y Toro Winery and wine tastings' },
        { label: 'Afternoon', text: 'Undurraga Winery and lunch at winery' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Santiago - Return',
      details: [
        { label: 'Morning', text: 'Central Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'chile-tour-2': [
    {
      day: 'Day 1',
      title: 'Valley of the Moon',
      details: [
        { label: 'Morning', text: 'Flight to Calama and transfer to San Pedro' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with llama' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Valley of the Moon',
      details: [
        { label: 'Morning', text: 'Valley of the Moon and rock formations' },
        { label: 'Afternoon', text: 'Valley of Death and hiking' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Highland Lagoons',
      details: [
        { label: 'Morning', text: 'Miscanti and Miñiques Lagoons' },
        { label: 'Afternoon', text: 'Atacama Salt Flat and Chaxa Lagoon' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Tatio Geysers',
      details: [
        { label: 'Morning', text: 'Tatio Geysers at sunrise' },
        { label: 'Afternoon', text: 'Hot springs and Machuca village' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Cultural San Pedro',
      details: [
        { label: 'Morning', text: 'San Pedro Church and museum' },
        { label: 'Afternoon', text: 'Quitor Pukará and Rainbow Valley' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'San Pedro - Return',
      details: [
        { label: 'Morning', text: 'Free time in San Pedro' },
        { label: 'Afternoon', text: 'Return flight to Santiago' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'chile-tour-3': [
    {
      day: 'Day 1',
      title: 'Easter Island',
      details: [
        { label: 'Morning', text: 'Flight to Easter Island and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with local fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Ahu Tongariki',
      details: [
        { label: 'Morning', text: 'Ahu Tongariki and 15 moai' },
        { label: 'Afternoon', text: 'Rano Raraku and moai quarry' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Orongo and Rano Kau',
      details: [
        { label: 'Morning', text: 'Orongo ceremonial village' },
        { label: 'Afternoon', text: 'Rano Kau volcano and crater' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Anakena Beach',
      details: [
        { label: 'Morning', text: 'Anakena Beach and Ahu Nau Nau' },
        { label: 'Afternoon', text: 'Ahu Akivi and 7 moai' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Easter Island - Return',
      details: [
        { label: 'Morning', text: 'Free time on the island' },
        { label: 'Afternoon', text: 'Return flight to Santiago' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'chile-tour-4': [
    {
      day: 'Day 1',
      title: 'Chilean Patagonia',
      details: [
        { label: 'Morning', text: 'Flight to Punta Arenas and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with centolla' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Punta Arenas',
      details: [
        { label: 'Morning', text: 'Muñoz Gamero Plaza and Cathedral' },
        { label: 'Afternoon', text: 'Municipal Cemetery and viewpoint' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Punta Arenas - Puerto Natales',
      details: [
        { label: 'Morning', text: 'Transfer to Puerto Natales' },
        { label: 'Afternoon', text: 'Check-in and lunch' },
        { label: 'Evening', text: 'Dinner with Patagonian lamb' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Torres del Paine National Park',
      details: [
        { label: 'Morning', text: 'Torres del Paine and hiking' },
        { label: 'Afternoon', text: 'Grey Lake and glacier' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Complete Torres del Paine',
      details: [
        { label: 'Morning', text: 'French Valley' },
        { label: 'Afternoon', text: 'Pehoé Lake and waterfalls' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Puerto Natales - Punta Arenas',
      details: [
        { label: 'Morning', text: 'Milodón Cave' },
        { label: 'Afternoon', text: 'Return transfer to Punta Arenas' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Punta Arenas - Return',
      details: [
        { label: 'Morning', text: 'Free time in Punta Arenas' },
        { label: 'Afternoon', text: 'Return flight to Santiago' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'ecuador-tour-1': [
    {
      day: 'Day 1',
      title: 'Colonial Quito',
      details: [
        { label: 'Morning', text: 'Mariscal Sucre Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with locro' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Quito',
      details: [
        { label: 'Morning', text: 'Plaza Grande and Carondelet Palace' },
        { label: 'Afternoon', text: 'Compañía Church and San Francisco' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Quito - Return',
      details: [
        { label: 'Morning', text: 'Crafts market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'ecuador-tour-2': [
    {
      day: 'Day 1',
      title: 'Wild Galapagos',
      details: [
        { label: 'Morning', text: 'Flight to Baltra and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Santa Cruz Island',
      details: [
        { label: 'Morning', text: 'Charles Darwin Station' },
        { label: 'Afternoon', text: 'Giant tortoises in the wild' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Isabela Island',
      details: [
        { label: 'Morning', text: 'Ferry to Isabela and volcanoes' },
        { label: 'Afternoon', text: 'Beach and snorkeling' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Floreana Island',
      details: [
        { label: 'Morning', text: 'Ferry to Floreana' },
        { label: 'Afternoon', text: 'Post Office Bay and beach' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'San Cristóbal Island',
      details: [
        { label: 'Morning', text: 'Ferry to San Cristóbal' },
        { label: 'Afternoon', text: 'León Dormido and snorkeling' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Natural Galapagos',
      details: [
        { label: 'Morning', text: 'Bird and wildlife watching' },
        { label: 'Afternoon', text: 'Beach and water activities' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 7',
      title: 'Galapagos - Return',
      details: [
        { label: 'Morning', text: 'Free time in Galapagos' },
        { label: 'Afternoon', text: 'Return flight to Quito' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'ecuador-tour-3': [
    {
      day: 'Day 1',
      title: 'Cultural Cuenca',
      details: [
        { label: 'Morning', text: 'Flight to Cuenca and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with cuy' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Cuenca',
      details: [
        { label: 'Morning', text: 'Historic center and New Cathedral' },
        { label: 'Afternoon', text: 'Pumapungo Museum and Inca ruins' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Artisanal Cuenca',
      details: [
        { label: 'Morning', text: 'Panama hat workshops' },
        { label: 'Afternoon', text: 'Crafts market and shopping' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cuenca - Return',
      details: [
        { label: 'Morning', text: 'Free time in Cuenca' },
        { label: 'Afternoon', text: 'Return flight to Quito' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'ecuador-tour-4': [
    {
      day: 'Day 1',
      title: 'Ecuadorian Amazon',
      details: [
        { label: 'Morning', text: 'Flight to Tena and transfer to lodge' },
        { label: 'Afternoon', text: 'Check-in and lunch at the lodge' },
        { label: 'Evening', text: 'Welcome dinner with Amazonian fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Amazon Jungle',
      details: [
        { label: 'Morning', text: 'Jungle walk' },
        { label: 'Afternoon', text: 'Napo River and canoe' },
        { label: 'Evening', text: 'Dinner at the lodge' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Indigenous Community',
      details: [
        { label: 'Morning', text: 'Visit to Kichwa community' },
        { label: 'Afternoon', text: 'Crafts workshops' },
        { label: 'Evening', text: 'Dinner with the community' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Wildlife Watching',
      details: [
        { label: 'Morning', text: 'Bird and monkey watching' },
        { label: 'Afternoon', text: 'Night hiking' },
        { label: 'Evening', text: 'Dinner at the lodge' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Tena - Return',
      details: [
        { label: 'Morning', text: 'Last jungle walk' },
        { label: 'Afternoon', text: 'Return flight to Quito' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'colombia-tour-1': [
    {
      day: 'Day 1',
      title: 'Cultural Bogota',
      details: [
        { label: 'Morning', text: 'El Dorado Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with ajiaco' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Bogota',
      details: [
        { label: 'Morning', text: 'Bolívar Plaza and Primate Cathedral' },
        { label: 'Afternoon', text: 'Gold Museum and Nariño House' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Bogota',
      details: [
        { label: 'Morning', text: 'National Museum and Independence Park' },
        { label: 'Afternoon', text: 'Zona Rosa and Chapinero' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Bogota - Return',
      details: [
        { label: 'Morning', text: 'Usaquén Market and shopping' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'colombia-tour-2': [
    {
      day: 'Day 1',
      title: 'Colonial Cartagena',
      details: [
        { label: 'Morning', text: 'Flight to Cartagena and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with fresh fish' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Cartagena',
      details: [
        { label: 'Morning', text: 'Walled City and Plaza de los Coches' },
        { label: 'Afternoon', text: 'San Felipe Castle and Vaults' },
        { label: 'Evening', text: 'Dinner at colonial restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Cartagena',
      details: [
        { label: 'Morning', text: 'Inquisition Palace and museums' },
        { label: 'Afternoon', text: 'Getsemaní and street art' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Rosario Islands',
      details: [
        { label: 'Morning', text: 'Ferry to Rosario Islands' },
        { label: 'Afternoon', text: 'Snorkeling and beach' },
        { label: 'Evening', text: 'Dinner on the island' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Cartagena - Return',
      details: [
        { label: 'Morning', text: 'Free time in Cartagena' },
        { label: 'Afternoon', text: 'Return flight to Bogota' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'colombia-tour-3': [
    {
      day: 'Day 1',
      title: 'Modern Medellin',
      details: [
        { label: 'Morning', text: 'Flight to Medellin and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with bandeja paisa' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Iconic Medellin',
      details: [
        { label: 'Morning', text: 'Botero Plaza and Antioquia Museum' },
        { label: 'Afternoon', text: 'Metrocable and Arví Park' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Medellin',
      details: [
        { label: 'Morning', text: 'Comuna 13 and graffiti' },
        { label: 'Afternoon', text: 'Pueblito Paisa and viewpoint' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Medellin - Return',
      details: [
        { label: 'Morning', text: 'Crafts market' },
        { label: 'Afternoon', text: 'Return flight to Bogota' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'colombia-tour-4': [
    {
      day: 'Day 1',
      title: 'Colombian Coffee',
      details: [
        { label: 'Morning', text: 'Flight to Armenia and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with sancocho' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Coffee Valley',
      details: [
        { label: 'Morning', text: 'Coffee plantation and coffee process' },
        { label: 'Afternoon', text: 'Coffee tastings and lunch at farm' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Salento and Cocora',
      details: [
        { label: 'Morning', text: 'Salento town and architecture' },
        { label: 'Afternoon', text: 'Cocora Valley and wax palms' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Filandia and Circasia',
      details: [
        { label: 'Morning', text: 'Filandia town' },
        { label: 'Afternoon', text: 'Circasia and crafts' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Armenia - Cali',
      details: [
        { label: 'Morning', text: 'Transfer to Cali' },
        { label: 'Afternoon', text: 'Historic center and salsa' },
        { label: 'Evening', text: 'Dinner with salsa music' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Cali - Return',
      details: [
        { label: 'Morning', text: 'Free time in Cali' },
        { label: 'Afternoon', text: 'Return flight to Bogota' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'peru-tour-1': [
    {
      day: 'Day 1',
      title: 'Gastronomic Lima',
      details: [
        { label: 'Morning', text: 'Jorge Chávez Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with ceviche' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Lima',
      details: [
        { label: 'Morning', text: 'Main Plaza and Lima Cathedral' },
        { label: 'Afternoon', text: 'San Francisco Convent and catacombs' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Gastronomic Lima',
      details: [
        { label: 'Morning', text: 'Surquillo Market and ingredients' },
        { label: 'Afternoon', text: 'Peruvian cooking class' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Lima - Return',
      details: [
        { label: 'Morning', text: 'Barranco and Bridge of Sighs' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'peru-tour-2': [
    {
      day: 'Day 1',
      title: 'Mystical Machu Picchu',
      details: [
        { label: 'Morning', text: 'Flight to Cusco and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with cuy' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Cusco',
      details: [
        { label: 'Morning', text: 'Plaza de Armas and Cathedral' },
        { label: 'Afternoon', text: 'Qorikancha and Sacsayhuamán' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Sacred Valley',
      details: [
        { label: 'Morning', text: 'Pisac and artisan market' },
        { label: 'Afternoon', text: 'Ollantaytambo and fortress' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Machu Picchu',
      details: [
        { label: 'Morning', text: 'Train to Machu Picchu' },
        { label: 'Afternoon', text: 'Inca citadel and guided tour' },
        { label: 'Evening', text: 'Dinner in Aguas Calientes' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Machu Picchu - Cusco',
      details: [
        { label: 'Morning', text: 'Free time in Machu Picchu' },
        { label: 'Afternoon', text: 'Return train to Cusco' },
        { label: 'Evening', text: 'Farewell dinner' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Cusco - Return',
      details: [
        { label: 'Morning', text: 'San Pedro Market' },
        { label: 'Afternoon', text: 'Return flight to Lima' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'peru-tour-3': [
    {
      day: 'Day 1',
      title: 'Colonial Arequipa',
      details: [
        { label: 'Morning', text: 'Flight to Arequipa and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with stuffed rocoto' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Arequipa',
      details: [
        { label: 'Morning', text: 'Plaza de Armas and Cathedral' },
        { label: 'Afternoon', text: 'Santa Catalina Monastery' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Colca Canyon',
      details: [
        { label: 'Morning', text: 'Transfer to Colca Canyon' },
        { label: 'Afternoon', text: 'Condor Viewpoint' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Cultural Arequipa',
      details: [
        { label: 'Morning', text: 'Andean Sanctuaries Museum' },
        { label: 'Afternoon', text: 'Yanahuara and viewpoint' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Arequipa - Return',
      details: [
        { label: 'Morning', text: 'Crafts market' },
        { label: 'Afternoon', text: 'Return flight to Lima' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'peru-tour-4': [
    {
      day: 'Day 1',
      title: 'Lake Titicaca',
      details: [
        { label: 'Morning', text: 'Flight to Juliaca and transfer to Puno' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with trout' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Lake Titicaca',
      details: [
        { label: 'Morning', text: 'Floating Uros Islands' },
        { label: 'Afternoon', text: 'Taquile Island and crafts' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Puno',
      details: [
        { label: 'Morning', text: 'Sillustani and chullpas' },
        { label: 'Afternoon', text: 'Puno and local market' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Puno - Cusco',
      details: [
        { label: 'Morning', text: 'Transfer to Cusco by road' },
        { label: 'Afternoon', text: 'Villages along the way' },
        { label: 'Evening', text: 'Dinner in Cusco' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Cusco - Return',
      details: [
        { label: 'Morning', text: 'Free time in Cusco' },
        { label: 'Afternoon', text: 'Return flight to Lima' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'bolivia-tour-1': [
    {
      day: 'Day 1',
      title: 'Andean La Paz',
      details: [
        { label: 'Morning', text: 'El Alto Airport and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with salteñas' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic La Paz',
      details: [
        { label: 'Morning', text: 'Murillo Plaza and Presidential Palace' },
        { label: 'Afternoon', text: 'Metropolitan Cathedral and San Francisco' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural La Paz',
      details: [
        { label: 'Morning', text: 'Witches Market and shopping' },
        { label: 'Afternoon', text: 'Cable car and viewpoints' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'La Paz - Return',
      details: [
        { label: 'Morning', text: 'Moon Valley' },
        { label: 'Afternoon', text: 'Free time to explore' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'bolivia-tour-2': [
    {
      day: 'Day 1',
      title: 'Uyuni Salt Flat',
      details: [
        { label: 'Morning', text: 'Flight to Uyuni and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with llama' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Uyuni Salt Flat',
      details: [
        { label: 'Morning', text: 'Uyuni Salt Flat and Incahuasi Island' },
        { label: 'Afternoon', text: 'Train Cemetery' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Highland Lagoons',
      details: [
        { label: 'Morning', text: 'Red Lagoon and flamingos' },
        { label: 'Afternoon', text: 'Green Lagoon and volcanoes' },
        { label: 'Evening', text: 'Dinner at refuge' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Siloli Desert',
      details: [
        { label: 'Morning', text: 'Stone Tree and desert' },
        { label: 'Afternoon', text: 'Hedionda Lagoon and wildlife' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Uyuni - Potosí',
      details: [
        { label: 'Morning', text: 'Transfer to Potosí' },
        { label: 'Afternoon', text: 'Cerro Rico and mines' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 6',
      title: 'Potosí - Return',
      details: [
        { label: 'Morning', text: 'Historic center of Potosí' },
        { label: 'Afternoon', text: 'Return flight to La Paz' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'bolivia-tour-3': [
    {
      day: 'Day 1',
      title: 'Colonial Sucre',
      details: [
        { label: 'Morning', text: 'Flight to Sucre and transfer to hotel' },
        { label: 'Afternoon', text: 'Check-in and lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with Chuquisaca chorizo' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Historic Sucre',
      details: [
        { label: 'Morning', text: '25 de Mayo Plaza and Cathedral' },
        { label: 'Afternoon', text: 'House of Freedom and museums' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Cultural Sucre',
      details: [
        { label: 'Morning', text: 'Crafts market and shopping' },
        { label: 'Afternoon', text: 'Recoleta and viewpoint' },
        { label: 'Evening', text: 'Dinner at gourmet restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Sucre - Return',
      details: [
        { label: 'Morning', text: 'Free time in Sucre' },
        { label: 'Afternoon', text: 'Return flight to La Paz' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
  'bolivia-tour-4': [
    {
      day: 'Day 1',
      title: 'Bolivian Lake Titicaca',
      details: [
        { label: 'Morning', text: 'Transfer to Copacabana and check-in' },
        { label: 'Afternoon', text: 'Lunch at local restaurant' },
        { label: 'Evening', text: 'Welcome dinner with trout' },
      ],
    },
    {
      day: 'Day 2',
      title: 'Sun Island',
      details: [
        { label: 'Morning', text: 'Ferry to Sun Island' },
        { label: 'Afternoon', text: 'Inca ruins and hiking' },
        { label: 'Evening', text: 'Dinner on the island' },
      ],
    },
    {
      day: 'Day 3',
      title: 'Moon Island',
      details: [
        { label: 'Morning', text: 'Ferry to Moon Island' },
        { label: 'Afternoon', text: 'Temple of the Sun Virgins' },
        { label: 'Evening', text: 'Dinner at local restaurant' },
      ],
    },
    {
      day: 'Day 4',
      title: 'Copacabana',
      details: [
        { label: 'Morning', text: 'Copacabana Basilica' },
        { label: 'Afternoon', text: 'Calvary and viewpoint' },
        { label: 'Evening', text: 'Dinner at traditional restaurant' },
      ],
    },
    {
      day: 'Day 5',
      title: 'Copacabana - Return',
      details: [
        { label: 'Morning', text: 'Free time in Copacabana' },
        { label: 'Afternoon', text: 'Return transfer to La Paz' },
        { label: 'Evening', text: 'Transfer to airport' },
      ],
    },
  ],
}; 