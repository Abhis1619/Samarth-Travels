
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Minibusonrentinpune() {



    const cardData =
    {
        keyword: 'Mini Bus On Rent in Pune',
        heading: 'Samarth Travels: Mini Bus On Rent in Pune',
        headingDescription: 'Samarth Travels offers Mini Bus on rent in Pune, ideal for small group travel, airport transfers, corporate events, school trips, and outstation tours. Our Mini Buses, available in various seating capacities, feature comfortable seating, ample luggage space, and smooth ride quality to ensure a pleasant journey. With professional drivers, flexible booking options, and transparent pricing, Samarth Travels delivers a reliable and convenient mini bus rental experience in Pune.',

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
      "name": "Mini Bus on Rent",
      "description": "Samarth Travels offers well-maintained mini buses on rent in Pune for all your local and outstation travel needs. Ideal for small to medium-sized groups, our mini buses come with experienced drivers ensuring comfort and safety."
    },
    {
      "name": "Mini Bus Hire in Pune",
      "description": "Looking for reliable mini bus hire in Pune? Samarth Travels provides 12 to 27 seater mini buses perfect for family outings, corporate events, and tourist trips at competitive rates with top-notch service."
    },
    {
      "name": "Minibus Hire with Driver for Outstation",
      "description": "Travel hassle-free with Samarth Travels’ minibus hire service with professional drivers for outstation trips from Pune. Suitable for group travel to destinations like Goa, Lonavala, or Shirdi."
    },
    {
      "name": "Mini Bus Rentals for Corporate Trip",
      "description": "Organizing a corporate trip? Our mini bus rental service in Pune is tailored for business travel, offering comfort, punctuality, and flexible seating options for teams and employees."
    },
    {
      "name": "Small Bus Rental Service in Pune",
      "description": "Samarth Travels provides small bus rental services in Pune for local sightseeing, functions, and short group tours. Choose from AC or non-AC options as per your budget and requirement."
    },
    {
      "name": "Minibus Rental Near Me in Pune",
      "description": "Find convenient minibus rental near you in Pune with Samarth Travels. Whether you're in Hadapsar, Kharadi, or Baner, our mini buses are just a call away for family events, picnics, or tours."
    },
    {
      "name": "Mini Bus Rent Per Km",
      "description": "Get transparent mini bus rental rates on a per km basis in Pune. Perfect for short-term or long-distance travel, our pricing is competitive and inclusive of driver and fuel."
    },
    {
      "name": "Mini Coach Hire in Pune",
      "description": "Hire luxury mini coaches in Pune for events, VIP guests, or tourism. Our mini coaches are equipped with push-back seats, air-conditioning, and ample space for a comfortable journey."
    },
    {
      "name": "Mini Bus for Rent Near Me in Pune",
      "description": "Looking to rent a mini bus near your location in Pune? Samarth Travels serves all major localities, offering reliable mini bus rentals for tours, parties, and family travel."
    },
    {
      "name": "12 Seater Mini Bus on Rent Pune",
      "description": "Rent a 12-seater mini bus in Pune for small group travel, airport transfers, or sightseeing. Samarth Travels ensures clean vehicles, courteous drivers, and prompt service."
    },
    {
      "name": "Mini Bus on Rent Near Me for Outstation",
      "description": "Travel outstation from Pune in comfort with our mini buses. We offer prompt pickup and drop services with experienced drivers and well-maintained vehicles."
    },
    {
      "name": "Mini Bus for Lonavala Picnic from Pune",
      "description": "Plan a refreshing picnic to Lonavala from Pune with Samarth Travels’ mini bus rental. Ideal for friends, families, and small corporate groups looking for a convenient travel solution."
    },
    {
      "name": "Mini Bus Hire for Event in Pune",
      "description": "Make your events hassle-free with our mini bus hire in Pune. Whether it's a wedding, birthday, or corporate gathering, we ensure your guests arrive on time and in comfort."
    },
    {
      "name": "Pune to Goa Mini Bus",
      "description": "Book a mini bus for your Goa vacation from Pune. Perfect for beach holidays, group road trips, and long-distance travel, our buses offer reliability and comfort."
    },
    {
      "name": "Mini Bus Hire in Pimpri Chinchwad",
      "description": "Serving Pimpri Chinchwad? Samarth Travels provides efficient mini bus rental services in your locality for local and long-distance travel at affordable rates."
    },
    {
      "name": "Mini Bus Hire in Kharadi Pune",
      "description": "Residents and offices in Kharadi can now easily rent mini buses for travel needs. Our fleet is available for quick bookings and guaranteed on-time service."
    },
    {
      "name": "Minibus Hire for Wedding Party in Pune",
      "description": "Transport wedding guests in comfort with our mini bus rental service. Ideal for marriage functions, pre-wedding shoots, or reception logistics within and outside Pune."
    },
    {
      "name": "Mini Bus on Rent in Hinjewadi",
      "description": "Samarth Travels offers mini bus rentals in Hinjewadi, catering to the needs of tech parks, events, and personal travel. Choose from a wide range of seating capacities."
    },
    {
      "name": "Mini Bus on Rent in Baner",
      "description": "Get easy access to mini bus rentals in Baner with Samarth Travels. Whether you need a bus for a day or longer, we provide convenient travel solutions for your group."
    },
    {
      "name": "Mini Bus on Rent in Pune Near Me",
      "description": "Find reliable mini bus rental options close to your home or office in Pune. We cover all major localities and offer quick support for bookings and queries."
    },
    {
      "name": "Luxury Mini Bus on Rent in Pune Near Me",
      "description": "Travel in style with our luxury mini bus rentals in Pune. Perfect for premium guests, corporate executives, and family functions, our buses offer a superior travel experience."
    },
    {
      "name": "Mini Bus on Rent in Pune for Family",
      "description": "Going on a family vacation or wedding? Our mini buses are great for family travel, with ample space, comfort features, and professional drivers for a stress-free ride."
    },
    {
      "name": "13, 15, 17, 20, 24, 27 Seater Mini Bus on Rent in Pune",
      "description": "Samarth Travels offers a wide range of mini buses with seating from 13 to 27 for rent in Pune. Ideal for school trips, team outings, and pilgrimage tours."
    },
    {
      "name": "Samarth Travels Hadapsar Pune",
      "description": "Located in Hadapsar, Samarth Travels is your go-to source for mini bus and coach rentals in Pune. We offer professional service, flexible packages, and reliable vehicles."
    }
  ],
  "tableData": [
    ["Mini Bus on Rent", "Mini Bus Hire in Pune"],
    ["Minibus Hire with Driver for Outstation", "Mini Bus Rentals for Corporate Trip"],
    ["Small Bus Rental Service in Pune", "Minibus Rental Near Me in Pune"],
    ["Mini Bus Rent Per Km", "Mini Coach Hire in Pune"],
    ["Mini Bus for Rent Near Me in Pune", "12 Seater Mini Bus on Rent Pune"],
    ["Mini Bus on Rent Near Me for Outstation", "Mini Bus for Lonavala Picnic from Pune"],
    ["Mini Bus Hire for Event in Pune", "Pune to Goa Mini Bus"],
    ["Mini Bus Hire in Pimpri Chinchwad", "Mini Bus Hire in Kharadi Pune"],
    ["Minibus Hire for Wedding Party in Pune", "Mini Bus on Rent in Hinjewadi"],
    ["Mini Bus on Rent in Baner", "Mini Bus on Rent in Pune Near Me"],
    ["Luxury Mini Bus on Rent in Pune Near Me", "Mini Bus on Rent in Pune for Family"],
    ["13, 15, 17, 20, 24, 27 Seater Mini Bus on Rent in Pune", "Samarth Travels Hadapsar Pune"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Trusted Mini Bus Rental Service in Pune",
        "WhyChoosedescription": "We provide reliable mini bus rental services in Pune, perfect for small to medium-sized groups. Whether it's a family outing, corporate event, school trip, or airport transfer, our mini buses ensure a smooth and convenient travel experience."
    },
    {
        "WhyChooseheading": "Ideal for Group Sizes of 17 to 32 Passengers",
        "WhyChoosedescription": "Our fleet includes well-maintained mini buses with various seating capacities—such as 17, 20, 26, and 32-seaters—designed to comfortably accommodate group travel for both short and long distances."
    },
    {
        "WhyChooseheading": "Comfortable Seating and Onboard Amenities",
        "WhyChoosedescription": "Each mini bus comes equipped with cushioned seating, sufficient legroom, and overhead storage. Air-conditioned and non-AC options are available based on your travel needs and budget preferences."
    },
    {
        "WhyChooseheading": "Skilled and Courteous Drivers for Safe Journeys",
        "WhyChoosedescription": "Our professional drivers are experienced, punctual, and customer-friendly. They ensure a safe, smooth, and timely journey, whether you're traveling within Pune or heading outstation."
    },
    {
        "WhyChooseheading": "Affordable Pricing with Transparent Rental Plans",
        "WhyChoosedescription": "We offer competitive and transparent pricing for mini bus rentals in Pune. Choose from hourly, half-day, full-day, or multi-day packages that fit your travel plan and budget—no hidden costs."
    },
    {
        "WhyChooseheading": "24/7 Mini Bus Availability for Flexible Travel Plans",
        "WhyChoosedescription": "Our services are available around the clock. Whether it’s an early morning departure or a late-night return, we’re ready to provide a mini bus that suits your timing perfectly."
    },
    {
        "WhyChooseheading": "Easy Booking and Real-Time Travel Coordination",
        "WhyChoosedescription": "Booking a mini bus with us is simple and convenient. Once confirmed, you’ll receive driver details, vehicle tracking, and regular updates, making group travel coordination stress-free."
    },
    {
        "WhyChooseheading": "Well-Maintained and Sanitized Mini Buses",
        "WhyChoosedescription": "We prioritize hygiene and safety. Every mini bus is thoroughly cleaned, sanitized, and inspected before every journey to ensure your group travels in a safe and comfortable environment."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "Complete your booking easily with various payment options including UPI, credit/debit cards, digital wallets, and cash. We make the payment process smooth and secure."
    }
]























    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a mini bus in Pune with Samarth Travels?',
        answer: 'Renting a mini bus in Pune is easy with Samarth Travels. Just reach out via our website or phone, share your travel details like date, number of passengers, and destination—we’ll recommend the ideal mini bus for your trip.',
    },
    {
        id: 2,
        question: 'What seating capacities are available for mini buses?',
        answer: 'We offer mini buses in 18-seater, 20-seater, and 26-seater configurations. These buses are ideal for small group travel, office trips, family outings, and event transportation within or outside Pune.',
    },
    {
        id: 3,
        question: 'Are mini buses suitable for outstation travel?',
        answer: 'Yes, our mini buses are perfect for both local and outstation journeys. They come with comfortable pushback seats, ample luggage space, and optional AC for a smooth and enjoyable ride.',
    },
    {
        id: 4,
        question: 'What are the rental charges for mini buses in Pune?',
        answer: 'Mini bus rentals typically start from ₹32/km for Non AC and ₹35/km for AC buses. We also provide local packages (e.g., 8 hours/80 km) and custom pricing for outstation trips. Contact us for a detailed quote.',
    },
    {
        id: 5,
        question: 'Is the mini bus rental inclusive of driver and fuel?',
        answer: 'Yes, all rentals include a professional driver and fuel. Additional charges like tolls, parking fees, and permits are communicated upfront to ensure full transparency.',
    },
    {
        id: 6,
        question: 'What types of events can mini buses be booked for?',
        answer: 'Mini buses are suitable for corporate travel, family functions, wedding transport, sightseeing tours, school or college outings, and more. They’re compact yet spacious, ideal for small groups.',
    },
    {
        id: 7,
        question: 'Is customer support available during the rental period?',
        answer: 'Absolutely! Samarth Travels offers 24/7 customer support to ensure your journey is smooth. We’re available to assist with booking changes, emergencies, or route adjustments anytime.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sagar Deshmukh',
        role: 'Startup Founder',
        text: 'We hired a 20-seater AC mini bus from Samarth Travels for a day trip to Lavasa. The vehicle was clean, comfortable, and the driver was very polite. Great service overall!',
        image: '/img/testimonial/testi_minibus_sagar.jpg',
    },
    {
        name: 'Ms. Anjali Rane',
        role: 'School Coordinator',
        text: 'Booked an 18-seater mini bus for a school outing in Pune. The bus was well-maintained and arrived on time. The kids had a safe and fun journey. Thank you, Samarth Travels!',
        image: '/img/testimonial/testi_minibus_anjali.jpg',
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
  "name": "Mini Bus On Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/mini-bus-on-rent-in-pune.jpg", // Replace with actual image URL
  "description": "Rent mini buses in Pune with Samarth Travels. Available for corporate trips, family outings, weddings, events, and outstation travel. Choose from 13 to 27-seater luxury and standard mini buses with driver.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "5937"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6700",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/mini-bus-on-rent-in-pune" // Replace with actual page URL
  }
};





    return (
        <div>
<Helmet>
  <title>Mini Bus On Rent in Pune | 13 to 27 Seater Mini Bus Hire</title>
  <meta 
    name="description" 
    content="Book 13 to 27-seater mini buses on rent in Pune with Samarth Travels. Ideal for family trips, corporate events, weddings, and outstation travel. Luxury and standard mini coaches available in Baner, Kharadi, Hadapsar, Hinjewadi, and more." 
  />
  <meta 
    name="keywords" 
    content="Mini bus on rent, Mini bus hire in Pune, Minibus hire with driver for outstation, Mini bus rentals for CorporateTrip, Small bus rental service in Pune, Minibus rental near me in Pune, Mini Bus Rent Per Km, Mini coach hire in Pune, Mini bus for rent near me in Pune, 12 seater mini bus on rent Pune, Mini bus on rent near me for Outstation, Mini bus for lonavala Picnic from Pune, Mini bus Hire for event in Pune, Pune to goa mini bus, Mini bus hire in pimpri chinchwad, Mini bus hire in kharadi pune, Minibus Hire for Wedding party in Pune, Mini Bus On Rent in Hinjewadi, Mini bus on rent in baner, Mini bus on rent in pune near me, Luxury mini bus on rent in pune near me, Mini bus on rent in pune for family, 13 15 17 20 24 27 Seater Mini Bus on Rent in Pune, Samarth Travels Hadapsar Pune" 
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
                            <img src='/images/keyword/71.jpg' alt='img' />
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

export default Minibusonrentinpune;