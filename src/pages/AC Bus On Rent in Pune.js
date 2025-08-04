
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Acbusonrentinpune() {



    const cardData =
    {
        keyword: ' AC Bus On Rent in Pune',
        heading: 'Samarth Travels:  AC Bus On Rent in Pune',
        headingDescription: 'Samarth Travels offers AC bus on rent in Pune, ideal for weddings, corporate events, school trips, and outstation tours. Our fleet of air-conditioned 32-seater and 45-seater buses ensures a cool, comfortable, and stress-free travel experience for all passengers. With push-back seats, clean interiors, experienced drivers, and transparent pricing, Samarth Travels guarantees reliable and pleasant transportation for every occasion.',

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
      "name": "AC Bus for Hire in Pune",
      "description": "Samarth Travels offers AC bus rentals in Pune for all types of group travel. Whether it’s a family trip, corporate outing, or a tourist group, our air-conditioned buses provide a smooth and comfortable ride with push-back seats, ample luggage space, and reliable service."
    },
    {
      "name": "AC Bus for Mumbai Darshan from Pune",
      "description": "Explore the vibrant city of Mumbai with our AC buses from Pune. Our well-maintained buses ensure a comfortable sightseeing experience across major landmarks, making your Mumbai Darshan smooth and enjoyable."
    },
    {
      "name": "Pune to Mumbai Airport Tempo Traveller on Rent",
      "description": "Book a Tempo Traveller for convenient transport from Pune to Mumbai Airport. Ideal for group travel, our AC Tempo Travellers offer spacious seating, air-conditioning, and timely service for a stress-free airport transfer."
    },
    {
      "name": "Pune to Jejuri Tempo Traveller Rent",
      "description": "Visit the famous Khandoba temple in Jejuri with our Tempo Traveller rental service from Pune. Our vehicles ensure a smooth, safe, and comfortable journey for your spiritual outing."
    },
    {
      "name": "Bharat Benz AC Seater Bus on Rent",
      "description": "Experience luxury travel with our Bharat Benz AC seater buses. Equipped with modern amenities and plush seating, these buses are ideal for long-distance journeys, corporate travel, and premium tour packages."
    },
    {
      "name": "17, 26, 32, 35, 45 AC Seater Bharat Benz Bus on Hire",
      "description": "Choose from a range of Bharat Benz AC seater buses — 17, 26, 32, 35, or 45 seaters — for your group travel needs. Perfect for events, tours, and corporate transfers, these buses offer unmatched comfort and safety."
    },
    {
      "name": "Pune to Goa AC Bus Hire on Rent",
      "description": "Travel in comfort from Pune to Goa with our AC bus rental services. Whether you're heading for a vacation or group retreat, our buses ensure a smooth and enjoyable journey to the beach paradise."
    },
    {
      "name": "Hire Pune to Kolhapur Car, Bus & Tempo Traveller on Rent",
      "description": "Samarth Travels provides car, bus, and Tempo Traveller rentals for trips from Pune to Kolhapur. Choose from various AC vehicles based on your group size and enjoy a comfortable journey to this historic city."
    },
    {
      "name": "AC Bus on Rent in Pimpri Chinchwad",
      "description": "Looking for AC buses in Pimpri Chinchwad? Samarth Travels offers reliable and comfortable AC bus rentals in the region, ideal for weddings, corporate trips, and family travel."
    },
    {
      "name": "AC Bus for School Picnic in Pune",
      "description": "Ensure student safety and comfort with our AC buses for school picnics in Pune. Our buses are clean, well-maintained, and operated by experienced drivers for secure school outings."
    },
    {
      "name": "Urbania Bus on Rent in Pune",
      "description": "Hire a Force Urbania bus in Pune for luxury group travel. With premium interiors, air-conditioning, and ample legroom, it’s a great choice for family trips, corporate travel, and city tours."
    },
    {
      "name": "Force Urbania Luxury Mini Bus on Rent",
      "description": "Samarth Travels offers Force Urbania luxury mini buses for rent in Pune. These stylish and modern vehicles are ideal for executive transport, weddings, and outstation family tours with AC, recliner seats, and entertainment options."
    },
    {
      "name": "AC 17 Seater Bus on Rent in Pune",
      "description": "Rent a 17-seater AC bus in Pune for small group travel. Perfect for picnics, tours, or corporate outings, this mid-sized bus offers a comfortable and air-conditioned journey across destinations."
    }
  ],
  "tableData": [
    ["AC Bus for Hire in Pune", "AC Bus for Mumbai Darshan from Pune"],
    ["Pune to Mumbai Airport Tempo Traveller on Rent", "Pune to Jejuri Tempo Traveller Rent"],
    ["Bharat Benz AC Seater Bus on Rent", "17, 26, 32, 35, 45 AC Seater Bharat Benz Bus on Hire"],
    ["Pune to Goa AC Bus Hire on Rent", "Hire Pune to Kolhapur Car, Bus & Tempo Traveller on Rent"],
    ["AC Bus on Rent in Pimpri Chinchwad", "AC Bus for School Picnic in Pune"],
    ["Urbania Bus on Rent in Pune", "Force Urbania Luxury Mini Bus on Rent"],
    ["AC 17 Seater Bus on Rent in Pune", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable AC Bus Rental Service in Pune",
        "WhyChoosedescription": "We provide reliable AC bus rental services in Pune, offering a comfortable and air-conditioned travel experience for groups of any size. Whether it’s for a corporate event, family trip, wedding, or any other occasion, we ensure your journey is smooth, comfortable, and on time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious AC Buses for All Groups",
        "WhyChoosedescription": "Our AC buses are designed for comfort, featuring spacious seating, air-conditioning, and ample legroom. Whether you're planning a short journey or a long-distance trip, your group will enjoy a relaxed and enjoyable ride with perfect climate control."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers for Safe Travel",
        "WhyChoosedescription": "Our professional drivers are experienced, punctual, and trained to ensure safe and efficient travel. They are familiar with the best routes in Pune and beyond, ensuring smooth and timely transportation for your group to any destination."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for AC Bus Rentals",
        "WhyChoosedescription": "We offer affordable and transparent pricing for AC bus rentals, with no hidden fees. Our rental packages are flexible, ensuring you get the best value for your transportation needs, no matter the size of your group or duration of travel."
    },
    {
        "WhyChooseheading": "24/7 Availability for AC Bus Rentals in Pune",
        "WhyChoosedescription": "Our AC buses are available for rental 24/7, offering flexibility to match your schedule. Whether you need transportation for early morning meetings, late-night events, or weekend getaways, we ensure reliable and timely service at any time of the day or night."
    },
    {
        "WhyChooseheading": "Simple Booking and Real-Time Updates for Easy Coordination",
        "WhyChoosedescription": "Booking an AC bus is simple and efficient. Once your booking is confirmed, you’ll receive real-time updates, tracking details, and driver contact information, helping you manage your travel logistics with ease and confidence."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained AC Buses",
        "WhyChoosedescription": "We prioritize the cleanliness and safety of our buses. All our AC buses are thoroughly cleaned and sanitized before every trip, ensuring a hygienic environment for your group. Regular maintenance ensures that buses are in optimal condition for a safe and comfortable journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenient Booking",
        "WhyChoosedescription": "We offer various payment options including UPI, credit/debit cards, digital wallets, and cash, making it easy and secure to book your AC bus rental in Pune."
    }
]




















    }

const faqData = [
    {
        id: 1,
        question: 'How do I rent an AC bus in Pune with Samarth Travels?',
        answer: 'Renting an AC bus in Pune is simple with Samarth Travels. You can book online through our website or call our team. Provide your travel details such as the number of passengers, destination, and date, and we’ll arrange the perfect AC bus for your trip.',
    },
    {
        id: 2,
        question: 'What sizes of AC buses are available for rent?',
        answer: 'We offer AC buses in multiple seating capacities including 22-seater, 32-seater, 40-seater, and 50-seater options. All buses are well-maintained and ideal for group travel, corporate trips, weddings, and tours.',
    },
    {
        id: 3,
        question: 'Are AC buses suitable for outstation or long-distance travel?',
        answer: 'Yes, our AC buses are perfect for long journeys and outstation travel. They come with features like pushback seats, air conditioning, spacious interiors, and luggage storage to ensure a comfortable ride.',
    },
    {
        id: 4,
        question: 'What are the rental charges for AC buses in Pune?',
        answer: 'Rental rates for AC buses in Pune start from ₹38–₹45/km depending on the bus size. We also offer local hourly packages and customized outstation plans. Contact us for a tailored quote based on your needs.',
    },
    {
        id: 5,
        question: 'Do rental packages include the driver and fuel?',
        answer: 'Yes, all AC bus rentals include a professional driver and fuel. Any tolls, parking charges, or interstate permits are communicated clearly in advance for full transparency.',
    },
    {
        id: 6,
        question: 'Can I customize pickup and drop-off points?',
        answer: 'Absolutely! We offer flexible pickup and drop-off locations as per your convenience, whether it’s homes, offices, hotels, or event venues. We ensure timely and smooth travel for your group.',
    },
    {
        id: 7,
        question: 'Is support available during the rental period?',
        answer: 'Yes, Samarth Travels provides 24/7 support for all AC bus rentals. Our team is available to help with route adjustments, emergencies, or any last-minute changes.',
    },
];

const testimonials = [
    {
        name: 'Mr. Amit Tiwari',
        role: 'Corporate Admin',
        text: 'We booked a 40-seater AC bus from Samarth Travels for a team offsite. The bus was in excellent condition, very comfortable, and arrived on time. The whole process was smooth and professional.',
        image: '/img/testimonial/testi_acbus_amit.jpg',
    },
    {
        name: 'Ms. Rina Deshpande',
        role: 'Wedding Coordinator',
        text: 'Samarth Travels provided a 50-seater AC bus for wedding guest transportation. The bus was clean, well-ventilated, and the driver was courteous. Highly reliable service!',
        image: '/img/testimonial/testi_acbus_rina.jpg',
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
  "name": "AC Bus On Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/ac-bus-on-rent-in-pune.jpg", // Replace with actual image URL
  "description": "Rent AC buses in Pune with Samarth Travels for city tours, outstation travel, school picnics, and corporate events. Choose from 17, 26, 32, 35, and 45-seater Bharat Benz or Urbania luxury mini buses for comfortable group journeys.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "5732"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "8800",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/ac-bus-on-rent-in-pune" // Replace with actual page URL
  }
};




    return (
        <div>


<Helmet>
  <title>AC Bus On Rent in Pune | Bharat Benz & Urbania AC Bus Hire</title>
  <meta 
    name="description" 
    content="Book AC buses in Pune for local and outstation travel with Samarth Travels. Choose from Bharat Benz, Urbania, and luxury mini buses for comfortable group travel. Available for picnics, airport drops, and events." 
  />
  <meta 
    name="keywords" 
    content="Ac bus for hire in pune, Ac bus for Mumbai Darshan from pune, Pune to Mumbai airport tempo traveller on Rent, Pune to Jejuri tempo traveller rent, Bharat Benz Ac Seater bus on Rent, 17, 26, 32,35, 45 Ac Seater Bharat Benz Bus On Hire, Pune to Goa Ac Bus Hire On Rent, Hire Pune to Kolhapur Car, Bus & Tempo Traveller on Rent, Ac Bus On Rent in Pimpri Chinchwad, AC bus for School Picnic in Pune, Urbania bus on rent in Pune, Force Urbania Luxury Mini Bus On Rent, Ac 17 seater bus on Rent in Pune" 
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
                            <img src='/images/keyword/67.jpg' alt='img' />
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

export default Acbusonrentinpune;