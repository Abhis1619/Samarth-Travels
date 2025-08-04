
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Twentyfiveseatetempotraveller() {



    const cardData =
    {
        keyword: '25 Seater Tempo Traveller on Rent in Pune',
        heading: 'Samarth Travels:  25 Seater Tempo Traveller on Rent in Pune',
        headingDescription: 'Samarth Travels offers 25 Seater Tempo Traveller on rent in Pune, perfect for large group travel, school trips, corporate outings, and family functions. Our spacious 25-seater Tempo Travellers come equipped with air-conditioning, push-back seats, and ample legroom to ensure a comfortable and relaxed journey for every passenger. With experienced drivers, transparent pricing, and reliable service, Samarth Travels guarantees a smooth and hassle-free travel experience.',

        top: 'Top Places to Visit in Pune Outstation with Samarth Travels',

      "topPlaces": [
    {
      "title": "Mahabaleshwar",
      "description": "Nestled in the Western Ghats, Mahabaleshwar is a scenic hill station around 120 km from Pune. Known for its lush strawberry farms, panoramic viewpoints like Arthur’s Seat and Wilson Point, and the historic Mahabaleshwar Temple, it offers a cool and refreshing retreat. Boating on Venna Lake and walking through misty trails make it a perfect weekend getaway."
    },
    {
      "title": "Lonavala & Khandala",
      "description": "Just about 65 km from Pune, the twin hill stations of Lonavala and Khandala are famous for their lush valleys, waterfalls, and forts like Rajmachi and Lohagad. The monsoon season enhances their charm, drawing travelers for trekking, picnics, and chikki shopping. Bhushi Dam and Tiger’s Leap are must-visit attractions in this green paradise."
    },
    {
      "title": "Shirdi",
      "description": "Located approximately 200 km from Pune, Shirdi is a revered pilgrimage town dedicated to Sai Baba. The Sai Baba Temple complex attracts millions of devotees each year. Besides the temple, other spots like Dwarkamai, Chavadi, and the Sai Heritage Village offer spiritual solace and insights into the saint’s life and teachings."
    },
    {
      "title": "Lavasa",
      "description": "Lavasa is a planned hill city about 60 km from Pune, offering Italian-style architecture and lakeside promenades. Popular for romantic getaways and weekend breaks, Lavasa features adventure sports, nature trails, and serene boat rides on the Warasgaon Lake. Its colorful buildings and vibrant cafes make it a photogenic escape."
    },
    {
      "title": "Alibaug",
      "description": "Alibaug is a coastal town around 140 km from Pune, known for its clean beaches and colonial forts. With attractions like Alibaug Beach, Kolaba Fort, and Mandwa Beach, it's a great destination for beach lovers. It’s ideal for water sports, seafood cuisine, and short family trips by road or ferry from Mumbai."
    },
    {
      "title": "Nashik",
      "description": "About 210 km from Pune, Nashik is a blend of spirituality and wine tourism. It’s home to the sacred Godavari River, Trimbakeshwar Temple, and Muktidham, making it a major religious center. Simultaneously, vineyards like Sula and York offer wine tasting and stunning vineyard views, making it a unique dual-experience destination."
    },
    {
      "title": "Kolhapur",
      "description": "Located 230 km from Pune, Kolhapur is rich in heritage, known for the Mahalaxmi Temple, New Palace Museum, and rankala Lake. It’s also famed for its spicy cuisine and handcrafted Kolhapuri chappals. A perfect cultural and culinary escape, Kolhapur provides a deep dive into Maharashtrian traditions."
    },
    {
      "title": "Bhimashankar",
      "description": "Approximately 110 km from Pune, Bhimashankar is a sacred Jyotirlinga shrine nestled in dense forests of the Sahyadri hills. Ideal for spiritual seekers and nature lovers, the region also forms part of a wildlife sanctuary. Trekking trails, misty landscapes, and temple architecture make it a soul-soothing destination."
    },
    {
      "title": "Matheran",
      "description": "Located about 120 km from Pune, Matheran is Asia’s only automobile-free hill station. Famous for its red-soiled paths, vintage toy train, and viewpoints like Panorama Point and Echo Point, it’s a tranquil retreat amidst nature. Horse rides and eco-friendly travel make it a unique experience."
    },
    {
      "title": "Goa",
      "description": "Though around 450 km away, Goa is a top outstation pick from Pune for those seeking beaches, nightlife, and Portuguese charm. From serene South Goa beaches like Palolem to lively North Goa spots like Baga and Anjuna, it’s perfect for parties, watersports, and cultural explorations. The drive or train journey adds to the adventure."
    }
  ],

"services": [
    {
        "name": "25 Seater Tempo Traveller on Rent in Pune",
        "description": "Samarth Travels offers 25-seater Tempo Traveller rentals in Pune for group travel, events, religious tours, and corporate outings. Our vehicles come with comfortable push-back seats, large windows, air-conditioning, and professional drivers, making them perfect for medium to large group journeys."
    },
    {
        "name": "Tempo Traveller 25 Seater Rent Per KM in Pune",
        "description": "Get transparent and competitive per kilometer pricing for 25-seater Tempo Traveller rentals in Pune. Samarth Travels provides flexible fare options for hourly and distance-based packages, ensuring cost-effective transport solutions for your group trips and tours."
    },
    {
        "name": "Tempo Traveller 25 Seater AC Bus on Rent Pune",
        "description": "Travel in comfort with our air-conditioned 25-seater Tempo Traveller buses. Ideal for long-distance trips or summer travel, our AC buses ensure a cool and relaxed journey, whether you're heading to a wedding, family function, or a sightseeing destination."
    },
    {
        "name": "Tempo Traveller 26 Seater Non AC Bus on Rent in Pune",
        "description": "Looking for a budget-friendly option for large group travel? Rent a 26-seater non-AC Tempo Traveller bus in Pune. Suitable for short-distance city travel, school outings, or daytime picnics, this option combines affordability with spacious seating."
    },
    {
        "name": "26 Bus on Rent for Wedding in Pune",
        "description": "Make your wedding logistics smooth with our 26-seater bus rental in Pune. Perfect for transporting guests between venues, hotels, or functions, our wedding buses are clean, punctual, and driven by experienced chauffeurs who understand event coordination."
    },
    {
        "name": "25 Bus on Rent Pimpri Chinchwad Pune",
        "description": "Residents of Pimpri-Chinchwad can now easily book 25-seater buses for weddings, events, or group tours. Samarth Travels offers reliable service in PCMC with well-maintained buses and experienced drivers for both city and outstation travel."
    },
    {
        "name": "25 Bus on Rent in Pune for Picnics",
        "description": "Planning a school, college, or office picnic? Rent a 25-seater bus in Pune with Samarth Travels. Spacious and comfortable, our buses are ideal for transporting groups to parks, resorts, or picnic spots in and around Pune."
    },
    {
        "name": "Pune to Goa 25 Seater Bus Fare",
        "description": "Traveling to Goa with a large group? Samarth Travels provides 25-seater Tempo Travellers for Pune to Goa trips at competitive fares. Enjoy the scenic drive with reclining seats, air-conditioning, and safe, reliable service throughout the journey."
    },
    {
        "name": "26 Seater Tempo Traveller on Rent in Pune",
        "description": "Need a larger vehicle? Our 26-seater Tempo Traveller in Pune is ideal for corporate tours, pilgrimages, and extended family travel. Equipped with essential features and driven by trained staff, it ensures a smooth group travel experience."
    },
    {
        "name": "25 Seater Bus on Rent in Hadapsar Pune",
        "description": "If you're located in Hadapsar, Samarth Travels offers easy 25-seater bus rentals for weddings, events, or outstation tours. We provide prompt service and high-quality vehicles to make your journey comfortable and timely."
    },
    {
        "name": "Pune to Shirdi 25 Seater Bus on Rent",
        "description": "Book a 25-seater bus for a spiritual trip from Pune to Shirdi with Samarth Travels. Ideal for Sai Baba devotees traveling in groups, we offer air-conditioned and non-AC options with experienced drivers familiar with pilgrimage routes."
    },
    {
        "name": "Pune Airport to Shirdi 25 Seater Tempo Traveller on Rent",
        "description": "Arriving at Pune Airport and heading to Shirdi? Rent a 25-seater Tempo Traveller directly from the airport for a convenient and comfortable group transfer. We provide timely pick-up, clean vehicles, and courteous drivers."
    },
    {
        "name": "Pune to Bhimashankar 25 Seater Tempo Traveller",
        "description": "Visit the holy Bhimashankar temple with your group in a 25-seater Tempo Traveller. Samarth Travels ensures a peaceful journey with safe driving, comfortable seating, and optional tour packages for religious travelers."
    },
    {
        "name": "Pune to 5 Jyotirlinga Darshan Tempo Traveller on Rent",
        "description": "Embark on the sacred 5 Jyotirlinga Darshan tour with a reliable 25-seater Tempo Traveller. We provide structured tour packages with knowledgeable drivers, comfortable vehicles, and custom itineraries tailored for pilgrimage groups."
    },
    {
        "name": "25 Seater Tempo Traveller on Rent in Pune Price",
        "description": "Wondering about the price to rent a 25-seater Tempo Traveller in Pune? Samarth Travels offers clear and affordable pricing with per km, per day, and package rates depending on your trip requirements and duration."
    },
    {
        "name": "25 Seater Tempo Traveller on Rent in Pimpri Chinchwad",
        "description": "For customers in Pimpri Chinchwad, our 25-seater Tempo Travellers are available for rent at competitive rates. Ideal for local events, school tours, or outstation trips, our fleet offers both luxury and economy options."
    },
    {
        "name": "Tempo Traveller on Rent Pune",
        "description": "Samarth Travels provides Tempo Travellers for rent in Pune for all purposes — from city transfers and weddings to weekend getaways and business travel. Choose from various seating capacities to match your group size and travel plan."
    },
    {
        "name": "Tempo Traveller on Rent Kharadi Pune",
        "description": "If you're in Kharadi, Pune, Samarth Travels offers fast and affordable Tempo Traveller rentals. Whether you're planning a corporate team outing or a local tour, we provide timely service and well-maintained vehicles in your area."
    },
    {
        "name": "Tempo Traveller on Rent in Pune for Event",
        "description": "Need group transport for a wedding, party, or corporate event in Pune? Rent a Tempo Traveller with Samarth Travels. Our large fleet and professional staff ensure your guests travel comfortably and arrive on time."
    },
    {
        "name": "Tempo Traveller on Rent in Pune for Corporate",
        "description": "Ensure smooth travel for your corporate teams with our reliable Tempo Traveller rentals in Pune. Whether it’s for an offsite, seminar, or business visit, we offer professional service, clean vehicles, and corporate billing options."
    }
],
"tableData": [
    ["25 Seater Tempo Traveller on Rent in Pune", "Tempo Traveller 25 Seater Rent Per KM in Pune"],
    ["Tempo Traveller 25 Seater AC Bus on Rent Pune", "Tempo Traveller 26 Seater Non AC Bus on Rent in Pune"],
    ["26 Bus on Rent for Wedding in Pune", "25 Bus on Rent Pimpri Chinchwad Pune"],
    ["25 Bus on Rent in Pune for Picnics", "Pune to Goa 25 Seater Bus Fare"],
    ["26 Seater Tempo Traveller on Rent in Pune", "25 Seater Bus on Rent in Hadapsar Pune"],
    ["Pune to Shirdi 25 Seater Bus on Rent", "Pune Airport to Shirdi 25 Tem Tempo Traveller on Rent"],
    ["Pune to Bhimashankar 25 Seater Tempo Traveller", "Pune to 5 Jyotirlinga Darshan Tempo Traveller on Rent"],
    ["25 Seater Tempo Traveller on Rent in Pune Price", "25 Seater Tempo Traveller on Rent in Pimpri Chinchwad"],
    ["Tempo Traveller on Rent Pune", "Tempo Traveller on Rent Kharadi Pune"],
    ["Tempo Traveller on Rent in Pune for Event", "Tempo Traveller on Rent in Pune for Corporate"]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable 25-Seater Tempo Traveller Hire in Pune",
        "WhyChoosedescription": "We provide trusted 25-seater Tempo Traveller rentals in Pune, perfect for large group trips, family events, corporate outings, or school excursions. Our spacious and comfortable Tempo Travellers ensure smooth, timely, and efficient transportation for your group."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable 25-Seater Tempo Travellers",
        "WhyChoosedescription": "Our 25-seater Tempo Travellers offer ample space with comfortable seating, air-conditioning, and plenty of legroom. These vehicles are designed to ensure that all passengers enjoy a relaxed and pleasant journey, no matter the duration of the trip."
    },
    {
        "WhyChooseheading": "Professional Drivers for Safe and Punctual Travel",
        "WhyChoosedescription": "Our experienced and courteous drivers are well-versed in handling large groups, ensuring a smooth, safe, and punctual journey. They are familiar with all major routes in and around Pune, ensuring your group arrives on time at your destination."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 25-Seater Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for our 25-seater Tempo Traveller rentals. There are no hidden charges, and our flexible rental packages make sure you get excellent service within your budget, whether for a few hours or a full day."
    },
    {
        "WhyChooseheading": "24/7 Availability for Convenient Scheduling",
        "WhyChoosedescription": "Our 25-seater Tempo Travellers are available around the clock, allowing you to schedule your trip whenever it suits you. Whether it’s an early morning departure or a late-night return, we ensure reliable transportation that fits your needs."
    },
    {
        "WhyChooseheading": "Easy Booking and Real-Time Updates for Smooth Coordination",
        "WhyChoosedescription": "Booking your 25-seater Tempo Traveller in Pune is simple and quick. Once your booking is confirmed, you will receive real-time updates, tracking details, and driver contact information to ensure smooth coordination and a stress-free experience."
    },
    {
        "WhyChooseheading": "Well-Maintained and Sanitized 25-Seater Tempo Travellers for Safety",
        "WhyChoosedescription": "We ensure that all our 25-seater Tempo Travellers are regularly maintained, cleaned, and sanitized before each trip. This guarantees a hygienic, safe, and comfortable environment for your group throughout the journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy Booking",
        "WhyChoosedescription": "We offer a variety of payment methods including UPI, credit/debit cards, digital wallets, and cash, making it convenient for you to complete your booking securely and without hassle."
    }
]


























    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a 25-seater Tempo Traveller in Pune with Samarth Travels?',
        answer: 'Renting a 25-seater Tempo Traveller in Pune is easy with Samarth Travels. You can book directly through our website or contact our customer support team. Just provide your travel date, number of passengers, and destination, and we’ll handle the rest.',
    },
    {
        id: 2,
        question: 'What amenities are available in the 25-seater Tempo Traveller?',
        answer: 'Our 25-seater Tempo Traveller offers comfortable pushback seats, air conditioning, overhead luggage racks, reading lights, ample legroom, and spacious interiors. It is ideal for large groups, whether for corporate trips, weddings, or outstation tours.',
    },
    {
        id: 3,
        question: 'What are the rental charges for a 25-seater Tempo Traveller in Pune?',
        answer: 'Rental charges for a 25-seater Tempo Traveller in Pune generally start from ₹32/km. We offer custom local and outstation packages based on the distance, duration, and travel itinerary for maximum value and convenience.',
    },
    {
        id: 4,
        question: 'Is the 25-seater Tempo Traveller suitable for long-distance trips?',
        answer: 'Yes, the 25-seater Tempo Traveller is perfect for long-distance journeys. It ensures a smooth and relaxing ride with ergonomic seating, air conditioning, and plenty of space for passengers and luggage.',
    },
    {
        id: 5,
        question: 'Can I choose custom pickup and drop-off points with this rental?',
        answer: 'Yes, Samarth Travels allows complete flexibility with pickup and drop-off points. Whether it’s from your office, home, hotel, or event venue, we tailor the service to fit your travel plan and group convenience.',
    },
    {
        id: 6,
        question: 'Is a driver and fuel included in the 25-seater Tempo Traveller rental?',
        answer: 'Absolutely. All rentals include a licensed, professional driver and fuel. Any extra charges like tolls, interstate taxes, or parking fees are shared transparently at the time of booking.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for my Tempo Traveller booking?',
        answer: 'Yes, our customer support team is available 24/7 to assist with your booking, route planning, or any urgent travel modifications. We’re committed to ensuring your journey is smooth from start to finish.',
    },
];

const testimonials = [
    {
        name: 'Mr. Harshad Kulkarni',
        role: 'Tour Organizer',
        text: 'We booked a 25-seater Tempo Traveller for a company outing from Pune. The vehicle was clean, comfortable, and arrived on time. The driver was courteous and professional. Great experience with Samarth Travels!',
        image: '/img/testimonial/testi_tempo_harshad.jpg',
    },
    {
        name: 'Ms. Divya Nair',
        role: 'Event Coordinator',
        text: 'For a wedding in Pune, we hired a 25-seater Tempo Traveller from Samarth Travels. The vehicle was spacious and well-maintained. Guests were very happy with the ride. I’ll definitely use their services again.',
        image: '/img/testimonial/testi_tempo_divya.jpg',
    },
];




































    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 9860256019",
            "+91 9527500025",

        ],
        email: "samarthtravels9119@gmail.com"
    };


   const Images = [
        {
            place: "/images/keyword/1.jpg",
            text: " Tempo Traveller Pune",
        },
        {
            place: "/images/keyword/2.jpg",
            text: " Tempo Traveller on Rent Pune",
        },
        {
            place: "/images/keyword/3.jpg",
            text: " Bus on Rent in Pune",
        },
        {
            place: "/images/keyword/4.jpg",
            text: " Tempo Traveller on Rent",
        },
        {
            place: "/images/keyword/5.jpg",
            text: " Tempo Traveller Rent in Pune",
        },
        {
            place: "/images/keyword/6.jpg",
            text: " Tempo Traveller Hire in Pune",
        },
        {
            place: "/images/keyword/7.jpg",
            text: " Mini Bus for Rent",
        },

        {
            place: "/images/keyword/8.jpg",
            text: " Bus on Rent Hire",
        },

        {
            place: "/images/keyword/9.jpg",
            text: " Bus on Rent Pune",
        },
        {
            place: "/images/keyword/10.jpg",
            text: " Bus Rental in Pune",
        },

        {
            place: "/images/keyword/11.jpg",
            text: " Hire Tempo Traveller",
        },
        {
            place: "/images/keyword/12.jpg",
            text: " Bus Hire in Pune",
        },
        {
            place: "/images/keyword/13.jpg",
            text: " Ac Tempo Traveller Rent Pune",
        },
        {
            place: "/images/keyword/14.jpg",
            text: " Bus Hire For Outstation",
        },
        {
            place: "/images/keyword/15.jpg",
            text: " Bus on Rent for Local",
        },
        {
            place: "/images/keyword/16.jpg",
            text: " Bus Rental For Wedding",
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Bus Rent for Marriage",
        },
        {
            place: "/images/keyword/18.jpg",
            text: " Bus Rental For Corporate Events",
        },
        {
            place: "/images/keyword/19.jpg",
            text: "  Bus Rental for Tour",
        },

        {
            place: "/images/keyword/20.jpg",
            text: "Bus Rental For Corporate in Pune",
        },
        {
            place: "/images/keyword/21.jpg",
            text: " Tempo Traveller on Rent in Pune",
        },
        {
            place: "/images/keyword/22.jpg",
            text: " AC Bus On Rent",
        },
        {
            place: "/images/keyword/23.jpg",
            text: " Non Ac Bus Rental Service",
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Bus on Hire on Pune to Mahabaleshwar Package Tour ",
        },
        {
            place: "/images/keyword/25.jpg",
            text: "Bus Hire for Picnic",
        },
    ];


    const images = [
        { src: "/images/fleets/1.jpg", alt: "Image 1" },
        { src: "/images/fleets/2.jpg", alt: "Image 1" },
        { src: "/images/fleets/3.jpg", alt: "Image 1" },
        { src: "/images/fleets/4.jpg", alt: "Image 1" },
        { src: "/images/fleets/5.jpg", alt: "Image 1" },
        { src: "/images/fleets/6.jpg", alt: "Image 1" },
        { src: "/images/fleets/7.jpg", alt: "Image 1" },
        { src: "/images/fleets/8.jpg", alt: "Image 1" },
        { src: "/images/fleets/9.jpg", alt: "Image 1" },


    ];



const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "25 Seater Tempo Traveller on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/25-seater-tempo-traveller-on-rent-pune.jpg",
  "description": "Hire 25 Seater Tempo Traveller on rent in Pune for weddings, corporate travel, outstation tours, picnics, airport transfers, and pilgrimages like Shirdi or Bhimashankar. Available in AC and non-AC variants at competitive per km pricing.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5471"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/25-seater-tempo-traveller-on-rent-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>25 Seater Tempo Traveller on Rent in Pune | AC & Non-AC | Samarth Travels</title>
  <meta 
    name="description" 
    content="Book a 25 Seater Tempo Traveller in Pune for group tours, corporate events, family outings, and pilgrimages like Shirdi, Bhimashankar & 5 Jyotirlinga. Affordable AC & Non-AC options available for Hadapsar, Kharadi, Pimpri Chinchwad & more." 
  />
  <meta 
    name="keywords" 
    content="25 Seater Tempo Traveller on Rent in Pune, Tempo Traveller 25 seater rent per km in Pune, Tempo Traveller 25 seater AC bus on rent Pune, Tempo Traveller 26 seater Non AC bus on rent in Pune, 26 bus on rent for wedding in Pune, 25 bus on rent Pimpri Chinchwad Pune, 25 Bus on rent in Pune for Picnics, Pune to Goa 25 Seater Bus fare, 26 seater tempo traveller on rent in Pune, 25 Seater bus on rent in Hadapsar Pune, Pune to Shirdi 25 Seater bus on Rent, Pune Airport to Shirdi 25 tem tempo traveller on rent, Pune to Bhimashankar 25 Seater Tempo Traveller, Pune to 5 Jyotirlinga Darshan Tempo Traveller on Rent, 25 seater tempo traveller on rent in Pune price, 25 seater tempo traveller on rent in Pimpri Chinchwad, Tempo Traveller on rent Pune, Tempo Traveller on rent Kharadi Pune, Tempo Traveller on rent in Pune for event, Tempo Traveller on rent in Pune for Corporate" 
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>


            <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title text-center">{cardData.keyword}</h1>
                    </div>
                </div>
            </div>



            <section>
                <div className="container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keyword/53.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#322E77', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolorrr'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolorrr">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolorrr">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className='px-2 bg-foootr'>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Samarth Travels </h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">


                                                <FAQSection faqs={faqData} accordionId="drivingAccordion" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Testimonialskeyword
                                data={testimonials}
                                title="What Our Clients Are Saying"
                                subtitle="Customer Feedback"
                            />


                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                            {Images.map((e) => {
                                return (
                                    <div className="box1">
                                        <a
                                            href="./"
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt="img" />
                                            </div>
                                            <div className="b2">
                                                {" "}
                                                <a href="./" className='px-3'>{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #FF8F1F',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#FF8F1F' }}>
                                            <h4 className=" lead fw-semibold whitt textt-dark">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+919860256019" className="d-block  text-white">+91 9860256019</a>
                                                <a href="tel:+919527500025" className="d-block  text-white">+91 9527500025</a>


                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#FF8F1F' }}>
                                                <h4 className=" fw-semibold lead whitt textt-dark">Email</h4>
                                                <a href="mailto:samarthtravels9119@gmail.com" className=" text-white d-block">
                                                    samarthtravels9119@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#FF8F1F' }}>
                                                <h4 className=" fw-semibold lead whitt textt-dark">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Samarth Travels <br />
                                                        Flat no 201, Juhi Building, Suyash Shrushti Society, Tukai darshan Hadapsar, Pune- 411028
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Twentyfiveseatetempotraveller;