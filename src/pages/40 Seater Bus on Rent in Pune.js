
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Fourseaterbus() {



    const cardData =
    {
        keyword: '  40 Seater Bus on Rent in Pune',
        heading: 'Samarth Travels:  40 Seater Bus on Rent in Pune',
        headingDescription: 'Samarth Travels offers 40 seater bus on rent in Pune, ideal for weddings, corporate events, school trips, and outstation group travel. Our buses are spacious, clean, and available in both AC and non-AC options, driven by experienced chauffeurs. With transparent pricing, no hidden charges, and a focus on comfort and punctuality, Samarth Travels ensures a smooth and reliable journey for every occasion.',

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
        "name": "Rent 40-Seater Bus in Pune",
        "description": "Rent a spacious and comfortable 40-seater bus from Samarth Travels for your next group outing in Pune. Whether it's a corporate event, family trip, or school excursion, our buses ensure a smooth and safe journey."
    },
    {
        "name": "Affordable 40-Seater Bus Hire Pune",
        "description": "Samarth Travels offers budget-friendly 40-seater bus hire services in Pune. Enjoy affordable and reliable travel options for group tours, school trips, or corporate outings, with a focus on comfort and value."
    },
    {
        "name": "Luxury 40-Seater Bus Rental in Pune",
        "description": "Travel in style with Samarth Travels' luxury 40-seater buses in Pune. Equipped with premium amenities, plush seating, and air-conditioning, our luxury buses are perfect for corporate events, weddings, and VIP group travel."
    },
    {
        "name": "40-Seater AC Bus Hire in Pune",
        "description": "Beat the Pune heat with Samarth Travels’ 40-seater AC bus rental services. Whether you're traveling for business, family outings, or sightseeing tours, our AC buses provide comfort and a cool, relaxing environment for your journey."
    },
    {
        "name": "40-Seater Bus on Rent for Group Travel Pune",
        "description": "Planning group travel in Pune? Rent a 40-seater bus from Samarth Travels for a comfortable and convenient ride. With plenty of space and modern amenities, our buses are perfect for school trips, corporate outings, or family vacations."
    },
    {
        "name": "40-Seater Bus Rental for Corporate Events in Pune",
        "description": "For corporate events in Pune, rent a 40-seater bus from Samarth Travels to ensure your team travels comfortably and on time. Our buses offer plenty of space for group events, conferences, and business tours, with professional service."
    },
    {
        "name": "Rent a 40-Seater Bus for Family Outings in Pune",
        "description": "Make family outings stress-free with a 40-seater bus from Samarth Travels. Spacious and comfortable, our buses are ideal for family trips, vacations, or get-togethers, ensuring everyone travels together comfortably."
    },
    {
        "name": "Bus Hire 40-Seater for School Trips in Pune",
        "description": "Samarth Travels provides reliable and safe 40-seater bus rentals for school trips in Pune. With ample space for students, teachers, and staff, our buses ensure a safe and enjoyable journey to the destination."
    },
    {
        "name": "40-Seater Bus on Rent for Wedding Events in Pune",
        "description": "For wedding events in Pune, rent a 40-seater bus to transport your guests in comfort and style. Our buses ensure that everyone arrives at the wedding venue or reception on time and in luxury, making the day even more special."
    },
    {
        "name": "40-Seater Bus Hire for Picnic Trips in Pune",
        "description": "Planning a picnic trip with a large group? Rent a 40-seater bus from Samarth Travels for your next outing. Our buses are perfect for family or corporate picnics, offering comfortable seating and plenty of space for your group and picnic gear."
    }
],
"tableData": [
    ["Rent 40-Seater Bus in Pune", "Affordable 40-Seater Bus Hire Pune"],
    ["Luxury 40-Seater Bus Rental in Pune", "40-Seater AC Bus Hire in Pune"],
    ["40-Seater Bus on Rent for Group Travel Pune", "40-Seater Bus Rental for Corporate Events in Pune"],
    ["Rent a 40-Seater Bus for Family Outings in Pune", "Bus Hire 40-Seater for School Trips in Pune"],
    ["40-Seater Bus on Rent for Wedding Events in Pune", "40-Seater Bus Hire for Picnic Trips in Pune"]
],


"whychoose": [
    {
        "WhyChooseheading": "Spacious 40 Seater Bus on Rent in Pune for Comfortable Group Travel",
        "WhyChoosedescription": "Samarth Travels offers reliable 40 seater buses on rent in Pune, perfect for corporate events, school trips, weddings, religious tours, and large family outings. Our buses are built for comfort, with ample space, comfortable seating, and smooth suspension to ensure a relaxing journey for all passengers."
    },
    {
        "WhyChooseheading": "Ideal for Large Groups with Extra Legroom and Luggage Space",
        "WhyChoosedescription": "Our 40 seater buses are designed to accommodate large groups without compromising on comfort. With wide aisles, cushioned seats, generous legroom, and overhead luggage racks, your group can travel together in comfort, with enough space for bags, belongings, and equipment."
    },
    {
        "WhyChooseheading": "Experienced Drivers for a Safe and Smooth Ride",
        "WhyChoosedescription": "At Samarth Travels, your safety is our top priority. Our professional drivers are highly experienced, well-trained in handling large vehicles, and familiar with Pune and long-distance routes. They ensure a safe, punctual, and stress-free journey every time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for 40 Seater Bus Rentals",
        "WhyChoosedescription": "We provide competitive rates and complete transparency in pricing. Whether you're renting for a few hours or multiple days, you get detailed quotes with no hidden charges. Our pricing is structured to offer the best value for your group transport needs in Pune and beyond."
    },
    {
        "WhyChooseheading": "Available 24/7 to Suit Any Schedule or Occasion",
        "WhyChoosedescription": "Whether it’s an early morning pickup, a late-night drop, or an outstation trip, our 40 seater bus rental service is available 24/7. We adapt to your timing and requirements, ensuring that your group’s travel plans stay on track without delay or disruption."
    },
    {
        "WhyChooseheading": "Simple Booking Process with Live Updates",
        "WhyChoosedescription": "Booking a 40 seater bus with Samarth Travels is easy and convenient. Reserve your bus online or via phone, and receive real-time tracking, driver details, and trip updates. Our responsive team is available to support you at every step of the journey."
    },
    {
        "WhyChooseheading": "Clean, Sanitized, and Well-Maintained Fleet",
        "WhyChoosedescription": "Cleanliness and maintenance are key to a pleasant group journey. Our 40 seater buses are thoroughly sanitized before every trip and regularly serviced to ensure optimal performance, hygiene, and passenger comfort on every ride."
    },
    {
        "WhyChooseheading": "Flexible Payment Options for Hassle-Free Transactions",
        "WhyChoosedescription": "To make your rental experience seamless, we accept multiple payment methods—cash, UPI, credit/debit cards, and digital wallets. Whether you’re booking for a company, school, or private event, payment is quick, secure, and stress-free."
    }
]




















    }

const faqData = [
    {
        id: 1,
        question: 'How do I rent a 40-seater bus in Pune with Samarth Travels?',
        answer: 'Renting a 40-seater bus with Samarth Travels is quick and easy. You can book directly through our website or call our customer support team. Simply provide the details of your trip, such as the number of passengers, travel dates, and destination, and we will arrange the perfect bus for you.',
    },
    {
        id: 2,
        question: 'What are the features of the 40-seater bus available for rent?',
        answer: 'Our 40-seater buses are spacious and comfortable, featuring reclining seats, air-conditioning, large windows, and ample luggage space. It is an ideal choice for group travel, including corporate events, school trips, and family outings.',
    },
    {
        id: 3,
        question: 'Is the 40-seater bus suitable for long-distance travel?',
        answer: 'Yes, the 40-seater bus is perfect for both short and long-distance travel. With comfortable seating, air-conditioning, and modern amenities, it ensures a pleasant and relaxing journey for all passengers.',
    },
    {
        id: 4,
        question: 'Can I rent a 40-seater bus for a one-day trip in Pune?',
        answer: 'Yes, we offer one-day bus rentals for trips within Pune and surrounding areas. Whether it’s a local tour, a corporate outing, or a family gathering, the 40-seater bus provides ample space and comfort for your group.',
    },
    {
        id: 5,
        question: 'What is included in the 40-seater bus rental service?',
        answer: 'The rental service includes the 40-seater bus, a professional driver, and fuel. Additional costs like tolls, parking fees, or permits will be discussed upfront to ensure complete transparency.',
    },
    {
        id: 6,
        question: 'Can I customize the pickup and drop-off locations for the 40-seater bus?',
        answer: 'Yes, we can customize the pickup and drop-off locations to suit your needs. Whether you need multiple stops or a specific route, we will tailor the journey to meet your requirements.',
    },
    {
        id: 7,
        question: 'Is 24/7 support available for 40-seater bus rentals in Pune?',
        answer: 'Yes, we provide 24/7 customer support for all our bus rental services. If you have any questions or need any assistance during the booking process, our team is always ready to help ensure your trip goes smoothly.',
    },
];

const testimonials = [
    {
        name: 'Mr. Sanjay Mehta',
        role: 'Corporate Event Organizer',
        text: 'We rented a 40-seater AC bus for our team outing in Pune. The bus was very comfortable, the driver was courteous, and the overall service was fantastic. It was a seamless experience, and we will definitely book again with Samarth Travels for future events.',
        image: '/img/testimonial/testi_2_50.jpg',
    },
    {
        name: 'Mrs. Shruti Agarwal',
        role: 'Family Trip Planner',
        text: 'For our family’s reunion, we rented a 40-seater bus for a trip to Lonavala. The bus was spacious and clean, and the air-conditioning made the long journey comfortable. Everyone had a great time, and we’re already planning our next trip with Samarth Travels.',
        image: '/img/testimonial/testi_2_51.jpg',
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
  "name": "40-Seater Bus on Rent in Pune",
  "image": "https://samarthtravels.com/assets/images/40-seater-bus-hire-pune.jpg",
  "description": "Rent a 40-Seater Bus in Pune for group travel, family outings, corporate events, school trips, and wedding functions. Affordable and luxury AC bus options available for picnic trips, corporate travel, and family tours.",
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
    "price": "7000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/40-seater-bus-on-rent-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>40-Seater Bus on Rent in Pune | Affordable & Luxury Options | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a 40-Seater Bus in Pune for group travel, family outings, corporate events, and wedding functions. Affordable and luxury AC bus options available for picnic trips, school trips, and family tours." 
  />
  <meta 
    name="keywords" 
    content="Rent 40-Seater Bus in Pune, Affordable 40-Seater Bus Hire Pune, Luxury 40-Seater Bus Rental in Pune, 40-Seater AC Bus Hire in Pune, 40-Seater Bus on Rent for Group Travel Pune, 40-Seater Bus Rental for Corporate Events in Pune, Rent a 40-Seater Bus for Family Outings in Pune, Bus Hire 40-Seater for School Trips in Pune, 40-Seater Bus on Rent for Wedding Events in Pune, 40-Seater Bus Hire for Picnic Trips in Pune" 
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
                            <img src='/images/keyword/32.jpg' alt='img' />
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

export default Fourseaterbus;