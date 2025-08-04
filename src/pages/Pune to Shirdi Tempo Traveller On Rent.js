
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Punetoshirditempotraveller() {



    const cardData =
    {
        keyword: 'Pune to Shirdi Tempo Traveller On Rent',
        heading: 'Samarth Travels: Pune to Shirdi Tempo Traveller On Rent',
        headingDescription: 'Samarth Travels offers Tempo Traveller on rent from Pune to Shirdi, ideal for pilgrimages, family visits, and group tours to the holy town. Our well-maintained Tempo Travellers come with air-conditioning, push-back seats, and spacious interiors to ensure a comfortable and peaceful journey. With courteous drivers, transparent pricing, and a commitment to timely service, Samarth Travels makes your Pune to Shirdi trip safe, smooth, and spiritually fulfilling.',

        top: 'Top Places to Visit in Pune Outstation with Samarth Travels',

   "topPlaces": [
    {
      "title": "Sai Baba Samadhi Mandir",
      "description": "The Samadhi Mandir is the final resting place of Shri Sai Baba and the spiritual heart of Shirdi. Housing a life-sized marble idol of Sai Baba, the temple attracts millions of devotees annually. The serene atmosphere and daily rituals offer a profound spiritual experience. :contentReference[oaicite:1]{index=1}"
    },
    {
      "title": "Dwarkamai",
      "description": "Dwarkamai is a mosque where Sai Baba spent a significant part of his life. It houses the sacred fire (Dhuni) lit by Baba, which continues to burn to this day. The site reflects Baba's teachings of unity and love. :contentReference[oaicite:2]{index=2}"
    },
    {
      "title": "Gurusthan",
      "description": "Gurusthan, meaning 'place of the guru,' is where Sai Baba was first spotted as a young ascetic. Devotees believe that lighting incense sticks here can cure ailments. :contentReference[oaicite:3]{index=3}"
    },
    {
      "title": "Chavadi",
      "description": "Chavadi is the place where Sai Baba used to spend every alternate night during the last decade of his life. The site holds historical significance and is part of the ceremonial processions during festivals. :contentReference[oaicite:4]{index=4}"
    },
    {
      "title": "Dixit Wada Museum",
      "description": "Located within the temple complex, the Dixit Wada Museum showcases personal belongings of Sai Baba, including his clothes, utensils, and photographs, offering insights into his simple lifestyle. :contentReference[oaicite:5]{index=5}"
    },
    {
      "title": "Lendi Baug",
      "description": "Lendi Baug is a garden where Sai Baba used to meditate and water plants daily. The tranquil environment provides a peaceful retreat for visitors. :contentReference[oaicite:6]{index=6}"
    },
    {
      "title": "Sai Teerth Devotional Theme Park",
      "description": "Sai Teerth is India's first devotional theme park, offering immersive experiences like 5D shows and replicas of major Indian temples. It's an engaging way to learn about Sai Baba's life and teachings. :contentReference[oaicite:7]{index=7}"
    },
    {
      "title": "Sai Heritage Village",
      "description": "Sai Heritage Village is a cultural theme park that recreates scenes from Sai Baba's life using life-size statues. It provides a visual journey through his teachings and the era he lived in. :contentReference[oaicite:8]{index=8}"
    },
    {
      "title": "Wet N Joy Water Park",
      "description": "Wet N Joy is a family-friendly water park in Shirdi, offering a range of water rides and attractions. It's a great place to relax and have fun after visiting the spiritual sites. :contentReference[oaicite:9]{index=9}"
    },
    {
      "title": "Shani Shingnapur",
      "description": "Located about 70 km from Shirdi, Shani Shingnapur is a village known for its temple dedicated to Lord Shani. The village is unique for its houses without doors, symbolizing the residents' faith in the deity's protection. :contentReference[oaicite:10]{index=10}"
    }
  ],

"services": [
    {
        "name": "Pune to Shirdi Tempo Traveller",
        "description": "Travel comfortably from Pune to Shirdi with Samarth Travels' dedicated Tempo Traveller service. Whether you're planning a family pilgrimage, group tour, or a spiritual journey, our Tempo Travellers offer spacious seating, air-conditioning, and professional drivers who ensure a smooth, safe trip to Sai Baba's holy town."
    },
    {
        "name": "Pune to Shirdi Tempo Traveller on Rent",
        "description": "Samarth Travels offers well-maintained Tempo Travellers on rent from Pune to Shirdi at affordable rates. Choose from 13-seater, 14-seater, or 17-seater options with comfortable interiors, push-back seats, and ample luggage space — perfect for religious tours and weekend trips."
    },
    {
        "name": "Pune to Shirdi Mini Bus Rent",
        "description": "Planning a larger group trip to Shirdi? Rent a mini bus from Samarth Travels. Our mini buses, ranging from 20 to 26 seats, are ideal for spiritual group tours and family gatherings. Enjoy a relaxing ride with AC comfort and expert drivers familiar with Shirdi routes."
    },
    {
        "name": "Bus Hire for Pune to Shirdi",
        "description": "Need a reliable bus for your next pilgrimage? Hire a bus from Pune to Shirdi with Samarth Travels. Our fleet includes clean, spacious, and fully insured vehicles, ideal for religious institutions, families, or corporate spiritual getaways."
    },
    {
        "name": "Pune Airport to Shirdi Tempo Traveller",
        "description": "Flying into Pune and heading to Shirdi? We provide direct Tempo Traveller pickup from Pune Airport to Shirdi. With timely service, clean vehicles, and courteous drivers, your group can begin the pilgrimage with ease and comfort."
    },
    {
        "name": "Pune to Shani Shingnapur Tempo Traveller",
        "description": "Extend your pilgrimage from Shirdi to Shani Shingnapur with our Pune to Shani Shingnapur Tempo Traveller rentals. Our drivers are familiar with temple timings and routes, making your darshan experience smooth and stress-free."
    },
    {
        "name": "Pune to Shani Shingnapur Bus on Rent",
        "description": "Book a bus for a comfortable journey from Pune to Shani Shingnapur. Our buses come with ample legroom, AC, and experienced drivers to ensure a safe and peaceful religious trip for groups of all sizes."
    },
    {
        "name": "Pune to Shirdi 14 Seater Bus on Rent",
        "description": "Rent a 14-seater bus from Pune to Shirdi for small to medium-sized groups. These compact yet comfortable vehicles offer the right balance between affordability and convenience for a smooth pilgrimage journey."
    },
    {
        "name": "Pune to Shirdi 17 Seater on Rent",
        "description": "Our 17-seater Tempo Travellers are perfect for family or community trips to Shirdi. Enjoy AC comfort, cushioned seats, and trained drivers who understand the needs of devotional travel from Pune to Shirdi."
    },
    {
        "name": "Pune to Ahmednagar Tempo Traveller on Rent",
        "description": "Samarth Travels offers Tempo Traveller rentals from Pune to Ahmednagar for religious trips, personal visits, or local business travel. Clean vehicles and timely service make it the best choice for comfortable group transport."
    },
    {
        "name": "Pune to Ajanta Ellora Tempo Traveller on Rent",
        "description": "Explore the UNESCO World Heritage sites of Ajanta and Ellora with Samarth Travels' Tempo Traveller rentals from Pune. These vehicles are ideal for long-distance sightseeing trips, offering a relaxing journey with plenty of space and comfort."
    },
    {
        "name": "17 Seater Tempo Traveller on Rent in Pune",
        "description": "Need a 17-seater Tempo Traveller in Pune? Samarth Travels offers flexible rental plans with professional service, perfect for outstation trips, family functions, or sightseeing tours."
    },
    {
        "name": "Pune to Shirdi Tempo Traveller Package",
        "description": "Our Pune to Shirdi Tempo Traveller package includes round-trip travel, waiting time, and optional add-ons like Shani Shingnapur darshan. Book with Samarth Travels for a seamless pilgrimage experience without the hassle of coordinating logistics."
    },
    {
        "name": "Samarth Travels for Pune to Shirdi",
        "description": "Samarth Travels is your trusted partner for Pune to Shirdi Tempo Traveller services. With over a decade of experience in devotional and group travel, we provide dependable, comfortable, and punctual services to make your journey spiritually fulfilling."
    }
],
"tableData": [
    ["Pune to Shirdi Tempo Traveller", "Pune to Shirdi Tempo Traveller on Rent"],
    ["Pune to Shirdi Mini Bus Rent", "Bus Hire for Pune to Shirdi"],
    ["Pune Airport to Shirdi Tempo Traveller", "Pune to Shani Shingnapur Tempo Traveller"],
    ["Pune to Shani Shingnapur Bus on Rent", "Pune to Shirdi 14 Seater Bus on Rent"],
    ["Pune to Shirdi 17 Seater on Rent", "Pune to Ahmednagar Tempo Traveller on Rent"],
    ["Pune to Ajanta Ellora Tempo Traveller on Rent", "17 Seater Tempo Traveller on Rent in Pune"],
    ["Pune to Shirdi Tempo Traveller Package", "Samarth Travels for Pune to Shirdi"]
],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Tempo Traveller Hire for Pune to Shirdi Trip",
        "WhyChoosedescription": "We provide trusted Tempo Traveller rental services for your Pune to Shirdi trip. Whether you're traveling for a pilgrimage, family trip, or group outing, our Tempo Travellers ensure a safe, comfortable, and timely journey to Shirdi."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Tempo Travellers for Your Shirdi Journey",
        "WhyChoosedescription": "Our Tempo Travellers offer comfortable and spacious seating, with air-conditioning, plenty of legroom, and cushioned seats. These features ensure that your group enjoys a relaxing journey from Pune to Shirdi, making the trip both pleasant and stress-free."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Timely Travel to Shirdi",
        "WhyChoosedescription": "Our skilled drivers are experienced with the Pune to Shirdi route and prioritize safety, punctuality, and comfort. They ensure smooth travel and take care of all the logistics, allowing you to enjoy the journey without worry."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Pune to Shirdi Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for Tempo Traveller rentals for your Pune to Shirdi trip. There are no hidden charges, and we offer flexible rental packages to match your budget and travel requirements."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Scheduling",
        "WhyChoosedescription": "Our Tempo Traveller services are available 24/7, so you can plan your trip to Shirdi at your convenience. Whether you need an early morning departure or a late-night return, we provide reliable and timely service whenever you need it."
    },
    {
        "WhyChooseheading": "Easy Booking and Real-Time Updates for Smooth Travel",
        "WhyChoosedescription": "Booking your Tempo Traveller for the Pune to Shirdi trip is simple and hassle-free. Once confirmed, you'll receive real-time updates, tracking information, and driver contact details, ensuring smooth coordination and peace of mind during your journey."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Tempo Travellers for Safety and Comfort",
        "WhyChoosedescription": "All our Tempo Travellers are regularly cleaned, sanitized, and maintained to the highest standards. We prioritize your comfort and hygiene, providing a safe and pleasant travel experience for your trip to Shirdi."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy and Secure Booking",
        "WhyChoosedescription": "We offer multiple payment options, including UPI, credit/debit cards, digital wallets, and cash, making it convenient and secure for you to book your Tempo Traveller for your Pune to Shirdi trip."
    }
]




























    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a Tempo Traveller from Pune to Shirdi with Samarth Travels?',
        answer: 'You can easily rent a Tempo Traveller for your Pune to Shirdi trip by visiting our website or calling our customer service. Just share your travel date, passenger count, and pickup location, and we’ll provide a reliable vehicle with an experienced driver for a smooth journey.',
    },
    {
        id: 2,
        question: 'What Tempo Traveller options are available for Pune to Shirdi?',
        answer: 'We offer a variety of Tempo Travellers including 12-seater, 15-seater, 17-seater, and 20+ seater options. All our vehicles are clean, well-maintained, and come with pushback seats, air conditioning, and ample luggage space.',
    },
    {
        id: 3,
        question: 'What are the rental charges for a Tempo Traveller from Pune to Shirdi?',
        answer: 'Rental rates for Pune to Shirdi trips start from ₹30/km, depending on the vehicle size and duration of the trip. We also offer full-day and return-trip packages for more convenience and value.',
    },
    {
        id: 4,
        question: 'How long does the trip from Pune to Shirdi take by Tempo Traveller?',
        answer: 'The journey from Pune to Shirdi usually takes around 4.5 to 5.5 hours, depending on traffic and road conditions. Our experienced drivers ensure a safe and comfortable ride throughout.',
    },
    {
        id: 5,
        question: 'Is the Tempo Traveller comfortable for elderly passengers on long journeys?',
        answer: 'Yes, our Tempo Travellers are equipped with recliner seats, air conditioning, and smooth suspension—making them highly suitable for elderly passengers or families with children.',
    },
    {
        id: 6,
        question: 'Does the rental include a driver and fuel charges?',
        answer: 'Yes, all rentals include a trained driver and fuel. Additional charges like tolls, inter-state permits, and parking fees are shared in advance for full transparency.',
    },
    {
        id: 7,
        question: 'Is support available during the trip?',
        answer: 'Yes, Samarth Travels provides 24/7 customer support. Whether you need help with route changes, emergency requests, or any other assistance during your journey, we’re just a call away.',
    },
];

const testimonials = [
    {
        name: 'Mr. Prakash Joshi',
        role: 'Pilgrimage Organizer',
        text: 'We booked a 15-seater Tempo Traveller for our Pune to Shirdi trip. The vehicle was punctual, clean, and the journey was comfortable. The driver was courteous and drove safely. Great experience with Samarth Travels.',
        image: '/img/testimonial/testi_tempo_prakash.jpg',
    },
    {
        name: 'Mrs. Leena Sawant',
        role: 'Family Head',
        text: 'Our family visit to Shirdi was made easy by Samarth Travels. The 12-seater Tempo Traveller was spacious, clean, and well-maintained. We’ll definitely book with them again for future trips.',
        image: '/img/testimonial/testi_tempo_leena.jpg',
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
  "name": "Pune to Shirdi Tempo Traveller On Rent",
  "image": "https://samarthtravels.com/assets/images/pune-to-shirdi-tempo-traveller.jpg",
  "description": "Book a Tempo Traveller from Pune to Shirdi with Samarth Travels. Comfortable 14-seater and 17-seater AC Tempo Travellers available for pilgrimages, group tours, and airport pickups. Extend your journey to Shani Shingnapur, Ahmednagar, and Ajanta Ellora.",
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
    "price": "4800",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/pune-to-shirdi-tempo-traveller"
  }
};




    return (
        <div>

<Helmet>
  <title>Pune to Shirdi Tempo Traveller on Rent | 14 & 17-Seater | Samarth Travels</title>
  <meta 
    name="description" 
    content="Hire a Tempo Traveller from Pune to Shirdi with Samarth Travels. Choose from 14-seater or 17-seater AC options for pilgrimages, family groups, and Shani Shingnapur tours. Airport pickup also available." 
  />
  <meta 
    name="keywords" 
    content="Pune to Shirdi Tempo Traveller, Pune to Shirdi Tempo Traveller on Rent, Pune to Shirdi Mini Bus Rent, Bus Hire for Pune to Shirdi, Pune Airport to Shirdi Tempo Traveller, Pune to Shani Shingnapur Tempo Traveller, Pune to Shani Shingnapur Bus on Rent, Pune to Shirdi 14 Seater Bus on Rent, Pune to Shirdi 17 Seater on Rent, Pune to Ahmednagar Tempo Traveller on Rent, Pune to Ajanta Ellora Tempo Traveller on Rent, 17 Seater Tempo Traveller on Rent in Pune, Pune to Shirdi Tempo Traveller Package, Samarth Travels for Pune to Shirdi" 
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
                            <img src='/images/keyword/55.jpg' alt='img' />
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

export default Punetoshirditempotraveller;