
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentalinpune() {



    const cardData =
    {
        keyword: ' Bus Rental in Pune',
        heading: 'Samarth Travels: Bus Rental in Pune',
        headingDescription: 'Samarth Travels offers reliable and affordable bus rental services in Pune, ideal for group outings, corporate events, or family trips. Choose from a range of well-maintained buses, including 14-seater, 17-seater, 24-seater, 32-seater, 40-seater, and 50-seater options, all equipped with comfortable seating and essential amenities. With transparent pricing, no hidden charges, and a commitment to punctuality and customer satisfaction, Samarth Travels ensures a smooth and enjoyable travel experience across Pune and beyond.',

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
        "name": "Affordable Bus Rental Services in Pune",
        "description": "Looking for budget-friendly bus rental options in Pune? Samarth Travels offers affordable and reliable bus services for all types of group travel. From local sightseeing to outstation trips, we provide cost-effective solutions without compromising on comfort, safety, or service quality."
    },
    {
        "name": "Bus Rental for Weddings in Pune",
        "description": "Ensure smooth and coordinated transportation for your wedding guests with Samarth Travels’ bus rental services in Pune. Our buses are perfect for large gatherings, offering comfortable seating, air-conditioning, and timely transfers between venues. Let us take care of the logistics so you can focus on your big day."
    },
    {
        "name": "Rent a Bus for Picnic Trips from Pune",
        "description": "Planning a picnic trip with family or friends? Rent a bus from Samarth Travels for a comfortable and fun-filled outing from Pune. Whether it's a visit to Lonavala, Lavasa, or any nearby spot, our buses are equipped to handle your travel needs, with plenty of space for everyone and their picnic supplies."
    },
    {
        "name": "Corporate Bus Rental Services in Pune",
        "description": "Make your corporate travel easy and efficient with Samarth Travels’ bus rental services in Pune. Whether it’s a team-building event, a conference, or a corporate outing, our buses ensure that your team travels together comfortably. We offer timely service, clean buses, and professional drivers for a seamless experience."
    },
    {
        "name": "Rent a Luxury Bus for Group Travel in Pune",
        "description": "Travel in style and comfort with our luxury bus rental services in Pune. Ideal for group tours, corporate trips, or family vacations, Samarth Travels offers luxury buses equipped with premium amenities such as reclining seats, Wi-Fi, and entertainment systems to ensure a high-end travel experience."
    },
    {
        "name": "Bus Rental for Airport Transfers in Pune",
        "description": "Simplify your airport transfer needs with Samarth Travels’ bus rental services in Pune. Whether you're hosting a large group of corporate clients or coordinating family travel, our airport transfer buses provide comfortable seating, timely service, and convenient drop-offs and pickups at Pune Airport."
    },
    {
        "name": "School Bus Rentals for Field Trips in Pune",
        "description": "Samarth Travels offers reliable and safe school bus rentals in Pune for field trips, educational tours, and other school events. Our buses are equipped with safety features, ample space, and experienced drivers to ensure a smooth, enjoyable experience for students and teachers alike."
    }
],
"tableData": [
    ["Affordable Bus Rental Services in Pune", "Bus Rental for Weddings in Pune"],
    ["Rent a Bus for Picnic Trips from Pune", "Corporate Bus Rental Services in Pune"],
    ["Rent a Luxury Bus for Group Travel in Pune", "Bus Rental for Airport Transfers in Pune"],
    ["School Bus Rentals for Field Trips in Pune", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Trusted Bus Rental Services in Pune",
        "WhyChoosedescription": "Samarth Travels is the leading provider of bus rental services in Pune, offering reliable and comfortable travel solutions for groups of all sizes. Whether you're planning a family trip, corporate outing, school excursion, or need transportation for a wedding or event, we have the ideal bus for your needs."
    },
    {
        "WhyChooseheading": "Wide Range of Buses for Every Need",
        "WhyChoosedescription": "Our fleet includes a variety of buses for rent, ranging from 17-seater minibuses to 50+ seater luxury coaches, ensuring you get the right bus for your group size and travel requirements. All our buses are equipped with comfortable seating, air conditioning, and other modern amenities to make your journey relaxing and enjoyable."
    },
    {
        "WhyChooseheading": "Professional and Experienced Drivers",
        "WhyChoosedescription": "At Samarth Travels, we understand that safe and timely travel is a priority. Our team of experienced, courteous drivers is well-versed with Pune’s roads and routes, ensuring you arrive at your destination safely and on time. They follow all traffic rules and are dedicated to providing a smooth and stress-free ride."
    },
    {
        "WhyChooseheading": "Affordable Bus Rental with Transparent Pricing",
        "WhyChoosedescription": "We believe in offering competitive and transparent pricing for bus rentals in Pune. There are no hidden costs or surprise fees—just clear, upfront rates. Whether it’s a short local trip or a long-distance journey, we ensure that you get the best value for your money without compromising on quality or service."
    },
    {
        "WhyChooseheading": "Available 24/7 for Flexible Bookings",
        "WhyChoosedescription": "Whether you need a bus early in the morning or late at night, Samarth Travels offers round-the-clock availability. Our buses are ready whenever you need them, making it easy to accommodate early departures, late-night returns, or last-minute bookings, ensuring flexibility for your travel plans."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking and Real-Time Tracking",
        "WhyChoosedescription": "Booking a bus with Samarth Travels is simple and straightforward. You can easily make a reservation online through our website or by contacting our customer support team. Once your booking is confirmed, you’ll receive real-time updates on your bus, including live tracking, driver details, and estimated arrival times, keeping you informed throughout the journey."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "Your health and safety are our top priorities. We ensure that all buses are thoroughly cleaned and sanitized before every trip. Regular maintenance checks are performed to ensure our vehicles are in top condition, providing you with a safe, comfortable, and hygienic travel experience."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "We offer a variety of payment options for your convenience, including cash, UPI, credit/debit cards, and digital wallets. This ensures a seamless and secure payment process, making your bus rental experience with Samarth Travels quick, easy, and hassle-free."
    }
]


















    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a bus rental in Pune with Samarth Travels?',
        answer: 'Booking a bus rental in Pune with Samarth Travels is easy. You can either visit our website or contact our customer service team. Share your travel details, including group size, destination, and travel dates, and we’ll suggest the best bus options for you.',
    },
    {
        id: 2,
        question: 'What types of buses are available for rental in Pune?',
        answer: 'Samarth Travels offers a variety of buses for rental in Pune, including 22-seater, 32-seater, 40-seater, and 50-seater buses. We provide both AC and non-AC options, perfect for group tours, corporate outings, school trips, or special events.',
    },
    {
        id: 3,
        question: 'What’s included in the bus rental price in Pune?',
        answer: 'The rental cost includes the bus, fuel, driver charges, and taxes. Additional expenses like tolls, parking fees, and state permits (if applicable) are communicated upfront, so you won’t have any surprise charges.',
    },
    {
        id: 4,
        question: 'Can I rent a bus for an outstation trip from Pune?',
        answer: 'Yes, Samarth Travels offers bus rental services for both local and outstation trips from Pune. Whether you’re planning a trip to Lonavala, Mahabaleshwar, or a longer destination like Goa, we’ve got you covered.',
    },
    {
        id: 5,
        question: 'Is it possible to rent a bus for a single day in Pune?',
        answer: 'Yes, we offer one-day bus rentals in Pune. Whether you need a bus for a wedding, a day trip, a corporate event, or a group outing, we have flexible rental packages to suit your needs.',
    },
    {
        id: 6,
        question: 'Are the rental buses in Pune comfortable for long journeys?',
        answer: 'Yes, all our buses in Pune are well-maintained, comfortable, and equipped with AC, pushback seats, clean interiors, and ample legroom. They are perfect for long journeys and ensure a smooth ride for all passengers.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 bus rental services in Pune?',
        answer: 'Yes, Samarth Travels provides round-the-clock bus rental services in Pune. You can book a bus at any time, and our team will ensure that everything is arranged as per your requirements.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sanjay Deshmukh',
        role: 'Travel Blogger',
        text: 'I rented a 32-seater bus from Samarth Travels for a group tour around Pune. The bus was clean, the driver was professional, and the overall experience was fantastic. Highly recommend their service!',
        image: '/img/testimonial/testi_2_20.jpg',
    },
    {
        name: 'Mrs. Sunita Ghosh',
        role: 'Wedding Planner',
        text: 'I booked a 50-seater bus for a wedding event in Pune. The service was excellent, the bus was on time, and the driver was very accommodating. Made our wedding transportation easy and stress-free.',
        image: '/img/testimonial/testi_2_21.jpg',
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
  "name": "Bus Rental in Pune",
  "image": "https://samarthtravels.com/assets/images/bus-rental-pune.jpg",
  "description": "Affordable bus rental services in Pune for weddings, picnic trips, corporate events, and school field trips. Rent luxury buses for group travel, airport transfers, and more with Samarth Travels.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6015"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rental-in-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>Bus Rental in Pune | Weddings, Corporate Events & Picnic Trips | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus in Pune for weddings, corporate events, picnic trips, school field trips, and airport transfers. Affordable luxury bus rental services available for group travel with Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="Affordable Bus Rental Services in Pune, Bus Rental for Weddings in Pune, Rent a Bus for Picnic Trips from Pune, Corporate Bus Rental Services in Pune, Rent a Luxury Bus for Group Travel in Pune, Bus Rental for Airport Transfers in Pune, School Bus Rentals for Field Trips in Pune" 
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
                            <img src='/images/keyword/10.jpg' alt='img' />
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

export default Busrentalinpune;