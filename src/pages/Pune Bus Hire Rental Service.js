
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Punebushirerentalservice() {



    const cardData =
    {
        keyword: 'Pune Bus Hire Rental Service',
        heading: 'Samarth Travels:  Pune Bus Hire Rental Service',
        headingDescription: 'Samarth Travels offers trusted Pune bus hire rental service, ideal for weddings, corporate events, school outings, religious trips, and outstation tours. Our fleet includes well-maintained 32-seater and 45-seater buses with air-conditioning, push-back seats, and spacious interiors to ensure a smooth and comfortable ride. Backed by professional drivers, timely service, and transparent pricing, Samarth Travels delivers dependable and hassle-free bus rental solutions in Pune.',

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
      "name": "Bus Hire in Pune at Affordable Rate",
      "description": "Samarth Travels offers budget-friendly bus hire services in Pune for all types of group travel. Whether it's a local tour, family trip, or corporate outing, we provide reliable and economical transport options without compromising on comfort or safety."
    },
    {
      "name": "Bus Rental in Pune",
      "description": "Looking for a bus rental in Pune? Samarth Travels provides a wide fleet of AC and non-AC buses suitable for weddings, sightseeing, corporate events, and outstation trips. Enjoy punctual service, clean vehicles, and professional drivers."
    },
    {
      "name": "Bus Hire in Pune",
      "description": "Hire a bus in Pune from Samarth Travels for seamless group transportation. We offer options ranging from 17-seater minibuses to 50-seater luxury coaches, perfect for all events and travel purposes within or outside the city."
    },
    {
      "name": "Local Bus Companies for Hire",
      "description": "Samarth Travels is one of the trusted local bus hire companies in Pune, offering customized travel solutions for city tours, school picnics, employee transport, and event shuttle services with expert planning and experienced drivers."
    },
    {
      "name": "Pune Pandharpur Tuljapur Bus on Rent",
      "description": "Plan a pilgrimage to Pandharpur and Tuljapur with our dedicated bus rental service from Pune. Our comfortable and reliable buses make spiritual journeys safe and hassle-free for all age groups."
    },
    {
      "name": "Pune to Kolhapur Bus on Rent",
      "description": "Book a bus from Pune to Kolhapur with Samarth Travels. Ideal for temple visits, family functions, or group outings, our buses offer air-conditioned comfort, ample luggage space, and timely departures."
    },
    {
      "name": "Pune to Konkan Darshan Bus on Rent",
      "description": "Explore the scenic Konkan coast with our buses on rent from Pune. We provide well-maintained buses for Konkan Darshan trips, ensuring a comfortable and scenic journey for your group."
    },
    {
      "name": "Pune to Shirdi Bus Hire Hadapsar",
      "description": "From Hadapsar, Pune, hire a bus to Shirdi for your spiritual journey. Samarth Travels offers safe and convenient travel options with experienced drivers familiar with pilgrimage routes."
    },
    {
      "name": "Rent a Bus in Pune",
      "description": "Samarth Travels makes it easy to rent a bus in Pune. Whether it's for a school picnic, outstation trip, or a wedding shuttle, our team ensures smooth travel with a wide variety of bus sizes and features."
    },
    {
      "name": "Luxury Bus on Rent in Pune",
      "description": "Travel in style with our luxury buses on rent in Pune. Perfect for weddings, VIP transport, and corporate delegations, our luxury fleet includes plush interiors, air-conditioning, entertainment systems, and professional chauffeurs."
    },
    {
      "name": "40 Seater Bus on Rent in Pune",
      "description": "Need a medium-capacity vehicle? Hire a 40-seater bus from Samarth Travels in Pune. Suitable for corporate travel, school excursions, or family events, these buses offer comfort and reliability at competitive prices."
    },
    {
      "name": "27 Seater Bus on Rent in Pune",
      "description": "Our 27-seater buses in Pune are ideal for mid-sized groups. Whether it’s a city tour or an outstation trip, these buses offer air-conditioned comfort and affordable pricing."
    },
    {
      "name": "17 Seater Bus on Rent in Pune",
      "description": "Book a 17-seater bus from Samarth Travels in Pune for smaller group trips. These compact yet comfortable buses are perfect for picnics, airport transfers, and weekend getaways."
    },
    {
      "name": "Traveller Bus on Rent in Pune",
      "description": "Hire a Traveller bus in Pune for convenient and cost-effective group travel. Available in multiple seating capacities, our Travellers are well-maintained and ideal for both local and outstation trips."
    },
    {
      "name": "Bus on Rent in Pune",
      "description": "Get dependable bus rental services in Pune with Samarth Travels. We provide AC and non-AC buses in various sizes for weddings, tours, and business transport needs."
    },
    {
      "name": "Mini Bus on Rent Pune",
      "description": "Samarth Travels offers mini buses on rent in Pune for short and long-distance journeys. Ideal for small groups, our mini buses come with comfortable seating and air conditioning."
    },
    {
      "name": "Nashik to Aurangabad Bus on Rent",
      "description": "Planning a trip from Nashik to Aurangabad? Rent a bus from Samarth Travels for a smooth and scenic ride. Our fleet ensures safety, punctuality, and comfort for group travel."
    }
  ],
  "tableData": [
    ["Bus Hire in Pune at Affordable Rate", "Bus Rental in Pune"],
    ["Bus Hire in Pune", "Local Bus Companies for Hire"],
    ["Pune Pandharpur Tuljapur Bus on Rent", "Pune to Kolhapur Bus on Rent"],
    ["Pune to Konkan Darshan Bus on Rent", "Pune to Shirdi Bus Hire Hadapsar"],
    ["Rent a Bus in Pune", "Luxury Bus on Rent in Pune"],
    ["40 Seater Bus on Rent in Pune", "27 Seater Bus on Rent in Pune"],
    ["17 Seater Bus on Rent in Pune", "Traveller Bus on Rent in Pune"],
    ["Bus on Rent in Pune", "Mini Bus on Rent Pune"],
    ["Nashik to Aurangabad Bus on Rent", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Hire Rental Service in Pune",
        "WhyChoosedescription": "We offer reliable bus hire rental services in Pune, providing comfortable, safe, and punctual transportation for any occasion. Whether it’s a corporate event, wedding, school trip, or group outing, we ensure smooth travel with no hassles, every time."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Buses for All Group Sizes",
        "WhyChoosedescription": "Our fleet of buses includes a variety of sizes to accommodate groups of all sizes, from small family gatherings to large corporate groups. All our buses are equipped with comfortable seating, air-conditioning, and ample legroom to ensure a pleasant journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers for Safe Travel",
        "WhyChoosedescription": "Our skilled drivers are experienced, courteous, and familiar with Pune’s roads and landmarks. They ensure timely pick-ups and drop-offs, allowing you to enjoy a smooth and safe travel experience without any concerns about navigation or punctuality."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Bus Rentals",
        "WhyChoosedescription": "We offer affordable and transparent pricing for bus rentals, with no hidden fees. Our flexible rental packages are designed to suit your budget while delivering high-quality transportation for any event or outing, big or small."
    },
    {
        "WhyChooseheading": "24/7 Availability for All Your Bus Rental Needs",
        "WhyChoosedescription": "Our bus hire services are available 24/7, offering flexibility for any schedule. Whether you need buses for an early morning conference or a late-night event, we are always ready to provide reliable transportation at any time of the day or night."
    },
    {
        "WhyChooseheading": "Easy Booking and Real-Time Updates for Hassle-Free Coordination",
        "WhyChoosedescription": "Booking a bus with us is quick and easy. Once your booking is confirmed, you will receive real-time updates on bus arrivals, driver contact details, and any other necessary information to ensure smooth coordination for your event or trip."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "We maintain our buses to the highest standards of cleanliness and safety. Each bus is thoroughly cleaned and sanitized before every trip, ensuring a hygienic environment for you and your guests. Regular maintenance keeps our buses in top condition for your comfort and safety."
    },
    {
        "WhyChooseheading": "Flexible Payment Options for Easy Booking",
        "WhyChoosedescription": "We offer multiple payment options, including UPI, credit/debit cards, digital wallets, and cash, making it convenient and secure to complete your bus rental booking."
    }
]




















    }

const faqData = [
    {
        id: 1,
        question: 'How can I hire a bus in Pune with Samarth Travels?',
        answer: 'Hiring a bus in Pune is quick and easy with Samarth Travels. Just contact us through our website or call our customer support. Share your travel details such as date, number of passengers, pickup and drop points, and we’ll provide the ideal bus for your needs.',
    },
    {
        id: 2,
        question: 'What types of buses are available for hire in Pune?',
        answer: 'We offer a wide range of buses including 22-seater, 32-seater, 40-seater, and 50-seater options. You can choose from AC and Non-AC buses based on your comfort preference and budget. All buses are well-maintained and spacious.',
    },
    {
        id: 3,
        question: 'Can I hire a bus for local as well as outstation travel?',
        answer: 'Yes, our buses are available for both local city travel and outstation trips from Pune. Whether it’s a one-day event or a multi-day tour, we can customize the rental according to your itinerary.',
    },
    {
        id: 4,
        question: 'Is the bus rental inclusive of driver and fuel?',
        answer: 'Yes, all our bus hire packages include a professional driver and fuel costs. Additional expenses like tolls, parking, or permits are communicated transparently during the booking process.',
    },
    {
        id: 5,
        question: 'What are the charges for bus rental services in Pune?',
        answer: 'Bus rental charges in Pune start from ₹35/km and vary depending on the type of bus, distance, and duration. We also offer local packages like 4 hours/40 km and 8 hours/80 km. Get in touch for a detailed quote.',
    },
    {
        id: 6,
        question: 'Are your buses suitable for corporate, wedding, and school events?',
        answer: 'Absolutely. Our fleet is ideal for various purposes including corporate transfers, weddings, school trips, and family tours. We ensure clean, safe, and comfortable travel for all occasions.',
    },
    {
        id: 7,
        question: 'Is customer support available during the journey?',
        answer: 'Yes, Samarth Travels offers 24/7 customer support for all rentals. Whether you need route assistance or want to make last-minute changes, our team is always ready to help.',
    },
];

const testimonials = [
    {
        name: 'Mr. Nikhil Patil',
        role: 'Tour Organizer',
        text: 'We hired a 50-seater bus from Samarth Travels for a Pune to Lonavala tour. The bus was clean, the driver was professional, and the trip went smoothly. Great service and timely support!',
        image: '/img/testimonial/testi_busservice_nikhil.jpg',
    },
    {
        name: 'Ms. Sneha Verma',
        role: 'Event Planner',
        text: 'Samarth Travels handled guest transportation for our client’s wedding in Pune. Their buses were punctual and well-maintained. Excellent experience from booking to execution.',
        image: '/img/testimonial/testi_busservice_sneha.jpg',
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
  "name": "Pune Bus Hire Rental Service",
  "image": "https://samarthtravels.com/assets/images/pune-bus-hire-rental-service.jpg", // Replace with actual image URL
  "description": "Affordable bus hire rental service in Pune by Samarth Travels. Choose from 17, 27, 40-seater and luxury buses for local travel or outstation trips to Kolhapur, Shirdi, Pandharpur, Konkan, Aurangabad, and more.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5395"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7900",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/pune-bus-hire-rental-service" // Replace with actual page URL
  }
};




    return (
        <div>


<Helmet>
  <title>Pune Bus Hire Rental Service | Affordable Bus & Mini Bus on Rent</title>
  <meta 
    name="description" 
    content="Rent buses in Pune for local and outstation travel with Samarth Travels. Choose from 17, 27, 40-seater, and luxury buses. Affordable rates for Kolhapur, Shirdi, Konkan, Pandharpur, and more." 
  />
  <meta 
    name="keywords" 
    content="Bus Hire in Pune at Affordable Rate, Bus Rental In Pune, Bus Hire in Pune, Local bus companies for hire, Pune Pandharpur Tuljapur bus on Rent, Pune to Kolhapur bus on rent, pune to konkan Darshan bus on rent, Pune to Shirdi bus hire hadapsar, Rent a bus pune, Luxury bus on rent in pune, 40 seater bus on rent in pune, 27 seater bus on rent in pune, 17 seater bus on rent in pune, Traveller bus on rent in pune, Bus on rent in Pune, Mini Bus On Rent Pune, Bus Nashik to Aurangabad bus on Rent" 
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
                            <img src='/images/keyword/68.jpg' alt='img' />
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

export default Punebushirerentalservice;