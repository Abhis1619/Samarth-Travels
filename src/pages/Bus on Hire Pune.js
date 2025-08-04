
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busonhirepune() {



    const cardData =
    {
        keyword: ' Bus on Hire Pune',
        heading: 'Samarth Travels: Bus on Hire Pune',
        headingDescription: 'Samarth Travels provides bus on hire in Pune for all your travel needs, including group tours, weddings, corporate events, and school trips. Choose from a wide range of AC and non-AC buses, from 17 to 50 seaters, all maintained for comfort and safety. With professional drivers, transparent pricing, and on-time service, Samarth Travels ensures a smooth and worry-free travel experience.',

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
        "name": "Bus Hire Services in Pune",
        "description": "Samarth Travels offers reliable bus hire services in Pune, perfect for all types of group travel. Whether you're planning a corporate outing, a family trip, or a school excursion, our fleet of buses ensures safe, comfortable, and timely transport for your group."
    },
    {
        "name": "Rent a Bus for Group Travel in Pune",
        "description": "Need to travel with a group? Samarth Travels provides bus rental services in Pune that are ideal for group travel. Our buses are spacious, air-conditioned, and designed to accommodate large groups comfortably, ensuring a smooth journey."
    },
    {
        "name": "Affordable Bus Hire in Pune",
        "description": "Looking for budget-friendly bus hire options in Pune? Samarth Travels offers affordable rental services without compromising on comfort or safety. Perfect for family trips, group outings, or corporate events, we provide the best value for your money."
    },
    {
        "name": "Luxury Bus Hire Pune for Events",
        "description": "For high-end events, Samarth Travels offers luxury bus hire services in Pune. Our luxury buses are equipped with plush seating, air-conditioning, entertainment systems, and more, ensuring a premium travel experience for your corporate events, weddings, or special occasions."
    },
    {
        "name": "Rent Bus for Family Tours in Pune",
        "description": "Take your family on a memorable tour with Samarth Travels. Our family-friendly buses offer plenty of space for everyone and are equipped with all the necessary amenities for a comfortable and enjoyable trip to local and outstation destinations."
    },
    {
        "name": "32-Seater Bus Hire in Pune",
        "description": "Samarth Travels offers 32-seater bus hire services in Pune, ideal for medium-sized groups. With comfortable seating, air-conditioning, and ample space, our 32-seater buses ensure that your group travels together in style and comfort."
    },
    {
        "name": "Pune Bus Hire for Corporate Events",
        "description": "For corporate events in Pune, Samarth Travels provides hassle-free bus hire services. Whether it’s a business meeting, conference, or team outing, our buses are the perfect way to transport employees or clients to and from the event venue with convenience and professionalism."
    },
    {
        "name": "Rent Bus for School Field Trips in Pune",
        "description": "Samarth Travels offers safe and reliable bus rentals for school field trips in Pune. Our buses are designed to accommodate students, teachers, and accompanying staff, ensuring that everyone travels safely and comfortably to the trip location."
    },
    {
        "name": "Bus Hire for Outstation Trips in Pune",
        "description": "Planning an outstation trip from Pune? Rent a bus with Samarth Travels for a seamless and comfortable journey. Our buses are perfect for trips to nearby destinations, offering ample space and a smooth ride for long-distance travel."
    },
    {
        "name": "Hire a Bus for Wedding Functions in Pune",
        "description": "Make your wedding day transportation easy and elegant with Samarth Travels. Our wedding bus rental services in Pune ensure your guests are transported in comfort and style, whether it’s to the wedding venue, reception, or other events."
    }
],
"tableData": [
    ["Bus Hire Services in Pune", "Rent a Bus for Group Travel in Pune"],
    ["Affordable Bus Hire in Pune", "Luxury Bus Hire Pune for Events"],
    ["Rent Bus for Family Tours in Pune", "32-Seater Bus Hire in Pune"],
    ["Pune Bus Hire for Corporate Events", "Rent Bus for School Field Trips in Pune"],
    ["Bus Hire for Outstation Trips in Pune", "Hire a Bus for Wedding Functions in Pune"]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus on Hire Service in Pune",
        "WhyChoosedescription": "Samarth Travels offers trusted and timely bus hire services in Pune for all kinds of group travel. Whether it’s a family function, school picnic, corporate trip, or local sightseeing, our buses ensure that your group travels safely and comfortably to your destination."
    },
    {
        "WhyChooseheading": "Wide Range of Buses for Every Travel Requirement",
        "WhyChoosedescription": "We provide a diverse fleet of buses including minibuses, standard coaches, and luxury AC buses. Whether you have a small group or a large gathering, we have the right vehicle with the perfect seating capacity, comfort, and amenities to suit your needs."
    },
    {
        "WhyChooseheading": "Experienced and Courteous Drivers",
        "WhyChoosedescription": "Our drivers are professionally trained and have extensive knowledge of Pune city routes and nearby destinations. They ensure a smooth, safe, and punctual journey for your group. Polite and customer-friendly, they help make your experience more enjoyable."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Bus Hire Rates in Pune",
        "WhyChoosedescription": "We believe in honest pricing. Samarth Travels offers competitive and transparent rental rates for buses in Pune. No hidden costs, no last-minute surprises—just straightforward packages tailored to your budget and trip requirements."
    },
    {
        "WhyChooseheading": "Available 24/7 to Meet Your Travel Schedule",
        "WhyChoosedescription": "We understand that travel plans can vary. That’s why our buses are available round the clock—early morning, late night, or full-day trips. Samarth Travels ensures you have access to transport whenever your group needs it."
    },
    {
        "WhyChooseheading": "Quick Booking and Real-Time Support",
        "WhyChoosedescription": "Booking a bus with Samarth Travels is simple and fast—just a few clicks on our website or a call away. We provide real-time support, live tracking, and driver contact details to ensure you’re always in control of your group travel."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "Your comfort and safety matter to us. All buses are sanitized before every trip and regularly maintained to ensure they’re in top condition. With clean interiors and functional air conditioning, you can count on a pleasant ride."
    },
    {
        "WhyChooseheading": "Multiple Payment Modes for Easy Transactions",
        "WhyChoosedescription": "To make your experience smooth, we accept various payment options including UPI, credit/debit cards, digital wallets, and cash. You can choose whatever’s most convenient for you and complete your booking without any hassle."
    }
]



















    }

const faqData = [
    {
        id: 1,
        question: 'How do I hire a bus in Pune with Samarth Travels?',
        answer: 'Hiring a bus with Samarth Travels is quick and simple. You can either book online through our website or contact our customer support team. Provide your travel details such as the number of passengers, travel dates, and preferred bus type, and we’ll recommend the best options for you.',
    },
    {
        id: 2,
        question: 'What types of buses are available for hire in Pune?',
        answer: 'We offer a range of buses for hire in Pune, including 22-seater, 32-seater, 40-seater, and 50-seater buses. You can choose from AC or Non-AC buses depending on your comfort level and the type of trip you’re planning.',
    },
    {
        id: 3,
        question: 'Are the buses suitable for long-distance travel?',
        answer: 'Yes, our buses are well-maintained and perfect for both short and long-distance travel. They come with comfortable seating, air-conditioning (for AC buses), and ample luggage space, ensuring a comfortable journey for all passengers.',
    },
    {
        id: 4,
        question: 'Can I hire a bus for a one-day trip in Pune?',
        answer: 'Yes, we offer one-day bus rental services for various purposes, including city tours, corporate events, school outings, and more. You can choose the bus size and facilities based on your needs for the day.',
    },
    {
        id: 5,
        question: 'What is included in the bus hire cost?',
        answer: 'The bus hire cost includes the vehicle, driver, fuel, and basic amenities. Any additional costs such as tolls, parking fees, or permits will be clearly communicated upfront for transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations?',
        answer: 'Yes, we provide flexible options for pickup and drop-off locations. Whether you need pickups from multiple locations or specific destinations, we can arrange the best routes to suit your needs.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for bus hire?',
        answer: 'Yes, we offer 24/7 customer support for bus hire services in Pune. If you have any queries or need assistance with bookings, our team is always available to help ensure a smooth experience.',
    },
];

const testimonials = [
    {
        name: 'Mr. Vishal Khurana',
        role: 'Corporate Event Manager',
        text: 'We hired a 40-seater AC bus for a corporate event in Pune. The booking process was easy, the bus was comfortable, and the driver was professional. The entire team had a great experience, and I will definitely use Samarth Travels again for future events.',
        image: '/img/testimonial/testi_2_46.jpg',
    },
    {
        name: 'Mrs. Sunita Joshi',
        role: 'School Trip Coordinator',
        text: 'Samarth Travels provided us with a 32-seater Non-AC bus for a school trip. The bus was clean, safe, and comfortable for the students. The service was excellent, and I’ll surely book with them again for upcoming trips.',
        image: '/img/testimonial/testi_2_47.jpg',
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
  "name": "Bus on Hire Pune",
  "image": "https://samarthtravels.com/assets/images/bus-hire-pune.jpg",
  "description": "Affordable and luxury bus hire services in Pune for group travel, family tours, corporate events, school field trips, outstation trips, and wedding functions. Options include 32-seater and other buses for a comfortable journey.",
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
    "url": "https://samarthtravels.com/bus-on-hire-pune"
  }
};


    return (
        <div>


<Helmet>
  <title>Bus on Hire in Pune | Affordable & Luxury Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for group travel, family tours, corporate events, and weddings in Pune. Affordable and luxury buses available, including 32-seater options for outstation trips, school field trips, and more." 
  />
  <meta 
    name="keywords" 
    content="Bus Hire Services in Pune, Rent a Bus for Group Travel in Pune, Affordable Bus Hire in Pune, Luxury Bus Hire Pune for Events, Rent Bus for Family Tours in Pune, 32-Seater Bus Hire in Pune, Pune Bus Hire for Corporate Events, Rent Bus for School Field Trips in Pune, Bus Hire for Outstation Trips in Pune, Hire a Bus for Wedding Functions in Pune" 
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
                            <img src='/images/keyword/27.jpg' alt='img' />
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

export default Busonhirepune;