                       <!--JAVASCRIPT-->
  
    /* ===================== NAVBAR ===================== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    /* ===================== MOBILE MENU ===================== */
    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.add('open');
    });
    document.getElementById('closeMenu').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
    });
    function closeMobileMenu() {
      document.getElementById('mobileMenu').classList.remove('open');
    }

    /* ===================== SCROLL REVEAL ===================== */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    /* ===================== TRIP PLANNER ===================== */
    // Travel type buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Itinerary data
    const itineraryData = {
      Jaipur: {
        budget: {
          title: "2-Day Jaipur Budget Adventure",
          days: [
            { label: "Day 1", activities: [
              { time:"7:00 AM", text:"Chai & kachori at Rawat Mishthan Bhandar (₹30)" },
              { time:"8:30 AM", text:"Amber Fort – arrive early, skip the queue (₹100)" },
              { time:"12:00 PM", text:"Dal baati churma lunch at local dhaba (₹120)" },
              { time:"2:00 PM", text:"Hawa Mahal exterior photo stop (free from street)" },
              { time:"3:30 PM", text:"Jantar Mantar – UNESCO observatory (₹50)" },
              { time:"6:00 PM", text:"Nahargarh sunset hike (₹50)" },
              { time:"8:00 PM", text:"Chokhi Dhani-style dinner at local venue (₹200)" }
            ]},
            { label: "Day 2", activities: [
              { time:"8:00 AM", text:"Jal Mahal sunrise view (free from road)" },
              { time:"9:30 AM", text:"City Palace + Textile Museum (₹200)" },
              { time:"1:00 PM", text:"Masala chai + pyaaz kachori break" },
              { time:"2:30 PM", text:"Tripolia Bazaar shopping & bargaining" },
              { time:"5:00 PM", text:"Johri Bazaar – silver jewellery window shopping" },
              { time:"7:00 PM", text:"Rooftop meal with fort views (₹300)" }
            ]}
          ]
        },
        mid: {
          title: "3-Day Jaipur Splendour",
          days: [
            { label: "Day 1 – Forts & History", activities: [
              { time:"8:00 AM", text:"Breakfast at hotel" },
              { time:"9:30 AM", text:"Amber Fort with audio guide (elephant ride optional)" },
              { time:"1:00 PM", text:"Lunch at 1135 AD inside Amber Fort" },
              { time:"3:00 PM", text:"Nahargarh Fort + Jaigarh Fort loop" },
              { time:"7:00 PM", text:"Chokhi Dhani cultural village evening" }
            ]},
            { label: "Day 2 – City & Culture", activities: [
              { time:"9:00 AM", text:"City Palace Museum (royal artifacts)" },
              { time:"11:30 AM", text:"Hawa Mahal interior tour + rooftop" },
              { time:"1:30 PM", text:"Bapu Bazaar street lunch" },
              { time:"3:30 PM", text:"Albert Hall Museum" },
              { time:"7:00 PM", text:"Rooftop dinner at Dera Rawatsar with fort views" }
            ]},
            { label: "Day 3 – Markets & Relax", activities: [
              { time:"9:00 AM", text:"Jal Mahal sunrise & lakeside walk" },
              { time:"11:00 AM", text:"Johari Bazaar gems & jewellery" },
              { time:"1:00 PM", text:"Rajasthani thali at Suvarna Mahal" },
              { time:"3:00 PM", text:"Spa at hotel" },
              { time:"6:00 PM", text:"Sunset cocktails at rooftop bar" }
            ]}
          ]
        },
        luxury: {
          title: "5-Day Royal Jaipur Experience",
          days: [
            { label: "Day 1 – Arrival", activities: [
              { time:"Arrival", text:"Private airport pickup by heritage jeep" },
              { time:"3:00 PM", text:"Check-in: Jai Mahal Palace" },
              { time:"7:00 PM", text:"Welcome dinner – traditional Rajasthani thali" }
            ]},
            { label: "Day 2 – Forts", activities: [
              { time:"9:00 AM", text:"Private Amber Fort tour with historian guide" },
              { time:"1:00 PM", text:"Lunch inside Amber Fort at heritage restaurant" },
              { time:"4:00 PM", text:"Nahargarh sunset with champagne viewing" }
            ]},
            { label: "Day 3 – Culture", activities: [
              { time:"9:00 AM", text:"Private City Palace tour with royal family access" },
              { time:"1:00 PM", text:"Fine dining at 1135 AD" },
              { time:"4:00 PM", text:"Block printing / pottery masterclass" },
              { time:"8:00 PM", text:"Candlelit dinner under the stars" }
            ]},
            { label: "Day 4 – Day Trip", activities: [
              { time:"8:00 AM", text:"Ranthambore Tiger Reserve day trip" },
              { time:"7:00 PM", text:"Return, spa treatment at hotel" }
            ]},
            { label: "Day 5 – Departure", activities: [
              { time:"9:00 AM", text:"Gemstone shopping – private showroom access" },
              { time:"1:00 PM", text:"Farewell lunch at hotel" },
              { time:"4:00 PM", text:"Heritage jeep airport transfer" }
            ]}
          ]
        }
      },
      Delhi: {
        mid: {
          title: "3-Day Delhi Heritage Trail",
          days: [
            { label: "Day 1 – Old Delhi", activities: [
              { time:"8:00 AM", text:"Jama Masjid – sunrise walk" },
              { time:"10:00 AM", text:"Red Fort guided tour" },
              { time:"1:00 PM", text:"Paranthe Wali Gali lunch" },
              { time:"3:00 PM", text:"Chandni Chowk bazaar walk" },
              { time:"7:00 PM", text:"Karim's dinner – 100+ year old Mughal restaurant" }
            ]},
            { label: "Day 2 – New Delhi", activities: [
              { time:"9:00 AM", text:"Humayun's Tomb (UNESCO)" },
              { time:"11:30 AM", text:"Lodhi Garden walk" },
              { time:"1:30 PM", text:"Khan Market lunch" },
              { time:"3:00 PM", text:"India Gate + Rashtrapati Bhavan" },
              { time:"7:00 PM", text:"Connaught Place dinner" }
            ]},
            { label: "Day 3 – Spiritual & Markets", activities: [
              { time:"9:00 AM", text:"Lotus Temple + Akshardham" },
              { time:"2:00 PM", text:"Sarojini Nagar shopping" },
              { time:"5:00 PM", text:"Hauz Khas Village – cafes & nightlife" }
            ]}
          ]
        }
      },
      Goa: {
        budget: {
          title: "4-Day Goa Budget Beach Trip",
          days: [
            { label: "Day 1 – North Goa", activities: [
              { time:"10:00 AM", text:"Check-in hostel, freshen up" },
              { time:"12:00 PM", text:"Calangute Beach – swim & sunbathe" },
              { time:"4:00 PM", text:"Baga beach walk & local shacks" },
              { time:"7:00 PM", text:"Tito's Lane street food & nightlife" }
            ]},
            { label: "Day 2 – Heritage", activities: [
              { time:"9:00 AM", text:"Old Goa – Basilica of Bom Jesus" },
              { time:"11:00 AM", text:"Fontainhas – Portuguese heritage quarter" },
              { time:"1:00 PM", text:"Fish curry rice at family restaurant" },
              { time:"3:00 PM", text:"Anjuna flea market" }
            ]},
            { label: "Day 3 – South Goa", activities: [
              { time:"9:00 AM", text:"Colva Beach (peaceful, less crowded)" },
              { time:"12:00 PM", text:"Agonda Beach boat to Butterfly Beach" },
              { time:"5:00 PM", text:"Palolem sunset – most beautiful in Goa" }
            ]},
            { label: "Day 4 – Departure", activities: [
              { time:"8:00 AM", text:"Sunrise swim at Palolem" },
              { time:"10:00 AM", text:"Spice plantation tour (₹400)" },
              { time:"2:00 PM", text:"Final Goan meal + cashew feni tasting" }
            ]}
          ]
        }
      }
    };

    let selectedType = 'Solo';
    document.querySelectorAll('.type-btn').forEach(btn => {
      btn.addEventListener('click', () => { selectedType = btn.dataset.type; });
    });

    function generateItinerary() {
      const city = document.getElementById('pl-city').value;
      const budget = document.getElementById('pl-budget').value;
      const days = document.getElementById('pl-days').value;

      if (!city || !budget || !days) {
        alert('Please fill all fields to generate your itinerary!');
        return;
      }

      const result = document.getElementById('itinerary-result');
      const daysContainer = document.getElementById('itin-days');
      const badge = document.getElementById('itin-badge');
      const title = document.getElementById('itin-title');
      const budgetBadge = document.getElementById('itin-budget-badge');

      // Find matching data or fallback
      const cityData = itineraryData[city] || itineraryData['Jaipur'];
      const budgetKey = budget === 'budget' ? 'budget' : budget === 'luxury' ? 'luxury' : 'mid';
      const itin = cityData[budgetKey] || cityData['mid'] || Object.values(cityData)[0];

      badge.textContent = `${selectedType} · ${city}`;
      title.textContent = itin.title;
      budgetBadge.textContent = budget === 'budget' ? '₹ Budget' : budget === 'luxury' ? '👑 Luxury' : '⭐ Mid-Range';

      daysContainer.innerHTML = itin.days.map(day => `
        <div class="day-card">
          <div class="day-label">${day.label}</div>
          <div class="day-activities">
            ${day.activities.map(a => `
              <div class="activity">
                <span class="activity-time">${a.time}</span>
                <span>${a.text}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');

      result.style.display = 'block';
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function clearPlanner() {
      document.getElementById('pl-city').value = '';
      document.getElementById('pl-budget').value = '';
      document.getElementById('pl-days').value = '';
      document.getElementById('itinerary-result').style.display = 'none';
    }

    /* ===================== PRE-BUILT ITINERARIES ===================== */
    const prebuilt = {
      jaipur2: { city: 'Jaipur', budget: 'budget', days: '2' },
      delhi3:  { city: 'Delhi',  budget: 'mid',    days: '3' },
      raj5:    { city: 'Jaipur', budget: 'luxury',  days: '5' },
      goa4:    { city: 'Goa',    budget: 'budget',  days: '4' }
    };
    function loadPrebuiltItinerary(key) {
      const d = prebuilt[key];
      document.getElementById('pl-city').value = d.city;
      document.getElementById('pl-budget').value = d.budget;
      document.getElementById('pl-days').value = d.days;
      document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
      setTimeout(generateItinerary, 600);
    }

    /* ===================== HOTEL FILTER ===================== */
    function filterHotels(tier, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.hotel-card').forEach(card => {
        card.style.display = (tier === 'all' || card.dataset.tier === tier) ? 'block' : 'none';
      });
    }

    /* ===================== FOOD FILTER ===================== */
    function filterFood(type, btn) {
      document.querySelectorAll('.food-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.food-card').forEach(card => {
        card.style.display = card.dataset.food === type ? 'block' : 'none';
      });
    }

    /* ===================== TRANSPORT SWITCH ===================== */
    const transportInfo = {
      jaipur: [
        { icon:'✈️', type:'By Air', title:'Jaipur International Airport', details:'13km from city. Flights from Delhi (1hr), Mumbai (2hrs). Terminal 2 domestic.', costLabel:'Airport to City', costValue:'₹400–₹700 (cab)' },
        { icon:'🚂', type:'By Rail', title:'Jaipur Railway Station', details:'Connected to Delhi (5hrs Shatabdi), Jodhpur (5hrs), Mumbai (18hrs). Pre-paid autos outside.', costLabel:'Station to Hotel', costValue:'₹80–₹200 (auto)' },
        { icon:'🚌', type:'Local Transport', title:'Bus / Auto / Cab', details:'City buses ₹10–₹30. Ola/Uber reliable. No metro yet.', costLabel:'Avg Local Trip', costValue:'₹50–₹150' },
        { icon:'🛺', type:'Rickshaw', title:'Cycle & E-Rickshaw', details:'Best for Old City. Negotiate before boarding. E-rickshaws near tourist spots.', costLabel:'Short Ride', costValue:'₹20–₹60' }
      ],
      delhi: [
        { icon:'✈️', type:'By Air', title:'Indira Gandhi Intl Airport', details:'T3 for international & domestic. Connected to city by Airport Express Metro (20 mins, ₹60).', costLabel:'Airport to City', costValue:'₹60 (metro) / ₹500–₹800 (cab)' },
        { icon:'🚂', type:'By Rail', title:'New Delhi / Hazrat Nizamuddin', details:'Main stations. Trains to all major cities. Book 60-90 days in advance on IRCTC.', costLabel:'Station to Centre', costValue:'₹100–₹200 (metro/cab)' },
        { icon:'🚇', type:'Metro', title:'Delhi Metro (DMRC)', details:'Best way to get around. 390+ stations across 12 lines. QR token or metro card.', costLabel:'Per Ride', costValue:'₹10–₹60' },
        { icon:'🚕', type:'Taxi', title:'Ola / Uber / Auto', details:'App cabs everywhere. CNG autos use meter – insist on it! Surge pricing post midnight.', costLabel:'Short Cab Ride', costValue:'₹80–₹200' }
      ],
      goa: [
        { icon:'✈️', type:'By Air', title:'Goa International Airport', details:'Dabolim (South, military airport) or new Mopa airport (North). 30-45km from beaches.', costLabel:'Airport to Beach', costValue:'₹600–₹1,200 (cab)' },
        { icon:'🚂', type:'By Rail', title:'Madgaon / Thivim Station', details:'Madgaon (South Goa), Thivim (North). Konkan Railway connects Mumbai & Mangalore.', costLabel:'Station to Beach', costValue:'₹300–₹600 (cab)' },
        { icon:'🏍', type:'Rent a Bike', title:'Scooter / Motorcycle', details:'Best way to explore Goa! Rent at ₹300–₹500/day. Need valid driving licence.', costLabel:'Scooter Rental', costValue:'₹300–₹500/day' },
        { icon:'🚌', type:'Local Kadamba Bus', title:'Government Bus', details:'Connects Panaji, Margao, Mapusa. Cheap (₹10–₹40) but less frequent. Good for budget travel.', costLabel:'Bus Ride', costValue:'₹10–₹40' }
      ]
    };

    function switchTransport(city, btn) {
      document.querySelectorAll('.transport-city-tabs .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const info = transportInfo[city];
      document.getElementById('transportContent').innerHTML = info.map(t => `
        <div class="transport-card">
          <div class="transport-icon">${t.icon}</div>
          <div class="transport-type">${t.type}</div>
          <div class="transport-title">${t.title}</div>
          <div class="transport-details">${t.details}</div>
          <div class="transport-cost">
            <span class="cost-label">${t.costLabel}</span>
            <span class="cost-value">${t.costValue}</span>
          </div>
        </div>
      `).join('');
    }

    /* ===================== NEWSLETTER ===================== */
    function subscribeNewsletter() {
      const email = document.getElementById('nl-email').value;
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailReg.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      const btn = document.querySelector('.newsletter-form .btn-gold');
      btn.textContent = '✓ Subscribed!';
      btn.style.background = 'linear-gradient(135deg, #27ae60, #1abc9c)';
      document.getElementById('nl-email').value = '';
      setTimeout(() => {
        btn.textContent = 'Subscribe ✦';
        btn.style.background = '';
      }, 4000);
    }

    /* ===================== DEAL TIMERS ===================== */
    function updateDealTimers() {
      const timers = [
        { el: 0, hours: 62 },  // 2d 14h
        { el: 1, hours: 128 }, // 5d 8h
        { el: 2, hours: 30 },  // 1d 6h
      ];
    }

    /* ===================== LAZY IMAGES ===================== */
    if ('IntersectionObserver' in window) {
      const lazyBgs = document.querySelectorAll('[data-bg]');
      const bgObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.style.backgroundImage = `url(${e.target.dataset.bg})`;
            bgObserver.unobserve(e.target);
          }
        });
      });
      lazyBgs.forEach(el => bgObserver.observe(el));
    }

    /* ===================== SMOOTH ACTIVE NAV ===================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
      });
    });

    /* ===================== API DATA FETCHING ===================== */
    const API_BASE = 'https://smarttrip-backend-vuzk.onrender.com';

    // Fetch and populate hotels
    async function loadHotels() {
      try {
        const response = await fetch(`${API_BASE}/api/hotels`);
        const result = await response.json();
        const hotels = result.data || [];
        const hotelsGrid = document.getElementById('hotelsGrid');

        if (hotels.length === 0) return;

        hotelsGrid.innerHTML = hotels.map(hotel => {
          const tier = hotel.tier || 'mid';
          const tierBadge = tier === 'luxury' ? '<span class="badge" style="background:rgba(212,168,83,0.25);color:#f0c878;">Luxury</span>' :
                           tier === 'budget' ? '<span class="badge">Budget</span>' :
                           '<span class="badge" style="background:rgba(26,159,168,0.2);color:#26c6d0;">Mid-Range</span>';

          return `
            <div class="hotel-card" data-tier="${tier}">
              <div class="hotel-img" style="background:linear-gradient(135deg,#1a2a3a,#2a4060);">
                <span class="hotel-tier">${tierBadge}</span>
              </div>
              <div class="hotel-body">
                <div class="hotel-name">${hotel.name}</div>
                <div class="hotel-location">📍 ${hotel.location}</div>
                <div class="hotel-rating">
                  <span class="stars">${'★'.repeat(Math.floor(hotel.rating))}</span>
                  <span>${hotel.rating}</span>
                  <span class="count">(328 reviews)</span>
                </div>
                <div class="hotel-amenities">
                  ${hotel.amenities.map(amenity => `<span class="amenity">${amenity}</span>`).join('')}
                </div>
                <div class="hotel-footer">
                  <div class="hotel-price">
                    <div class="per-night">per night</div>
                    <div class="amount">${hotel.price}</div>
                  </div>
                  <button class="btn-gold" style="padding:9px 18px;font-size:11px;">Book Now</button>
                </div>
              </div>
            </div>
          `;
        }).join('');
      } catch (error) {
        console.error('Error loading hotels:', error);
      }
    }

    // Fetch and populate food
    async function loadFood() {
      try {
        const response = await fetch(`${API_BASE}/api/restaurants`);
        const result = await response.json();
        const foods = result.data || [];
        const foodGrid = document.getElementById('foodGrid');

        if (foods.length === 0) return;

        foodGrid.innerHTML = foods.map(food => {
          const category = food.category || 'restaurant';
          const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

          return `
            <div class="food-card" data-food="${category}">
              <div class="food-img" style="background:linear-gradient(135deg,#1a2a3a,#2a4060);">${food.image || '🍜'}</div>
              <div class="food-body">
                <div class="food-category">${displayCategory}</div>
                <div class="food-name">${food.name}</div>
                <div class="food-desc">${food.description}</div>
                <div class="food-meta">
                  <span class="food-price">${food.price}</span>
                  <span class="food-rating">⭐ ${food.rating}</span>
                </div>
              </div>
            </div>
          `;
        }).join('');
      } catch (error) {
        console.error('Error loading food:', error);
      }
    }

    // Fetch and populate transport
    async function loadTransport() {
      try {
        const response = await fetch(`${API_BASE}/api/trip`);
        const result = await response.json();
        const transports = result.data || [];

        if (transports.length === 0) return;

        // Group by city
        const transportByCity = {};
        transports.forEach(transport => {
          const city = transport.city || 'jaipur';
          if (!transportByCity[city]) transportByCity[city] = [];
          transportByCity[city].push({
            icon: transport.type === 'air' ? '✈️' : transport.type === 'rail' ? '🚂' : transport.type === 'bus' ? '🚌' : '🚗',
            type: transport.type.charAt(0).toUpperCase() + transport.type.slice(1),
            title: transport.title,
            details: transport.details,
            costLabel: 'Cost',
            costValue: transport.cost
          });
        });

        // Update transport info object
        Object.keys(transportByCity).forEach(city => {
          transportInfo[city.toLowerCase()] = transportByCity[city];
        });
      } catch (error) {
        console.error('Error loading transport:', error);
      }
    }

    // Fetch and populate deals
    async function loadDeals() {
      try {
        const response = await fetch(`${API_BASE}/api/packages`);
        const result = await response.json();
        const deals = result.data || [];
        const dealsGrid = document.querySelector('.deals-grid');

        if (deals.length === 0) return;

        dealsGrid.innerHTML = deals.map(deal => `
          <div class="deal-card">
            <div class="deal-banner" style="background:linear-gradient(135deg,#c0392b,#8e44ad);">
              <span class="deal-discount">${deal.discount}</span>
              <div class="deal-timer">⏱ ${deal.timer}</div>
            </div>
            <div class="deal-body">
              <div class="deal-type">${deal.type}</div>
              <div class="deal-name">${deal.name}</div>
              <div class="deal-desc">${deal.description}</div>
              <div class="deal-pricing">
                <span class="deal-original">${deal.originalPrice}</span>
                <span class="deal-final">${deal.discountedPrice}</span>
              </div>
              <div class="deal-includes">
                <span class="deal-include">Special Offer</span>
                <span class="deal-include">Limited Time</span>
              </div>
              <button class="btn-gold" style="width:100%;">Grab Deal ✦</button>
            </div>
          </div>
        `).join('');
      } catch (error) {
        console.error('Error loading deals:', error);
      }
    }

    // Fetch and populate hidden gems (places)
    async function loadHiddenGems() {
      try {
        const response = await fetch(`${API_BASE}/api/places`);
        const result = await response.json();
        const places = result.data || [];
        const gemsGrid = document.querySelector('.gems-grid');

        if (places.length === 0) return;

        // Filter for hidden gems or attractions that could be considered gems
        const gems = places.filter(place => place.category === 'attractions' || place.category === 'food').slice(0, 6);

        if (gems.length === 0 && places.length > 0) {
          // Use first 6 places as gems
          gems.push(...places.slice(0, 6));
        }

        gemsGrid.innerHTML = gems.map(gem => `
          <div class="gem-card">
            <div class="gem-visual" style="background:linear-gradient(135deg,#1a0a3a,#4a1a8a);">
              <span class="gem-secret-badge">Hidden</span>
            </div>
            <div class="gem-body">
              <div class="gem-type">📍 ${gem.category || 'Hidden Gem'}</div>
              <div class="gem-name">${gem.name}</div>
              <div class="gem-desc">${gem.description}</div>
              <div class="gem-footer">
                <span class="gem-city">📌 ${gem.city || 'Jaipur'}</span>
                <span class="badge">${gem.entryFee === 0 ? 'Free' : 'Paid'}</span>
              </div>
            </div>
          </div>
        `).join('');
      } catch (error) {
        console.error('Error loading hidden gems:', error);
      }
    }

    // Load all data on page load
    document.addEventListener('DOMContentLoaded', () => {
      loadHotels();
      loadFood();
      loadTransport();
      loadDeals();
      loadHiddenGems();
    });