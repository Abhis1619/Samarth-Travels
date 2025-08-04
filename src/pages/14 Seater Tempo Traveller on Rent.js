
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Fourtyseatertempotraveller() {



    const cardData =
    {
        keyword: '14 Seater Tempo Traveller on Rent',
        heading: 'Samarth Travels: 14 Seater Tempo Traveller on Rent',
        headingDescription: 'Samarth Travels offers 14 Seater Tempo Traveller on rent, perfect for family trips, group tours, pilgrimages, and outstation journeys. Our well-maintained 14-seater Tempo Travellers come equipped with air-conditioning, push-back seats, and spacious interiors to provide a comfortable and enjoyable travel experience. With trained drivers, affordable rates, and a focus on customer satisfaction, Samarth Travels ensures a smooth and hassle-free journey every time.',

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
      "name": "14 Seater Bus on Rent in Pune",
      "description": "Samarth Travels offers 14-seater buses on rent in Pune, ideal for small group outings, picnics, and corporate travel. Enjoy a comfortable journey with experienced drivers and well-maintained vehicles."
    },
    {
      "name": "14 Seater Tempo Traveller on Rent Pimpri Chinchwad",
      "description": "Rent a 14-seater tempo traveller in Pimpri Chinchwad with Samarth Travels for local or outstation trips. Perfect for family tours and business travel with spacious interiors and smooth rides."
    },
    {
      "name": "Hire 14 Seater Minibus for Picnic",
      "description": "Plan your next picnic or day outing with our 14-seater minibuses. Samarth Travels ensures safe, comfortable, and convenient travel for small groups across Pune and surrounding areas."
    },
    {
      "name": "14 Seater Bus Rental in Pune",
      "description": "Looking for a 14-seater bus rental in Pune? Samarth Travels offers affordable rental packages with AC and non-AC options for group travel, weddings, and corporate events."
    },
    {
      "name": "13 Seater Bus Hire in Pune",
      "description": "Hire a 13-seater bus in Pune for family trips, school tours, or office travel. Our buses are well-maintained, clean, and driven by professional chauffeurs for your safety and convenience."
    },
    {
      "name": "14 Seater Mini Bus Rental for Corporate",
      "description": "Organize stress-free corporate travel with our 14-seater mini bus rental in Pune. Ideal for team outings, airport transfers, and meetings with reliable service and timely pickups."
    },
    {
      "name": "14 Seater Tempo Traveller Per Km Rate in Pune",
      "description": "Samarth Travels provides transparent per kilometer rates for 14-seater tempo travellers in Pune. Choose us for economical and flexible rental options for your journey."
    },
    {
      "name": "14 Seater AC Bus Rental for Picnic",
      "description": "Make your picnic trips more enjoyable with our air-conditioned 14-seater buses. With push-back seats and ample storage, we offer the perfect blend of comfort and value."
    },
    {
      "name": "13 Seater Non AC Bus on Rent",
      "description": "Looking for a budget-friendly option? Rent a 13-seater non-AC bus from Samarth Travels for short-distance travel or economical group transport needs in and around Pune."
    },
    {
      "name": "Pune to Goa 14 Seater AC Bus Rental",
      "description": "Travel in comfort from Pune to Goa with our 14-seater AC bus rental. Ideal for group vacations, beach holidays, or weekend getaways with friends and family."
    },
    {
      "name": "Pune to Mahabaleshwar 14 Seater Tempo Traveller",
      "description": "Plan your hill station retreat with our 14-seater tempo traveller service from Pune to Mahabaleshwar. Enjoy scenic views and a relaxed ride with Samarth Travels."
    },
    {
      "name": "Pune to Shirdi 14 Seater Bus on Rent",
      "description": "Book a 14-seater bus from Pune to Shirdi for pilgrimages and temple visits. Our services ensure punctuality, safety, and comfort for all age groups."
    },
    {
      "name": "Pune to Shirdi Tempo Traveller Hire",
      "description": "Hire a tempo traveller from Pune to Shirdi with Samarth Travels. Suitable for family groups or spiritual tours with spacious seating and experienced drivers."
    },
    {
      "name": "Pune Airport to Lonavala Tempo Traveller on Rent",
      "description": "Heading to Lonavala from Pune Airport? Our tempo traveller rental offers smooth and convenient transfers for small groups looking for quick getaways."
    },
    {
      "name": "Pune Airport to Shirdi Tempo Traveller on Rent",
      "description": "Samarth Travels provides direct tempo traveller rentals from Pune Airport to Shirdi. Perfect for pilgrim groups seeking a reliable and direct transport option."
    },
    {
      "name": "14 Seater Tempo Traveller Rate Per Km in Pune",
      "description": "Know your travel costs upfront with our per km rate for 14-seater tempo travellers in Pune. Ideal for both short and long journeys with transparent billing."
    },
    {
      "name": "14 Seater Tempo Traveller Hire in Pimpri Chinchwad",
      "description": "Residents of Pimpri Chinchwad can now enjoy easy 14-seater tempo traveller rentals for weddings, tours, and business travel. Quick booking and on-time services guaranteed."
    }
  ],
  "tableData": [
    ["14 Seater Bus on Rent in Pune", "14 Seater Tempo Traveller on Rent Pimpri Chinchwad"],
    ["Hire 14 Seater Minibus for Picnic", "14 Seater Bus Rental in Pune"],
    ["13 Seater Bus Hire in Pune", "14 Seater Mini Bus Rental for Corporate"],
    ["14 Seater Tempo Traveller Per Km Rate in Pune", "14 Seater AC Bus Rental for Picnic"],
    ["13 Seater Non AC Bus on Rent", "Pune to Goa 14 Seater AC Bus Rental"],
    ["Pune to Mahabaleshwar 14 Seater Tempo Traveller", "Pune to Shirdi 14 Seater Bus on Rent"],
    ["Pune to Shirdi Tempo Traveller Hire", "Pune Airport to Lonavala Tempo Traveller on Rent"],
    ["Pune Airport to Shirdi Tempo Traveller on Rent", "14 Seater Tempo Traveller Rate Per Km in Pune"],
    ["14 Seater Tempo Traveller Hire in Pimpri Chinchwad", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable 14 Seater Tempo Traveller Rental in Pune",
        "WhyChoosedescription": "We provide dependable 14 seater Tempo Traveller rentals in Pune for family trips, corporate outings, airport transfers, and outstation tours. Enjoy a stress-free group travel experience with professional service and on-time pickups."
    },
    {
        "WhyChooseheading": "Perfect for Medium-Sized Groups",
        "WhyChoosedescription": "The 14 seater Tempo Traveller is ideal for groups like families, office teams, or tourist groups looking for comfort and convenience. It offers a great balance between capacity and ease of mobility, even on narrow or hilly roads."
    },
    {
        "WhyChooseheading": "Comfortable Interiors with Modern Amenities",
        "WhyChoosedescription": "Our 14 seater Tempo Travellers come with push-back seats, air-conditioning, ample legroom, and clean interiors. Enjoy a smooth ride with plenty of space for both passengers and luggage."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Smooth Travel",
        "WhyChoosedescription": "Our professional drivers are trained, courteous, and experienced in long-distance and city travel. They prioritize your safety and ensure timely arrival at every destination."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive and transparent rates for our 14 seater Tempo Traveller rentals. Choose from hourly, full-day, or outstation packages with no hidden charges—perfect for every budget."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Travel Plans",
        "WhyChoosedescription": "Whether it’s an early morning departure or a late-night journey, our Tempo Traveller rentals are available 24/7 to match your travel schedule without delays or cancellations."
    },
    {
        "WhyChooseheading": "Quick Booking and Real-Time Tracking",
        "WhyChoosedescription": "Booking a 14 seater Tempo Traveller is simple via our website or customer care. After confirmation, you’ll receive real-time tracking, driver contact details, and trip updates for smooth coordination."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Vehicles",
        "WhyChoosedescription": "Every Tempo Traveller is cleaned and sanitized before each trip. Regular maintenance ensures reliability, safety, and a hygienic environment for all passengers."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy Booking",
        "WhyChoosedescription": "We offer flexible payment options including UPI, credit/debit cards, digital wallets, and cash, making it easy and secure to book your ride."
    }
]
























    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a 14-seater Tempo Traveller in Pune with Samarth Travels?',
        answer: 'Booking a 14-seater Tempo Traveller with Samarth Travels is simple. Contact us via our website or call us with your travel details, including pickup location, destination, date, and group size. We’ll confirm your booking quickly and efficiently.',
    },
    {
        id: 2,
        question: 'What features are included in the 14-seater Tempo Traveller?',
        answer: 'Our 14-seater Tempo Traveller comes with comfortable pushback seats, air conditioning (optional), ample legroom, charging points, and sufficient luggage space. It’s ideal for group travel, tours, and family trips.',
    },
    {
        id: 3,
        question: 'Is the 14-seater Tempo Traveller suitable for outstation travel?',
        answer: 'Yes, the 14-seater is perfect for both local and outstation travel. Whether you’re planning a weekend getaway, pilgrimage, or corporate trip, our vehicle ensures a smooth and safe journey.',
    },
    {
        id: 4,
        question: 'What are the rental charges for a 14-seater Tempo Traveller?',
        answer: 'Rental charges start from ₹30/km for Non AC and ₹32–₹35/km for AC variants. We also offer packages like 8 hours/80 km and custom pricing for multi-day or long-distance trips. Contact us for a personalized quote.',
    },
    {
        id: 5,
        question: 'Does the rental include driver and fuel?',
        answer: 'Yes, our pricing includes a professional driver and fuel costs. Any extra charges such as tolls, parking, and permits will be communicated at the time of booking to avoid surprises.',
    },
    {
        id: 6,
        question: 'Can I choose my pickup and drop-off points?',
        answer: 'Absolutely! You can choose pickup and drop-off points that are convenient for your group—whether it’s your home, hotel, office, or any custom location in or around Pune.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for Tempo Traveller bookings?',
        answer: 'Yes, Samarth Travels offers 24/7 customer support. Whether you need help with booking, route changes, or emergency assistance during your trip, our team is always available to assist.',
    },
];

const testimonials = [
    {
        name: 'Mr. Ajay Shelar',
        role: 'Family Trip Organizer',
        text: 'We rented a 14-seater Tempo Traveller for a family trip to Mahabaleshwar. The van was clean and very comfortable. The driver was experienced and polite. Great service from Samarth Travels!',
        image: '/img/testimonial/testi_tt14_ajay.jpg',
    },
    {
        name: 'Ms. Priya Kulkarni',
        role: 'Corporate Coordinator',
        text: 'Booked a 14-seater Tempo Traveller for an office outing. The vehicle arrived on time and was in great condition. Everyone had a comfortable ride. Highly recommend Samarth Travels!',
        image: '/img/testimonial/testi_tt14_priya.jpg',
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
  "name": "14 Seater Tempo Traveller on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/14-seater-tempo-traveller-on-rent-pune.jpg", // Replace with actual image URL
  "description": "Book a 14 seater Tempo Traveller on rent in Pune for picnics, corporate trips, family outings, and outstation tours to Mahabaleshwar, Goa, Shirdi, and more. AC and Non-AC options available with affordable per km rates.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5287"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5400",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/14-seater-tempo-traveller-on-rent" // Replace with actual page URL
  }
};





    return (
        <div>

<Helmet>
  <title>14 Seater Tempo Traveller on Rent in Pune | AC & Non-AC Travel</title>
  <meta 
    name="description" 
    content="Hire 14 seater Tempo Traveller in Pune for outstation tours, airport transfers, corporate travel, and family trips. Available in Pimpri Chinchwad, Kharadi, and Hadapsar. AC and Non-AC options at the best per km rate." 
  />
  <meta 
    name="keywords" 
    content="14 Seater Bus on Rent in Pune, 14 seater tempo traveller on rent Pimpri Chinchwad, Hire 14 Seater Minibus for Picnic, 14 Seater bus rental in Pune, 13 Seater bus hire in Pune, 14 seater mini bus rental for Corporate, 14 seater tempo traveller per km rate in Pune, 14 Seater Ac Bus Rental for Picnic, 13 Seater Non Ac Bus on rent, Pune to Goa 14 Seater ac bus rental, Pune to Mahabaleshwar 14 Seater tempo Traveller, Pune to shirdi 14 seater bus on rent, Pune to Shirdi Tempo Traveller Hire, Pune Airport to Lonavala Tempo Traveller on Rent, Pune Airport to Shirdi Tempo Traveller on Rent, 14 seater tempo traveller rate per km in pune, 14 seater tempo traveller hire in pimpri chinchwad" 
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
                            <img src='/images/keyword/72.jpg' alt='img' />
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

export default Fourtyseatertempotraveller;