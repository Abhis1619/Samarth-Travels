
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Tempotravellerpune() {



    const cardData =
    {
        keyword: 'Tempo Traveller Rental in Pune',
        heading: 'Samarth Travels: Tempo Traveller Rental in Pune',
        headingDescription: 'Samarth Travels offers reliable and affordable Tempo Traveller rental in Pune, perfect for group travel, family outings, or corporate trips. Choose from spacious 12-seater to 17-seater Tempo Travellers, all well-maintained and driven by experienced professionals. With transparent pricing, no hidden charges, and a strong focus on punctuality and comfort, Samarth Travels ensures a smooth, hassle-free travel experience across Pune and nearby destinations.',

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
                "name": "Tempo Traveller in Pune",
                "description": "Book a Tempo Traveller in Pune with Samarth Travels for group outings, tours, and events. Comfortable and spacious travel guaranteed."
            },
            {
                "name": "Hire Tempo Traveller in Pune",
                "description": "Hire a Tempo Traveller in Pune through Samarth Travels for reliable and affordable travel solutions tailored to your needs."
            },
            {
                "name": "Affordable Tempo Traveller in Pune",
                "description": "Looking for budget-friendly Tempo Traveller rentals in Pune? Samarth Travels offers the best rates with no hidden costs."
            },
            {
                "name": "Tempo Traveller on Rent Pune",
                "description": "Rent a Tempo Traveller in Pune with Samarth Travels for local or outstation journeys. Clean vehicles and professional drivers."
            },
            {
                "name": "17-Seater Tempo Traveller Pune",
                "description": "Book a 17-seater Tempo Traveller in Pune with Samarth Travels – perfect for medium-sized groups with ample luggage space."
            },
            {
                "name": "20-Seater Tempo Traveller Rental in Pune",
                "description": "Hire a 20-seater Tempo Traveller in Pune for large group travel. Spacious interiors and comfortable seating from Samarth Travels."
            },
            {
                "name": "Tempo Traveller with Driver in Pune",
                "description": "Rent a Tempo Traveller with an experienced driver in Pune. Samarth Travels ensures a safe and punctual journey."
            },
            {
                "name": "Rent a Tempo Traveller for Pune Trips",
                "description": "Samarth Travels offers Tempo Travellers for local and outstation Pune trips. Hassle-free booking and competitive pricing."
            },
            {
                "name": "Pune Tempo Traveller Hire",
                "description": "Hire Tempo Travellers in Pune with ease. Samarth Travels provides well-maintained vehicles and skilled chauffeurs."
            },
            {
                "name": "Rent a Tempo Traveller for Sightseeing",
                "description": "Explore Pune’s attractions comfortably by renting a Tempo Traveller from Samarth Travels. Ideal for group sightseeing."
            },
            {
                "name": "Budget Tempo Traveller Rent in Pune",
                "description": "Samarth Travels offers budget Tempo Traveller rentals in Pune without compromising on service quality or comfort."
            },
            {
                "name": "Tempo Traveller Rental for Corporate Events in Pune",
                "description": "Planning a corporate event? Rent Tempo Travellers in Pune with Samarth Travels for seamless employee or client transportation."
            },
            {
                "name": "Luxury Tempo Traveller on Rent in Pune",
                "description": "Experience premium travel with luxury Tempo Travellers from Samarth Travels. Perfect for VIP or executive travel needs in Pune."
            },
            {
                "name": "Rent AC Tempo Traveller in Pune",
                "description": "Stay cool and comfortable on your journey. Samarth Travels offers AC Tempo Travellers for rent in Pune at the best prices."
            },
            {
                "name": "Hire Tempo Traveller for Weddings in Pune",
                "description": "Book Tempo Travellers for wedding transportation in Pune. Samarth Travels ensures timely service and guest comfort."
            },
            {
                "name": "Tempo Traveller for Group Travel in Pune",
                "description": "Samarth Travels provides Tempo Travellers for group travel in Pune. Spacious, reliable, and ideal for any occasion."
            }
        ],
        "tableData": [
            ["Tempo Traveller in Pune", "Hire Tempo Traveller in Pune"],
            ["Affordable Tempo Traveller in Pune", "Tempo Traveller on Rent Pune"],
            ["17-Seater Tempo Traveller Pune", "20-Seater Tempo Traveller Rental in Pune"],
            ["Tempo Traveller with Driver in Pune", "Rent a Tempo Traveller for Pune Trips"],
            ["Pune Tempo Traveller Hire", "Rent a Tempo Traveller for Sightseeing"],
            ["Budget Tempo Traveller Rent in Pune", "Tempo Traveller Rental for Corporate Events in Pune"],
            ["Luxury Tempo Traveller on Rent in Pune", "Rent AC Tempo Traveller in Pune"],
            ["Hire Tempo Traveller for Weddings in Pune", "Tempo Traveller for Group Travel in Pune"]
        ],


        "whychoose": [
            {
                "WhyChooseheading": "Reliable Tempo Traveller Rental in Pune",
                "WhyChoosedescription": "Samarth Travels offers dependable Tempo Traveller rentals in Pune for all your group travel needs. Be it family trips, corporate outings, or pilgrimages, we ensure timely service and professional support."
            },
            {
                "WhyChooseheading": "Spacious and Comfortable Travel Experience",
                "WhyChoosedescription": "Our Tempo Travellers are designed for comfort with ample legroom, push-back seats, and air conditioning. Enjoy a smooth and relaxed journey across Pune and beyond with your group."
            },
            {
                "WhyChooseheading": "Experienced Drivers and Local Route Expertise",
                "WhyChoosedescription": "Our trained and courteous drivers are familiar with Pune and surrounding areas. Their local knowledge ensures efficient routes, time-saving travel, and a safe, enjoyable ride."
            },
            {
                "WhyChooseheading": "Affordable and Transparent Tempo Traveller Pricing",
                "WhyChoosedescription": "We offer competitive and fixed pricing for Tempo Traveller rental in Pune. No hidden charges—just fair rates and great value for group transportation."
            },
            {
                "WhyChooseheading": "24/7 Service Availability",
                "WhyChoosedescription": "Whether it's an early morning departure or a late-night return, Samarth Travels is ready round the clock to serve you. Book your Tempo Traveller anytime with full flexibility."
            },
            {
                "WhyChooseheading": "Easy Booking and Live Vehicle Tracking",
                "WhyChoosedescription": "Book instantly via our website or customer service and get real-time tracking of your Tempo Traveller. Receive driver details, location updates, and estimated arrival times."
            },
            {
                "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Fleet",
                "WhyChoosedescription": "Our Tempo Travellers are thoroughly cleaned and sanitized after every trip. We maintain high standards of hygiene and regular servicing for your comfort and safety."
            },
            {
                "WhyChooseheading": "Multiple Payment Options for Convenience",
                "WhyChoosedescription": "Pay your way—cash, UPI, credit/debit cards, or digital wallets. We offer flexible payment solutions for a hassle-free Tempo Traveller rental experience in Pune."
            }
        ]













    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Tempo Traveller in Pune with Samarth Travels?',
            answer: 'Booking a Tempo Traveller with Samarth Travels is simple. Just visit our website or call our support team to check availability. Provide your travel details like pickup location, destination, travel dates, and number of passengers. We’ll help you choose the right Tempo Traveller and confirm your booking in minutes.',
        },
        {
            id: 2,
            question: 'What types of Tempo Travellers are available for rent in Pune?',
            answer: 'Samarth Travels offers a range of Tempo Travellers in Pune, including 9-seater, 12-seater, 17-seater, and 20-seater options. All vehicles are well-maintained, air-conditioned, and driven by experienced chauffeurs for a comfortable group travel experience.',
        },
        {
            id: 3,
            question: 'Are the rental charges for Tempo Traveller in Pune fixed?',
            answer: 'Yes, we provide transparent and competitive pricing. The charges are fixed based on distance, duration, and vehicle type. No hidden costs—our rental price includes fuel, driver charges, and taxes unless otherwise specified.',
        },
        {
            id: 4,
            question: 'Is Samarth Travels available for outstation Tempo Traveller bookings from Pune?',
            answer: 'Absolutely. We offer Tempo Traveller rentals for both local and outstation trips from Pune. Whether you are planning a weekend getaway, pilgrimage tour, or business trip, our vehicles are perfect for group travel.',
        },
        {
            id: 5,
            question: 'Can I rent a Tempo Traveller in Pune for a one-day trip?',
            answer: 'Yes, you can rent a Tempo Traveller for short local trips or day-long excursions around Pune. Our flexible rental packages are designed to suit your itinerary, whether it’s for family functions, corporate outings, or sightseeing.',
        },
        {
            id: 6,
            question: 'Do Tempo Travellers come with AC and comfortable seating?',
            answer: 'Yes, all our Tempo Travellers come equipped with air-conditioning and pushback seats to ensure a comfortable journey. We also provide ample legroom, clean interiors, and luggage space for a hassle-free experience.',
        },
        {
            id: 7,
            question: 'Is it possible to hire a Tempo Traveller for late night or early morning travel in Pune?',
            answer: 'Yes, Samarth Travels operates 24/7, so you can book a Tempo Traveller for travel at any time—early morning departures, late night arrivals, or any other schedule that suits your needs.',
        },
    ];

    const testimonials = [
        {
            name: 'Mr. Rajesh Patil',
            role: 'Event Organizer',
            text: 'Samarth Travels provided an excellent Tempo Traveller for our Pune event. The vehicle was clean, the driver was punctual, and the ride was smooth. Great service for group travel!',
            image: '/img/testimonial/testi_2_2.jpg',
        },
        {
            name: 'Mrs. Shraddha Kulkarni',
            role: 'School Teacher',
            text: 'We hired a 17-seater Tempo Traveller from Samarth Travels for a school picnic. The kids had a great time, and the journey was safe and comfortable. Highly recommended!',
            image: '/img/testimonial/testi_2_3.jpg',
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
  "name": "Tempo Traveller Rental in Pune",
  "image": "https://samarthtravels.com/assets/images/tempo-traveller-rental-pune.jpg",
  "description": "Rent Tempo Traveller in Pune with Samarth Travels. Choose from 17-seater and 20-seater AC Tempo Travellers for group travel, weddings, corporate events, and sightseeing. Affordable rates with experienced drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "5234"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/tempo-traveller-rental-pune"
  }
};





    return (
        <div>

<Helmet>
  <title>Tempo Traveller Rental in Pune | 17 & 20-Seater on Rent | Samarth Travels</title>
  <meta 
    name="description" 
    content="Hire Tempo Traveller in Pune at budget-friendly rates. Samarth Travels offers AC 17-seater and 20-seater Tempo Travellers for group travel, weddings, sightseeing & corporate events with experienced drivers." 
  />
  <meta 
    name="keywords" 
    content="Tempo Traveller in Pune, Hire Tempo Traveller in Pune, Affordable Tempo Traveller in Pune, Tempo Traveller on Rent Pune, 17-Seater Tempo Traveller Pune, 20-Seater Tempo Traveller Rental in Pune, Tempo Traveller with Driver in Pune, Rent a Tempo Traveller for Pune Trips, Pune Tempo Traveller Hire, Rent a Tempo Traveller for Sightseeing, Budget Tempo Traveller Rent in Pune, Tempo Traveller Rental for Corporate Events in Pune, Luxury Tempo Traveller on Rent in Pune, Rent AC Tempo Traveller in Pune, Hire Tempo Traveller for Weddings in Pune, Tempo Traveller for Group Travel in Pune" 
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
                            <img src='/images/keyword/1.jpg' alt='img' />
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

export default Tempotravellerpune;