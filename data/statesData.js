// India States Complete Data with 8+ Places Per State
const statesData = {
  "Rajasthan": {
    tagline: "The Land of Kings",
    description: "Forts, palaces, deserts, aur vibrant culture ke saath Rajasthan explore karo",
    image: "./images/jaipur/hawa-mahal.jpg",
    places: [
      {
        name: "Hawa Mahal",
        city: "Jaipur",
        category: "attractions",
        description: "Jaipur ka famous pink facade wali 'Palace of Winds'. 5-story structure.",
        lat: 26.9239363,
        lng: 75.8267438,
        image: "./images/jaipur/hawa-mahal.jpg"
      },
      {
        name: "Amber Fort",
        city: "Jaipur",
        category: "attractions",
        description: "Majestic hilltop fort with mirror palace aur incredible views.",
        lat: 26.9854865,
        lng: 75.8513454,
        image: "./images/jaipur/amber-fort.jpg"
      },
      {
        name: "City Palace",
        city: "Jaipur",
        category: "attractions",
        description: "Royal palace complex jo aaj bhi partly used by royal family aur museum bhi hai.",
        lat: 26.9257713,
        lng: 75.8236589,
        image: "./images/jaipur/city-palace.jpg"
      },
      {
        name: "Jantar Mantar",
        city: "Jaipur",
        category: "attractions",
        description: "UNESCO Heritage Site with ancient astronomical instruments. Science lovers paradise.",
        lat: 26.9244,
        lng: 75.8242,
        image: "./images/jaipur/jantar-mantar.jpg"
      },
      {
        name: "Jal Mahal",
        city: "Jaipur",
        category: "attractions",
        description: "Floating red palace in man-made lake. Perfect for photography aur sunset.",
        lat: 26.953388,
        lng: 75.846852,
        image: "./images/jaipur/jal-mahal.jpg"
      },
      {
        name: "Albert Hall Museum",
        city: "Jaipur",
        category: "attractions",
        description: "Indo-Saracenic museum with ancient artifacts aur royal collections.",
        lat: 26.911667,
        lng: 75.819444,
        image: "./images/jaipur/albert-hall-museum.jpg"
      },
      {
        name: "Nahargarh Fort",
        city: "Jaipur",
        category: "attractions",
        description: "Fort par se poora Jaipur ka view. Sunset time bohot sundar hota hai.",
        lat: 26.9334,
        lng: 75.8106,
        image: "./images/jaipur/nahargarh-fort.jpg"
      },
      {
        name: "Ranthambhor Fort",
        city: "Sawai Madhopur",
        category: "attractions",
        description: "Ancient fort inside tiger reserve. Wildlife safari aur history ek saath.",
        lat: 25.9391,
        lng: 76.5132,
        image: "./images/sawai-madhopur/ranthambhor-fort.jpg"
      },
      {
        name: "Dal Baati Churma",
        city: "Jaipur",
        category: "food",
        description: "Rajasthani signature dish. Bajra baati with lentils aur ghee-soaked churma.",
        lat: 26.9124,
        lng: 75.8262,
        image: "./images/jaipur/dal-baati-churma.jpg"
      },
      {
        name: "Pyaaz Kachori",
        city: "Jaipur",
        category: "food",
        description: "Crispy onion-filled pastry with green chutney. Street food ka king.",
        lat: 26.9166,
        lng: 75.8203,
        image: "./images/jaipur/pyaaz-kachori.jpg"
      },
      {
        name: "Rajasthani Thali",
        city: "Jaipur",
        category: "food",
        description: "Complete meal with vegetables, breads, dal, pickles. Authentic taste guaranteed.",
        lat: 26.9200,
        lng: 75.8250,
        image: "./images/jaipur/rajasthani-thali.jpg"
      },
      {
        name: "Lassi aur Rabri",
        city: "Jaipur",
        category: "food",
        description: "Sweet yogurt with mango aur spices. Rabri (condensed milk pudding) specialty.",
        lat: 26.9155,
        lng: 75.8275,
        image: "./images/jaipur/lassi-aur-rabri.jpg"
      },
      {
        name: "Johari Bazaar",
        city: "Jaipur",
        category: "shopping",
        description: "Famous jewellery market. Gold, silver, kundan aur traditional designs.",
        lat: 26.9205,
        lng: 75.8264,
        image: "./images/jaipur/johari-bazaar.jpg"
      },
      {
        name: "Bapu Bazaar",
        city: "Jaipur",
        category: "shopping",
        description: "Textiles, mojari shoes, bags aur handicrafts. Colorful fabrics aur souvenirs.",
        lat: 26.9166,
        lng: 75.8203,
        image: "./images/jaipur/bapu-bazaar.jpg"
      },
      {
        name: "Blue Pottery",
        city: "Jaipur",
        category: "shopping",
        description: "Traditional pottery in blue colors. Handmade tiles, vases aur decorative items.",
        lat: 26.9180,
        lng: 75.8265,
        image: "./images/jaipur/blue-pottery.jpg"
      }
    ]
  },
  "Delhi": {
    tagline: "Heart of India",
    description: "Ancient monuments, modern city, aur history ke saath Delhi explore karo",
    image: "./images/jaipur/blue-pottery.jpg",
    places: [
      {
        name: "Red Fort",
        city: "Delhi",
        category: "attractions",
        description: "UNESCO World Heritage Site. Mughal architecture masterpiece. Sound and light show bhi dekhne laayak.",
        lat: 28.6562,
        lng: 77.2410,
        image: "./images/delhi/red-fort.jpg"
      },
      {
        name: "India Gate",
        city: "Delhi",
        category: "attractions",
        description: "Iconic war memorial aur gathering spot. Evening time families ke saath best.",
        lat: 28.6129,
        lng: 77.2295,
        image: "./images/delhi/india-gate.jpg"
      },
      {
        name: "Jama Masjid",
        city: "Delhi",
        category: "attractions",
        description: "India's largest mosque. Red sandstone architecture. Minaret se city view amazing.",
        lat: 28.6505,
        lng: 77.2303,
        image: "./images/delhi/jama-masjid.jpg"
      },
      {
        name: "Qutub Minar",
        city: "Delhi",
        category: "attractions",
        description: "UNESCO heritage 73-meter minaret. Medieval architecture perfect example. Ruins dekhne laayak.",
        lat: 28.5244,
        lng: 77.1855,
        image: "./images/delhi/qutub-minar.jpg"
      },
      {
        name: "Humayun's Tomb",
        city: "Delhi",
        category: "attractions",
        description: "Beautiful marble tomb. First garden-tomb in South Asia. Taj Mahal se pehle banaya.",
        lat: 28.5935,
        lng: 77.2507,
        image: "./images/delhi/humayun's-tomb.jpg"
      },
      {
        name: "National Museum",
        city: "Delhi",
        category: "attractions",
        description: "India's largest museum. Ancient sculptures, paintings, artifacts collection.",
        lat: 28.6076,
        lng: 77.2287,
        image: "./images/delhi/national-museum.jpg"
      },
      {
        name: "Akshardham Temple",
        city: "Delhi",
        category: "attractions",
        description: "Modern Hindu temple with traditional architecture. Ornate carvings beautiful.",
        lat: 28.6118,
        lng: 77.2748,
        image: "./images/delhi/akshardham-temple.jpg"
      },
      {
        name: "Lodi Gardens",
        city: "Delhi",
        category: "attractions",
        description: "Historic garden with old monuments. Walking aur jogging ke liye perfect.",
        lat: 28.5934,
        lng: 77.2205,
        image: "./images/delhi/lodi-gardens.jpg"
      },
      {
        name: "Chole Bhature",
        city: "Delhi",
        category: "food",
        description: "Delhi's most famous street food. Fluffy fried bread with spicy chickpea curry.",
        lat: 28.6355,
        lng: 77.2263,
        image: "./images/delhi/chole-bhature.jpg"
      },
      {
        name: "Butter Chicken",
        city: "Delhi",
        category: "food",
        description: "Creamy tomato curry with tender chicken. Naan ke saath perfect combination.",
        lat: 28.6332,
        lng: 77.2197,
        image: "./images/delhi/butter-chicken.jpg"
      },
      {
        name: "Paratha aur Achar",
        city: "Delhi",
        category: "food",
        description: "Stuffed flatbread with ghee. Aalu ke saath ya paneer. Curd bhi serve hota.",
        lat: 28.6345,
        lng: 77.2280,
        image: "./images/delhi/paratha-aur-achar.jpg"
      },
      {
        name: "Jalebi aur Imarti",
        city: "Delhi",
        category: "food",
        description: "Sweet spiral snack in sugar syrup. Crispy aur delicious. Street vendor se fresh.",
        lat: 28.6505,
        lng: 77.2303,
        image: "./images/delhi/jalebi-aur-imarti.jpg"
      },
      {
        name: "Chandni Chowk",
        city: "Delhi",
        category: "shopping",
        description: "Busiest market. Jewelry, spices, textiles. Historic bazaar feel.",
        lat: 28.6505,
        lng: 77.2303,
        image: "./images/delhi/chandni-chowk.jpg"
      },
      {
        name: "Sarojini Nagar Market",
        city: "Delhi",
        category: "shopping",
        description: "Cheap international brands. Wholesale prices pe retail mil jata.",
        lat: 28.5548,
        lng: 77.1859,
        image: "./images/delhi/sarojini-nagar-market.jpg"
      },
      {
        name: "Dilli Haat",
        city: "Delhi",
        category: "shopping",
        description: "Traditional handicrafts bazaar. Poore India se artisans aur products.",
        lat: 28.5509,
        lng: 77.2205,
        image: "./images/delhi/dilli-haat.jpg"
      }
    ]
  },
  "Uttar Pradesh": {
    tagline: "Land of Wonders",
    description: "Taj Mahal, temples, aur spiritual places ke saath UP explore karo",
    image: "./images/delhi/dilli-haat.jpg",
    places: [
      {name:"Taj Mahal",city:"Agra",category:"attractions",description:"The 8th Wonder. White marble masterpiece. Love ka global symbol.",lat:27.1751,lng:78.0421,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Agra Fort",city:"Agra",category:"attractions",description:"Red sandstone fort. Taj designers ne work kiya yaha.",lat:27.1791,lng:78.0050,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Varanasi Ghats",city:"Varanasi",category:"attractions",description:"Sacred Ganga river ghats. Spiritual experience. Aarti bohot beautiful.",lat:25.3201,lng:82.9850,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Kashi Vishwanath Temple",city:"Varanasi",category:"attractions",description:"Oldest temples. Shiva ko dedicated. Bohot crowded aur spiritual.",lat:25.3270,lng:82.9986,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Fatehpur Sikri",city:"Agra",category:"attractions",description:"Ghost city - abandoned Mughal capital. Architecture preserved.",lat:27.0881,lng:77.8754,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Mehtab Bagh",city:"Agra",category:"attractions",description:"Garden opposite Taj. Sunset dekhne perfect.",lat:27.1864,lng:78.0480,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Mathura Krishna Temple",city:"Mathura",category:"attractions",description:"Krishna ke birth place. Religious importance.",lat:27.4924,lng:77.6737,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Lucknow Clock Tower",city:"Lucknow",category:"attractions",description:"Historic tower. Mughal architecture example.",lat:26.8462,lng:80.9369,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Petha",city:"Agra",category:"food",description:"Pumpkin candy. Agra's famous sweet.",lat:27.1767,lng:78.0060,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Lucknowi Biryani",city:"Lucknow",category:"food",description:"Basmati rice with slow-cooked meat. Dum pukht style.",lat:26.8467,lng:80.9462,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Galauti Kebab",city:"Lucknow",category:"food",description:"Melt-in-mouth meat kebab. Soft aur flavourful.",lat:26.8467,lng:80.9462,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Sheermal Bread",city:"Varanasi",category:"food",description:"Saffron aur cardamom bread. Thick aur soft.",lat:25.3201,lng:82.9850,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Agra Bazaar",city:"Agra",category:"shopping",description:"Marble items, inlay work, leather goods.",lat:27.1791,lng:78.0050,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Lucknow Chikankari",city:"Lucknow",category:"shopping",description:"Traditional embroidery on cotton. Fine needle work.",lat:26.8467,lng:80.9462,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Varanasi Silk Market",city:"Varanasi",category:"shopping",description:"Silk sarees. Benaras silk hand-woven famous.",lat:25.3201,lng:82.9850,image:"./images/delhi/dilli-haat.jpg"}
    ]
  },
  "Maharashtra": {
    tagline: "Modern & Dynamic India",
    description: "Mumbai, Pune, aur beaches ke saath Maharashtra explore karo",
    image: "./images/delhi/dilli-haat.jpg",
    places: [
      {name:"Gateway of India",city:"Mumbai",category:"attractions",description:"Iconic 26-meter arch. British-era monument. Sunset par crowded.",lat:18.9220,lng:72.8347,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Haji Ali Dargah",city:"Mumbai",category:"attractions",description:"Island par medieval dargah. High tide me water surrounding.",lat:18.9828,lng:72.8235,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Marine Drive",city:"Mumbai",category:"attractions",description:"'Queen's Necklace' - curve road with sea view. Evening walk best.",lat:18.9432,lng:72.8236,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Elephanta Caves",city:"Mumbai",category:"attractions",description:"Island par ancient rock-cut caves. 5-6th century. Sculptures dekhne.",lat:18.9634,lng:72.9314,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Ajanta-Ellora Caves",city:"Aurangabad",category:"attractions",description:"UNESCO sites. Buddhist cave temples. 2000 saal purana.",lat:20.5519,lng:75.7869,image:"./images/delhi/dilli-haat.jpg"},
      {name:"CST Railway Station",city:"Mumbai",category:"attractions",description:"Victorian Gothic station. UNESCO site. Architecture beautiful.",lat:18.9344,lng:72.8355,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Lonavala Caves",city:"Lonavala",category:"attractions",description:"Buddhist caves in hill station. Nature aur history.",lat:18.7546,lng:73.4050,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Sula Vineyards",city:"Nashik",category:"attractions",description:"Wine tasting aur vineyard tour. India's premier wine region.",lat:19.9975,lng:73.7898,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Vada Pav",city:"Mumbai",category:"food",description:"Mumbai's iconic street food. Fried potato in bread.",lat:19.0760,lng:72.8777,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Pav Bhaji",city:"Mumbai",category:"food",description:"Spicy vegetable curry with butter bread. Street vendor best.",lat:19.0760,lng:72.8777,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Misal Pav",city:"Pune",category:"food",description:"Spicy sprout curry with crispy pav. Maharashtra specialty.",lat:18.5204,lng:73.8567,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Puran Poli",city:"Maharashtra",category:"food",description:"Sweet flatbread with lentil filling. Festival dish.",lat:19.0760,lng:72.8777,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Dadar Market",city:"Mumbai",category:"shopping",description:"Fashion hub. Clothes, accessories. Young crowd favorite.",lat:19.0176,lng:72.8479,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Bandra Linking Road",city:"Mumbai",category:"shopping",description:"Trendy shops aur boutiques. Cafes bhi hain.",lat:19.0596,lng:72.8295,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Aurangabad Handicrafts",city:"Aurangabad",category:"shopping",description:"Silk fabric aur traditional handicrafts. Bidri ware.",lat:19.8735,lng:75.3458,image:"./images/delhi/dilli-haat.jpg"}
    ]
  },
  "Tamil Nadu": {
    tagline: "Cradle of Dravidian Culture",
    description: "Temples, beaches, aur southern traditions ke saath TN explore karo",
    image: "./images/delhi/dilli-haat.jpg",
    places: [
      {name:"Meenakshi Temple",city:"Madurai",category:"attractions",description:"Ancient Hindu temple. 4 gopuram with intricate sculptures.",lat:9.9195,lng:78.1193,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Marina Beach",city:"Chennai",category:"attractions",description:"13 km sandy beach. World's longest urban beach.",lat:13.0497,lng:80.2848,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Brihadeeswarar Temple",city:"Thanjavur",category:"attractions",description:"UNESCO Heritage. 11th century. Granite tower 66 meters.",lat:10.7870,lng:79.1378,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Kanyakumari Beach",city:"Kanyakumari",category:"attractions",description:"Where 3 seas meet. Sunset dekhne laayak.",lat:8.0883,lng:77.5385,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Arunachaleswara Temple",city:"Tiruvannamalai",category:"attractions",description:"Shiva temple with red mountain. Spiritual hub.",lat:12.2241,lng:79.0883,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Kapaleeshwarar Temple",city:"Chennai",category:"attractions",description:"Shiva temple in Mylapore. Colorful gopuram.",lat:13.0033,lng:80.2671,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Parthasarathy Temple",city:"Chennai",category:"attractions",description:"Ancient Krishna temple. 8th century architecture.",lat:13.0146,lng:80.2668,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Pondicherry French Quarter",city:"Pondicherry",category:"attractions",description:"Colonial French architecture. Peaceful coastal town.",lat:12.0070,lng:79.8329,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Dosa",city:"Chennai",category:"food",description:"South Indian rice-batter crepe. Crispy aur soft.",lat:13.0827,lng:80.2707,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Idli",city:"Chennai",category:"food",description:"Soft steamed cake. Breakfast favorite. Sambar saath.",lat:13.0827,lng:80.2707,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Uttapam",city:"Chennai",category:"food",description:"Thick rice pancake with toppings. Onion, tomato, chili.",lat:13.0827,lng:80.2707,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Rasam",city:"Tamil Nadu",category:"food",description:"Tangy tamarind-based soup. Spices aur pepper.",lat:13.0827,lng:80.2707,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Pondy Bazaar",city:"Chennai",category:"shopping",description:"Shopping street. Sarees, accessories, textiles.",lat:13.0828,lng:80.2409,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Coimbatore Textile Market",city:"Coimbatore",category:"shopping",description:"Cotton fabrics hub. Factory stores cheap prices.",lat:11.0081,lng:76.9124,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Madurai Saree Fair",city:"Madurai",category:"shopping",description:"Traditional Tamil sarees. Silk aur cotton.",lat:9.9195,lng:78.1193,image:"./images/delhi/dilli-haat.jpg"}
    ]
  },
  "Goa": {
    tagline: "Paradise of Beaches",
    description: "Beaches, parties, aur Portuguese vibe ke saath Goa explore karo",
    image: "./images/delhi/dilli-haat.jpg",
    places: [
      {name:"Baga Beach",city:"Goa",category:"attractions",description:"Popular beach. Water sports aur resorts. Young crowd aur party vibe.",lat:15.5794,lng:73.7471,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Basilica of Bom Jesus",city:"Goa",category:"attractions",description:"UNESCO World Heritage Church. 16th century baroque.",lat:15.4909,lng:73.8563,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Fort Aguada",city:"Goa",category:"attractions",description:"17th century Portuguese fort. Lighthouse with sea view.",lat:15.4875,lng:73.7631,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Palolem Beach",city:"Goa",category:"attractions",description:"Crescent shaped beach. Calm water. Sunset beautiful.",lat:14.9717,lng:73.9297,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Dudhsagar Waterfall",city:"Goa",category:"attractions",description:"400 meter tall waterfall. Monsoon me best.",lat:15.3139,lng:73.9868,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Se Cathedral",city:"Goa",category:"attractions",description:"Largest church in Asia. Portuguese colonial.",lat:15.4927,lng:73.8395,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Arambol Beach",city:"Goa",category:"attractions",description:"North Goa beach. Relax vibe. Cliffs nearby.",lat:15.7500,lng:73.7365,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Miramar Beach",city:"Goa",category:"attractions",description:"Urban beach near Panaji. Water sports. Golden sand.",lat:15.4735,lng:73.8278,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Goan Fish Curry",city:"Goa",category:"food",description:"Spicy coconut curry with fresh fish.",lat:15.2993,lng:73.8243,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Prawn Balchao",city:"Goa",category:"food",description:"Pickled prawn curry. Tangy aur spicy.",lat:15.2993,lng:73.8243,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Sorpotel",city:"Goa",category:"food",description:"Pork curry in vinegar. Red aur spicy. Signature.",lat:15.2993,lng:73.8243,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Feni",city:"Goa",category:"food",description:"Traditional Goan alcohol. Cashew/palm specialty.",lat:15.2993,lng:73.8243,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Panaji Market",city:"Goa",category:"shopping",description:"Spices, handicrafts, local products. Goan items.",lat:15.4909,lng:73.8278,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Anjuna Flea Market",city:"Goa",category:"shopping",description:"Weekend bazaar. Handicrafts, souvenirs, antiques.",lat:15.5614,lng:73.8067,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Calangute Beach Shops",city:"Goa",category:"shopping",description:"Beach side shops. Clothing, beachwear, souvenirs.",lat:15.5384,lng:73.7565,image:"./images/delhi/dilli-haat.jpg"}
    ]
  },
  "Kerala": {
    tagline: "God's Own Country",
    description: "Backwaters, tea gardens, aur spice plantations ke saath Kerala explore karo",
    image: "./images/delhi/dilli-haat.jpg",
    places: [
      {name:"Munnar Tea Gardens",city:"Munnar",category:"attractions",description:"Beautiful rolling tea plantations. Green hills aur cool climate.",lat:10.5869,lng:77.0595,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Alleppey Backwaters",city:"Alleppey",category:"attractions",description:"Scenic houseboat cruises. Coconut palms lagoons.",lat:9.4867,lng:76.3289,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Kochi Fort (Portuguese)",city:"Kochi",category:"attractions",description:"Historic fort. Chinese fishing nets dekhne laayak.",lat:9.9676,lng:76.2343,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Periyar Tiger Reserve",city:"Thekkady",category:"attractions",description:"Wildlife sanctuary. Tiger, elephant, bison. Jungle safari.",lat:9.4700,lng:76.9200,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Kumarakom Bird Sanctuary",city:"Kumarakom",category:"attractions",description:"Exotic birds sanctuary. Backwater ke beech. Bird watching.",lat:9.6131,lng:76.4329,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Varkala Beach",city:"Varkala",category:"attractions",description:"Unique cliff beach. Ayurveda centers. Spiritual.",lat:8.7369,lng:76.7227,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Athirapally Waterfall",city:"Athirapally",category:"attractions",description:"Kerala's Niagara. Powerful waterfall. Monsoon spectacular.",lat:10.2356,lng:76.5712,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Padmanabhaswamy Temple",city:"Thiruvananthapuram",category:"attractions",description:"Ancient temple. Gold reserves. Kerala architecture.",lat:8.4734,lng:76.9474,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Appam aur Stew",city:"Kerala",category:"food",description:"Soft rice pancake with meat/veg stew. Breakfast classic.",lat:10.0,lng:76.5,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Puttu",city:"Kottayam",category:"food",description:"Rice cake with jagger aur banana. Breakfast traditional.",lat:9.5915,lng:76.5215,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Kerala Fish Curry",city:"Kerala",category:"food",description:"Coconut-based curry with fresh fish. Rich taste.",lat:10.0,lng:76.5,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Payasam",city:"Kerala",category:"food",description:"Sweet dessert. Coconut, jaggery, nuts. Festival specialty.",lat:10.0,lng:76.5,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Fort Kochi Market",city:"Kochi",category:"shopping",description:"Spices, coconut products, antiques. Dutch palace area.",lat:9.9676,lng:76.2343,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Spice Market Mattancherry",city:"Kochi",category:"shopping",description:"Authentic spices. Cardamom, pepper, clove, turmeric.",lat:9.9600,lng:76.2443,image:"./images/delhi/dilli-haat.jpg"},
      {name:"Thekkady Spice Shop",city:"Thekkady",category:"shopping",description:"Spice powders. Plantation fresh produce.",lat:9.4700,lng:76.9200,image:"./images/delhi/dilli-haat.jpg"}
    ]
  },
  "Himachal Pradesh": {
    tagline: "Land of Gods",
    description: "Mountains, snow peaks, adventure sports aur spiritual vibes",
    image: "./images/delhi/dilli-haat.jpg",
    places: [
      {
        name: "Shimla Mall Road",
        city: "Shimla",
        category: "attractions",
        description: "Historic shopping street. British architecture. Hill station beauty.",
        lat: 31.7724,
        lng: 77.1809,
        image: "./images/shimla/shimla-mall-road.jpg"
      },
      {
        name: "Rohtang Pass",
        city: "Manali",
        category: "attractions",
        description: "High altitude pass. Snow, adventure. 3978m elevation.",
        lat: 32.3720,
        lng: 77.2455,
        image: "./images/manali/rohtang-pass.jpg"
      },
      {
        name: "Kinnaur Valley",
        city: "Kinnaur",
        category: "attractions",
        description: "Scenic valley. Snow peaks. Apple orchards. Wild beauty.",
        lat: 31.5,
        lng: 78.2,
        image: "./images/kinnaur/kinnaur-valley.jpg"
      },
      {
        name: "Dharamshala",
        city: "Dharamshala",
        category: "attractions",
        description: "Tibetan culture center. Dalai Lama residence. Peaceful.",
        lat: 32.2190,
        lng: 76.3250,
        image: "./images/dharamshala/dharamshala.jpg"
      },
      {
        name: "Mandi Bazaar",
        city: "Mandi",
        category: "attractions",
        description: "Ancient market. 81 temples. Historical significance.",
        lat: 31.5891,
        lng: 77.1854,
        image: "./images/mandi/mandi-bazaar.jpg"
      },
      {
        name: "Solang Valley",
        city: "Manali",
        category: "attractions",
        description: "Adventure playground. Para-gliding, skiing, zip-lining aur more.",
        lat: 32.2450,
        lng: 77.1890,
        image: "./images/manali/solang-valley.jpg"
      },
      {
        name: "Hadimba Temple",
        city: "Manali",
        category: "attractions",
        description: "Ancient wooden temple. Historic architecture built 1553.",
        lat: 32.2411,
        lng: 77.1888,
        image: "./images/manali/hadimba-temple.jpg"
      },
      {
        name: "Kangra Valley",
        city: "Kangra",
        category: "attractions",
        description: "Tea gardens paradise. Scenic views. Tea plantation tours.",
        lat: 32.1667,
        lng: 76.2667,
        image: "./images/kangra/kangra-valley.jpg"
      },
      {
        name: "Trout Fish",
        city: "Manali",
        category: "food",
        description: "Fresh river trout. Local specialty. Grilled or curry.",
        lat: 32.2389,
        lng: 77.1889,
        image: "./images/manali/trout-fish.jpg"
      },
      {
        name: "Himachali Thali",
        city: "Himachal Pradesh",
        category: "food",
        description: "Complete meal. 8-10 dishes. Authentic mountain flavors.",
        lat: 31.5,
        lng: 77.0,
        image: "./images/himachal-pradesh/himachali-thali.jpg"
      },
      {
        name: "Mash ki Dal",
        city: "Himachal Pradesh",
        category: "food",
        description: "Black lentil curry. Butter, spices. Rich taste comfort food.",
        lat: 31.5,
        lng: 77.0,
        image: "./images/himachal-pradesh/mash-ki-dal.jpg"
      },
      {
        name: "Apple Products",
        city: "Kinnaur",
        category: "food",
        description: "Jams, preserves, fresh apples. Organic quality from orchards.",
        lat: 31.5,
        lng: 78.2,
        image: "./images/kinnaur/apple-products.jpg"
      },
      {
        name: "Shimla Old Bazaar",
        city: "Shimla",
        category: "shopping",
        description: "Handicrafts, woolen goods, souvenirs. History.",
        lat: 31.7724,
        lng: 77.1809,
        image: "./images/shimla/shimla-old-bazaar.jpg"
      },
      {
        name: "Manali Handicrafts",
        city: "Manali",
        category: "shopping",
        description: "Local artisan products. Shawls, hand-carved wood, textiles.",
        lat: 32.2389,
        lng: 77.1889,
        image: "./images/manali/manali-handicrafts.jpg"
      },
      {
        name: "Kangra Tea Shop",
        city: "Kangra",
        category: "shopping",
        description: "Authentic Kangra tea. Premium quality. Plantations direct.",
        lat: 32.1667,
        lng: 76.2667,
        image: "./images/kangra/kangra-tea-shop.jpg"
      }
    ]
  }
};

const rajasthanDistrictPlaces = [
  {
    name: "Jaipur Heritage Circuit",
    city: "Jaipur",
    district: "Jaipur",
    category: "attractions",
    description: "Amer Fort, Nahargarh Fort, City Palace, Hawa Mahal, Jal Mahal, Jantar Mantar, Albert Hall Museum.",
    history: "Jaipur was founded in 1727 by Sawai Jai Singh II as a planned Rajput capital. Its pink old city, forts, palaces, and astronomy monuments show the power and taste of the Kachwaha rulers.",
    whyVisit: "Royal architecture, sunset views, UNESCO science heritage, lake views, museums, and bazaars come together in one easy route.",
    bestTime: "October to March",
    lat: 26.9124,
    lng: 75.7873,
    image: "./images/jaipur/hawa-mahal.jpg"
  },
  {
    name: "Udaipur Lake Palace Trail",
    city: "Udaipur",
    district: "Udaipur",
    category: "attractions",
    description: "City Palace, Lake Pichola, Fateh Sagar Lake, Sajjangarh Palace, Jag Mandir.",
    history: "Udaipur was founded in 1559 by Maharana Udai Singh II and became a major Mewar capital after Chittorgarh. Its palaces and lakes preserve the Mewar royal story.",
    whyVisit: "Go for boat rides, lake sunsets, palace balconies, romantic city views, and calm royal ambience.",
    bestTime: "September to March",
    lat: 24.5854,
    lng: 73.7125,
    image: "./images/udaipur/udaipur-lake-palace-trail.jpg"
  },
  {
    name: "Jodhpur Blue City Route",
    city: "Jodhpur",
    district: "Jodhpur",
    category: "attractions",
    description: "Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, Mandore Gardens.",
    history: "Jodhpur was founded in 1459 by Rao Jodha and grew as the capital of Marwar. Mehrangarh still dominates the city from a rocky hill.",
    whyVisit: "Massive fort walls, blue lanes, royal museums, cenotaphs, and desert-edge views make it one of Rajasthan's strongest heritage stops.",
    bestTime: "October to March",
    lat: 26.2389,
    lng: 73.0243,
    image: "./images/jodhpur/jodhpur-blue-city-route.jpg"
  },
  {
    name: "Jaisalmer Golden Desert Trail",
    city: "Jaisalmer",
    district: "Jaisalmer",
    category: "attractions",
    description: "Jaisalmer Fort, Patwon Ki Haveli, Sam Sand Dunes, Gadisar Lake.",
    history: "Jaisalmer was founded in 1156 by Rawal Jaisal on old desert trade routes. Its yellow sandstone fort and havelis earned it the Golden City name.",
    whyVisit: "Living fort lanes, carved havelis, camel safari, dunes, folk music, and desert sunsets give the full Thar experience.",
    bestTime: "November to February",
    lat: 26.9157,
    lng: 70.9083,
    image: "./images/jaisalmer/jaisalmer-golden-desert-trail.jpg"
  },
  {
    name: "Bikaner Royal Fort Route",
    city: "Bikaner",
    district: "Bikaner",
    category: "attractions",
    description: "Junagarh Fort, Lalgarh Palace, Karni Mata Temple.",
    history: "Bikaner was founded in 1488 by Rao Bika. Unlike many Rajasthan forts, Junagarh stands on the plains and shows strong desert kingdom architecture.",
    whyVisit: "Fort interiors, red sandstone palaces, desert culture, snacks, and the unique Karni Mata Temple make it memorable.",
    bestTime: "October to March",
    lat: 28.0229,
    lng: 73.3119,
    image: "./images/bikaner/bikaner-royal-fort-route.jpg"
  },
  {
    name: "Ajmer Sufi Heritage Walk",
    city: "Ajmer",
    district: "Ajmer",
    category: "attractions",
    description: "Ajmer Sharif Dargah, Ana Sagar Lake, Taragarh Fort.",
    history: "Ajmer has deep Chauhan, Sultanate, Mughal, and Sufi layers. The dargah of Khwaja Moinuddin Chishti made it one of India's most important spiritual centers.",
    whyVisit: "Visit for devotion, qawwali atmosphere, lake views, old fort ruins, and a strong mix of faith and history.",
    bestTime: "October to March",
    lat: 26.4499,
    lng: 74.6399,
    image: "./images/ajmer/ajmer-sufi-heritage-walk.jpg"
  },
  {
    name: "Pushkar Sacred Lake Trail",
    city: "Pushkar",
    district: "Ajmer",
    category: "attractions",
    description: "Brahma Temple, Pushkar Lake, Savitri Temple.",
    history: "Pushkar is one of India's ancient pilgrimage towns, centered around Pushkar Lake and the rare Brahma Temple. Its ghats have been worship sites for centuries.",
    whyVisit: "Peaceful ghats, temple bells, hilltop views, cafes, and the famous camel fair make Pushkar spiritual and lively.",
    bestTime: "October to March",
    lat: 26.4899,
    lng: 74.5511,
    image: "./images/pushkar/pushkar-sacred-lake-trail.jpg"
  },
  {
    name: "Kota Chambal View Route",
    city: "Kota",
    district: "Kota",
    category: "attractions",
    description: "Kota Barrage, Garadia Mahadev Temple, Chambal Garden, Seven Wonders Park.",
    history: "Kota grew as a Hada Rajput state on the Chambal River. Its palaces, riverfronts, and temples reflect Hadoti culture.",
    whyVisit: "Go for river views, dramatic Garadia Mahadev cliffs, gardens, and easy family-friendly sightseeing.",
    bestTime: "October to February",
    lat: 25.2138,
    lng: 75.8648,
    image: "./images/kota/kota-chambal-view-route.jpg"
  },
  {
    name: "Alwar Fort And Forest Route",
    city: "Alwar",
    district: "Alwar",
    category: "attractions",
    description: "Bala Quila, City Palace, Siliserh Lake, Sariska Tiger Reserve.",
    history: "Alwar sits in the old Matsya region and later became a Rajput princely state. Its fort, palace, lakes, and forests create a strong Aravalli landscape.",
    whyVisit: "Choose Alwar for forts, lake drives, palace museums, wildlife safari, and a quick Rajasthan trip from Delhi NCR.",
    bestTime: "October to March",
    lat: 27.5529,
    lng: 76.6346,
    image: "./images/alwar/alwar-fort-and-forest-route.jpg"
  },
  {
    name: "Bharatpur Bird And Fort Trail",
    city: "Bharatpur",
    district: "Bharatpur",
    category: "attractions",
    description: "Keoladeo National Park, Lohagarh Fort.",
    history: "Bharatpur was a powerful Jat kingdom. Lohagarh Fort became known for its strong defenses, while Keoladeo later became a UNESCO-listed bird sanctuary.",
    whyVisit: "Perfect for bird watching, winter photography, cycling inside the park, and seeing Jat-era fort history.",
    bestTime: "November to February",
    lat: 27.2167,
    lng: 77.4895,
    image: "./images/bharatpur/bharatpur-bird-and-fort-trail.jpg"
  },
  {
    name: "Chittorgarh Mewar Valor Route",
    city: "Chittorgarh",
    district: "Chittorgarh",
    category: "attractions",
    description: "Chittorgarh Fort, Vijay Stambh, Rana Kumbha Palace, Padmini Palace.",
    history: "Chittorgarh was the historic capital of Mewar and witnessed famous sieges, resistance, and royal legends. Its fort is one of India's largest hill forts.",
    whyVisit: "Massive fort walls, victory towers, palaces, temples, and Mewar stories make it a must for history lovers.",
    bestTime: "October to March",
    lat: 24.8887,
    lng: 74.6269,
    image: "./images/chittorgarh/chittorgarh-mewar-valor-route.jpg"
  },
  {
    name: "Bundi Palace And Stepwell Walk",
    city: "Bundi",
    district: "Bundi",
    category: "attractions",
    description: "Taragarh Fort, Bundi Palace, Raniji ki Baori, Sukh Mahal.",
    history: "Bundi was ruled by Hada Chauhans and became famous for murals, palaces, and water architecture. Its stepwells show smart old city planning.",
    whyVisit: "Painted palace rooms, blue old lanes, stepwells, fort views, and quieter heritage vibes make Bundi special.",
    bestTime: "October to March",
    lat: 25.4305,
    lng: 75.6499,
    image: "./images/bundi/bundi-palace-and-stepwell-walk.jpg"
  },
  {
    name: "Sikar Shekhawati Heritage Route",
    city: "Sikar",
    district: "Sikar",
    category: "attractions",
    description: "Laxmangarh Fort, Harshnath Temple.",
    history: "Sikar is part of Shekhawati, a region known for merchant havelis, frescoes, forts, and old temples. Harshnath Temple has early medieval roots.",
    whyVisit: "Go for painted havelis, hill forts, temple ruins, and less-crowded heritage photography.",
    bestTime: "October to March",
    lat: 27.6094,
    lng: 75.1399,
    image: "./images/sikar/sikar-shekhawati-heritage-route.jpg"
  },
  {
    name: "Jhunjhunu Haveli Trail",
    city: "Jhunjhunu",
    district: "Jhunjhunu",
    category: "attractions",
    description: "Khetri Mahal, Rani Sati Temple.",
    history: "Jhunjhunu is another major Shekhawati center, shaped by Rajput chiefs and wealthy merchant families who built decorated havelis.",
    whyVisit: "See fresco-covered mansions, palace remains, temples, and authentic small-town Shekhawati culture.",
    bestTime: "October to March",
    lat: 28.1289,
    lng: 75.3995,
    image: "./images/jhunjhunu/jhunjhunu-haveli-trail.jpg"
  },
  {
    name: "Nagaur Fort Heritage Stop",
    city: "Nagaur",
    district: "Nagaur",
    category: "attractions",
    description: "Nagaur Fort, Ahhichatragarh Fort.",
    history: "Nagaur has ancient roots and later saw Rajput, Sultanate, and Mughal influence. Ahhichatragarh Fort preserves palaces, courtyards, and old defense walls.",
    whyVisit: "Choose Nagaur for quiet fort architecture, desert-town charm, and heritage away from the usual tourist rush.",
    bestTime: "October to March",
    lat: 27.2020,
    lng: 73.7333,
    image: "./images/nagaur/nagaur-fort-heritage-stop.jpg"
  },
  {
    name: "Pali Temple And Highway Legends",
    city: "Pali",
    district: "Pali",
    category: "attractions",
    description: "Ranakpur Jain Temple, Om Banna Temple.",
    history: "Pali grew on old trade routes between Marwar and Mewar. Nearby Ranakpur became famous for its 15th-century Jain marble temple.",
    whyVisit: "Visit for marble temple carvings, peaceful valleys, local legends, and a good stop between Jodhpur and Udaipur.",
    bestTime: "October to March",
    lat: 25.7711,
    lng: 73.3234,
    image: "./images/pali/pali-temple-and-highway-legends.jpg"
  },
  {
    name: "Barmer Desert Temple Trail",
    city: "Barmer",
    district: "Barmer",
    category: "attractions",
    description: "Kiradu Temples, Barmer Fort.",
    history: "Barmer is a western desert district known for folk traditions, crafts, and the ancient Kiradu temple group with fine stone carving.",
    whyVisit: "Go for raw desert culture, temple ruins, woodwork, textiles, and offbeat Rajasthan landscapes.",
    bestTime: "November to February",
    lat: 25.7532,
    lng: 71.4181,
    image: "./images/barmer/barmer-desert-temple-trail.jpg"
  },
  {
    name: "Jalore Fort And Hills Route",
    city: "Jalore",
    district: "Jalore",
    category: "attractions",
    description: "Jalore Fort, Sundha Mata Temple.",
    history: "Jalore Fort has links with Chauhan and Marwar history and stands on a steep hill. Sundha Mata Temple is an important Shakti shrine nearby.",
    whyVisit: "Strong fort climbs, hill views, temple devotion, and less commercial heritage make Jalore rewarding.",
    bestTime: "October to March",
    lat: 25.3456,
    lng: 72.6156,
    image: "./images/jalore/jalore-fort-and-hills-route.jpg"
  },
  {
    name: "Sirohi Mount Abu Escape",
    city: "Sirohi",
    district: "Sirohi",
    category: "attractions",
    description: "Mount Abu, Dilwara Jain Temples, Nakki Lake, Guru Shikhar.",
    history: "Sirohi lies in the Aravalli range, and Mount Abu served as Rajasthan's hill retreat. Dilwara Jain Temples are famous for 11th to 13th century marble carving.",
    whyVisit: "Cool weather, marble temples, lake walks, sunset points, and Rajasthan's highest peak make this a different Rajasthan experience.",
    bestTime: "October to March",
    lat: 24.5926,
    lng: 72.7156,
    image: "./images/sirohi/sirohi-mount-abu-escape.jpg"
  },
  {
    name: "Dungarpur Lake Palace Route",
    city: "Dungarpur",
    district: "Dungarpur",
    category: "attractions",
    description: "Udai Bilas Palace, Gaib Sagar Lake.",
    history: "Dungarpur belongs to the Vagad region and was ruled by a branch of the Mewar dynasty. Palaces and lakes show its southern Rajasthan identity.",
    whyVisit: "Lake palaces, tribal culture, quiet streets, and scenic water views make it peaceful and photogenic.",
    bestTime: "October to March",
    lat: 23.8431,
    lng: 73.7147,
    image: "./images/dungarpur/dungarpur-lake-palace-route.jpg"
  },
  {
    name: "Banswara Islands And Mahi Route",
    city: "Banswara",
    district: "Banswara",
    category: "attractions",
    description: "Mahi Dam, Kagdi Pick Up Weir, Anand Sagar Lake.",
    history: "Banswara is often called the City of Hundred Islands because of the Mahi River landscape. It has strong tribal traditions and green monsoon scenery.",
    whyVisit: "Great for water views, island-like landscapes, tribal culture, relaxed drives, and monsoon greenery.",
    bestTime: "July to February",
    lat: 23.5461,
    lng: 74.4349,
    image: "./images/banswara/banswara-islands-and-mahi-route.jpg"
  },
  {
    name: "Pratapgarh Forest Escape",
    city: "Pratapgarh",
    district: "Pratapgarh",
    category: "attractions",
    description: "Sitamata Wildlife Sanctuary.",
    history: "Pratapgarh is a southern Rajasthan district with forested hills and tribal culture. Sitamata Wildlife Sanctuary protects dry deciduous forest and wildlife.",
    whyVisit: "Choose it for nature, forest drives, birding, calm roads, and a break from fort-heavy Rajasthan routes.",
    bestTime: "October to March",
    lat: 24.0322,
    lng: 74.7819,
    image: "./images/pratapgarh/pratapgarh-forest-escape.jpg"
  },
  {
    name: "Rajsamand Mewar Fort Route",
    city: "Rajsamand",
    district: "Rajsamand",
    category: "attractions",
    description: "Kumbhalgarh Fort, Rajsamand Lake, Dwarkadhish Temple.",
    history: "Rajsamand was shaped by Mewar rulers, especially Maharana Raj Singh. Kumbhalgarh Fort is linked with Maharana Kumbha and is a UNESCO hill fort.",
    whyVisit: "Fort walls, Aravalli views, lake steps, temples, and a strong Mewar story make this route powerful.",
    bestTime: "October to March",
    lat: 25.0715,
    lng: 73.8798,
    image: "./images/rajsamand/rajsamand-mewar-fort-route.jpg"
  },
  {
    name: "Tonk Nawabi Heritage Walk",
    city: "Tonk",
    district: "Tonk",
    category: "attractions",
    description: "Sunehri Kothi, Jama Masjid.",
    history: "Tonk was a princely state ruled by Nawabs and is known for Indo-Islamic architecture, manuscripts, mosques, and ornate interiors.",
    whyVisit: "Visit for gold-painted interiors, quiet heritage, mosque architecture, and a different Nawabi layer inside Rajasthan.",
    bestTime: "October to March",
    lat: 26.1620,
    lng: 75.7895,
    image: "./images/tonk/tonk-nawabi-heritage-walk.jpg"
  },
  {
    name: "Dausa Stepwell And Mystery Route",
    city: "Dausa",
    district: "Dausa",
    category: "attractions",
    description: "Abhaneri Stepwell, Bhangarh Fort, Mehandipur Balaji Temple.",
    history: "Dausa lies on old routes near Jaipur and has ancient stepwell architecture at Abhaneri. Bhangarh and Mehandipur add fort and pilgrimage stories.",
    whyVisit: "Perfect for Chand Baori geometry, Bhangarh legends, temple devotion, and a quick day trip from Jaipur.",
    bestTime: "October to March",
    lat: 26.8945,
    lng: 76.3350,
    image: "./images/dausa/dausa-stepwell-and-mystery-route.jpg"
  },
  {
    name: "Sawai Madhopur Tiger Fort Route",
    city: "Sawai Madhopur",
    district: "Sawai Madhopur",
    category: "attractions",
    description: "Ranthambore National Park, Ranthambore Fort.",
    history: "Sawai Madhopur was founded by Sawai Madho Singh I. Ranthambore Fort is a UNESCO hill fort surrounded by one of India's best tiger habitats.",
    whyVisit: "Tiger safari, fort ruins, lakes, wildlife photography, and forest drama make it a top Rajasthan adventure.",
    bestTime: "October to June",
    lat: 26.0173,
    lng: 76.5026,
    image: "./images/sawai-madhopur/sawai-madhopur-tiger-fort-route.jpg"
  },
  {
    name: "Hanumangarh Ancient Civilization Route",
    city: "Hanumangarh",
    district: "Hanumangarh",
    category: "attractions",
    description: "Kalibangan Archaeological Site, Bhatner Fort.",
    history: "Hanumangarh is close to Kalibangan, an important Indus Valley Civilization site. Bhatner Fort adds medieval frontier history.",
    whyVisit: "Go for archaeology, ancient urban history, fort walls, and a very different side of Rajasthan beyond palaces.",
    bestTime: "October to March",
    lat: 29.5815,
    lng: 74.3294,
    image: "./images/hanumangarh/hanumangarh-ancient-civilization-route.jpg"
  },
  {
    name: "Sri Ganganagar Frontier Heritage Route",
    city: "Sri Ganganagar",
    district: "Sri Ganganagar",
    category: "attractions",
    description: "Gajner Palace nearby, Anupgarh Fort.",
    history: "Sri Ganganagar developed strongly with canal irrigation in the north of Rajasthan. Anupgarh Fort and nearby desert palaces connect it to frontier history.",
    whyVisit: "Visit for borderland landscapes, quiet forts, canal-fed farms, and an offbeat north Rajasthan route.",
    bestTime: "October to March",
    lat: 29.9094,
    lng: 73.8800,
    image: "./images/sri-ganganagar/sri-ganganagar-frontier-heritage-route.jpg"
  },
  {
    name: "Karauli Palace And Pilgrimage Route",
    city: "Karauli",
    district: "Karauli",
    category: "attractions",
    description: "Kaila Devi Temple, City Palace.",
    history: "Karauli was a princely state with Yaduvanshi royal traditions. Its old palace and Kaila Devi pilgrimage remain central to local identity.",
    whyVisit: "Temple energy, old palace murals, narrow heritage lanes, and a quieter royal town experience make it worth adding.",
    bestTime: "October to March",
    lat: 26.4983,
    lng: 77.0275,
    image: "./images/karauli/karauli-palace-and-pilgrimage-route.jpg"
  },
  {
    name: "Jhalawar Water Fort Route",
    city: "Jhalawar",
    district: "Jhalawar",
    category: "attractions",
    description: "Gagron Fort, Jhalawar Fort.",
    history: "Jhalawar was created as a princely state in the Hadoti region. Gagron Fort, surrounded by rivers and hills, is a UNESCO-listed hill fort.",
    whyVisit: "Water fort scenery, monsoon greenery, Hadoti culture, and quieter heritage routes make Jhalawar beautiful.",
    bestTime: "August to March",
    lat: 24.5973,
    lng: 76.1600,
    image: "./images/jhalawar/jhalawar-water-fort-route.jpg"
  },
  {
    name: "Baran Hadoti Nature Route",
    city: "Baran",
    district: "Baran",
    category: "attractions",
    description: "Shahbad Fort, Sitabari Temple.",
    history: "Baran is part of the Hadoti cultural region and has old forts, temples, forests, and tribal traditions around Shahbad and Sitabari.",
    whyVisit: "Good for offbeat forts, temple fairs, forest landscapes, and slow travel away from crowded tourist cities.",
    bestTime: "October to March",
    lat: 25.1011,
    lng: 76.5132,
    image: "./images/baran/baran-hadoti-nature-route.jpg"
  }
];



statesData.Rajasthan.places = [
  ...rajasthanDistrictPlaces,
  ...statesData.Rajasthan.places.filter((place) => place.category !== "attractions")
];

const allIndianDestinations = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

const stateDataAliases = {
  "Delhi (NCT)": "Delhi"
};

const generatedStateImages = [
  "./images/baran/baran-hadoti-nature-route.jpg",
  "./images/baran/baran-hadoti-nature-route.jpg",
  "./images/baran/baran-hadoti-nature-route.jpg",
  "./images/baran/baran-hadoti-nature-route.jpg",
  "./images/baran/baran-hadoti-nature-route.jpg",
  "./images/baran/baran-hadoti-nature-route.jpg"
];

const generatedStateMeta = {
  "Andhra Pradesh": {
    tagline: "Temples, beaches, and spicy food",
    description: "Visakhapatnam beaches, Tirupati darshan, Araku Valley aur Andhra cuisine ke saath Andhra Pradesh explore karo",
    city: "Visakhapatnam",
    attraction: "Araku Valley Route",
    food: "Andhra Meals",
    shopping: "Lepakshi Handicrafts"
  },
  "Arunachal Pradesh": {
    tagline: "Dawn-lit Himalayan valleys",
    description: "Tawang, monasteries, mountain roads aur tribal culture ke saath Arunachal Pradesh explore karo",
    city: "Tawang",
    attraction: "Tawang Monastery Trail",
    food: "Thukpa and Momos",
    shopping: "Local Handloom Markets"
  },
  "Assam": {
    tagline: "Tea gardens and river islands",
    description: "Kaziranga, Majuli, Brahmaputra aur tea gardens ke saath Assam explore karo",
    city: "Guwahati",
    attraction: "Kaziranga National Park",
    food: "Assamese Thali",
    shopping: "Assam Silk Market"
  },
  "Bihar": {
    tagline: "Ancient learning and sacred places",
    description: "Bodh Gaya, Nalanda, Patna Sahib aur heritage routes ke saath Bihar explore karo",
    city: "Patna",
    attraction: "Bodh Gaya Heritage Route",
    food: "Litti Chokha",
    shopping: "Madhubani Art Market"
  },
  "Chhattisgarh": {
    tagline: "Waterfalls, forests, and tribal culture",
    description: "Chitrakote Falls, Bastar culture aur forest trails ke saath Chhattisgarh explore karo",
    city: "Raipur",
    attraction: "Chitrakote Falls",
    food: "Chhattisgarhi Fara",
    shopping: "Bastar Handicrafts"
  },
  "Gujarat": {
    tagline: "White desert and vibrant heritage",
    description: "Rann of Kutch, Somnath, Gir aur Gujarati food ke saath Gujarat explore karo",
    city: "Ahmedabad",
    attraction: "Rann of Kutch",
    food: "Gujarati Thali",
    shopping: "Bandhani Textile Market"
  },
  "Haryana": {
    tagline: "Highways, history, and rural culture",
    description: "Kurukshetra heritage, Sultanpur birds aur local food ke saath Haryana explore karo",
    city: "Kurukshetra",
    attraction: "Kurukshetra Heritage Route",
    food: "Haryanvi Thali",
    shopping: "Local Craft Markets"
  },
  "Jharkhand": {
    tagline: "Waterfalls and green plateaus",
    description: "Ranchi waterfalls, Netarhat, forests aur tribal markets ke saath Jharkhand explore karo",
    city: "Ranchi",
    attraction: "Ranchi Waterfall Circuit",
    food: "Dhuska",
    shopping: "Tribal Craft Markets"
  },
  "Karnataka": {
    tagline: "Palaces, coffee, and coast",
    description: "Mysuru Palace, Hampi, Coorg coffee aur Bengaluru ke saath Karnataka explore karo",
    city: "Bengaluru",
    attraction: "Hampi Heritage Route",
    food: "Bisi Bele Bath",
    shopping: "Mysuru Silk Market"
  },
  "Madhya Pradesh": {
    tagline: "Heart of incredible India",
    description: "Khajuraho, Sanchi, forests aur heritage towns ke saath Madhya Pradesh explore karo",
    city: "Bhopal",
    attraction: "Khajuraho Temples",
    food: "Poha Jalebi",
    shopping: "Chanderi Textile Market"
  },
  "Manipur": {
    tagline: "Floating lake and graceful culture",
    description: "Loktak Lake, Imphal, dance traditions aur local markets ke saath Manipur explore karo",
    city: "Imphal",
    attraction: "Loktak Lake",
    food: "Eromba",
    shopping: "Ima Keithel Market"
  },
  "Meghalaya": {
    tagline: "Clouds, caves, and waterfalls",
    description: "Shillong, Cherrapunji, living root bridges aur waterfalls ke saath Meghalaya explore karo",
    city: "Shillong",
    attraction: "Living Root Bridges",
    food: "Jadoh",
    shopping: "Police Bazaar"
  },
  "Mizoram": {
    tagline: "Blue mountains and calm towns",
    description: "Aizawl viewpoints, hills aur local culture ke saath Mizoram explore karo",
    city: "Aizawl",
    attraction: "Aizawl Hill Viewpoints",
    food: "Bai",
    shopping: "Mizo Handloom Markets"
  },
  "Nagaland": {
    tagline: "Festivals and hill villages",
    description: "Kohima, Hornbill Festival, villages aur mountain views ke saath Nagaland explore karo",
    city: "Kohima",
    attraction: "Kohima Heritage Village",
    food: "Naga Smoked Pork",
    shopping: "Naga Craft Markets"
  },
  "Odisha": {
    tagline: "Temples, beaches, and art",
    description: "Puri, Konark, Chilika Lake aur crafts ke saath Odisha explore karo",
    city: "Bhubaneswar",
    attraction: "Konark Sun Temple",
    food: "Odia Dalma",
    shopping: "Pipili Applique Market"
  },
  "Punjab": {
    tagline: "Golden fields and soulful food",
    description: "Amritsar, Golden Temple, farms aur Punjabi food ke saath Punjab explore karo",
    city: "Amritsar",
    attraction: "Golden Temple",
    food: "Amritsari Kulcha",
    shopping: "Phulkari Market"
  },
  "Sikkim": {
    tagline: "Monasteries and mountain views",
    description: "Gangtok, Tsomgo Lake, monasteries aur Himalayan views ke saath Sikkim explore karo",
    city: "Gangtok",
    attraction: "Tsomgo Lake",
    food: "Momos and Thukpa",
    shopping: "MG Marg Market"
  },
  "Telangana": {
    tagline: "Hyderabad heritage and spicy plates",
    description: "Charminar, Golconda, biryani aur modern Hyderabad ke saath Telangana explore karo",
    city: "Hyderabad",
    attraction: "Charminar Heritage Walk",
    food: "Hyderabadi Biryani",
    shopping: "Laad Bazaar"
  },
  "Tripura": {
    tagline: "Palaces, lakes, and green hills",
    description: "Agartala palaces, Neermahal aur local culture ke saath Tripura explore karo",
    city: "Agartala",
    attraction: "Neermahal Palace",
    food: "Mui Borok",
    shopping: "Bamboo Craft Markets"
  },
  "Uttarakhand": {
    tagline: "Devbhoomi of the Himalayas",
    description: "Rishikesh, Haridwar, Nainital, Kedarnath aur mountain getaways ke saath Uttarakhand explore karo",
    image: "./images/agartala/baran-hadoti-nature-route.jpg",
    city: "Rishikesh",
    attraction: "Rishikesh Ganga Ghats",
    food: "Kumaoni Thali",
    shopping: "Pahadi Woollen Market"
  },
  "West Bengal": {
    tagline: "Culture, sweets, and hill escapes",
    description: "Kolkata, Darjeeling, Sundarbans aur Bengali food ke saath West Bengal explore karo",
    city: "Kolkata",
    attraction: "Victoria Memorial",
    food: "Bengali Sweets",
    shopping: "New Market Kolkata"
  },
  "Andaman and Nicobar Islands": {
    tagline: "Island beaches and blue water",
    description: "Havelock, Cellular Jail, beaches aur marine life ke saath Andaman and Nicobar Islands explore karo",
    city: "Port Blair",
    attraction: "Radhanagar Beach",
    food: "Island Seafood",
    shopping: "Shell Craft Markets"
  },
  "Chandigarh": {
    tagline: "Planned city and clean gardens",
    description: "Rock Garden, Sukhna Lake aur modern city life ke saath Chandigarh explore karo",
    city: "Chandigarh",
    attraction: "Rock Garden",
    food: "Punjabi Chole Bhature",
    shopping: "Sector 17 Market"
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    tagline: "Coastal forts and quiet beaches",
    description: "Daman forts, Diu beaches, Silvassa greenery aur Portuguese heritage explore karo",
    city: "Diu",
    attraction: "Diu Fort and Beach Route",
    food: "Coastal Seafood",
    shopping: "Seaside Souvenir Markets"
  },
  "Jammu and Kashmir": {
    tagline: "Lakes, gardens, and snow peaks",
    description: "Srinagar, Gulmarg, Pahalgam aur Kashmiri culture ke saath Jammu and Kashmir explore karo",
    city: "Srinagar",
    attraction: "Dal Lake",
    food: "Kashmiri Wazwan",
    shopping: "Pashmina Market"
  },
  "Ladakh": {
    tagline: "High passes and monasteries",
    description: "Leh, Pangong Lake, Nubra Valley aur monasteries ke saath Ladakh explore karo",
    city: "Leh",
    attraction: "Pangong Lake",
    food: "Thukpa",
    shopping: "Leh Main Bazaar"
  },
  "Lakshadweep": {
    tagline: "Coral islands and lagoons",
    description: "Lagoon beaches, water sports aur island calm ke saath Lakshadweep explore karo",
    city: "Kavaratti",
    attraction: "Kavaratti Lagoon",
    food: "Coconut Seafood",
    shopping: "Island Craft Markets"
  },
  "Puducherry": {
    tagline: "French streets and sea breeze",
    description: "White Town, promenade, cafes aur Auroville ke saath Puducherry explore karo",
    city: "Puducherry",
    attraction: "French Quarter Walk",
    food: "Creole Cafe Plates",
    shopping: "Mission Street Boutiques"
  }
};

function buildGeneratedStateData(stateName) {
  const meta = generatedStateMeta[stateName] || {};
  const displayName = stateName || "India";
  const city = meta.city || displayName.replace(" (NCT)", "");
  const imageIndex = Math.max(0, allIndianDestinations.indexOf(displayName)) % generatedStateImages.length;
  const image = meta.image || generatedStateImages[imageIndex];

  return {
    tagline: meta.tagline || "Plan your India journey",
    description: meta.description || `${displayName} ke attractions, food, culture aur shopping places explore karo`,
    image,
    places: [
      {
        name: meta.attraction || `${displayName} Heritage Trail`,
        city,
        category: "attractions",
        description: `${displayName} ke famous viewpoints, heritage spots aur local culture explore karo.`,
        lat: 22.9734,
        lng: 78.6569,
        image
      },
      {
        name: meta.food || `${displayName} Local Food`,
        city,
        category: "food",
        description: `${displayName} ki regional thali, street snacks aur local sweets try karo.`,
        lat: 22.9734,
        lng: 78.6569,
        image
      },
      {
        name: meta.shopping || `${displayName} Local Markets`,
        city,
        category: "shopping",
        description: `${displayName} ke handicrafts, textiles aur souvenirs ke liye local bazaar best rahenge.`,
        lat: 22.9734,
        lng: 78.6569,
        image
      }
    ]
  };
}

// Get all state names
function getAllStates() {
  return allIndianDestinations;
}

// Get places for a specific state
function getStateData(stateName) {
  const canonicalName = stateDataAliases[stateName] || stateName;
  return statesData[canonicalName] || buildGeneratedStateData(stateName);
}

// Get places by category for a state
function getPlacesByCategory(stateName, category) {
  const state = getStateData(stateName);
  if (!state) return [];
  return state.places.filter(place => place.category === category);
}
