
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Sevantinseatertempotraveller() {



    const cardData =
    {
        keyword: '17 Seater Tempo Traveller on Rent in Pune',
        heading: 'Samarth Travels: 17 Seater Tempo Traveller on Rent in Pune',
        headingDescription: 'Samarth Travels offers 17 seater Tempo Traveller on rent in Pune, ideal for large family outings, corporate tours, and group travel. Our spacious, air-conditioned Tempo Travellers come with push-back seats and ample luggage space for a comfortable journey. With experienced drivers, transparent pricing, and on-time service, Samarth Travels ensures a smooth and hassle-free travel experience.',

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
    "name": "Rent 17 Seater Tempo Traveller in Pune",
    "description": "Rent a 17-seater Tempo Traveller in Pune with Samarth Travels for safe, spacious, and comfortable group journeys. Ideal for local and outstation travel with friends, family, or teams."
  },
  {
    "name": "17 Seater Luxury Tempo Traveller Rental Pune",
    "description": "Experience premium travel with our luxury 17-seater Tempo Traveller rentals in Pune. Best suited for executive travel, wedding events, and VIP guests who expect more than just a ride."
  },
  {
    "name": "Affordable 17 Seater Tempo Traveller Hire Pune",
    "description": "Enjoy reliable group transportation without straining your budget. Our affordable 17-seater Tempo Travellers offer great value with clean interiors and trained drivers."
  },
  {
    "name": "17 Seater AC Tempo Traveller for Group Travel Pune",
    "description": "Beat the heat with our AC 17-seater Tempo Traveller rentals. Whether it’s a summer trip or day-long tour, these air-conditioned vehicles ensure comfortable group journeys."
  },
  {
    "name": "Tempo Traveller 17 Seater on Rent for Outstation Tours from Pune",
    "description": "Planning an outstation trip from Pune? Our 17-seater Tempo Travellers are perfect for weekend getaways, religious tours, or extended vacations across Maharashtra and beyond."
  },
  {
    "name": "17 Seater Tempo Traveller Hire for Family Trips Pune",
    "description": "Make your family trips memorable with our 17-seater Tempo Traveller hire. Spacious, safe, and ideal for traveling with elderly members and children alike."
  },
  {
    "name": "Rent 17 Seater Traveller for Corporate Events in Pune",
    "description": "Hire a 17-seater Traveller in Pune for corporate travel needs—ideal for team outings, seminars, site visits, and staff transportation to events and offsites."
  },
  {
    "name": "17 Seater Tempo Traveller Rental for Sightseeing Pune",
    "description": "Explore Pune and nearby tourist spots in comfort. Our 17-seater Travellers are great for guided sightseeing tours, day trips, and heritage walks around the city."
  },
  {
    "name": "Comfortable 17 Seater Tempo Traveller Hire Pune",
    "description": "Travel in comfort and style with Samarth Travels’ 17-seater Tempo Travellers. Soft seating, ample legroom, and smooth rides for a stress-free travel experience."
  },
  {
    "name": "Pune to Outstation 17 Seater Traveller on Rent",
    "description": "Book a 17-seater Tempo Traveller from Pune for hassle-free outstation travel to Lonavala, Shirdi, Mahabaleshwar, Goa, and more. Trusted service with experienced drivers."
  }
],
"tableData": [
  ["Rent 17 Seater Tempo Traveller in Pune", "17 Seater Luxury Tempo Traveller Rental Pune"],
  ["Affordable 17 Seater Tempo Traveller Hire Pune", "17 Seater AC Tempo Traveller for Group Travel Pune"],
  ["Tempo Traveller 17 Seater on Rent for Outstation Tours from Pune", "17 Seater Tempo Traveller Hire for Family Trips Pune"],
  ["Rent 17 Seater Traveller for Corporate Events in Pune", "17 Seater Tempo Traveller Rental for Sightseeing Pune"],
  ["Comfortable 17 Seater Tempo Traveller Hire Pune", "Pune to Outstation 17 Seater Traveller on Rent"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "17 Seater Tempo Traveller on Rent in Pune – Comfortable Group Travel at Its Best",
        "WhyChoosedescription": "Samarth Travels offers a premium 17-seater tempo traveller for rent in Pune, ideal for group outings, corporate events, family trips, and local tours. Our tempo travellers are designed to ensure a comfortable and enjoyable travel experience for everyone, with ample space and top-notch amenities."
    },
    {
        "WhyChooseheading": "Spacious and Air-Conditioned 17-Seater for Group Comfort",
        "WhyChoosedescription": "Our 17-seater tempo travellers are equipped with spacious interiors, plush seating, and effective air conditioning, ensuring that your entire group enjoys a cool and comfortable journey. Whether it's a short trip or a long-distance journey, comfort is guaranteed."
    },
    {
        "WhyChooseheading": "Perfect for Group Travel, Family Trips, and Corporate Outings",
        "WhyChoosedescription": "Whether it's a family holiday, a corporate retreat, or a group sightseeing tour, our 17-seater tempo traveller is the perfect solution. It’s spacious enough to accommodate larger groups, allowing everyone to travel together comfortably while enjoying their journey."
    },
    {
        "WhyChooseheading": "Experienced Chauffeurs for Safe and Smooth Travel",
        "WhyChoosedescription": "Our professional chauffeurs are well-trained and familiar with Pune's routes, ensuring that your journey is smooth, safe, and punctual. With a focus on providing excellent customer service, they will make your trip both pleasant and hassle-free."
    },
    {
        "WhyChooseheading": "Well-Maintained, Clean, and Sanitized 17-Seater Fleet",
        "WhyChoosedescription": "Your health and safety are our top priority. All our 17-seater tempo travellers are regularly cleaned, maintained, and sanitized before each trip, ensuring a safe and hygienic environment for you and your group to travel comfortably."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 17-Seater Tempo Traveller Rentals",
        "WhyChoosedescription": "At Samarth Travels, we offer competitive and transparent pricing for our 17-seater tempo traveller rentals. Our rates include everything—vehicle charges, driver fees, fuel, tolls, and other expenses—so you know exactly what you’re paying for, with no hidden costs."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible 17-Seater Rentals in Pune",
        "WhyChoosedescription": "Our 17-seater tempo travellers are available 24/7, providing you with flexibility to plan your trip at any time. Whether you're booking for a weekend getaway or a last-minute business event, we’re ready to accommodate your needs."
    },
    {
        "WhyChooseheading": "Convenient Booking and Multiple Payment Options for Easy Rentals",
        "WhyChoosedescription": "Booking your 17-seater tempo traveller with Samarth Travels is quick and convenient. We offer multiple payment methods, including UPI, credit/debit cards, digital wallets, and cash, making the entire booking process hassle-free."
    }
]















    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a 17 Seater Tempo Traveller on rent in Pune?',
        answer: 'To book a 17 Seater Tempo Traveller with Samarth Travels, you can visit our website or call our customer support. Just provide your travel date, pickup point, destination, and group size, and we’ll take care of the rest with a customized travel package.',
    },
    {
        id: 2,
        question: 'What are the features of the 17 Seater Tempo Traveller?',
        answer: 'Our 17 Seater Tempo Travellers come with pushback seats, air-conditioning, spacious legroom, large luggage space, reading lights, and USB charging ports. They are well-suited for long-distance travel, group outings, and corporate events.',
    },
    {
        id: 3,
        question: 'Is the 17 Seater Tempo Traveller suitable for outstation trips?',
        answer: 'Yes, the 17 Seater Tempo Traveller is ideal for outstation journeys to destinations like Goa, Shirdi, Lonavala, Mahabaleshwar, and more. The vehicle offers a smooth and comfortable ride for large groups.',
    },
    {
        id: 4,
        question: 'Can I rent the vehicle for one-day and multi-day tours?',
        answer: 'Absolutely! Samarth Travels offers flexible rental options including one-day city use, outstation trips, weekend getaways, and multi-day tours. Our team can help you plan the perfect itinerary.',
    },
    {
        id: 5,
        question: 'What is included in the 17 Seater Tempo Traveller rental package?',
        answer: 'The package includes the vehicle, a professional driver, fuel (based on package), and basic onboard amenities. Additional charges like tolls, parking, or permits are communicated transparently at the time of booking.',
    },
    {
        id: 6,
        question: 'Can I use this vehicle for weddings, events, or corporate transport?',
        answer: 'Yes, our 17 Seater Tempo Travellers are frequently used for weddings, employee transport, airport pickups, religious tours, and college trips. We ensure clean vehicles and professional service for all bookings.',
    },
    {
        id: 7,
        question: 'How early should I book the 17 Seater Tempo Traveller?',
        answer: 'It’s best to book 1–2 weeks in advance to secure availability, especially during peak seasons, weekends, or holidays when demand for group travel is higher.',
    },
];

const testimonials = [
    {
        name: 'Mr. Nilesh Patankar',
        role: 'Tour Group Leader',
        text: 'We hired a 17 Seater Tempo Traveller from Samarth Travels for a Pune to Goa trip. The vehicle was extremely comfortable and clean. The driver was cooperative, and the service was excellent. Highly satisfied!',
        image: '/img/testimonial/testi_2_78.jpg',
    },
    {
        name: 'Mrs. Shraddha Kale',
        role: 'Event Coordinator',
        text: 'Samarth Travels provided a 17 Seater Tempo Traveller for our family wedding. It made moving our guests so much easier and hassle-free. The entire process was smooth, and the team was very professional.',
        image: '/img/testimonial/testi_2_79.jpg',
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
  "name": "17 Seater Tempo Traveller on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/17-seater-tempo-traveller-pune.jpg",
  "description": "Rent a 17 Seater Tempo Traveller in Pune for group travel, family trips, corporate events, and outstation tours. Affordable and luxury AC options available for sightseeing and corporate events. Comfortable and spacious for long journeys.",
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
    "price": "3500",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/17-seater-tempo-traveller-on-rent-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>17 Seater Tempo Traveller on Rent in Pune | Affordable & Luxury Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 17 Seater Tempo Traveller in Pune for group travel, family trips, corporate events, and outstation tours. Affordable and luxury AC options, perfect for sightseeing, corporate events, and long-distance travel." 
  />
  <meta 
    name="keywords" 
    content="Rent 17 Seater Tempo Traveller in Pune, 17 Seater Luxury Tempo Traveller Rental Pune, Affordable 17 Seater Tempo Traveller Hire Pune, 17 Seater AC Tempo Traveller for Group Travel Pune, Tempo Traveller 17 Seater on Rent for Outstation Tours from Pune, 17 Seater Tempo Traveller Hire for Family Trips Pune, Rent 17 Seater Traveller for Corporate Events in Pune, 17 Seater Tempo Traveller Rental for Sightseeing Pune, Comfortable 17 Seater Tempo Traveller Hire Pune, Pune to Outstation 17 Seater Traveller on Rent" 
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
                            <img src='/images/keyword/29.jpg' alt='img' />
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

export default Sevantinseatertempotraveller;