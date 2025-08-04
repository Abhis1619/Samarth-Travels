
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentalsserviceinpune() {



    const cardData =
    {
        keyword: 'Bus Rental Services in Pune',
        heading: 'Samarth Travels: Bus Rental Services in Pune',
        headingDescription: 'Samarth Travels offers bus rental services in Pune, ideal for weddings, school trips, corporate events, group tours, and outstation travel. Our diverse fleet includes 14 to 50-seater buses, all equipped with air-conditioning, push-back seats, and spacious interiors to ensure a smooth and comfortable journey. With experienced drivers, customizable rental packages, and transparent pricing, Samarth Travels provides safe, reliable, and cost-effective bus rental services tailored to your needs across Pune.',

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
      "name": "Bus Rental Services in Pune",
      "description": "Samarth Travels offers reliable bus rental services in Pune for all travel needs including events, tours, and corporate outings. Choose from a range of seating capacities and AC/Non-AC options."
    },
    {
      "name": "Rent Buses for Group Travel Pune",
      "description": "Ideal for large group travel, our buses ensure comfort and safety for family outings, team events, and pilgrimages across Pune and beyond."
    },
    {
      "name": "Bus Hire for Family Trips Pune",
      "description": "Plan your next family trip with ease by hiring spacious and comfortable buses from Samarth Travels. AC and Non-AC buses available for outstation and local travel."
    },
    {
      "name": "Rent Buses for Corporate Events Pune",
      "description": "We provide premium bus rental services for corporate events in Pune including seminars, team-building activities, and company offsites."
    },
    {
      "name": "Bus Rental for Picnics and Outings Pune",
      "description": "Perfect for school, college, or office picnics, our buses provide a safe and enjoyable journey to picnic spots around Pune."
    },
    {
      "name": "Bus Hire for Sightseeing Pune",
      "description": "Explore Pune and nearby attractions with our sightseeing bus rental service. Ideal for tourists, school groups, and family tours."
    },
    {
      "name": "Rent Buses for Weddings in Pune",
      "description": "Make wedding guest transportation hassle-free by renting buses for your special day. Choose from various seating capacities and styles."
    },
    {
      "name": "Bus Rental for Long-Distance Trips Pune",
      "description": "Travel long distances from Pune with comfort in our well-maintained buses. Suitable for outstation tours and pilgrimages."
    },
    {
      "name": "Bus Rental Services for Airport Transfers Pune",
      "description": "Need group transfers to or from Pune Airport? Book our airport transfer buses for on-time, convenient, and comfortable service."
    },
    {
      "name": "Best Bus Rental Services in Pune",
      "description": "Samarth Travels is known for offering the best bus rental services in Pune with professional drivers, clean vehicles, and punctual service."
    },
    {
      "name": "Bus on Rent for Corporate Team-Building Trips",
      "description": "Enhance your team-building experience with our corporate bus rentals. We ensure timely service and group-friendly travel."
    },
    {
      "name": "Luxury Bus Rental Pune",
      "description": "Travel in style with our luxury bus rental options. Ideal for weddings, executive retreats, and high-end travel experiences."
    }
  ],
  "tableData": [
    ["Bus Rental Services in Pune", "Rent Buses for Group Travel Pune"],
    ["Bus Hire for Family Trips Pune", "Rent Buses for Corporate Events Pune"],
    ["Bus Rental for Picnics and Outings Pune", "Bus Hire for Sightseeing Pune"],
    ["Rent Buses for Weddings in Pune", "Bus Rental for Long-Distance Trips Pune"],
    ["Bus Rental Services for Airport Transfers Pune", "Best Bus Rental Services in Pune"],
    ["Bus on Rent for Corporate Team-Building Trips", "Luxury Bus Rental Pune"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable and Professional Bus Rental Services in Pune",
        "WhyChoosedescription": "We offer dependable and well-organized bus rental services across Pune, ideal for weddings, corporate events, school trips, group tours, and more. Our fleet is managed by professionals to ensure punctual and hassle-free group transportation."
    },
    {
        "WhyChooseheading": "Wide Range of Bus Options for Every Group Size",
        "WhyChoosedescription": "Choose from our diverse fleet including 17-seater minibuses to 50+ seater large coaches, suited for all types of group sizes. Whether you’re planning a small family outing or a large-scale event, we have the right vehicle for your needs."
    },
    {
        "WhyChooseheading": "Comfortable and Well-Maintained Buses",
        "WhyChoosedescription": "Our buses are equipped with comfortable seating, air-conditioning, ample legroom, and storage. All vehicles are regularly cleaned and maintained to provide a safe and enjoyable travel experience."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Smooth Travel",
        "WhyChoosedescription": "All our drivers are experienced, licensed, and courteous. They are trained to handle local and outstation trips with professionalism, ensuring your group travels safely and on schedule."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We provide budget-friendly rental packages with clear and transparent pricing. There are no hidden charges—what you see is what you pay, whether you're booking for a few hours or multiple days."
    },
    {
        "WhyChooseheading": "Available for Local and Outstation Trips",
        "WhyChoosedescription": "Whether you need transportation within Pune or to outstation destinations like Mahabaleshwar, Mumbai, or Shirdi, our bus rental services are available for both short and long-distance travel."
    },
    {
        "WhyChooseheading": "24/7 Booking and Customer Support",
        "WhyChoosedescription": "Our services are available around the clock. You can book your bus anytime, and our support team is available 24/7 to assist with queries, changes, or urgent transportation needs."
    },
    {
        "WhyChooseheading": "Easy Booking with Real-Time Updates",
        "WhyChoosedescription": "Book your bus in minutes via our website or customer service. After confirmation, receive real-time tracking, driver contact info, and updates to ensure smooth coordination throughout your journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options",
        "WhyChoosedescription": "We support various payment methods including UPI, credit/debit cards, net banking, digital wallets, and cash to make your booking process seamless and secure."
    }
]

































    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a bus rental in Pune with Samarth Travels?',
        answer: 'Booking a bus with Samarth Travels is easy and convenient. You can contact us through our website or by phone. Just share your travel details such as trip type, number of passengers, pickup/drop locations, and travel dates — we’ll handle the rest.',
    },
    {
        id: 2,
        question: 'What types of buses are available for rent in Pune?',
        answer: 'Samarth Travels offers a wide range of buses including 17-seater, 20-seater, 25-seater, 32-seater, 40-seater, 45-seater, and 50-seater buses. You can choose from AC and Non-AC buses to match your comfort and budget preferences.',
    },
    {
        id: 3,
        question: 'Are buses available for both local and outstation travel?',
        answer: 'Yes, we provide bus rental services for both local city travel and outstation trips. Whether it’s a one-day event, weekend getaway, or multi-day tour, our buses are well-suited for all types of travel needs.',
    },
    {
        id: 4,
        question: 'What are the rental charges for buses in Pune?',
        answer: 'Rental charges depend on the type of bus, distance, and duration of the trip. Local packages like 4 hours/40 km and 8 hours/80 km are available, while outstation trips are charged on a per km or per day basis. Contact us for customized pricing.',
    },
    {
        id: 5,
        question: 'What amenities are included in the buses?',
        answer: 'Our buses are equipped with clean interiors, push-back seats, ample legroom, luggage storage, air conditioning (for AC variants), and music systems. Premium options may also include LED screens, Wi-Fi, and charging ports.',
    },
    {
        id: 6,
        question: 'Is a driver included in the bus rental?',
        answer: 'Yes, all bus rentals come with a professional and experienced driver. Fuel charges are also included. Additional charges like tolls, permits, and parking will be shared upfront for full transparency.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for bus rental services?',
        answer: 'Yes, Samarth Travels provides 24/7 customer support for all bookings. Whether you need help with booking, rescheduling, or last-minute changes, our team is available around the clock to assist you.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sandeep More',
        role: 'Corporate Event Manager',
        text: 'We booked a 45-seater AC bus from Samarth Travels for a corporate offsite. The vehicle was on time, clean, and comfortable. The driver was courteous, and the service exceeded our expectations. Highly reliable for corporate travel.',
        image: '/img/testimonial/testi_bus_sandeep.jpg',
    },
    {
        name: 'Mrs. Kavita Joshi',
        role: 'Wedding Planner',
        text: 'Used Samarth Travels’ 32-seater bus for a wedding function in Pune. It was well-maintained and perfect for guest transport. They coordinated everything smoothly and professionally. Great experience!',
        image: '/img/testimonial/testi_bus_kavita.jpg',
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
  "name": "Bus Rental Services in Pune",
  "image": "https://samarthtravels.com/assets/images/bus-rental-services-pune.jpg", // Replace with the correct image URL
  "description": "Book reliable and affordable Bus Rental Services in Pune for group travel, family trips, corporate events, picnics, sightseeing, weddings, and long-distance travel. Comfort and luxury buses available with Samarth Travels for all occasions.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "6123"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "12000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rental-services-pune" // Replace with the actual page URL
  }
};




    return (
        <div>


<Helmet>
  <title>Bus Rental Services in Pune | Samarth Travels</title>
  <meta 
    name="description" 
    content="Book reliable and affordable Bus Rental Services in Pune for group travel, family trips, corporate events, picnics, sightseeing, weddings, and long-distance travel. Comfort and luxury buses available with Samarth Travels for all occasions." 
  />
  <meta 
    name="keywords" 
    content="Bus rental services in Pune, Rent buses for group travel Pune, Bus hire for family trips Pune, Rent buses for corporate events Pune, Bus rental for picnics and outings Pune, Bus hire for sightseeing Pune, Rent buses for weddings in Pune, Bus rental for long-distance trips Pune, Bus rental services for airport transfers Pune, Best bus rental services in Pune, Bus on rent for corporate team-building trips, Luxury bus rental Pune" 
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
                            <img src='/images/keyword/90.jpg' alt='img' />
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

export default Busrentalsserviceinpune;