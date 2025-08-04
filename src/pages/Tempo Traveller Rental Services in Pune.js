
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Tempotravellerrental() {



    const cardData =
    {
        keyword: 'Tempo Traveller Rental Services in Pune',
        heading: 'Samarth Travels: Tempo Traveller Rental Services in Pune',
        headingDescription: 'Samarth Travels offers Tempo Traveller rental services in Pune, ideal for family outings, corporate events, school trips, and outstation tours. Our fleet of well-maintained Tempo Travellers, available in 9, 12, 13, 17, 20, and 26-seater options, is equipped with air-conditioning, push-back seats, and spacious interiors to ensure a comfortable and enjoyable journey. With experienced drivers, flexible rental packages, and transparent pricing, Samarth Travels provides safe, reliable, and cost-effective Tempo Traveller rental solutions across Pune.',

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
      "name": "Tempo Traveller Rental Services in Pune",
      "description": "We offer reliable Tempo Traveller rental services in Pune for all your travel needs, from corporate trips to family outings and picnics."
    },
    {
      "name": "Tempo Traveller on Rent Pune",
      "description": "Rent a Tempo Traveller in Pune for any occasion, including group tours, sightseeing, corporate events, and more."
    },
    {
      "name": "Rent Tempo Traveller for Sightseeing in Pune",
      "description": "Rent a Tempo Traveller in Pune for sightseeing tours. Explore the city's landmarks with comfort and convenience."
    },
    {
      "name": "Tempo Traveller Hire in Pune",
      "description": "Hire a Tempo Traveller in Pune for any event or travel need, including family trips, corporate outings, and special occasions."
    },
    {
      "name": "Tempo Traveller Rental for Corporate Trips Pune",
      "description": "We provide Tempo Traveller rental services for corporate trips in Pune. Comfortable travel for your employees with all necessary amenities."
    },
    {
      "name": "Tempo Traveller for Family Travel in Pune",
      "description": "Rent a Tempo Traveller for family trips in Pune. Spacious and comfortable seating for family gatherings, vacations, or short trips."
    },
    {
      "name": "Tempo Traveller Hire for Picnics in Pune",
      "description": "Rent a Tempo Traveller for your picnic in Pune. Ideal for group outings with friends and family, providing comfort and convenience."
    },
    {
      "name": "Tempo Traveller on Rent for Group Tours in Pune",
      "description": "Rent a Tempo Traveller for group tours in Pune. Spacious and equipped for group travel, ensuring everyone enjoys the journey."
    },
    {
      "name": "Tempo Traveller for Outstation Trips Pune",
      "description": "Rent a Tempo Traveller in Pune for outstation trips. Comfortable travel for long-distance journeys to nearby cities and tourist spots."
    },
    {
      "name": "Tempo Traveller on Rent for Weddings Pune",
      "description": "Rent a Tempo Traveller for weddings in Pune. Spacious and luxurious buses for transporting guests to the venue with comfort and style."
    },
    {
      "name": "Luxury Tempo Traveller on Rent Pune",
      "description": "Hire a luxury Tempo Traveller in Pune for special occasions, corporate events, and family outings. Enjoy premium comfort and amenities."
    },
    {
      "name": "Best Priced Tempo Traveller Rental Services Pune",
      "description": "Get the best prices for Tempo Traveller rentals in Pune. Affordable options for all kinds of travel needs, from corporate events to personal tours."
    }
  ],
  "tableData": [
    ["Tempo Traveller Rental Services in Pune", "Tempo Traveller on Rent Pune"],
    ["Rent Tempo Traveller for Sightseeing in Pune", "Tempo Traveller Hire in Pune"],
    ["Tempo Traveller Rental for Corporate Trips Pune", "Tempo Traveller for Family Travel in Pune"],
    ["Tempo Traveller Hire for Picnics in Pune", "Tempo Traveller on Rent for Group Tours in Pune"],
    ["Tempo Traveller for Outstation Trips Pune", "Tempo Traveller on Rent for Weddings Pune"],
    ["Luxury Tempo Traveller on Rent Pune", "Best Priced Tempo Traveller Rental Services Pune"]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Tempo Traveller Rental Services in Pune",
        "WhyChoosedescription": "We offer dependable Tempo Traveller rental services in Pune for all types of group travel needs. Whether it's for a family trip, corporate event, wedding, or school outing, our Tempo Travellers provide a comfortable and convenient travel experience for groups of various sizes."
    },
    {
        "WhyChooseheading": "Wide Range of Tempo Traveller Sizes",
        "WhyChoosedescription": "Our fleet includes a variety of Tempo Travellers, ranging from 9-seaters to 26-seaters, to accommodate groups of any size. All vehicles are spacious and equipped with comfortable seating, air-conditioning, and ample legroom for a pleasant journey."
    },
    {
        "WhyChooseheading": "Perfect for Group Travel and Short Trips",
        "WhyChoosedescription": "Tempo Travellers are ideal for small to medium-sized groups traveling for short trips, weekend getaways, or local tours. Whether it’s a visit to nearby destinations like Lonavala, Mahabaleshwar, or a city sightseeing tour, we’ve got the perfect vehicle for you."
    },
    {
        "WhyChooseheading": "Experienced and Courteous Drivers",
        "WhyChoosedescription": "Our drivers are experienced, courteous, and knowledgeable about the best routes in and around Pune. They ensure smooth, safe, and timely travel, taking care of all logistics so you can relax and enjoy the journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive and transparent pricing with no hidden charges. Whether you need a Tempo Traveller for a few hours or an entire day, our rental packages are flexible to fit your needs and budget."
    },
    {
        "WhyChooseheading": "24/7 Availability to Suit Your Schedule",
        "WhyChoosedescription": "Our Tempo Traveller services are available 24/7, ensuring you can travel at any time that suits your schedule. Whether you’re planning an early morning departure or a late-night return, we’ve got you covered."
    },
    {
        "WhyChooseheading": "Simple Booking Process with Real-Time Updates",
        "WhyChoosedescription": "Booking a Tempo Traveller is quick and easy through our website or customer support. Once your booking is confirmed, you’ll receive real-time updates, including driver contact details and bus location tracking, ensuring smooth coordination."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Vehicles",
        "WhyChoosedescription": "Our Tempo Travellers are thoroughly cleaned and sanitized before every trip to ensure a hygienic and safe travel environment for your group. Regular maintenance ensures the vehicles are in top condition, providing you with a worry-free journey."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "We offer various payment options such as UPI, credit/debit cards, digital wallets, and cash, making it easy for you to complete your booking securely and conveniently."
    }
]































    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a Tempo Traveller in Pune with Samarth Travels?',
        answer: 'Renting a Tempo Traveller with Samarth Travels is quick and easy. You can book through our website or by contacting our customer support team. Share your travel details such as the number of passengers, pick-up and drop-off points, and travel dates, and we will arrange the perfect Tempo Traveller for you.',
    },
    {
        id: 2,
        question: 'What are the types of Tempo Travellers available for rent in Pune?',
        answer: 'We offer a wide range of Tempo Travellers, including 12-seater, 14-seater, 17-seater, and 20-seater options. You can choose from AC and Non-AC models depending on your preferences and comfort requirements for your journey.',
    },
    {
        id: 3,
        question: 'Are the Tempo Travellers suitable for both short and long-distance travel?',
        answer: 'Yes, our Tempo Travellers are perfect for both short and long-distance travel. They are designed to provide maximum comfort for your group with features like AC, ample legroom, reclining seats, and storage space for luggage.',
    },
    {
        id: 4,
        question: 'What are the rental charges for Tempo Travellers in Pune?',
        answer: 'The rental charges depend on the size of the Tempo Traveller, the duration of the trip, and the distance traveled. For local trips, charges start at ₹25/km for a 12-seater and ₹30/km for a 17-seater. For outstation trips, we charge per day with minimum km usage. Contact us for a customized quote.',
    },
    {
        id: 5,
        question: 'Does the rental include a driver and fuel?',
        answer: 'Yes, all Tempo Traveller rentals include a professional driver and fuel costs. Any additional charges like tolls, parking, or permits will be communicated upfront to ensure transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations for the Tempo Traveller rental?',
        answer: 'Absolutely! We offer flexible options for pickup and drop-off locations based on your schedule and convenience. Whether it is from your home, hotel, or specific venues, we ensure a hassle-free experience.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for Tempo Traveller rentals?',
        answer: 'Yes, Samarth Travels offers 24/7 customer support for all Tempo Traveller rentals. Whether you need assistance with booking, changes to your itinerary, or support during your journey, we are always here to help.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rajesh Kumar',
        role: 'Corporate Executive',
        text: 'We hired a 17-seater AC Tempo Traveller for a corporate trip to Lonavala. The vehicle was clean, comfortable, and well-maintained. The driver was professional and made the journey smooth. Samarth Travels provided excellent service. Highly recommend!',
        image: '/img/testimonial/testi_temptraveller_rajesh.jpg',
    },
    {
        name: 'Ms. Priya Sharma',
        role: 'Family Trip Organizer',
        text: 'Booked a 14-seater Tempo Traveller for a family trip to Mahabaleshwar. The vehicle was spacious and clean, with great comfort features. We had a fantastic time, and the driver was friendly and reliable. I will definitely choose Samarth Travels again for our future trips.',
        image: '/img/testimonial/testi_temptraveller_priya.jpg',
    },
    {
        name: 'Mr. Anand Desai',
        role: 'Tour Leader',
        text: 'We rented a 20-seater Tempo Traveller for a group trip to Goa. The vehicle had ample space, was very comfortable, and came with all the necessary amenities. The trip was smooth, and our team had a great time. Samarth Travels made our journey memorable.',
        image: '/img/testimonial/testi_temptraveller_anand.jpg',
    },
    {
        name: 'Ms. Neha Patel',
        role: 'Wedding Planner',
        text: 'For transporting guests for a wedding event in Pune, we hired a 12-seater Tempo Traveller from Samarth Travels. The service was impeccable, and the vehicle was perfect for our needs. The driver was professional, and everything went off without a hitch.',
        image: '/img/testimonial/testi_temptraveller_neha.jpg',
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
  "name": "Tempo Traveller Rental Services in Pune",
  "image": "https://samarthtravels.com/assets/images/tempo-traveller-rental-pune.jpg", // Replace with the correct image URL
  "description": "Rent Tempo Travellers in Pune for sightseeing, corporate trips, family outings, picnics, group tours, weddings, and outstation travel. Luxury and affordable Tempo Traveller rental services with comfortable seating for a memorable travel experience.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5143"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2200",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/tempo-traveller-rental-services-pune" // Replace with the actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Tempo Traveller Rental Services in Pune | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent Tempo Travellers in Pune for sightseeing, corporate trips, family outings, picnics, group tours, and weddings. Luxury, comfort, and affordable rates on Tempo Traveller rental services by Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="Tempo Traveller rental services in Pune, Tempo Traveller on rent Pune, Rent Tempo Traveller for sightseeing in Pune, Tempo Traveller hire in Pune, Tempo Traveller rental for corporate trips Pune, Tempo Traveller for family travel in Pune, Tempo Traveller hire for picnics in Pune, Tempo Traveller on rent for group tours in Pune, Tempo Traveller for outstation trips Pune, Tempo Traveller on rent for weddings Pune, Luxury Tempo Traveller on rent Pune, Best priced Tempo Traveller rental services Pune" 
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
                            <img src='/images/keyword/86.jpg' alt='img' />
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

export default Tempotravellerrental;