
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Manyseaaterbus() {



    const cardData =
    {
        keyword: '14 17 20 25 Seater Bus on in Pune',
        heading: 'Samarth Travels: 14 17 20 25 Seater Bus on in Pune',
        headingDescription: 'Samarth Travels offers 14, 17, 20, and 25 Seater Buses on rent in Pune, ideal for group travel, weddings, school trips, corporate events, and outstation tours. Our fleet of well-maintained buses is equipped with air-conditioning, push-back seats, and spacious interiors to ensure a comfortable and convenient journey for all group sizes. With experienced drivers, flexible rental options, and transparent pricing, Samarth Travels provides safe, reliable, and cost-effective bus rental services across Pune.',

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
      "name": "14 17 20 25 Seater Bus Hire in Pune",
      "description": "Samarth Travels offers a variety of bus options ranging from 14-seater to 25-seater buses for hire in Pune. Perfect for group outings, picnics, corporate events, and more, our buses come with well-maintained interiors and experienced drivers."
    },
    {
      "name": "Pune to Shirdi 14 17 20 25 Seater Bus on Rent",
      "description": "Travel comfortably from Pune to Shirdi with our 14, 17, 20, or 25-seater buses. We offer reliable and safe bus rental services for pilgrims and group travelers to Shirdi, ensuring a smooth and peaceful journey."
    },
    {
      "name": "Pune to Mahabaleshwar 14 17 20 25 Seater Bus on Rent",
      "description": "Take a trip to the scenic Mahabaleshwar with our 14, 17, 20, and 25-seater buses on rent from Pune. Ideal for family outings, corporate picnics, and group tours, our buses ensure comfort and convenience throughout your journey."
    },
    {
      "name": "Pune to Goa 14 17 20 25 Seater Bus on Rent",
      "description": "Planning a trip to Goa? Hire one of our 14, 17, 20, or 25-seater buses for your journey from Pune to Goa. Perfect for large groups, our buses come with professional drivers and ample luggage space."
    },
    {
      "name": "Pune to Mumbai 14 17 20 25 Seater Bus on Rent",
      "description": "Travel from Pune to Mumbai with ease by renting our 14, 17, 20, or 25-seater buses. Whether it's for business or leisure, our buses offer a comfortable and safe ride with experienced drivers."
    },
    {
      "name": "Pune to Ashtavinayak Darshan 14 17 20 25 Seater Bus on Rent",
      "description": "Experience a smooth and peaceful pilgrimage journey to Ashtavinayak with our 14, 17, 20, or 25-seater buses. Ideal for group travel, our buses ensure your comfort and safety on this sacred trip."
    },
    {
      "name": "Pune to 5 Jyotirlinga 14 17 20 25 Seater Bus on Rent",
      "description": "Plan a spiritual tour to the 5 Jyotirlingas with our 14, 17, 20, or 25-seater buses for rent. Perfect for large groups, our buses are equipped with all the necessary amenities for a comfortable pilgrimage experience."
    },
    {
      "name": "Pune to 5 Shaktipeeth 14 17 20 25 Seater Bus on Rent",
      "description": "Embark on a religious journey to the 5 Shaktipeeths with our 14, 17, 20, and 25-seater buses. Our buses are ideal for group travel, offering comfort, safety, and convenience throughout your sacred trip."
    },
    {
      "name": "Pune to Aurangabad 14 17 20 25 Seater Bus on Rent",
      "description": "Explore the historical city of Aurangabad with our 14, 17, 20, or 25-seater buses on rent from Pune. Our buses are perfect for long-distance travel, with ample space and professional drivers to ensure a smooth journey."
    },
    {
      "name": "Hire Tempo Traveller Minibus",
      "description": "Rent a comfortable tempo traveller or minibus from Samarth Travels for your group travel needs. Our tempo travellers are perfect for both short and long-distance trips, providing comfort and convenience."
    },
    {
      "name": "Bus on Rent in Pune",
      "description": "Samarth Travels provides a variety of buses on rent in Pune, from small minibuses to large coaches. Whether for a corporate event, school trip, or family outing, we have the right bus for your needs."
    },
    {
      "name": "9 Seater Tempo Traveller on Rent in Pune",
      "description": "Rent a 9-seater tempo traveller in Pune for your small group trips. Ideal for family outings, corporate events, and short-distance tours, our tempo travellers offer comfort and convenience."
    },
    {
      "name": "Tempo Traveller 9 Seater Rent Per Km",
      "description": "Get competitive rates for renting a 9-seater tempo traveller per kilometer in Pune. Whether for a short trip or a day tour, our pricing is transparent, and our vehicles are well-maintained."
    }
  ],
  "tableData": [
    ["14 17 20 25 Seater Bus Hire in Pune", "Pune to Shirdi 14 17 20 25 Seater Bus on Rent"],
    ["Pune to Mahabaleshwar 14 17 20 25 Seater Bus on Rent", "Pune to Goa 14 17 20 25 Seater Bus on Rent"],
    ["Pune to Mumbai 14 17 20 25 Seater Bus on Rent", "Pune to Ashtavinayak Darshan 14 17 20 25 Seater Bus on Rent"],
    ["Pune to 5 Jyotirlinga 14 17 20 25 Seater Bus on Rent", "Pune to 5 Shaktipeeth 14 17 20 25 Seater Bus on Rent"],
    ["Pune to Aurangabad 14 17 20 25 Seater Bus on Rent", "Hire Tempo Traveller Minibus"],
    ["Bus on Rent in Pune", "9 Seater Tempo Traveller on Rent in Pune"],
    ["Tempo Traveller 9 Seater Rent Per Km", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Wide Range of Bus Sizes Available in Pune",
        "WhyChoosedescription": "We offer flexible bus rental options in Pune, including 14-seater, 17-seater, 20-seater, and 25-seater buses. Whether you're organizing a family outing, school trip, corporate event, or a wedding, we have the perfect bus size to fit your group's needs."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses for Every Group",
        "WhyChoosedescription": "Our fleet includes various buses with comfortable seating, air-conditioning, and ample legroom. Whether you need a smaller bus for an intimate group or a larger one for a big event, all of our buses provide a smooth and enjoyable journey."
    },
    {
        "WhyChooseheading": "Perfect for Groups of All Sizes",
        "WhyChoosedescription": "From small groups to larger parties, we cater to every need. Our 14-seater buses are perfect for smaller groups, while our 17, 20, and 25-seater buses are ideal for medium and large gatherings. Each bus is designed to offer comfort and space for a relaxed ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our professional drivers are trained for group travel, ensuring safe and timely transportation. They are experienced with navigating Pune’s roads and outstation routes, offering a stress-free experience for passengers."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Bus Rentals",
        "WhyChoosedescription": "We offer competitive pricing for all sizes of buses. Whether you need the bus for a few hours or an entire day, our rental packages are flexible and designed to meet your budget. No hidden costs or surprise charges."
    },
    {
        "WhyChooseheading": "24/7 Availability to Fit Your Schedule",
        "WhyChoosedescription": "We understand that events can happen at any time. That’s why our buses are available 24/7, allowing you to schedule your trip according to your convenience, no matter the time of day or night."
    },
    {
        "WhyChooseheading": "Easy Booking and Real-Time Updates",
        "WhyChoosedescription": "Booking your bus is quick and easy through our online platform or customer service. Once your booking is confirmed, you’ll receive real-time updates, including driver details and bus location tracking, making group logistics seamless."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Serviced Buses",
        "WhyChoosedescription": "We take cleanliness seriously. Every bus is thoroughly sanitized before each trip, and regular maintenance ensures that all vehicles are in top condition for a safe and comfortable ride."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Hassle-Free Transactions",
        "WhyChoosedescription": "We offer various payment methods, including UPI, credit/debit cards, digital wallets, and cash, to make the booking process as convenient as possible."
    }
]


























    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a 14, 17, 20, or 25-seater bus in Pune with Samarth Travels?',
        answer: 'Booking a bus with Samarth Travels is easy. Just contact us through our website or phone, provide your trip details (pickup location, destination, travel date, and group size), and we will suggest the best bus for your group size and travel requirements.',
    },
    {
        id: 2,
        question: 'What types of buses are available in 14, 17, 20, and 25-seater configurations?',
        answer: 'We offer buses in multiple seating configurations: 14-seater, 17-seater, 20-seater, and 25-seater. These buses are ideal for small group trips, corporate outings, weddings, or school trips and come with both AC and non-AC options.',
    },
    {
        id: 3,
        question: 'Are these buses suitable for outstation trips?',
        answer: 'Yes, our 14, 17, 20, and 25-seater buses are perfect for both local and outstation travel. Whether it’s a weekend getaway, a corporate event, or a wedding, these buses provide comfort and reliability for your group.',
    },
    {
        id: 4,
        question: 'What are the rental charges for these buses?',
        answer: 'The rental charges for the 14-seater, 17-seater, 20-seater, and 25-seater buses vary based on the type (AC/Non-AC), trip duration, and distance. For local trips, the charges typically start at ₹32/km, with rates slightly higher for outstation trips. We offer hourly packages as well, such as 8 hours/80 km. Contact us for a personalized quote.',
    },
    {
        id: 5,
        question: 'Do the rentals include a driver and fuel?',
        answer: 'Yes, all our bus rentals include a professional driver and fuel costs. Any additional charges like tolls, parking fees, or permits will be communicated upfront to ensure full transparency.',
    },
    {
        id: 6,
        question: 'Can I customize my pickup and drop-off points for these buses?',
        answer: 'Yes, we allow full customization of your pickup and drop-off points according to your itinerary. Whether it’s from your home, office, or hotel, we will ensure your group is transported smoothly and on time.',
    },
    {
        id: 7,
        question: 'Is 24/7 customer support available for bus rentals?',
        answer: 'Yes, Samarth Travels provides 24/7 customer support for all bus rentals. Whether you need help with booking, scheduling, or last-minute changes, our team is available to assist you at any time.',
    },
];

const testimonials = [
    {
        name: 'Mr. Amit Patil',
        role: 'Corporate HR',
        text: 'We booked a 25-seater AC bus for a corporate retreat in Pune. The bus was spacious, comfortable, and the driver was courteous. Everything went smoothly, and the team had a great experience. Highly recommend Samarth Travels!',
        image: '/img/testimonial/testi_bus25_amit.jpg',
    },
    {
        name: 'Mrs. Radhika Joshi',
        role: 'Event Manager',
        text: 'I rented a 20-seater bus for a wedding event in Pune. The service was excellent, the bus was clean and well-maintained, and the guests were comfortably transported between venues. Samarth Travels provided top-notch service!',
        image: '/img/testimonial/testi_bus20_radhika.jpg',
    },
    {
        name: 'Mr. Rajiv Deshmukh',
        role: 'School Trip Coordinator',
        text: 'We hired a 14-seater bus for a school field trip. The bus was clean, the driver was professional, and the children enjoyed the ride. I will definitely choose Samarth Travels for future trips.',
        image: '/img/testimonial/testi_bus14_rajiv.jpg',
    },
    {
        name: 'Ms. Priya Sharma',
        role: 'Wedding Planner',
        text: 'We used a 17-seater bus for a family wedding. The bus was ideal for our needs—comfortable, with plenty of space for our guests. Samarth Travels made sure everything was on schedule. Highly recommended!',
        image: '/img/testimonial/testi_bus17_priya.jpg',
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
  "name": "14, 17, 20, 25 Seater Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/14-17-25-seater-bus-on-rent-pune.jpg", // Replace with actual image URL
  "description": "Rent 14, 17, 20, and 25 seater buses in Pune for outstation trips to Shirdi, Mahabaleshwar, Goa, Mumbai, Ashtavinayak, Jyotirlinga, and Shaktipeeth. Tempo travellers and minibuses available for group tours, pilgrimages, and corporate travel.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5523"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6100",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/14-17-20-25-seater-bus-on-rent-pune" // Replace with actual URL
  }
};



    return (
        <div>



<Helmet>
  <title>14, 17, 20, 25 Seater Bus on Rent in Pune | AC & Non-AC</title>
  <meta 
    name="description" 
    content="Hire 14, 17, 20, and 25 seater buses in Pune for local and outstation journeys. Best suited for Shirdi, Goa, Mumbai, Mahabaleshwar, Ashtavinayak, Jyotirlinga, and family tours. Affordable AC/Non-AC bus rental by Samarth Travels." 
  />
  <meta 
    name="keywords" 
    content="14 17 20 25 seater bus Hire in Pune, Pune to Shirdi 14 17 20 25 Seater Bus on Rent, pune to mahabaleshwar 14 17 20 25 seater bus on rent, Pune to Goa 14 17 20 25 Seater Bus On Rent, Pune to Mumbai 14 17 20 25 Seater bus On Rent, Pune to Ashtavinayak darshan 14 17 20 25 seater bus on Rent, pune to 5 Jyotirlinga 14 17 20 25 Seater bus on Rent, Pune to 5 Sadeteen Shaktipeeth 14 17 20 25 Seater Bus on Rent, Pune to 5 Aurangabad 14 17 20 25 Seater bus on Rent, Hire Tempo Traveller Minibus, Bus on Rent in Pune, 9 seater Tempo traveller on rent in Pune, Tempo Traveller 9 seater rent per km" 
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
                            <img src='/images/keyword/74.jpg' alt='img' />
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

export default Manyseaaterbus;