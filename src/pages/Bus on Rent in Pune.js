
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busonrentinpune() {



    const cardData =
    {
        keyword: 'Bus on Rent in Pune',
        heading: 'Samarth Travels: Bus on Rent in Pune',
        headingDescription: 'Samarth Travels offers reliable and affordable bus rental services in Pune, perfect for group outings, corporate events, or family trips. Choose from a range of well-maintained buses, including 14-seater, 17-seater, 24-seater, 32-seater, 40-seater, and 50-seater options, all equipped with comfortable seating and essential amenities. With transparent pricing, no hidden charges, and a commitment to punctuality and customer satisfaction, Samarth Travels ensures a smooth and enjoyable travel experience across Pune and beyond.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

        "topPlaces": [
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
        "name": "Affordable Bus Rental Services in Pune",
        "description": "Samarth Travels offers affordable bus rental services in Pune for all your travel needs. Whether it's a day trip, wedding transport, or multi-day tour, we provide well-maintained buses with courteous drivers at budget-friendly rates. Ideal for schools, offices, families, and tour organizers."
    },
    {
        "name": "Best Bus on Rent for Corporate Events in Pune",
        "description": "Ensure seamless transportation for your next corporate event in Pune with Samarth Travels. Our bus rental services for corporate events include punctual pick-ups, air-conditioned comfort, and professional drivers. Perfect for team outings, seminars, and client visits with customizable routes and timings."
    },
    {
        "name": "Bus Hire for School Trips in Pune",
        "description": "Safety and comfort are our top priorities when it comes to school travel. Samarth Travels provides reliable bus hire services in Pune for educational tours, field trips, and school picnics. All our buses are driven by trained drivers and comply with school travel safety standards."
    },
    {
        "name": "Rent a Bus for Family Tours from Pune",
        "description": "Planning a family tour from Pune? Samarth Travels offers comfortable buses on rent with ample space for your entire group and luggage. Whether you’re heading to a hill station, religious site, or weekend getaway, our services ensure a relaxed and memorable journey."
    },
    {
        "name": "25-Seater Bus on Rent in Pune",
        "description": "Book a 25-seater bus with Samarth Travels in Pune for mid-sized groups. Ideal for weddings, office trips, and excursions, our buses feature comfortable seating, AC options, and experienced drivers to make your group travel smooth and enjoyable."
    },
    {
        "name": "Rent Buses for Picnic Trips in Pune",
        "description": "Make your picnic stress-free with bus rentals from Samarth Travels. We offer clean, spacious buses perfect for one-day or overnight trips. Whether it’s a school outing, office picnic, or family fun day, we ensure a comfortable and convenient travel experience."
    },
    {
        "name": "Bus Rental for Outstation Tours from Pune",
        "description": "Explore destinations outside Pune with our dependable outstation bus rental services. Samarth Travels offers a fleet of well-maintained buses for group travel to Lonavala, Mahabaleshwar, Shirdi, Goa, and more — with transparent pricing and customizable itineraries."
    },
    {
        "name": "Bus Hire for Group Travel in Pune",
        "description": "Travel together with ease by hiring a bus for group travel within or outside Pune. Samarth Travels provides reliable transport solutions for corporate groups, friends, or family gatherings. Our services include multiple seating options, AC/non-AC choices, and expert route planning."
    }
],
"tableData": [
    ["Affordable Bus Rental Services in Pune", "Best Bus on Rent for Corporate Events in Pune"],
    ["Bus Hire for School Trips in Pune", "Rent a Bus for Family Tours from Pune"],
    ["25-Seater Bus on Rent in Pune", "Rent Buses for Picnic Trips in Pune"],
    ["Bus Rental for Outstation Tours from Pune", "Bus Hire for Group Travel in Pune"]
],


      "whychoose": [
    {
        "WhyChooseheading": "Trusted Provider for Bus on Rent in Pune",
        "WhyChoosedescription": "Samarth Travels is a leading name for bus rental services in Pune, offering a wide range of buses for all types of travel needs—corporate events, school trips, weddings, religious tours, and outstation journeys. With a focus on safety, reliability, and customer satisfaction, we make group travel easy and efficient."
    },
    {
        "WhyChooseheading": "Large Fleet of Clean, Well-Maintained Buses",
        "WhyChoosedescription": "Choose from our diverse fleet, including 17-seater minibuses to 50+ seater luxury coaches. All buses are regularly serviced, fully air-conditioned (optional), and come equipped with comfortable push-back seats, ample luggage space, and onboard amenities for a smooth and relaxing journey."
    },
    {
        "WhyChooseheading": "Experienced Drivers and Professional Service",
        "WhyChoosedescription": "Our drivers are experienced, background-verified, and trained to handle both short and long-distance routes safely and efficiently. They are courteous, punctual, and knowledgeable about Pune city and popular outstation destinations, ensuring you get to your destination on time and stress-free."
    },
    {
        "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
        "WhyChoosedescription": "We offer clear, competitive pricing for every bus rental. Whether you need a bus for a few hours or several days, our pricing model is straightforward—no hidden fees, fuel surcharges, or last-minute additions. What you see is what you pay."
    },
    {
        "WhyChooseheading": "24/7 Availability for Bookings and Support",
        "WhyChoosedescription": "We operate round-the-clock to support your travel needs—day or night. Our team is available to help with bookings, schedule changes, or queries at any time, making Samarth Travels a reliable option for urgent travel plans and last-minute bus rentals in Pune."
    },
    {
        "WhyChooseheading": "Quick Online Booking and Live Tracking",
        "WhyChoosedescription": "Book your bus rental easily via our website or customer support team. Get real-time tracking, driver contact details, and estimated arrival time right on your phone. Stay updated throughout your trip for a stress-free travel experience."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Hygienic Travel Environment",
        "WhyChoosedescription": "Your health and safety are important to us. All our buses are thoroughly cleaned and sanitized after each trip. We follow strict hygiene protocols, including regular disinfecting of high-touch surfaces and ensuring proper ventilation in all vehicles."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Your Convenience",
        "WhyChoosedescription": "We support various payment methods to suit your needs—cash, UPI, credit/debit cards, and digital wallets. Whether you’re booking personally or on behalf of an organization, we ensure a smooth and secure payment process every time."
    }
]













    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a bus in Pune with Samarth Travels?',
        answer: 'Renting a bus in Pune with Samarth Travels is quick and convenient. Just contact us through our website or customer support number, provide your travel details including dates, group size, and destination, and we’ll arrange the perfect bus for your needs.',
    },
    {
        id: 2,
        question: 'What types of buses are available for rent in Pune?',
        answer: 'Samarth Travels offers a variety of buses on rent in Pune, including 22-seater, 32-seater, and 50-seater buses. We have both AC and non-AC options to suit different group sizes and budgets.',
    },
    {
        id: 3,
        question: 'What is included in the bus rental fare in Pune?',
        answer: 'Our bus rental fare typically includes driver charges, fuel, and taxes. Any tolls, parking charges, or inter-state permits (if applicable) will be clearly discussed before finalizing the booking. No hidden charges.',
    },
    {
        id: 4,
        question: 'Can I rent a bus for outstation trips from Pune?',
        answer: 'Yes, Samarth Travels offers buses on rent for both local and outstation trips from Pune. Whether it’s a corporate tour, wedding, school excursion, or religious trip, we provide safe and reliable transport across cities.',
    },
    {
        id: 5,
        question: 'Is there a minimum number of hours or distance required for bus rental?',
        answer: 'Yes, we typically have a minimum rental duration or distance, depending on the bus type and route. Our team will inform you of the exact terms during the booking process, ensuring full transparency.',
    },
    {
        id: 6,
        question: 'Are the buses from Samarth Travels comfortable and safe?',
        answer: 'Absolutely. Our buses are regularly maintained, clean, and equipped with comfortable seating, air-conditioning (in AC buses), and experienced drivers to ensure a safe and pleasant journey.',
    },
    {
        id: 7,
        question: 'Can I schedule a bus for early morning or late night travel from Pune?',
        answer: 'Yes, our services are available 24/7. You can schedule bus departures and arrivals at any time that suits your group’s travel plans—day or night.',
    },
];

const testimonials = [
    {
        name: 'Mr. Vinayak More',
        role: 'Tour Organizer',
        text: 'We booked a 50-seater bus from Samarth Travels for a weekend tour. The bus was clean, arrived on time, and the entire journey was smooth. Excellent service and coordination!',
        image: '/img/testimonial/testi_2_6.jpg',
    },
    {
        name: 'Mrs. Anuja Salunkhe',
        role: 'School Principal',
        text: 'Samarth Travels provided a safe and reliable bus for our school trip from Pune. The students and teachers were very comfortable throughout the journey. Will definitely book again!',
        image: '/img/testimonial/testi_2_7.jpg',
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
  "name": "Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/bus-on-rent-in-pune.jpg",
  "description": "Book Bus on Rent in Pune with Samarth Travels. Choose from 25-seater and larger buses for corporate events, school trips, family tours, group travel, and outstation journeys. Affordable and reliable service with experienced drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.6",
    "ratingCount": "5823"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-on-rent-in-pune"
  }
};





    return (
        <div>


<Helmet>
  <title>Bus on Rent in Pune | 25-Seater & Group Bus Hire | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus in Pune for school trips, family tours, group travel, and outstation events. Samarth Travels offers 25-seater and large bus rentals for corporate events and picnics at affordable rates." 
  />
  <meta 
    name="keywords" 
    content="Affordable Bus Rental Services in Pune, Best Bus on Rent for Corporate Events in Pune, Bus Hire for School Trips in Pune, Rent a Bus for Family Tours from Pune, 25-Seater Bus on Rent in Pune, Rent Buses for Picnic Trips in Pune, Bus Rental for Outstation Tours from Pune, Bus Hire for Group Travel in Pune" 
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
                            <img src='/images/keyword/3.jpg' alt='img' />
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

export default Busonrentinpune;