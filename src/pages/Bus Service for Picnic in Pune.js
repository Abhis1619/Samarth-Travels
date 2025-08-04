
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busserviceforpicnicinpune() {



    const cardData =
    {
        keyword: 'Bus Service for Picnic in Pune',
        heading: 'Samarth Travels:  Bus Service for Picnic in Pune',
        headingDescription: 'Samarth Travels offers bus service for picnic in Pune, perfect for school outings, college trips, corporate picnics, and family group travel. Our comfortable 32-seater and 45-seater buses are equipped with air-conditioning, push-back seats, and spacious interiors to make your picnic journey relaxing and enjoyable. With punctual drivers, affordable rates, and a focus on safety and satisfaction, Samarth Travels ensures a fun-filled and stress-free picnic transportation experience.',

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
      "name": "Best Bus Service for Picnic in Pune",
      "description": "Plan your next picnic effortlessly with Samarth Travels, offering the best bus service in Pune for group outings. Our buses are ideal for school, college, and family picnics, ensuring safety, comfort, and timely transportation."
    },
    {
      "name": "Full Bus Booking Price",
      "description": "Get transparent and competitive full bus booking prices with Samarth Travels. Whether you need a bus for weddings, corporate trips, or school events, our rates are tailored to suit your budget without hidden charges."
    },
    {
      "name": "Bus Booking for One Day Trip",
      "description": "Looking for a quick getaway? Book a bus for a one-day trip in and around Pune. Ideal for picnics, sightseeing tours, or corporate retreats, our buses provide hassle-free travel with comfortable seating and experienced drivers."
    },
    {
      "name": "Bus Hire in Hadapsar",
      "description": "Residents and businesses in Hadapsar can rely on Samarth Travels for efficient and affordable bus hire services. Perfect for events, outstation trips, and daily transport with various seating capacities."
    },
    {
      "name": "Bus Hire in Kharadi",
      "description": "Book a bus in Kharadi, Pune with Samarth Travels for convenient and safe transportation. Our services cater to corporates, schools, and families for both local and outstation travel needs."
    },
    {
      "name": "Bus Hire in Viman Nagar",
      "description": "Based in Viman Nagar? Samarth Travels offers premium bus hire options for picnics, events, and tours. Choose from AC and non-AC buses in multiple sizes, driven by trained professionals."
    },
    {
      "name": "Bus Hire in Kothrud",
      "description": "Hire a bus in Kothrud, Pune through Samarth Travels for school trips, family functions, and more. Our modern fleet includes mini and large buses equipped for safe and enjoyable journeys."
    },
    {
      "name": "Bus Hire on Rent in Pimpri Chinchwad Pune",
      "description": "Samarth Travels provides top-rated bus rental services in Pimpri Chinchwad. From corporate events to religious tours, our buses are maintained for optimal safety and comfort on every ride."
    },
    {
      "name": "Bus Hire in Baner",
      "description": "Looking for group transport in Baner, Pune? Samarth Travels offers flexible bus rental solutions suitable for any event, with courteous drivers and timely service guaranteed."
    },
    {
      "name": "Bus Hire in Kharadi Pune",
      "description": "Get dependable bus rentals in Kharadi with Samarth Travels. Our services cover weddings, picnics, and outstation travel, with options ranging from minibuses to 50-seater coaches."
    },
    {
      "name": "Bus Hire in Hadapsar Pune",
      "description": "In Hadapsar and need a bus for your next trip? Samarth Travels provides a fleet of clean, reliable buses for rental with flexible pricing and multiple seating options."
    },
    {
      "name": "Mini AC Bus On Rent in Wanowrie, Pune",
      "description": "Book a mini AC bus in Wanowrie, Pune with Samarth Travels. Our minibuses are perfect for smaller groups traveling locally or for short outstation tours, combining comfort with affordability."
    },
    {
      "name": "Mini AC Bus on Rent in Sinhagad Road Pune",
      "description": "Samarth Travels offers mini AC buses on rent in the Sinhagad Road area. Ideal for school trips, group picnics, and sightseeing, our buses ensure a pleasant travel experience."
    },
    {
      "name": "Mini Bus On Rent in Aundh Pune",
      "description": "Travel comfortably with our mini bus rental services in Aundh, Pune. Samarth Travels offers AC and non-AC options, perfect for group outings, city tours, and event transportation."
    },
    {
      "name": "Mini Bus on Rent in Hinjewadi for 1 Day",
      "description": "Need a mini bus in Hinjewadi for just one day? Samarth Travels provides quick and affordable solutions for single-day rentals — ideal for company offsites, family tours, and short local trips."
    },
    {
      "name": "Mini Bus On Rent in Wagholi",
      "description": "Samarth Travels offers reliable mini bus rental services in Wagholi, Pune. Perfect for school trips, corporate outings, and short tours, our vehicles ensure safe and comfortable travel."
    }
  ],
  "tableData": [
    ["Best Bus Service for Picnic in Pune", "Full Bus Booking Price"],
    ["Bus Booking for One Day Trip", "Bus Hire in Hadapsar"],
    ["Bus Hire in Kharadi", "Bus Hire in Viman Nagar"],
    ["Bus Hire in Kothrud", "Bus Hire on Rent in Pimpri Chinchwad Pune"],
    ["Bus Hire in Baner", "Bus Hire in Kharadi Pune"],
    ["Bus Hire in Hadapsar Pune", "Mini AC Bus On Rent in Wanowrie, Pune"],
    ["Mini AC Bus on Rent in Sinhagad Road Pune", "Mini Bus On Rent in Aundh Pune"],
    ["Mini Bus on Rent in Hinjewadi for 1 Day", "Mini Bus On Rent in Wagholi"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Service for Picnics in Pune",
        "WhyChoosedescription": "We offer dependable and well-organized bus rental services for school, college, office, and family picnics in Pune. Enjoy a stress-free outing with timely pick-up and drop-off, so your group can focus on making memories, not managing transport."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Buses for Picnic Travel",
        "WhyChoosedescription": "Our fleet includes a range of buses with spacious seating, air-conditioning, and ample legroom. Whether you're traveling short distances or going on a day-long picnic, your group will enjoy a smooth and relaxing journey."
    },
    {
        "WhyChooseheading": "Trained Drivers for Safe and Pleasant Journeys",
        "WhyChoosedescription": "Our experienced and courteous drivers are trained to handle group travel with care. They ensure safe driving, timely departures, and hassle-free coordination throughout your picnic day."
    },
    {
        "WhyChooseheading": "Budget-Friendly and Transparent Pricing for Picnics",
        "WhyChoosedescription": "We offer cost-effective rental packages with clear pricing and no hidden charges. Whether you're planning a quick local outing or a full-day picnic, our options suit every budget."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Picnic Scheduling",
        "WhyChoosedescription": "Picnics can start early and end late — that’s why our services are available 24/7. We adapt to your group’s schedule and ensure that transportation is available whenever you need it."
    },
    {
        "WhyChooseheading": "Quick Booking and Real-Time Tracking for Peace of Mind",
        "WhyChoosedescription": "Booking your picnic bus is simple through our website or customer care. Receive real-time updates, bus location tracking, and driver contact details to make coordination easy and stress-free."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Buses",
        "WhyChoosedescription": "Each bus is thoroughly cleaned and sanitized before every trip. We prioritize hygiene and maintenance to ensure a safe and comfortable ride for all passengers."
    },
    {
        "WhyChooseheading": "Multiple Payment Methods for Your Convenience",
        "WhyChoosedescription": "We support various payment options like UPI, credit/debit cards, digital wallets, and cash. Booking a picnic bus in Pune is now easier, faster, and completely secure."
    }
]





















    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a bus for a picnic in Pune with Samarth Travels?',
        answer: 'Booking a bus for a picnic is easy with Samarth Travels. You can contact us via our website or phone. Share your picnic date, destination, number of passengers, and preferred bus type—we’ll arrange the perfect vehicle for a fun and safe trip.',
    },
    {
        id: 2,
        question: 'What types of buses are suitable for picnic outings?',
        answer: 'We offer a variety of buses for picnic groups including 22-seater, 32-seater, 40-seater, and 50-seater options. You can choose between AC and Non-AC buses based on your group’s comfort preferences and budget.',
    },
    {
        id: 3,
        question: 'Are buses available for school, college, and corporate picnics?',
        answer: 'Yes, we provide buses for all types of picnic groups—schools, colleges, companies, families, and social groups. Our vehicles are safe, well-maintained, and ideal for group outings of any size.',
    },
    {
        id: 4,
        question: 'What are the safety features included in the picnic bus rentals?',
        answer: 'All our buses undergo regular maintenance and come with experienced drivers, first-aid kits, fire extinguishers, and seatbelts. We prioritize the safety and comfort of every passenger.',
    },
    {
        id: 5,
        question: 'What are the charges for picnic bus services in Pune?',
        answer: 'Bus rental charges for picnic trips start from ₹35/km. We also offer local packages such as 8 hours/80 km or custom full-day plans. Contact us for the best pricing based on your group size and destination.',
    },
    {
        id: 6,
        question: 'Can pickup and drop-off points be customized?',
        answer: 'Yes, we offer full flexibility in pickup and drop-off locations. Whether from your school, office, society, or specific landmarks, we ensure convenient transportation for your entire group.',
    },
    {
        id: 7,
        question: 'Is support available during the picnic trip?',
        answer: 'Absolutely! Our team provides 24/7 support to ensure your picnic trip runs smoothly. You can contact us anytime for changes, assistance, or route coordination.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rahul More',
        role: 'School Administrator',
        text: 'Samarth Travels provided buses for our school’s annual picnic. The kids had a great time and the transport was safe and comfortable. We’ll definitely use their service again.',
        image: '/img/testimonial/testi_picnic_rahul.jpg',
    },
    {
        name: 'Ms. Pooja Naik',
        role: 'HR Executive',
        text: 'We hired two AC buses for a corporate picnic near Pune. Everything from booking to travel was seamless. The drivers were courteous and the buses were clean and spacious.',
        image: '/img/testimonial/testi_picnic_pooja.jpg',
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
  "name": "Bus Service for Picnic in Pune",
  "image": "https://samarthtravels.com/assets/images/picnic-bus-service-pune.jpg", // Replace with actual image URL
  "description": "Book affordable and comfortable bus services for picnics in Pune with Samarth Travels. Ideal for one-day trips, school outings, and group travel. Available in Hadapsar, Kharadi, Viman Nagar, Pimpri Chinchwad, Aundh, Hinjewadi, and more.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5584"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7200",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-service-for-picnic-in-pune" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Bus Service for Picnic in Pune | One-Day Trip Bus Hire</title>
  <meta 
    name="description" 
    content="Book picnic bus service in Pune with Samarth Travels. Mini and full-size buses available for 1-day trips across Hadapsar, Kharadi, Viman Nagar, Hinjewadi, Baner, and more. AC and Non-AC buses at great prices." 
  />
  <meta 
    name="keywords" 
    content="Best bus service for picnic in pune, full bus booking price, bus booking for one day trip, bus hire in hadapsar, bus hire in kharadi, bus hire in Viman Nagar, bus Hire in Kothrud, bus hire on rent in Pimpri Chinchwad Pune, Bus Hire in Baner, Bus hire in Kharadi Pune, Bus Hire in Hadapsar Pune, Mini AC Bus On Rent in Wanowrie Pune, Mini Ac Bus on Rent in Sinhagad Road Pune, Mini Bus On Rent in Aundh Pune, mini bus on rent in hinjewadi for 1 day, Mini Bus On Rent in Wagholi" 
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
                            <img src='/images/keyword/69.jpg' alt='img' />
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

export default Busserviceforpicnicinpune;