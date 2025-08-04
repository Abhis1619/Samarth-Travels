
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Urbanialauxurybusrentals() {



    const cardData =
    {
        keyword: 'Urbania Luxury Bus Rentals in Pune',
        heading: 'Samarth Travels: Urbania Luxury Bus Rentals in Pune',
        headingDescription: 'Samarth Travels offers Urbania luxury bus rentals in Pune, perfect for executive travel, group outings, and special events. Our premium Force Urbania vehicles come with plush seating, air-conditioning, and modern amenities to ensure a first-class travel experience. With professional chauffeurs, transparent pricing, and on-time service, Samarth Travels guarantees comfort, style, and reliability on every ride.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

       "topPlaces": [
         {
      "title": "Aga Khan Palace",
      "description": "Built in 1892 by Sultan Aga Khan III, this sprawling palace is an architectural gem and a key monument in India’s freedom struggle. It served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other leaders during the Quit India Movement. The palace features Italian arches, sprawling gardens, and houses a museum that contains personal belongings of Gandhi and historical photographs. It is also the final resting place of Kasturba Gandhi and Mahadev Desai, adding to its solemn importance."
    },
        {
      "title": "Shaniwar Wada",
      "description": "Shaniwar Wada is a majestic 18th-century fortification located in the heart of Pune. Once the seat of the powerful Peshwas of the Maratha Empire, it is renowned for its historical significance, massive gateways, and intriguing legends, including ghost stories tied to its mysterious past. Despite being partially destroyed by fire, the remaining structures, especially the Delhi Gate and the fort’s expansive garden layout, provide a fascinating glimpse into Maratha architecture and political history."
    },
    {
      "title": "Sinhagad Fort",
      "description": "Located about 30 kilometers from Pune, Sinhagad Fort sits atop the Sahyadri mountains and is a favorite trekking destination for locals and tourists alike. With a history dating back over a thousand years, the fort was famously the site of the battle between the Marathas and the Mughals in 1670. Visitors are drawn to its rugged beauty, crumbling fortifications, and sweeping views of the surrounding valleys, especially during monsoons when the hills are lush green and covered in mist."
    },
    {
      "title": "Pataleshwar Cave Temple",
      "description": "This 8th-century rock-cut temple is carved entirely from a single basalt rock and dedicated to Lord Shiva. Nestled quietly amidst urban Pune, Pataleshwar offers a striking contrast to the city’s bustle. It features a circular Nandi Mandapa and intricately carved columns and sanctums. A protected monument under the Archaeological Survey of India, it’s a peaceful retreat and an excellent example of early Indian rock architecture."
    },
    {
      "title": "Dagdusheth Halwai Ganpati Temple",
      "description": "One of the most famous Ganesh temples in India, Dagdusheth Halwai Ganpati Temple attracts millions of devotees every year, especially during Ganesh Chaturthi. The temple’s grand idol of Lord Ganesh is adorned with gold and jewelry, symbolizing prosperity and devotion. Built by a sweetmaker in the 1800s, the temple also engages in numerous social and cultural initiatives, making it both a religious and community hub."
    },
    {
      "title": "Raja Dinkar Kelkar Museum",
      "description": "Founded by Dr. Dinkar Kelkar in memory of his son, this museum is a treasure trove of Indian heritage. It houses over 20,000 artifacts, including musical instruments, ancient utensils, sculptures, paintings, and even quirky items like betel nut crackers and door frames. The collection offers insight into the daily lives and traditions of Indians across centuries, and its carefully curated exhibits make it a cultural landmark in Pune."
    },
    {
      "title": "Parvati Hill and Temple",
      "description": "Parvati Hill is one of Pune’s oldest heritage sites and offers a combination of spiritual serenity and scenic views. Climbing 103 steps leads to a temple complex dedicated to Goddess Parvati and Lord Shiva. The hill also hosts a small museum, Peshwa-era relics, and panoramic views of the cityscape below, making it ideal for morning walks and peaceful contemplation."
    },
    {
      "title": "Osho Ashram",
      "description": "Located in the serene and green Koregaon Park area, the Osho International Meditation Resort is a global center for spiritual seekers. It offers dynamic meditation sessions, wellness therapies, and luxurious facilities in a Zen-like atmosphere. Known for attracting international visitors, the ashram promotes mindfulness, inner peace, and holistic living through Osho’s teachings."
    },
    {
      "title": "Pune Okayama Friendship Garden",
      "description": "Inspired by the 300-year-old Okayama Korakuen Garden in Japan, this beautifully landscaped space—also known as Pu La Deshpande Garden—is perfect for nature lovers and photographers. The garden features flowing streams, lush lawns, bridges, and seasonal flowers, offering a tranquil escape right in the city. It’s ideal for evening walks and peaceful getaways."
    },
    {
      "title": "Katraj Snake Park and Rajiv Gandhi Zoological Park",
      "description": "Spread over 130 acres, this complex features a zoo, snake park, and animal rescue center. The snake park houses over 160 species of snakes, including cobras and pythons, while the zoo includes tigers, leopards, elephants, and more. Educational exhibits make it an informative and fun spot for children and families, combining entertainment with awareness about wildlife conservation."
    }
  ],

"services": [
  {
    "name": "Rent Luxury Urbania Bus in Pune",
    "description": "Travel in style across Pune with Samarth Travels’ luxury Force Urbania bus rental. Designed for premium comfort, it’s ideal for events, tours, and VIP transfers within the city or for outstation journeys."
  },
  {
    "name": "Urbania Luxury Bus Hire for Corporate Events in Pune",
    "description": "Impress your clients or team with a premium Urbania luxury bus hire for corporate events. With air-conditioned cabins, plush seating, and experienced drivers, your business travel is both comfortable and professional."
  },
  {
    "name": "Affordable Urbania Bus Rentals in Pune",
    "description": "Get the best of both luxury and value with Samarth Travels’ affordable Urbania bus rental services in Pune. Perfect for small groups, family travel, and budget-conscious clients who don’t want to compromise on comfort."
  },
  {
    "name": "Urbania Luxury Bus Hire for Family Trips in Pune",
    "description": "Take your family outings to the next level with a luxury Urbania rental. Spacious interiors and a smooth ride ensure that your family trip around Pune or to nearby destinations is both memorable and relaxing."
  },
  {
    "name": "Luxury Urbania Bus for Wedding Events in Pune",
    "description": "Make wedding travel elegant and hassle-free with our luxury Urbania buses. Ideal for bride-groom transport or VIP guests, Samarth Travels provides stylish rides that match the grandeur of your special day."
  },
  {
    "name": "Urbania Luxury Bus Hire for Sightseeing Tours in Pune",
    "description": "Explore Pune’s top tourist spots in a premium Urbania bus. Great for tourists, NRIs, and groups, this service offers a luxurious sightseeing experience with panoramic windows and comfortable seating."
  },
  {
    "name": "Rent Urbania Bus for Group Travel in Pune",
    "description": "For local group travel in Pune, our Force Urbania buses offer the ideal blend of comfort and practicality. Whether it’s a family event, team outing, or cultural trip, we ensure safe and stylish travel."
  },
  {
    "name": "Luxury Urbania Bus Rentals for Outstation Trips from Pune",
    "description": "Heading out of town? Our Urbania buses are perfect for long-distance travel from Pune to destinations like Lonavala, Mahabaleshwar, or Goa. Enjoy a smooth ride with modern amenities on board."
  },
  {
    "name": "Rent a Force Urbania Luxury Bus in Pune",
    "description": "Choose Force Urbania for your next group journey in Pune. Our luxury fleet is maintained to the highest standards and comes with professional drivers for safe, punctual, and stylish transport."
  },
  {
    "name": "Comfortable Urbania Bus Rental for Group Tours Pune",
    "description": "From school excursions to corporate offsites, our comfortable Urbania rentals ensure your group reaches the destination relaxed and ready. Features include AC, pushback seats, and luggage space."
  }
],
"tableData": [
  ["Rent Luxury Urbania Bus in Pune", "Urbania Luxury Bus Hire for Corporate Events in Pune"],
  ["Affordable Urbania Bus Rentals in Pune", "Urbania Luxury Bus Hire for Family Trips in Pune"],
  ["Luxury Urbania Bus for Wedding Events in Pune", "Urbania Luxury Bus Hire for Sightseeing Tours in Pune"],
  ["Rent Urbania Bus for Group Travel in Pune", "Luxury Urbania Bus Rentals for Outstation Trips from Pune"],
  ["Rent a Force Urbania Luxury Bus in Pune", "Comfortable Urbania Bus Rental for Group Tours Pune"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "Premium Urbania Luxury Bus Rentals in Pune",
        "WhyChoosedescription": "Samarth Travels offers high-end Urbania luxury buses for rent in Pune, designed for travelers who value comfort, style, and sophistication. Whether you're planning a corporate trip, private event, airport transfer, or a weekend getaway, our Urbania fleet guarantees a first-class travel experience."
    },
    {
        "WhyChooseheading": "Elegant Interiors with First-Class Amenities",
        "WhyChoosedescription": "Our Force Urbania buses feature plush leather seating, spacious interiors, ambient lighting, and advanced air conditioning. With pushback seats, USB charging ports, and ample legroom, your journey is smooth, relaxing, and luxurious—ideal for long-distance or in-city travel."
    },
    {
        "WhyChooseheading": "Perfect for Corporate, Wedding, and VIP Travel",
        "WhyChoosedescription": "Urbania luxury buses are perfect for business executives, wedding guests, celebrities, and families seeking premium transport. Whether it’s a corporate offsite, high-profile event, or VIP airport pickup, we ensure a stylish and comfortable ride with professional-grade service."
    },
    {
        "WhyChooseheading": "Experienced Chauffeurs with Professional Etiquette",
        "WhyChoosedescription": "Each Urbania bus rental comes with a skilled, uniformed chauffeur trained in customer service and safe driving. Our chauffeurs are courteous, punctual, and well-versed with Pune city routes and major outstation highways, ensuring a seamless experience."
    },
    {
        "WhyChooseheading": "Reliable and Well-Maintained Urbania Fleet",
        "WhyChoosedescription": "We pride ourselves on operating one of the best-maintained Urbania fleets in Pune. Each vehicle undergoes regular mechanical inspections and is sanitized before every trip to ensure cleanliness, comfort, and reliability for every passenger."
    },
    {
        "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
        "WhyChoosedescription": "Enjoy competitive and honest pricing with our Urbania luxury bus rentals. We provide upfront quotes that include driver fees, fuel, and taxes—no surprises, just premium service at a fair rate that fits your premium travel expectations."
    },
    {
        "WhyChooseheading": "24/7 Availability and Custom Travel Schedules",
        "WhyChoosedescription": "Our Urbania buses are available round the clock, giving you complete flexibility in scheduling your journey. Whether it’s early morning airport pickups or late-night returns from events, we adapt to your timing without compromising on service quality."
    },
    {
        "WhyChooseheading": "Easy Booking and Multiple Payment Options",
        "WhyChoosedescription": "Booking an Urbania with Samarth Travels is simple—just call, message, or use our online platform. We accept UPI, digital wallets, cards, and cash, making the reservation and payment process fast, convenient, and secure."
    }
]
























    }

const faqData = [
    {
        id: 1,
        question: 'How do I rent a Luxury Force Urbania in Pune with Samarth Travels?',
        answer: 'You can easily rent a Luxury Force Urbania in Pune by visiting our website or calling our customer support team. Just share your travel date, purpose (corporate, family, wedding, etc.), and group size, and we’ll recommend the best Urbania package for you.',
    },
    {
        id: 2,
        question: 'What features does the Urbania Luxury Bus offer?',
        answer: 'Our Urbania Luxury Bus includes plush pushback seats, air-conditioning, reading lights, USB charging ports, premium upholstery, and a high-quality suspension system. It’s designed for top-tier comfort and elegance, ideal for VIP or executive travel.',
    },
    {
        id: 3,
        question: 'Is Urbania suitable for city and outstation travel from Pune?',
        answer: 'Yes, the Force Urbania is versatile and ideal for both intra-city and outstation travel. Whether it’s a business trip, temple tour, weekend getaway, or airport transfer, the Urbania provides a smooth, stylish, and reliable ride.',
    },
    {
        id: 4,
        question: 'How many people can travel in a Luxury Urbania?',
        answer: 'Our Luxury Urbania buses are available in 10-seater to 17-seater variants. It’s the perfect option for small groups looking for premium travel experiences with extra legroom and luggage space.',
    },
    {
        id: 5,
        question: 'What is included in the Urbania rental service in Pune?',
        answer: 'The rental includes the Urbania vehicle, fuel, professional driver, and in-cabin amenities. Tolls, parking, and permit charges will be transparently communicated during booking.',
    },
    {
        id: 6,
        question: 'Can I rent the Urbania for events like weddings or corporate transfers?',
        answer: 'Absolutely! The Urbania is a popular choice for wedding guest transport, VIP travel, airport pickups, and corporate team outings. It adds a touch of class to any occasion.',
    },
    {
        id: 7,
        question: 'Do you offer flexible pickup and drop-off services across Pune?',
        answer: 'Yes, we provide flexible pickup and drop-off locations within Pune. Just let us know your preferred points, and we’ll plan the most convenient route for your group.',
    },
];

const testimonials = [
    {
        name: 'Mr. Ankit Rane',
        role: 'Startup Founder',
        text: 'We booked the Urbania for an executive team visit. The vehicle was luxurious and extremely comfortable. Our clients were impressed with the experience. Excellent service from Samarth Travels!',
        image: '/img/testimonial/testi_2_60.jpg',
    },
    {
        name: 'Mrs. Jaya Kulkarni',
        role: 'Wedding Planner',
        text: 'I regularly book Urbania buses from Samarth Travels for premium wedding guest transport. They’re always on time, well-maintained, and the drivers are courteous. Highly recommended for luxury group travel!',
        image: '/img/testimonial/testi_2_61.jpg',
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
  "name": "Urbania Luxury Bus Rentals in Pune",
  "image": "https://samarthtravels.com/assets/images/urbania-luxury-bus-rentals-pune.jpg",
  "description": "Rent a Luxury Urbania Bus in Pune for corporate events, family trips, wedding functions, and sightseeing tours. Affordable and luxury rental options for group travel, outstation trips, and more.",
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
    "price": "15000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/urbania-luxury-bus-rentals-pune"
  }
};



    return (
        <div>


<Helmet>
  <title>Urbania Luxury Bus Rentals in Pune | Affordable & Luxury Bus Hire | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a Luxury Urbania Bus in Pune for corporate events, family trips, wedding functions, and sightseeing tours. Affordable and luxury rental options for group travel, outstation trips, and more." 
  />
  <meta 
    name="keywords" 
    content="Rent Luxury Urbania Bus in Pune, Urbania Luxury Bus Hire for Corporate Events in Pune, Affordable Urbania Bus Rentals in Pune, Urbania Luxury Bus Hire for Family Trips in Pune, Luxury Urbania Bus for Wedding Events in Pune, Urbania Luxury Bus Hire for Sightseeing Tours in Pune, Rent Urbania Bus for Group Travel in Pune, Luxury Urbania Bus Rentals for Outstation Trips from Pune, Rent a Force Urbania Luxury Bus in Pune, Comfortable Urbania Bus Rental for Group Tours Pune" 
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
                            <img src='/images/keyword/37.jpg' alt='img' />
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

export default Urbanialauxurybusrentals;