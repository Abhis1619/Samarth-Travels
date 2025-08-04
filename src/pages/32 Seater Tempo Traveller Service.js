
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Seatertempotraveller() {



    const cardData =
    {
        keyword: ' 32 Seater Tempo Traveller Service',
        heading: 'Samarth Travels:  32 Seater Tempo Traveller Service',
        headingDescription: 'Samarth Travels offers 32 seater Tempo Traveller service, perfect for large group travel, corporate tours, school trips, and family functions. Our spacious, well-maintained vehicles come with comfortable seating, ample luggage space, and experienced drivers. With transparent pricing, no hidden charges, and a focus on punctuality, Samarth Travels ensures a safe and seamless travel experience for your entire group.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

       "topPlaces": [
         {
      "title": "Aga Khan Palace",
      "description": "Built in 1892 by Sultan Aga Khan III, this sprawling palace is an architectural gem and a key monument in India’s freedom struggle. It served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other leaders during the Quit India Movement. The palace features Italian arches, sprawling gardens, and houses a museum that contains personal belongings of Gandhi and historical photographs. It is also the final resting place of Kasturba Gandhi and Mahadev Desai, adding to its solemn importance."
    },
        {
      "title": "Shaniwar Wada",
      "description": "Shaniwar Wada is a majestic 18th-century fortification located in the heart of Pune. Once the seat of the powerful Peshwas of the Maratha Empire, it is renowned for its historical significance, massive gateways, and intriguing legends, including ghost stories tied to its mysterious past. Despite being partially destroyed by fire, the remaining structures, especially the Delhi Gate and the fort’s expansive garden layout, provide a fascinating glimpse into Maratha architecture and political history."
    },
    {
      "title": "Sinhagad Fort",
      "description": "Located about 30 kilometers from Pune, Sinhagad Fort sits atop the Sahyadri mountains and is a favorite trekking destination for locals and tourists alike. With a history dating back over a thousand years, the fort was famously the site of the battle between the Marathas and the Mughals in 1670. Visitors are drawn to its rugged beauty, crumbling fortifications, and sweeping views of the surrounding valleys, especially during monsoons when the hills are lush green and covered in mist."
    },
    {
      "title": "Pataleshwar Cave Temple",
      "description": "This 8th-century rock-cut temple is carved entirely from a single basalt rock and dedicated to Lord Shiva. Nestled quietly amidst urban Pune, Pataleshwar offers a striking contrast to the city’s bustle. It features a circular Nandi Mandapa and intricately carved columns and sanctums. A protected monument under the Archaeological Survey of India, it’s a peaceful retreat and an excellent example of early Indian rock architecture."
    },
    {
      "title": "Dagdusheth Halwai Ganpati Temple",
      "description": "One of the most famous Ganesh temples in India, Dagdusheth Halwai Ganpati Temple attracts millions of devotees every year, especially during Ganesh Chaturthi. The temple’s grand idol of Lord Ganesh is adorned with gold and jewelry, symbolizing prosperity and devotion. Built by a sweetmaker in the 1800s, the temple also engages in numerous social and cultural initiatives, making it both a religious and community hub."
    },
    {
      "title": "Raja Dinkar Kelkar Museum",
      "description": "Founded by Dr. Dinkar Kelkar in memory of his son, this museum is a treasure trove of Indian heritage. It houses over 20,000 artifacts, including musical instruments, ancient utensils, sculptures, paintings, and even quirky items like betel nut crackers and door frames. The collection offers insight into the daily lives and traditions of Indians across centuries, and its carefully curated exhibits make it a cultural landmark in Pune."
    },
    {
      "title": "Parvati Hill and Temple",
      "description": "Parvati Hill is one of Pune’s oldest heritage sites and offers a combination of spiritual serenity and scenic views. Climbing 103 steps leads to a temple complex dedicated to Goddess Parvati and Lord Shiva. The hill also hosts a small museum, Peshwa-era relics, and panoramic views of the cityscape below, making it ideal for morning walks and peaceful contemplation."
    },
    {
      "title": "Osho Ashram",
      "description": "Located in the serene and green Koregaon Park area, the Osho International Meditation Resort is a global center for spiritual seekers. It offers dynamic meditation sessions, wellness therapies, and luxurious facilities in a Zen-like atmosphere. Known for attracting international visitors, the ashram promotes mindfulness, inner peace, and holistic living through Osho’s teachings."
    },
    {
      "title": "Pune Okayama Friendship Garden",
      "description": "Inspired by the 300-year-old Okayama Korakuen Garden in Japan, this beautifully landscaped space—also known as Pu La Deshpande Garden—is perfect for nature lovers and photographers. The garden features flowing streams, lush lawns, bridges, and seasonal flowers, offering a tranquil escape right in the city. It’s ideal for evening walks and peaceful getaways."
    },
    {
      "title": "Katraj Snake Park and Rajiv Gandhi Zoological Park",
      "description": "Spread over 130 acres, this complex features a zoo, snake park, and animal rescue center. The snake park houses over 160 species of snakes, including cobras and pythons, while the zoo includes tigers, leopards, elephants, and more. Educational exhibits make it an informative and fun spot for children and families, combining entertainment with awareness about wildlife conservation."
    }
  ],

"services": [
    {
        "name": "Rent 32-Seater Tempo Traveller in Pune",
        "description": "Rent a spacious 32-seater Tempo Traveller with Samarth Travels for your next trip in Pune. Ideal for large groups, our Tempo Travellers provide comfortable and safe travel to various destinations, both local and outstation."
    },
    {
        "name": "32-Seater Tempo Traveller Hire in Pune",
        "description": "Hire a 32-seater Tempo Traveller for group travel in Pune. Whether it's for family tours, corporate events, or group getaways, our Tempo Travellers offer a comfortable, air-conditioned ride for all your needs."
    },
    {
        "name": "Affordable 32-Seater Tempo Traveller Service Pune",
        "description": "Looking for an affordable yet comfortable travel solution in Pune? Samarth Travels offers budget-friendly 32-seater Tempo Traveller hire services without compromising on comfort or reliability. Perfect for large groups traveling on a budget."
    },
    {
        "name": "32-Seater AC Tempo Traveller Hire in Pune",
        "description": "Stay cool and comfortable while traveling with Samarth Travels’ 32-seater AC Tempo Traveller rental services in Pune. With air-conditioning and plenty of space, it’s the ideal option for group travel during Pune’s hot months."
    },
    {
        "name": "Luxury 32-Seater Tempo Traveller Rental in Pune",
        "description": "For those looking for a luxurious travel experience, rent a 32-seater luxury Tempo Traveller from Samarth Travels. Equipped with premium amenities, spacious interiors, and a smooth ride, it’s perfect for corporate events, weddings, and VIP trips."
    },
    {
        "name": "32-Seater Tempo Traveller for Group Travel in Pune",
        "description": "Travel with your entire group comfortably in a 32-seater Tempo Traveller from Samarth Travels. Perfect for school groups, family reunions, or corporate outings, our Tempo Travellers offer ample space and modern amenities."
    },
    {
        "name": "Hire a 32-Seater Tempo Traveller for Family Trips in Pune",
        "description": "Samarth Travels provides the perfect 32-seater Tempo Traveller for family trips in Pune. With plenty of space for luggage and a relaxing journey, it’s the ideal choice for family vacations and day trips."
    },
    {
        "name": "Rent 32-Seater Tempo Traveller for Corporate Events in Pune",
        "description": "Rent a 32-seater Tempo Traveller for your next corporate event in Pune with Samarth Travels. Ideal for team outings, conferences, and corporate tours, our buses offer a comfortable ride with professional service."
    },
    {
        "name": "Comfortable 32-Seater Tempo Traveller for Pune Tours",
        "description": "Explore Pune comfortably with a 32-seater Tempo Traveller from Samarth Travels. Whether it’s a sightseeing tour or a city exploration, our well-maintained Tempo Travellers offer the perfect setting for a relaxed and enjoyable journey."
    },
    {
        "name": "32-Seater Tempo Traveller Rental for Outstation Trips from Pune",
        "description": "Planning an outstation trip from Pune? Rent a 32-seater Tempo Traveller with Samarth Travels for a stress-free journey. Ideal for long-distance travel, our buses ensure a smooth, comfortable ride for groups traveling to nearby or distant destinations."
    }
],
"tableData": [
    ["Rent 32-Seater Tempo Traveller in Pune", "32-Seater Tempo Traveller Hire in Pune"],
    ["Affordable 32-Seater Tempo Traveller Service Pune", "32-Seater AC Tempo Traveller Hire in Pune"],
    ["Luxury 32-Seater Tempo Traveller Rental in Pune", "32-Seater Tempo Traveller for Group Travel in Pune"],
    ["Hire a 32-Seater Tempo Traveller for Family Trips in Pune", "Rent 32-Seater Tempo Traveller for Corporate Events in Pune"],
    ["Comfortable 32-Seater Tempo Traveller for Pune Tours", "32-Seater Tempo Traveller Rental for Outstation Trips from Pune"]
],


"whychoose": [
    {
        "WhyChooseheading": "Spacious 32 Seater Tempo Traveller for Large Group Travel",
        "WhyChoosedescription": "Samarth Travels offers a well-maintained and spacious 32 seater Tempo Traveller, ideal for transporting large groups comfortably. Whether it’s for a wedding, corporate outing, school trip, religious tour, or family vacation, our vehicle is designed to provide a smooth and enjoyable journey with ample space for passengers and luggage."
    },
    {
        "WhyChooseheading": "Perfect Blend of Comfort and Convenience",
        "WhyChoosedescription": "Our 32 seater Tempo Traveller comes equipped with pushback seats, air conditioning, reading lights, ample legroom, and a clean, spacious interior. It’s the perfect option for those who want the convenience of traveling together without compromising on comfort, especially on long-distance or multi-day trips."
    },
    {
        "WhyChooseheading": "Professional and Skilled Drivers",
        "WhyChoosedescription": "Our experienced drivers are trained to handle large vehicles and are well-versed with routes across Pune and beyond. Courteous, punctual, and focused on safety, they ensure a smooth and worry-free experience for your entire group."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 32 Seater Services",
        "WhyChoosedescription": "At Samarth Travels, we provide competitive and transparent pricing for our 32 seater Tempo Traveller services. Our rates are clear with no hidden charges, making it easy for you to plan your group travel budget without surprises."
    },
    {
        "WhyChooseheading": "Available 24/7 for Flexible Travel Plans",
        "WhyChoosedescription": "Whether you're planning a day trip, overnight journey, or multi-day tour, our 32 seater Tempo Traveller is available round the clock to fit your schedule. We offer full flexibility to match your group’s travel needs, including early departures and late-night returns."
    },
    {
        "WhyChooseheading": "Easy Booking and Dedicated Customer Support",
        "WhyChoosedescription": "Booking with Samarth Travels is hassle-free. Our team is available to assist you through online booking, phone, or WhatsApp. You’ll receive timely confirmations, driver details, and travel updates to ensure a well-coordinated and smooth experience from start to finish."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Vehicle",
        "WhyChoosedescription": "We take hygiene and maintenance seriously. The 32 seater Tempo Traveller is cleaned and sanitized before every trip, and regularly serviced to ensure safety, reliability, and passenger satisfaction—ideal for health-conscious travelers."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Your Convenience",
        "WhyChoosedescription": "Choose from a wide range of payment methods including UPI, credit/debit cards, net banking, digital wallets, or cash. We aim to make your experience seamless from booking to payment."
    }
]



















    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a 32-seater Tempo Traveller with Samarth Travels?',
        answer: 'Booking a 32-seater Tempo Traveller with Samarth Travels is easy. You can either book online through our website or contact our customer support team. Just provide your travel details such as the number of passengers, destination, and travel dates, and we’ll take care of the rest.',
    },
    {
        id: 2,
        question: 'What are the features of a 32-seater Tempo Traveller?',
        answer: 'Our 32-seater Tempo Traveller is equipped with comfortable seating, ample luggage space, and air-conditioning. It’s ideal for medium to large groups and provides a comfortable ride for both short and long-distance travel. It’s perfect for family trips, group tours, and corporate outings.',
    },
    {
        id: 3,
        question: 'Is the 32-seater Tempo Traveller suitable for long-distance travel?',
        answer: 'Yes, the 32-seater Tempo Traveller is well-suited for long-distance travel. It offers ample space and comfort, with air-conditioning and a smooth ride to ensure a pleasant journey for all passengers.',
    },
    {
        id: 4,
        question: 'Can I book the 32-seater Tempo Traveller for a one-day trip?',
        answer: 'Yes, the 32-seater Tempo Traveller is available for one-day trips. Whether it’s a day trip within the city or a short excursion to nearby destinations, it’s a great option for group transportation.',
    },
    {
        id: 5,
        question: 'What is included in the 32-seater Tempo Traveller service?',
        answer: 'The service includes the 32-seater Tempo Traveller, driver, and fuel. Any additional charges such as tolls, parking fees, or permits will be communicated in advance for transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations for the 32-seater Tempo Traveller?',
        answer: 'Yes, you can customize the pickup and drop-off locations. Whether you need multiple pickups or specific locations, we’ll plan the best route to suit your itinerary.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for Tempo Traveller bookings?',
        answer: 'Yes, we offer 24/7 customer support for all our Tempo Traveller services. If you have any questions or need assistance with your booking, our team is available anytime to ensure a smooth experience.',
    },
];

const testimonials = [
    {
        name: 'Mr. Anil Patil',
        role: 'Group Tour Organizer',
        text: 'We hired the 32-seater Tempo Traveller for a family trip to Mahabaleshwar. The vehicle was clean, spacious, and comfortable, with enough room for our luggage. The driver was polite, and the trip was smooth. Highly recommend this service!',
        image: '/img/testimonial/testi_2_48.jpg',
    },
    {
        name: 'Ms. Radhika Verma',
        role: 'Corporate Event Planner',
        text: 'Our company rented a 32-seater Tempo Traveller for a corporate outing. The bus was very comfortable, the air-conditioning was perfect, and the driver was punctual and professional. The trip was a huge success, and we’ll definitely use Samarth Travels again.',
        image: '/img/testimonial/testi_2_49.jpg',
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
  "name": "32-Seater Tempo Traveller Service",
  "image": "https://samarthtravels.com/assets/images/32-seater-tempo-traveller-pune.jpg",
  "description": "Rent a 32-Seater Tempo Traveller in Pune for group travel, family trips, corporate events, and outstation tours. Affordable and luxury options available, including AC buses for group sightseeing and comfortable long-distance travel.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5471"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/32-seater-tempo-traveller-service"
  }
};





    return (
        <div>

<Helmet>
  <title>32-Seater Tempo Traveller Service in Pune | Affordable & Luxury Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 32-Seater Tempo Traveller in Pune for family trips, group travel, corporate events, and outstation tours. Affordable and luxury AC Tempo Travellers available for group sightseeing, corporate events, and family tours." 
  />
  <meta 
    name="keywords" 
    content="Rent 32-Seater Tempo Traveller in Pune, 32-Seater Tempo Traveller Hire in Pune, Affordable 32-Seater Tempo Traveller Service Pune, 32-Seater AC Tempo Traveller Hire in Pune, Luxury 32-Seater Tempo Traveller Rental in Pune, 32-Seater Tempo Traveller for Group Travel in Pune, Hire a 32-Seater Tempo Traveller for Family Trips in Pune, Rent 32-Seater Tempo Traveller for Corporate Events in Pune, Comfortable 32-Seater Tempo Traveller for Pune Tours, 32-Seater Tempo Traveller Rental for Outstation Trips from Pune" 
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
                            <img src='/images/keyword/31.jpg' alt='img' />
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

export default Seatertempotraveller;