
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Minibusforrent() {



    const cardData =
    {
        keyword: ' Mini Bus for Rent',
        heading: 'Samarth Travels:  Mini Bus for Rent',
        headingDescription: 'Samarth Travels offers reliable and affordable mini bus rentals in Pune, ideal for group outings, corporate events, or family trips. Choose from a range of well-maintained mini buses, including 14-seater and 17-seater options, all equipped with comfortable seating and essential amenities. With transparent pricing, no hidden charges, and a commitment to punctuality and customer satisfaction, Samarth Travels ensures a smooth and enjoyable travel experience across Pune and beyond.',

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
        "name": "Mini Bus Hire for Corporate Events",
        "description": "Ensure efficient and professional transportation for your corporate gatherings with Samarth Travels’ mini bus hire service in Pune. Ideal for employee shuttles, client visits, seminars, and conferences — our fleet is clean, punctual, and perfect for executive group travel with AC and ample legroom."
    },
    {
        "name": "Rent a Mini Bus for Outstation Trips from Pune",
        "description": "Planning an outstation group trip from Pune? Rent a mini bus from Samarth Travels for destinations like Lonavala, Mahabaleshwar, Goa, Shirdi, and more. Our well-maintained mini buses come with experienced drivers and comfortable seating, making long-distance journeys safe and enjoyable."
    },
    {
        "name": "Affordable Mini Bus Rental in Pune",
        "description": "Travel together and save more with Samarth Travels’ affordable mini bus rental services in Pune. Whether it’s for school outings, local tours, or family events, we offer budget-friendly packages with no compromise on comfort, safety, or service quality."
    },
    {
        "name": "12-Seater Mini Bus Rental for Small Group Travel",
        "description": "Samarth Travels provides 12-seater mini bus rentals in Pune, perfect for small groups who want to travel together comfortably. Ideal for airport transfers, quick getaways, or compact tours — these vehicles offer a cost-efficient and reliable transport solution with air conditioning and experienced drivers."
    },
    {
        "name": "Mini Bus on Rent for Pune Sightseeing",
        "description": "Explore Pune’s top attractions with friends or tourists by renting a mini bus from Samarth Travels. Our sightseeing mini bus packages cover major spots like Aga Khan Palace, Shaniwar Wada, and Sinhagad Fort — with professional drivers and flexible itinerary options."
    },
    {
        "name": "Rent a Mini Bus for Family Picnics in Pune",
        "description": "Make your next family picnic or weekend outing stress-free with a mini bus rental from Samarth Travels. Our vehicles offer ample space for people and luggage, making them ideal for travel to picnic spots around Pune such as Lonavala, Lavasa, or Khadakwasla."
    },
    {
        "name": "Mini Bus Hire for Wedding Events in Pune",
        "description": "Simplify guest transport during weddings with Samarth Travels’ mini bus hire service in Pune. Whether it’s shuttling guests between venues or transporting family members from outstation locations, our mini buses are clean, reliable, and perfect for wedding functions of any size."
    }
],
"tableData": [
    ["Mini Bus Hire for Corporate Events", "Rent a Mini Bus for Outstation Trips from Pune"],
    ["Affordable Mini Bus Rental in Pune", "12-Seater Mini Bus Rental for Small Group Travel"],
    ["Mini Bus on Rent for Pune Sightseeing", "Rent a Mini Bus for Family Picnics in Pune"],
    ["Mini Bus Hire for Wedding Events in Pune", ""]
],


 "whychoose": [
    {
        "WhyChooseheading": "Reliable Mini Bus for Rent Services",
        "WhyChoosedescription": "Samarth Travels provides premium mini bus for rent services in Pune, offering a dependable and comfortable solution for group travel. Whether it’s for a family vacation, corporate event, school trip, or a wedding, our fleet of well-maintained mini buses ensures a smooth and enjoyable journey every time."
    },
    {
        "WhyChooseheading": "Spacious, Comfortable, and Fully Equipped Mini Buses",
        "WhyChoosedescription": "Our mini buses are designed for comfort, offering ample space for passengers and luggage. With a variety of seating options (from 16 to 30 seats), our vehicles are equipped with comfortable push-back seats, air conditioning, and modern amenities to make your journey both relaxing and enjoyable."
    },
    {
        "WhyChooseheading": "Experienced Drivers with Local Knowledge",
        "WhyChoosedescription": "Our professional drivers are not only experienced but also highly familiar with the roads in Pune and surrounding areas. They prioritize safety, follow traffic rules, and ensure that you reach your destination on time, all while maintaining a friendly and courteous attitude throughout the ride."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing with No Hidden Fees",
        "WhyChoosedescription": "We offer competitive, transparent pricing for mini bus rentals in Pune. With Samarth Travels, you can be assured of no hidden fees or unexpected costs. Our pricing structure is upfront and clear, giving you complete confidence in your travel budget."
    },
    {
        "WhyChooseheading": "Flexible 24/7 Availability to Suit Your Travel Schedule",
        "WhyChoosedescription": "Need a mini bus at an odd hour? No problem! Samarth Travels offers 24/7 availability, ensuring that you can rent a mini bus whenever you need it. Whether it’s an early morning departure or a late-night arrival, we are always ready to accommodate your travel needs."
    },
    {
        "WhyChooseheading": "Quick and Easy Booking with Real-Time Updates",
        "WhyChoosedescription": "Booking a mini bus with Samarth Travels is simple and hassle-free. You can easily book online through our website or customer support team. Once your booking is confirmed, we provide live tracking, real-time updates, and driver details, so you're always in the loop throughout your journey."
    },
    {
        "WhyChooseheading": "Clean, Well-Maintained, and Sanitized Vehicles",
        "WhyChoosedescription": "We maintain the highest standards of cleanliness and hygiene for all our vehicles. Every mini bus is thoroughly cleaned and sanitized before and after each trip, ensuring a safe and comfortable environment for you and your group. Regular maintenance checks are carried out to guarantee the reliability and safety of each vehicle."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "Samarth Travels offers various payment options for your convenience. Whether you prefer to pay by cash, UPI, credit/debit cards, or digital wallets, we ensure a seamless and secure payment process, making your mini bus rental experience effortless from start to finish."
    }
]















    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a Mini Bus with Samarth Travels?',
        answer: 'Renting a Mini Bus with Samarth Travels is simple and quick. Just visit our website or contact our support team, provide your travel details like date, number of passengers, and destination, and we’ll handle the rest. We offer quick confirmations and flexible rental plans.',
    },
    {
        id: 2,
        question: 'What seating options are available for Mini Bus rental?',
        answer: 'Samarth Travels offers Mini Buses in various seating capacities, including 18-seater, 22-seater, and 26-seater options. All our Mini Buses are ideal for group tours, corporate events, school outings, and family functions.',
    },
    {
        id: 3,
        question: 'What is included in the Mini Bus rental cost?',
        answer: 'The rental cost includes the Mini Bus, experienced driver, and fuel. Any additional charges such as tolls, parking fees, or interstate permits will be clearly communicated before your trip. No hidden charges guaranteed.',
    },
    {
        id: 4,
        question: 'Is Mini Bus rental available for outstation trips?',
        answer: 'Yes, Samarth Travels provides Mini Bus rentals for both local and outstation travel. Whether it’s a pilgrimage, hill station trip, or out-of-town event, our Mini Buses ensure a safe and comfortable ride.',
    },
    {
        id: 5,
        question: 'Can I rent a Mini Bus for one-day or short trips?',
        answer: 'Yes, we offer Mini Bus rentals for single-day events, local sightseeing, and short trips. Our flexible packages are designed to suit both short-term and long-term needs.',
    },
    {
        id: 6,
        question: 'Are the Mini Buses air-conditioned and well-maintained?',
        answer: 'All our Mini Buses are well-maintained, clean, and come with air-conditioning, comfortable seats, and ample luggage space to ensure a pleasant travel experience for your group.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 Mini Bus rental service?',
        answer: 'Yes, Samarth Travels provides 24/7 rental services. Whether you need a Mini Bus early in the morning or late at night, we are always ready to meet your travel needs.',
    },
];

const testimonials = [
    {
        name: 'Mr. Mahesh Sawant',
        role: 'Corporate HR Manager',
        text: 'Booked a Mini Bus from Samarth Travels for a corporate outing. The bus was clean, comfortable, and punctual. Excellent service from start to finish!',
        image: '/img/testimonial/testi_2_14.jpg',
    },
    {
        name: 'Mrs. Anjali Khedekar',
        role: 'Event Coordinator',
        text: 'We used Samarth Travels for a family function. The Mini Bus was perfect for our group. Very cooperative driver and smooth coordination. Highly recommend!',
        image: '/img/testimonial/testi_2_15.jpg',
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
  "name": "Mini Bus for Rent",
  "image": "https://samarthtravels.com/assets/images/mini-bus-for-rent.jpg",
  "description": "Rent a Mini Bus for corporate events, outstation trips, family picnics, weddings, and sightseeing in Pune. Choose from affordable and comfortable 12-seater options for small group travel and more with Samarth Travels.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "5903"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/mini-bus-for-rent"
  }
};




    return (
        <div>
<Helmet>
  <title>Mini Bus for Rent in Pune | Affordable & Comfortable Rental Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a Mini Bus in Pune for corporate events, outstation trips, family picnics, weddings, and sightseeing. Affordable 12-seater options available for small group travel with Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="Mini Bus Hire for Corporate Events, Rent a Mini Bus for Outstation Trips from Pune, Affordable Mini Bus Rental in Pune, 12-Seater Mini Bus Rental for Small Group Travel, Mini Bus on Rent for Pune Sightseeing, Rent a Mini Bus for Family Picnics in Pune, Mini Bus Hire for Wedding Events in Pune" 
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
                            <img src='/images/keyword/7.jpg' alt='img' />
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

export default Minibusforrent;