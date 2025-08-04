
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Thirtinseatertempotraveller() {



    const cardData =
    {
        keyword: '13 Seater Tempo Traveller on Rent in Pune',
        heading: 'Samarth Travels: 13 Seater Tempo Traveller on Rent in Pune',
        headingDescription: 'Samarth Travels offers 13 seater Tempo Traveller on rent in Pune, perfect for family trips, small group tours, and corporate travel. Our well-maintained air-conditioned Tempo Travellers provide spacious seating, smooth rides, and professional drivers. With transparent pricing, no hidden charges, and a focus on safety and punctuality, Samarth Travels ensures a comfortable and worry-free journey.',

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
    "name": "Rent 13 Seater Tempo Traveller Pune",
    "description": "Rent a 13-seater Tempo Traveller in Pune with Samarth Travels for convenient, safe, and efficient group transportation. Ideal for family outings, business trips, or city tours."
  },
  {
    "name": "Affordable 13 Seater Tempo Traveller Hire in Pune",
    "description": "Looking for budget-friendly travel options in Pune? Our affordable 13-seater Tempo Traveller rentals offer reliable service without compromising on comfort and safety."
  },
  {
    "name": "Luxury 13 Seater Tempo Traveller Rental Pune",
    "description": "Upgrade your travel with our luxury 13-seater Tempo Travellers. With premium interiors and advanced features, these vehicles are perfect for VIP travel and corporate needs."
  },
  {
    "name": "13 Seater AC Tempo Traveller on Rent Pune",
    "description": "Beat the heat with our AC 13-seater Tempo Traveller rentals in Pune. Perfect for comfortable travel during sightseeing, events, or outstation journeys in any season."
  },
  {
    "name": "Comfortable 13 Seater Tempo Traveller for Family Trips Pune",
    "description": "Travel with your family in comfort and style with our 13-seater Tempo Travellers. Spacious interiors and smooth rides ensure a hassle-free vacation experience."
  },
  {
    "name": "13 Seater Tempo Traveller for Group Tours in Pune",
    "description": "Organizing a group tour in Pune? Hire a 13-seater Tempo Traveller with ample seating, luggage space, and a professional driver for safe and coordinated travel."
  },
  {
    "name": "Rent 13 Seater Traveller for Pune Sightseeing",
    "description": "Explore Pune’s historical and cultural landmarks with ease. Our 13-seater Traveller is ideal for city tours, offering comfort, flexibility, and knowledgeable drivers."
  },
  {
    "name": "13 Seater Tempo Traveller Hire for Outstation from Pune",
    "description": "Planning a trip outside Pune? Our 13-seater Tempo Travellers are perfect for outstation journeys to destinations like Lonavala, Mahabaleshwar, Shirdi, and more."
  },
  {
    "name": "Tempo Traveller 13 Seater for Corporate Travel Pune",
    "description": "Ensure seamless travel for corporate teams with our 13-seater Tempo Traveller. Suitable for conferences, site visits, and daily staff transport in Pune."
  },
  {
    "name": "Pune to Outstation 13 Seater Tempo Traveller Hire",
    "description": "Hire a 13-seater Tempo Traveller from Pune for outstation travel. Ideal for family vacations, pilgrimages, or business tours to nearby cities and attractions."
  }
],
"tableData": [
  ["Rent 13 Seater Tempo Traveller Pune", "Affordable 13 Seater Tempo Traveller Hire in Pune"],
  ["Luxury 13 Seater Tempo Traveller Rental Pune", "13 Seater AC Tempo Traveller on Rent Pune"],
  ["Comfortable 13 Seater Tempo Traveller for Family Trips Pune", "13 Seater Tempo Traveller for Group Tours in Pune"],
  ["Rent 13 Seater Traveller for Pune Sightseeing", "13 Seater Tempo Traveller Hire for Outstation from Pune"],
  ["Tempo Traveller 13 Seater for Corporate Travel Pune", "Pune to Outstation 13 Seater Tempo Traveller Hire"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "13 Seater Tempo Traveller on Rent in Pune – Comfortable Group Travel",
        "WhyChoosedescription": "Samarth Travels offers a premium 13-seater tempo traveller for rent in Pune, perfect for small groups, family trips, corporate outings, and local tours. Our tempo travellers provide a comfortable, spacious, and convenient way to travel, ensuring that your group enjoys the journey as much as the destination."
    },
    {
        "WhyChooseheading": "Spacious and Air-Conditioned Tempo Traveller for Your Group",
        "WhyChoosedescription": "Our 13-seater tempo travellers are designed for comfort, featuring plush leather seats, ample legroom, and efficient air conditioning. With enough space for everyone, our vehicles ensure a relaxing and enjoyable journey, even for longer trips around Pune and nearby areas."
    },
    {
        "WhyChooseheading": "Ideal for Small Group Travel, Local Tours, and Family Outings",
        "WhyChoosedescription": "Whether it's a family outing, a weekend getaway, or a local sightseeing tour, our 13-seater tempo traveller is the perfect choice. It offers ample space for small groups, allowing you to travel together in comfort and style, no matter the destination."
    },
    {
        "WhyChooseheading": "Experienced Chauffeurs for Safe and Comfortable Journeys",
        "WhyChoosedescription": "Our professional chauffeurs are trained to navigate Pune's roads efficiently, ensuring that your journey is smooth and safe. They are punctual, courteous, and dedicated to providing a comfortable and hassle-free experience throughout your trip."
    },
    {
        "WhyChooseheading": "Well-Maintained, Clean, and Sanitized 13-Seater Fleet",
        "WhyChoosedescription": "We prioritize your health and safety. Our 13-seater tempo travellers are regularly maintained, cleaned, and sanitized before each trip, ensuring a fresh, hygienic, and safe environment for you and your group."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 13-Seater Tempo Traveller Rentals",
        "WhyChoosedescription": "At Samarth Travels, we offer clear and competitive pricing for our 13-seater tempo traveller rentals. Our pricing is all-inclusive, covering the vehicle, driver fees, fuel, tolls, and other necessary expenses, so you can travel with confidence and no surprises."
    },
    {
        "WhyChooseheading": "24/7 Availability for Your Group Travel Needs in Pune",
        "WhyChoosedescription": "Our 13-seater tempo traveller is available for rent 24/7, providing you with the flexibility to plan your trip at any time. Whether you're booking in advance or need a last-minute vehicle, we’re here to accommodate your travel needs."
    },
    {
        "WhyChooseheading": "Convenient Booking and Multiple Payment Options for Easy Rentals",
        "WhyChoosedescription": "Booking your 13-seater tempo traveller rental with Samarth Travels is easy and hassle-free. We offer a variety of payment options, including UPI, credit/debit cards, digital wallets, and cash, ensuring a smooth and convenient booking process."
    }
]














    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a 13 Seater Tempo Traveller on rent in Pune?',
        answer: 'Booking a 13 Seater Tempo Traveller with Samarth Travels is quick and easy. You can book online through our website or call our support team. Share your travel details, such as date, destination, and group size, and we’ll provide the best quote and service.',
    },
    {
        id: 2,
        question: 'What are the features of the 13 Seater Tempo Traveller?',
        answer: 'Our 13 Seater Tempo Travellers come with pushback seats, air-conditioning, ample legroom, luggage space, reading lights, and USB charging ports. They are ideal for comfortable city tours or outstation trips for mid-sized groups.',
    },
    {
        id: 3,
        question: 'Is the 13 Seater Tempo Traveller suitable for outstation trips?',
        answer: 'Yes, the 13 Seater Tempo Traveller is perfect for outstation journeys such as trips to Lonavala, Mahabaleshwar, Shirdi, Goa, and more. It offers a smooth ride and premium comfort for long-distance travel.',
    },
    {
        id: 4,
        question: 'Can I hire the vehicle for one-day or multi-day trips?',
        answer: 'Absolutely! We offer flexible rental plans including half-day, full-day, and multi-day options. Whether it’s a one-day trip or a week-long vacation, we’ve got you covered.',
    },
    {
        id: 5,
        question: 'What is included in the rental package?',
        answer: 'The rental includes the Tempo Traveller, experienced driver, fuel (as per the package), and all in-cabin amenities. Any additional charges like tolls, parking, or inter-state permits will be communicated during booking.',
    },
    {
        id: 6,
        question: 'Is the 13 Seater available for corporate and event bookings?',
        answer: 'Yes, our Tempo Travellers are commonly used for corporate travel, airport transfers, weddings, picnics, and group outings. We ensure timely service and professional handling for all events.',
    },
    {
        id: 7,
        question: 'How early should I book the 13 Seater Tempo Traveller?',
        answer: 'To ensure availability, we recommend booking at least 1–2 weeks in advance, especially during weekends, holidays, and festive seasons when demand is high.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sagar Kulkarni',
        role: 'Sales Manager',
        text: 'We rented a 13 Seater Tempo Traveller from Samarth Travels for a business trip to Nashik. The vehicle was clean and comfortable, and the service was top-notch. Highly professional team!',
        image: '/img/testimonial/testi_2_76.jpg',
    },
    {
        name: 'Ms. Rucha Desai',
        role: 'Tour Organizer',
        text: 'I booked a 13 Seater Tempo Traveller for a weekend tour to Mahabaleshwar with friends. It was a great experience—comfortable seats, polite driver, and smooth ride. Will book again with Samarth Travels!',
        image: '/img/testimonial/testi_2_77.jpg',
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
  "name": "13 Seater Tempo Traveller on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/13-seater-tempo-traveller-pune.jpg",
  "description": "Rent a 13 Seater Tempo Traveller in Pune for comfortable family trips, group tours, corporate travel, sightseeing, and outstation tours. Affordable and luxury options available, including AC Tempo Travellers for a smooth journey.",
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
    "price": "3200",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/13-seater-tempo-traveller-on-rent-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>13 Seater Tempo Traveller on Rent in Pune | Affordable & Luxury Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 13 Seater Tempo Traveller in Pune for family trips, group tours, corporate travel, and sightseeing. Options for affordable and luxury AC Tempo Travellers, perfect for outstation tours and group travel." 
  />
  <meta 
    name="keywords" 
    content="Rent 13 Seater Tempo Traveller Pune, Affordable 13 Seater Tempo Traveller Hire in Pune, Luxury 13 Seater Tempo Traveller Rental Pune, 13 Seater AC Tempo Traveller on Rent Pune, Comfortable 13 Seater Tempo Traveller for Family Trips Pune, 13 Seater Tempo Traveller for Group Tours in Pune, Rent 13 Seater Traveller for Pune Sightseeing, 13 Seater Tempo Traveller Hire for Outstation from Pune, Tempo Traveller 13 Seater for Corporate Travel Pune, Pune to Outstation 13 Seater Tempo Traveller Hire" 
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
                            <img src='/images/keyword/28.jpg' alt='img' />
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

export default Thirtinseatertempotraveller;