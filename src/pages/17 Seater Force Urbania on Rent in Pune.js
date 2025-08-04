
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Sevntinseaterurbania() {



    const cardData =
    {
        keyword: ' 17 Seater Force Urbania on Rent in Pune',
        heading: 'Samarth Travels:  17 Seater Force Urbania on Rent in Pune',
        headingDescription: 'Samarth Travels offers 17 Seater Force Urbania on rent in Pune, perfect for large group outings, family functions, corporate travel, and outstation trips. Our spacious 17-seater Force Urbania vehicles feature air-conditioning, comfortable push-back seats, and roomy interiors to ensure a smooth and enjoyable journey. With skilled drivers, transparent pricing, and a customer-first approach, Samarth Travels guarantees a safe and convenient travel experience.',

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
        "name": "17 Seater Force Urbania on Rent in Pune",
        "description": "Samarth Travels offers a 17-seater Force Urbania on rent in Pune, perfect for medium-to-large group travel. Whether you're planning a day trip, wedding event, or corporate transfer, this vehicle ensures a comfortable ride with spacious seating, air-conditioning, and a smooth suspension system designed for Indian roads."
    },
    {
        "name": "Force Urbania 17-Seater Rental Pune",
        "description": "Book your Force Urbania 17-seater rental in Pune with Samarth Travels for hassle-free and luxurious group travel. Ideal for family functions, airport transfers, or sightseeing, this vehicle provides ample legroom, modern interiors, and reliable performance for both city and outstation journeys."
    },
    {
        "name": "Rent 17-Seater Force Urbania in Pune",
        "description": "Need a vehicle for your next group outing? Rent a 17-seater Force Urbania in Pune and enjoy a blend of space, style, and safety. Our vans are driven by experienced chauffeurs and come with clean, well-maintained interiors that make long or short trips comfortable for everyone on board."
    },
    {
        "name": "17-Seater Force Urbania Rental Services",
        "description": "Samarth Travels provides end-to-end 17-seater Force Urbania rental services in Pune. From local travel to outstation trips, our services include timely pickup, professional drivers, fuel coverage, and 24/7 customer support. Ideal for travel agencies, event planners, and corporate use."
    },
    {
        "name": "17-Seater Force Urbania for Family Trips Pune",
        "description": "Plan the perfect family getaway with our 17-seater Force Urbania in Pune. With extra space for kids and luggage, climate control, and cushioned seats, this vehicle is perfect for weekend holidays or extended vacations with your loved ones."
    },
    {
        "name": "17-Seater Force Urbania for Group Travel in Pune",
        "description": "Traveling in a group? Samarth Travels offers a 17-seater Force Urbania that fits the whole team comfortably. Ideal for friends, tour groups, or students, this van ensures everyone travels together safely and conveniently across Pune or to outstation locations."
    },
    {
        "name": "Force Urbania 17-Seater Rental for Weddings in Pune",
        "description": "Make your wedding travel arrangements easier with a Force Urbania 17-seater rental from Samarth Travels. Transport your guests, family, or wedding party in a single vehicle—on time and in comfort. We ensure that all your travel logistics for the big day are handled smoothly."
    },
    {
        "name": "Rent Force Urbania 17-Seater for Events",
        "description": "Planning an event in Pune? Rent a 17-seater Force Urbania to move guests or staff efficiently between venues. Our event rental packages are customizable, ensuring that your travel plans align perfectly with your event schedules and requirements."
    },
    {
        "name": "17-Seater Force Urbania for Outstation Trips Pune",
        "description": "Heading out of Pune? Book our 17-seater Force Urbania for outstation trips and enjoy a safe, spacious, and relaxing journey. Whether it’s a weekend in Lonavala or a multi-day trip to Goa, we’ve got your long-distance travel needs covered."
    },
    {
        "name": "Rent Force Urbania 17-Seater for Corporate Trips",
        "description": "Samarth Travels provides premium Force Urbania 17-seater rentals for corporate travel in and around Pune. Perfect for transporting employees, executives, or clients to conferences, offsite meetings, or airport transfers with maximum comfort and efficiency."
    },
    {
        "name": "17-Seater Force Urbania Hire in Pune for Picnics",
        "description": "Planning a group picnic or one-day tour? Hire a 17-seater Force Urbania from Samarth Travels. With plenty of space for food, bags, and fun, it’s the ideal vehicle for school groups, clubs, and corporate teams heading to picnic spots in and around Pune."
    }
],
"tableData": [
    ["17 Seater Force Urbania on Rent in Pune", "Force Urbania 17-Seater Rental Pune"],
    ["Rent 17-Seater Force Urbania in Pune", "17-Seater Force Urbania Rental Services"],
    ["17-Seater Force Urbania for Family Trips Pune", "17-Seater Force Urbania for Group Travel in Pune"],
    ["Force Urbania 17-Seater Rental for Weddings in Pune", "Rent Force Urbania 17-Seater for Events"],
    ["17-Seater Force Urbania for Outstation Trips Pune", "Rent Force Urbania 17-Seater for Corporate Trips"],
    ["17-Seater Force Urbania Hire in Pune for Picnics", ""]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable 17-Seater Force Urbania Rental Service in Pune",
        "WhyChoosedescription": "We provide trusted and professional 17-seater Force Urbania van rental services in Pune. Perfect for group trips, corporate events, family gatherings, or school excursions, our vans ensure a smooth, comfortable, and timely journey with experienced drivers."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable 17-Seater Force Urbania Vans",
        "WhyChoosedescription": "Our 17-seater Force Urbania vans offer ample space for passengers, with comfortable seating, air-conditioning, and plenty of legroom. These vans are designed to accommodate your group comfortably, ensuring a pleasant ride even on longer trips."
    },
    {
        "WhyChooseheading": "Professional Drivers for Safe and Punctual Travel",
        "WhyChoosedescription": "Our experienced and courteous drivers are familiar with the roads in and around Pune, ensuring safe, timely, and hassle-free travel. They prioritize your comfort and safety, making your journey as pleasant as possible."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 17-Seater Rentals",
        "WhyChoosedescription": "We offer affordable and transparent pricing with no hidden charges for our 17-seater Force Urbania rentals. Whether you need the van for a few hours or a full day, we provide flexible rental packages that suit your budget and travel needs."
    },
    {
        "WhyChooseheading": "24/7 Availability for Convenient Scheduling",
        "WhyChoosedescription": "Our 17-seater Force Urbania vans are available 24/7, allowing you to schedule your trip at any time. Whether you're planning an early morning departure or a late-night return, we ensure reliable transportation that fits your timeline."
    },
    {
        "WhyChooseheading": "Effortless Booking and Real-Time Updates",
        "WhyChoosedescription": "Booking your 17-seater Force Urbania rental in Pune is simple through our website or customer service. Once booked, you’ll receive real-time tracking updates, driver contact details, and information on van arrivals to ensure a smooth and organized trip."
    },
    {
        "WhyChooseheading": "Well-Maintained and Sanitized 17-Seater Urbania Vans for Safety",
        "WhyChoosedescription": "Our 17-seater Force Urbania vans are thoroughly cleaned and sanitized before each trip to ensure a safe and hygienic environment for your passengers. We also maintain our vans to the highest standards to ensure smooth performance and comfort."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy Booking",
        "WhyChoosedescription": "We offer a variety of payment methods including UPI, credit/debit cards, digital wallets, and cash, allowing you to easily complete your booking securely and conveniently."
    }
]























    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a 17-seater Force Urbania in Pune with Samarth Travels?',
        answer: 'Renting a 17-seater Force Urbania is easy with Samarth Travels. You can book through our website or by calling our customer support. Provide your travel details, such as the pickup location, date, and the number of passengers, and we will arrange the perfect vehicle for your needs.',
    },
    {
        id: 2,
        question: 'What amenities are available in the 17-seater Force Urbania?',
        answer: 'The 17-seater Force Urbania is equipped with comfortable reclining seats, air conditioning, ample luggage space, USB charging ports, and reading lights. It is perfect for group trips, corporate events, or family outings in and around Pune.',
    },
    {
        id: 3,
        question: 'What are the rental rates for a 17-seater Force Urbania in Pune?',
        answer: 'Rental charges for a 17-seater Force Urbania in Pune start at ₹36/km. We also offer packages such as 4 hours/35 km or 8 hours/80 km, and you can customize your rental for outstation trips with a competitive price structure.',
    },
    {
        id: 4,
        question: 'Is the 17-seater Force Urbania suitable for long-distance travel?',
        answer: 'Yes, the 17-seater Force Urbania is ideal for long-distance travel. It provides a comfortable and smooth ride with features like reclining seats, AC, and ample space for passengers and luggage, making it perfect for extended journeys.',
    },
    {
        id: 5,
        question: 'Can I customize my pickup and drop-off locations for a 17-seater Force Urbania rental?',
        answer: 'Absolutely! Samarth Travels allows you to customize your pickup and drop-off locations based on your schedule and convenience, ensuring a personalized travel experience for you and your group.',
    },
    {
        id: 6,
        question: 'Does the 17-seater Force Urbania rental include a driver and fuel?',
        answer: 'Yes, all our 17-seater Force Urbania rentals include a professional driver and fuel. Any additional charges such as tolls or parking fees are communicated upfront for transparency.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for 17-seater Force Urbania bookings?',
        answer: 'Yes, Samarth Travels provides 24/7 customer support for all bookings, including the 17-seater Force Urbania. Whether you need help with booking or have questions during your trip, our team is available at all times to assist you.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rahul Deshmukh',
        role: 'Event Manager',
        text: 'We rented a 17-seater Force Urbania from Samarth Travels for a corporate team outing. The vehicle was spacious, clean, and well-maintained. The driver was professional, and the entire journey was comfortable. Highly recommend!',
        image: '/img/testimonial/testi_urbania_rahul.jpg',
    },
    {
        name: 'Mrs. Priya Patil',
        role: 'Tour Leader',
        text: 'Booked a 17-seater Force Urbania for a group trip to Lonavala. The van was perfect for our group, with plenty of room and all the amenities needed for a comfortable journey. We will definitely choose Samarth Travels for future trips!',
        image: '/img/testimonial/testi_urbania_priya.jpg',
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
  "name": "17 Seater Force Urbania on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/17-seater-force-urbania-on-rent-pune.jpg",
  "description": "Rent a 17-seater Force Urbania in Pune for group travel, family trips, weddings, corporate events, and outstation tours. Comfortable, luxury vehicle for all types of group transportation needs.",
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
    "price": "45000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/17-seater-force-urbania-on-rent-pune"
  }
};




    return (
        <div>


<Helmet>
  <title>17 Seater Force Urbania on Rent in Pune | Rent Luxury Force Urbania | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 17-seater Force Urbania in Pune for group travel, family trips, weddings, corporate events, and outstation tours. Comfortable, luxury vehicle for all types of group transportation needs." 
  />
  <meta 
    name="keywords" 
    content="17 Seater Force Urbania on rent in Pune, Force Urbania 17-seater rental Pune, Rent 17-seater Force Urbania in Pune, 17-seater Force Urbania rental services, 17-seater Force Urbania for family trips Pune, 17-seater Force Urbania for group travel in Pune, Force Urbania 17-seater rental for weddings in Pune, Rent Force Urbania 17-seater for events, 17-seater Force Urbania for outstation trips Pune, Rent Force Urbania 17-seater for corporate trips, 17-seater Force Urbania hire in Pune for picnics" 
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
                            <img src='/images/keyword/48.jpg' alt='img' />
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

export default Sevntinseaterurbania;