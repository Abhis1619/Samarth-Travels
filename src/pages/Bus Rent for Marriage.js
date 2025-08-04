
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentformarriage() {



    const cardData =
    {
        keyword: 'Bus Rent for Marriage',
        heading: 'Samarth Travels: Bus Rent for Marriage',
        headingDescription: 'Samarth Travels provides bus rent for marriage functions, offering reliable and comfortable transport for wedding guests across Pune. Choose from AC and non-AC buses ranging from 17 to 50 seaters, perfect for baraat, guest pick-up, and venue transfers. With punctual service, experienced drivers, and transparent pricing, Samarth Travels ensures a smooth and stress-free travel experience on your big day.',

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
    "name": "Marriage Bus Hire Service",
    "description": "Samarth Travels offers dependable marriage bus hire services in Pune for seamless transportation of wedding guests. Whether it’s a small family function or a grand celebration, we ensure smooth and timely travel solutions."
  },
  {
    "name": "Rent Bus for Marriage Guests",
    "description": "Rent clean, comfortable buses to transport your marriage guests safely and conveniently. From pickup at hotels to drop at the venue, we provide organized and punctual transport solutions."
  },
  {
    "name": "Affordable Bus Rental for Wedding Procession",
    "description": "Looking for a budget-friendly option for your baraat or wedding procession? Our affordable bus rental ensures your entire group can travel together without breaking the bank."
  },
  {
    "name": "Luxury Bus on Rent for Marriage Events",
    "description": "Upgrade your wedding transport with luxury bus rentals from Samarth Travels. Ideal for VIP guests or a premium experience, these buses offer high-end comfort and stylish interiors."
  },
  {
    "name": "AC Bus for Marriage Party Transportation",
    "description": "Keep your marriage party cool and relaxed with our AC buses on rent. Spacious, well-ventilated, and driven by professionals—ideal for hot weather or day-long ceremonies."
  },
  {
    "name": "Rent Bus for Wedding Ceremony Travel",
    "description": "Make guest travel between multiple wedding venues hassle-free with our reliable bus rentals in Pune. Perfect for sangeet, reception, mehendi, and wedding day ceremonies."
  },
  {
    "name": "Comfortable Bus Rental for Marriage Functions",
    "description": "Our comfortable buses ensure your wedding guests travel in peace and joy. From plush seating to ample luggage space, everything is arranged to enhance the wedding experience."
  },
  {
    "name": "Mini Bus on Rent for Marriage Guests",
    "description": "For smaller groups or short-distance travel, hire a mini bus from Samarth Travels. It's a cost-effective and flexible option for wedding guest transportation in Pune."
  },
  {
    "name": "20-32 Seater Bus for Marriage Transportation",
    "description": "Choose from our 20 to 32-seater buses tailored for wedding travel. These buses are ideal for medium-sized guest lists, offering a balance between capacity, comfort, and affordability."
  },
  {
    "name": "Marriage Bus Service for Group Travel",
    "description": "Simplify group transport for weddings with Samarth Travels' dedicated marriage bus services. We handle group logistics so you can focus on the celebration."
  }
],
"tableData": [
  ["Marriage Bus Hire Service", "Rent Bus for Marriage Guests"],
  ["Affordable Bus Rental for Wedding Procession", "Luxury Bus on Rent for Marriage Events"],
  ["AC Bus for Marriage Party Transportation", "Rent Bus for Wedding Ceremony Travel"],
  ["Comfortable Bus Rental for Marriage Functions", "Mini Bus on Rent for Marriage Guests"],
  ["20-32 Seater Bus for Marriage Transportation", "Marriage Bus Service for Group Travel"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "Bus Rent for Marriage – Stylish and Comfortable Transportation for Your Big Day",
        "WhyChoosedescription": "Samarth Travels offers premium bus rental services for weddings, ensuring that the bride, groom, and their guests travel in style and comfort. Our buses are designed to make the journey to and from the marriage venue smooth, memorable, and stress-free."
    },
    {
        "WhyChooseheading": "Luxurious, Air-Conditioned Buses for Wedding Day Comfort",
        "WhyChoosedescription": "Our buses for marriage transport feature spacious, air-conditioned interiors with plush leather seating, ensuring that your guests are comfortable throughout their journey. Whether it’s a short ride or a longer distance, we provide a luxury experience for everyone."
    },
    {
        "WhyChooseheading": "Ideal for Bride, Groom, and Wedding Guests Transportation",
        "WhyChoosedescription": "Whether it’s transporting the bride and groom, family, or wedding guests, our buses are the perfect solution for group transportation. We offer vehicles that can accommodate small to large groups, ensuring everyone arrives at the venue together, on time, and in comfort."
    },
    {
        "WhyChooseheading": "Experienced Chauffeurs for Punctual and Safe Marriage Transportation",
        "WhyChoosedescription": "Our professional chauffeurs are skilled in handling wedding day schedules, ensuring that everyone travels safely and on time. With a focus on punctuality, safety, and courtesy, our chauffeurs make sure that transportation is one less thing you need to worry about on your special day."
    },
    {
        "WhyChooseheading": "Well-Maintained and Sanitized Fleet for Wedding Transport",
        "WhyChoosedescription": "We take pride in offering a fleet of well-maintained, clean, and sanitized buses for your marriage transport needs. Our vehicles are thoroughly inspected and prepared to ensure a fresh, hygienic, and comfortable environment for your guests."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Wedding Bus Rentals",
        "WhyChoosedescription": "At Samarth Travels, we offer clear and competitive pricing for wedding bus rentals, with no hidden charges. Our pricing covers all aspects of the service, including the vehicle, driver fees, fuel, tolls, and other necessary expenses, giving you peace of mind while planning your big day."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Wedding Day Travel",
        "WhyChoosedescription": "We offer 24/7 availability for bus rentals on your wedding day, ensuring that you have transportation options whenever you need them. Whether your wedding is in the morning or evening, we’ll be there to provide flexible, timely, and reliable service."
    },
    {
        "WhyChooseheading": "Convenient Booking and Multiple Payment Options for Wedding Rentals",
        "WhyChoosedescription": "Booking a bus for your wedding day is simple with Samarth Travels. We offer various payment methods including UPI, credit/debit cards, digital wallets, and cash, making it easy to book your wedding transport without any hassle."
    }
]













    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a bus for a marriage event with Samarth Travels?',
        answer: 'Renting a bus for a marriage event is easy with Samarth Travels. Just call our team or visit our website, share your wedding dates, guest list, and pickup-drop points. We’ll help you select the perfect vehicle and plan all logistics smoothly.',
    },
    {
        id: 2,
        question: 'Which types of buses are available for marriage transport?',
        answer: 'We provide a wide range of buses including 17-seater to 50-seater buses, AC/Non-AC options, Mini Buses, Tempo Travellers, and Luxury Force Urbania vans. All our vehicles are ideal for safely and comfortably transporting marriage guests.',
    },
    {
        id: 3,
        question: 'Can I rent buses for multiple marriage functions over several days?',
        answer: 'Yes, you can rent buses for multiple days and functions like Haldi, Sangeet, Mehndi, Wedding, and Reception. We offer full-day or multi-day rental packages to match your marriage itinerary.',
    },
    {
        id: 4,
        question: 'Is it possible to arrange pickup from multiple locations in Pune?',
        answer: 'Absolutely! We offer customized pickup and drop services from various locations in and around Pune to ensure that all your guests arrive on time and in comfort.',
    },
    {
        id: 5,
        question: 'Can the buses be decorated for the marriage event?',
        answer: 'Yes, we allow light decorative elements or signage on the buses, especially for wedding events. Just inform us in advance so we can ensure the vehicle is ready for decoration as per your needs.',
    },
    {
        id: 6,
        question: 'What is included in the marriage bus rental package?',
        answer: 'Our package includes the chosen bus, professional driver, fuel, and all standard amenities. Additional requirements like extended hours, late-night operations, or decorative customization can be included at extra cost.',
    },
    {
        id: 7,
        question: 'How early should I book a bus for marriage transport?',
        answer: 'We recommend booking your marriage transportation at least 3 to 4 weeks in advance, especially during peak wedding seasons, to ensure availability and preferred vehicle selection.',
    },
];

const testimonials = [
    {
        name: 'Mr. Kunal More',
        role: 'Groom’s Brother',
        text: 'We booked two buses from Samarth Travels for our brother’s wedding. The guests were very comfortable, the buses were punctual, and the entire coordination was smooth. Excellent service for marriage functions!',
        image: '/img/testimonial/testi_2_74.jpg',
    },
    {
        name: 'Mrs. Anjali Thakur',
        role: 'Bride’s Aunt',
        text: 'Samarth Travels made our wedding transport stress-free. The buses were clean and luxurious, and the drivers were very polite. All our guests were happy with the arrangements. Highly recommended!',
        image: '/img/testimonial/testi_2_75.jpg',
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
  "name": "Bus Rent for Marriage",
  "image": "https://samarthtravels.com/assets/images/bus-rent-for-marriage.jpg",
  "description": "Rent a bus for marriage guest transportation, Baraat, wedding ceremony travel, and more with Samarth Travels. Affordable and luxury bus rental services for marriage functions, wedding processions, and group travel. Choose from AC buses, mini buses, and 20-32 seater options for your wedding event.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6500"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "12000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rent-for-marriage"
  }
};





    return (
        <div>
<Helmet>
  <title>Bus Rent for Marriage | Guest Transportation & Wedding Procession | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for marriage guests, Baraat, and wedding ceremony travel with Samarth Travels. Affordable and luxury bus rental for wedding functions, group travel, and more. Choose from AC buses, mini buses, and 20-32 seater options for marriage events." 
  />
  <meta 
    name="keywords" 
    content="Marriage Bus Hire Service, Rent Bus for Marriage Guests, Affordable Bus Rental for Wedding Procession, Luxury Bus on Rent for Marriage Events, AC Bus for Marriage Party Transportation, Rent Bus for Wedding Ceremony Travel, Comfortable Bus Rental for Marriage Functions, Mini Bus on Rent for Marriage Guests, 20-32 Seater Bus for Marriage Transportation, Marriage Bus Service for Group Travel" 
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
                            <img src='/images/keyword/17.jpg' alt='img' />
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

export default Busrentformarriage;