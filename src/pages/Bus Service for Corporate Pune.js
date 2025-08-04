
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busserviceforcorporate() {



    const cardData =
    {
        keyword: '   Bus Service for Corporate Pune',
        heading: 'Samarth Travels:  Bus Service for Corporate Pune',
        headingDescription: 'Samarth Travels offers reliable bus service for corporate needs in Pune, ideal for employee transportation, business events, training programs, and corporate outings. Our well-maintained buses ranging from 32-seater to 45-seater are equipped with air-conditioning, push-back seats, and spacious interiors to ensure a comfortable and professional travel experience. With punctual drivers, flexible scheduling, and transparent pricing, Samarth Travels delivers dependable and efficient corporate transportation solutions.',

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
      "name": "Bus Service for Corporate Office Pune",
      "description": "Samarth Travels provides reliable bus services for corporate offices in Pune. Whether for daily employee transport or special corporate events, we offer punctual, comfortable, and efficient transport solutions."
    },
    {
      "name": "Bus Service for Corporate Office Picnic",
      "description": "Plan a memorable corporate picnic with our dedicated bus services. Samarth Travels offers buses of various sizes, including AC and Non-AC options, to ensure your employees have a comfortable journey to the picnic location."
    },
    {
      "name": "Bus Service for Corporate Outing Pune",
      "description": "Make your corporate outing stress-free with Samarth Travels' bus services. Our buses come with experienced drivers and comfortable seating to ensure a pleasant ride for your entire team."
    },
    {
      "name": "Mini Bus for Corporate Outing",
      "description": "Our mini buses are ideal for smaller corporate outings. With seating for smaller groups, our mini buses offer the perfect balance of comfort and flexibility for your team events."
    },
    {
      "name": "AC / Non AC Bus for Corporate Events",
      "description": "Choose between AC or Non-AC buses for your corporate events with Samarth Travels. We provide buses that cater to all types of corporate needs, whether it’s a conference, seminar, or team-building event."
    },
    {
      "name": "17, 26, 32, 35, 45 Seater Bus for Corporate Outing",
      "description": "For large or small corporate outings, we offer a wide range of bus sizes, from 17 to 45 seats, ensuring that your entire team travels together in comfort and style."
    },
    {
      "name": "Employee Transportation Services in Pune",
      "description": "Samarth Travels offers reliable and affordable employee transportation services in Pune. Our buses and cabs provide hassle-free daily commutes for your employees with a focus on punctuality and safety."
    },
    {
      "name": "Bus on Rent for Corporate in Pune",
      "description": "Whether it's a one-time event or regular employee transport, Samarth Travels offers buses on rent for corporate needs. Our buses are well-maintained, comfortable, and equipped with all the amenities you need."
    },
    {
      "name": "Corporate Bus Services in Hadapsar",
      "description": "For companies in Hadapsar, Samarth Travels provides efficient and reliable Corporate Bus services. Whether it’s for daily commuting or one-off business trips, our cabs offer a comfortable and safe travel experience."
    },
    {
      "name": "Corporate Bus Services in Viman Nagar",
      "description": "Samarth Travels offers Corporate Bus services in Viman Nagar, Pune. Perfect for employee transport, business meetings, or corporate events, our cabs ensure timely and safe arrival."
    },
    {
      "name": "Corporate Bus Services in Hinjewadi",
      "description": "For businesses in Hinjewadi, Samarth Travels provides reliable Corporate Bus services. Our professional drivers ensure prompt and comfortable travel for your employees or executives."
    },
    {
      "name": "Corporate Bus Services in Baner Aundh",
      "description": "Samarth Travels offers Corporate Bus services in Baner and Aundh, Pune. Whether you need transport for meetings, team-building events, or daily office commutes, our services cater to all your needs."
    },
    {
      "name": "Bus Rental for Corporate Events",
      "description": "Rent buses for corporate events with Samarth Travels. We provide a variety of buses with different seating capacities and options, perfect for conferences, workshops, seminars, or employee travel."
    }
  ],
  "tableData": [
    ["Bus Service for Corporate Office Pune", "Bus Service for Corporate Office Picnic"],
    ["Bus Service for Corporate Outing Pune", "Mini Bus for Corporate Outing"],
    ["AC / Non AC Bus for Corporate Events", "17, 26, 32, 35, 45 Seater Bus for Corporate Outing"],
    ["Employee Transportation Services in Pune", "Bus on Rent for Corporate in Pune"],
    ["Corporate Bus Services in Hadapsar", "Corporate Bus Services in Viman Nagar"],
    ["Corporate Bus Services in Hinjewadi", "Corporate Bus Services in Baner Aundh"],
    ["Bus Rental for Corporate Events", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Service for Corporate Events in Pune",
        "WhyChoosedescription": "We provide dependable bus rental services for corporate events in Pune, including meetings, seminars, conferences, team-building activities, and more. Our buses ensure smooth, punctual, and efficient transportation for your employees, clients, and partners, making the corporate event seamless."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Buses for Corporate Groups",
        "WhyChoosedescription": "Our fleet of buses is designed for comfort, featuring spacious seating, air-conditioning, and ample legroom. Whether you’re traveling a short distance or embarking on a long journey, your employees or clients will travel in comfort and style."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers for Corporate Travel",
        "WhyChoosedescription": "Our drivers are professional, courteous, and punctual, ensuring a safe and smooth travel experience. They are familiar with corporate event venues across Pune, ensuring timely pick-ups and drop-offs while maintaining the highest levels of professionalism."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Corporate Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for corporate bus rentals, with no hidden fees. Our flexible rental packages are designed to fit your company’s needs and budget, providing high-quality transportation without compromising on service."
    },
    {
        "WhyChooseheading": "24/7 Availability for Corporate Event Flexibility",
        "WhyChoosedescription": "Our bus rental services are available 24/7, offering flexibility for any corporate schedule. Whether your event runs into the evening or requires early morning transportation, we provide reliable, round-the-clock service for all your corporate transportation needs."
    },
    {
        "WhyChooseheading": "Simple Booking and Real-Time Updates for Corporate Event Coordination",
        "WhyChoosedescription": "Booking a bus for your corporate event is quick and easy. Once your booking is confirmed, you’ll receive real-time tracking information, driver contact details, and arrival updates, ensuring smooth coordination and peace of mind for event planners."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses for Corporate Travel",
        "WhyChoosedescription": "We maintain our buses to the highest standards of cleanliness and safety. Each bus is thoroughly cleaned and sanitized before every trip, providing a hygienic and comfortable environment for your employees or clients."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Corporate Convenience",
        "WhyChoosedescription": "We offer multiple payment methods including UPI, credit/debit cards, digital wallets, and cash, making it convenient and secure for companies to complete their bus rental bookings with ease."
    }
]




















    }

const faqData = [
    {
        id: 1,
        question: 'How can I book a bus for corporate travel in Pune with Samarth Travels?',
        answer: 'Booking a corporate bus service with Samarth Travels is easy. Just reach out via our website or call our support team. Share your travel needs such as office location, number of employees, and schedule—we’ll arrange the right vehicle with professional service.',
    },
    {
        id: 2,
        question: 'What types of buses are available for corporate use?',
        answer: 'We offer a range of AC and Non-AC buses including 22-seater, 32-seater, 40-seater, and 50-seater options. These are perfect for daily office commutes, corporate events, team outings, and client visits.',
    },
    {
        id: 3,
        question: 'Are buses available for daily employee transportation?',
        answer: 'Yes, Samarth Travels provides daily staff transportation services. We can create a tailored route and schedule for your employees, ensuring timely pickups and drop-offs with full safety and comfort.',
    },
    {
        id: 4,
        question: 'Do you provide transport services for corporate events or offsites?',
        answer: 'Absolutely. Whether it’s a one-day seminar, conference, training session, or an outstation team outing, we offer reliable transportation solutions to meet your event schedule.',
    },
    {
        id: 5,
        question: 'What are the rental charges for corporate bus services?',
        answer: 'Corporate bus rental charges vary based on the type of service (daily, weekly, one-time), bus size, and travel distance. Rates typically start from ₹35/km. We offer customized packages for long-term contracts and event-based bookings.',
    },
    {
        id: 6,
        question: 'Can the buses be branded with our company logo?',
        answer: 'Yes, we offer optional external branding and interior branding for long-term corporate partnerships. This helps maintain a professional look and reinforces your brand identity.',
    },
    {
        id: 7,
        question: 'Is there customer support for corporate travel services?',
        answer: 'Yes, Samarth Travels offers 24/7 customer support. We also assign a dedicated transport coordinator for corporate clients to ensure smooth operations and quick assistance when needed.',
    },
];

const testimonials = [
    {
        name: 'Mr. Alok Nair',
        role: 'HR Manager, IT Firm',
        text: 'Samarth Travels provides daily office commute buses for our Pune office. Their buses are always on time, clean, and the drivers are disciplined. It’s a hassle-free experience for our employees.',
        image: '/img/testimonial/testi_corporate_alok.jpg',
    },
    {
        name: 'Ms. Shraddha Mehta',
        role: 'Corporate Events Manager',
        text: 'We hired Samarth Travels for our annual corporate outing. The service was excellent, buses were comfortable, and coordination was seamless. We’ll definitely continue working with them.',
        image: '/img/testimonial/testi_corporate_shraddha.jpg',
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
  "name": "Bus Service for Corporate Pune",
  "image": "https://samarthtravels.com/assets/images/corporate-bus-service-pune.jpg", // Replace with actual image URL
  "description": "Book reliable and comfortable bus services for corporate outings, office picnics, and employee transportation in Pune. Options include 17, 26, 32, 35, and 45-seater AC and Non-AC buses for corporate events and team outings.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "6021"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "8500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-service-for-corporate-pune" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Bus Service for Corporate in Pune | Corporate Outings, Employee Transport & Office Picnics</title>
  <meta 
    name="description" 
    content="Book bus services for corporate events, office outings, and employee transportation in Pune with Samarth Travels. Choose from AC and Non-AC buses for corporate picnics and team outings." 
  />
  <meta 
    name="keywords" 
    content="Bus Service for corporate office pune, Bus Service for corporate office picnic, Bus service for corporate outing pune, Mini bus for corporate outing, Ac / Non Ac bus for corporate Events, 17, 26, 32, 35, 45 Seater Bus for corporate Outing, Employee Transportation Services in Pune, Bus On Rent For Corporate in Pune, Corporate Bus services in hadapsar, Corporate Bus Services in Viman Nagar, Corporate Bus services in Hinjewadi, Corporate Bus services in Baner Aundh, bus rental for corporate events" 
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
                            <img src='/images/keyword/63.jpg' alt='img' />
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

export default Busserviceforcorporate;