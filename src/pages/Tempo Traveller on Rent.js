
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Tempotravelleronrent() {



    const cardData =
    {
        keyword: ' Tempo Traveller on Rent',
        heading: 'Samarth Travels:  Tempo Traveller on Rent',
        headingDescription: 'Samarth Travels provides comfortable and affordable Tempo Traveller on rent, perfect for group tours, family functions, and corporate travel. Choose from clean, spacious 12-seater to 17-seater vehicles, operated by skilled drivers. With transparent pricing, no hidden fees, and a focus on safety and punctuality, Samarth Travels ensures a smooth and enjoyable journey every time.',

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
        "name": "Rent a Tempo Traveller for Pune to Goa Trips",
        "description": "Plan your Pune to Goa road trip with Samarth Travels’ comfortable and reliable Tempo Traveller rental. Enjoy scenic coastal views, multiple sightseeing stops, and a smooth journey in our spacious vehicles. Ideal for groups looking to explore Goa together, with flexible pickup and drop options."
    },
    {
        "name": "Comfortable Tempo Traveller for Rent in Pune",
        "description": "Travel in comfort with Samarth Travels’ Tempo Travellers in Pune, designed for smooth, fatigue-free journeys. Whether you're headed for a local day trip or an outstation adventure, our vehicles feature spacious seating, clean interiors, air conditioning, and trained drivers to make your ride hassle-free."
    },
    {
        "name": "Rent a Tempo Traveller for Group Tours",
        "description": "Organizing a group tour? Rent a Tempo Traveller from Samarth Travels for a cost-effective and coordinated travel experience. Whether it's a pilgrimage, leisure tour, or educational trip, we provide the right vehicle size with ample luggage space and professional support throughout your journey."
    },
    {
        "name": "Budget Tempo Traveller on Rent for Long-Distance Travel",
        "description": "Looking for affordable transport for long journeys? Samarth Travels offers budget-friendly Tempo Traveller rentals from Pune for outstation travel. Our vehicles are fuel-efficient, comfortable, and ideal for overnight trips — making them perfect for travel to destinations like Goa, Shirdi, Mahabaleshwar, and beyond."
    },
    {
        "name": "Luxury Tempo Traveller on Rent for Corporate Events",
        "description": "Impress your team or clients with a luxury Tempo Traveller rental from Samarth Travels. Designed for corporate events and executive transport, these vehicles offer plush seating, enhanced legroom, AC, and smooth suspension — ensuring a premium experience for every passenger."
    },
    {
        "name": "Tempo Traveller Rental for Weddings in Pune",
        "description": "Ensure smooth and stylish transportation for your wedding guests with Samarth Travels' Tempo Traveller rental in Pune. From guest pickup to multi-venue transport, our clean and spacious vehicles make group logistics simple and elegant for all wedding functions and family gatherings."
    },
    {
        "name": "Rent a 14-Seater Tempo Traveller in Pune",
        "description": "Need the perfect vehicle for medium-sized groups? Samarth Travels offers 14-seater Tempo Travellers in Pune that strike the right balance between space and mobility. Ideal for weekend getaways, airport transfers, corporate events, or outstation trips, with flexible rental plans and expert drivers."
    }
],
"tableData": [
    ["Rent a Tempo Traveller for Pune to Goa Trips", "Comfortable Tempo Traveller for Rent in Pune"],
    ["Rent a Tempo Traveller for Group Tours", "Budget Tempo Traveller on Rent for Long-Distance Travel"],
    ["Luxury Tempo Traveller on Rent for Corporate Events", "Tempo Traveller Rental for Weddings in Pune"],
    ["Rent a 14-Seater Tempo Traveller in Pune", ""]
],


    "whychoose": [
    {
        "WhyChooseheading": "Best Tempo Traveller on Rent for Group Travel",
        "WhyChoosedescription": "Samarth Travels offers premium Tempo Traveller on rent services tailored for families, corporate teams, tour groups, and event travel. Whether it’s a weekend getaway, a wedding function, or a business trip, our reliable and well-equipped vehicles ensure a smooth journey for groups of any size."
    },
    {
        "WhyChooseheading": "Spacious and Luxurious Tempo Travellers",
        "WhyChoosedescription": "Our Tempo Travellers are designed for comfort, featuring push-back seats, individual seat belts, strong air-conditioning, and ample legroom. With options ranging from 9 to 26 seaters, every vehicle is maintained to high standards to give you a relaxed and enjoyable travel experience."
    },
    {
        "WhyChooseheading": "Trained, Polite, and Route-Savvy Drivers",
        "WhyChoosedescription": "Every ride with Samarth Travels is backed by an experienced, professional driver who is familiar with local and outstation routes. Our drivers are courteous, punctual, and prioritize safety, ensuring you reach your destination on time without hassle."
    },
    {
        "WhyChooseheading": "Transparent Pricing with No Extra Charges",
        "WhyChoosedescription": "We offer clear and competitive rates for every Tempo Traveller rental. Our pricing is upfront, inclusive of all charges, and free from last-minute surprises. You pay exactly what is quoted—simple, fair, and honest pricing for peace of mind."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Booking",
        "WhyChoosedescription": "Need to travel early in the morning or late at night? No problem. Our Tempo Travellers are available round-the-clock. Whether it's a planned tour or a last-minute booking, Samarth Travels is ready whenever you are."
    },
    {
        "WhyChooseheading": "Easy Booking with Live Tracking Support",
        "WhyChoosedescription": "Book instantly through our website or with our dedicated customer service. Once your vehicle is dispatched, receive live tracking, real-time location updates, and driver contact details for added convenience and security during your journey."
    },
    {
        "WhyChooseheading": "Clean, Sanitized Vehicles for Safe Travel",
        "WhyChoosedescription": "Your health is our priority. All our Tempo Travellers are thoroughly cleaned and sanitized before and after every trip. We follow strict hygiene protocols and regularly maintain vehicles to provide a safe, stress-free travel experience for every passenger."
    },
    {
        "WhyChooseheading": "Multiple Payment Modes for Your Convenience",
        "WhyChoosedescription": "Samarth Travels offers flexible payment options to suit every customer. Choose from cash, UPI, bank transfers, debit/credit cards, or digital wallets to complete your booking with ease and confidence."
    }
]













    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a Tempo Traveller on rent with Samarth Travels?',
        answer: 'Booking a Tempo Traveller on rent is easy with Samarth Travels. You can visit our website or call our team to check availability. Share your travel dates, group size, and destination, and we’ll arrange the perfect vehicle for your trip.',
    },
    {
        id: 2,
        question: 'What sizes of Tempo Travellers are available for rent?',
        answer: 'Samarth Travels offers multiple options including 9-seater, 12-seater, 17-seater, and 20-seater Tempo Travellers. Each vehicle is spacious, well-maintained, and ideal for group travel.',
    },
    {
        id: 3,
        question: 'What is included in the Tempo Traveller rental cost?',
        answer: 'The rental cost includes the vehicle, driver charges, and fuel for the trip. Any additional costs such as tolls, parking, or state taxes will be communicated clearly during the booking process—no hidden fees.',
    },
    {
        id: 4,
        question: 'Can I hire a Tempo Traveller for outstation travel?',
        answer: 'Yes, Samarth Travels offers Tempo Travellers on rent for both local and outstation trips. Whether it’s a weekend getaway, pilgrimage, or corporate trip, we ensure comfortable and safe travel.',
    },
    {
        id: 5,
        question: 'Is there a minimum booking time for renting a Tempo Traveller?',
        answer: 'We offer flexible rental durations based on your travel needs. Whether you need a Tempo Traveller for a few hours or multiple days, we can customize a package for you.',
    },
    {
        id: 6,
        question: 'Are the Tempo Travellers equipped with AC and comfortable seating?',
        answer: 'Yes, all our Tempo Travellers are air-conditioned and come with pushback seats, clean interiors, and ample legroom to ensure a relaxing travel experience.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 Tempo Traveller rental service?',
        answer: 'Yes, Samarth Travels operates round-the-clock. You can schedule pickups and drop-offs at any time—day or night—according to your travel plan.',
    },
];

const testimonials = [
    {
        name: 'Mr. Suresh Jadhav',
        role: 'Business Executive',
        text: 'I rented a 12-seater Tempo Traveller from Samarth Travels for a family trip. The vehicle was in excellent condition and the driver was very courteous. Great service!',
        image: '/img/testimonial/testi_2_8.jpg',
    },
    {
        name: 'Mrs. Kavita Naik',
        role: 'Freelancer',
        text: 'We hired a Tempo Traveller from Samarth Travels for a weekend tour. Everything from booking to journey was smooth and professional. Highly recommended for group travel!',
        image: '/img/testimonial/testi_2_9.jpg',
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
  "name": "Tempo Traveller on Rent",
  "image": "https://samarthtravels.com/assets/images/tempo-traveller-on-rent.jpg",
  "description": "Book a Tempo Traveller on Rent for trips from Pune to Goa, group tours, long-distance travel, corporate events, and weddings with Samarth Travels. Options available for 14-seater, luxury, and budget-friendly Tempo Travellers.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "6012"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3800",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/tempo-traveller-on-rent"
  }
};




    return (
        <div>


<Helmet>
  <title>Tempo Traveller on Rent | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a comfortable and affordable Tempo Traveller from Pune to Goa, group tours, corporate events, and weddings with Samarth Travels. Luxury and budget options, including 14-seater Tempo Travellers, available." 
  />
  <meta 
    name="keywords" 
    content="Rent a Tempo Traveller for Pune to Goa Trips, Comfortable Tempo Traveller for Rent in Pune, Rent a Tempo Traveller for Group Tours, Budget Tempo Traveller on Rent for Long-Distance Travel, Luxury Tempo Traveller on Rent for Corporate Events, Tempo Traveller Rental for Weddings in Pune, Rent a 14-Seater Tempo Traveller in Pune" 
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
                            <img src='/images/keyword/4.jpg' alt='img' />
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

export default Tempotravelleronrent;