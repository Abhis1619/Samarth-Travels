
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Luxurytempotraveller() {



    const cardData =
    {
        keyword: 'Luxury Tempo Traveller On Rent in Pune',
        heading: 'Samarth Travels:  Luxury Tempo Traveller On Rent in Pune',
        headingDescription: 'Samarth Travels offers Luxury Tempo Traveller on rent in Pune, ideal for weddings, VIP travel, corporate tours, and premium group outings. Our high-end Luxury Tempo Travellers feature plush interiors, air-conditioning, push-back leather seats, mood lighting, and entertainment systems to deliver a first-class travel experience. With professional chauffeurs, transparent pricing, and a commitment to excellence, Samarth Travels ensures a luxurious and comfortable journey every time.',

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
        "name": "Tempo Traveller On Rent in Pune",
        "description": "Samarth Travels offers comfortable and affordable Tempo Traveller rentals in Pune for all types of group travel. Whether you're planning a family trip, a corporate outing, or a local city tour, our well-maintained Tempo Travellers ensure a smooth and hassle-free journey."
    },
    {
        "name": "Tempo Traveller in Pune",
        "description": "Looking for a Tempo Traveller in Pune? Samarth Travels provides a range of seating options, including 13, 17, and 20-seaters, to suit your group’s needs. Our services include local sightseeing, airport transfers, outstation trips, and more, all with professional drivers."
    },
    {
        "name": "17 Seater Bus on Rent in Pune Price",
        "description": "Get competitive rates on 17-seater buses on rent in Pune. Ideal for weddings, corporate travel, or outstation family tours, our pricing is transparent and budget-friendly. Contact us to know the per km rate or get a custom quote based on your trip plan."
    },
    {
        "name": "17 Seater Tempo Traveller on Rent in Pune",
        "description": "For larger groups, rent a 17-seater Tempo Traveller from Samarth Travels in Pune. Spacious, air-conditioned, and perfect for long journeys, this vehicle is ideal for outstation trips, corporate events, and weekend getaways with friends or family."
    },
    {
        "name": "Traveller on Rent Pune",
        "description": "Samarth Travels provides reliable Traveller rentals in Pune for city tours, weddings, and group excursions. Our vehicles are clean, comfortable, and driven by experienced chauffeurs, ensuring your trip is stress-free from start to finish."
    },
    {
        "name": "Traveller Bus on Rent in Pune",
        "description": "Hire a Traveller bus in Pune for events, school trips, or corporate outings. Our buses are equipped with push-back seats, air-conditioning, and ample luggage space to make your journey safe and enjoyable."
    },
    {
        "name": "Tempo Traveller on Rent Pune to Outstation",
        "description": "Planning an outstation trip from Pune? Rent a Tempo Traveller for destinations like Goa, Shirdi, Mahabaleshwar, or Mumbai. Our vehicles are perfect for group travel with spacious seating and comfortable interiors designed for long-distance journeys."
    },
    {
        "name": "Tempo Traveller on Rent in Pune",
        "description": "Samarth Travels offers daily and hourly Tempo Traveller rentals across Pune for all types of events and travel needs. Book with us for weddings, family tours, or business trips, and experience the best in comfort and service."
    },
    {
        "name": "Pune to Shirdi Tempo Traveller Rate",
        "description": "Book a Tempo Traveller from Pune to Shirdi at competitive rates. Ideal for pilgrimage trips, our comfortable vehicles ensure a peaceful ride with timely service and experienced drivers familiar with the route."
    },
    {
        "name": "Tempo Traveller Hire in Pune",
        "description": "Hire a Tempo Traveller in Pune with Samarth Travels for full-day rentals, city tours, or outstation journeys. Choose from a variety of seating capacities and enjoy a clean, comfortable ride with courteous drivers and competitive pricing."
    },
    {
        "name": "Tempo Traveller on Rent in Hadapsar",
        "description": "Residents of Hadapsar can now enjoy easy Tempo Traveller rentals with Samarth Travels. Whether you’re heading to a picnic, wedding, or outstation trip, we provide punctual service and top-quality vehicles in your area."
    },
    {
        "name": "Tempo Traveller on Rent in Pune Rate Per KM",
        "description": "Samarth Travels offers Tempo Traveller rentals in Pune at affordable per kilometer rates. Our transparent pricing policy means no hidden costs — pay only for what you use. Contact us for custom quotes and package options."
    },
    {
        "name": "Tempo Traveller Rental Pune",
        "description": "Choose Samarth Travels for the best Tempo Traveller rental experience in Pune. With a range of seating options and flexible rental durations, we cater to every kind of group travel — be it local or long-distance."
    },
    {
        "name": "Pune to Mahabaleshwar bus Tempo Traveller",
        "description": "Travel comfortably from Pune to Mahabaleshwar by hiring a Tempo Traveller bus. Ideal for weekend trips or family vacations, our service includes experienced drivers, clean vehicles, and a relaxing travel experience."
    },
    {
        "name": "Pune to Goa Tempo Traveller on Rent",
        "description": "Planning a trip to Goa? Rent a Tempo Traveller from Pune for a scenic and relaxed journey. Our vehicles are perfect for group travel, equipped with air-conditioning, ample legroom, and experienced drivers to ensure a stress-free ride."
    },
    {
        "name": "Luxury Tempo Traveller on Rent in Pune",
        "description": "For a premium experience, book a luxury Tempo Traveller with Samarth Travels in Pune. Our luxury fleet includes high-end seating, LED screens, USB charging ports, and extra legroom, perfect for VIP transport or special events."
    },
    {
        "name": "Best Tempo Traveller on Rent in Pune",
        "description": "Samarth Travels is known for offering the best Tempo Travellers on rent in Pune. From short trips to extended journeys, our service quality, comfort, and value-for-money pricing make us a top choice for group travel."
    },
    {
        "name": "Best Tempo Traveller on Rent in Pimpri Chinchwad",
        "description": "If you're in Pimpri Chinchwad and looking for reliable Tempo Traveller rentals, Samarth Travels has you covered. We provide clean, comfortable, and affordable options for local and outstation travel needs."
    },
    {
        "name": "Best Priced Tempo Travellers in Pimpri-Chinchwad",
        "description": "Get the best deals on Tempo Travellers in Pimpri-Chinchwad with Samarth Travels. Whether you’re traveling for business, weddings, or a weekend trip, our pricing is competitive, and service is unmatched in quality and reliability."
    }
],
"tableData": [
    ["Tempo Traveller On Rent in Pune", "Tempo Traveller in Pune"],
    ["17 Seater Bus on Rent in Pune Price", "17 Seater Tempo Traveller on Rent in Pune"],
    ["Traveller on Rent Pune", "Traveller Bus on Rent in Pune"],
    ["Tempo Traveller on Rent Pune to Outstation", "Tempo Traveller on Rent in Pune"],
    ["Pune to Shirdi Tempo Traveller Rate", "Tempo Traveller Hire in Pune"],
    ["Tempo Traveller on Rent in Hadapsar", "Tempo Traveller on Rent in Pune Rate Per KM"],
    ["Tempo Traveller Rental Pune", "Pune to Mahabaleshwar bus Tempo Traveller"],
    ["Pune to Goa Tempo Traveller on Rent", "Luxury Tempo Traveller on Rent in Pune"],
    ["Best Tempo Traveller on Rent in Pune", "Best Tempo Traveller on Rent in Pimpri Chinchwad"],
    ["Best Priced Tempo Travellers in Pimpri-Chinchwad", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Luxury Tempo Traveller Hire in Pune for Comfortable Travel",
        "WhyChoosedescription": "We offer luxury Tempo Traveller rentals in Pune, ideal for those seeking a high-end travel experience. Whether for a family vacation, corporate retreat, or group event, our luxury Tempo Travellers provide unparalleled comfort and style for a memorable journey."
    },
    {
        "WhyChooseheading": "Spacious and Premium Interiors for Luxury Travel",
        "WhyChoosedescription": "Our luxury Tempo Travellers come with spacious, plush interiors designed for maximum comfort. With reclining leather seats, ample legroom, air-conditioning, and modern amenities, your group will enjoy a relaxing and luxurious travel experience, no matter the distance."
    },
    {
        "WhyChooseheading": "Professional and Courteous Drivers for VIP Travel Experience",
        "WhyChoosedescription": "Our professional, well-trained drivers are dedicated to providing a smooth and safe journey in our luxury Tempo Travellers. They are courteous, experienced, and knowledgeable, ensuring your travel is stress-free, timely, and comfortable."
    },
    {
        "WhyChooseheading": "Affordable Luxury with Transparent Pricing",
        "WhyChoosedescription": "We offer competitive and transparent pricing for our luxury Tempo Traveller rentals. There are no hidden charges, and our flexible rental packages ensure you get the best value for your luxury travel needs in Pune."
    },
    {
        "WhyChooseheading": "24/7 Availability for Convenient Scheduling",
        "WhyChoosedescription": "Our luxury Tempo Travellers are available 24/7, giving you the flexibility to plan your travel around your schedule. Whether it’s a last-minute trip or a pre-planned event, we ensure punctual and reliable service, no matter the time."
    },
    {
        "WhyChooseheading": "Seamless Booking Process and Real-Time Updates",
        "WhyChoosedescription": "Booking a luxury Tempo Traveller in Pune is easy and hassle-free through our website or customer support. Once confirmed, you will receive real-time updates, tracking details, and driver information to ensure smooth coordination and peace of mind during your trip."
    },
    {
        "WhyChooseheading": "Well-Maintained and Sanitized Luxury Vehicles for Safety and Hygiene",
        "WhyChoosedescription": "Our luxury Tempo Travellers are regularly maintained and thoroughly sanitized before every trip. We prioritize your safety and comfort, ensuring a hygienic and safe environment for all passengers during the journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy and Secure Booking",
        "WhyChoosedescription": "We offer a variety of payment options, including UPI, credit/debit cards, digital wallets, and cash, ensuring you can book your luxury Tempo Traveller securely and conveniently."
    }
]

























    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a luxury Tempo Traveller in Pune with Samarth Travels?',
        answer: 'Renting a luxury Tempo Traveller in Pune with Samarth Travels is simple. You can book through our website or by calling our customer support. Just provide your travel details, including the number of passengers, travel dates, and destination, and we will arrange a premium, well-equipped vehicle for your trip.',
    },
    {
        id: 2,
        question: 'What amenities are available in the luxury Tempo Traveller?',
        answer: 'Our luxury Tempo Traveller comes with top-of-the-line amenities such as plush leather seating, air conditioning, LED lighting, spacious interiors, a high-quality sound system, USB charging ports, and ample luggage space. It’s designed for comfort, style, and convenience, perfect for a premium travel experience.',
    },
    {
        id: 3,
        question: 'What are the rental charges for a luxury Tempo Traveller in Pune?',
        answer: 'The rental charges for a luxury Tempo Traveller in Pune start from ₹50/km, depending on the vehicle size and travel distance. We offer flexible pricing packages based on duration, distance, and specific travel requirements to ensure you get the best value for your money.',
    },
    {
        id: 4,
        question: 'Is the luxury Tempo Traveller suitable for long-distance travel?',
        answer: 'Yes, our luxury Tempo Traveller is perfect for long-distance journeys. It provides comfortable, plush seating and ample legroom, ensuring a relaxing and luxurious experience, even on extended trips.',
    },
    {
        id: 5,
        question: 'Can I customize the pickup and drop-off locations for my luxury Tempo Traveller rental?',
        answer: 'Absolutely! We allow complete flexibility in customizing your pickup and drop-off locations according to your travel schedule and convenience. Whether you need to be picked up from your home, office, or a specific venue, we will accommodate your needs for a seamless experience.',
    },
    {
        id: 6,
        question: 'Does the luxury Tempo Traveller rental include a driver and fuel?',
        answer: 'Yes, all luxury Tempo Traveller rentals from Samarth Travels include a professional driver and fuel. Additional charges for tolls, parking fees, or permits will be communicated upfront for complete transparency.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for luxury Tempo Traveller bookings?',
        answer: 'Yes, Samarth Travels offers 24/7 customer support for all luxury Tempo Traveller bookings. Our team is always available to assist with any booking inquiries, travel modifications, or any other needs that may arise during your trip.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sanjay Mehta',
        role: 'Business Executive',
        text: 'We rented a luxury Tempo Traveller for a corporate retreat from Pune to Lonavala. The vehicle was spacious, comfortable, and well-equipped with all modern amenities. The driver was professional, and the entire journey was smooth and enjoyable. Highly recommended!',
        image: '/img/testimonial/testi_luxury_tempo_sanjay.jpg',
    },
    {
        name: 'Ms. Neelam Agarwal',
        role: 'Wedding Planner',
        text: 'I booked a luxury Tempo Traveller for my client’s wedding transport in Pune. The vehicle was a hit with the guests—spacious, luxurious, and very comfortable. Samarth Travels provided excellent service, and I will definitely book again for future events.',
        image: '/img/testimonial/testi_luxury_tempo_neelam.jpg',
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
  "name": "Luxury Tempo Traveller On Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/luxury-tempo-traveller-on-rent-pune.jpg",
  "description": "Book luxury Tempo Traveller on rent in Pune with Samarth Travels. Ideal for outstation tours, family trips, corporate events, and group travel to destinations like Goa, Shirdi, Mahabaleshwar, and more. Choose from 17-seater AC Tempo Travellers at the best price.",
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
    "price": "4200",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/luxury-tempo-traveller-on-rent-pune"
  }
};





    return (
        <div>

<Helmet>
  <title>Luxury Tempo Traveller on Rent in Pune | 17-Seater AC Traveller | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a luxury Tempo Traveller in Pune for outstation tours, corporate trips, and family vacations. 17-seater AC Tempo Travellers available for destinations like Goa, Mahabaleshwar, and Shirdi. Affordable rental rates with Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="Tempo Traveller On Rent in Pune, Tempo traveller in Pune, 17 seater bus on rent in Pune price, 17 seater tempo traveller on rent in Pune, Traveller on rent Pune, Traveller bus on rent in Pune, Tempo Traveller on rent Pune to Outstation, Tempo traveller on rent in Pune, Pune to Shirdi tempo traveller rate, Tempo Traveller hire in Pune, Tempo Traveller on rent in Hadapsar, Tempo Traveller on rent in Pune rate per km, Tempo Traveller Rental Pune, Pune to Mahabaleshwar bus tempo traveller, Pune to Goa tempo traveller on Rent, Luxury Tempo Traveller on rent in Pune, Best Tempo Traveller on Rent in Pune, Best tempo traveller on rent in Pimpri Chinchwad, Best priced Tempo travellers in Pimpri-Chinchwad" 
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
                            <img src='/images/keyword/52.jpg' alt='img' />
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

export default Luxurytempotraveller;