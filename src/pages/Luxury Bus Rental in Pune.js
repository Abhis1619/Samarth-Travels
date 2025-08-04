
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Luxurybusrentalsinpune() {



    const cardData =
    {
        keyword: 'Luxury Bus Rental in Pune',
        heading: 'Samarth Travels: Luxury Bus Rental in Pune',
        headingDescription: 'Samarth Travels offers luxury bus rental in Pune, ideal for weddings, corporate events, VIP travel, and premium group tours. Our fleet of luxury AC buses is equipped with plush push-back seats, mood lighting, audio-video entertainment systems, and spacious interiors to ensure a first-class travel experience. With trained chauffeurs, flexible booking options, and transparent pricing, Samarth Travels provides safe, stylish, and comfortable luxury bus rental services across Pune.',

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
      "name": "Luxury Bus Rental in Pimpri Chinchwad",
      "description": "Rent a luxury bus in Pimpri Chinchwad for your group travel. We offer premium buses for weddings, corporate events, tours, and picnics."
    },
    {
      "name": "Luxury Bus Rental in Kharadi",
      "description": "Looking for a luxury bus rental in Kharadi? Samarth Travels offers comfortable and luxurious buses for all types of events and tours."
    },
    {
      "name": "Luxury Bus On Rent in Yerawada",
      "description": "Rent a luxury bus for your group from Yerawada with Samarth Travels. Our buses provide premium comfort for weddings, picnics, and corporate outings."
    },
    {
      "name": "Samarth Travels Bus Hire Service Pune",
      "description": "Samarth Travels provides top-notch bus hire services in Pune for all events and destinations. We offer buses in various capacities and comfort levels."
    },
    {
      "name": "Samarth Travels",
      "description": "Your trusted travel partner in Pune for all bus rental needs. From picnics to corporate events, Samarth Travels offers the best bus services."
    },
    {
      "name": "Luxury Bus On Rent in Vishrantwadi, Pune",
      "description": "Looking for luxury bus rentals in Vishrantwadi? We provide luxurious buses that ensure a smooth and comfortable journey for any event or tour."
    },
    {
      "name": "14, 17, 20, 25 Seater Luxury Bus On Rent in Pune",
      "description": "Rent a luxury bus of your preferred size—14, 17, 20, or 25-seater—in Pune for your group travel. We offer premium buses for every occasion."
    },
    {
      "name": "32, 35, 40, 45 Seater Luxury Bus Hire in Pimpri Chinchwad",
      "description": "Choose from our fleet of luxury buses in Pimpri Chinchwad, ranging from 32 to 45 seats, for your group tours, weddings, or corporate events."
    },
    {
      "name": "Luxury Bus On Rent in Hadapsar Pune",
      "description": "Rent a luxury bus for your next event in Hadapsar, Pune. We offer a range of buses for group outings, weddings, picnics, and more."
    },
    {
      "name": "Luxury Bus on Rent for Picnic in Pune",
      "description": "Book a luxury bus for your picnic in Pune. Our luxury buses offer comfort and style for all your picnic and leisure trips."
    },
    {
      "name": "Mini Luxury Bus Hire in Pune",
      "description": "We provide mini luxury bus rentals in Pune for smaller groups. Enjoy a comfortable journey with premium features in our mini luxury buses."
    },
    {
      "name": "Non AC Bus Rental Service in Pune",
      "description": "We offer non-AC bus rentals for those who prefer a budget-friendly option for local and outstation travel. Rent a non-AC bus in Pune today."
    },
    {
      "name": "Non AC Bus for Hire for Outstation",
      "description": "Rent a non-AC bus for your outstation trips. We provide budget-friendly options for both small and large groups traveling outside Pune."
    },
    {
      "name": "Non AC Tempo Traveller on Rent Pune",
      "description": "Rent a non-AC tempo traveller in Pune for group outings, picnics, or corporate trips. Comfortable and affordable options available."
    },
    {
      "name": "Non AC Bus Hire on Rent in Pune",
      "description": "Book a non-AC bus in Pune for your travel needs. We offer affordable options for both local trips and long-distance travel."
    },
    {
      "name": "Non AC Mini Bus Hire on Rent in Pune",
      "description": "Rent a non-AC mini bus in Pune for small group tours or events. Our mini buses are ideal for family outings and corporate gatherings."
    },
    {
      "name": "Non AC Bus Hire for Picnic in Pune",
      "description": "Looking for a non-AC bus for your picnic in Pune? We offer cost-effective options for group trips and leisure travel."
    },
    {
      "name": "Best Bus Rental Service in Pune",
      "description": "Samarth Travels offers the best bus rental services in Pune for any occasion. Whether it’s a wedding, corporate event, or tour, we have you covered."
    },
    {
      "name": "32, 35, 40, 45 Seater Local and Outstation Bus",
      "description": "Choose from our fleet of 32, 35, 40, and 45-seater buses for local or outstation travel. We provide reliable buses for all types of trips in and around Pune."
    },
    {
      "name": "14, 17, 20, 25 Seater Bus on Rent Pune",
      "description": "We offer 14, 17, 20, and 25-seater buses for rent in Pune. Whether for a corporate outing, family event, or school trip, we have the perfect bus for you."
    }
  ],
  "tableData": [
    ["Luxury Bus Rental in Pimpri Chinchwad", "Luxury Bus Rental in Kharadi"],
    ["Luxury Bus On Rent in Yerawada", "Samarth Travels Bus Hire Service Pune"],
    ["Samarth Travels", "Luxury Bus On Rent in Vishrantwadi, Pune"],
    ["14, 17, 20, 25 Seater Luxury Bus On Rent in Pune", "32, 35, 40, 45 Seater Luxury Bus Hire in Pimpri Chinchwad"],
    ["Luxury Bus On Rent in Hadapsar Pune", "Luxury Bus on Rent for Picnic in Pune"],
    ["Mini Luxury Bus Hire in Pune", "Non AC Bus Rental Service in Pune"],
    ["Non AC Bus for Hire for Outstation", "Non AC Tempo Traveller on Rent Pune"],
    ["Non AC Bus Hire on Rent in Pune", "Non AC Mini Bus Hire on Rent in Pune"],
    ["Non AC Bus Hire for Picnic in Pune", "Best Bus Rental Service in Pune"],
    ["32, 35, 40, 45 Seater Local and Outstation Bus", "14, 17, 20, 25 Seater Bus on Rent Pune"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Premium Luxury Bus Rental Services in Pune",
        "WhyChoosedescription": "We offer premium luxury bus rental services in Pune for those looking to travel in style and comfort. Whether it’s for a corporate event, wedding, or group tour, our luxury buses provide a smooth, comfortable, and memorable travel experience."
    },
    {
        "WhyChooseheading": "State-of-the-Art Luxury Buses with Modern Amenities",
        "WhyChoosedescription": "Our fleet includes high-end luxury buses equipped with modern amenities like plush leather seats, Wi-Fi, ambient lighting, air-conditioning, audio/video entertainment systems, and refreshment facilities to ensure a comfortable and premium travel experience."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Seating for Groups",
        "WhyChoosedescription": "Our luxury buses offer extra-wide and comfortable seating arrangements with ample legroom, ensuring that your group enjoys a relaxing journey, no matter the distance. Perfect for long trips, corporate events, weddings, and more."
    },
    {
        "WhyChooseheading": "Professional Drivers and Exceptional Service",
        "WhyChoosedescription": "Our highly skilled and courteous drivers provide top-notch service, ensuring safe, timely, and smooth travel. Their professionalism adds to the luxury experience, ensuring that your journey is free of worries."
    },
    {
        "WhyChooseheading": "Luxury Travel at Competitive Prices",
        "WhyChoosedescription": "We offer competitive pricing for our luxury bus rentals, ensuring that you get the best value for a high-end service. Whether it’s for a few hours or a full day, our pricing is transparent with no hidden fees."
    },
    {
        "WhyChooseheading": "Customizable Packages for Corporate and Special Events",
        "WhyChoosedescription": "We offer customized luxury bus rental packages for corporate events, weddings, and other special occasions. Let us know your requirements, and we’ll design a travel solution that suits your event perfectly."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Schedules",
        "WhyChoosedescription": "Luxury travel is available 24/7 with us. Whether you're planning a late-night event or an early morning departure, we are ready to accommodate your needs and ensure that your group arrives in style and on time."
    },
    {
        "WhyChooseheading": "Easy Booking with Real-Time Updates",
        "WhyChoosedescription": "Booking your luxury bus is simple and efficient via our online platform or customer support. After booking, you’ll receive real-time updates on your bus's location, driver details, and arrival times for seamless coordination."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Luxury Buses",
        "WhyChoosedescription": "Our luxury buses are thoroughly sanitized before each journey and regularly maintained to ensure they meet the highest standards of cleanliness, safety, and comfort, providing you with peace of mind during your trip."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenient Transactions",
        "WhyChoosedescription": "We offer various secure payment options including UPI, credit/debit cards, digital wallets, and cash to make your booking process easy and hassle-free."
    }
]




























    }

const faqData = [
    {
        id: 1,
        question: 'How can I book a luxury bus rental in Pune with Samarth Travels?',
        answer: 'Booking a luxury bus rental with Samarth Travels is simple. You can contact us through our website or phone. Provide your trip details, including the destination, number of passengers, and desired dates, and we’ll arrange a luxury bus that meets your needs for comfort and style.',
    },
    {
        id: 2,
        question: 'What types of luxury buses are available for rent in Pune?',
        answer: 'Samarth Travels offers a variety of luxury buses for rent in Pune, including 32-seater, 40-seater, and 50-seater buses. Our luxury buses are equipped with premium features like plush seating, air conditioning, entertainment systems, and more, ensuring a comfortable and enjoyable ride.',
    },
    {
        id: 3,
        question: 'Are the luxury buses suitable for long-distance travel?',
        answer: 'Yes, our luxury buses are ideal for long-distance travel. They come with reclining seats, AC, Wi-Fi, reading lights, USB charging ports, and ample legroom, making them perfect for both local and outstation journeys.',
    },
    {
        id: 4,
        question: 'What are the rental charges for luxury buses in Pune?',
        answer: 'The rental charges for luxury buses depend on the bus type, duration, and distance traveled. For local bookings, prices typically start at ₹40/km for luxury buses. Outstation trips may have additional charges depending on the distance. Please contact us for a customized quote based on your needs.',
    },
    {
        id: 5,
        question: 'Does the rental include a driver and fuel?',
        answer: 'Yes, all luxury bus rentals with Samarth Travels include a professional driver and fuel costs. Additional charges for tolls, parking fees, and permits will be shared with you upfront to ensure transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations for my luxury bus rental?',
        answer: 'Absolutely! We offer flexible options for customizing pickup and drop-off points to fit your travel schedule and convenience. Whether you need to be picked up from your office, home, or hotel, we will ensure your luxury bus is ready on time.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for luxury bus rentals?',
        answer: 'Yes, Samarth Travels provides 24/7 customer support for all luxury bus rentals. Whether you need assistance with booking, changes to your itinerary, or any other inquiries, our team is available around the clock to ensure your journey goes smoothly.',
    },
];

const testimonials = [
    {
        name: 'Mr. Pradeep Sharma',
        role: 'Corporate Executive',
        text: 'We rented a 40-seater luxury bus for our corporate retreat in Lonavala. The bus had top-notch amenities, including comfortable seats, Wi-Fi, and entertainment systems. The journey was smooth and relaxing. Highly recommend Samarth Travels for any luxury travel needs!',
        image: '/img/testimonial/testi_luxury_bus_pradeep.jpg',
    },
    {
        name: 'Mrs. Suman Desai',
        role: 'Wedding Planner',
        text: 'I booked a 32-seater luxury bus for a wedding guest transport. The bus was elegant, well-maintained, and the service was exceptional. It made our wedding transportation a luxurious experience. I will definitely use Samarth Travels again for future events!',
        image: '/img/testimonial/testi_luxury_bus_suman.jpg',
    },
    {
        name: 'Mr. Rahul Mehta',
        role: 'Event Organizer',
        text: 'For a high-profile event in Pune, I hired a 50-seater luxury bus from Samarth Travels. The bus was fully equipped with premium features, and the ride was smooth and comfortable for our VIP guests. Excellent service and highly professional!',
        image: '/img/testimonial/testi_luxury_bus_rahul.jpg',
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
  "name": "Luxury Bus Rental in Pune",
  "image": "https://samarthtravels.com/assets/images/luxury-bus-rental-pune.jpg", // Replace with the correct image URL
  "description": "Rent luxury buses in Pune for corporate events, weddings, picnics, and outstation trips. Available in 14, 17, 20, 25, 32, 35, 40, and 45-seater options. AC & Non-AC buses for all occasions. Best rental services by Samarth Travels.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "6200"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7800",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/luxury-bus-rental-pune" // Replace with the actual page URL
  }
};





    return (
        <div>


<Helmet>
  <title>Luxury Bus Rental in Pune | Samarth Travels</title>
  <meta 
    name="description" 
    content="Hire luxury buses in Pune for corporate events, weddings, picnics, and outstation tours. Samarth Travels offers 14, 17, 20, 25, 32, 35, 40, and 45-seater buses at affordable prices. AC & Non-AC options available." 
  />
  <meta 
    name="keywords" 
    content="Luxury Bus Rental in Pimpri Chinchwad, Luxury bus rental in Kharadi, Luxury Bus On Rent in Yerawada, Samarth Travels Bus Hire Service Pune, Samarth Travels, Pune, Luxury Bus On Rent in Vishrantwadi, Pune, 14 17 20 25 Seater Luxury Bus On Rent Pune, 32 35 40 45 Seater Luxury bus Hire in pimpri Chinchwad, Luxury Bus On Rent in Hadapsar Pune, Luxury bus on rent for picnic in pune, Mini luxury bus Hire in Pune Non Ac Bus Rental Service in Pune, Non Ac bus for hire for Outstation, Non ac tempo traveller on rent Pune, Non Ac bus Hire on Rent in Pune, Non ac mini bus hire on rent in pune, non ac bus hire for picnic in pune, best bus rental service in Pune, 32 35 40 45 Seater Local and outstation Bus, 14 17 20 25 Seater bus on rent pune" 
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
                            <img src='/images/keyword/82.jpg' alt='img' />
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

export default Luxurybusrentalsinpune;