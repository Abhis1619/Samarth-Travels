
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Weddingbusrentalservice() {



    const cardData =
    {
        keyword: 'Wedding Bus Rental Service',
        heading: 'Samarth Travels: Wedding Bus Rental Service',
        headingDescription: 'Samarth Travels offers wedding bus rental service, ideal for transporting guests, family members, and bridal parties during wedding functions. Our fleet of 14 to 50-seater buses is equipped with air-conditioning, push-back seats, and spacious interiors to ensure a comfortable and stylish travel experience for all your wedding events. With punctual drivers, flexible schedules, and transparent pricing, Samarth Travels provides safe, reliable, and hassle-free transportation solutions for weddings across Pune and surrounding areas.',

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
      "name": "Wedding Bus Rental Service in Pune",
      "description": "Samarth Travels offers reliable and spacious wedding bus rental services in Pune to ensure smooth transportation for your guests. Choose from a range of buses ideal for any wedding size."
    },
    {
      "name": "Rent Buses for Weddings in Pune",
      "description": "Make guest transportation effortless by renting buses for your wedding in Pune. Our clean, comfortable, and well-maintained buses are available in AC and Non-AC variants."
    },
    {
      "name": "Bus Hire for Wedding Guests Pune",
      "description": "Ensure timely and comfortable travel for your wedding guests with our bus hire services. Perfect for baraat, receptions, and all wedding-related functions."
    },
    {
      "name": "Wedding Transportation Rental Pune",
      "description": "From mandap to reception, get complete transportation support for your wedding day. Our buses are punctual, spacious, and managed by professional drivers."
    },
    {
      "name": "Wedding Bus Rental for Large Groups Pune",
      "description": "Need to move a big group of guests? Our large-capacity buses (32, 40, 45, 50 seaters) are ideal for managing large wedding crowds efficiently and comfortably."
    },
    {
      "name": "Luxury Buses for Wedding Events Pune",
      "description": "Add a touch of elegance with our luxury AC buses for your wedding. Ideal for VIP guest transport and stylish group travel."
    },
    {
      "name": "Rent Buses for Wedding Parties Pune",
      "description": "Our buses are perfect for transporting wedding parties from homes to venues and back. Clean interiors and ample space ensure comfort throughout."
    },
    {
      "name": "Bus Hire for Transportation to Wedding Venues Pune",
      "description": "We provide dedicated buses for transporting guests between hotels, mandaps, and banquet halls across Pune and outstation locations."
    },
    {
      "name": "Bus Rental Services for Wedding Functions Pune",
      "description": "Samarth Travels specializes in providing buses for all wedding functions — sangeet, haldi, reception — ensuring reliable and on-time group travel."
    },
    {
      "name": "Wedding Day Bus Rentals for Guests",
      "description": "Offer your guests a seamless experience on your wedding day with our punctual and comfortable bus rentals. Ideal for local and outstation events."
    },
    {
      "name": "Best Wedding Bus Rental Services in Pune",
      "description": "Samarth Travels is recognized for delivering the best wedding bus rental experience in Pune, with a professional fleet and personalized service."
    }
  ],
  "tableData": [
    ["Wedding Bus Rental Service in Pune", "Rent Buses for Weddings in Pune"],
    ["Bus Hire for Wedding Guests Pune", "Wedding Transportation Rental Pune"],
    ["Wedding Bus Rental for Large Groups Pune", "Luxury Buses for Wedding Events Pune"],
    ["Rent Buses for Wedding Parties Pune", "Bus Hire for Transportation to Wedding Venues Pune"],
    ["Bus Rental Services for Wedding Functions Pune", "Wedding Day Bus Rentals for Guests"],
    ["Best Wedding Bus Rental Services in Pune", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Wedding Bus Rental Service in Pune",
        "WhyChoosedescription": "Our wedding bus rental service provides reliable transportation for your big day, ensuring your guests arrive comfortably and on time. We understand the importance of seamless logistics for weddings, and our professional service ensures a smooth, stress-free experience."
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Buses for Wedding Guests",
        "WhyChoosedescription": "We offer a variety of bus sizes, from minibuses for small weddings to large coaches for big celebrations. All buses come equipped with comfortable seating, air-conditioning, and plenty of space to accommodate your guests, allowing them to relax and enjoy the ride."
    },
    {
        "WhyChooseheading": "Perfect for Guest Transport from Ceremony to Reception",
        "WhyChoosedescription": "Whether it's transporting guests from the ceremony venue to the reception or providing transportation for out-of-town visitors, our wedding bus rental service ensures that all your guests are taken care of, without the hassle of individual transport arrangements."
    },
    {
        "WhyChooseheading": "Experienced and Courteous Drivers for Weddings",
        "WhyChoosedescription": "Our drivers are professional, punctual, and experienced in handling wedding transportation. They are familiar with the venue locations and are trained to offer courteous service to your guests, ensuring a smooth and pleasant ride."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Wedding Transport",
        "WhyChoosedescription": "We offer competitive and transparent pricing with no hidden fees. Whether you need the bus for a few hours or an entire day, we provide flexible rental packages that suit your wedding transportation needs and budget."
    },
    {
        "WhyChooseheading": "24/7 Availability to Suit Your Wedding Schedule",
        "WhyChoosedescription": "Weddings can often involve early mornings or late-night events. Our buses are available 24/7 to accommodate your schedule, whether you need transportation for pre-wedding rituals, the main ceremony, or post-wedding celebrations."
    },
    {
        "WhyChooseheading": "Easy Booking and Real-Time Updates",
        "WhyChoosedescription": "Booking your wedding bus rental is simple and stress-free via our website or customer service. Once confirmed, you’ll receive real-time updates, including driver contact details and vehicle location, ensuring smooth coordination on the big day."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Vehicles",
        "WhyChoosedescription": "We take cleanliness seriously. All buses are sanitized and thoroughly cleaned before every trip, ensuring your guests travel in a hygienic and safe environment on your special day."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "We offer various payment options such as UPI, credit/debit cards, digital wallets, and cash, making it easy for you to complete your booking in a secure and convenient way."
    }
]


































    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a wedding bus rental with Samarth Travels in Pune?',
        answer: 'Booking a wedding bus rental with Samarth Travels is simple. You can book through our website or by contacting our customer support team. Share your wedding details, such as the number of guests, wedding venues, and preferred bus type, and we will ensure the perfect bus arrangement for your special day.',
    },
    {
        id: 2,
        question: 'What types of buses are available for wedding rentals in Pune?',
        answer: 'We offer a variety of buses for weddings in Pune, including 17-seater, 32-seater, 40-seater, 45-seater, and 50-seater options. You can choose from AC and Non-AC buses based on your preferences and the number of guests to be transported.',
    },
    {
        id: 3,
        question: 'Are the wedding buses equipped with special amenities?',
        answer: 'Yes, our wedding buses are designed for comfort and luxury. They come with comfortable seating, air conditioning (for AC buses), clean interiors, and ample luggage space. We also offer premium buses with additional amenities like LED screens, music systems, and charging ports.',
    },
    {
        id: 4,
        question: 'Can I customize the pick-up and drop-off locations for my wedding guests?',
        answer: 'Yes, we offer full flexibility to customize your pick-up and drop-off locations according to your wedding schedule. Whether it’s from the hotel, home, or specific wedding venues, we will ensure smooth transportation for all your guests.',
    },
    {
        id: 5,
        question: 'Do the wedding bus rentals include a driver and fuel?',
        answer: 'Yes, all wedding bus rentals come with a professional driver and fuel included. Additional charges, such as tolls, parking, or permits, will be communicated upfront for complete transparency.',
    },
    {
        id: 6,
        question: 'Can I hire multiple buses for my wedding?',
        answer: 'Absolutely! We can arrange multiple buses depending on the number of guests and your specific requirements. Whether you need buses for bride and groom transportation or guest shuttles, Samarth Travels can handle all the logistics for your wedding.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for wedding bus rentals?',
        answer: 'Yes, we provide 24/7 customer support for all our wedding bus rentals. Our team is available to assist you with bookings, last-minute changes, and ensure everything runs smoothly on the big day.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rajesh Patel',
        role: 'Groom',
        text: 'We rented a 40-seater AC bus for our wedding guests. The bus was elegant and very comfortable. The driver was professional, and everything was on time. Samarth Travels made the transportation for our wedding smooth and hassle-free.',
        image: '/img/testimonial/testi_wedding_1.jpg',
    },
    {
        name: 'Ms. Priya Desai',
        role: 'Bride',
        text: 'Samarth Travels provided a 50-seater bus for our wedding guests. The bus was spacious, clean, and the AC worked perfectly, which was great for the summer wedding. I am so glad I chose them for our big day!',
        image: '/img/testimonial/testi_wedding_2.jpg',
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
  "name": "Wedding Bus Rental Service",
  "image": "https://samarthtravels.com/assets/images/wedding-bus-rental-service.jpg", // Replace with the correct image URL
  "description": "Book Wedding Bus Rental Service in Pune with Samarth Travels for seamless transportation for wedding guests. We offer luxury buses for large groups, wedding parties, and transportation to wedding venues at affordable prices.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "5890"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "15000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/wedding-bus-rental-service" // Replace with the actual page URL
  }
};




    return (
        <div>


<Helmet>
  <title>Wedding Bus Rental Service | Samarth Travels Pune</title>
  <meta 
    name="description" 
    content="Book Wedding Bus Rental Service in Pune with Samarth Travels for seamless transportation for wedding guests. We offer luxury buses for large groups, wedding parties, and transportation to wedding venues at affordable prices." 
  />
  <meta 
    name="keywords" 
    content="Wedding bus rental service in Pune, Rent buses for weddings in Pune, Bus hire for wedding guests Pune, Wedding transportation rental Pune, Wedding bus rental for large groups Pune, Luxury buses for wedding events Pune, Rent buses for wedding parties Pune, Bus hire for transportation to wedding venues Pune, Bus rental services for wedding functions Pune, Wedding day bus rentals for guests, Best wedding bus rental services in Pune" 
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
                            <img src='/images/keyword/91.jpg' alt='img' />
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

export default Weddingbusrentalservice;