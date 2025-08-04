
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Twentyseater() {



    const cardData =
    {
        keyword: '20 Seater Bus on Rent in Pune',
        heading: 'Samarth Travels: 20 Seater Bus on Rent in Pune',
        headingDescription: 'Samarth Travels offers 20 seater bus on rent in Pune, ideal for small group travel, corporate events, and family functions. Our well-maintained AC and non-AC buses come with comfortable seating and experienced drivers for a safe journey. With transparent pricing, punctual service, and a focus on customer satisfaction, Samarth Travels ensures a smooth and convenient travel experience.',

        top: 'Top Places to Visit in Pune Outstation with Samarth Travels',
  "topPlaces": [
    {
      "title": "Mahabaleshwar",
      "description": "A popular hill station located about 120 km from Pune, Mahabaleshwar is known for its cool climate, lush green valleys, and viewpoints like Arthur's Seat, Wilson Point, and Elephant's Head. Visitors can enjoy boating at Venna Lake, taste fresh strawberries at Mapro Garden, and explore ancient temples. It’s a perfect weekend getaway for families and couples alike."
    },
    {
      "title": "Lonavala & Khandala",
      "description": "Just 65-70 km from Pune, Lonavala and Khandala are twin hill stations nestled in the Sahyadri ranges. These places are famous for their scenic valleys, misty waterfalls, and trekking spots like Rajmachi Fort and Duke’s Nose. The monsoon season turns the landscape into a green paradise, making it a go-to destination for nature lovers."
    },
    {
      "title": "Lavasa",
      "description": "Lavasa is a planned hill city located around 60 km from Pune, designed in a European architectural style. Set around the serene Warasgaon Lake, it offers water sports, scenic promenades, cafes, and luxury resorts. It’s an ideal destination for romantic escapes and peaceful retreats."
    },
    {
      "title": "Shirdi",
      "description": "Located around 200 km from Pune, Shirdi is one of the most important pilgrimage sites in India, dedicated to Sai Baba. Devotees flock to visit the Samadhi Mandir, Dwarkamai, Chavadi, and Lendi Baug. The town exudes spiritual energy and is well-connected by road for a one- or two-day religious trip."
    },
    {
      "title": "Nashik",
      "description": "Around 210 km from Pune, Nashik is a city of religious and cultural importance. It's known for the Kumbh Mela, temples along the Godavari River, and its emerging reputation as the wine capital of India. Popular places include Trimbakeshwar Temple, Sula Vineyards, and Pandav Leni caves."
    },
    {
      "title": "Alibaug",
      "description": "About 145 km from Pune, Alibaug is a coastal town known for its clean beaches, sea forts, and fresh seafood. Tourists can relax at Alibaug Beach, visit the historic Kolaba Fort, and enjoy water sports. It's a favored destination for beach lovers and weekend travelers."
    },
    {
      "title": "Goa",
      "description": "Goa, around 450 km from Pune, is a favorite long weekend destination offering vibrant beaches, colonial architecture, and buzzing nightlife. North Goa is known for its party vibe, while South Goa offers peaceful beachside resorts. It’s perfect for family holidays, romantic getaways, or adventure trips."
    },
    {
      "title": "Kolhapur",
      "description": "Located approximately 235 km from Pune, Kolhapur is famous for the Mahalakshmi Temple, traditional Kolhapuri chappals, and spicy cuisine. The city offers cultural richness with historical landmarks like New Palace Museum and Rankala Lake. It makes for a soulful and flavorful cultural retreat."
    },
    {
      "title": "Satara & Kaas Plateau",
      "description": "Around 110 km from Pune, Satara is a historic city known for forts, waterfalls, and nearby Kaas Plateau—a UNESCO World Natural Heritage Site. During monsoon, the plateau blooms with rare and colorful flowers, offering a surreal experience for botanists and photographers."
    },
    {
      "title": "Bhimashankar",
      "description": "Located about 110 km from Pune, Bhimashankar is home to one of the 12 Jyotirlingas of Lord Shiva. Surrounded by thick forests and part of a wildlife sanctuary, it’s also a hotspot for trekkers and nature enthusiasts. The temple's location offers a blend of spiritual ambiance and ecological beauty."
    }
  ],

"services": [
  {
    "name": "Rent 20 Seater Bus in Pune",
    "description": "Rent a 20-seater bus in Pune from Samarth Travels for reliable and efficient group travel. Perfect for city rides, outstation tours, or special event transportation with maximum comfort."
  },
  {
    "name": "20 Seater Bus Hire for Local Travel in Pune",
    "description": "Need a 20-seater bus for short-distance travel in Pune? We offer local bus hire services with punctual service, clean vehicles, and professional drivers for smooth city transport."
  },
  {
    "name": "Affordable 20 Seater Bus Rental Pune",
    "description": "Looking for an economical group travel solution? Our affordable 20-seater bus rentals in Pune provide value-for-money without compromising on service quality or vehicle comfort."
  },
  {
    "name": "20 Seater AC Bus on Rent for Outstation from Pune",
    "description": "Book a 20-seater air-conditioned bus for outstation travel from Pune. Ideal for trips to destinations like Mahabaleshwar, Lonavala, Shirdi, and Goa with maximum comfort during long rides."
  },
  {
    "name": "Comfortable 20 Seater Bus for Group Tours Pune",
    "description": "Our 20-seater buses are designed for comfort, making them the perfect choice for group tours and excursions in and around Pune. Ample space and smooth travel guaranteed."
  },
  {
    "name": "20 Seater Bus Rental for Wedding Events Pune",
    "description": "Planning a wedding in Pune? Ensure smooth guest transport with our 20-seater buses—clean, well-maintained, and ideal for shuttling guests between venues and hotels."
  },
  {
    "name": "Rent 20 Seater Bus for Corporate Travel in Pune",
    "description": "Book a 20-seater bus for your corporate team’s travel needs in Pune. Suitable for events, conferences, site visits, or daily staff movement—comfortable and reliable service included."
  },
  {
    "name": "Luxury 20 Seater Bus on Rent Pune",
    "description": "Upgrade to luxury travel with our premium 20-seater buses. Plush seating, advanced features, and an elegant ride experience make these perfect for high-end events or VIP transport."
  },
  {
    "name": "20 Seater Bus Hire for Family Trips Pune",
    "description": "Make family vacations or reunions special with our 20-seater bus hire. Spacious interiors, air-conditioning, and courteous drivers ensure a pleasant travel experience for all age groups."
  },
  {
    "name": "20 Seater Bus for Sightseeing Tours in Pune",
    "description": "Explore Pune's rich heritage and popular spots with our 20-seater bus services. Ideal for school groups, tourists, and family outings with flexible rental durations."
  }
],
"tableData": [
  ["Rent 20 Seater Bus in Pune", "20 Seater Bus Hire for Local Travel in Pune"],
  ["Affordable 20 Seater Bus Rental Pune", "20 Seater AC Bus on Rent for Outstation from Pune"],
  ["Comfortable 20 Seater Bus for Group Tours Pune", "20 Seater Bus Rental for Wedding Events Pune"],
  ["Rent 20 Seater Bus for Corporate Travel in Pune", "Luxury 20 Seater Bus on Rent Pune"],
  ["20 Seater Bus Hire for Family Trips Pune", "20 Seater Bus for Sightseeing Tours in Pune"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "20 Seater Bus on Rent in Pune – Ideal for Comfortable Group Travel",
        "WhyChoosedescription": "Samarth Travels provides well-maintained 20-seater buses for rent in Pune, perfect for group outings, corporate events, school trips, and family functions. Our buses are designed for comfort, convenience, and safety, making them the ideal choice for small to mid-sized groups."
    },
    {
        "WhyChooseheading": "Spacious and Air-Conditioned 20-Seater Buses for Your Comfort",
        "WhyChoosedescription": "Our 20-seater buses feature spacious interiors, cushioned seating, and powerful air conditioning to ensure maximum comfort during your journey. Whether you're traveling short distances or planning an outstation trip, our buses provide a pleasant travel experience."
    },
    {
        "WhyChooseheading": "Perfect for Family Functions, Group Tours, and Corporate Travel",
        "WhyChoosedescription": "Whether it's a wedding function, a religious trip, a company outing, or a city tour, our 20-seater buses are suited for a wide range of travel needs. Travel together in one comfortable vehicle with enough space for everyone in your group."
    },
    {
        "WhyChooseheading": "Professional Chauffeurs for Safe and Timely Travel",
        "WhyChoosedescription": "All our 20-seater buses come with experienced chauffeurs who ensure timely pickup, smooth driving, and courteous service. Our drivers are well-versed with Pune city routes and popular outstation destinations for a safe and punctual journey."
    },
    {
        "WhyChooseheading": "Well-Maintained, Clean, and Sanitized Buses for Hygiene and Safety",
        "WhyChoosedescription": "We maintain the highest standards of cleanliness and hygiene. Our 20-seater buses are thoroughly cleaned, sanitized, and inspected before every trip, giving you peace of mind about your group’s safety and well-being."
    },
    {
        "WhyChooseheading": "Transparent and Competitive Pricing for 20-Seater Bus Rentals",
        "WhyChoosedescription": "At Samarth Travels, we provide affordable and transparent pricing for 20-seater bus rentals. There are no hidden charges—our all-inclusive rates cover the bus, driver, fuel, and tolls, so you can plan your travel budget with confidence."
    },
    {
        "WhyChooseheading": "24/7 Availability to Match Your Travel Schedule",
        "WhyChoosedescription": "Our 20-seater buses are available around the clock, allowing you to book at your convenience. Whether your travel is planned or spontaneous, we’re ready to serve you with flexible and dependable rental options."
    },
    {
        "WhyChooseheading": "Simple Booking Process with Multiple Payment Options",
        "WhyChoosedescription": "Booking a 20-seater bus with Samarth Travels is quick and easy. We offer multiple payment options including UPI, debit/credit cards, digital wallets, and cash, ensuring a seamless and flexible booking experience for our customers."
    }
]















    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a 20 Seater Bus in Pune from Samarth Travels?',
        answer: 'Booking a 20 Seater Bus in Pune is easy with Samarth Travels. You can contact us via phone or book directly through our website by sharing your travel date, pickup and drop locations, and group details. We’ll provide the best vehicle and pricing based on your needs.',
    },
    {
        id: 2,
        question: 'What facilities are available in the 20 Seater Bus?',
        answer: 'Our 20 Seater Buses come equipped with pushback seats, air-conditioning, ample legroom, large windows, luggage space, and professional drivers. They’re ideal for comfortable local and outstation group travel.',
    },
    {
        id: 3,
        question: 'Is the 20 Seater Bus suitable for outstation travel?',
        answer: 'Yes, our 20 Seater Buses are perfect for outstation journeys like Pune to Mahabaleshwar, Shirdi, Lonavala, or even Goa. They’re designed for group comfort during long-distance travel.',
    },
    {
        id: 4,
        question: 'Can I book the bus for events or weddings?',
        answer: 'Absolutely! The 20 Seater Bus is a popular choice for group transport during weddings, corporate events, picnics, and social gatherings. We offer flexible rental packages to suit all occasions.',
    },
    {
        id: 5,
        question: 'What does the rental package include?',
        answer: 'The package includes the 20 Seater Bus, an experienced driver, fuel (as per your route), and basic onboard amenities. Toll charges, parking, or permits, if any, will be communicated transparently.',
    },
    {
        id: 6,
        question: 'Can I get door-to-door pickup and drop services?',
        answer: 'Yes, we offer convenient door-to-door pickup and drop services within Pune city or as per your planned route. Multiple pickup points can also be arranged if required.',
    },
    {
        id: 7,
        question: 'How early should I book a 20 Seater Bus in Pune?',
        answer: 'It is recommended to book at least 1–2 weeks in advance, especially during weekends or peak seasons, to ensure availability of the 20 Seater Bus and to get the best rates.',
    },
];

const testimonials = [
    {
        name: 'Mr. Ajay Pawar',
        role: 'IT Consultant',
        text: 'We rented a 20 Seater Bus from Samarth Travels for a corporate team outing from Pune to Lavasa. The bus was clean, comfortable, and the ride was smooth. The driver was punctual and professional.',
        image: '/img/testimonial/testi_2_80.jpg',
    },
    {
        name: 'Ms. Poonam Shinde',
        role: 'Wedding Planner',
        text: 'Booked a 20 Seater Bus for guest transport during a wedding. Everything went perfectly. Guests were very happy with the comfort and timing. Thanks to Samarth Travels for a smooth experience!',
        image: '/img/testimonial/testi_2_81.jpg',
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
  "name": "20 Seater Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/20-seater-bus-hire-pune.jpg",
  "description": "Rent a 20 Seater Bus in Pune for local travel, corporate trips, group tours, family trips, and sightseeing. Affordable and luxury options available, including AC buses for outstation tours and wedding events.",
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
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/20-seater-bus-on-rent-pune"
  }
};







    return (
        <div>

<Helmet>
  <title>20 Seater Bus on Rent in Pune | Affordable & Luxury Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 20 Seater Bus in Pune for corporate travel, group tours, family trips, and sightseeing. Affordable and luxury AC options available, perfect for outstation tours, wedding events, and family trips." 
  />
  <meta 
    name="keywords" 
    content="Rent 20 Seater Bus in Pune, 20 Seater Bus Hire for Local Travel in Pune, Affordable 20 Seater Bus Rental Pune, 20 Seater AC Bus on Rent for Outstation from Pune, Comfortable 20 Seater Bus for Group Tours Pune, 20 Seater Bus Rental for Wedding Events Pune, Rent 20 Seater Bus for Corporate Travel in Pune, Luxury 20 Seater Bus on Rent Pune, 20 Seater Bus Hire for Family Trips Pune, 20 Seater Bus for Sightseeing Tours in Pune" 
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
                            <img src='/images/keyword/30.jpg' alt='img' />
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

export default Twentyseater;