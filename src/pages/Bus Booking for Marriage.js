
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busbookingformarriage() {



    const cardData =
    {
        keyword: '   Bus Booking for Marriage',
        heading: 'Samarth Travels:   Bus Booking for Marriage',
        headingDescription: 'Samarth Travels offers bus booking for marriage functions, ideal for transporting guests, family members, and bridal parties with ease and comfort. Our fleet of 32-seater and 45-seater buses features air-conditioning, push-back seats, and spacious interiors to provide a pleasant travel experience during wedding celebrations. With professional drivers, timely service, and transparent pricing, Samarth Travels ensures smooth and reliable transportation for your special day.',

        top: 'Top Places to Visit in Pune Outstation with Samarth Travels',

      "topPlaces": [
    {
      "title": "Mahabaleshwar",
      "description": "Nestled in the Western Ghats, Mahabaleshwar is a scenic hill station around 120 km from Pune. Known for its lush strawberry farms, panoramic viewpoints like Arthur’s Seat and Wilson Point, and the historic Mahabaleshwar Temple, it offers a cool and refreshing retreat. Boating on Venna Lake and walking through misty trails make it a perfect weekend getaway."
    },
    {
      "title": "Lonavala & Khandala",
      "description": "Just about 65 km from Pune, the twin hill stations of Lonavala and Khandala are famous for their lush valleys, waterfalls, and forts like Rajmachi and Lohagad. The monsoon season enhances their charm, drawing travelers for trekking, picnics, and chikki shopping. Bhushi Dam and Tiger’s Leap are must-visit attractions in this green paradise."
    },
    {
      "title": "Shirdi",
      "description": "Located approximately 200 km from Pune, Shirdi is a revered pilgrimage town dedicated to Sai Baba. The Sai Baba Temple complex attracts millions of devotees each year. Besides the temple, other spots like Dwarkamai, Chavadi, and the Sai Heritage Village offer spiritual solace and insights into the saint’s life and teachings."
    },
    {
      "title": "Lavasa",
      "description": "Lavasa is a planned hill city about 60 km from Pune, offering Italian-style architecture and lakeside promenades. Popular for romantic getaways and weekend breaks, Lavasa features adventure sports, nature trails, and serene boat rides on the Warasgaon Lake. Its colorful buildings and vibrant cafes make it a photogenic escape."
    },
    {
      "title": "Alibaug",
      "description": "Alibaug is a coastal town around 140 km from Pune, known for its clean beaches and colonial forts. With attractions like Alibaug Beach, Kolaba Fort, and Mandwa Beach, it's a great destination for beach lovers. It’s ideal for water sports, seafood cuisine, and short family trips by road or ferry from Mumbai."
    },
    {
      "title": "Nashik",
      "description": "About 210 km from Pune, Nashik is a blend of spirituality and wine tourism. It’s home to the sacred Godavari River, Trimbakeshwar Temple, and Muktidham, making it a major religious center. Simultaneously, vineyards like Sula and York offer wine tasting and stunning vineyard views, making it a unique dual-experience destination."
    },
    {
      "title": "Kolhapur",
      "description": "Located 230 km from Pune, Kolhapur is rich in heritage, known for the Mahalaxmi Temple, New Palace Museum, and rankala Lake. It’s also famed for its spicy cuisine and handcrafted Kolhapuri chappals. A perfect cultural and culinary escape, Kolhapur provides a deep dive into Maharashtrian traditions."
    },
    {
      "title": "Bhimashankar",
      "description": "Approximately 110 km from Pune, Bhimashankar is a sacred Jyotirlinga shrine nestled in dense forests of the Sahyadri hills. Ideal for spiritual seekers and nature lovers, the region also forms part of a wildlife sanctuary. Trekking trails, misty landscapes, and temple architecture make it a soul-soothing destination."
    },
    {
      "title": "Matheran",
      "description": "Located about 120 km from Pune, Matheran is Asia’s only automobile-free hill station. Famous for its red-soiled paths, vintage toy train, and viewpoints like Panorama Point and Echo Point, it’s a tranquil retreat amidst nature. Horse rides and eco-friendly travel make it a unique experience."
    },
    {
      "title": "Goa",
      "description": "Though around 450 km away, Goa is a top outstation pick from Pune for those seeking beaches, nightlife, and Portuguese charm. From serene South Goa beaches like Palolem to lively North Goa spots like Baga and Anjuna, it’s perfect for parties, watersports, and cultural explorations. The drive or train journey adds to the adventure."
    }
  ],

    "services": [
    {
      "name": "Full Bus Booking for Marriage Price",
      "description": "Samarth Travels offers competitive pricing for full bus bookings for marriage events. Choose from a variety of bus sizes to suit your guest list, with transparent pricing and excellent service for a smooth wedding transport experience."
    },
    {
      "name": "Tourist Bus Booking for Marriage",
      "description": "Make your wedding event even more special with our tourist bus booking services. Samarth Travels offers comfortable, air-conditioned buses for your guests, ensuring a pleasant and stress-free experience on your big day."
    },
    {
      "name": "Reserve Bus for Marriage in Pune",
      "description": "Planning a wedding in Pune? Reserve a bus with Samarth Travels to transport your guests in style. We offer a range of buses to suit different group sizes and ensure your wedding transportation is hassle-free."
    },
    {
      "name": "Bus Booking for Marriage Party",
      "description": "Ensure your wedding party travels comfortably with our bus booking service for marriage parties. We provide buses of various sizes, fully equipped with amenities to keep your guests relaxed and on time."
    },
    {
      "name": "Bus Booking for Marriage Pune to Outstation",
      "description": "Travel to your wedding destination with ease by booking a bus from Pune to outstation venues. Our buses are perfect for large wedding parties, offering comfort, reliability, and punctuality for outstation journeys."
    },
    {
      "name": "Bus for Marriage Booking in Pune",
      "description": "Samarth Travels offers bus rentals for marriage events in Pune, ensuring timely and comfortable travel for your guests. Book a bus with us for a seamless wedding transport experience."
    },
    {
      "name": "Bus Hire in Pimpri Chinchwad for Marriage Function",
      "description": "If you're located in Pimpri Chinchwad, Samarth Travels provides reliable bus hire services for your marriage function. Our buses offer comfort, space, and punctuality to ensure smooth transport for wedding guests."
    },
    {
      "name": "Bus Booking for Marriage Events in Pune",
      "description": "For any marriage event in Pune, Samarth Travels offers reliable bus booking services. Our buses ensure that your guests travel in comfort and style to the wedding venue, with flexible options to suit all group sizes."
    },
    {
      "name": "Sleeper Bus Booking for Marriage",
      "description": "Looking for long-distance travel for your wedding guests? Our sleeper buses are ideal for overnight journeys, offering comfortable sleeping arrangements for long-distance marriage events."
    },
    {
      "name": "Bus Booking for Marriage Events in Pimpri Chinchwad",
      "description": "For weddings and other events in Pimpri Chinchwad, Samarth Travels offers reliable and punctual bus booking services. Our buses ensure smooth travel for guests to the wedding venue and back."
    }
  ],
  "tableData": [
    ["Full Bus Booking for Marriage Price", "Tourist Bus Booking for Marriage"],
    ["Reserve Bus for Marriage in Pune", "Bus Booking for Marriage Party"],
    ["Bus Booking for Marriage Pune to Outstation", "Bus for Marriage Booking in Pune"],
    ["Bus Hire in Pimpri Chinchwad for Marriage Function", "Bus Booking for Marriage Events in Pune"],
    ["Sleeper Bus Booking for Marriage", "Bus Booking for Marriage Events in Pimpri Chinchwad"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Rental Service for Marriage in Pune",
        "WhyChoosedescription": "We provide dependable bus rental services for marriages in Pune, ensuring a smooth and hassle-free transportation experience for your wedding guests. Whether it’s for the ceremony, reception, or transportation between multiple venues, we handle all your wedding transport needs with professionalism and care."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses for Marriage Guests",
        "WhyChoosedescription": "Our buses are designed for comfort, offering spacious seating, air-conditioning, and ample legroom. We have a range of bus sizes to accommodate all of your guests, from intimate family gatherings to large wedding parties, ensuring a pleasant journey to and from your wedding events."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers for Marriage Day Logistics",
        "WhyChoosedescription": "Our experienced drivers are courteous, punctual, and familiar with the importance of wedding logistics. They ensure smooth and timely transport for your guests, managing pick-ups and drop-offs between your ceremony, reception, and other wedding venues with ease."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Wedding Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for bus rentals for your marriage. No hidden fees, and flexible rental packages ensure you receive the best value for your transportation needs, keeping your wedding budget intact without compromising on quality."
    },
    {
        "WhyChooseheading": "24/7 Availability for Any Wedding Schedule",
        "WhyChoosedescription": "Our bus rental services are available 24/7, offering flexibility for your wedding schedule. Whether you need buses for early morning ceremonies or late-night receptions, we provide timely, reliable service to meet your wedding day timeline."
    },
    {
        "WhyChooseheading": "Effortless Booking Process and Real-Time Updates for Coordination",
        "WhyChoosedescription": "Booking your wedding bus is simple and efficient. Once your booking is confirmed, you’ll receive real-time updates, tracking information, and driver contact details, making it easy to coordinate transportation and stay informed throughout your wedding day."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses for Marriage Events",
        "WhyChoosedescription": "We prioritize the cleanliness and safety of our buses. Each bus is thoroughly cleaned and sanitized before every trip, providing a hygienic environment for your wedding guests and ensuring their comfort and safety throughout the journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenient and Secure Booking",
        "WhyChoosedescription": "We offer a variety of payment methods including UPI, credit/debit cards, digital wallets, and cash, making the booking process for your marriage bus service easy, secure, and convenient."
    }
]



















    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a bus for a marriage function with Samarth Travels?',
        answer: 'Booking a bus for a marriage is easy with Samarth Travels. Simply reach out via our website or call our team. Share your event dates, number of guests, and pickup/drop locations—we’ll recommend the right buses for your requirements.',
    },
    {
        id: 2,
        question: 'What types of buses are available for marriage bookings?',
        answer: 'We provide a wide range of buses including 22-seater, 32-seater, 40-seater, and 50-seater options. You can choose between AC and Non-AC buses based on your comfort and budget preferences. All vehicles are clean, spacious, and guest-ready.',
    },
    {
        id: 3,
        question: 'Can I book buses for different events during the marriage?',
        answer: 'Yes, we can arrange transportation for all marriage-related events including haldi, mehendi, sangeet, wedding ceremony, and reception. Multiple buses and routes can be scheduled to match your event timeline.',
    },
    {
        id: 4,
        question: 'Can the pickup and drop-off points be customized?',
        answer: 'Absolutely! We offer flexible pickup and drop-off locations such as hotels, banquet halls, homes, or any other venue. Our team ensures smooth coordination and timely service.',
    },
    {
        id: 5,
        question: 'What are the rental charges for marriage bus bookings?',
        answer: 'Bus rental prices start from ₹35/km depending on the size, duration, and type of vehicle. We also provide fixed packages for half-day or full-day bookings with pre-discussed limits. Contact us for a customized quote.',
    },
    {
        id: 6,
        question: 'Do you offer decorated buses for weddings?',
        answer: 'Yes, we can provide basic floral or ribbon decorations for marriage buses upon request. For elaborate decor, we’re happy to coordinate with your decorator or event planner.',
    },
    {
        id: 7,
        question: 'Is there on-trip support provided?',
        answer: 'Yes, we provide 24/7 customer support during your entire event transportation schedule. Our team ensures your guests arrive on time and the travel process is hassle-free.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sandeep Chavan',
        role: 'Groom’s Brother',
        text: 'Samarth Travels managed the marriage transport for our family. The 50-seater buses were clean and arrived on time. Guests were impressed with the comfort and coordination. Great service overall!',
        image: '/img/testimonial/testi_marriage_sandeep.jpg',
    },
    {
        name: 'Ms. Renu Wagle',
        role: 'Event Manager',
        text: 'I always rely on Samarth Travels for marriage events. They’re punctual, flexible, and have a professional team. From pre-wedding functions to reception, everything was perfectly managed.',
        image: '/img/testimonial/testi_marriage_renu.jpg',
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
  "name": "Bus Booking for Marriage",
  "image": "https://samarthtravels.com/assets/images/marriage-bus-booking-pune.jpg", // Replace with actual image URL
  "description": "Book buses for marriage events in Pune with Samarth Travels. We offer full bus bookings for marriage parties, outstation trips, and more. Comfortable and reliable buses, including sleeper buses, for your marriage function.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5800"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "11200",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-booking-for-marriage" // Replace with actual page URL
  }
};






    return (
        <div>



<Helmet>
  <title>Bus Booking for Marriage in Pune | Marriage Event Bus Rentals</title>
  <meta 
    name="description" 
    content="Book buses for marriage events in Pune with Samarth Travels. Full bus bookings for marriage parties, outstation trips, and sleeper buses. Comfortable transport for wedding functions." 
  />
  <meta 
    name="keywords" 
    content="Full Bus booking for marriage price, Tourist bus booking for marriage, Reserve bus for marriage in Pune, Bus booking for marriage party, bus booking for marriage pune to outstation, Bus for marriage booking in Pune, Bus hire in Pimpri Chinchwad for Marriage Function, bus booking for marriage Events in Pune, sleeper bus booking for marriage, bus booking for marriage events in Pimpri Chinchwad" 
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
                            <img src='/images/keyword/62.jpg' alt='img' />
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

export default Busbookingformarriage;