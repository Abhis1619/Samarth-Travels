
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Bushireforpicnic() {



    const cardData =
    {
        keyword: '  Bus Hire for Picnic',
        heading: 'Samarth Travels: Bus Hire for Picnic',
        headingDescription: 'Samarth Travels offers affordable and comfortable bus hire for picnic trips, perfect for schools, colleges, offices, and family groups. Choose from a variety of AC and non-AC buses ranging from 17 to 50 seaters, all equipped for safe and enjoyable travel. With experienced drivers, timely service, and transparent pricing, Samarth Travels ensures a stress-free and memorable picnic experience.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

       "topPlaces": [
    {
      "title": "Shaniwar Wada",
      "description": "Shaniwar Wada is a majestic 18th-century fortification located in the heart of Pune. Once the seat of the powerful Peshwas of the Maratha Empire, it is renowned for its historical significance, massive gateways, and intriguing legends, including ghost stories tied to its mysterious past. Despite being partially destroyed by fire, the remaining structures, especially the Delhi Gate and the fort’s expansive garden layout, provide a fascinating glimpse into Maratha architecture and political history."
    },
    {
      "title": "Aga Khan Palace",
      "description": "Built in 1892 by Sultan Aga Khan III, this sprawling palace is an architectural gem and a key monument in India’s freedom struggle. It served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other leaders during the Quit India Movement. The palace features Italian arches, sprawling gardens, and houses a museum that contains personal belongings of Gandhi and historical photographs. It is also the final resting place of Kasturba Gandhi and Mahadev Desai, adding to its solemn importance."
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
        "name": "Rent Bus for Picnic Trips in Pune",
        "description": "Planning a fun picnic trip from Pune? Rent a bus from Samarth Travels and enjoy a comfortable ride with your friends or family. Our buses are perfect for group picnics, offering ample space and air-conditioning to ensure a relaxing and enjoyable journey."
    },
    {
        "name": "Affordable Bus Hire for Picnic Tours in Pune",
        "description": "Samarth Travels provides affordable bus hire services for picnic tours in Pune. Whether you're heading to a nearby destination or a day trip, our budget-friendly options make sure you travel in comfort without exceeding your budget."
    },
    {
        "name": "Bus Rental for Family Picnic in Pune",
        "description": "For a memorable family picnic, rent a bus from Samarth Travels. Our buses are spacious and comfortable, designed to accommodate families and their picnic essentials, ensuring a smooth and enjoyable ride to your destination."
    },
    {
        "name": "25-Seater Bus Hire for Picnic Trips in Pune",
        "description": "If you're planning a picnic with a small group, our 25-seater buses are perfect for your trip from Pune. With air-conditioning and ample space, you’ll travel comfortably while enjoying the scenic views to your picnic location."
    },
    {
        "name": "Luxury Bus Hire for Picnic Tours in Pune",
        "description": "Indulge in luxury with Samarth Travels’ premium bus hire services for your picnic tours. Our luxury buses come equipped with plush seating, air-conditioning, and modern amenities, providing a comfortable and stylish travel experience for your group."
    },
    {
        "name": "Hire a Bus for School Picnic in Pune",
        "description": "Samarth Travels offers safe and reliable bus hire services for school picnics in Pune. Our buses are perfect for transporting students to and from picnic spots, with a focus on safety, comfort, and convenience."
    },
    {
        "name": "Picnic Bus Rental Services in Pune",
        "description": "Make your picnic experience hassle-free with Samarth Travels’ picnic bus rental services. We offer a variety of buses tailored to fit your group size and ensure that everyone enjoys a comfortable, cool, and stress-free journey."
    },
    {
        "name": "Rent a Bus for Corporate Picnic in Pune",
        "description": "Looking to organize a corporate picnic? Rent a bus from Samarth Travels for a comfortable and enjoyable ride to your picnic spot. Our buses are perfect for team outings, offering ample space for relaxation and group bonding on the way."
    },
    {
        "name": "Comfortable Bus Hire for Group Picnics in Pune",
        "description": "Samarth Travels offers comfortable bus hire options for group picnics in Pune. Whether you're organizing a family gathering or a group outing with friends, our buses provide ample seating, air-conditioning, and the space needed for a relaxing picnic trip."
    },
    {
        "name": "Rent a 32-Seater Bus for Picnic in Pune",
        "description": "If you have a larger group for your picnic, rent a 32-seater bus from Samarth Travels. Our buses are designed for group travel, offering plenty of space, comfortable seating, and air-conditioning for a smooth and enjoyable trip to your picnic destination."
    }
],
"tableData": [
    ["Rent Bus for Picnic Trips in Pune", "Affordable Bus Hire for Picnic Tours in Pune"],
    ["Bus Rental for Family Picnic in Pune", "25-Seater Bus Hire for Picnic Trips in Pune"],
    ["Luxury Bus Hire for Picnic Tours in Pune", "Hire a Bus for School Picnic in Pune"],
    ["Picnic Bus Rental Services in Pune", "Rent a Bus for Corporate Picnic in Pune"],
    ["Comfortable Bus Hire for Group Picnics in Pune", "Rent a 32-Seater Bus for Picnic in Pune"]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Hire for Your Picnic Trip",
        "WhyChoosedescription": "Samarth Travels provides reliable bus hire services for your picnic trips, ensuring a hassle-free and enjoyable travel experience. Whether you're planning a day trip to a nearby location or a weekend getaway, our buses are the perfect solution for group travel, offering comfortable and timely transportation to and from your picnic destination."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses for Group Picnic Travel",
        "WhyChoosedescription": "Our fleet includes a variety of buses to suit your picnic needs, from minibuses for smaller groups to larger buses for bigger gatherings. All of our buses are equipped with comfortable seating, air-conditioning, and ample space for both passengers and picnic essentials, ensuring that everyone can travel in comfort and style."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Enjoyable Picnic Journeys",
        "WhyChoosedescription": "Our professional drivers are highly experienced and well-trained, ensuring that your picnic trip is not only safe but also enjoyable. They are familiar with the best routes, and they prioritize safety, courtesy, and punctuality, so you can focus on having fun while we handle the driving."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Picnic Bus Rentals",
        "WhyChoosedescription": "We offer affordable and transparent pricing for bus hire services for your picnic. With no hidden charges or surprise fees, you can plan your trip with ease. Our pricing structure is designed to offer the best value for your group, allowing you to enjoy a great day out without breaking the bank."
    },
    {
        "WhyChooseheading": "Flexible 24/7 Availability for Your Picnic Plans",
        "WhyChoosedescription": "Samarth Travels offers flexible 24/7 availability to suit any picnic schedule. Whether you're planning an early morning departure or a late-night return, we are ready to accommodate your group. Our round-the-clock service ensures that we can transport your group on your preferred timeline, ensuring maximum convenience."
    },
    {
        "WhyChooseheading": "Easy Online Booking and Real-Time Updates",
        "WhyChoosedescription": "Booking your picnic bus is easy and convenient with Samarth Travels. You can quickly make a reservation online or contact our customer service team. Once your booking is confirmed, you’ll receive real-time updates, including live tracking, driver details, and estimated arrival times, ensuring a smooth and organized journey for your picnic group."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses for Your Picnic",
        "WhyChoosedescription": "We maintain the highest standards of hygiene for all our buses. Each bus is thoroughly cleaned and sanitized before every trip, including for picnic rentals, ensuring a safe and hygienic environment for all passengers. Additionally, our buses are regularly maintained and inspected to guarantee comfort, reliability, and safety."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy Transactions",
        "WhyChoosedescription": "Samarth Travels offers a variety of secure payment methods, including cash, UPI, credit/debit cards, and digital wallets, so you can choose the payment option that works best for your group. This flexibility ensures that the payment process is as easy and convenient as possible for everyone involved."
    }
]

















    }

const faqData = [
    {
        id: 1,
        question: 'How do I hire a bus for a picnic with Samarth Travels?',
        answer: 'Hiring a bus for your picnic with Samarth Travels is simple. You can either book through our website or call our customer support team. Provide details such as the number of passengers, destination, and preferred bus type, and we’ll handle the rest for your perfect picnic.',
    },
    {
        id: 2,
        question: 'What types of buses are available for picnic hire?',
        answer: 'We offer a variety of buses including 22-seater, 32-seater, 40-seater, and 50-seater buses for picnics. You can choose between AC and Non-AC buses depending on your group’s preferences and comfort needs.',
    },
    {
        id: 3,
        question: 'Are the buses comfortable for picnic trips?',
        answer: 'Yes, our buses are designed for comfort, with spacious seating, ample legroom, and clean interiors. For longer trips, AC buses offer a more relaxing environment, while Non-AC buses are a more budget-friendly option.',
    },
    {
        id: 4,
        question: 'Can I hire a bus for a one-day picnic trip?',
        answer: 'Absolutely! We offer flexible one-day rental options for picnic trips. Whether you’re heading to a local park, beach, or a weekend getaway, we provide the perfect transportation to make your outing enjoyable.',
    },
    {
        id: 5,
        question: 'What is included in the bus hire for picnic?',
        answer: 'The rental cost for a picnic bus includes the vehicle, driver, fuel, and basic amenities. Additional charges like tolls, parking fees, or permits will be informed beforehand to ensure transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations for the picnic trip?',
        answer: 'Yes, we offer customized pickup and drop-off locations. Whether you need to be picked up from multiple locations or have specific stop requests, we can plan a route that works best for your picnic.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for picnic bus hire?',
        answer: 'Yes, we provide 24/7 support for all our bus hire services. If you have any queries or need changes to your booking, our team is ready to assist you at any time, ensuring your picnic trip goes smoothly.',
    },
];

const testimonials = [
    {
        name: 'Mr. Ramesh Bhat',
        role: 'Family Picnic Organizer',
        text: 'We hired a 32-seater AC bus for a family picnic to Lonavala. The bus was very comfortable, and the driver was polite and punctual. The journey was smooth, and everyone enjoyed the day. I’ll definitely choose Samarth Travels for our future picnics.',
        image: '/img/testimonial/testi_2_42.jpg',
    },
    {
        name: 'Mrs. Preeti Joshi',
        role: 'Event Planner',
        text: 'Samarth Travels provided an excellent 40-seater Non-AC bus for our office picnic to Alibaug. The bus was spacious, and the service was great. The entire experience was seamless from booking to drop-off. Highly recommended!',
        image: '/img/testimonial/testi_2_43.jpg',
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
  "name": "Bus Hire for Picnic",
  "image": "https://samarthtravels.com/assets/images/picnic-bus-hire.jpg",
  "description": "Rent a bus for your picnic trips in Pune. Affordable and luxury options available, including 25-seater and 32-seater buses. Ideal for family picnics, school outings, corporate picnics, and group tours.",
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
    "price": "4000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-hire-for-picnic"
  }
};






    return (
        <div>

<Helmet>
  <title>Bus Hire for Picnic in Pune | Affordable & Comfortable | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for your picnic trips in Pune. Affordable 25-seater and 32-seater options available for family picnics, school outings, corporate picnics, and group tours. Comfort and luxury buses for your picnic needs." 
  />
  <meta 
    name="keywords" 
    content="Rent Bus for Picnic Trips in Pune, Affordable Bus Hire for Picnic Tours in Pune, Bus Rental for Family Picnic in Pune, 25-Seater Bus Hire for Picnic Trips in Pune, Luxury Bus Hire for Picnic Tours in Pune, Hire a Bus for School Picnic in Pune, Picnic Bus Rental Services in Pune, Rent a Bus for Corporate Picnic in Pune, Comfortable Bus Hire for Group Picnics in Pune, Rent a 32-Seater Bus for Picnic in Pune" 
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
                            <img src='/images/keyword/25.jpg' alt='img' />
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

export default Bushireforpicnic;