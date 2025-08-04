
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FAQSection from './FAQKeyword';
import Testimonialskeyword from './TestimonialKeyword';
function Busrentalforwedding() {



    const cardData =
    {
        keyword: ' Bus Rental For Wedding',
        heading: 'Samarth Travels: Bus Rental For Wedding',
        headingDescription: 'Samarth Travels offers bus rental for weddings, ensuring smooth and comfortable transportation for guests in and around Pune. Choose from a fleet of AC and non-AC buses, from 17 to 50 seaters, all clean, spacious, and well-maintained. With courteous drivers, transparent pricing, and on-time service, Samarth Travels guarantees a hassle-free travel experience for your special occasion.',

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
    "name": "Rent Bus for Wedding Guests Transportation",
    "description": "Ensure your wedding guests travel comfortably with Samarth Travels' dedicated wedding bus rental services in Pune. Ideal for transporting guests between venues, hotels, and event locations with ease."
  },
  {
    "name": "Wedding Bus Hire for Family & Friends",
    "description": "Hire spacious and clean buses for your family and friends during your wedding festivities. Our punctual and courteous drivers ensure a smooth and joyful travel experience for your loved ones."
  },
  {
    "name": "Affordable Bus Rental for Marriage Functions",
    "description": "Looking for budget-friendly wedding transport? Our affordable bus rental service provides reliable, comfortable transportation for marriage events without exceeding your budget."
  },
  {
    "name": "Luxury Bus Rental for Wedding Ceremonies",
    "description": "Add elegance to your wedding travel with our luxury buses. Featuring plush seating and premium amenities, these buses are ideal for VIP guests and upscale marriage functions."
  },
  {
    "name": "AC Bus Hire for Wedding Travel Needs",
    "description": "Keep your guests cool and comfortable with our AC buses. Whether it’s for the baraat, reception, or guest transfers, our well-maintained buses are perfect for Pune’s warm weather."
  },
  {
    "name": "Bus on Rent for Baraat and Reception",
    "description": "Make your baraat or reception transportation hassle-free with Samarth Travels. Our reliable buses ensure everyone arrives together and on time to your wedding celebration."
  },
  {
    "name": "Wedding Guest Pickup and Drop Bus Service",
    "description": "We offer end-to-end guest pickup and drop-off bus services for weddings in Pune. Our organized service ensures timely movement across hotels, venues, and banquet halls."
  },
  {
    "name": "32-Seater Bus Hire for Wedding",
    "description": "Rent a 32-seater bus for wedding events in Pune, ideal for medium-sized guest groups. Spacious, clean, and driven by professionals, this is a perfect solution for marriage transport needs."
  },
  {
    "name": "Comfortable Bus Rental for Marriage Events",
    "description": "Focus on your celebration while we take care of the logistics. Our comfortable buses ensure your guests enjoy every moment of your wedding without travel stress."
  },
  {
    "name": "Wedding Shuttle Bus Service on Rent",
    "description": "For back-to-back functions and multiple venue locations, our shuttle bus rental service is ideal. Efficient, comfortable, and coordinated guest movement guaranteed."
  }
],
"tableData": [
  ["Rent Bus for Wedding Guests Transportation", "Wedding Bus Hire for Family & Friends"],
  ["Affordable Bus Rental for Marriage Functions", "Luxury Bus Rental for Wedding Ceremonies"],
  ["AC Bus Hire for Wedding Travel Needs", "Bus on Rent for Baraat and Reception"],
  ["Wedding Guest Pickup and Drop Bus Service", "32-Seater Bus Hire for Wedding"],
  ["Comfortable Bus Rental for Marriage Events", "Wedding Shuttle Bus Service on Rent"]
],


    

"whychoose": [
    {
        "WhyChooseheading": "Bus Rental for Wedding – Make Your Special Day Even More Memorable",
        "WhyChoosedescription": "Samarth Travels offers elegant and spacious buses for wedding transportation, providing a comfortable and stylish way to transport guests. Whether it's for the bride and groom, family members, or the entire guest list, our buses ensure a smooth and luxurious travel experience for everyone involved."
    },
    {
        "WhyChooseheading": "Luxurious, Air-Conditioned Buses for Wedding Events",
        "WhyChoosedescription": "Our wedding buses come equipped with plush seating, advanced air conditioning, and high-quality amenities, ensuring that your guests travel in comfort and style. Enjoy a luxurious experience with enough space for everyone to relax and celebrate the big day."
    },
    {
        "WhyChooseheading": "Perfect for Bride, Groom, and Wedding Guests",
        "WhyChoosedescription": "Our buses are the ideal solution for transporting the bride and groom, family members, and wedding guests to and from the wedding venue, reception, and other events. We cater to all group sizes, ensuring everyone arrives together, on time, and in comfort."
    },
    {
        "WhyChooseheading": "Professional Chauffeurs for Timely and Safe Wedding Transportation",
        "WhyChoosedescription": "Our experienced and professional chauffeurs understand the importance of your wedding day. They are punctual, courteous, and focused on providing a safe and smooth ride, ensuring that all transportation needs are met efficiently and on time."
    },
    {
        "WhyChooseheading": "Well-Maintained and Clean Fleet for Wedding Day Travel",
        "WhyChoosedescription": "We take extra care to ensure our buses are in pristine condition for your wedding day. All vehicles are meticulously cleaned, maintained, and sanitized, offering a fresh and hygienic environment for all your guests."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing for Wedding Bus Rentals",
        "WhyChoosedescription": "Samarth Travels offers competitive and clear pricing for wedding bus rentals. There are no hidden charges, and our all-inclusive pricing covers the cost of the vehicle, driver fees, fuel, tolls, and any other expenses, allowing you to budget confidently."
    },
    {
        "WhyChooseheading": "24/7 Availability for Flexible Wedding Transportation",
        "WhyChoosedescription": "We understand that wedding schedules can be tight and unpredictable. That’s why our wedding buses are available 24/7, ensuring you can book transportation that fits your specific needs and time frame, no matter how early or late."
    },
    {
        "WhyChooseheading": "Easy Booking and Convenient Payment Methods for Wedding Rentals",
        "WhyChoosedescription": "Booking your wedding bus rental with Samarth Travels is simple and hassle-free. We offer various payment options, including UPI, credit/debit cards, digital wallets, and cash, so you can secure your transportation with ease."
    }
]













    }

const faqData = [
    {
        id: 1,
        question: 'How do I book a bus for a wedding with Samarth Travels?',
        answer: 'Booking a bus for a wedding is simple with Samarth Travels. Just contact our team or visit our website, share your dates, guest count, and pickup-drop details. We’ll help you choose the right bus type and customize the rental as per your wedding schedule.',
    },
    {
        id: 2,
        question: 'What types of buses are available for wedding events?',
        answer: 'We offer a wide variety of buses for weddings, including AC and Non-AC options, 17 to 50-seater buses, Mini Buses, Tempo Travellers, and Luxury Urbania vans. All vehicles are spacious, clean, and ideal for transporting guests comfortably.',
    },
    {
        id: 3,
        question: 'Can I book buses for multiple days during the wedding?',
        answer: 'Yes, we offer flexible multi-day packages for wedding functions including sangeet, haldi, wedding, and reception. You can also customize time slots and routes according to your event flow.',
    },
    {
        id: 4,
        question: 'Is the bus rental service customizable for wedding guest pickups?',
        answer: 'Absolutely! We offer door-to-door pickup and drop-off services for your guests. You can provide us with multiple pickup locations and schedules to ensure smooth transport on your big day.',
    },
    {
        id: 5,
        question: 'Are decorations or branding allowed on the wedding buses?',
        answer: 'Yes, light decorations and event branding can be done on the buses with prior notice. We’ll coordinate with your event planner to make sure it aligns with your wedding theme.',
    },
    {
        id: 6,
        question: 'What is included in the wedding bus rental package?',
        answer: 'The package includes the selected bus, experienced driver, fuel charges, and basic vehicle amenities. Additional requests like extended hours, night duty, or decorations can be included at extra cost.',
    },
    {
        id: 7,
        question: 'How early should I book buses for my wedding?',
        answer: 'We recommend booking at least 2 to 4 weeks in advance, especially during peak wedding seasons, to ensure availability of your preferred vehicle type and customized service.',
    },
];

const testimonials = [
    {
        name: 'Mr. Harshal Patil',
        role: 'Groom',
        text: 'We booked multiple buses from Samarth Travels for our wedding in Pune. The coordination was flawless, buses were on time, and guests had a very comfortable experience. Their service added to the smooth flow of our big day!',
        image: '/img/testimonial/testi_2_72.jpg',
    },
    {
        name: 'Mrs. Rekha Mahajan',
        role: 'Wedding Planner',
        text: 'Samarth Travels is my go-to for wedding transportation. Their team is professional, responsive, and understands the importance of punctuality and comfort. The buses are clean and drivers are well-trained. Highly recommend!',
        image: '/img/testimonial/testi_2_73.jpg',
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
  "name": "Bus Rental for Wedding",
  "image": "https://samarthtravels.com/assets/images/bus-rental-for-wedding.jpg",
  "description": "Rent a bus for wedding guest transportation with Samarth Travels. Affordable and luxury bus rental services for marriage functions, Baraat, reception, and wedding ceremonies. AC buses and 32-seater options available for comfortable wedding travel.",
  "brand": {
    "@type": "Brand",
    "name": "Samarth Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6420"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "10000",
    "availability": "https://schema.org/InStock",
    "url": "https://samarthtravels.com/bus-rental-for-wedding"
  }
};





    return (
        <div>


<Helmet>
  <title>Bus Rental for Wedding | Guest Transportation, Reception & Baraat | Samarth Travels</title>
  <meta 
    name="description" 
    content="Rent a bus for wedding guest transportation, Baraat, and reception with Samarth Travels. Affordable and luxury bus rental services for marriage functions, wedding shuttle services, and guest pickup and drop. AC buses and 32-seater options available." 
  />
  <meta 
    name="keywords" 
    content="Rent Bus for Wedding Guests Transportation, Wedding Bus Hire for Family & Friends, Affordable Bus Rental for Marriage Functions, Luxury Bus Rental for Wedding Ceremonies, AC Bus Hire for Wedding Travel Needs, Bus on Rent for Baraat and Reception, Wedding Guest Pickup and Drop Bus Service, 32-Seater Bus Hire for Wedding, Comfortable Bus Rental for Marriage Events, Wedding Shuttle Bus Service on Rent" 
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
                            <img src='/images/keyword/16.jpg' alt='img' />
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

export default Busrentalforwedding;