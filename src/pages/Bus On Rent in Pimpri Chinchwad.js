
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busonrentinpimprichichwad() {



    const cardData =
    {
        keyword: '  Bus On Rent in Pimpri Chinchwad',
        heading: 'Samarth Travels: Bus On Rent in Pimpri Chinchwad',
        headingDescription: 'Samarth Travels offers bus on rent in Pimpri Chinchwad, ideal for corporate events, school trips, weddings, family outings, and outstation tours. Our fleet of well-maintained 14 to 50-seater buses is equipped with air-conditioning, push-back seats, and spacious interiors to ensure a comfortable and convenient journey for all group sizes. With experienced drivers, flexible rental options, and transparent pricing, Samarth Travels provides safe, reliable, and cost-effective bus rental services across Pimpri Chinchwad and surrounding areas.',

        top: 'Top Places to Visit in Pune with Samarth Travels',

       "topPlaces": [
    {
      "title": "Shaniwar Wada",
      "description": "Shaniwar Wada is a majestic 18th-century fortification located in the heart of Pune. Once the seat of the powerful Peshwas of the Maratha Empire, it is renowned for its historical significance, massive gateways, and intriguing legends, including ghost stories tied to its mysterious past. Despite being partially destroyed by fire, the remaining structures, especially the Delhi Gate and the fort’s expansive garden layout, provide a fascinating glimpse into Maratha architecture and political history."
    },
    {
      "title": "Aga Khan Palace",
      "description": "Built in 1892 by Sultan Aga Khan III, this sprawling palace is an architectural gem and a key monument in India’s freedom struggle. It served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other leaders during the Quit India Movement. The palace features Italian arches, sprawling gardens, and houses a museum that contains personal belongings of Gandhi and historical photographs. It is also the final resting place of Kasturba Gandhi and Mahadev Desai, adding to its solemn importance."
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
      "name": "Bus on Rent in Pimpri Chinchwad",
      "description": "Samarth Travels offers bus rentals in Pimpri Chinchwad for various purposes including family trips, corporate events, weddings, and more. Choose from a variety of buses to suit your needs."
    },
    {
      "name": "Rent Buses for Group Travel in Pimpri Chinchwad",
      "description": "Our buses are ideal for group travel in Pimpri Chinchwad. Whether for picnics, outings, or corporate trips, we provide buses that fit your group size and requirements."
    },
    {
      "name": "Bus Rental for Family Trips Pimpri Chinchwad",
      "description": "Make your family trips comfortable and enjoyable by renting a bus in Pimpri Chinchwad. Our buses are spacious and well-maintained for family outings."
    },
    {
      "name": "Bus Hire for Sightseeing in Pimpri Chinchwad",
      "description": "Explore the best sightseeing spots in Pimpri Chinchwad with our comfortable and reliable bus rentals. Choose from AC and Non-AC buses for your sightseeing needs."
    },
    {
      "name": "Bus on Rent for Weddings in Pimpri Chinchwad",
      "description": "Ensure smooth transportation for your wedding guests with our buses for hire in Pimpri Chinchwad. Ideal for transporting guests to and from wedding venues."
    },
    {
      "name": "Rent Buses for Corporate Events Pimpri Chinchwad",
      "description": "We provide bus rentals for corporate events in Pimpri Chinchwad. Our buses are perfect for employee transport to seminars, conferences, and team-building activities."
    },
    {
      "name": "Bus Rental Services in Pimpri Chinchwad",
      "description": "Samarth Travels offers reliable and affordable bus rental services in Pimpri Chinchwad. Choose from a range of buses for picnics, sightseeing, corporate trips, and more."
    },
    {
      "name": "Bus on Rent for Picnics Pimpri Chinchwad",
      "description": "Make your picnic plans hassle-free with our bus rental service in Pimpri Chinchwad. Our buses are ideal for day trips to nearby locations and picnics."
    },
    {
      "name": "Bus on Rent for Outstation Trips Pimpri Chinchwad",
      "description": "Rent a bus for your outstation trips from Pimpri Chinchwad. We provide buses for long-distance journeys to popular destinations like Shirdi, Lonavala, and more."
    },
    {
      "name": "Bus on Rent for Local Transfers in Pimpri Chinchwad",
      "description": "We provide buses for local transfers within Pimpri Chinchwad. Ideal for events, family gatherings, and short-distance travel, our buses offer comfort and convenience."
    },
    {
      "name": "Best Bus Rental Services Pimpri Chinchwad",
      "description": "Samarth Travels is the go-to provider for the best bus rental services in Pimpri Chinchwad. Our wide range of buses ensures that you have the perfect vehicle for any occasion."
    }
  ],
  "tableData": [
    ["Bus on Rent in Pimpri Chinchwad", "Rent Buses for Group Travel in Pimpri Chinchwad"],
    ["Bus Rental for Family Trips Pimpri Chinchwad", "Bus Hire for Sightseeing in Pimpri Chinchwad"],
    ["Bus on Rent for Weddings in Pimpri Chinchwad", "Rent Buses for Corporate Events Pimpri Chinchwad"],
    ["Bus Rental Services in Pimpri Chinchwad", "Bus on Rent for Picnics Pimpri Chinchwad"],
    ["Bus on Rent for Outstation Trips Pimpri Chinchwad", "Bus on Rent for Local Transfers in Pimpri Chinchwad"],
    ["Best Bus Rental Services Pimpri Chinchwad", ""]
  ],


"whychoose": [
    {
        "WhyChooseheading": "Reliable Bus Rental Service in Pimpri Chinchwad",
        "WhyChoosedescription": "We offer dependable bus rental services in Pimpri Chinchwad, whether for corporate events, school trips, weddings, or group tours. Our buses are well-maintained and provide a comfortable ride, ensuring smooth travel for your group."
    },
    {
        "WhyChooseheading": "Wide Range of Bus Options for Every Group Size",
        "WhyChoosedescription": "Our fleet includes a variety of buses, from 17-seater minibuses to 50+ seater coaches. Whether you're planning a small gathering or a large event, we have the perfect bus to accommodate your group comfortably."
    },
    {
        "WhyChooseheading": "Comfortable and Air-Conditioned Buses for Group Travel",
        "WhyChoosedescription": "All our buses are equipped with air-conditioning, comfortable seating, and ample legroom, ensuring a pleasant and relaxing travel experience for your group, no matter the distance."
    },
    {
        "WhyChooseheading": "Experienced Drivers for Safe and Smooth Travel",
        "WhyChoosedescription": "Our experienced and professional drivers are well-versed with the routes in and around Pimpri Chinchwad and are committed to providing a safe, punctual, and courteous service. They ensure your journey is smooth and comfortable."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Bus Rentals",
        "WhyChoosedescription": "We offer competitive pricing with no hidden fees. Our bus rental packages are designed to suit various budgets, offering you a cost-effective solution for group travel without compromising on quality."
    },
    {
        "WhyChooseheading": "Flexible Bus Rentals for Local and Outstation Travel",
        "WhyChoosedescription": "Our buses are available for both local travel within Pimpri Chinchwad and outstation trips. Whether you're planning a city tour or a longer journey, we provide flexible options to suit your travel needs."
    },
    {
        "WhyChooseheading": "24/7 Availability for Hassle-Free Travel Planning",
        "WhyChoosedescription": "We understand that travel needs can arise at any time, which is why our bus rental services are available 24/7. Book your bus at any time that fits your schedule, and we’ll ensure timely service."
    },
    {
        "WhyChooseheading": "Simple and Easy Booking Process",
        "WhyChoosedescription": "Booking your bus is easy through our website or customer service. After booking, you'll receive all necessary details such as driver contact information and real-time updates on your bus's arrival."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Vehicles",
        "WhyChoosedescription": "We take hygiene seriously. Our buses are thoroughly cleaned and sanitized before every trip, ensuring a safe and comfortable environment for all passengers."
    },
    {
        "WhyChooseheading": "Multiple Payment Options for Convenience",
        "WhyChoosedescription": "We offer various secure payment options, including UPI, credit/debit cards, digital wallets, and cash, to ensure that booking your bus rental is as convenient as possible."
    }
]



















    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a bus rental in Pimpri Chinchwad with Samarth Travels?',
        answer: 'Booking a bus with Samarth Travels in Pimpri Chinchwad is easy! You can book through our website or by contacting our customer support team. Just provide your travel details such as trip type, number of passengers, and dates, and we’ll handle the rest.',
    },
    {
        id: 2,
        question: 'What types of buses are available for rent in Pimpri Chinchwad?',
        answer: 'We offer a wide range of buses for rent in Pimpri Chinchwad, including 17-seater, 20-seater, 32-seater, 40-seater, and 50-seater buses. Choose from AC and Non-AC options based on your travel requirements and budget.',
    },
    {
        id: 3,
        question: 'Are buses available for both local and outstation trips in Pimpri Chinchwad?',
        answer: 'Yes, we provide buses for both local trips within Pimpri Chinchwad and outstation travel to various destinations. Whether it’s for a day trip, event, or multi-day tour, our buses are perfect for all types of travel needs.',
    },
    {
        id: 4,
        question: 'What are the rental charges for buses in Pimpri Chinchwad?',
        answer: 'Rental charges depend on the type of bus, distance, and trip duration. We offer local packages like 4 hours/40 km or 8 hours/80 km, as well as pricing for outstation trips. Contact us for personalized pricing and packages.',
    },
    {
        id: 5,
        question: 'What amenities are included in the buses?',
        answer: 'Our buses come equipped with comfortable seating, clean interiors, ample luggage space, air conditioning (for AC buses), and music systems. Premium options may include Wi-Fi, LED screens, and charging ports.',
    },
    {
        id: 6,
        question: 'Are drivers included in the bus rental?',
        answer: 'Yes, all our bus rentals come with a professional driver. Fuel charges are also included in the rental. Additional charges, such as tolls and parking, will be communicated upfront for transparency.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for bus rentals in Pimpri Chinchwad?',
        answer: 'Yes, we offer 24/7 support for all bus rentals in Pimpri Chinchwad. Our team is available to assist you with bookings, schedule changes, and last-minute requests to ensure your travel plans go smoothly.',
    },
];

const testimonials = [
    {
        name: 'Mr. Rajiv Kulkarni',
        role: 'Event Organizer',
        text: 'We booked a 40-seater bus from Samarth Travels for an event in Pimpri Chinchwad. The bus was comfortable and well-maintained. The driver was professional, and the entire process was hassle-free. Highly recommended!',
        image: '/img/testimonial/testi_pimpri_rajiv.jpg',
    },
    {
        name: 'Ms. Neha Deshmukh',
        role: 'Wedding Planner',
        text: 'I rented a 32-seater bus for a wedding in Pimpri Chinchwad. The service was exceptional. The bus was spacious, clean, and very comfortable. Samarth Travels made guest transportation on the wedding day so much easier.',
        image: '/img/testimonial/testi_pimpri_neha.jpg',
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
  "name": "Bus On Rent in Pimpri Chinchwad",
  "image": "https://samarthtravels.com/assets/images/bus-on-rent-pimpri-chinchwad.jpg", // Replace with the correct image URL
  "description": "Rent buses in Pimpri Chinchwad with Samarth Travels for group travel, family trips, sightseeing, corporate events, picnics, and weddings. We offer a variety of buses for local transfers, outstation trips, and more at affordable prices.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6130"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "12000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-on-rent-pimpri-chinchwad" 
  }
};





    return (
        <div>

<Helmet>
  <title>Pune to Goa Cabs | S9 Travels</title>
  <meta
    name="description"
    content="Book Pune to Goa cabs with S9 Travels. Enjoy safe, affordable and comfortable taxi rides for your one-way or round trip. Multiple car options available with transparent pricing."
  />
  <meta
    name="keywords"
    content="Pune to Goa cabs, Pune to Goa taxi, cab from Pune to Goa, one way taxi Pune Goa, round trip Pune to Goa cab, S9 Travels Goa cab, Pune to Goa car hire, Pune to Goa sedan cab, Pune to Goa SUV taxi"
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
                            <img src='/images/keyword/92.jpg' alt='img' />
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

export default Busonrentinpimprichichwad;