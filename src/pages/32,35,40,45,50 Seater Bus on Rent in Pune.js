
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Manysseater() {



    const cardData =
    {
        keyword: '32,35,40,45,50 Seater Bus on Rent in Pune',
        heading: 'Samarth Travels: 32,35,40,45,50 Seater Bus on Rent in Pune',
        headingDescription: 'Samarth Travels offers 32, 35, 40, 45, and 50 Seater Buses on rent in Pune, ideal for large group travel, corporate events, school and college trips, weddings, and outstation tours. Our fleet of well-maintained buses is equipped with air-conditioning, push-back seats, ample legroom, and spacious interiors to ensure a comfortable and hassle-free journey. With experienced drivers, flexible rental plans, and transparent pricing, Samarth Travels provides safe, reliable, and affordable bus rental services for all your travel needs in and around Pune.',

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
      "name": "32 Seater Bus Hire Near Me in Pune",
      "description": "Looking for a 32-seater bus for your trip? Rent a comfortable and spacious 32-seater bus in Pune for local and outstation travel."
    },
    {
      "name": "32 Seater Bus Hire for Outstation in Pune",
      "description": "Rent a 32-seater bus for outstation trips from Pune. Ideal for group travel, picnics, corporate outings, and more."
    },
    {
      "name": "Samarth Travels Bus Hire Service Pune",
      "description": "Samarth Travels offers reliable and affordable bus hire services in Pune, providing vehicles for all types of events and tours."
    },
    {
      "name": "Samarth Travels",
      "description": "Your trusted travel partner in Pune. We provide high-quality bus rental services for both local and outstation travel."
    },
    {
      "name": "32 Seater Bus Rate Per Km in Pune",
      "description": "Get the best rates for renting a 32-seater bus per kilometer in Pune. Contact us for competitive pricing and reliable services."
    },
    {
      "name": "35 Seater Bus on Rent in Pune",
      "description": "Looking for a 35-seater bus on rent in Pune? We offer well-maintained buses for events, corporate outings, picnics, and more."
    },
    {
      "name": "35 Seater Tourist Bus Near Me in Pune",
      "description": "Rent a 35-seater tourist bus near you in Pune for group travel, sightseeing, or corporate trips."
    },
    {
      "name": "35 Seater Tourist Bus For Outstation in Pune",
      "description": "Rent a 35-seater tourist bus for your outstation trip. We provide comfortable travel options for long-distance journeys."
    },
    {
      "name": "35 Seater Bus for Corporate Office in Pune",
      "description": "Book a 35-seater bus for your corporate office events or outings in Pune. Comfortable seating and professional service guaranteed."
    },
    {
      "name": "35 Seater Bus for Corporate Outing in Pune",
      "description": "Looking for a 35-seater bus for a corporate outing? Rent a spacious and comfortable bus in Pune for your next team-building event."
    },
    {
      "name": "40 Seater Tourist Bus Near Me in Pune",
      "description": "Rent a 40-seater tourist bus for your group trip. Available for both local and outstation travel from Pune."
    },
    {
      "name": "40 Seater Bus Rent Per Km in Pune",
      "description": "Get the best per-kilometer rates for a 40-seater bus rental in Pune. Perfect for group tours, events, and more."
    },
    {
      "name": "40 Seater Bus on Rent in Pune",
      "description": "Book a 40-seater bus on rent for your next trip in Pune. Ideal for family outings, corporate events, and school trips."
    },
    {
      "name": "40 Seater Bus on Rent in Pune for Wedding",
      "description": "Rent a 40-seater bus for your wedding events in Pune. Spacious and comfortable, with options for both local and outstation travel."
    },
    {
      "name": "45 Seater Bus Near Me for Rent",
      "description": "Find a 45-seater bus near you for rent in Pune. We offer buses for weddings, school trips, corporate outings, and more."
    },
    {
      "name": "45 Seater Bus for School Trip",
      "description": "Rent a 45-seater bus for your school trip in Pune. Safe, comfortable, and reliable transport for large student groups."
    },
    {
      "name": "45 Seater Bus Price Per Km in Pune",
      "description": "Get affordable rates for a 45-seater bus rental per kilometer in Pune. Ideal for family trips, school excursions, and corporate events."
    },
    {
      "name": "50 Seater Bus Rental Services in Pune",
      "description": "Looking for a 50-seater bus for your group? We offer comfortable and reliable 50-seater buses for various events and tours in Pune."
    },
    {
      "name": "50 Seater Bus for Corporate Outing Near Me",
      "description": "Rent a 50-seater bus for your corporate outing in Pune. Spacious seating and professional service for your team-building events."
    },
    {
      "name": "50 Seater Bus Hire in Pune",
      "description": "Book a 50-seater bus for your event in Pune. Whether for a corporate event, wedding, or family trip, we have the perfect bus for you."
    },
    {
      "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Pune for Family",
      "description": "Rent a bus of your preferred size—32, 35, 40, 45, or 50-seater—for family outings, picnics, or group trips from Pune."
    },
    {
      "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Pimpri Chinchwad",
      "description": "Book buses ranging from 32 to 50-seaters in Pimpri Chinchwad for your family, school, or corporate events."
    },
    {
      "name": "32, 35, 40, 45, 50 Seater Bus for Outstation Trip",
      "description": "Rent a bus for your outstation trip from Pune. We offer 32, 35, 40, 45, and 50-seater buses for long-distance travel."
    },
    {
      "name": "32, 35, 40, 45, 50 Seater Bus for Corporate Trip",
      "description": "Rent a large bus for your corporate trip in Pune. We offer buses from 32 to 50 seats for group travel, team-building events, and more."
    }
  ],
  "tableData": [
    ["32 Seater Bus Hire Near Me in Pune", "32 Seater Bus Hire for Outstation in Pune"],
    ["Samarth Travels Bus Hire Service Pune", "Samarth Travels"],
    ["32 Seater Bus Rate Per Km in Pune", "35 Seater Bus on Rent in Pune"],
    ["35 Seater Tourist Bus Near Me in Pune", "35 Seater Tourist Bus For Outstation in Pune"],
    ["35 Seater Bus for Corporate Office in Pune", "35 Seater Bus for Corporate Outing in Pune"],
    ["40 Seater Tourist Bus Near Me in Pune", "40 Seater Bus Rent Per Km in Pune"],
    ["40 Seater Bus on Rent in Pune", "40 Seater Bus on Rent in Pune for Wedding"],
    ["45 Seater Bus Near Me for Rent", "45 Seater Bus for School Trip"],
    ["45 Seater Bus Price Per Km in Pune", "50 Seater Bus Rental Services in Pune"],
    ["50 Seater Bus for Corporate Outing Near Me", "50 Seater Bus Hire in Pune"],
    ["32, 35, 40, 45, 50 Seater Bus on Rent in Pune for Family", "32, 35, 40, 45, 50 Seater Bus on Rent in Pimpri Chinchwad"],
    ["32, 35, 40, 45, 50 Seater Bus for Outstation Trip", "32, 35, 40, 45, 50 Seater Bus for Corporate Trip"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Wide Range of Bus Sizes Available in Pune",
        "WhyChoosedescription": "We offer a variety of bus sizes for every need, including 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater buses. Whether you're planning a corporate event, school trip, or group tour, we have the perfect size for your group."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses for Group Travel",
        "WhyChoosedescription": "Our buses are equipped with comfortable seating, air-conditioning, and ample legroom, ensuring that your group enjoys a pleasant journey. From short trips to long-distance travel, our buses provide a smooth and enjoyable ride."
    },
    {
        "WhyChooseheading": "Ideal for Large Groups and Events",
        "WhyChoosedescription": "Our larger buses (32-50 seater) are perfect for large groups attending events, corporate functions, school outings, or destination weddings. With multiple options, we can accommodate groups of various sizes while ensuring comfort and convenience."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Timely Travel",
        "WhyChoosedescription": "Our experienced, well-trained drivers ensure safe, punctual, and smooth travel. They are familiar with all major routes in Pune and surrounding areas, providing a hassle-free travel experience for your group."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for All Bus Sizes",
        "WhyChoosedescription": "We offer competitive and transparent pricing for our buses, regardless of size. Whether you need the bus for a few hours or an entire day, we provide flexible packages tailored to your needs, with no hidden fees."
    },
    {
        "WhyChooseheading": "24/7 Availability to Suit Your Event Schedule",
        "WhyChoosedescription": "We offer 24/7 bus rental services to meet your scheduling needs. Whether you need a bus for an early morning event or a late-night journey, we are ready to accommodate your group's travel needs."
    },
    {
        "WhyChooseheading": "Simple Booking Process with Real-Time Updates",
        "WhyChoosedescription": "Booking your bus rental is quick and easy through our website or customer support. Once confirmed, you’ll receive real-time updates, including driver contact details, bus location tracking, and arrival times for seamless event coordination."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "We prioritize cleanliness and safety. All our buses are thoroughly cleaned, sanitized, and regularly maintained to provide a hygienic and safe travel environment for your group."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "We offer flexible payment options such as UPI, credit/debit cards, digital wallets, and cash, ensuring that you can easily complete your booking with a method that suits you."
    }
]





























    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a 32, 35, 40, 45, or 50 seater bus in Pune with Samarth Travels?',
        answer: 'Renting a 32, 35, 40, 45, or 50-seater bus with Samarth Travels is easy. You can book via our website or by contacting us directly. Provide your trip details, including the number of passengers, event type, and travel dates, and we will ensure the perfect bus is ready for your group.',
    },
    {
        id: 2,
        question: 'What are the available bus types for rent in Pune?',
        answer: 'We offer a variety of buses, including 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater options. Our buses come in both AC and Non-AC options, equipped with comfortable seating, ample luggage space, and modern amenities to suit your needs.',
    },
    {
        id: 3,
        question: 'Are the buses equipped for both short and long-distance travel?',
        answer: 'Yes, our buses are perfect for both short and long-distance travel. Whether you’re going on a local outing or an outstation trip, our buses are designed to ensure a comfortable journey, with AC, reclining seats, ample legroom, and more.',
    },
    {
        id: 4,
        question: 'What are the rental charges for the 32, 35, 40, 45, and 50-seater buses?',
        answer: 'Rental charges depend on the bus size, duration, and distance. For local travel, charges typically start from ₹30/km for Non-AC buses and ₹35/km for AC buses. Outstation trips are priced per day with minimum distance usage. Please contact us for a personalized quote.',
    },
    {
        id: 5,
        question: 'Does the bus rental include a driver and fuel?',
        answer: 'Yes, the rental fee includes a professional driver and fuel costs. Additional charges for tolls, parking, or permits may apply, but these will be communicated upfront for transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations for the bus rental?',
        answer: 'Absolutely! You can customize the pickup and drop-off locations according to your preferences. We ensure a smooth and flexible travel experience by adapting to your schedule and convenience.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for bus rentals?',
        answer: 'Yes, Samarth Travels offers 24/7 customer support for all bus rentals. Whether you need help with bookings, changes to your itinerary, or assistance during your trip, our team is always ready to assist you.',
    },
];

const testimonials = [
    {
        name: 'Mr. Deepak Patel',
        role: 'Corporate Manager',
        text: 'We rented a 45-seater AC bus from Samarth Travels for our company’s team outing to Alibaug. The bus was spacious, clean, and well-maintained, and the driver was very professional. Everyone had a comfortable ride, and the service was excellent!',
        image: '/img/testimonial/testi_bus_teamouting_deepak.jpg',
    },
    {
        name: 'Ms. Priya Reddy',
        role: 'Event Coordinator',
        text: 'For a wedding event, I booked a 40-seater non-AC bus from Samarth Travels. The bus was perfect for transporting guests between venues. It was clean, well-organized, and punctual. Highly recommend for event transportation!',
        image: '/img/testimonial/testi_bus_wedding_priya.jpg',
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
  "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/32-35-40-45-50-seater-bus-rent-pune.jpg", // Replace with the correct image URL
  "description": "Rent 32, 35, 40, 45, or 50-seater buses in Pune for corporate trips, weddings, outstation tours, family vacations, and more. Samarth Travels offers affordable and reliable bus rental services across Pune and Pimpri Chinchwad.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5678"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "9500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/32-35-40-45-50-seater-bus-on-rent-pune" // Replace with the actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>32, 35, 40, 45, 50 Seater Bus on Rent in Pune | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent 32, 35, 40, 45, or 50-seater buses in Pune for family outings, corporate trips, weddings, and outstation tours. Affordable and reliable bus rental services by Samarth Travels. Available in Pune and Pimpri Chinchwad." 
  />
  <meta 
    name="keywords" 
    content="32 Seater bus hire near me in Pune, 32 Seater Bus Hire for Outstation in Pune, Samarth Travels Bus Hire Service Pune, Samarth Travels, 32 Seater Bus Rate Per Km in Pune, 35 seater bus on rent in pune, 35 seater tourist bus near me in Pune, 35 Seater Tourist Bus For Outstation in Pune, 35 seater bus for corporate office in pune, 35 seater bus for corporate outing in pune, 40 Seater Tourist Bus Near me Pune, 40 Seater Bus Rent per km in Pune, 40 seater bus on rent in pune, 40 Seater bus on rent in pune for Wedding, 45 Seater bus near me for Rent, 45 seater bus for school trip, 45 seater bus price per km in Pune, 50 Seater Bus Rental Services in Pune, 50 seater bus for corporate outing near me, 50 seater Bus Hire in Pune, 32 35 40 45 50 seater bus on rent in pune for family, 32,35,40,45,50 Seater Bus on Rent in Pimpri chinchwad, 32 35 40 45 50 seater bus for outstation Trip, 32 35 40 45 50 seater bus for Corporate Trip" 
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
                            <img src='/images/keyword/83.jpg' alt='img' />
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

export default Manysseater;