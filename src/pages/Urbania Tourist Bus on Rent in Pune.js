
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Urbaniatouristbusonrent() {



    const cardData =
    {
        keyword: 'Urbania Tourist Bus on Rent in Pune',
        heading: 'Samarth Travels: Urbania Tourist Bus on Rent in Pune',
        headingDescription: 'Samarth Travels offers Urbania tourist bus on rent in Pune, ideal for local sightseeing, outstation trips, and group travel. Our premium Force Urbania vehicles feature air-conditioning, push-back seats, and spacious interiors for a comfortable journey. With experienced drivers, transparent pricing, and a focus on customer satisfaction, Samarth Travels ensures a smooth and memorable travel experience.',

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
    "name": "Rent Urbania Bus for Outstation Tours from Pune",
    "description": "Travel in style with Samarth Travels' Force Urbania bus for outstation tours from Pune. Whether it's a family trip or corporate outing, enjoy a smooth and comfortable journey to destinations like Shirdi, Lonavala, and beyond."
  },
  {
    "name": "Pune to Outstation Urbania Bus Hire Services",
    "description": "For seamless outstation travel, rent a luxurious Urbania bus for your trips from Pune. Our services include comfortable travel options to all major destinations with experienced drivers and modern amenities."
  },
  {
    "name": "Affordable Urbania Bus Rentals for Outstation Trips Pune",
    "description": "Samarth Travels offers affordable Urbania bus rental services for your outstation trips from Pune. With budget-friendly options without compromising on luxury and comfort, it’s the ideal choice for group travel."
  },
  {
    "name": "Rent Urbania Luxury Bus for Outstation Travel Pune",
    "description": "For long-distance travel from Pune, opt for a luxurious Urbania bus rental. Equipped with air-conditioning, comfortable seats, and onboard amenities, it ensures a relaxing journey to your outstation destination."
  },
  {
    "name": "Urbania Bus Hire for Long-Distance Travel from Pune",
    "description": "Take a long-distance journey with ease by renting a Force Urbania bus from Pune. Perfect for destinations like Goa, Mahabaleshwar, and other outstation locales, enjoy a premium ride with a spacious interior."
  },
  {
    "name": "Comfortable Urbania Bus Hire for Outstation Tours",
    "description": "Experience the comfort of an Urbania bus rental for outstation tours from Pune. With ample legroom, air-conditioning, and cozy seating, your group will travel in complete comfort on all outstation journeys."
  },
  {
    "name": "Luxury Urbania Bus Hire Pune for Outstation Trips",
    "description": "For a truly luxurious travel experience, hire a Force Urbania bus from Pune for outstation trips. Ideal for corporate travel, family vacations, and group tours, enjoy premium amenities and excellent service."
  },
  {
    "name": "Rent 32-Seater Urbania Bus for Outstation Trips Pune",
    "description": "Looking for a spacious, comfortable bus for your outstation trip? Rent a 32-seater Urbania bus for your journey from Pune. Ideal for medium to large groups, this bus ensures a comfortable and smooth ride."
  },
  {
    "name": "Urbania Bus Rental for Corporate Outstation Travel Pune",
    "description": "For corporate trips, conferences, or team outings, rent an Urbania bus for outstation travel from Pune. Experience comfort and luxury with a professional driver, making corporate travel efficient and hassle-free."
  },
  {
    "name": "Pune to Outstation Urbania Bus Hire for Family Trips",
    "description": "Enjoy a family trip to your favorite outstation destination with our Urbania bus rental services from Pune. Spacious interiors and family-friendly amenities make it the perfect choice for family vacations."
  }
],
"tableData": [
  ["Rent Urbania Bus for Outstation Tours from Pune", "Pune to Outstation Urbania Bus Hire Services"],
  ["Affordable Urbania Bus Rentals for Outstation Trips Pune", "Rent Urbania Luxury Bus for Outstation Travel Pune"],
  ["Urbania Bus Hire for Long-Distance Travel from Pune", "Comfortable Urbania Bus Hire for Outstation Tours"],
  ["Luxury Urbania Bus Hire Pune for Outstation Trips", "Rent 32-Seater Urbania Bus for Outstation Trips Pune"],
  ["Urbania Bus Rental for Corporate Outstation Travel Pune", "Pune to Outstation Urbania Bus Hire for Family Trips"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "Urbania Tourist Bus on Rent in Pune – Luxury Travel at Its Best",
        "WhyChoosedescription": "Samarth Travels offers premium Urbania tourist buses for rent in Pune, ideal for group tours, corporate outings, family vacations, and more. With spacious, comfortable interiors and top-of-the-line amenities, our Urbania buses ensure a luxurious travel experience for your entire group."
    },
    {
        "WhyChooseheading": "Spacious, Air-Conditioned Comfort for Your Group Travel",
        "WhyChoosedescription": "Our Urbania tourist buses are equipped with plush leather seating, ample legroom, advanced air conditioning, and high-quality suspension systems, making long journeys comfortable and relaxing for all passengers. Enjoy your travels in luxury with individual AC vents, USB charging ports, and spacious interiors."
    },
    {
        "WhyChooseheading": "Ideal for Group Tours, Corporate Retreats, and Family Getaways",
        "WhyChoosedescription": "Whether it’s a family trip, a corporate offsite, a pilgrimage tour, or a leisure outing, our Urbania buses provide the ideal solution for group travel. They are perfect for small to medium-sized groups seeking comfort, privacy, and premium travel services for both local and outstation trips."
    },
    {
        "WhyChooseheading": "Experienced Chauffeurs for Safe and Punctual Travel",
        "WhyChoosedescription": "Each Urbania tourist bus comes with an experienced, professional chauffeur who is well-versed with city routes and outstation destinations. Our drivers are punctual, courteous, and dedicated to providing you with a smooth and safe journey, ensuring that your travel experience is hassle-free and enjoyable."
    },
    {
        "WhyChooseheading": "Well-Maintained, Clean, and Sanitized Urbania Fleet",
        "WhyChoosedescription": "Your health and safety are our top priority. Our entire Urbania fleet is regularly maintained, cleaned, and sanitized before each trip. We ensure that all vehicles are in pristine condition, offering a fresh, hygienic, and safe environment for every journey."
    },
    {
        "WhyChooseheading": "Transparent and Competitive Pricing with No Hidden Fees",
        "WhyChoosedescription": "At Samarth Travels, we offer transparent and competitive pricing for our Urbania tourist bus rentals. We believe in honest pricing with no hidden charges—our rates are all-inclusive, covering the cost of the vehicle, driver fees, fuel, and tolls, so you can travel with confidence and clarity."
    },
    {
        "WhyChooseheading": "24/7 Availability with Flexible Booking Options",
        "WhyChoosedescription": "Our Urbania tourist buses are available 24/7 to suit your travel needs. Whether you’re planning a spontaneous trip or booking in advance, we provide flexible booking options that allow you to schedule your travel at your convenience, ensuring maximum comfort and punctuality."
    },
    {
        "WhyChooseheading": "Convenient Booking and Multiple Payment Methods",
        "WhyChoosedescription": "Booking your Urbania tourist bus rental with Samarth Travels is easy. We offer a variety of payment options including UPI, credit/debit cards, digital wallets, and cash, making the booking process seamless and hassle-free."
    }
]



























    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent an Urbania tourist bus in Pune?',
        answer: 'Renting an Urbania tourist bus from Samarth Travels is simple. Just visit our website or contact our customer support team. Provide your travel details, such as the destination, travel dates, and group size, and we will offer you the best package that suits your needs.',
    },
    {
        id: 2,
        question: 'What features does the Urbania tourist bus offer?',
        answer: 'The Urbania tourist bus is equipped with premium pushback seats, air-conditioning, USB charging ports, ample luggage space, reading lights, and a smooth suspension system for ultimate comfort during long-distance travel.',
    },
    {
        id: 3,
        question: 'Is the Urbania tourist bus suitable for group travel?',
        answer: 'Yes, the Urbania is perfect for group travel. With seating for up to 17 passengers, it is ideal for family outings, corporate events, weddings, or leisure tours. The vehicle ensures a smooth and comfortable ride for all your travel companions.',
    },
    {
        id: 4,
        question: 'Can I rent the Urbania tourist bus for outstation trips?',
        answer: 'Yes, the Urbania tourist bus is perfect for both city and outstation trips. Whether you’re traveling for a religious pilgrimage, a corporate retreat, or a family vacation, the Urbania offers a luxurious and comfortable ride to your destination.',
    },
    {
        id: 5,
        question: 'What is included in the Urbania tourist bus rental?',
        answer: 'The rental includes the luxury Urbania vehicle, a professional driver, fuel charges, and all in-cabin amenities. Any extra costs such as tolls, parking, or permits will be clearly outlined and communicated at the time of booking.',
    },
    {
        id: 6,
        question: 'Is the Urbania available for corporate events and group tours?',
        answer: 'Absolutely! The Urbania is a popular choice for corporate events, conferences, team outings, and group tours. It’s designed to provide a premium travel experience for executives and groups looking for comfort and style.',
    },
    {
        id: 7,
        question: 'Can I customize the pickup and drop-off locations for my trip?',
        answer: 'Yes, we offer flexible pickup and drop-off locations across Pune. You can choose the most convenient spots for your group, and we’ll ensure a smooth and efficient route for your travel.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rohit Verma',
        role: 'HR Manager',
        text: 'We rented the Urbania tourist bus for our corporate offsite, and the experience was excellent. The bus was clean, comfortable, and the driver was professional. It added a touch of luxury to our trip. Samarth Travels provided great service!',
        image: '/img/testimonial/testi_2_66.jpg',
    },
    {
        name: 'Ms. Priya Joshi',
        role: 'Event Planner',
        text: 'I booked the Urbania tourist bus for a family wedding in Pune, and it was an amazing experience. The bus was spacious and well-maintained. Our guests were impressed by the luxury and comfort. Highly recommend Samarth Travels for any group transportation!',
        image: '/img/testimonial/testi_2_67.jpg',
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
  "name": "Urbania Tourist Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/urbania-tourist-bus-rent-pune.jpg",
  "description": "Rent a Luxury Urbania Tourist Bus in Pune for sightseeing tours, group travel, corporate tours, and family trips. Affordable and comfortable rental options available for local and outstation tours.",
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
    "url": "https://samarthtravels.com/urbania-tourist-bus-on-rent-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>Urbania Tourist Bus on Rent in Pune | Affordable & Luxury Bus Rentals | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a Luxury Urbania Tourist Bus in Pune for sightseeing tours, group travel, corporate tours, and family trips. Affordable and comfortable rental options available for local and outstation tours." 
  />
  <meta 
    name="keywords" 
    content="Rent Urbania Tourist Bus in Pune, Affordable Urbania Tourist Bus Hire Pune, Luxury Urbania Tourist Bus Rental in Pune, Rent Urbania Bus for Tourist Groups in Pune, Urbania Bus for Group Sightseeing Tours in Pune, Rent a Force Urbania Tourist Bus in Pune, Urbania Tourist Bus Hire for Outstation Tours, Comfortable Urbania Tourist Bus for Local Tours Pune, Rent Urbania Bus for Family Tours in Pune, Urbania Bus Rental for Corporate Tours in Pune" 
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
                            <img src='/images/keyword/40.jpg' alt='img' />
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

export default Urbaniatouristbusonrent;