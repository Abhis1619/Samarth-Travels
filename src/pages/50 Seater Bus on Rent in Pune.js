
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Fiftyseaterbusrentinpune() {



    const cardData =
    {
        keyword: '  50 Seater Bus on Rent in Pune',
        heading: 'Samarth Travels: 50 Seater Bus on Rent in Pune',
        headingDescription: 'Samarth Travels offers 50 seater bus on rent in Pune, ideal for large group travel, weddings, corporate outings, and school tours. Our well-maintained buses come with spacious seating, optional AC, and experienced drivers to ensure a safe and comfortable journey. With transparent pricing, no hidden charges, and timely service, Samarth Travels guarantees a hassle-free travel experience every time.',

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
        "name": "Rent 50-Seater Bus in Pune",
        "description": "Looking to transport a large group? Samarth Travels offers 50-seater bus rentals in Pune, perfect for school outings, family trips, weddings, and corporate tours. Our well-maintained buses ensure a safe, spacious, and comfortable journey for everyone."
    },
    {
        "name": "Affordable 50-Seater Bus Hire in Pune",
        "description": "Travel smart with Samarth Travels' affordable 50-seater bus hire services in Pune. Ideal for group travel on a budget, these buses offer a cost-effective way to ensure your group reaches its destination comfortably and on time."
    },
    {
        "name": "50-Seater AC Bus Rental Pune",
        "description": "Enjoy air-conditioned comfort on long journeys with our 50-seater AC bus rental service in Pune. Whether it’s an outstation tour or a city-based event, our buses provide a cool, relaxed ride even during the hottest days."
    },
    {
        "name": "Luxury 50-Seater Bus Hire in Pune",
        "description": "Experience top-tier travel with Samarth Travels' luxury 50-seater bus rentals in Pune. Equipped with plush seats, air-conditioning, and premium interiors, our buses are perfect for executive travel, VIP guests, and upscale events."
    },
    {
        "name": "Rent 50-Seater Bus for Corporate Events Pune",
        "description": "Ensure timely and comfortable transport for your employees or clients with our 50-seater bus rental for corporate events in Pune. Ideal for conferences, team-building activities, and business functions, these buses offer reliability and convenience."
    },
    {
        "name": "50-Seater Bus on Rent for Family Tours in Pune",
        "description": "Planning a family tour? Rent a 50-seater bus from Samarth Travels for comfortable and safe travel. With ample room for luggage and passengers, it’s the perfect choice for extended families or large groups heading on holiday together."
    },
    {
        "name": "Rent 50-Seater Bus for School Excursions in Pune",
        "description": "Samarth Travels offers safe and reliable 50-seater bus rentals for school excursions in Pune. Our buses are regularly maintained and come with experienced drivers to ensure a smooth and secure journey for students and staff."
    },
    {
        "name": "50-Seater Bus Hire for Wedding Functions in Pune",
        "description": "Make wedding guest transportation effortless with a 50-seater bus hire from Samarth Travels. Perfect for large weddings, our buses provide a smooth, air-conditioned ride for your guests between venues across Pune and surrounding areas."
    },
    {
        "name": "Bus Rental 50-Seater for Group Travel Pune",
        "description": "For any kind of group travel, our 50-seater bus rental in Pune is a reliable and practical choice. Be it social outings, event shuttles, or spiritual tours, our service ensures the group stays together and travels in comfort."
    },
    {
        "name": "50-Seater Bus for Outstation Tours from Pune",
        "description": "Planning a long-distance group trip? Book a 50-seater outstation bus from Samarth Travels. Our buses are designed for long hauls with spacious seating, luggage capacity, and an experienced driver to make your journey worry-free."
    }
],
"tableData": [
    ["Rent 50-Seater Bus in Pune", "Affordable 50-Seater Bus Hire in Pune"],
    ["50-Seater AC Bus Rental Pune", "Luxury 50-Seater Bus Hire in Pune"],
    ["Rent 50-Seater Bus for Corporate Events Pune", "50-Seater Bus on Rent for Family Tours in Pune"],
    ["Rent 50-Seater Bus for School Excursions in Pune", "50-Seater Bus Hire for Wedding Functions in Pune"],
    ["Bus Rental 50-Seater for Group Travel Pune", "50-Seater Bus for Outstation Tours from Pune"]
],


    


"whychoose": [
    {
        "WhyChooseheading": "Spacious 50 Seater Bus on Rent in Pune for Large Group Travel",
        "WhyChoosedescription": "Samarth Travels provides dependable 50 seater buses on rent in Pune, perfect for transporting large groups for weddings, school or college excursions, corporate events, religious tours, or outstation travel. With ample space and a smooth ride, our buses ensure everyone reaches the destination comfortably and on time."
    },
    {
        "WhyChooseheading": "Designed for Comfort and Convenience",
        "WhyChoosedescription": "Our 50 seater buses are equipped with cushioned pushback seats, overhead luggage racks, reading lights, and wide aisles. Whether it's a short journey within Pune or a multi-day tour across Maharashtra, your group will enjoy a spacious, comfortable, and relaxed travel experience throughout."
    },
    {
        "WhyChooseheading": "Experienced Drivers Who Prioritize Safety and Punctuality",
        "WhyChoosedescription": "All our 50 seater buses are driven by licensed, well-trained drivers with years of experience in handling large vehicles. They are familiar with city and outstation routes and ensure that your group reaches the destination safely, efficiently, and without unnecessary delays."
    },
    {
        "WhyChooseheading": "Budget-Friendly and Transparent Rental Packages",
        "WhyChoosedescription": "Samarth Travels offers competitive and transparent pricing for 50 seater bus rentals in Pune. Our all-inclusive packages come with no hidden charges. You’ll know exactly what you’re paying for—making it easier to plan group travel expenses with confidence."
    },
    {
        "WhyChooseheading": "Round-the-Clock Availability for All Your Travel Plans",
        "WhyChoosedescription": "Whether your journey starts at dawn or ends late at night, our 50 seater buses are available 24/7. We understand that group travel doesn't always follow a standard schedule, so we adapt to your timing, ensuring complete flexibility and convenience."
    },
    {
        "WhyChooseheading": "Seamless Booking and Real-Time Coordination",
        "WhyChoosedescription": "Booking your 50 seater bus is quick and easy through our online platform or by calling our support team. Once booked, you'll receive trip details, driver contact info, and live tracking to stay updated. We ensure smooth coordination so you can focus on your event or trip."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Reliable Vehicles",
        "WhyChoosedescription": "All our buses undergo thorough cleaning and sanitization before every trip. We also follow strict maintenance routines to ensure that every 50 seater bus in our fleet is safe, hygienic, and in perfect running condition—giving you peace of mind during group travel."
    },
    {
        "WhyChooseheading": "Flexible Payment Options for Your Convenience",
        "WhyChoosedescription": "To make your rental process smooth, Samarth Travels accepts various payment methods—cash, UPI, credit/debit cards, and digital wallets. Whether you're booking on behalf of a company, school, or private group, our payment options ensure ease and flexibility."
    }
]





















    }

const faqData = [
    {
        id: 1,
        question: 'How do I rent a 40-seater bus in Pune with Samarth Travels?',
        answer: 'Renting a 40-seater bus with Samarth Travels is quick and easy. You can book directly through our website or call our customer support team. Simply provide the details of your trip, such as the number of passengers, travel dates, and destination, and we will arrange the perfect bus for you.',
    },
    {
        id: 2,
        question: 'What are the features of the 40-seater bus available for rent?',
        answer: 'Our 40-seater buses are spacious and comfortable, featuring reclining seats, air-conditioning, large windows, and ample luggage space. It is an ideal choice for group travel, including corporate events, school trips, and family outings.',
    },
    {
        id: 3,
        question: 'Is the 40-seater bus suitable for long-distance travel?',
        answer: 'Yes, the 40-seater bus is perfect for both short and long-distance travel. With comfortable seating, air-conditioning, and modern amenities, it ensures a pleasant and relaxing journey for all passengers.',
    },
    {
        id: 4,
        question: 'Can I rent a 40-seater bus for a one-day trip in Pune?',
        answer: 'Yes, we offer one-day bus rentals for trips within Pune and surrounding areas. Whether it’s a local tour, a corporate outing, or a family gathering, the 40-seater bus provides ample space and comfort for your group.',
    },
    {
        id: 5,
        question: 'What is included in the 40-seater bus rental service?',
        answer: 'The rental service includes the 40-seater bus, a professional driver, and fuel. Additional costs like tolls, parking fees, or permits will be discussed upfront to ensure complete transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations for the 40-seater bus?',
        answer: 'Yes, we can customize the pickup and drop-off locations to suit your needs. Whether you need multiple stops or a specific route, we will tailor the journey to meet your requirements.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for 40-seater bus rentals in Pune?',
        answer: 'Yes, we provide 24/7 customer support for all our bus rental services. If you have any questions or need any assistance during the booking process, our team is always ready to help ensure your trip goes smoothly.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sanjay Mehta',
        role: 'Corporate Event Organizer',
        text: 'We rented a 40-seater AC bus for our team outing in Pune. The bus was very comfortable, the driver was courteous, and the overall service was fantastic. It was a seamless experience, and we will definitely book again with Samarth Travels for future events.',
        image: '/img/testimonial/testi_2_50.jpg',
    },
    {
        name: 'Mrs. Shruti Agarwal',
        role: 'Family Trip Planner',
        text: 'For our family’s reunion, we rented a 40-seater bus for a trip to Lonavala. The bus was spacious and clean, and the air-conditioning made the long journey comfortable. Everyone had a great time, and we’re already planning our next trip with Samarth Travels.',
        image: '/img/testimonial/testi_2_51.jpg',
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
  "name": "50-Seater Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/50-seater-bus-hire-pune.jpg",
  "description": "Rent a 50-Seater Bus in Pune for corporate events, family tours, school excursions, and outstation trips. Affordable and luxury AC bus options available for group travel, wedding functions, and family outings.",
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
    "price": "8000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/50-seater-bus-on-rent-pune"
  }
};





    return (
        <div>

<Helmet>
  <title>50-Seater Bus on Rent in Pune | Affordable & Luxury Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 50-Seater Bus in Pune for corporate events, family tours, school excursions, and outstation trips. Affordable and luxury AC bus options available for group travel, wedding functions, and family outings." 
  />
  <meta 
    name="keywords" 
    content="Rent 50-Seater Bus in Pune, Affordable 50-Seater Bus Hire in Pune, 50-Seater AC Bus Rental Pune, Luxury 50-Seater Bus Hire in Pune, Rent 50-Seater Bus for Corporate Events Pune, 50-Seater Bus on Rent for Family Tours in Pune, Rent 50-Seater Bus for School Excursions in Pune, 50-Seater Bus Hire for Wedding Functions in Pune, Bus Rental 50-Seater for Group Travel Pune, 50-Seater Bus for Outstation Tours from Pune" 
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
                            <img src='/images/keyword/33.jpg' alt='img' />
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

export default Fiftyseaterbusrentinpune;