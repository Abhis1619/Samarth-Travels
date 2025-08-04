
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Thirtitwiseaterbus() {



    const cardData =
    {
        keyword: '  32 Seater Bus Rent in Pune',
        heading: 'Samarth Travels:   32 Seater Bus Rent in Pune',
        headingDescription: 'Samarth Travels offers 32 Seater Bus on rent in Pune, perfect for weddings, corporate events, school trips, and large group outings. Our spacious 32-seater buses come equipped with air-conditioning, push-back seats, and wide windows for a comfortable and enjoyable travel experience. With experienced drivers, transparent rental charges, and a focus on safety and reliability, Samarth Travels ensures a smooth and stress-free journey for every occasion.',

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
        "name": "32 Seater Bus Rent in Pune",
        "description": "Samarth Travels offers 32-seater buses on rent in Pune for various group travel needs. Ideal for school outings, family functions, or team tours, our buses feature comfortable seating, ample luggage space, and professional drivers for a safe and enjoyable journey."
    },
    {
        "name": "32 Seater Bus on Rent in Pune",
        "description": "Looking to rent a 32-seater bus in Pune? Our services provide clean, well-maintained buses equipped with air-conditioning, push-back seats, and ample legroom — perfect for weddings, corporate events, and long-distance tours from Pune."
    },
    {
        "name": "32 Seater Bus Price in Pune",
        "description": "Our 32-seater bus rental pricing in Pune is transparent and affordable. Choose from per km rates or full-day packages. Contact us for customized pricing based on destination, duration, and type of service (AC/Non-AC)."
    },
    {
        "name": "32 Seater Bus on Hire",
        "description": "Hire a 32-seater bus for your next group trip in Pune. Whether it’s a religious tour, corporate transfer, or school picnic, Samarth Travels provides reliable vehicles with experienced drivers and on-time service."
    },
    {
        "name": "32 Seater Bus on Hire for Wedding in Pune",
        "description": "Make guest transportation hassle-free during weddings with our 32-seater bus hire services in Pune. Spacious, elegant, and comfortable, these buses ensure your wedding attendees travel together smoothly between venues."
    },
    {
        "name": "32 Seater Bus on Rent for Marriage",
        "description": "Planning a marriage ceremony? Rent our 32-seater buses to manage guest transfers. We provide both AC and non-AC buses suitable for pre-wedding events, baraat processions, and reception travel."
    },
    {
        "name": "32 Seater Bus on Rent for Corporate Events",
        "description": "For business meetings, conferences, or employee group transfers, rent a 32-seater bus with Samarth Travels. Our corporate bus rental includes punctual service, AC comfort, and courteous drivers for a professional experience."
    },
    {
        "name": "32 Seater Bus on Rent for Mahabaleshwar",
        "description": "Explore the hills of Mahabaleshwar with our 32-seater bus rental service from Pune. Our vehicles are ideal for group vacations, school trips, and family tours with reclining seats and large windows for scenic views."
    },
    {
        "name": "32 Seater AC Bus on Hire",
        "description": "Travel in comfort with our 32-seater air-conditioned buses. Perfect for summer tours, weddings, or corporate events, these buses offer cooling, comfort, and cleanliness for long journeys."
    },
    {
        "name": "32 Seater Non AC Bus on Hire",
        "description": "Need a budget-friendly travel option? Choose our 32-seater non-AC buses, ideal for short-distance group travel or religious tours with minimal cost and reliable service."
    },
    {
        "name": "32 Seater Bus Hire for Ashtavinayak Darshan",
        "description": "Visit all eight sacred Ganpati temples with our 32-seater bus hire service for Ashtavinayak Darshan. With flexible travel plans, experienced drivers, and devotional atmosphere, your pilgrimage will be smooth and spiritual."
    },
    {
        "name": "32 Seater Bus Hire for 5 Jyotirlinga Darshan",
        "description": "Embark on a spiritual journey to the 5 Jyotirlingas in Maharashtra with Samarth Travels' 32-seater buses. Our buses are comfortable, clean, and well-equipped for long-distance travel with devotional groups."
    },
    {
        "name": "Pune to Konkan Darshan 32 Seater Bus on Rent",
        "description": "Explore the coastal beauty of Konkan with our 32-seater buses. Ideal for heritage tours, beach vacations, and Konkan Darshan packages from Pune, our service includes expert route planning and safe driving."
    },
    {
        "name": "32 Seater Bus on Rent in Hadapsar",
        "description": "Samarth Travels offers 32-seater bus rentals from Hadapsar, Pune. Whether it’s a pickup for a tour, school trip, or wedding, we provide door-to-door service for residents in Hadapsar and nearby areas."
    },
    {
        "name": "32 Seater Bus on Rent in Pimpri Chinchwad",
        "description": "Residents of Pimpri-Chinchwad can now rent 32-seater buses for all occasions including tours, office outings, and religious visits. Our service ensures punctuality, cleanliness, and hassle-free group transport."
    },
    {
        "name": "Pune to Bhimashankar 32 Seater Bus Hire",
        "description": "Book a 32-seater bus from Pune to Bhimashankar for your next religious trip. With early morning pickups, peaceful driving, and ample storage space, we make your darshan easy and comfortable."
    },
    {
        "name": "Pune to Ashtavinayak 32 Seater Bus on Rent",
        "description": "Complete your Ashtavinayak pilgrimage from Pune with our spacious 32-seater bus. Visit all eight Ganpati temples with your family or religious group in one seamless journey."
    },
    {
        "name": "32 Seater Bus on Rent in Kothrud",
        "description": "If you’re located in Kothrud, Pune, we provide prompt and affordable 32-seater bus rentals for all types of events and trips. Our fleet is available for both city and outstation travel."
    },
    {
        "name": "32 Seater Bus for Corporate Office",
        "description": "Streamline office employee transport or business events with our 32-seater buses. Ideal for daily office commute, seminars, and company offsites, these buses provide a professional group travel solution."
    },
    {
        "name": "32 Seater Bus for Outstation from Pune",
        "description": "Going outstation with a group? Our 32-seater bus rental service from Pune is perfect for weekend tours, pilgrimages, and long-distance family trips with comfortable seating and a reliable driver."
    },
    {
        "name": "32 Seater Bus Rental Services in Pune",
        "description": "Samarth Travels offers complete 32-seater bus rental solutions in Pune. Whether it’s weddings, corporate events, religious tours, or leisure travel, our services are trusted, punctual, and competitively priced."
    }
],
"tableData": [
    ["32 Seater Bus Rent in Pune", "32 Seater Bus on Rent in Pune"],
    ["32 Seater Bus Price in Pune", "32 Seater Bus on Hire"],
    ["32 Seater Bus on Hire for Wedding in Pune", "32 Seater Bus on Rent for Marriage"],
    ["32 Seater Bus on Rent for Corporate Events", "32 Seater Bus on Rent for Mahabaleshwar"],
    ["32 Seater AC Bus on Hire", "32 Seater Non AC Bus on Hire"],
    ["32 Seater Bus Hire for Ashtavinayak Darshan", "32 Seater Bus Hire for 5 Jyotirlinga Darshan"],
    ["Pune to Konkan Darshan 32 Seater Bus on Rent", "32 Seater Bus on Rent in Hadapsar"],
    ["32 Seater Bus on Rent in Pimpri Chinchwad", "Pune to Bhimashankar 32 Seater Bus Hire"],
    ["Pune to Ashtavinayak 32 Seater Bus on Rent", "32 Seater Bus on Rent in Kothrud"],
    ["32 Seater Bus for Corporate Office", "32 Seater Bus for Outstation from Pune"],
    ["32 Seater Bus Rental Services in Pune", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable 32-Seater Bus Hire in Pune for Group Travel",
        "WhyChoosedescription": "We provide trusted 32-seater bus rental services in Pune, ideal for corporate outings, school trips, family gatherings, or group events. Our buses ensure comfortable, timely, and safe transportation for your group, making the journey smooth and enjoyable."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable 32-Seater Buses for Your Group",
        "WhyChoosedescription": "Our 32-seater buses offer ample space for passengers, with comfortable seating, air-conditioning, and generous legroom. These buses are designed to provide a pleasant travel experience, whether it's a short trip or a long-distance journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers for Safe Travel",
        "WhyChoosedescription": "Our drivers are professional, well-trained, and experienced in handling group transportation. They prioritize safety, punctuality, and comfort, ensuring your group reaches the destination smoothly and on time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 32-Seater Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for 32-seater bus rentals in Pune, with no hidden charges. Our flexible rental packages ensure you get the best value for your group travel, whether you need the bus for a few hours or a full day."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Scheduling",
        "WhyChoosedescription": "Our 32-seater buses are available 24/7, allowing you to schedule your travel at any time. Whether you need early morning transportation or a late-night return, we provide reliable service to fit your group's schedule."
    },
    {
        "WhyChooseheading": "Simple Booking and Real-Time Updates for Smooth Coordination",
        "WhyChoosedescription": "Booking a 32-seater bus is easy and quick through our website or customer care. Once your booking is confirmed, you'll receive real-time tracking updates, driver contact details, and arrival notifications, ensuring seamless coordination for your trip."
    },
    {
        "WhyChooseheading": "Well-Maintained and Sanitized Buses for Safety and Hygiene",
        "WhyChoosedescription": "We prioritize the cleanliness and safety of our buses. All our 32-seater buses are thoroughly cleaned and sanitized before each trip to provide a hygienic and comfortable environment for your group."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenient Booking",
        "WhyChoosedescription": "We offer a variety of payment methods including UPI, credit/debit cards, digital wallets, and cash, making it convenient and secure for you to complete your 32-seater bus rental booking."
    }
]
















    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a 32-seater bus in Pune with Samarth Travels?',
        answer: 'Renting a 32-seater bus in Pune is easy with Samarth Travels. You can book directly through our website or contact our customer service. Just share your travel details such as the date, number of passengers, and route, and we’ll take care of the rest.',
    },
    {
        id: 2,
        question: 'What are the features of the 32-seater bus offered by Samarth Travels?',
        answer: 'Our 32-seater buses come with comfortable pushback seats, air conditioning, ample legroom, and large luggage compartments. These buses are perfect for group travel, corporate events, school trips, or weddings.',
    },
    {
        id: 3,
        question: 'What are the rental charges for a 32-seater bus in Pune?',
        answer: 'Rental rates for a 32-seater bus in Pune typically start from ₹40/km. We also offer half-day, full-day, and outstation packages depending on your travel requirements.',
    },
    {
        id: 4,
        question: 'Is the 32-seater bus suitable for long-distance travel?',
        answer: 'Yes, the 32-seater bus is ideal for long-distance journeys. With its spacious interiors, AC comfort, and smooth suspension, it ensures a relaxing ride even on extended trips.',
    },
    {
        id: 5,
        question: 'Can I customize the pickup and drop-off locations?',
        answer: 'Absolutely! Samarth Travels provides full flexibility to customize your pickup and drop-off points based on your convenience. Whether it is from your home, office, or event venue, we’ve got it covered.',
    },
    {
        id: 6,
        question: 'Does the 32-seater bus rental include a driver and fuel?',
        answer: 'Yes, the rental includes a professional driver and fuel. Additional costs such as tolls, parking, or interstate permits will be communicated in advance.',
    },
    {
        id: 7,
        question: 'Is customer support available during the trip?',
        answer: 'Yes, we offer 24/7 customer support for all bookings. Whether it’s a last-minute change or assistance during the trip, our team is always available to help.',
    },
];

const testimonials = [
    {
        name: 'Mr. Nilesh Patankar',
        role: 'Corporate Event Organizer',
        text: 'We rented a 32-seater bus from Samarth Travels for a company seminar. The bus arrived on time, was very clean, and the staff was professional. Everyone had a comfortable journey. Highly recommended!',
        image: '/img/testimonial/testi_bus_nilesh.jpg',
    },
    {
        name: 'Ms. Aarti Rao',
        role: 'School Administrator',
        text: 'We used a 32-seater bus for a school picnic from Pune to Lonavala. The students were safe and comfortable, and the driver was very cooperative. Excellent service by Samarth Travels!',
        image: '/img/testimonial/testi_bus_aarti.jpg',
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
  "name": "32 Seater Bus Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/32-seater-bus-on-rent-in-pune.jpg",
  "description": "Book 32 Seater Bus on Rent in Pune with Samarth Travels. Ideal for weddings, corporate events, sightseeing, and outstation trips like Mahabaleshwar, Ashtavinayak Darshan, and Bhimashankar. AC and Non-AC bus options available at affordable rates.",
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
    "price": "7200",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/32-seater-bus-on-rent-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>32 Seater Bus Rent in Pune | AC & Non-AC | Wedding & Outstation Travel</title>
  <meta 
    name="description" 
    content="Rent 32 Seater Bus in Pune for weddings, corporate events, group travel, and outstation tours like Mahabaleshwar, Bhimashankar, and Ashtavinayak. Affordable AC & Non-AC bus rental services by Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="32 seater bus rent in Pune, 32 seater bus on rent in Pune, 32 seater bus price in Pune, 32 seater bus on hire, 32 seater bus on rent for marriage, 32 seater bus for corporate events in Pune, 32 seater bus for Mahabaleshwar tour, 32 seater AC bus on hire, 32 seater non-AC bus Pune, 32 seater bus for Ashtavinayak darshan, 5 Jyotirlinga bus tour, Pune to Konkan 32 seater bus rental, 32 seater bus in Hadapsar, 32 seater bus Pimpri Chinchwad, Kothrud 32 seater bus rental, 32 seater bus for outstation from Pune, Samarth Travels 32 seater bus rental Pune" 
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
                            <img src='/images/keyword/57.jpg' alt='img' />
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

export default Thirtitwiseaterbus;