
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Twentyseatertraveller() {



    const cardData =
    {
        keyword: '20 Seater Tempo Traveller On Rent in Pune',
        heading: 'Samarth Travels: 20 Seater Tempo Traveller On Rent in Pune',
        headingDescription: 'Samarth Travels offers 20 Seater Tempo Traveller on rent in Pune, perfect for group tours, family trips, corporate outings, and outstation journeys. Our well-maintained 20-seater Tempo Travellers are equipped with air-conditioning, push-back seats, and spacious interiors to ensure a smooth and comfortable ride for all passengers. With professional drivers, flexible rental options, and transparent pricing, Samarth Travels provides safe, reliable, and cost-effective travel solutions in Pune and beyond.',

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
      "name": "20 Seater Tempo Traveller on Rent in Pune",
      "description": "Rent a 20-seater Tempo Traveller in Pune for any occasion, from family trips to corporate events, and enjoy comfortable group travel."
    },
    {
      "name": "Tempo Traveller 20 Seater Rental Pune",
      "description": "We offer Tempo Traveller 20-seater rental services in Pune. Perfect for group tours, picnics, and travel across the city or outstation."
    },
    {
      "name": "Rent 20 Seater Tempo Traveller in Pune",
      "description": "Rent a 20-seater Tempo Traveller in Pune for family vacations, picnics, corporate outings, or any group travel requirement."
    },
    {
      "name": "20 Seater Bus on Rent in Pune",
      "description": "Get a 20-seater bus on rent in Pune for your family trip, corporate outing, or any group travel. Comfortable seating and amenities."
    },
    {
      "name": "Tempo Traveller 20 Seater Hire for Family Trips Pune",
      "description": "Rent a 20-seater Tempo Traveller in Pune for your next family trip. Spacious and comfortable for long or short journeys."
    },
    {
      "name": "20 Seater Tempo Traveller for Group Travel Pune",
      "description": "Ideal for group travel, rent a 20-seater Tempo Traveller in Pune for group tours, events, or leisure trips."
    },
    {
      "name": "Rent 20 Seater Tempo Traveller for Outstation Trips",
      "description": "Rent a 20-seater Tempo Traveller for outstation trips from Pune. Comfortable and spacious for group travel to various destinations."
    },
    {
      "name": "20 Seater Tempo Traveller on Rent for Picnics Pune",
      "description": "Perfect for group picnics, rent a 20-seater Tempo Traveller in Pune for a hassle-free travel experience to your picnic spot."
    },
    {
      "name": "20 Seater Tempo Traveller Hire for Corporate Events",
      "description": "Rent a 20-seater Tempo Traveller for corporate events in Pune. Comfortable and luxurious travel for your employees."
    },
    {
      "name": "20 Seater Tempo Traveller Rental Price Pune",
      "description": "Get affordable pricing for renting a 20-seater Tempo Traveller in Pune for various events, from corporate outings to family trips."
    },
    {
      "name": "20 Seater Tempo Traveller Rental for Weddings",
      "description": "Hire a 20-seater Tempo Traveller for weddings in Pune. Spacious and elegant travel for guests attending the ceremony."
    }
  ],
  "tableData": [
    ["20 Seater Tempo Traveller on Rent in Pune", "Tempo Traveller 20 Seater Rental Pune"],
    ["Rent 20 Seater Tempo Traveller in Pune", "20 Seater Bus on Rent in Pune"],
    ["Tempo Traveller 20 Seater Hire for Family Trips Pune", "20 Seater Tempo Traveller for Group Travel Pune"],
    ["Rent 20 Seater Tempo Traveller for Outstation Trips", "20 Seater Tempo Traveller on Rent for Picnics Pune"],
    ["20 Seater Tempo Traveller Hire for Corporate Events", "20 Seater Tempo Traveller Rental Price Pune"],
    ["20 Seater Tempo Traveller Rental for Weddings", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Comfortable 20-Seater Tempo Traveller on Rent in Pune",
        "WhyChoosedescription": "Our 20-seater Tempo Travellers offer the perfect combination of comfort and space for medium-sized groups. Whether you're planning a family trip, corporate outing, or local sightseeing, this vehicle provides a smooth and enjoyable ride for all passengers."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Seating for Group Travel",
        "WhyChoosedescription": "The 20-seater Tempo Traveller is designed to ensure comfort throughout the journey. With ample legroom, adjustable seating, and air-conditioning, your group can travel in comfort, whether it's a short trip or a long journey."
    },
    {
        "WhyChooseheading": "Perfect for Family and Group Outings",
        "WhyChoosedescription": "Our 20-seater Tempo Traveller is ideal for family vacations, group tours, school trips, or corporate outings. The spacious interior allows for a comfortable and relaxed travel experience, making it the best choice for small to medium-sized groups."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "All our drivers are experienced, professional, and courteous. They are well-versed with local routes and long-distance travel, ensuring a safe and punctual trip for your group while providing you with a hassle-free journey."
    },
    {
        "WhyChooseheading": "Affordable Pricing with No Hidden Charges",
        "WhyChoosedescription": "We offer competitive and transparent pricing for our 20-seater Tempo Traveller rentals. Whether you need the vehicle for a few hours or an entire day, our packages are designed to be cost-effective, with no hidden charges or surprises."
    },
    {
        "WhyChooseheading": "24/7 Availability to Fit Your Schedule",
        "WhyChoosedescription": "Our 20-seater Tempo Travellers are available 24/7 to accommodate your travel plans. Whether you're planning an early morning trip or a late-night return, we ensure that your group is taken care of and arrives on time."
    },
    {
        "WhyChooseheading": "Easy Booking Process with Real-Time Updates",
        "WhyChoosedescription": "Booking a 20-seater Tempo Traveller is quick and simple through our online platform or customer service. After booking, you will receive real-time updates on the vehicle's location, driver contact details, and estimated arrival time, ensuring seamless coordination."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Vehicles",
        "WhyChoosedescription": "We take cleanliness and safety seriously. Our 20-seater Tempo Travellers are thoroughly cleaned, sanitized, and maintained regularly to ensure a hygienic, safe, and comfortable travel experience for your group."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "We offer multiple secure payment options, including UPI, credit/debit cards, digital wallets, and cash, to make your booking process smooth and convenient."
    }
]































    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a 20-seater Tempo Traveller in Pune with Samarth Travels?',
        answer: 'Renting a 20-seater Tempo Traveller with Samarth Travels is easy! You can book your vehicle online through our website or by contacting our customer support team. Just share your travel details such as the number of passengers, trip dates, and pick-up and drop-off locations, and we will arrange a comfortable Tempo Traveller for you.',
    },
    {
        id: 2,
        question: 'What amenities are included in the 20-seater Tempo Traveller?',
        answer: 'Our 20-seater Tempo Traveller is equipped with comfortable seating, air conditioning, ample legroom, and plenty of luggage space. The vehicle also features USB charging ports, clean interiors, and a professional driver to ensure a smooth and enjoyable journey.',
    },
    {
        id: 3,
        question: 'What are the rental charges for a 20-seater Tempo Traveller in Pune?',
        answer: 'The rental charges for a 20-seater Tempo Traveller start at ₹30/km for local trips. For outstation trips, the charges are based on a per-day rate with a minimum distance. Contact us for personalized quotes based on your travel itinerary and requirements.',
    },
    {
        id: 4,
        question: 'Can I customize the pick-up and drop-off locations for the 20-seater Tempo Traveller?',
        answer: 'Yes, we offer complete flexibility with pick-up and drop-off locations. Whether it’s from your home, hotel, or specific venues, we can customize the schedule and locations based on your preferences and convenience.',
    },
    {
        id: 5,
        question: 'Does the rental include a driver and fuel?',
        answer: 'Yes, all rentals for the 20-seater Tempo Traveller include a professional driver and fuel charges. Additional costs like tolls, parking fees, or permits will be discussed and shared upfront for complete transparency.',
    },
    {
        id: 6,
        question: 'Is the 20-seater Tempo Traveller suitable for long-distance trips?',
        answer: 'Yes, the 20-seater Tempo Traveller is perfect for both short and long-distance travel. With comfortable seating, air conditioning, and ample space for luggage, it ensures a relaxing journey even on longer trips.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for 20-seater Tempo Traveller rentals?',
        answer: 'Yes, Samarth Travels provides 24/7 customer support for all rentals, including the 20-seater Tempo Traveller. Our team is always available to assist you with booking, itinerary changes, or any other needs you may have during your trip.',
    },
];

const testimonials = [
    {
        name: 'Mr. Deepak Kumar',
        role: 'Corporate Manager',
        text: 'We hired a 20-seater Tempo Traveller for a corporate outing in Pune. The vehicle was clean, spacious, and equipped with all the necessary amenities for a comfortable ride. The driver was professional and courteous. Samarth Travels made our trip seamless and enjoyable.',
        image: '/img/testimonial/testi_temptraveller_deepak.jpg',
    },
    {
        name: 'Ms. Shweta Mehta',
        role: 'Family Trip Coordinator',
        text: 'Booked a 20-seater Tempo Traveller for a family trip to Mahabaleshwar. The vehicle was comfortable, and there was plenty of space for both passengers and luggage. The driver was friendly and punctual. It was a fantastic experience, and I highly recommend Samarth Travels!',
        image: '/img/testimonial/testi_temptraveller_shweta.jpg',
    },
    {
        name: 'Mr. Rajesh Soni',
        role: 'Tour Organizer',
        text: 'We rented a 20-seater Tempo Traveller for a group tour to Goa. The vehicle was spacious, clean, and well-maintained. It was a comfortable journey for everyone, and the driver was very professional. Samarth Travels made the entire process hassle-free and smooth.',
        image: '/img/testimonial/testi_temptraveller_rajesh.jpg',
    },
    {
        name: 'Ms. Anjali Patil',
        role: 'Wedding Planner',
        text: 'For a wedding event in Pune, I rented a 20-seater Tempo Traveller to transport guests between venues. The vehicle was perfect for the occasion, offering comfort and space. The service provided by Samarth Travels was excellent, and I will definitely book again for future events.',
        image: '/img/testimonial/testi_temptraveller_anjali.jpg',
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
  "name": "20 Seater Tempo Traveller On Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/20-seater-tempo-traveller-rent-pune.jpg", // Replace with the correct image URL
  "description": "Rent a 20 Seater Tempo Traveller in Pune for family trips, group travel, corporate events, outstation trips, picnics, and weddings. Affordable rates and luxury comfort for a memorable journey with Samarth Travels.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6231"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/20-seater-tempo-traveller-on-rent-pune" // Replace with the actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>20 Seater Tempo Traveller On Rent in Pune | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 20 Seater Tempo Traveller in Pune for family trips, group travel, corporate events, outstation trips, picnics, and weddings. Affordable rates and luxury comfort for a memorable journey with Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="20 Seater Tempo Traveller on rent in Pune, Tempo Traveller 20 seater rental Pune, Rent 20 Seater Tempo Traveller in Pune, 20 seater bus on rent in Pune, Tempo Traveller 20 seater hire for family trips Pune, 20 seater Tempo Traveller for group travel Pune, Rent 20 seater Tempo Traveller for outstation trips, 20 seater Tempo Traveller on rent for picnics Pune, 20 Seater Tempo Traveller hire for corporate events, 20 Seater Tempo Traveller rental price Pune, 20 Seater Tempo Traveller rental for weddings" 
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
                            <img src='/images/keyword/87.jpg' alt='img' />
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

export default Twentyseatertraveller;