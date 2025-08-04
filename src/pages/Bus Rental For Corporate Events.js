
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentalforcorporate() {



    const cardData =
    {
        keyword: ' Bus Rental For Corporate Events',
        heading: 'Samarth Travels: Bus Rental For Corporate Events',
        headingDescription: 'Samarth Travels offers professional and reliable bus rental services for corporate events in Pune, ensuring smooth group transportation for conferences, seminars, and business outings. Choose from AC and non-AC buses ranging from 17 to 50 seaters, all maintained to the highest standards. With experienced drivers, timely service, and transparent pricing, Samarth Travels guarantees a stress-free and comfortable travel experience for your corporate team.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

        "topPlaces": [
             {
                "title": "Shaniwar Wada",
                "description": "Shaniwar Wada is one of Pune's most iconic landmarks and a symbol of the Maratha Empire. Built in 1732 as the seat of the Peshwas, this grand fortification features majestic gates, elegant fountains, and intricate architecture. Although much of it was destroyed by fire in 1828, its massive stone walls and legendary tales—especially those surrounding the ghost of Narayanrao—still attract thousands of history lovers and tourists each year."
            },
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
        "name": "Bus Rental for Corporate Functions in Pune",
        "description": "Streamline transport for your company’s next event with Samarth Travels’ bus rental for corporate functions in Pune. Whether it’s a product launch, employee meet, or client gathering, our clean, air-conditioned buses ensure timely, comfortable, and professional group transportation."
    },
    {
        "name": "Luxury Bus Hire for Corporate Events Pune",
        "description": "Elevate your corporate travel experience with Samarth Travels’ luxury bus hire service in Pune. Perfect for VIP guests, executive teams, and special company events, our luxury buses feature reclining seats, entertainment systems, and plush interiors designed for premium travel."
    },
    {
        "name": "Corporate Event Bus Hire Pune",
        "description": "Looking for reliable transport for a large-scale corporate event? Samarth Travels offers dedicated corporate event bus hire in Pune with flexible seating options, punctual service, and trained drivers to ensure seamless logistics from pickup to drop-off."
    },
    {
        "name": "Rent a Bus for Corporate Meetings in Pune",
        "description": "Ensure timely and organized travel to corporate meetings with Samarth Travels. Our buses are ideal for transporting employees or guests to hotels, offices, or conference venues across Pune, offering a comfortable and stress-free alternative to individual travel arrangements."
    },
    {
        "name": "Affordable Bus Rental for Corporate Trips in Pune",
        "description": "Keep your company travel costs in check with our affordable corporate bus rental services in Pune. Samarth Travels provides dependable and budget-friendly buses for company outings, off-site visits, and outstation business trips, without compromising on safety or comfort."
    },
    {
        "name": "Corporate Conference Bus Rental in Pune",
        "description": "Organizing a corporate conference in Pune? Let Samarth Travels handle your transport with our conference bus rental service. From employee transport to client pickups, we offer timely service, spacious seating, and experienced drivers for efficient event logistics."
    },
    {
        "name": "Bus on Rent for Team Outings in Pune",
        "description": "Boost team spirit with a hassle-free outing using Samarth Travels’ bus rental services in Pune. Our buses are ideal for transporting teams to resorts, adventure parks, or wellness retreats. We ensure smooth group coordination with comfortable and punctual travel."
    },
    {
        "name": "Bus for Corporate Team Building in Pune",
        "description": "Planning a team-building session out of the office? Samarth Travels offers dependable bus hire for corporate team-building events in Pune. With ample room for teams and gear, we make sure your employees arrive refreshed and ready for a productive experience."
    },
    {
        "name": "Rent Bus for Corporate Picnics in Pune",
        "description": "Make your next company picnic a success with our reliable bus rental services. Samarth Travels provides buses for corporate picnics across Pune and nearby destinations, ensuring that your employees travel together in comfort, with plenty of space and entertainment options onboard."
    },
    {
        "name": "Bus for Corporate Parties in Pune",
        "description": "Hosting a corporate party or celebration? Hire a bus from Samarth Travels to ensure your team arrives safely and on time. Our buses are perfect for after-work parties, annual celebrations, or award nights, offering a safe and convenient way to transport your team together."
    }
],
"tableData": [
    ["Bus Rental for Corporate Functions in Pune", "Luxury Bus Hire for Corporate Events Pune"],
    ["Corporate Event Bus Hire Pune", "Rent a Bus for Corporate Meetings in Pune"],
    ["Affordable Bus Rental for Corporate Trips in Pune", "Corporate Conference Bus Rental in Pune"],
    ["Bus on Rent for Team Outings in Pune", "Bus for Corporate Team Building in Pune"],
    ["Rent Bus for Corporate Picnics in Pune", "Bus for Corporate Parties in Pune"]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Rental for Corporate Events",
        "WhyChoosedescription": "Samarth Travels offers dependable and efficient bus rental services for corporate events in Pune. Whether you need transportation for a team-building exercise, client meetings, conferences, or company outings, our buses ensure timely and comfortable travel for all attendees. We specialize in providing corporate groups with safe, hassle-free, and efficient travel solutions."
    },
    {
        "WhyChooseheading": "Comfortable and Well-Equipped Buses for Corporate Groups",
        "WhyChoosedescription": "Our fleet of buses is designed with corporate travelers in mind, offering a comfortable and productive environment during transit. With air-conditioning, spacious seating, and modern amenities, your team can relax or prepare for meetings while traveling. We also offer Wi-Fi on select buses for those who wish to stay connected during their journey."
    },
    {
        "WhyChooseheading": "Professional Drivers for a Smooth Corporate Journey",
        "WhyChoosedescription": "Our professional, well-trained drivers ensure a smooth and timely travel experience for your corporate group. They are experienced in navigating through Pune’s busy roads, ensuring you arrive at your event on time, every time. With an emphasis on professionalism and punctuality, our drivers make corporate transport stress-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Corporate Bus Rentals",
        "WhyChoosedescription": "Samarth Travels offers transparent, competitive pricing for corporate bus rentals. We understand the importance of sticking to a budget, which is why we offer clear, upfront pricing with no hidden fees. You can trust us to deliver value without compromising on service or comfort, ensuring you get the best return on your investment."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Corporate Event Scheduling",
        "WhyChoosedescription": "We offer 24/7 availability for bus rentals to accommodate corporate events at any time of day or night. Whether it's an early morning seminar, a late-night dinner, or a last-minute transportation request, Samarth Travels is always ready to meet your needs. Our flexible scheduling ensures that you have reliable transport whenever your corporate event demands."
    },
    {
        "WhyChooseheading": "Easy Online Booking and Real-Time Tracking",
        "WhyChoosedescription": "Booking your corporate event transportation with Samarth Travels is quick and easy. You can book a bus through our user-friendly website or by contacting our customer service team. Once booked, you'll receive real-time updates, including live tracking, driver contact details, and estimated arrival times, ensuring you're always informed during the journey."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "The health and safety of your team are our top priorities. All our buses are regularly cleaned and sanitized before and after every trip to maintain a hygienic environment for your corporate group. Our vehicles are also well-maintained to ensure reliability, comfort, and safety during your journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy Transactions",
        "WhyChoosedescription": "For added convenience, Samarth Travels offers a variety of payment methods, including cash, UPI, credit/debit cards, and digital wallets. You can select the payment option that best suits your corporate needs, making the booking and payment process seamless and secure."
    }
]














    }

const faqData = [
    {
        id: 1,
        question: 'How can I book a bus rental for a corporate event with Samarth Travels?',
        answer: 'Booking a bus rental for corporate events with Samarth Travels is easy. Simply contact our support team or visit our website. Share details like the event location, date, number of passengers, and pickup points, and we’ll arrange the ideal bus for your needs.',
    },
    {
        id: 2,
        question: 'What types of buses are available for corporate travel?',
        answer: 'We offer a range of AC and non-AC buses suitable for corporate transportation, including 22-seater, 32-seater, 40-seater, and 50-seater buses. Our fleet is perfect for conferences, team outings, seminars, and employee transfers.',
    },
    {
        id: 3,
        question: 'Is the bus rental service punctual and professional?',
        answer: 'Yes, Samarth Travels is known for its punctuality and professional service. We understand the importance of timing for corporate events and ensure on-time arrivals and smooth coordination.',
    },
    {
        id: 4,
        question: 'Do your buses have amenities suitable for corporate clients?',
        answer: 'Yes, our buses are equipped with comfortable pushback seats, air-conditioning, clean interiors, and ample legroom—ideal for executive travel and employee comfort during transit.',
    },
    {
        id: 5,
        question: 'Can I hire multiple buses for a large corporate event?',
        answer: 'Absolutely. Samarth Travels can arrange multiple buses for large-scale corporate events. Whether you need coordinated pickups across multiple locations or shuttle services, we can handle it efficiently.',
    },
    {
        id: 6,
        question: 'Are the drivers trained to handle corporate assignments?',
        answer: 'Yes, our drivers are experienced, well-dressed, and trained to handle corporate travel professionally. They ensure a courteous experience for all passengers.',
    },
    {
        id: 7,
        question: 'Do you provide 24/7 support for corporate bus rentals?',
        answer: 'Yes, we offer 24/7 support for corporate bookings. You can contact us anytime for last-minute changes, queries, or urgent requirements before or during your event.',
    },
];

const testimonials = [
    {
        name: 'Mr. Nilesh Patil',
        role: 'HR Manager, TechSphere Pvt. Ltd.',
        text: 'We booked two buses from Samarth Travels for our annual corporate meet. The service was punctual, the buses were clean, and everything was professionally handled. Highly dependable for corporate needs.',
        image: '/img/testimonial/testi_2_28.jpg',
    },
    {
        name: 'Ms. Priya Desai',
        role: 'Admin Executive, GlobalSoft',
        text: 'Samarth Travels provided top-class transport for our employee training event. Very cooperative team, clean buses, and smooth coordination throughout the day. Will definitely use their service again.',
        image: '/img/testimonial/testi_2_29.jpg',
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
  "name": "Bus Rental for Corporate Events",
  "image": "https://samarthtravels.com/assets/images/bus-rental-for-corporate-events.jpg",
  "description": "Rent a bus for corporate events, meetings, team outings, and more with Samarth Travels. Affordable and luxury bus rental services for corporate functions, conferences, picnics, and team-building activities in Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6540"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "9500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rental-for-corporate-events"
  }
};






    return (
        <div>

<Helmet>
  <title>Bus Rental for Corporate Events | Corporate Functions, Meetings & Team Outings | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for corporate events, conferences, meetings, team outings, picnics, and parties with Samarth Travels. Affordable and luxury bus rental services for corporate functions in Pune, including team-building activities and more." 
  />
  <meta 
    name="keywords" 
    content="Bus Rental for Corporate Functions in Pune, Luxury Bus Hire for Corporate Events Pune, Corporate Event Bus Hire Pune, Rent a Bus for Corporate Meetings in Pune, Affordable Bus Rental for Corporate Trips in Pune, Corporate Conference Bus Rental in Pune, Bus on Rent for Team Outings in Pune, Bus for Corporate Team Building in Pune, Rent Bus for Corporate Picnics in Pune, Bus for Corporate Parties in Pune" 
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
                            <img src='/images/keyword/18.jpg' alt='img' />
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

export default Busrentalforcorporate;