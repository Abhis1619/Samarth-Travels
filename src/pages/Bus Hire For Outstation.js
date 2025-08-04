
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Bushireforoutstation() {



    const cardData =
    {
        keyword: '  Bus Hire For Outstation',
        heading: 'Samarth Travels: Bus Hire For Outstation',
        headingDescription: 'Samarth Travels offers reliable and affordable bus hire for outstation travel, ideal for family vacations, corporate tours, and group outings. Choose from a fleet of well-maintained AC and non-AC buses ranging from 17 to 50 seaters. With experienced drivers, transparent pricing, and punctual service, Samarth Travels ensures a safe and comfortable journey to your outstation destination.',

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
    "name": "Rent Bus for Outstation Travel",
    "description": "Samarth Travels offers reliable bus rental services for outstation travel from Pune. Our well-maintained buses are ideal for long-distance journeys, providing comfort, safety, and a hassle-free travel experience for all group sizes."
  },
  {
    "name": "Affordable Bus Hire for Outstation Trips",
    "description": "Looking for a budget-friendly solution for your outstation trip? Hire affordable buses from Samarth Travels and enjoy value-packed travel with comfortable seating, experienced drivers, and competitive pricing."
  },
  {
    "name": "Luxury Bus Rental for Outstation Tours",
    "description": "Upgrade your outstation journey with Samarth Travels' luxury bus rental. Featuring premium interiors, AC, and spacious seating, our buses are perfect for weddings, corporate travel, and VIP group tours."
  },
  {
    "name": "Outstation Bus Hire for Family Travel",
    "description": "Travel comfortably with your family by hiring a spacious and safe outstation bus from Pune. Our family-friendly buses ensure enjoyable journeys to popular destinations like Mahabaleshwar, Shirdi, Lonavala, and more."
  },
  {
    "name": "Bus Hire for Group Outstation Tours",
    "description": "Whether it's a school tour, corporate group, or family event, our group outstation bus hire service ensures smooth coordination, ample space, and a comfortable ride for all travelers."
  },
  {
    "name": "32-Seater Bus Rental for Outstation Journey",
    "description": "For medium-sized groups heading out of Pune, rent a 32-seater bus that combines capacity with comfort. Ideal for group tours, wedding parties, or business trips to nearby cities and attractions."
  },
  {
    "name": "Comfortable Bus Hire for Long-Distance Travel",
    "description": "Experience the ease of long-distance travel with Samarth Travels' comfortable buses. Enjoy features like pushback seats, powerful AC, and professional drivers for a relaxed and safe journey."
  },
  {
    "name": "AC Bus on Rent for Outstation Trips",
    "description": "Beat the heat on your outstation trips with our fully air-conditioned bus rentals. From Pune to destinations across Maharashtra and beyond, we ensure a cool and pleasant journey."
  },
  {
    "name": "Bus Rental for Outstation Corporate Tours",
    "description": "Make your corporate retreats and outstation meetings efficient with our executive-class buses. Punctual service, courteous drivers, and clean, modern buses ensure a professional travel experience."
  },
  {
    "name": "Best Bus Hire Deals for Outstation Travel",
    "description": "Get the best rates on bus rentals for outstation travel from Pune. Our deals combine affordability with service quality, ensuring you receive top value for both short and long-distance group tours."
  }
],
"tableData": [
  ["Rent Bus for Outstation Travel", "Affordable Bus Hire for Outstation Trips"],
  ["Luxury Bus Rental for Outstation Tours", "Outstation Bus Hire for Family Travel"],
  ["Bus Hire for Group Outstation Tours", "32-Seater Bus Rental for Outstation Journey"],
  ["Comfortable Bus Hire for Long-Distance Travel", "AC Bus on Rent for Outstation Trips"],
  ["Bus Rental for Outstation Corporate Tours", "Best Bus Hire Deals for Outstation Travel"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "Bus Hire for Outstation – Comfortable & Reliable Travel with Samarth Travels",
        "WhyChoosedescription": "Samarth Travels offers dependable bus hire services for outstation trips, perfect for family vacations, group tours, pilgrimages, and corporate travel. Our well-maintained fleet ensures a smooth and comfortable journey, making long-distance travel stress-free and enjoyable."
    },
    {
        "WhyChooseheading": "Spacious, Air-Conditioned Comfort for Outstation Journeys",
        "WhyChoosedescription": "Our outstation buses are designed to provide maximum comfort, featuring spacious interiors, plush leather seating, and advanced air conditioning systems. Relax and enjoy the journey with individual AC vents, ample legroom, and modern amenities tailored for long-distance travel."
    },
    {
        "WhyChooseheading": "Ideal for Group Travel to Nearby and Distant Locations",
        "WhyChoosedescription": "Whether you're heading to a nearby destination or traveling across the state, our buses are perfect for groups of all sizes. We offer customized outstation travel packages for family trips, corporate retreats, and special events, ensuring comfort and reliability throughout the journey."
    },
    {
        "WhyChooseheading": "Experienced Chauffeurs for Safe and Punctual Outstation Travel",
        "WhyChoosedescription": "Our skilled chauffeurs are well-versed in outstation routes, ensuring timely arrivals at your destination. They prioritize safety, punctuality, and smooth travel, offering you a hassle-free experience throughout your outstation journey."
    },
    {
        "WhyChooseheading": "Well-Maintained Fleet for Long-Distance Travel",
        "WhyChoosedescription": "Our entire fleet of outstation buses is meticulously maintained to ensure a safe and smooth journey. From regular checks to ensuring cleanliness, we guarantee that each vehicle is in pristine condition, ready for your long-distance trip."
    },
    {
        "WhyChooseheading": "Transparent and Competitive Pricing for Outstation Travel",
        "WhyChoosedescription": "Samarth Travels offers clear and competitive pricing for outstation bus hire, with no hidden charges. The price covers the cost of the vehicle, driver, fuel, tolls, and any other necessary expenses, giving you peace of mind about your travel budget."
    },
    {
        "WhyChooseheading": "24/7 Availability for Your Outstation Travel Needs",
        "WhyChoosedescription": "We offer 24/7 availability for outstation bus hire, allowing you to plan your trip according to your schedule. Whether it’s a last-minute booking or planned well in advance, we are always ready to serve you with flexible travel options."
    },
    {
        "WhyChooseheading": "Easy Booking and Multiple Payment Options for Outstation Rentals",
        "WhyChoosedescription": "Booking your outstation bus hire with Samarth Travels is effortless. We offer multiple payment options including UPI, credit/debit cards, digital wallets, and cash to make the booking process as convenient as possible."
    }
]











    }

const faqData = [
    {
        id: 1,
        question: 'How do I hire a bus for outstation travel with Samarth Travels?',
        answer: 'Hiring a bus for outstation travel is easy with Samarth Travels. You can book online through our website or call our customer support team. Share your destination, travel dates, and group size, and we’ll recommend the best vehicle and package for your journey.',
    },
    {
        id: 2,
        question: 'What types of buses are available for outstation hire?',
        answer: 'We offer a wide range of buses for outstation trips, including AC and Non-AC options, 17-seater to 50-seater buses, Luxury Force Urbania, Mini Buses, and Tempo Travellers. All vehicles are well-maintained and driven by experienced chauffeurs.',
    },
    {
        id: 3,
        question: 'Are the buses suitable for long-distance travel?',
        answer: 'Yes, our buses are specially designed for long-distance comfort. They come equipped with pushback seats, air-conditioning, ample legroom, luggage space, and smooth suspension to ensure a comfortable journey for every passenger.',
    },
    {
        id: 4,
        question: 'Can I book a one-way or round-trip outstation service?',
        answer: 'Yes, Samarth Travels offers both one-way and round-trip bus hire options for outstation travel. Whether you are going for a short pilgrimage or a multi-day trip, we have flexible packages to suit your needs.',
    },
    {
        id: 5,
        question: 'What is included in the outstation bus rental package?',
        answer: 'The rental includes the selected vehicle, a professional driver, fuel, and basic amenities. Additional costs like tolls, parking, and permits (if any) will be communicated clearly at the time of booking.',
    },
    {
        id: 6,
        question: 'Do you provide customized pickup and drop-off points?',
        answer: 'Yes, we offer customizable pickup and drop-off locations within Pune to ensure maximum convenience for your group. Let us know your preferred locations while booking.',
    },
    {
        id: 7,
        question: 'Is customer support available during the journey?',
        answer: 'Yes, our customer support is available 24/7. You can reach out to us anytime during your trip for assistance or updates. We’re here to make your travel experience smooth and hassle-free.',
    },
];

const testimonials = [
    {
        name: 'Mr. Nikhil Sharma',
        role: 'Corporate Manager',
        text: 'We hired a 35-seater bus from Samarth Travels for an outstation team trip. The bus was clean, punctual, and extremely comfortable. Our team had a great experience. Highly reliable service!',
        image: '/img/testimonial/testi_2_68.jpg',
    },
    {
        name: 'Mrs. Kavita Bhosale',
        role: 'Tour Organizer',
        text: 'I booked a bus for a family tour to Goa from Pune. The entire journey was smooth and enjoyable. The driver was courteous and professional. Will definitely use Samarth Travels again for future trips!',
        image: '/img/testimonial/testi_2_69.jpg',
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
  "name": "Bus Hire for Outstation",
  "image": "https://samarthtravels.com/assets/images/bus-hire-for-outstation.jpg",
  "description": "Rent a bus for outstation travel with Samarth Travels. Affordable and luxury bus rental services for family travel, group tours, corporate trips, and long-distance journeys. Choose from AC buses and 32-seater options for the best outstation travel experience.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6312"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "8000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-hire-for-outstation"
  }
};




    return (
        <div>

<Helmet>
  <title>Bus Hire for Outstation Travel | Affordable & Luxury Bus Rental | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for outstation travel with Samarth Travels. Affordable and luxury bus hire for family trips, group tours, corporate tours, and long-distance travel. AC buses and 32-seater options for your comfort." 
  />
  <meta 
    name="keywords" 
    content="Rent Bus for Outstation Travel, Affordable Bus Hire for Outstation Trips, Luxury Bus Rental for Outstation Tours, Outstation Bus Hire for Family Travel, Bus Hire for Group Outstation Tours, 32-Seater Bus Rental for Outstation Journey, Comfortable Bus Hire for Long-Distance Travel, AC Bus on Rent for Outstation Trips, Bus Rental for Outstation Corporate Tours, Best Bus Hire Deals for Outstation Travel" 
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
                            <img src='/images/keyword/14.jpg' alt='img' />
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

export default Bushireforoutstation;