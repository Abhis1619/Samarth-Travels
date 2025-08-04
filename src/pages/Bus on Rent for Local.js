
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busonrentforlocal() {



    const cardData =
    {
        keyword: '  Bus on Rent for Local',
        heading: 'Samarth Travels: Bus on Rent for Local',
        headingDescription: 'Samarth Travels offers bus on rent for local travel in Pune, perfect for weddings, events, school trips, and city tours. Choose from AC and non-AC buses ranging from 17 to 50 seaters, all maintained for safety and comfort. With professional drivers, transparent pricing, and timely service, Samarth Travels ensures smooth and convenient local transportation.',

        top: 'Top Places to Visit in Pune Outstation with Samarth Travels',
  "topPlaces": [
    {
      "title": "Mahabaleshwar",
      "description": "A popular hill station located about 120 km from Pune, Mahabaleshwar is known for its cool climate, lush green valleys, and viewpoints like Arthur's Seat, Wilson Point, and Elephant's Head. Visitors can enjoy boating at Venna Lake, taste fresh strawberries at Mapro Garden, and explore ancient temples. It’s a perfect weekend getaway for families and couples alike."
    },
    {
      "title": "Lonavala & Khandala",
      "description": "Just 65-70 km from Pune, Lonavala and Khandala are twin hill stations nestled in the Sahyadri ranges. These places are famous for their scenic valleys, misty waterfalls, and trekking spots like Rajmachi Fort and Duke’s Nose. The monsoon season turns the landscape into a green paradise, making it a go-to destination for nature lovers."
    },
    {
      "title": "Lavasa",
      "description": "Lavasa is a planned hill city located around 60 km from Pune, designed in a European architectural style. Set around the serene Warasgaon Lake, it offers water sports, scenic promenades, cafes, and luxury resorts. It’s an ideal destination for romantic escapes and peaceful retreats."
    },
    {
      "title": "Shirdi",
      "description": "Located around 200 km from Pune, Shirdi is one of the most important pilgrimage sites in India, dedicated to Sai Baba. Devotees flock to visit the Samadhi Mandir, Dwarkamai, Chavadi, and Lendi Baug. The town exudes spiritual energy and is well-connected by road for a one- or two-day religious trip."
    },
    {
      "title": "Nashik",
      "description": "Around 210 km from Pune, Nashik is a city of religious and cultural importance. It's known for the Kumbh Mela, temples along the Godavari River, and its emerging reputation as the wine capital of India. Popular places include Trimbakeshwar Temple, Sula Vineyards, and Pandav Leni caves."
    },
    {
      "title": "Alibaug",
      "description": "About 145 km from Pune, Alibaug is a coastal town known for its clean beaches, sea forts, and fresh seafood. Tourists can relax at Alibaug Beach, visit the historic Kolaba Fort, and enjoy water sports. It's a favored destination for beach lovers and weekend travelers."
    },
    {
      "title": "Goa",
      "description": "Goa, around 450 km from Pune, is a favorite long weekend destination offering vibrant beaches, colonial architecture, and buzzing nightlife. North Goa is known for its party vibe, while South Goa offers peaceful beachside resorts. It’s perfect for family holidays, romantic getaways, or adventure trips."
    },
    {
      "title": "Kolhapur",
      "description": "Located approximately 235 km from Pune, Kolhapur is famous for the Mahalakshmi Temple, traditional Kolhapuri chappals, and spicy cuisine. The city offers cultural richness with historical landmarks like New Palace Museum and Rankala Lake. It makes for a soulful and flavorful cultural retreat."
    },
    {
      "title": "Satara & Kaas Plateau",
      "description": "Around 110 km from Pune, Satara is a historic city known for forts, waterfalls, and nearby Kaas Plateau—a UNESCO World Natural Heritage Site. During monsoon, the plateau blooms with rare and colorful flowers, offering a surreal experience for botanists and photographers."
    },
    {
      "title": "Bhimashankar",
      "description": "Located about 110 km from Pune, Bhimashankar is home to one of the 12 Jyotirlingas of Lord Shiva. Surrounded by thick forests and part of a wildlife sanctuary, it’s also a hotspot for trekkers and nature enthusiasts. The temple's location offers a blend of spiritual ambiance and ecological beauty."
    }
  ],

"services": [
  {
    "name": "Local Bus Hire in City",
    "description": "Samarth Travels offers convenient local bus hire services in Pune for city travel, events, and day-long trips. Perfect for group commuting, these buses provide comfort and punctual service across the city."
  },
  {
    "name": "Bus Rental for Local Sightseeing",
    "description": "Explore Pune’s top attractions with ease through our local sightseeing bus rental. Ideal for tourists, families, or schools, our service includes AC/non-AC buses with experienced drivers."
  },
  {
    "name": "Affordable Bus on Rent for Local Travel",
    "description": "Looking for cost-effective transport within Pune? Our affordable local bus rentals offer the best value for group travel without compromising on safety or reliability."
  },
  {
    "name": "Rent AC Bus for Local Group Tours",
    "description": "Beat the heat during your city tours with Samarth Travels’ AC bus rentals. Perfect for school trips, corporate outings, and tourist groups seeking a cool and comfortable ride in Pune."
  },
  {
    "name": "Local Bus Hire for Events and Functions",
    "description": "Ensure smooth guest transportation for local weddings, birthdays, or cultural events with our dependable local bus hire services in Pune. On-time pickups and spacious interiors guaranteed."
  },
  {
    "name": "Mini Bus on Rent for Local Trips",
    "description": "Need a smaller vehicle for city trips? Our mini bus rental service in Pune is perfect for groups up to 20 people. Great for family functions, airport transfers, and short commutes."
  },
  {
    "name": "Bus on Rent for City Tours",
    "description": "Book a comfortable bus for a guided city tour of Pune. Ideal for tourists and educational groups, our city tour buses provide panoramic windows and professional drivers for a memorable experience."
  },
  {
    "name": "Rent Bus for Local Corporate Events",
    "description": "Make your corporate seminars, conferences, or local team outings efficient with our premium bus rental service in Pune. Clean buses and punctual drivers ensure a professional experience."
  },
  {
    "name": "Local Luxury Bus Rental Service",
    "description": "Add a touch of class to your local travel in Pune with our luxury bus rentals. Designed for comfort and elegance, these buses are perfect for VIP movement or premium events within the city."
  },
  {
    "name": "20 to 32-Seater Bus on Rent for Local Use",
    "description": "Choose from a range of 20 to 32-seater buses for local use in Pune. Whether it’s a wedding shuttle, school event, or corporate meeting, our mid-sized fleet meets every local group need efficiently."
  }
],
"tableData": [
  ["Local Bus Hire in City", "Bus Rental for Local Sightseeing"],
  ["Affordable Bus on Rent for Local Travel", "Rent AC Bus for Local Group Tours"],
  ["Local Bus Hire for Events and Functions", "Mini Bus on Rent for Local Trips"],
  ["Bus on Rent for City Tours", "Rent Bus for Local Corporate Events"],
  ["Local Luxury Bus Rental Service", "20 to 32-Seater Bus on Rent for Local Use"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "Bus on Rent for Local Travel – Explore the City with Samarth Travels",
        "WhyChoosedescription": "Samarth Travels offers comfortable and reliable bus rental services for local travel within Pune and nearby areas. Whether you’re planning a city tour, corporate outing, or family gathering, our buses provide a convenient and hassle-free solution for local transportation."
    },
    {
        "WhyChooseheading": "Spacious, Air-Conditioned Comfort for Local Trips",
        "WhyChoosedescription": "Our local buses are equipped with plush seating, ample legroom, and efficient air conditioning systems, ensuring a comfortable journey, no matter the distance. Enjoy your local trips in comfort with modern amenities designed for relaxation and convenience."
    },
    {
        "WhyChooseheading": "Perfect for City Tours, Corporate Outings, and Group Events",
        "WhyChoosedescription": "Samarth Travels specializes in providing buses for local city tours, corporate outings, school trips, and group events. Whether you're exploring the city or heading to a local event, our buses ensure you travel together in style and comfort."
    },
    {
        "WhyChooseheading": "Professional Chauffeurs for Safe and Efficient Local Travel",
        "WhyChoosedescription": "Our experienced chauffeurs are well-trained in navigating local routes and ensuring timely arrivals. Whether you have a tight schedule or a relaxed itinerary, they provide efficient, safe, and courteous service throughout your local journey."
    },
    {
        "WhyChooseheading": "Well-Maintained, Clean, and Sanitized Fleet for Local Travel",
        "WhyChoosedescription": "Your health and safety are our top priority. All our local buses are regularly cleaned, maintained, and sanitized before each trip to ensure a safe and hygienic environment for you and your group."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Local Bus Hire",
        "WhyChoosedescription": "Samarth Travels offers competitive and transparent pricing for local bus rentals. We believe in clear pricing with no hidden charges, so you can plan your trip without worrying about unexpected costs."
    },
    {
        "WhyChooseheading": "24/7 Availability for Your Local Travel Needs",
        "WhyChoosedescription": "Whether it's a day trip or an evening outing, we offer 24/7 availability for local bus hire. You can book your bus at any time that suits your schedule, ensuring maximum convenience and flexibility."
    },
    {
        "WhyChooseheading": "Convenient Booking with Multiple Payment Methods",
        "WhyChoosedescription": "Booking a bus for your local trip is easy with Samarth Travels. We offer various payment options, including UPI, credit/debit cards, digital wallets, and cash, making the process quick and convenient."
    }
]












    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a bus for local travel in Pune with Samarth Travels?',
        answer: 'Renting a bus for local travel in Pune is easy with Samarth Travels. Simply visit our website or contact our team to share your travel details such as pickup point, destination, and group size. We’ll recommend the best-suited bus and provide a quick quote.',
    },
    {
        id: 2,
        question: 'What types of buses are available for local rental in Pune?',
        answer: 'We offer a range of buses for local travel including 17-seater to 50-seater options, Mini Buses, Tempo Travellers, AC/Non-AC variants, and Luxury Force Urbania. All buses are clean, comfortable, and operated by experienced drivers.',
    },
    {
        id: 3,
        question: 'What occasions are local bus rentals suitable for?',
        answer: 'Local bus rentals are ideal for weddings, corporate events, school or college trips, airport transfers, city tours, and local group outings. We tailor the service to suit the purpose of your booking.',
    },
    {
        id: 4,
        question: 'Is there a minimum duration for renting a bus locally?',
        answer: 'Yes, we offer flexible packages for half-day, full-day, or hourly rentals. The minimum duration typically starts from 4 hours, depending on the type of bus and your itinerary.',
    },
    {
        id: 5,
        question: 'What is included in the local rental package?',
        answer: 'The package includes the selected vehicle, professional driver, fuel for city usage, and basic onboard amenities. Parking or entry fees (if applicable) will be shared with you before booking confirmation.',
    },
    {
        id: 6,
        question: 'Can I select multiple pickup and drop-off points within Pune?',
        answer: 'Yes, Samarth Travels provides customizable pickup and drop locations throughout Pune city to accommodate your group conveniently.',
    },
    {
        id: 7,
        question: 'Is customer support available during the rental period?',
        answer: 'Absolutely. Our customer support is available 24/7 to assist you with any queries or updates during your local trip in Pune.',
    },
];

const testimonials = [
    {
        name: 'Mr. Amey Deshpande',
        role: 'Event Coordinator',
        text: 'We hired a bus locally in Pune for a wedding function. The service was punctual, the bus was clean and comfortable, and the driver was extremely courteous. Samarth Travels made the transport part seamless!',
        image: '/img/testimonial/testi_2_70.jpg',
    },
    {
        name: 'Ms. Shweta Naik',
        role: 'School Administrator',
        text: 'We booked a local bus for a school educational tour. The students and staff were very comfortable, and everything was perfectly organized. Great experience with Samarth Travels!',
        image: '/img/testimonial/testi_2_71.jpg',
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
  "name": "Bus on Rent for Local",
  "image": "https://samarthtravels.com/assets/images/bus-on-rent-for-local.jpg",
  "description": "Rent a bus for local sightseeing, city tours, and events in Pune. Affordable local bus rental services for corporate events, functions, and group tours. Choose from AC buses, mini buses, and luxury options for your local travel needs.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6385"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-on-rent-for-local"
  }
};





    return (
        <div>

<Helmet>
  <title>Bus on Rent for Local Travel | Sightseeing, Corporate Events & City Tours | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for local sightseeing, group tours, and events in Pune. Affordable bus rental services for corporate events, city tours, and more. Choose from AC buses, mini buses, and luxury options for local travel." 
  />
  <meta 
    name="keywords" 
    content="Local Bus Hire in City, Bus Rental for Local Sightseeing, Affordable Bus on Rent for Local Travel, Rent AC Bus for Local Group Tours, Local Bus Hire for Events and Functions, Mini Bus on Rent for Local Trips, Bus on Rent for City Tours, Rent Bus for Local Corporate Events, Local Luxury Bus Rental Service, 20 to 32-Seater Bus on Rent for Local Use" 
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
                            <img src='/images/keyword/15.jpg' alt='img' />
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

export default Busonrentforlocal;