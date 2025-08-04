
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Tempotravellerhire() {



    const cardData =
    {
        keyword: ' Tempo Traveller Hire in Pune',
        heading: 'Samarth Travels:  Tempo Traveller Hire in Pune',
        headingDescription: 'Samarth Travels provides dependable and affordable Tempo Traveller hire services in Pune, ideal for group outings, corporate events, or family trips. Choose from a fleet of well-maintained vehicles, including 12-seater and 13-seater options, all equipped with comfortable seating and essential amenities. With transparent pricing, no hidden charges, and a commitment to punctuality and customer satisfaction, Samarth Travels ensures a smooth and enjoyable travel experience across Pune and beyond.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

        "topPlaces": [
            {
                "title": "Pataleshwar Cave Temple",
                "description": "The Pataleshwar Cave Temple is a unique 8th-century rock-cut shrine dedicated to Lord Shiva. Carved from a single massive basalt rock, this ancient temple is a fine example of monolithic architecture from the Rashtrakuta period. Its main sanctum houses a linga, and the surrounding sanctum sanctorum includes statues of other deities. Despite being in the middle of the bustling city, it offers a tranquil and spiritual atmosphere for visitors."
            }, 
            {
                "title": "Sinhagad Fort",
                "description": "Perched atop the Sahyadri hills, Sinhagad Fort is a historic hill fortress located about 30 kilometers from Pune. Famous for the Battle of Sinhagad in 1670, where Maratha warrior Tanaji Malusare fought valiantly, the fort offers breathtaking views, trekking trails, and remnants of ancient military architecture including bastions, gates, and memorials. It's an ideal destination for trekking enthusiasts, history buffs, and nature lovers alike."
            },
            {
                "title": "Shaniwar Wada",
                "description": "Shaniwar Wada is one of Pune's most iconic landmarks and a symbol of the Maratha Empire. Built in 1732 as the seat of the Peshwas, this grand fortification features majestic gates, elegant fountains, and intricate architecture. Although much of it was destroyed by fire in 1828, its massive stone walls and legendary tales—especially those surrounding the ghost of Narayanrao—still attract thousands of history lovers and tourists each year."
            },
            {
                "title": "Aga Khan Palace",
                "description": "The Aga Khan Palace is a stunning historical monument built in 1892 by Sultan Aga Khan III. It holds immense national significance due to its association with Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters who were imprisoned here during the Quit India Movement. Set in lush green gardens, the palace showcases Italian arches and spacious halls and also houses a museum with photographs, paintings, and personal belongings of Gandhi, making it a must-visit for those interested in India’s independence movement."
            },
            {
                "title": "Dagdusheth Halwai Ganpati Temple",
                "description": "This revered Ganesh temple is one of the most visited and richly adorned temples in Maharashtra. Established by a sweet-maker named Dagdusheth Halwai in the late 19th century, the temple is known for its magnificent idol of Lord Ganesh decked in gold and diamonds. The temple draws massive crowds during the Ganesh Chaturthi festival, and its serene ambiance makes it a spiritual haven throughout the year."
            },
            {
                "title": "Raja Dinkar Kelkar Museum",
                "description": "This museum is a treasure trove of Indian heritage and folk art, established by Dr. Dinkar Kelkar in memory of his son. It houses over 20,000 rare and artistic artifacts, including musical instruments, sculptures, paintings, utensils, weaponry, and textiles from all over India. The collection gives a vivid picture of everyday life in bygone eras and is especially appealing to art enthusiasts and cultural historians."
            },
            {
                "title": "Parvati Hill and Temple",
                "description": "Rising 2,100 feet above sea level, Parvati Hill offers panoramic views of Pune city. The hilltop temple complex consists of five main temples, including the Devdeveshwar temple dedicated to Lord Shiva and Goddess Parvati. Built during the Peshwa rule, it is not only a religious site but also a peaceful escape from the city buzz. A climb of 103 stone steps leads to the summit, where history and nature meet."
            },
            {
                "title": "Osho Ashram",
                "description": "Located in the serene Koregaon Park area, the Osho International Meditation Resort is a tranquil oasis for seekers of inner peace and mindfulness. Founded by the spiritual guru Osho, it offers daily meditation sessions, yoga programs, and various wellness therapies in a luxurious, Zen-like environment. Visitors from all over the world come here for spiritual growth, rejuvenation, and to experience the calm ambiance of its lush gardens and modern facilities."
            },
            {
                "title": "Pune Okayama Friendship Garden",
                "description": "Also known as Pu La Deshpande Garden, this beautifully landscaped garden is inspired by Japan’s Okayama Korakuen Garden. Spread over 10 acres, it features artistically arranged lawns, water bodies, bridges, and pathways that create a harmonious blend of nature and design. It's a favorite among photography enthusiasts, families, and couples seeking a peaceful retreat amid nature."
            },
            {
                "title": "Katraj Snake Park and Rajiv Gandhi Zoological Park",
                "description": "This combined facility includes a zoo, snake park, and a wildlife rescue center. The snake park is known for its wide variety of snakes, including the King Cobra and Indian Python, as well as informative exhibits on reptile behavior and conservation. The adjoining zoo is home to tigers, leopards, elephants, and other animals, making it an engaging educational and recreational spot, especially for children and families."
            }
        ],

  "services": [
    {
        "name": "Hire a Tempo Traveller for Sightseeing in Pune",
        "description": "Explore the cultural and historical gems of Pune in comfort by hiring a Tempo Traveller from Samarth Travels. Ideal for tourists, families, and educational groups, our sightseeing service includes experienced drivers who know the best routes and local attractions, ensuring a smooth and enriching travel experience."
    },
    {
        "name": "Comfortable Tempo Traveller Hire for Weddings in Pune",
        "description": "Make wedding transport hassle-free by hiring a comfortable Tempo Traveller from Samarth Travels. Whether it’s for guest pickup, family transfers, or wedding venue shuttle service, our vehicles are spacious, well-maintained, and offer a smooth ride — perfect for busy wedding schedules and large gatherings."
    },
    {
        "name": "Rent a 16-Seater Tempo Traveller for Group Events",
        "description": "Organizing a group event in or around Pune? Rent a 16-seater Tempo Traveller from Samarth Travels for safe, efficient, and comfortable group transportation. Whether it’s a social gathering, sports team travel, or religious tour, our vehicles ensure everyone arrives together and on time."
    },
    {
        "name": "Tempo Traveller Hire for School Trips in Pune",
        "description": "Samarth Travels provides secure and reliable Tempo Traveller rentals for school trips in Pune. Our vehicles are ideal for educational tours, picnics, and competitions — driven by experienced staff who prioritize safety and punctuality. Book now for a comfortable and organized group travel solution."
    },
    {
        "name": "Hire an AC Tempo Traveller in Pune",
        "description": "Beat the heat with our AC Tempo Traveller hire service in Pune. Whether you’re headed for a local city tour or an outstation trip, Samarth Travels ensures a cool, relaxing ride in our fully air-conditioned vehicles. Ideal for business, leisure, or family travel during hot seasons."
    },
    {
        "name": "Pune to Alibaug Tempo Traveller Hire",
        "description": "Plan a beach getaway from Pune to Alibaug with Samarth Travels’ Tempo Traveller hire service. Enjoy scenic coastal roads and group-friendly travel with comfortable seating and ample luggage space. Perfect for weekend trips, reunions, or family vacations with flexible pickup and return scheduling."
    },
    {
        "name": "Hire Tempo Traveller for Corporate Team Outings",
        "description": "Take your team out in comfort with Samarth Travels’ corporate Tempo Traveller rentals in Pune. Whether it’s an offsite meeting, team-building event, or leisure trip, we offer clean vehicles, experienced drivers, and a smooth booking experience tailored to corporate travel needs."
    }
],
"tableData": [
    ["Hire a Tempo Traveller for Sightseeing in Pune", "Comfortable Tempo Traveller Hire for Weddings in Pune"],
    ["Rent a 16-Seater Tempo Traveller for Group Events", "Tempo Traveller Hire for School Trips in Pune"],
    ["Hire an AC Tempo Traveller in Pune", "Pune to Alibaug Tempo Traveller Hire"],
    ["Hire Tempo Traveller for Corporate Team Outings", ""]
],


  "whychoose": [
    {
        "WhyChooseheading": "Leading Tempo Traveller Hire in Pune",
        "WhyChoosedescription": "Samarth Travels is a trusted name for Tempo Traveller hire in Pune, providing safe, comfortable, and reliable transport solutions for groups of all sizes. Whether it's a family outing, corporate event, wedding, or sightseeing tour, we are dedicated to delivering exceptional service and a smooth travel experience every time."
    },
    {
        "WhyChooseheading": "Variety of Spacious and Comfortable Tempo Travellers",
        "WhyChoosedescription": "Our fleet of Tempo Travellers comes in different seating capacities, from 9-seaters to 26-seaters, to accommodate your specific needs. All our vehicles are air-conditioned, offer spacious interiors with comfortable push-back seats, and have ample space for luggage, ensuring a pleasant and stress-free journey for all passengers."
    },
    {
        "WhyChooseheading": "Experienced, Professional Drivers for Safe Travel",
        "WhyChoosedescription": "At Samarth Travels, we believe that the journey is just as important as the destination. Our drivers are highly experienced, trained in defensive driving techniques, and familiar with the best routes in and around Pune. They ensure you reach your destination safely and on time, while offering courteous and friendly service throughout the trip."
    },
    {
        "WhyChooseheading": "Affordable Pricing with No Hidden Charges",
        "WhyChoosedescription": "We offer competitive pricing for Tempo Traveller hire in Pune, with no hidden charges. Our pricing is transparent, and we provide a clear breakdown of costs before you book. What you see is what you pay, ensuring that you get the best value for your money without any unpleasant surprises."
    },
    {
        "WhyChooseheading": "Flexible 24/7 Availability for All Your Travel Needs",
        "WhyChoosedescription": "Whether you need a Tempo Traveller early in the morning or late at night, Samarth Travels is ready to serve you 24/7. We cater to all kinds of travel requirements—last-minute bookings, early departures, or late-night returns—making us a convenient and flexible choice for any occasion."
    },
    {
        "WhyChooseheading": "Convenient Online Booking and Live Vehicle Tracking",
        "WhyChoosedescription": "Booking a Tempo Traveller with Samarth Travels is simple and fast. You can easily book online through our website or app, and once your booking is confirmed, we provide live vehicle tracking and real-time updates. You’ll always know where your vehicle is, along with estimated arrival times and driver details."
    },
    {
        "WhyChooseheading": "Clean, Hygienic, and Well-Maintained Vehicles",
        "WhyChoosedescription": "We prioritize cleanliness and safety. All our Tempo Travellers undergo thorough cleaning and sanitization before and after every trip to ensure that the vehicle is hygienic and comfortable for you. We also maintain regular servicing schedules to keep our vehicles in top condition for safe and reliable travel."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Seamless Transactions",
        "WhyChoosedescription": "At Samarth Travels, we understand the importance of convenience. We offer a range of payment methods, including cash, UPI, credit/debit cards, and digital wallets, allowing you to pay in the way that suits you best. Our flexible payment options ensure a hassle-free booking and rental process."
    }
]














    }

const faqData = [
    {
        id: 1,
        question: 'How can I hire a Tempo Traveller in Pune with Samarth Travels?',
        answer: 'Hiring a Tempo Traveller in Pune with Samarth Travels is easy. Just visit our website or call our support team. Share your trip details like destination, travel dates, and group size—we’ll help you choose the right vehicle and confirm your booking instantly.',
    },
    {
        id: 2,
        question: 'What types of Tempo Travellers are available for hire in Pune?',
        answer: 'Samarth Travels offers a variety of Tempo Travellers in Pune including 9-seater, 12-seater, 17-seater, and 20-seater variants. All vehicles are spacious, well-maintained, and perfect for group outings or family trips.',
    },
    {
        id: 3,
        question: 'What is included in the Tempo Traveller hire charges?',
        answer: 'Our Tempo Traveller hire charges include the vehicle rental, driver fees, and fuel costs. Any extra charges such as tolls, parking, or permits will be informed in advance—no hidden costs.',
    },
    {
        id: 4,
        question: 'Is Tempo Traveller hire available for outstation trips from Pune?',
        answer: 'Yes, we provide Tempo Traveller hire services for both local and outstation trips from Pune. Whether it’s a pilgrimage, holiday tour, or corporate travel, we ensure a smooth and safe journey.',
    },
    {
        id: 5,
        question: 'Can I hire a Tempo Traveller for a one-day trip in Pune?',
        answer: 'Yes, you can hire a Tempo Traveller for one-day local trips, airport transfers, weddings, or even short city tours. We offer flexible booking options based on your specific requirements.',
    },
    {
        id: 6,
        question: 'Are your Tempo Travellers comfortable for long journeys?',
        answer: 'Absolutely. Our Tempo Travellers come with air-conditioning, pushback seats, clean interiors, and ample legroom, making them ideal for long journeys with friends, family, or colleagues.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 Tempo Traveller hire service in Pune?',
        answer: 'Yes, Samarth Travels operates 24/7. You can hire a Tempo Traveller at any time of the day or night, based on your travel schedule and convenience.',
    },
];

const testimonials = [
    {
        name: 'Mr. Ashok Shinde',
        role: 'Tour Planner',
        text: 'We hired a 20-seater Tempo Traveller from Samarth Travels for a group tour from Pune to Nashik. The vehicle was top-notch, and the driver was professional. Great experience overall!',
        image: '/img/testimonial/testi_2_12.jpg',
    },
    {
        name: 'Mrs. Meenal Joshi',
        role: 'Homemaker',
        text: 'Hired a 12-seater Tempo Traveller for a family wedding in Pune. Samarth Travels gave us a clean, comfortable ride with on-time service. Would definitely hire again!',
        image: '/img/testimonial/testi_2_13.jpg',
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
  "name": "Tempo Traveller Hire in Pune",
  "image": "https://samarthtravels.com/assets/images/tempo-traveller-hire-pune.jpg",
  "description": "Hire a Tempo Traveller in Pune for sightseeing, weddings, school trips, group events, and corporate outings. Choose from 16-seater, AC Tempo Travellers, and more for comfortable travel to Alibaug and other destinations.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6392"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3700",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/tempo-traveller-hire-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>Tempo Traveller Hire in Pune | Sightseeing, Weddings & Group Events | Samarth Travels</title>
  <meta 
    name="description" 
    content="Hire a Tempo Traveller in Pune for sightseeing, weddings, school trips, corporate outings, and group events. Comfortable AC and 16-seater options available, including travel to Alibaug and other destinations." 
  />
  <meta 
    name="keywords" 
    content="Hire a Tempo Traveller for Sightseeing in Pune, Comfortable Tempo Traveller Hire for Weddings in Pune, Rent a 16-Seater Tempo Traveller for Group Events, Tempo Traveller Hire for School Trips in Pune, Hire an AC Tempo Traveller in Pune, Pune to Alibaug Tempo Traveller Hire, Hire Tempo Traveller for Corporate Team Outings" 
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
                            <img src='/images/keyword/6.jpg' alt='img' />
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

export default Tempotravellerhire;