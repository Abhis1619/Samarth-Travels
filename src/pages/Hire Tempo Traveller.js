
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Hiretempotraveller() {



    const cardData =
    {
        keyword: ' Hire Tempo Traveller',
        heading: 'Samarth Travels: Hire Tempo Traveller',
        headingDescription: 'Samarth Travels offers convenient and affordable options to hire Tempo Traveller for local and outstation group travel. Choose from clean, spacious vehicles ranging from 12-seater to 17-seater, perfect for family trips, business tours, and events. With professional drivers, transparent pricing, and no hidden charges, Samarth Travels guarantees a safe and comfortable journey every time.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

        "topPlaces": [
            {
                "title": "Aga Khan Palace",
                "description": "The Aga Khan Palace is a stunning historical monument built in 1892 by Sultan Aga Khan III. It holds immense national significance due to its association with Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters who were imprisoned here during the Quit India Movement. Set in lush green gardens, the palace showcases Italian arches and spacious halls and also houses a museum with photographs, paintings, and personal belongings of Gandhi, making it a must-visit for those interested in India’s independence movement."
            },
            {
                "title": "Sinhagad Fort",
                "description": "Perched atop the Sahyadri hills, Sinhagad Fort is a historic hill fortress located about 30 kilometers from Pune. Famous for the Battle of Sinhagad in 1670, where Maratha warrior Tanaji Malusare fought valiantly, the fort offers breathtaking views, trekking trails, and remnants of ancient military architecture including bastions, gates, and memorials. It's an ideal destination for trekking enthusiasts, history buffs, and nature lovers alike."
            },
            {
                "title": "Pataleshwar Cave Temple",
                "description": "The Pataleshwar Cave Temple is a unique 8th-century rock-cut shrine dedicated to Lord Shiva. Carved from a single massive basalt rock, this ancient temple is a fine example of monolithic architecture from the Rashtrakuta period. Its main sanctum houses a linga, and the surrounding sanctum sanctorum includes statues of other deities. Despite being in the middle of the bustling city, it offers a tranquil and spiritual atmosphere for visitors."
            }, 
            {
                "title": "Shaniwar Wada",
                "description": "Shaniwar Wada is one of Pune's most iconic landmarks and a symbol of the Maratha Empire. Built in 1732 as the seat of the Peshwas, this grand fortification features majestic gates, elegant fountains, and intricate architecture. Although much of it was destroyed by fire in 1828, its massive stone walls and legendary tales—especially those surrounding the ghost of Narayanrao—still attract thousands of history lovers and tourists each year."
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
        "name": "Hire a Tempo Traveller for Group Trips",
        "description": "Planning a group trip with friends or family? Samarth Travels offers comfortable and spacious Tempo Travellers for group trips. Whether you’re heading to nearby attractions or outstation destinations, our Tempo Travellers are equipped with all the necessary amenities to ensure a smooth and enjoyable journey."
    },
    {
        "name": "Tempo Traveller Hire for Business Events in Pune",
        "description": "Transport your team or clients to business events in style with Samarth Travels’ Tempo Traveller hire services in Pune. Our fleet of well-maintained vehicles ensures comfortable travel with ample space for both work and leisure, making business events stress-free and enjoyable."
    },
    {
        "name": "Hire a Tempo Traveller for Pune to Lonavala",
        "description": "Rent a Tempo Traveller for your trip from Pune to Lonavala and enjoy a comfortable and hassle-free journey. Whether it’s a family outing, corporate retreat, or a group adventure, our vehicles offer ample space, air conditioning, and a smooth ride to this popular hill station."
    },
    {
        "name": "Rent a Tempo Traveller for Family Vacations",
        "description": "Make your family vacations more enjoyable with a spacious Tempo Traveller from Samarth Travels. Our vehicles are perfect for family trips, offering plenty of space for luggage, comfortable seating, and a safe, reliable journey to your destination."
    },
    {
        "name": "Tempo Traveller Hire for Pune to Nashik Tour",
        "description": "Explore the divine city of Nashik with a comfortable and affordable Tempo Traveller rental from Pune. Samarth Travels offers reliable, well-maintained vehicles with professional drivers, ensuring that your trip to Nashik for sightseeing or pilgrimage is pleasant and worry-free."
    },
    {
        "name": "Hire Tempo Traveller for Corporate Events",
        "description": "Transport your corporate team to events, conferences, and seminars with ease by hiring a Tempo Traveller from Samarth Travels. Our vehicles offer spacious seating, air conditioning, and timely service, making them ideal for corporate trips around Pune and beyond."
    },
    {
        "name": "Best Tempo Traveller Hire Services in Pune",
        "description": "For the best Tempo Traveller hire services in Pune, look no further than Samarth Travels. We offer a fleet of well-maintained Tempo Travellers with a variety of seating capacities to cater to your specific needs. Whether it's for sightseeing, business, or family trips, we provide a smooth and comfortable experience at competitive rates."
    }
],
"tableData": [
    ["Hire a Tempo Traveller for Group Trips", "Tempo Traveller Hire for Business Events in Pune"],
    ["Hire a Tempo Traveller for Pune to Lonavala", "Rent a Tempo Traveller for Family Vacations"],
    ["Tempo Traveller Hire for Pune to Nashik Tour", "Hire Tempo Traveller for Corporate Events"],
    ["Best Tempo Traveller Hire Services in Pune", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Trusted Choice for Hiring Tempo Traveller",
        "WhyChoosedescription": "Samarth Travels is your go-to provider for hiring a Tempo Traveller in Pune. Whether it’s a family vacation, corporate trip, or group tour, we offer reliable, comfortable, and punctual service. We ensure your journey is smooth, hassle-free, and enjoyable with our well-maintained vehicles and experienced drivers."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Tempo Travellers",
        "WhyChoosedescription": "Our Tempo Travellers are designed to offer maximum comfort and convenience for group travel. With seating options ranging from 9 to 26 seats, all vehicles are air-conditioned, well-maintained, and equipped with ample legroom and push-back seats. Whether it’s a short ride around Pune or a long-distance journey, you’ll travel in comfort."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "When you hire a Tempo Traveller from Samarth Travels, you’ll be accompanied by a skilled and professional driver. Our drivers are experienced, familiar with the best routes, and prioritize safety while ensuring a smooth and timely journey. They are also friendly, courteous, and dedicated to providing excellent service throughout your trip."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive and transparent pricing when you hire a Tempo Traveller with Samarth Travels. Our pricing is clear, with no hidden fees, ensuring you get the best value for your money. Whether you’re renting for a day trip or a longer excursion, you can trust us to provide an honest and affordable service."
    },
    {
        "WhyChooseheading": "24/7 Availability for Your Convenience",
        "WhyChoosedescription": "Whether you need a Tempo Traveller for an early morning departure, late-night return, or last-minute booking, Samarth Travels is available 24/7. We offer flexible scheduling to accommodate your travel plans, making sure you have a vehicle whenever you need it."
    },
    {
        "WhyChooseheading": "Easy Online Booking and Real-Time Updates",
        "WhyChoosedescription": "Booking your Tempo Traveller with Samarth Travels is simple and hassle-free. You can easily reserve a vehicle through our website or by calling our customer support team. Once your booking is confirmed, you’ll receive real-time updates with live tracking, driver details, and estimated arrival times, ensuring you’re always in the loop."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Vehicles",
        "WhyChoosedescription": "We take cleanliness and safety seriously. All our Tempo Travellers are thoroughly cleaned and sanitized before every trip, ensuring a hygienic environment for you and your group. Our vehicles undergo regular maintenance checks to ensure they are in top condition for a safe and comfortable journey."
    },
    {
        "WhyChooseheading": "Flexible Payment Options for Easy Transactions",
        "WhyChoosedescription": "At Samarth Travels, we make payments easy with a variety of options to choose from. Whether you prefer cash, UPI, credit/debit cards, or digital wallets, we offer flexible and secure payment methods to suit your convenience, ensuring a smooth booking process from start to finish."
    }
]


















    }

const faqData = [
    {
        id: 1,
        question: 'How can I hire a Tempo Traveller with Samarth Travels?',
        answer: 'Hiring a Tempo Traveller with Samarth Travels is simple. You can book online through our website or contact our customer service team. Just share your travel details such as destination, number of passengers, and dates, and we will provide the perfect Tempo Traveller for your needs.',
    },
    {
        id: 2,
        question: 'What types of Tempo Travellers are available for hire?',
        answer: 'Samarth Travels offers a range of Tempo Travellers for hire, including 9-seater, 12-seater, 17-seater, and 20-seater options. All vehicles are well-maintained, air-conditioned, and perfect for group travel, family outings, or corporate events.',
    },
    {
        id: 3,
        question: 'What is included in the Tempo Traveller hire charges?',
        answer: 'The rental charges include the vehicle, driver, fuel, and applicable taxes. We maintain complete transparency, and any additional costs, such as tolls, parking, or permits, are communicated to you beforehand.',
    },
    {
        id: 4,
        question: 'Is it possible to hire a Tempo Traveller for outstation trips?',
        answer: 'Yes, we provide Tempo Travellers for both local and outstation trips. Whether you’re traveling to nearby hill stations like Lonavala, Mahabaleshwar, or further outstation destinations, our vehicles ensure a smooth and comfortable journey.',
    },
    {
        id: 5,
        question: 'Can I hire a Tempo Traveller for a one-day trip?',
        answer: 'Yes, we offer one-day Tempo Traveller hires for events, sightseeing tours, or corporate outings. We have flexible packages to suit both short-term and extended travel needs.',
    },
    {
        id: 6,
        question: 'Are the Tempo Travellers comfortable for long journeys?',
        answer: 'Absolutely! Our Tempo Travellers are equipped with comfortable seats, air-conditioning, ample luggage space, and clean interiors, ensuring a comfortable ride for long-distance trips.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 Tempo Traveller hire services?',
        answer: 'Yes, Samarth Travels provides 24/7 Tempo Traveller hire services. Whether you need a vehicle early in the morning or late at night, we are always ready to assist with your travel needs.',
    },
];

const testimonials = [
    {
        name: 'Mr. Vikas Sharma',
        role: 'Corporate Executive',
        text: 'We hired a 17-seater Tempo Traveller from Samarth Travels for a company retreat. The vehicle was well-maintained and the driver was professional. It made our trip hassle-free and enjoyable.',
        image: '/img/testimonial/testi_2_22.jpg',
    },
    {
        name: 'Mrs. Rupal Mehta',
        role: 'Event Planner',
        text: 'I hired a 12-seater Tempo Traveller from Samarth Travels for a family function. The ride was comfortable, on time, and well-coordinated. I will definitely use their services again for future events.',
        image: '/img/testimonial/testi_2_23.jpg',
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
  "name": "Hire Tempo Traveller",
  "image": "https://samarthtravels.com/assets/images/hire-tempo-traveller.jpg",
  "description": "Hire a Tempo Traveller in Pune for group trips, business events, family vacations, and tours to destinations like Lonavala, Nashik, and more. Best Tempo Traveller hire services available with Samarth Travels.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6124"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/hire-tempo-traveller"
  }
};




    return (
        <div>
<Helmet>
  <title>Hire Tempo Traveller in Pune | Group Trips, Business Events & Tours | Samarth Travels</title>
  <meta 
    name="description" 
    content="Hire a Tempo Traveller in Pune for group trips, family vacations, corporate events, and tours to Lonavala, Nashik, and more. Best hire services available for all your travel needs with Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="Hire a Tempo Traveller for Group Trips, Tempo Traveller Hire for Business Events in Pune, Hire a Tempo Traveller for Pune to Lonavala, Rent a Tempo Traveller for Family Vacations, Tempo Traveller Hire for Pune to Nashik Tour, Hire Tempo Traveller for Corporate Events, Best Tempo Traveller Hire Services in Pune" 
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
                            <img src='/images/keyword/11.jpg' alt='img' />
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

export default Hiretempotraveller;