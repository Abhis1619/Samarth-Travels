
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentalfortourpackage() {



    const cardData =
    {
        keyword: ' Bus Rental for Tour Packages',
        heading: 'Samarth Travels:  Bus Rental for Tour Packages',
        headingDescription: 'Samarth Travels offers bus rental for tour packages, perfect for group tours, family vacations, school excursions, and corporate retreats. Our fleet of 32-seater and 45-seater buses is equipped with air-conditioning, push-back seats, and spacious interiors to ensure a comfortable and enjoyable journey. With experienced drivers, customized travel plans, and transparent pricing, Samarth Travels provides seamless and memorable travel experiences for all types of tour packages.',

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
      "name": "Bus Rental for Tour Package Pune to Lonavala",
      "description": "Explore the scenic beauty of Lonavala with our bus rental services from Pune. We offer both AC and Non-AC buses, ensuring a comfortable journey to this popular hill station."
    },
    {
      "name": "Bus Rental for Tour Packages for Pune Lavasa City",
      "description": "Visit the picturesque Lavasa City with our reliable bus rental services. Enjoy the beauty of this planned hill city while traveling comfortably in our spacious and well-maintained buses."
    },
    {
      "name": "Bus Rental for Tour Package Pune to Mumbai",
      "description": "Travel from Pune to Mumbai in comfort with our bus rental services. Whether you're going for a business trip or leisure, we offer a range of buses, including AC and Non-AC options, to suit your needs."
    },
    {
      "name": "Bus Rental for Tour Package Pune to Nashik",
      "description": "Book a bus rental for your trip from Pune to Nashik, famous for its religious significance and vineyards. Our buses provide comfort and safety for all types of travelers, including group tours and pilgrimages."
    },
    {
      "name": "Bus on Rent for Pune to Tuljapur",
      "description": "Travel comfortably to the revered Tuljapur temple with our bus rental services. We offer spacious buses with AC and Non-AC options for pilgrims, ensuring a comfortable and smooth ride."
    },
    {
      "name": "Bus on Rent for Pune to Pandharpur",
      "description": "Visit Pandharpur, a holy town, with our bus rental services. Samarth Travels offers comfortable buses for your pilgrimage or group trips, ensuring a smooth and hassle-free experience."
    },
    {
      "name": "AC/Non AC Bus for Outstation",
      "description": "Whether for leisure or business, hire an AC or Non-AC bus for your outstation trips from Pune. Our buses are equipped with comfortable seating and experienced drivers for a safe journey."
    },
    {
      "name": "Bus Rental for Corporate Events in Pune",
      "description": "For corporate events, hire a bus from Samarth Travels to transport your employees. Our buses are ideal for conferences, team-building events, or company outings, providing comfort and reliability."
    },
    {
      "name": "Bus Rental for Ashtavinayak Tour from Pune",
      "description": "Experience the Ashtavinayak pilgrimage with our specialized bus rental services. We offer both AC and Non-AC buses, ensuring your group has a comfortable and enjoyable journey to all eight Ganesh temples."
    },
    {
      "name": "Bus Hire for Jyotirlinga Darshan From Pune",
      "description": "Hire a bus for a Jyotirlinga Darshan tour from Pune. Our buses are designed for pilgrimages, offering a smooth and comfortable journey to the twelve sacred Jyotirlinga temples."
    },
    {
      "name": "Mini Bus on Rent in Pune",
      "description": "Rent a mini bus for smaller group tours or family trips in Pune. Perfect for outings, local sightseeing, or smaller corporate events, our mini buses offer a cost-effective and comfortable solution."
    },
    {
      "name": "AC 17 Seater Bus on Rent in Pune",
      "description": "For small group tours or family trips, hire our 17-seater AC bus from Pune. Our buses are comfortable, well-maintained, and provide a smooth travel experience with ample space for your group."
    }
  ],
  "tableData": [
    ["Bus Rental for Tour Package Pune to Lonavala", "Bus Rental for Tour Packages for Pune Lavasa City"],
    ["Bus Rental for Tour Package Pune to Mumbai", "Bus Rental for Tour Package Pune to Nashik"],
    ["Bus on Rent for Pune to Tuljapur", "Bus on Rent for Pune to Pandharpur"],
    ["AC/Non AC Bus for Outstation", "Bus Rental for Corporate Events in Pune"],
    ["Bus Rental for Ashtavinayak Tour from Pune", "Bus Hire for Jyotirlinga Darshan From Pune"],
    ["Mini Bus on Rent in Pune", "AC 17 Seater Bus on Rent in Pune"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Rental Service for Tour Packages in Pune",
        "WhyChoosedescription": "We provide trusted and professional bus rental services for tour packages in Pune. Whether it’s a city tour, a weekend getaway, or a longer vacation, we ensure that your group travels comfortably and safely, with a hassle-free experience from start to finish."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses for All Tour Group Sizes",
        "WhyChoosedescription": "Our buses are designed to accommodate groups of all sizes, from small family tours to large group excursions. With air-conditioning, comfortable seating, and ample legroom, your passengers will enjoy a relaxed and pleasant journey throughout the tour."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Smooth and Safe Tour Experiences",
        "WhyChoosedescription": "Our drivers are experienced professionals who prioritize safety and comfort. They are knowledgeable about popular tourist destinations, ensuring smooth travel, timely arrivals, and safe navigation throughout your tour, providing peace of mind for your group."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Tour Package Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for bus rentals, ensuring no hidden charges. Our flexible packages are designed to suit your budget, providing an affordable solution for your tour package transportation needs while maintaining high-quality service."
    },
    {
        "WhyChooseheading": "24/7 Availability to Match Your Tour Schedule",
        "WhyChoosedescription": "Our bus rental services are available 24/7, offering flexibility for any tour schedule. Whether you're planning an early morning departure or a late-night return, we provide reliable transportation services to ensure that your group stays on track with the itinerary."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking and Real-Time Updates for Tour Coordination",
        "WhyChoosedescription": "Booking a bus for your tour is easy and efficient. Once confirmed, you’ll receive real-time tracking information, updates, and driver contact details, ensuring that your group’s transportation is coordinated and managed smoothly throughout the journey."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses for Tour Packages",
        "WhyChoosedescription": "We ensure that our buses are always thoroughly cleaned and sanitized before every trip, providing a hygienic and safe environment for your group. Regular maintenance ensures that all buses are in excellent condition, ensuring the safety and comfort of all passengers."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenient Booking",
        "WhyChoosedescription": "We offer a variety of payment methods, including UPI, credit/debit cards, digital wallets, and cash, making it convenient for you to complete your tour bus booking in a secure and seamless manner."
    }
]



















    }

const faqData = [
    {
        id: 1,
        question: 'How can I book a bus for a tour package with Samarth Travels?',
        answer: 'Booking a bus for your tour package with Samarth Travels is simple. Just contact us through our website or call our team. Share your travel dates, destination, group size, and tour duration—we’ll recommend the best bus option for a comfortable journey.',
    },
    {
        id: 2,
        question: 'What types of buses are available for tour packages?',
        answer: 'We offer a variety of buses for tours, including 22-seater, 32-seater, 40-seater, and 50-seater options. You can choose between AC and Non-AC buses. All buses come with pushback seats, ample legroom, clean interiors, and large luggage space.',
    },
    {
        id: 3,
        question: 'Are your buses suitable for long-distance or multi-day tours?',
        answer: 'Yes, our buses are ideal for outstation and multi-day tours. They’re designed for comfort on long journeys and are equipped with features like recliner seats, air conditioning, reading lights, and charging points.',
    },
    {
        id: 4,
        question: 'Can you help plan the route and itinerary for our tour?',
        answer: 'Absolutely! We offer end-to-end support, including route planning and customized travel itineraries. Whether it’s a religious trip, family tour, corporate outing, or school excursion, we’ll help design the best travel experience.',
    },
    {
        id: 5,
        question: 'What are the rental charges for buses under tour packages?',
        answer: 'Tour bus rental charges are based on bus type, distance, and number of days. Rates typically start from ₹35/km, with daily packages available for popular destinations. Get in touch for a customized quote.',
    },
    {
        id: 6,
        question: 'Is the rental inclusive of driver, fuel, and tolls?',
        answer: 'The rental includes the vehicle, experienced driver, and fuel. Any additional expenses like tolls, permits, and parking fees will be communicated upfront for full transparency.',
    },
    {
        id: 7,
        question: 'Do you provide support during the entire tour?',
        answer: 'Yes, we provide 24/7 support throughout your tour. Our team ensures smooth coordination and is available to assist with any changes or emergencies during your trip.',
    },
];

const testimonials = [
    {
        name: 'Mr. Dinesh Pawar',
        role: 'Travel Group Organizer',
        text: 'We booked a 40-seater AC bus from Samarth Travels for a tour to Nashik and Shirdi. The bus was in great condition, and our driver was friendly and experienced. Everyone enjoyed the journey. Highly recommended!',
        image: '/img/testimonial/testi_tour_dinesh.jpg',
    },
    {
        name: 'Mrs. Vaishali Desai',
        role: 'Family Trip Planner',
        text: 'Samarth Travels arranged a comfortable 32-seater bus for our Mahabaleshwar trip. The service was professional, the bus was neat and spacious, and our group had a fantastic time. Will definitely use them again.',
        image: '/img/testimonial/testi_tour_vaishali.jpg',
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
  "name": "Bus Rental for Tour Packages",
  "image": "https://samarthtravels.com/assets/images/tour-package-bus-rental-pune.jpg", // Replace with actual image URL
  "description": "Rent buses for tour packages from Pune to popular destinations like Lonavala, Lavasa, Mumbai, Nashik, and more. Choose from AC and Non-AC buses for comfortable group travel. Ideal for corporate events, Ashtavinayak tour, and more.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5240"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "10500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rental-for-tour-packages" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Bus Rental for Tour Packages | Pune to Lonavala, Lavasa, Mumbai & More</title>
  <meta 
    name="description" 
    content="Book buses for tour packages from Pune to Lonavala, Lavasa, Mumbai, Nashik, and other destinations. AC and Non-AC buses available for corporate events, religious tours, and sightseeing trips." 
  />
  <meta 
    name="keywords" 
    content="Bus rental for tour package pune to Lonavala, Bus Rental for tour packages for pune Lavasa City, Bus rental for tour package pune to Mumbai, Bus rental for tour package pune to Nashik, Bus on rent for Pune to Tuljapur, Bus on rent for pune to Pandharpur, Ac/Non Ac bus for Outstation, Bus Rental for Corporate Events in Pune, Bus Rental for Ashtavinayak tour from Pune, Bus Hire for Jyotirlinga Darshan From Pune, Mini bus on rent in Pune, Ac 17 seater bus on Rent in Pune" 
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
                            <img src='/images/keyword/65.jpg' alt='img' />
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

export default Busrentalfortourpackage;