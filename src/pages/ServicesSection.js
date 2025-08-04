import React from 'react';

const services = [
  {
    title: " Tempo Traveller on Rent Pune",
    image: "/images/keyword/5.jpg",
    icon: "/img/icon/service_card_1.svg",
    description: "Samarth Travels offers Tempo Traveller on Rent in Pune for comfortable and affordable travel. Perfect for group trips, corporate events, or family vacations, our vehicles come in various sizes with both AC and Non-AC options. Enjoy a smooth journey with reliable service!",
    link: "/tempo-traveller-on-rent-pune"
  },
  {
    title: " Mini Bus for Rent",
    image: "/images/keyword/7.jpg",
    icon: "/img/icon/service_card_2.svg",
    description: "Samarth Travels provides Mini Bus for Rent in Pune, ideal for group outings, corporate events, or school trips. Choose from a range of sizes and comfort levels, including AC and Non-AC options, to ensure a convenient and enjoyable travel experience.",
    link: "/mini-bus-for-rent"
  },
  {
    title: " 32 Seater Tempo Traveller Service",
    image: "/images/keyword/31.jpg",
    icon: "/img/icon/service_card_3.svg",
    description: "Samarth Travels offers a 32 Seater Tempo Traveller Service in Pune, perfect for large groups, family trips, or corporate outings. With spacious seating and both AC and Non-AC options, we ensure a comfortable and enjoyable journey for everyone.",
    link: "/32-seater-tempo-traveller-service"
  },
  {
    title: " Luxury Force Urbania on Rent in Pune",
    image: "/images/keyword/34.jpg",
    icon: "/img/icon/service_card_4.svg",
    description: "Samarth Travels offers Luxury Force Urbania on Rent in Pune for a premium travel experience. Ideal for corporate events, family trips, and group tours, this luxury vehicle provides comfort, style, and ample space with top-notch amenities for a smooth journey.",
    link: "/luxury-force-urbania-on-rent-in-pune"
  },
  {
    title: " Pune to Mahabaleshwar Urbania Bus Hire on Rent",
    image: "/images/keyword/35.jpg",
    icon: "/img/icon/service_card_5.svg",
    description: "Samarth Travels provides Pune to Mahabaleshwar Urbania Bus Hire on Rent, offering a comfortable and stylish ride for your trip. Enjoy a spacious, air-conditioned journey with the luxury of a Force Urbania, perfect for groups seeking comfort and convenience on their way to Mahabaleshwar.",
    link: "/pune-to-mahabaleshwar-urbania-bus-hire-on-rent"
  },
  {
    title: " Pune to Shirdi Force Urbania on Rent",
    image: "/images/keyword/36.jpg",
    icon: "/img/icon/service_card_6.svg",
    description: "Samarth Travels offers Pune to Shirdi Force Urbania on Rent, providing a luxurious and comfortable travel experience. With ample space and air-conditioning, the Force Urbania ensures a smooth and relaxing journey for groups heading to Shirdi, making your trip both enjoyable and convenient.",
    link: "/pune-to-shirdi-force-urbania-on-rent"
  }
];

const ServicesSection = () => {





  return (

<>



  <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title text-center">service</h1>
                </div>
            </div>
        </div>

    <section className="space bg-smoke" id="service-sec">
      <div className="container">
        <div className="row gy-30">
          {services.map((service, index) => (
            <div className="col-md-6 col-xl-4" key={index}>
              <div className="service-card">
                <div className="shape">
                  <img src="/img/service/service_card_shape.png" alt="shape" />
                </div>
                <div className="service-card_img">
                  <img src={service.image} alt="Service" />
                  {/* <div className="service-card_icon">
                    <img src={service.icon} alt="Icon" />
                  </div> */}
                </div>
                <h3 className="box-title">
                  <a href={service.link}>{service.title}</a>
                </h3>
                <p className="service-card_text">{service.description}</p>
                <a href={service.link} className="line-btn">
                  Read More<i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
  );
};

export default ServicesSection;
