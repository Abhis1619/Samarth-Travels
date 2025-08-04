
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busonrentpune() {



    const cardData =
    {
        keyword: ' Bus on Rent Pune',
        heading: 'Samarth Travels: Bus on Rent Pune',
        headingDescription: 'Samarth Travels offers trusted and affordable bus on rent services in Pune, ideal for weddings, corporate outings, and group tours. Choose from a wide range of AC and non-AC buses, from 17-seater to 50-seater options, all well-maintained and operated by professional drivers. With clear pricing, no hidden charges, and a focus on safety and punctuality, Samarth Travels ensures a smooth and stress-free travel experience.',

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
        "name": "Rent a Bus for Family Get-Togethers in Pune",
        "description": "Make your family get-togethers even more enjoyable with Samarth Travels’ bus rental services in Pune. Whether it’s a family reunion, birthday party, or holiday outing, our spacious buses provide a comfortable and fun way to travel together. Our fleet ensures easy coordination, ample luggage space, and a smooth ride for all."
    },
    {
        "name": "Bus Rental Service in Pune for Local Sightseeing",
        "description": "Discover Pune’s best local attractions with a comfortable and convenient bus rental from Samarth Travels. Our buses are perfect for sightseeing tours, visiting popular spots like Shaniwar Wada, Aga Khan Palace, and Sinhagad Fort, with knowledgeable drivers ensuring a safe and enriching experience."
    },
    {
        "name": "Bus Rental for Corporate Events in Pune",
        "description": "Ensure efficient and hassle-free transport for your next corporate event with Samarth Travels’ bus rental service in Pune. We cater to team outings, conferences, client visits, and seminars, offering punctual and comfortable transportation solutions with air-conditioned buses and professional drivers."
    },
    {
        "name": "Rent a Bus for School Field Trips in Pune",
        "description": "Samarth Travels provides safe, reliable, and comfortable bus rentals for school field trips in Pune. Whether it’s an educational tour, picnic, or sporting event, our buses are ideal for groups, with ample seating, safety features, and experienced drivers ensuring a smooth journey for students and teachers alike."
    },
    {
        "name": "Outstation Bus Hire in Pune",
        "description": "Planning a long-distance journey from Pune? Rent an outstation bus from Samarth Travels for your next adventure. Our buses are well-equipped for long journeys, offering comfortable seating, air conditioning, and experienced drivers familiar with popular routes to destinations like Goa, Shirdi, and more."
    },
    {
        "name": "Book a Bus on Rent for Pune to Goa",
        "description": "Travel from Pune to Goa in comfort with Samarth Travels’ bus rental services. Whether it’s for a family vacation, corporate retreat, or group holiday, our buses are perfect for the journey, with spacious seating, air conditioning, and professional drivers ensuring a pleasant and timely ride."
    },
    {
        "name": "Rent a 45-Seater Bus for Group Travel in Pune",
        "description": "Need a larger vehicle for group travel in Pune? Rent a 45-seater bus from Samarth Travels, ideal for big groups, corporate events, or school outings. Our buses offer ample seating, air conditioning, and convenient amenities for a comfortable travel experience, all at an affordable price."
    }
],
"tableData": [
    ["Rent a Bus for Family Get-Togethers in Pune", "Bus Rental Service in Pune for Local Sightseeing"],
    ["Bus Rental for Corporate Events in Pune", "Rent a Bus for School Field Trips in Pune"],
    ["Outstation Bus Hire in Pune", "Book a Bus on Rent for Pune to Goa"],
    ["Rent a 45-Seater Bus for Group Travel in Pune", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Top Choice for Bus on Rent in Pune",
        "WhyChoosedescription": "Samarth Travels offers reliable and affordable bus on rent services in Pune, catering to a variety of travel needs. Whether you're organizing a corporate outing, a school trip, a wedding shuttle, or an outstation journey, we have the perfect bus to suit your requirements, ensuring safe, comfortable, and timely travel."
    },
    {
        "WhyChooseheading": "Diverse Fleet of Well-Maintained Buses",
        "WhyChoosedescription": "We provide a wide range of buses for rent in Pune, from 17-seater minibuses to 50+ seater luxury coaches. Our fleet is regularly maintained, fully air-conditioned, and equipped with comfortable seating, spacious interiors, and modern amenities. Whether you're traveling locally or on long-distance trips, we ensure that you travel in utmost comfort."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Punctual Travel",
        "WhyChoosedescription": "Our drivers are well-trained, experienced, and well-versed in the routes of Pune and nearby destinations. They prioritize safety, follow traffic rules, and ensure a smooth and punctual journey. With a friendly and professional approach, they make sure you arrive at your destination on time and without any stress."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "At Samarth Travels, we offer clear and competitive pricing for all bus rentals in Pune. There are no hidden fees or extra charges—just upfront, honest pricing that gives you peace of mind. Whether it's a short trip or a long-distance journey, you can trust us to provide the best value for your travel."
    },
    {
        "WhyChooseheading": "Available 24/7 for Flexible Bookings",
        "WhyChoosedescription": "We understand that travel plans can change, and sometimes you need a bus at the last minute. That’s why we offer 24/7 availability for bookings in Pune. Whether it’s an early morning pickup, a late-night return, or a spontaneous trip, Samarth Travels is here to accommodate your travel schedule."
    },
    {
        "WhyChooseheading": "Easy Online Booking and Real-Time Tracking",
        "WhyChoosedescription": "Booking a bus with Samarth Travels is simple and convenient. You can easily book online through our website or by contacting our customer support team. After booking, you’ll receive real-time updates, including live tracking, estimated arrival times, and driver contact details, ensuring you’re always informed throughout the journey."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Hygienic Buses",
        "WhyChoosedescription": "The health and safety of our passengers are our top priorities. We maintain strict cleanliness standards for all our buses, with regular sanitization after every trip. Our vehicles are well-maintained to ensure a comfortable and safe environment, offering peace of mind while you travel."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Your Convenience",
        "WhyChoosedescription": "To make your booking experience even easier, we offer various payment methods, including cash, UPI, credit/debit cards, and digital wallets. No matter your preference, we ensure a seamless and secure payment process to make your bus rental experience as convenient as possible."
    }
]

















    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a bus in Pune with Samarth Travels?',
        answer: 'Renting a bus in Pune with Samarth Travels is simple. Visit our website or contact our team to share your travel details such as group size, destination, and travel dates. We will provide you with the best-suited bus for your journey.',
    },
    {
        id: 2,
        question: 'What types of buses are available for rent in Pune?',
        answer: 'Samarth Travels offers a variety of buses for rent in Pune, including 22-seater, 32-seater, 40-seater, and 50-seater buses. Whether you need an AC or non-AC bus, we have options suitable for corporate events, school trips, weddings, and family tours.',
    },
    {
        id: 3,
        question: 'What is included in the bus rental cost in Pune?',
        answer: 'The rental cost includes the bus, fuel, driver charges, and taxes. Additional costs like tolls, parking, and interstate permits (if required) will be discussed upfront to ensure there are no hidden fees.',
    },
    {
        id: 4,
        question: 'Can I rent a bus for an outstation trip from Pune?',
        answer: 'Yes, Samarth Travels offers buses for both local and outstation trips from Pune. Whether you are planning a trip to popular destinations like Lonavala, Mahabaleshwar, or Goa, we’ve got you covered.',
    },
    {
        id: 5,
        question: 'Is it possible to rent a bus in Pune for a single-day trip?',
        answer: 'Yes, you can rent a bus for one-day trips. Whether it’s a corporate outing, wedding transport, or a family event, we offer flexible rental packages for both short and long durations.',
    },
    {
        id: 6,
        question: 'Are the buses in Pune equipped with AC and comfortable seating?',
        answer: 'Yes, all our buses in Pune come with comfortable seating, air-conditioning, and clean interiors to ensure a pleasant and relaxing journey for you and your group.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 bus rental services in Pune?',
        answer: 'Yes, Samarth Travels provides 24/7 bus rental services in Pune. You can schedule your travel for any time of day or night, and our team will ensure a seamless experience from start to finish.',
    },
];

const testimonials = [
    {
        name: 'Mr. Ramesh Kulkarni',
        role: 'Business Owner',
        text: 'We rented a 40-seater bus from Samarth Travels for a corporate event. The bus was spacious, clean, and well-maintained. The driver was professional and made our journey smooth and enjoyable. Highly recommended!',
        image: '/img/testimonial/testi_2_18.jpg',
    },
    {
        name: 'Miss. Shweta Joshi',
        role: 'Event Coordinator',
        text: 'I used Samarth Travels for a wedding transport service in Pune. The bus was on time, comfortable, and spacious enough for all the guests. The whole process was easy and hassle-free.',
        image: '/img/testimonial/testi_2_19.jpg',
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
  "name": "Bus on Rent Pune",
  "image": "https://samarthtravels.com/assets/images/bus-on-rent-pune.jpg",
  "description": "Rent a bus for family get-togethers, corporate events, school field trips, and local sightseeing in Pune. Outstation bus hire services available, including trips to Goa and other popular destinations. Affordable options for group travel.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6542"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-on-rent-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>Bus on Rent in Pune | Family Get-Togethers, Corporate Events & Goa Trips | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus in Pune for family get-togethers, corporate events, school field trips, and local sightseeing. Affordable outstation bus hire services for trips to Goa and other destinations, including 45-seater buses." 
  />
  <meta 
    name="keywords" 
    content="Rent a Bus for Family Get-Togethers in Pune, Bus Rental Service in Pune for Local Sightseeing, Bus Rental for Corporate Events in Pune, Rent a Bus for School Field Trips in Pune, Outstation Bus Hire in Pune, Book a Bus on Rent for Pune to Goa, Rent a 45-Seater Bus for Group Travel in Pune" 
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
                            <img src='/images/keyword/9.jpg' alt='img' />
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

export default Busonrentpune;