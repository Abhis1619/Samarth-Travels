
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Fourtifiveseater() {



    const cardData =
    {
        keyword: '  45 Seater Bus on Rent in Pune',
        heading: 'Samarth Travels:  45 Seater Bus on Rent in Pune',
        headingDescription: 'Samarth Travels offers 45 Seater Bus on rent in Pune, ideal for large group travel, school excursions, corporate events, and wedding functions. Our well-maintained 45-seater buses feature air-conditioning, push-back seats, and ample legroom to ensure a spacious and comfortable journey. With trained drivers, transparent pricing, and a strong commitment to service quality, Samarth Travels guarantees a safe and convenient travel experience for all your group transportation needs.',

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
        "name": "45 Seater Bus for Hire for Outstation",
        "description": "Samarth Travels offers 45-seater bus rentals for outstation trips from Pune, ideal for long-distance group travel. Whether you're planning a pilgrimage, wedding tour, or team outing, our buses provide a safe and comfortable journey with experienced drivers and spacious interiors."
    },
    {
        "name": "45 Seater Bus for Wedding for Outstation Pune",
        "description": "Make wedding guest travel stress-free with our 45-seater bus rental for outstation functions from Pune. With both AC and Non-AC options, our buses are perfect for transporting large groups to wedding venues outside the city in comfort and style."
    },
    {
        "name": "45 Seater AC Bus for Hire",
        "description": "Travel in comfort with Samarth Travels' 45-seater air-conditioned buses. Perfect for long-distance journeys, weddings, and corporate outings, our AC buses come equipped with push-back seats and ample luggage space."
    },
    {
        "name": "45 Seater Non AC Bus for Hire",
        "description": "Looking for a budget-friendly group travel option? Our 45-seater non-AC buses are ideal for short or medium-distance journeys, school trips, and religious tours, offering reliability and comfort at economical rates."
    },
    {
        "name": "45 Seater AC Bus for Marriage Function",
        "description": "Ensure a smooth transport experience for wedding guests with our 45-seater AC bus rental. Designed for comfort and elegance, our buses make wedding travel enjoyable for large groups heading to marriage functions."
    },
    {
        "name": "45 Seater Bus for Corporate Events",
        "description": "For conferences, offsites, and employee transfers, hire a 45-seater bus from Samarth Travels. Our corporate bus services are punctual, well-maintained, and managed by professional drivers for a seamless experience."
    },
    {
        "name": "45 Seater Bus on Rent in Pimpri Chinchwad",
        "description": "Based in Pimpri Chinchwad? Samarth Travels provides 45-seater buses for rent in your locality. Whether it's a corporate event, marriage, or religious trip, we ensure prompt and reliable service."
    },
    {
        "name": "45 Seater Bus Hire for School Picnic",
        "description": "Make school outings fun and safe with our 45-seater bus rentals. Samarth Travels provides secure transportation with experienced drivers, seatbelts, and ample storage for bags and lunch kits — perfect for school picnics and excursions."
    },
    {
        "name": "45 Seater Bus Rental for Marriage Function",
        "description": "Transport large wedding parties with ease using our 45-seater buses. Whether it’s local or outstation wedding venues, we provide spacious and elegant travel options for your guests."
    },
    {
        "name": "45 Seater Bus Rent for Corporate Picnic",
        "description": "Planning a corporate picnic? Hire our 45-seater buses for hassle-free group travel. Enjoy air-conditioned comfort and experienced drivers who ensure your employees arrive refreshed and on time."
    },
    {
        "name": "45 Seater Bus for Outstation from Pune",
        "description": "From Pune to destinations across Maharashtra and beyond, our 45-seater buses offer the perfect travel solution for large groups. Enjoy comfort, space, and dependable service on every outstation journey."
    },
    {
        "name": "45 Seater Bus Rental Services in Pune",
        "description": "Samarth Travels provides premium 45-seater bus rental services in Pune. Whether for weddings, company tours, school outings, or religious pilgrimages, our fleet delivers comfort and reliability for every occasion."
    },
    {
        "name": "45 Seater Bus Rental Services in Hadapsar",
        "description": "For customers in Hadapsar, Pune, we offer local pickup and drop-off services for our 45-seater buses. Ideal for events, trips, or regular transport needs, our buses are available with AC and non-AC options."
    },
    {
        "name": "45 Seater Bus Rental for Wedding in Pune",
        "description": "Make your wedding logistics smooth and stylish with our 45-seater wedding bus rentals. We ensure guests travel together comfortably across all venues in and around Pune."
    },
    {
        "name": "45 Seater Bus for Company Picnic",
        "description": "Team outings are easier with Samarth Travels’ 45-seater buses. Whether it's a one-day company picnic or a weekend getaway, our vehicles are perfect for group travel with ample space and on-road comfort."
    },
    {
        "name": "45 Seater Bus on Rent in Pune",
        "description": "Looking for reliable 45-seater buses in Pune? Samarth Travels provides flexible rental plans, trained drivers, and clean vehicles — perfect for travel agencies, corporate offices, schools, and families."
    },
    {
        "name": "45 Seater Bus on Rent in Pune to Wedding Function",
        "description": "Transport wedding guests in comfort with our 45-seater buses for events in Pune. With AC, large windows, and professional service, our buses make every wedding journey enjoyable and stress-free."
    },
    {
        "name": "45 Seater Bus on Rent in Pune Marriage Function",
        "description": "From baraat processions to reception transfers, our 45-seater buses serve all wedding functions with style. Choose AC or non-AC and let us handle the transport logistics with precision and care."
    },
    {
        "name": "45 Seater Bus Hire for Ashtavinayak Darshan",
        "description": "Visit the eight holy Ganesh temples across Maharashtra with our dedicated Ashtavinayak bus service. Our 45-seater buses offer comfort, ample space, and knowledgeable drivers who understand pilgrimage routes."
    }
],
"tableData": [
    ["45 Seater Bus for Hire for Outstation", "45 Seater Bus for Wedding for Outstation Pune"],
    ["45 Seater AC Bus for Hire", "45 Seater Non AC Bus for Hire"],
    ["45 Seater AC Bus for Marriage Function", "45 Seater Bus for Corporate Events"],
    ["45 Seater Bus on Rent in Pimpri Chinchwad", "45 Seater Bus Hire for School Picnic"],
    ["45 Seater Bus Rental for Marriage Function", "45 Seater Bus Rent for Corporate Picnic"],
    ["45 Seater Bus for Outstation from Pune", "45 Seater Bus Rental Services in Pune"],
    ["45 Seater Bus Rental Services in Hadapsar", "45 Seater Bus Rental for Wedding in Pune"],
    ["45 Seater Bus for Company Picnic", "45 Seater Bus on Rent in Pune"],
    ["45 Seater Bus on Rent in Pune to Wedding Function", "45 Seater Bus on Rent in Pune Marriage Function"],
    ["45 Seater Bus Hire for Ashtavinayak Darshan", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable 45-Seater Bus Hire in Pune for Large Group Travel",
        "WhyChoosedescription": "We provide trusted 45-seater bus rental services in Pune, perfect for large group travel, corporate events, school trips, and family gatherings. Our buses ensure a comfortable, timely, and safe journey for all passengers, regardless of the distance."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable 45-Seater Buses for Your Group",
        "WhyChoosedescription": "Our 45-seater buses offer spacious interiors with comfortable seating, air-conditioning, and ample legroom. These buses are designed to provide a pleasant travel experience, making your long-distance or local journey relaxing and enjoyable."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers for Safe and Timely Travel",
        "WhyChoosedescription": "Our professional drivers are experienced in handling large groups and ensuring the safety and comfort of all passengers. They are punctual, courteous, and knowledgeable about the routes, ensuring a smooth and timely journey for your group."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 45-Seater Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for 45-seater bus rentals in Pune. Our pricing includes no hidden charges, and our flexible rental packages are tailored to your needs, whether you're booking for a few hours or an entire day."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Scheduling",
        "WhyChoosedescription": "Our 45-seater buses are available 24/7, offering flexibility in scheduling your travel. Whether you need a morning departure or a late-night return, we are committed to providing reliable and timely service for your group."
    },
    {
        "WhyChooseheading": "Simple Booking and Real-Time Updates for Seamless Coordination",
        "WhyChoosedescription": "Booking a 45-seater bus in Pune is easy and hassle-free through our website or customer support. After booking, you’ll receive real-time updates, tracking information, and driver contact details to ensure smooth coordination and on-time arrivals."
    },
    {
        "WhyChooseheading": "Well-Maintained, Sanitized, and Safe Buses for Your Comfort",
        "WhyChoosedescription": "We maintain our 45-seater buses to the highest standards of cleanliness and safety. Each bus is thoroughly sanitized before every trip, ensuring a hygienic environment for your group, while regular maintenance ensures the vehicles are in optimal working condition."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenient and Secure Booking",
        "WhyChoosedescription": "We offer multiple payment methods, including UPI, credit/debit cards, digital wallets, and cash, making it easy and secure to complete your 45-seater bus rental booking in Pune."
    }
]

















    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a 45-seater bus in Pune with Samarth Travels?',
        answer: 'Renting a 45-seater bus in Pune is simple with Samarth Travels. You can book online through our website or call our support team. Just share your travel details including the number of passengers, destination, and travel date, and we’ll take care of the rest.',
    },
    {
        id: 2,
        question: 'What are the features of the 45-seater bus?',
        answer: 'Our 45-seater buses come with comfortable pushback seats, air conditioning, large luggage compartments, and clean interiors. They are perfect for large groups traveling for weddings, corporate events, educational trips, or outstation tours.',
    },
    {
        id: 3,
        question: 'What is the rental cost for a 45-seater bus in Pune?',
        answer: 'Rental rates for a 45-seater bus in Pune generally start from ₹42/km. We also offer day-based and outstation packages that include driver and fuel. Get in touch with us for a customized quote based on your specific travel plan.',
    },
    {
        id: 4,
        question: 'Is the 45-seater bus suitable for long-distance or overnight travel?',
        answer: 'Yes, the 45-seater bus is well-suited for long journeys and overnight trips. With spacious seating, good suspension, and air conditioning, it ensures a smooth and comfortable experience for all passengers.',
    },
    {
        id: 5,
        question: 'Can I choose custom pickup and drop-off points for the 45-seater bus rental?',
        answer: 'Yes, we offer complete flexibility in pickup and drop-off locations. Whether it’s from your home, office, school, or event venue, we tailor the travel plan according to your needs.',
    },
    {
        id: 6,
        question: 'What does the rental package include?',
        answer: 'The rental includes the bus, a professional driver, and fuel. Any toll charges, parking fees, or interstate permits will be discussed upfront to maintain complete transparency.',
    },
    {
        id: 7,
        question: 'Is customer support available during the trip?',
        answer: 'Absolutely! Samarth Travels provides 24/7 customer support. Whether you need route changes, additional stops, or emergency assistance, our team is available to help throughout your journey.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rohit Jadhav',
        role: 'Wedding Planner',
        text: 'We hired a 45-seater bus from Samarth Travels for wedding guest transportation in Pune. The bus was clean, comfortable, and on time. The guests were happy, and everything went smoothly. Highly recommend their services!',
        image: '/img/testimonial/testi_bus_rohit.jpg',
    },
    {
        name: 'Ms. Sneha Kulkarni',
        role: 'College Event Coordinator',
        text: 'Used their 45-seater bus for a college industrial visit. The ride was smooth, the bus was well-maintained, and the driver was very cooperative. Samarth Travels handled everything professionally.',
        image: '/img/testimonial/testi_bus_sneha.jpg',
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
  "name": "45 Seater Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/45-seater-bus-on-rent-in-pune.jpg",
  "description": "Hire a 45 Seater Bus in Pune with Samarth Travels for weddings, corporate events, school picnics, and outstation tours. Choose from AC and Non-AC options. Available in Pimpri Chinchwad, Hadapsar, and other areas of Pune.",
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
    "price": "9500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/45-seater-bus-on-rent-in-pune"
  }
};




    return (
        <div>


<Helmet>
  <title>45 Seater Bus on Rent in Pune | AC & Non-AC | Wedding & Corporate Travel</title>
  <meta 
    name="description" 
    content="Book a 45 Seater Bus on Rent in Pune with Samarth Travels for marriage functions, company outings, school picnics, and outstation trips. AC and Non-AC buses available at competitive rates." 
  />
  <meta 
    name="keywords" 
    content="45 Seater Bus on Rent in Pune, 45 Seater Bus for Hire for Outstation, 45 Seater Bus for Wedding in Pune, AC 45 Seater Bus on Hire Pune, Non-AC 45 Seater Bus Rental Pune, 45 Seater Bus for Corporate Events, 45 Seater Bus in Pimpri Chinchwad, 45 Seater Bus in Hadapsar, 45 Seater Bus Hire for School Picnic Pune, 45 Seater Bus for Marriage Functions in Pune, 45 Seater Bus for Ashtavinayak Darshan, 45 Seater Bus Rental Services Pune, Samarth Travels 45 Seater Bus Pune" 
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
                            <img src='/images/keyword/58.jpg' alt='img' />
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

export default Fourtifiveseater;