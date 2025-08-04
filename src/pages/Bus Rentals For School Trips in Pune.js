
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentalforschooltrips() {



    const cardData =
    {
        keyword: '  Bus Rentals For School Trips in Pune',
        heading: 'Samarth Travels:  Bus Rentals For School Trips in Pune',
        headingDescription: 'Samarth Travels offers bus rentals for school trips in Pune, providing safe, reliable, and comfortable transportation for educational excursions, picnics, and inter-school events. Our fleet of well-maintained buses, including 32-seater and 45-seater options, features air-conditioning, comfortable seating, and safety-focused amenities. With experienced drivers, punctual service, and transparent pricing, Samarth Travels ensures a secure and enjoyable travel experience for students and staff alike.',

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
      "name": "Bus Hire for School Trips",
      "description": "Samarth Travels offers safe and comfortable bus hire services for school trips in Pune. Our fleet includes various seating capacities and all buses come with experienced drivers and safety features to ensure a smooth and secure school outing."
    },
    {
      "name": "Bus Rentals for School Trips in Pune",
      "description": "We provide reliable bus rental services in Pune for school field trips, educational tours, and excursions. Our well-maintained buses come equipped with comfortable seating and are managed by professional staff trained in child safety protocols."
    },
    {
      "name": "School Buses for Field Trips Near Me",
      "description": "Looking for a nearby school bus rental? Samarth Travels offers school buses tailored for short and long-distance field trips with GPS tracking and experienced drivers, ensuring a safe and punctual journey for students and teachers alike."
    },
    {
      "name": "Bus Companies for School Field Trips",
      "description": "Partner with Samarth Travels for organized school field trips across Pune and Maharashtra. Our buses range from 17-seaters to 50-seaters, suitable for any class size or group, with complete safety and comfort ensured."
    },
    {
      "name": "Bus Rent for Picnic in Pune",
      "description": "Planning a school or college picnic? Rent a bus with Samarth Travels and enjoy a stress-free trip. Our buses are perfect for group picnics, offering spacious seating, music systems, and ample luggage space for a fun travel experience."
    },
    {
      "name": "Tourist Bus Rent Per Day",
      "description": "Samarth Travels provides per-day tourist bus rentals for schools and colleges looking for a full-day trip solution. Buses are available with flexible timings, professional drivers, and both AC and non-AC options."
    },
    {
      "name": "Mini Bus Rent in Pune for Picnic",
      "description": "Rent a mini bus for your next school or college picnic in Pune. Our mini buses are ideal for smaller groups and include comfortable seating, clean interiors, and punctual service for local and outstation spots."
    },
    {
      "name": "Bus for Rent in Pune for School Picnic",
      "description": "Samarth Travels provides school buses for rent specifically for picnic purposes. These buses are equipped with modern amenities, ample luggage space, and entertainment systems to keep the journey enjoyable for young travelers."
    },
    {
      "name": "Buses for College Picnic in Pune",
      "description": "We offer specialized buses for college outings and picnics in and around Pune. With seating for up to 50 passengers, our buses ensure safe, punctual, and entertaining rides for large student groups."
    },
    {
      "name": "Rental Buses for Trips in Pune",
      "description": "Samarth Travels offers reliable rental buses for educational, cultural, and leisure trips across Pune and beyond. Ideal for schools and institutions, our fleet guarantees safety, hygiene, and a professional experience."
    },
    {
      "name": "50 Seater Bus on Rent in Pune",
      "description": "Need a 50-seater bus for a large school or college trip? Our spacious and air-conditioned buses provide maximum comfort, with enough room for students, teachers, and supplies for day-long or overnight travel."
    },
    {
      "name": "45 Seater Bus for Rent in Pune",
      "description": "Hire a 45-seater bus for your next school excursion, picnic, or field trip. Our buses are designed for student travel, offering a blend of affordability, comfort, and safety on every journey."
    },
    {
      "name": "Bus Rentals for School Trips in Pimpri Chinchwad",
      "description": "Samarth Travels offers school trip bus rentals in Pimpri Chinchwad with timely pickups, clean buses, and trained drivers. Ideal for institutions in PCMC looking for trusted transportation for their students."
    },
    {
      "name": "Popular Bus Services for Schools in Pimpri Chinchwad",
      "description": "We are one of the most trusted names in Pimpri Chinchwad for school bus services, providing safe and timely transportation for daily routes, school picnics, and educational tours."
    },
    {
      "name": "School Bus Service in Pune",
      "description": "Our school bus services in Pune are ideal for regular routes and special trips. Equipped with safety features, first-aid kits, and GPS, we ensure peace of mind for both schools and parents."
    },
    {
      "name": "School Picnic Bus on Rent in Pune for Family",
      "description": "Samarth Travels also offers school picnic bus rentals suitable for teachers, parents, and family groups accompanying children. Our buses ensure comfort for both students and adults with ample space and clean seating."
    },
    {
      "name": "School Picnic Bus Hire Near Me in Pune",
      "description": "Looking to hire a school picnic bus nearby? Samarth Travels provides quick and easy rentals across Pune with friendly support, safe buses, and transparent pricing for educational day trips."
    },
    {
      "name": "Affordable School Bus on Rent in Pune",
      "description": "Get affordable school bus rentals in Pune with Samarth Travels. We offer flexible packages, trusted drivers, and clean buses for field trips, school picnics, and academic tours."
    },
    {
      "name": "Pune to Mahabaleshwar School Bus Rent",
      "description": "Take your students on a scenic educational journey with our Pune to Mahabaleshwar school bus rental. Our buses are ideal for day or overnight field trips with complete safety, comfort, and reliability."
    }
  ],
  "tableData": [
    ["Bus Hire for School Trips", "Bus Rentals for School Trips in Pune"],
    ["School Buses for Field Trips Near Me", "Bus Companies for School Field Trips"],
    ["Bus Rent for Picnic in Pune", "Tourist Bus Rent Per Day"],
    ["Mini Bus Rent in Pune for Picnic", "Bus for Rent in Pune for School Picnic"],
    ["Buses for College Picnic in Pune", "Rental Buses for Trips in Pune"],
    ["50 Seater Bus on Rent in Pune", "45 Seater Bus for Rent in Pune"],
    ["Bus Rentals for School Trips in Pimpri Chinchwad", "Popular Bus Services for Schools in Pimpri Chinchwad"],
    ["School Bus Service in Pune", "School Picnic Bus on Rent in Pune for Family"],
    ["School Picnic Bus Hire Near Me in Pune", "Affordable School Bus on Rent in Pune"],
    ["Pune to Mahabaleshwar School Bus Rent", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Trusted Bus Rental Service for School Trips in Pune",
        "WhyChoosedescription": "We provide reliable and safe bus rental services for school trips in Pune. Whether it’s an educational excursion, a picnic, or a sports event, our buses ensure that students and staff travel comfortably and safely to their destination."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses for School Trips",
        "WhyChoosedescription": "Our buses are designed for comfort, with ample seating, air-conditioning, and plenty of legroom, making long or short trips enjoyable for students. We cater to groups of all sizes, ensuring everyone has a comfortable and relaxing journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers for Safe School Travel",
        "WhyChoosedescription": "Our drivers are trained professionals with extensive experience in transporting school groups. They prioritize safety, punctuality, and the well-being of the students, ensuring a smooth and secure journey to and from your school trip destination."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for School Trip Bus Rentals",
        "WhyChoosedescription": "We offer competitive and transparent pricing for school trip bus rentals in Pune. Our flexible rental packages are designed to fit school budgets, with no hidden charges, so you can plan your trip with confidence."
    },
    {
        "WhyChooseheading": "24/7 Availability for School Trip Scheduling",
        "WhyChoosedescription": "Our bus rental services are available 24/7, allowing you to schedule your school trip whenever it’s most convenient. Whether it’s an early morning departure or a late return, we provide reliable transportation for your school events at any time."
    },
    {
        "WhyChooseheading": "Simple Booking Process and Real-Time Updates for Smooth Coordination",
        "WhyChoosedescription": "Booking a bus for your school trip is quick and easy. Once your booking is confirmed, you will receive real-time updates, tracking details, and driver contact information to ensure everything runs smoothly on the day of the trip."
    },
    {
        "WhyChooseheading": "Well-Maintained and Sanitized Buses for School Trips",
        "WhyChoosedescription": "We maintain our buses to the highest standards of safety and cleanliness. Each bus is thoroughly cleaned and sanitized before every trip to ensure a hygienic and safe environment for the students and teachers traveling."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Easy and Secure Booking",
        "WhyChoosedescription": "We offer a variety of payment methods, including UPI, credit/debit cards, digital wallets, and cash, making it easy and secure for schools to complete their bus rental bookings."
    }
]

















    }

const faqData = [
    {
        id: 1,
        question: 'How can I rent a bus for a school trip in Pune with Samarth Travels?',
        answer: 'Booking a bus for a school trip in Pune is easy with Samarth Travels. Just contact us through our website or phone, provide the number of students, travel dates, destination, and any special requirements—we’ll take care of the transportation logistics.',
    },
    {
        id: 2,
        question: 'What types of buses are available for school trips?',
        answer: 'We offer a range of buses for school trips including 22-seater, 32-seater, 40-seater, and 50-seater options. All buses are maintained to the highest safety standards and come with comfortable seating, clean interiors, and ample luggage space.',
    },
    {
        id: 3,
        question: 'Are the buses safe and suitable for transporting children?',
        answer: 'Yes, safety is our top priority. All buses used for school trips are regularly serviced, driven by experienced and background-verified drivers, and include emergency equipment such as first aid kits and fire extinguishers.',
    },
    {
        id: 4,
        question: 'Can teachers and staff also be accommodated in the same bus?',
        answer: 'Absolutely. Our buses are spacious enough to accommodate students, teachers, and staff comfortably. Let us know the headcount and we’ll recommend the right bus size for your trip.',
    },
    {
        id: 5,
        question: 'What is the cost of renting a bus for a school trip in Pune?',
        answer: 'Pricing varies based on the bus size, distance, and duration of the trip. Rates typically start at ₹30/km for smaller buses. We offer full-day and outstation packages tailored for educational tours and picnics.',
    },
    {
        id: 6,
        question: 'Can we plan multiple stops or visits during the school trip?',
        answer: 'Yes, we provide flexible itineraries. Whether it’s a city museum tour or an outstation educational trip with multiple stops, we’ll customize the schedule according to your plan.',
    },
    {
        id: 7,
        question: 'Do you offer support during the trip?',
        answer: 'Yes, we offer 24/7 customer support. Our team is available throughout the journey to handle any changes or provide assistance in case of emergencies.',
    },
];

const testimonials = [
    {
        name: 'Mr. Arvind Deshmukh',
        role: 'School Principal',
        text: 'Samarth Travels provided a 40-seater bus for our school’s science park visit. The bus was punctual, clean, and the driver was very disciplined. The entire trip was smooth and safe for the students.',
        image: '/img/testimonial/testi_school_arvind.jpg',
    },
    {
        name: 'Ms. Priya More',
        role: 'School Trip Coordinator',
        text: 'We hired two buses for a school picnic to Imagica from Pune. The service was excellent, the buses were well-maintained, and the support team helped us manage everything perfectly. Highly recommended!',
        image: '/img/testimonial/testi_school_priya.jpg',
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
  "name": "Bus Rentals For School Trips in Pune",
  "image": "https://samarthtravels.com/assets/images/school-trip-bus-rental-pune.jpg", // Replace with actual image URL
  "description": "Book reliable and affordable bus rentals for school trips in Pune with Samarth Travels. Ideal for school picnics, educational field trips, and college outings. Options include 45-seater and 50-seater AC and Non-AC buses.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "3983"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6800",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rentals-for-school-trips-pune" // Replace with actual page URL
  }
};





    return (
        <div>

<Helmet>
  <title>Bus Rentals for School Trips in Pune | School Picnic & Field Trip Bus Hire</title>
  <meta 
    name="description" 
    content="Rent buses for school trips in Pune from Samarth Travels. Ideal for school and college picnics, field trips, and educational tours. Choose from 45-seater, 50-seater, and mini buses at affordable rates." 
  />
  <meta 
    name="keywords" 
    content="Bus hire for school trips, Bus rentals for School Trips, School Buses for field trips near me, Bus companies for school field trips, bus rentals for school trips pune, Bus Rent for picnic in pune, Tourist Bus Rent Per Day, Mini Bus rent in pune for picnic, Bus for rent in Pune School Picnic, Buses for college picnic in Pune, Rental Buses for Trips in Pune, 50 seater bus on Rent in Pune, 45 seater bus for Rent in Pune, bus rentals for school trips in pimpri chinchwad, Popular Bus Services For Schools in Pimpri Chinchwad, School Bus Service in Pune, School picnic bus on rent in pune for family, school picnic bus hire near me school pune, affordable school Bus On Rent in Pune, pune to mahabaleshwar school bus rent" 
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
                            <img src='/images/keyword/60.jpg' alt='img' />
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

export default Busrentalforschooltrips;