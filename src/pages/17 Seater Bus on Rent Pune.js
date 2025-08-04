
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Sevntinseaterbus() {



    const cardData =
    {
        keyword: '17 Seater Bus on Rent Pune',
        heading: 'Samarth Travels: 17 Seater Bus on Rent Pune',
        headingDescription: 'Samarth Travels offers 17 Seater Bus on rent in Pune, perfect for group outings, family tours, school trips, and corporate travel. Our reliable 17-seater buses feature comfortable seating, air-conditioning, and spacious interiors to ensure a smooth and pleasant journey. With professional drivers, clear rental pricing, and a commitment to customer satisfaction, Samarth Travels delivers dependable and comfortable transport solutions across Pune and beyond.',

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
      "name": "17 Seater Bus on Rent Pune",
      "description": "Samarth Travels offers 17-seater buses on rent in Pune, ideal for small group outings, family trips, or corporate travel. Our buses are well-maintained and come with professional drivers for a safe and comfortable journey."
    },
    {
      "name": "17 Seater Bus on Rent in Pune Price",
      "description": "Find affordable pricing for 17-seater bus rentals in Pune with Samarth Travels. We offer competitive rates for both local and outstation travel, with flexible payment options and transparent billing."
    },
    {
      "name": "17 Seater Bus Rate Per Km in Pune",
      "description": "Get the best value for your money with our per kilometer rates for 17-seater bus rentals in Pune. Ideal for both short trips and long-distance travel, our pricing is transparent and competitive."
    },
    {
      "name": "17 Seater Bus on Rent in Pune",
      "description": "Book a 17-seater bus on rent with Samarth Travels in Pune. Our buses are perfect for family trips, corporate outings, and school excursions, providing ample space and comfortable seating for all passengers."
    },
    {
      "name": "17 Seater AC Tempo Traveller on Rent in Pune",
      "description": "Travel in comfort with our 17-seater AC tempo travellers for rent in Pune. Ideal for family get-togethers, corporate events, and long-distance tours, our AC tempo travellers ensure a smooth and cool ride."
    },
    {
      "name": "17 Seater Non AC Tempo Traveller on Rent in Pune",
      "description": "For budget-friendly travel, rent a 17-seater non-AC tempo traveller in Pune. Perfect for short-distance trips, school outings, or pilgrimages, our non-AC options provide comfort without the extra cost."
    },
    {
      "name": "17 Seater Tempo Traveller for Mahabaleshwar from Pune",
      "description": "Planning a trip to Mahabaleshwar? Hire our 17-seater tempo travellers for a comfortable ride from Pune to Mahabaleshwar. Enjoy scenic views and ample space for your family or group of friends."
    },
    {
      "name": "17 Seater Tempo Traveller for Pune to Goa",
      "description": "Looking for a ride to Goa? Rent our 17-seater tempo traveller for a comfortable journey from Pune to Goa. With spacious seating and a reliable driver, your trip will be smooth and enjoyable."
    },
    {
      "name": "17 Seater Tempo Traveller Pune to Nashik",
      "description": "Travel to Nashik in style with our 17-seater tempo traveller rentals. Whether it’s a religious tour or a leisure trip, our vehicles offer comfort and convenience for all passengers."
    },
    {
      "name": "17 Seater Tempo Traveller Pune to Mumbai Rent",
      "description": "Rent a 17-seater tempo traveller from Pune to Mumbai for a comfortable and hassle-free journey. Ideal for group travel, this service ensures timely arrivals and a pleasant travel experience."
    },
    {
      "name": "17 Seater Tempo Traveller on Rent in Hadapsar",
      "description": "Samarth Travels offers 17-seater tempo travellers for rent in Hadapsar, Pune. Whether for local trips or outstation tours, our tempo travellers provide excellent comfort and are ideal for group travel."
    },
    {
      "name": "17 Seater Tempo Traveller on Rent in Pimpri Chinchwad",
      "description": "Looking for a 17-seater tempo traveller in Pimpri Chinchwad? Rent from Samarth Travels for a comfortable and cost-effective travel solution for family trips, corporate outings, or group tours."
    },
    {
      "name": "17 Seater Tempo Traveller Hire in Viman Nagar",
      "description": "Samarth Travels offers 17-seater tempo traveller rentals in Viman Nagar for local and outstation trips. Enjoy a comfortable ride with our professionally managed vehicles and drivers."
    },
    {
      "name": "Pune to Shirdi 17 Seater Bus Booking",
      "description": "Book a 17-seater bus for your trip from Pune to Shirdi with Samarth Travels. Enjoy a comfortable and convenient journey to the holy city with spacious seating and a dedicated driver."
    },
    {
      "name": "17 Seater Mini Bus on Rent in Pune",
      "description": "Rent a 17-seater mini bus for your small group travel needs in Pune. Ideal for picnics, weddings, and short tours, our mini buses are well-maintained and perfect for small group outings."
    },
    {
      "name": "17 Seater AC Bus on Rent in Pune",
      "description": "Travel in comfort with a 17-seater AC bus on rent from Samarth Travels. Whether for corporate events, weddings, or family tours, our air-conditioned buses offer a smooth and cool travel experience."
    }
  ],
  "tableData": [
    ["17 Seater Bus on Rent Pune", "17 Seater Bus on Rent in Pune Price"],
    ["17 Seater Bus Rate Per Km in Pune", "17 Seater Bus on Rent in Pune"],
    ["17 Seater AC Tempo Traveller on Rent in Pune", "17 Seater Non AC Tempo Traveller on Rent in Pune"],
    ["17 Seater Tempo Traveller for Mahabaleshwar from Pune", "17 Seater Tempo Traveller for Pune to Goa"],
    ["17 Seater Tempo Traveller Pune to Nashik", "17 Seater Tempo Traveller Pune to Mumbai Rent"],
    ["17 Seater Tempo Traveller on Rent in Hadapsar", "17 Seater Tempo Traveller on Rent in Pimpri Chinchwad"],
    ["17 Seater Tempo Traveller Hire in Viman Nagar", "Pune to Shirdi 17 Seater Bus Booking"],
    ["17 Seater Mini Bus on Rent in Pune", "17 Seater AC Bus on Rent in Pune"],
    ["", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable 17 Seater Bus Rental Service in Pune",
        "WhyChoosedescription": "We offer dependable 17-seater bus rentals in Pune, perfect for group travel, corporate events, school trips, or family outings. With comfortable seating and timely service, our buses ensure a smooth journey for your group."
    },
    {
        "WhyChooseheading": "Comfortable Seating for Small Groups",
        "WhyChoosedescription": "Our 17-seater buses provide spacious and comfortable seating, ideal for medium-sized groups. Whether you’re traveling for business or pleasure, the bus ensures a comfortable ride for all passengers."
    },
    {
        "WhyChooseheading": "Well-Maintained Buses with Modern Amenities",
        "WhyChoosedescription": "Each 17-seater bus is equipped with essential amenities such as air-conditioning, ample legroom, and clean interiors, ensuring your group’s comfort throughout the journey."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe Travel",
        "WhyChoosedescription": "Our professional drivers are skilled in handling group transportation, ensuring timely arrivals and safe driving. They are also familiar with Pune’s routes and outstation destinations, providing a hassle-free travel experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for 17-seater bus rentals, with no hidden charges. Whether you need the bus for a few hours or a full day, we offer flexible pricing packages that suit your budget."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Scheduling",
        "WhyChoosedescription": "Our 17-seater buses are available 24/7, allowing you to plan travel at your convenience. Early morning or late-night journeys? We’re ready whenever you need us."
    },
    {
        "WhyChooseheading": "Easy Booking and Real-Time Updates",
        "WhyChoosedescription": "Booking a 17-seater bus is quick and easy through our website or customer care. After confirming your booking, you will receive real-time updates, driver contact details, and bus location tracking to coordinate your trip smoothly."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Inspected Buses",
        "WhyChoosedescription": "We prioritize cleanliness and safety. All our buses are thoroughly sanitized before every trip and regularly maintained to ensure a smooth and safe journey for all passengers."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Hassle-Free Booking",
        "WhyChoosedescription": "We support a variety of secure payment methods, including UPI, credit/debit cards, digital wallets, and cash, ensuring an easy and convenient booking experience."
    }
]

























    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a 17-seater bus in Pune with Samarth Travels?',
        answer: 'Booking a 17-seater bus with Samarth Travels is simple. Just reach out via our website or phone, provide your travel details, such as pickup location, destination, date, and number of passengers, and we’ll arrange the perfect bus for your needs.',
    },
    {
        id: 2,
        question: 'What features are included in the 17-seater bus?',
        answer: 'Our 17-seater buses are equipped with comfortable seating, ample luggage space, air conditioning (AC), and modern amenities for a smooth and pleasant journey. They are ideal for small group travel, office outings, or family trips.',
    },
    {
        id: 3,
        question: 'Is the 17-seater bus suitable for long-distance or outstation travel?',
        answer: 'Yes, the 17-seater bus is well-suited for both short and long-distance journeys. Whether you’re heading to nearby tourist spots, attending a wedding, or traveling for business, our buses provide comfort and reliability.',
    },
    {
        id: 4,
        question: 'What are the rental charges for a 17-seater bus in Pune?',
        answer: 'The rental charges for a 17-seater bus start at ₹35/km for non-AC and ₹38/km for AC buses. We also offer hourly packages for local travel, and custom pricing for outstation trips. Contact us for an exact quote based on your itinerary.',
    },
    {
        id: 5,
        question: 'Does the bus rental include a driver and fuel?',
        answer: 'Yes, the 17-seater bus rental includes an experienced driver and fuel costs. Additional charges like tolls, parking fees, and permits will be communicated clearly at the time of booking.',
    },
    {
        id: 6,
        question: 'Can I customize my pickup and drop-off locations?',
        answer: 'Definitely! You can customize your pickup and drop-off locations based on your convenience. Whether it’s from your home, office, or hotel, we’ll ensure timely transportation for your group.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for bus rentals?',
        answer: 'Yes, Samarth Travels provides 24/7 customer support for all bus rentals. Whether you need assistance with booking or require emergency support during your trip, our team is always available to help.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rajesh Mehta',
        role: 'Corporate Manager',
        text: 'We rented a 17-seater AC bus for a corporate outing to Lonavala. The bus was comfortable, clean, and well-maintained. The driver was professional, and the entire experience was seamless. Highly recommend Samarth Travels!',
        image: '/img/testimonial/testi_bus17_rajesh.jpg',
    },
    {
        name: 'Mrs. Sunita Deshmukh',
        role: 'Wedding Planner',
        text: 'We hired a 17-seater bus for transporting guests to a wedding venue in Pune. The bus was spacious, and all our guests were happy with the comfort and service. Samarth Travels made our event transportation stress-free!',
        image: '/img/testimonial/testi_bus17_sunita.jpg',
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
  "name": "17 Seater Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/17-seater-bus-on-rent-in-pune.jpg", // Replace with actual image URL
  "description": "Rent a 17 seater bus or tempo traveller in Pune for local and outstation trips including Shirdi, Mahabaleshwar, Goa, Mumbai, and Nashik. AC and Non-AC options available at affordable per km rates. Ideal for corporate events, picnics, and family tours.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "5746"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5900",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/17-seater-bus-on-rent-in-pune" // Replace with actual page URL
  }
};






    return (
        <div>

<Helmet>
  <title>17 Seater Bus on Rent in Pune | AC & Non-AC Tempo Traveller</title>
  <meta 
    name="description" 
    content="Book 17 seater bus or tempo traveller on rent in Pune with Samarth Travels. Ideal for group travel to Goa, Mahabaleshwar, Mumbai, Shirdi, and more. AC/Non-AC options at best per km rates in Hadapsar, Viman Nagar, and Pimpri Chinchwad." 
  />
  <meta 
    name="keywords" 
    content="17 Seater bus on rent Pune, 17 seater bus on rent in pune price, 17 seater bus rate per km in pune, 17 seater bus on rent in pune, 17 seater AC Tempo Traveller On Rent in Pune, 17 seater non ac tempo traveller on rent in pune, 17 seater tempo traveller for mahabaleshwar from Pune, 17 Seater tempo traveller for pune to goa, 17 seater tempo traveller Pune to Nashik, 17 seater tempo traveller pune to mumbai rent, 17 seater tempo traveller on rent in hadapsar, 17 seater tempo traveller on rent in pimpri chinchwad, 17 Seater Tempo Traveller Hire in Viman Nagar, Pune to Shirdi 17 Seater Bus Booking, 17 Seater mini Bus On Rent in Pune, 17 seater AC Bus On Rent in Pune" 
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
                            <img src='/images/keyword/73.jpg' alt='img' />
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

export default Sevntinseaterbus;