import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Mr. Pravin Joshi',
    role: 'Family Tour – Samarth Travels',
    text: '“Samarth Travels made our Pune to Mahabaleshwar family trip extremely comfortable. Clean vehicle, professional driver, and smooth journey from start to finish.”',
    image: '/img/testimonial/testi_2_1.jpg',
  },
  {
    name: 'Ms. Kavita Patil',
    role: 'Solo Traveller – Samarth Travels',
    text: '“I took a solo bus from Pune to Shirdi with Samarth Travels. Felt completely safe, and the driver was polite and well-informed about the route. Highly recommended!”',
    image: '/img/testimonial/testi_2_2.jpg',
  },
  {
    name: 'Mr. Arjun Deshmukh',
    role: 'Corporate Client – Samarth Travels',
    text: '“Our company uses Samarth Travels for all outstation employee transport. Their punctuality and clean fleet make them a reliable partner every time.”',
    image: '/img/testimonial/testi_2_3.jpg',
  },
  {
    name: 'Ms. Rutuja Pawar',
    role: 'Educational Tour – Samarth Travels',
    text: '“Our school booked a 32-seater bus from Samarth Travels for a student excursion. The journey was well-coordinated and safe, and the driver was very cooperative.”',
    image: '/img/testimonial/testi_2_4.jpg',
  },
];




const Testimonialsabout = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="space" style={{ position: 'relative' }}>
      {/* Shape Mockup */}
      <div
        className="shape-mockup"
        style={{ position: 'absolute', top: '1%', right: '0', zIndex: 0 }}
      >
        <img src="/img/shape/earth_1.png" alt="shape" />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="title-area text-center mb-4">
          <span className="sub-title d-inline-flex align-items-center">
           
            Testimonials
          </span>
          <h2 className="sec-title">What Our Client Says..</h2>
        </div>

        <Slider {...settings} className="slider-shadow th-carousel">
          {testimonials.map((item, index) => (
            <div className="px-3" key={index}>
              <div className="testi-box">
                <div className="testi-box_img position-relative">
                  {/* <img src={item.image} alt="Avater" /> */}
                  <div className="play-btn">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>
                <div className="testi-box_content mt-3">
                  <p className="testi-box_text">{item.text}</p>
                  <h3 className="testi-box_name">{item.name}</h3>
                  <p className="testi-box_desig">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonialsabout;
