
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Bushireinpune() {



    const cardData =
    {
        keyword: ' Bus Hire in Pune',
        heading: 'Samarth Travels: Bus Hire in Pune',
        headingDescription: 'Samarth Travels offers dependable and affordable bus hire services in Pune, ideal for group travel, weddings, and corporate outings. Choose from a fleet of well-maintained AC and non-AC buses, including 17-seater to 50-seater options. With professional drivers, transparent pricing, and a focus on punctuality and comfort, Samarth Travels ensures a smooth and stress-free travel experience.',

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
        "name": "Hire a Bus for Group Tours in Pune",
        "description": "Planning a group tour in or around Pune? Samarth Travels offers comfortable and spacious buses for group travel, ideal for sightseeing, pilgrimage, and outstation tours. Our buses come with experienced drivers and modern amenities to ensure a safe, convenient, and enjoyable travel experience for large groups."
    },
    {
        "name": "Rent a Bus for Corporate Picnics in Pune",
        "description": "Organize hassle-free corporate picnics with Samarth Travels’ bus rental services in Pune. Our fleet is perfect for transporting employees to resorts, adventure parks, or nature spots, offering comfortable seating, air conditioning, and reliable service that fits your team outing needs."
    },
    {
        "name": "Affordable Bus Hire Services in Pune",
        "description": "Samarth Travels provides budget-friendly bus hire services in Pune without compromising on quality. Whether it’s for local events, school outings, or long-distance travel, our well-maintained buses and courteous drivers ensure a smooth journey at a price that suits your budget."
    },
    {
        "name": "Bus Hire for Outstation Trips from Pune",
        "description": "Heading out of town? Book a bus from Samarth Travels for outstation trips from Pune to popular destinations like Goa, Mahabaleshwar, or Shirdi. Our buses are ideal for group travel and feature ample luggage space, air-conditioning, and trained drivers for a safe and pleasant journey."
    },
    {
        "name": "32-Seater Bus Hire for Wedding Functions in Pune",
        "description": "Make your wedding transportation smooth and stress-free by hiring a 32-seater bus from Samarth Travels. Perfect for guest transfers between venues, this option ensures your friends and family travel together in comfort and arrive on time for every ceremony and celebration."
    },
    {
        "name": "Bus Hire for School Excursions in Pune",
        "description": "Samarth Travels offers safe and dependable bus hire services for school excursions and educational field trips in Pune. Our buses are equipped with safety features, experienced drivers, and spacious seating to ensure a worry-free travel experience for students and teachers alike."
    },
    {
        "name": "Bus Hire for Business Events in Pune",
        "description": "Need transport for a seminar, conference, or client meeting? Samarth Travels provides professional bus hire services for business events in Pune. Our clean and comfortable buses, along with punctual drivers, ensure smooth and organized travel for your entire team or VIP guests."
    }
],
"tableData": [
    ["Hire a Bus for Group Tours in Pune", "Rent a Bus for Corporate Picnics in Pune"],
    ["Affordable Bus Hire Services in Pune", "Bus Hire for Outstation Trips from Pune"],
    ["32-Seater Bus Hire for Wedding Functions in Pune", "Bus Hire for School Excursions in Pune"],
    ["Bus Hire for Business Events in Pune", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Hire Services in Pune",
        "WhyChoosedescription": "Samarth Travels is the leading provider of bus hire services in Pune, offering dependable, safe, and comfortable travel solutions for groups of all sizes. Whether you're planning a corporate outing, family trip, school excursion, or a wedding, we have the perfect bus for your needs, ensuring a seamless and enjoyable travel experience."
    },
    {
        "WhyChooseheading": "Wide Range of Buses to Suit Every Group Size",
        "WhyChoosedescription": "Our fleet of buses includes options ranging from 17-seater minibuses to 50+ seater luxury coaches, catering to all types of group sizes. All buses are fully air-conditioned and equipped with comfortable seating, ample legroom, and modern amenities, ensuring a relaxing and comfortable journey for everyone onboard."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Punctual Travel",
        "WhyChoosedescription": "We take pride in our team of professional drivers who are experienced and knowledgeable about the best routes in Pune and surrounding areas. They prioritize safety, punctuality, and customer satisfaction, ensuring a smooth and timely journey, no matter the distance or route."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "At Samarth Travels, we believe in offering transparent, competitive pricing for bus hire in Pune. There are no hidden costs or surprise charges—just honest, upfront pricing. Whether it's a short trip or a long-distance journey, you’ll find our rates to be the best value for the comfort and service provided."
    },
    {
        "WhyChooseheading": "Flexible 24/7 Availability to Fit Your Schedule",
        "WhyChoosedescription": "Our bus hire services in Pune are available around the clock, providing you with the flexibility to travel whenever you need. Whether it's an early morning departure, late-night return, or last-minute booking, we’re ready to accommodate your travel schedule, offering a hassle-free experience."
    },
    {
        "WhyChooseheading": "Easy Online Booking and Real-Time Tracking",
        "WhyChoosedescription": "Booking a bus with Samarth Travels is easy and convenient. You can quickly book your bus through our website or by contacting our customer service team. Once your booking is confirmed, you’ll receive real-time updates, including live tracking of your bus, driver details, and estimated arrival times, keeping you informed every step of the way."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "We prioritize your health and safety. All our buses undergo thorough cleaning and sanitization before and after every trip, ensuring a hygienic environment for all passengers. Regular maintenance checks are performed to ensure that every bus is in optimal condition for a safe and comfortable ride."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Your Convenience",
        "WhyChoosedescription": "Samarth Travels offers various payment methods to make your booking process easy and convenient. You can pay via cash, UPI, credit/debit cards, or digital wallets, ensuring that you have a seamless and secure transaction for your bus hire in Pune."
    }
]



















    }

const faqData = [
    {
        id: 1,
        question: 'How can I hire a bus in Pune with Samarth Travels?',
        answer: 'Hiring a bus in Pune with Samarth Travels is quick and easy. You can book a bus by visiting our website or contacting our customer support team. Share your travel details, such as the number of passengers, destination, and travel dates, and we’ll provide you with the best bus options.',
    },
    {
        id: 2,
        question: 'What types of buses are available for hire in Pune?',
        answer: 'We offer a range of buses for hire in Pune, including 22-seater, 32-seater, 40-seater, and 50-seater buses. Whether you need an AC or non-AC bus, we provide vehicles suited for group travel, corporate events, school outings, and more.',
    },
    {
        id: 3,
        question: 'What is included in the bus hire charges in Pune?',
        answer: 'The bus hire charges include the vehicle, fuel, and driver services. Additional charges such as tolls, parking, and permits (if applicable) will be informed upfront, ensuring transparency with no hidden costs.',
    },
    {
        id: 4,
        question: 'Is bus hire available for outstation trips from Pune?',
        answer: 'Yes, Samarth Travels offers bus hire services for both local and outstation trips from Pune. Whether you’re planning a pilgrimage, sightseeing trip, or corporate retreat, our buses ensure a safe and comfortable journey.',
    },
    {
        id: 5,
        question: 'Can I hire a bus for a one-day trip in Pune?',
        answer: 'Yes, you can hire a bus for a single day. Whether it’s for a wedding, corporate function, school event, or city tour, we offer flexible rental packages to meet your needs.',
    },
    {
        id: 6,
        question: 'Are the buses for hire in Pune comfortable for long journeys?',
        answer: 'Yes, all our buses are well-maintained, clean, and come equipped with comfortable seating, air-conditioning, and ample space for luggage. They are perfect for long-distance travel and provide a smooth, comfortable experience for passengers.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 bus hire services in Pune?',
        answer: 'Yes, Samarth Travels offers 24/7 bus hire services in Pune. You can hire a bus at any time, and our team will ensure everything is arranged according to your schedule.',
    },
];

const testimonials = [
    {
        name: 'Mr. Ashish Rathi',
        role: 'Business Owner',
        text: 'We hired a 40-seater bus from Samarth Travels for a company trip. The bus was spacious, clean, and well-maintained. The driver was professional, and everything was on time. Excellent service!',
        image: '/img/testimonial/testi_2_24.jpg',
    },
    {
        name: 'Mrs. Anjali Patil',
        role: 'Wedding Planner',
        text: 'I hired a 50-seater bus for a wedding event. The service was superb, and the bus was perfect for our guests. The driver was helpful and ensured the trip went smoothly. Highly recommended!',
        image: '/img/testimonial/testi_2_25.jpg',
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
  "name": "Bus Hire in Pune",
  "image": "https://samarthtravels.com/assets/images/bus-hire-pune.jpg",
  "description": "Hire a bus in Pune for group tours, corporate picnics, outstation trips, school excursions, and business events. Affordable bus hire services available for wedding functions, with options like 32-seater buses for all your travel needs.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6193"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-hire-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>Bus Hire in Pune | Group Tours, Corporate Picnics & Wedding Functions | Samarth Travels</title>
  <meta 
    name="description" 
    content="Hire a bus in Pune for group tours, corporate picnics, outstation trips, school excursions, and business events. Affordable bus hire services available for wedding functions, including 32-seater buses." 
  />
  <meta 
    name="keywords" 
    content="Hire a Bus for Group Tours in Pune, Rent a Bus for Corporate Picnics in Pune, Affordable Bus Hire Services in Pune, Bus Hire for Outstation Trips from Pune, 32-Seater Bus Hire for Wedding Functions in Pune, Bus Hire for School Excursions in Pune, Bus Hire for Business Events in Pune" 
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
                            <img src='/images/keyword/12.jpg' alt='img' />
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

export default Bushireinpune;