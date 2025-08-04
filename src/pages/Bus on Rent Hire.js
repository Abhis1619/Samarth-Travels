
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busonrenthire() {



    const cardData =
    {
        keyword: ' Bus on Rent Hire',
        heading: 'Samarth Travels:  Bus on Rent Hire',
        headingDescription: 'Samarth Travels offers dependable and affordable bus rental services in Pune, ideal for group outings, corporate events, or family trips. Choose from a range of well-maintained buses, including 14-seater, 17-seater, 24-seater, 32-seater, 40-seater, and 50-seater options, all equipped with comfortable seating and essential amenities. With transparent pricing, no hidden charges, and a commitment to punctuality and customer satisfaction, Samarth Travels ensures a smooth and enjoyable travel experience across Pune and beyond.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

        "topPlaces": [
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
        "name": "Bus on Rent Hire for Corporate Functions in Pune",
        "description": "Organizing a corporate function or business event? Samarth Travels offers dependable bus rental services in Pune tailored for corporate needs. With air-conditioned buses, punctual service, and professional drivers, we ensure a smooth experience for team transfers, seminars, and client transportation."
    },
    {
        "name": "Wedding Bus on Rent Hire in Pune",
        "description": "Simplify wedding logistics by hiring a bus for your big day with Samarth Travels. Our buses are perfect for transporting guests, relatives, and friends between wedding venues. Clean, spacious, and reliable – we make wedding travel stress-free, coordinated, and comfortable."
    },
    {
        "name": "Rent a Bus for Group Travel in Pune",
        "description": "Travel together with ease by renting a bus for group travel in Pune. Samarth Travels offers a fleet of buses suited for friends, families, or teams traveling locally or outstation. Enjoy ample seating, air conditioning, and a smooth ride with our experienced drivers."
    },
    {
        "name": "Hire a Bus for School Trips from Pune",
        "description": "Samarth Travels provides secure and well-maintained buses for school trips from Pune. Whether for picnics, educational tours, or competitions, our drivers are vetted and trained to ensure a safe, timely, and smooth experience for students and school staff alike."
    },
    {
        "name": "Budget Bus Hire Services in Pune",
        "description": "Get reliable group transportation at pocket-friendly prices with Samarth Travels’ budget bus hire services in Pune. Ideal for schools, colleges, event organizers, and families looking for affordable yet quality transport without compromising on comfort or safety."
    },
    {
        "name": "Rent a Bus for Pune to Shirdi Trip",
        "description": "Planning a spiritual journey from Pune to Shirdi? Rent a bus from Samarth Travels for a safe and comfortable pilgrimage experience. Our buses are ideal for large groups and are equipped for long-distance travel with experienced drivers familiar with the route."
    },
    {
        "name": "Hire a Bus for Corporate Outings in Pune",
        "description": "Make your corporate outings more enjoyable and hassle-free with Samarth Travels’ bus hire service in Pune. Whether it’s a team-building retreat or a company event, we provide comfortable transport with timely service and fully air-conditioned vehicles."
    }
],
"tableData": [
    ["Bus on Rent Hire for Corporate Functions in Pune", "Wedding Bus on Rent Hire in Pune"],
    ["Rent a Bus for Group Travel in Pune", "Hire a Bus for School Trips from Pune"],
    ["Budget Bus Hire Services in Pune", "Rent a Bus for Pune to Shirdi Trip"],
    ["Hire a Bus for Corporate Outings in Pune", ""]
],


 "whychoose": [
    {
        "WhyChooseheading": "Reliable Bus on Rent Hire Services",
        "WhyChoosedescription": "Samarth Travels is your trusted partner for bus on rent hire, offering a comprehensive fleet of buses for every occasion. Whether it’s a corporate event, family reunion, school trip, or long-distance travel, our well-maintained buses provide the comfort, safety, and dependability you need to make your trip successful."
    },
    {
        "WhyChooseheading": "Wide Range of Buses to Suit Any Group Size",
        "WhyChoosedcription": "From 17-seater minibuses to 50+ seater luxury coaches, our diverse fleet is equipped to cater to groups of all sizes. All our buses are air-conditioned, comfortable, and feature modern amenities like reclining seats, ample legroom, and onboard entertainment options, ensuring your group travels in comfort and style."
    },
    {
        "WhyChooseheading": "Experienced, Professional Drivers for Safe and Smooth Travel",
        "WhyChoosedescription": "Our drivers are skilled, experienced, and familiar with the best routes in and around Pune, as well as popular outstation destinations. They ensure a smooth and safe journey while being friendly and punctual. With safety as our top priority, you can trust our drivers to get you to your destination on time and without any hassle."
    },
    {
        "WhyChooseheading": "Affordable Pricing with No Hidden Costs",
        "WhyChoosedescription": "We believe in offering honest, transparent pricing for bus rental services. At Samarth Travels, you’ll never face hidden charges or unexpected fees. Our pricing is upfront and competitive, giving you the best value for your money without compromising on service or quality."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Bookings",
        "WhyChoosedescription": "Whether you need a bus in the early morning or late at night, Samarth Travels is available 24/7. We understand that travel needs can arise at any time, so we ensure that buses are always ready to meet your schedule, whether it's for a sudden event or a planned trip."
    },
    {
        "WhyChooseheading": "Convenient Online Booking and Real-Time Tracking",
        "WhyChoosedescription": "Booking a bus with Samarth Travels is simple and convenient. You can book directly online or through our customer support team. Once your booking is confirmed, you will receive real-time updates, including live tracking, driver contact details, and estimated arrival times, making your travel experience stress-free."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "We prioritize cleanliness and safety. All our buses are thoroughly cleaned and sanitized after every trip to ensure a hygienic environment. Regular maintenance is conducted to ensure that all vehicles are in top condition, providing a safe and comfortable ride for all passengers."
    },
    {
        "WhyChooseheading": "Flexible Payment Methods for Hassle-Free Transactions",
        "WhyChoosedescription": "To make your rental experience even more convenient, we offer various payment options, including cash, UPI, credit/debit cards, and digital wallets. Whether you're renting a bus for a one-time event or a longer-term need, we ensure that your payment process is smooth and hassle-free."
    }
]
















    }

const faqData = [
    {
        id: 1,
        question: 'How can I hire a bus on rent with Samarth Travels?',
        answer: 'Hiring a bus on rent with Samarth Travels is easy and convenient. Just visit our website or call our customer care team. Share your trip details such as destination, number of passengers, and travel dates, and we’ll assist you with the best available options.',
    },
    {
        id: 2,
        question: 'What types of buses are available for rent and hire?',
        answer: 'Samarth Travels offers a wide range of buses for rent and hire, including 22-seater, 32-seater, 40-seater, and 50-seater buses. We have both AC and non-AC options, suitable for corporate events, school trips, weddings, and tourism.',
    },
    {
        id: 3,
        question: 'What is included in the bus rental hire charges?',
        answer: 'Our charges include the cost of the bus, fuel, and driver services. Any additional charges like tolls, parking, or permits (if applicable) are shared in advance with full transparency.',
    },
    {
        id: 4,
        question: 'Is bus hire service available for outstation trips?',
        answer: 'Yes, Samarth Travels provides bus hire services for both local and outstation trips. Whether you’re planning a pilgrimage, a vacation, or a business tour, our buses are perfect for long-distance travel.',
    },
    {
        id: 5,
        question: 'Can I book a bus on rent for a one-day event?',
        answer: 'Absolutely. You can hire a bus for a single-day event such as a wedding, corporate function, or group outing. We offer customized rental packages based on your schedule and group size.',
    },
    {
        id: 6,
        question: 'Are your buses safe and comfortable for travel?',
        answer: 'Yes, all our buses are well-maintained and come with comfortable seating, clean interiors, and professional drivers. Safety and passenger comfort are always our top priorities.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for bus rental and hire services?',
        answer: 'Yes, Samarth Travels offers 24/7 support for bus rentals and hire. You can book a bus or get assistance at any time of the day or night, as per your travel needs.',
    },
];

const testimonials = [
    {
        name: 'Mr. Shrikant Phadke',
        role: 'Tour Organizer',
        text: 'Samarth Travels provided a 32-seater bus for our group trip. The service was timely, the bus was clean, and the ride was smooth. Totally satisfied!',
        image: '/img/testimonial/testi_2_16.jpg',
    },
    {
        name: 'Mrs. Deepa Mane',
        role: 'Wedding Planner',
        text: 'We hired a 50-seater bus from Samarth Travels for a wedding function. Everything was well-managed and the driver was very cooperative. Highly recommended for bulk travel needs.',
        image: '/img/testimonial/testi_2_17.jpg',
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
  "name": "Bus on Rent Hire",
  "image": "https://samarthtravels.com/assets/images/bus-on-rent-hire.jpg",
  "description": "Hire a bus for corporate functions, weddings, school trips, group travel, and Pune to Shirdi trips. Affordable bus hire services for corporate outings and more with Samarth Travels. Choose from various bus sizes for your needs.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "6031"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-on-rent-hire"
  }
};






    return (
        <div>

<Helmet>
  <title>Bus on Rent Hire in Pune | Corporate, Wedding & Group Travel | Samarth Travels</title>
  <meta 
    name="description" 
    content="Hire a bus for corporate functions, weddings, school trips, group travel, and trips to Shirdi. Affordable bus hire services in Pune for all your needs with Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="Bus on Rent Hire for Corporate Functions in Pune, Wedding Bus on Rent Hire in Pune, Rent a Bus for Group Travel in Pune, Hire a Bus for School Trips from Pune, Budget Bus Hire Services in Pune, Rent a Bus for Pune to Shirdi Trip, Hire a Bus for Corporate Outings in Pune" 
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
                            <img src='/images/keyword/8.jpg' alt='img' />
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

export default Busonrenthire;