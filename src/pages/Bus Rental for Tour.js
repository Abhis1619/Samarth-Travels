
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentalfortour() {



    const cardData =
    {
        keyword: 'Bus Rental for Tour',
        heading: 'Samarth Travels: Bus Rental for Tour',
        headingDescription: 'Samarth Travels offers affordable and comfortable bus rental for tours, ideal for family vacations, school trips, and group excursions. Choose from a wide range of clean and spacious buses, including AC and non-AC options from 17 to 50 seaters. With expert drivers, transparent pricing, and a focus on safety and convenience, Samarth Travels ensures a memorable and hassle-free touring experience.',

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
        "name": "Tour Bus Rental in Pune",
        "description": "Samarth Travels offers convenient and comfortable tour bus rental in Pune for all types of travel needs. Whether it's a short city tour or an extended journey, our clean, air-conditioned buses ensure your group travels together in comfort, safety, and style."
    },
    {
        "name": "Rent a Bus for Family Tours in Pune",
        "description": "Planning a family vacation or reunion trip? Rent a bus from Samarth Travels and enjoy hassle-free travel with your loved ones. Our buses are spacious, well-maintained, and perfect for family group tours, offering a relaxing and enjoyable travel experience."
    },
    {
        "name": "Bus Hire for Sightseeing Tours in Pune",
        "description": "Explore Pune’s rich heritage and scenic spots with Samarth Travels’ sightseeing bus hire services. Our drivers are experienced with local routes, and our buses provide comfortable seating, ample storage, and AC to make your sightseeing tours memorable and convenient."
    },
    {
        "name": "Affordable Bus Rental for Tours from Pune",
        "description": "Looking for a cost-effective way to travel in a group? Samarth Travels provides affordable bus rental services for tours from Pune. Whether it’s a school, college, or community group, we offer budget-friendly packages without compromising on safety or comfort."
    },
    {
        "name": "Luxury Bus Hire for Tour Trips in Pune",
        "description": "Travel in luxury with our premium tour bus hire service in Pune. Samarth Travels offers high-end buses equipped with reclining seats, air conditioning, entertainment systems, and more—perfect for executive tours, VIP trips, and high-comfort travel requirements."
    },
    {
        "name": "Bus Rental for Educational Tours in Pune",
        "description": "Samarth Travels specializes in bus rental for educational tours and field trips from Pune. Our buses are ideal for schools and colleges, offering safe and comfortable travel with enough space for students, teachers, and equipment. Safety and punctuality guaranteed."
    },
    {
        "name": "Rent a Bus for Group Tours from Pune",
        "description": "Whether you're planning a religious trip, a sightseeing vacation, or a nature getaway, Samarth Travels provides group tour buses from Pune to popular destinations across Maharashtra and beyond. Comfortable seating and experienced drivers make every trip smooth and pleasant."
    },
    {
        "name": "Bus on Rent for Pilgrimage Tours in Pune",
        "description": "Plan your spiritual journey with Samarth Travels’ bus rental for pilgrimage tours in Pune. We offer clean, reliable buses with ample space and AC comfort for visits to places like Shirdi, Pandharpur, and Trimbakeshwar. Perfect for group religious tours and yatras."
    },
    {
        "name": "Tour Bus Rental Services in Pune",
        "description": "Samarth Travels offers a complete range of tour bus rental services in Pune. From one-day local tours to multi-day outstation packages, our fleet and experienced team ensure your journey is seamless, safe, and enjoyable from start to finish."
    },
    {
        "name": "Rent a 32-Seater Bus for Tour in Pune",
        "description": "Need a mid-sized option for your group tour? Rent a 32-seater bus from Samarth Travels in Pune. Ideal for schools, offices, and family groups, this vehicle balances space, comfort, and affordability—making it perfect for all types of regional tours."
    }
],
"tableData": [
    ["Tour Bus Rental in Pune", "Rent a Bus for Family Tours in Pune"],
    ["Bus Hire for Sightseeing Tours in Pune", "Affordable Bus Rental for Tours from Pune"],
    ["Luxury Bus Hire for Tour Trips in Pune", "Bus Rental for Educational Tours in Pune"],
    ["Rent a Bus for Group Tours from Pune", "Bus on Rent for Pilgrimage Tours in Pune"],
    ["Tour Bus Rental Services in Pune", "Rent a 32-Seater Bus for Tour in Pune"]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Rental for Tours",
        "WhyChoosedescription": "Samarth Travels offers reliable and comfortable bus rental services for tours, whether it’s a local sightseeing trip, a multi-city excursion, or a long-distance holiday journey. Our fleet of buses ensures your group travels in comfort and style, with timely departures and arrivals, allowing you to focus on enjoying your tour experience."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses for Group Travel",
        "WhyChoosedescription": "Our fleet includes buses that cater to a variety of group sizes, from 17-seater minibuses to 50+ seater luxury coaches. All buses are equipped with air-conditioning, comfortable seating, ample legroom, and modern amenities such as Wi-Fi (on select buses), ensuring that your tour is as relaxing and enjoyable as possible."
    },
    {
        "WhyChooseheading": "Experienced Drivers for a Safe and Smooth Tour",
        "WhyChoosedescription": "At Samarth Travels, safety and comfort are our top priorities. Our experienced drivers are well-acquainted with the routes for local and long-distance tours, ensuring timely arrivals and smooth travel. They are professional, courteous, and knowledgeable, making sure your group enjoys a safe and pleasant journey throughout the tour."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Tour Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for bus rentals for tours, ensuring you get the best value for your money. With no hidden charges or surprise fees, Samarth Travels provides clear and upfront pricing so you can plan your tour with confidence, without worrying about unexpected costs."
    },
    {
        "WhyChooseheading": "Available 24/7 for Flexible Tour Scheduling",
        "WhyChoosedescription": "Whether you’re planning a day trip, weekend getaway, or a multi-day tour, Samarth Travels is available 24/7 to accommodate your travel schedule. We understand that tours can involve early mornings and late evenings, which is why we offer flexible timing to fit your itinerary, ensuring you have transportation when you need it."
    },
    {
        "WhyChooseheading": "Easy Booking with Real-Time Updates for Your Tour",
        "WhyChoosedescription": "Booking your tour bus rental with Samarth Travels is simple and convenient. You can easily book a bus online through our website or by contacting our customer support team. After booking, you’ll receive real-time updates on your bus, including live tracking, driver details, and estimated arrival times, so you’re always in the loop."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses for Your Tour",
        "WhyChoosedescription": "We prioritize cleanliness and safety for your group. All our buses are thoroughly sanitized before and after every trip, providing a hygienic environment for your tour. Regular maintenance checks ensure that our buses are in excellent condition, offering you a comfortable and worry-free journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy Transactions",
        "WhyChoosedescription": "Samarth Travels offers a variety of convenient payment methods, including cash, UPI, credit/debit cards, and digital wallets. You can choose the payment option that works best for you, ensuring a smooth and secure transaction process when booking your bus rental for your tour."
    }
]














    }

const faqData = [
    {
        id: 1,
        question: 'How can I book a bus rental for a tour with Samarth Travels?',
        answer: 'Booking a bus rental for a tour is simple with Samarth Travels. You can book online through our website or contact our team directly. Share your tour itinerary, group size, and dates, and we’ll provide the best bus options to match your travel needs.',
    },
    {
        id: 2,
        question: 'What types of buses are available for tour rentals?',
        answer: 'Samarth Travels offers a wide range of buses for tour rentals, including 22-seater, 32-seater, 40-seater, and 50-seater buses. You can choose between AC and non-AC options depending on your destination and comfort requirements.',
    },
    {
        id: 3,
        question: 'Is the bus suitable for long-distance tours?',
        answer: 'Yes, all our tour buses are well-maintained and suitable for long-distance travel. They come with pushback seats, air-conditioning, ample luggage space, and clean interiors to ensure a comfortable journey throughout your tour.',
    },
    {
        id: 4,
        question: 'Do you provide buses for multi-day tours?',
        answer: 'Absolutely. We offer flexible rental packages for one-day, multi-day, or extended tours. Whether it’s a pilgrimage, a sightseeing trip, or a vacation, we’ll arrange the right bus for your entire journey.',
    },
    {
        id: 5,
        question: 'Can the bus be customized for different pickup locations?',
        answer: 'Yes, we can plan customized pickups and drop-offs from multiple locations to suit your group’s needs. Our team ensures smooth coordination and logistics throughout the tour.',
    },
    {
        id: 6,
        question: 'Is there a tour guide facility available with the bus rental?',
        answer: 'While we don’t provide tour guides directly, we can connect you with experienced tour guide services on request as an add-on to your bus rental package.',
    },
    {
        id: 7,
        question: 'Do you offer 24/7 assistance for tour bus rentals?',
        answer: 'Yes, Samarth Travels offers round-the-clock customer support to assist you throughout your journey. Whether it is a late-night pickup or an early morning departure, we’re here to help.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rajeev Menon',
        role: 'Tour Organizer',
        text: 'We booked a 40-seater bus for a week-long Maharashtra tour. Samarth Travels delivered excellent service, and the bus was clean, punctual, and perfect for our itinerary. Our group was very satisfied!',
        image: '/img/testimonial/testi_2_30.jpg',
    },
    {
        name: 'Mrs. Vandana Kulkarni',
        role: 'School Administrator',
        text: 'Samarth Travels provided a 50-seater bus for our school’s annual field trip. The students and staff had a safe and enjoyable journey. The coordination was spot on, and the driver was very courteous.',
        image: '/img/testimonial/testi_2_31.jpg',
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
  "name": "Bus Rental for Tour",
  "image": "https://samarthtravels.com/assets/images/bus-rental-for-tour.jpg",
  "description": "Rent a bus for family tours, sightseeing, educational tours, pilgrimage trips, and more with Samarth Travels. Affordable and luxury bus rental services for group tours, family trips, and tour excursions from Pune. Choose from 32-seater and luxury buses for a comfortable travel experience.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6600"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "8500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rental-for-tour"
  }
};



    return (
        <div>

<Helmet>
  <title>Bus Rental for Tour | Family, Sightseeing, Pilgrimage & Group Tours | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for family tours, sightseeing trips, educational tours, pilgrimage excursions, and more with Samarth Travels. Affordable and luxury bus rental services for group travel, with 32-seater options available for comfortable and scenic tours from Pune." 
  />
  <meta 
    name="keywords" 
    content="Tour Bus Rental in Pune, Rent a Bus for Family Tours in Pune, Bus Hire for Sightseeing Tours in Pune, Affordable Bus Rental for Tours from Pune, Luxury Bus Hire for Tour Trips in Pune, Bus Rental for Educational Tours in Pune, Rent a Bus for Group Tours from Pune, Bus on Rent for Pilgrimage Tours in Pune, Tour Bus Rental Services in Pune, Rent a 32-Seater Bus for Tour in Pune" 
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
                            <img src='/images/keyword/19.jpg' alt='img' />
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

export default Busrentalfortour;