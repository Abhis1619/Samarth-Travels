import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Mr. Rajesh Verma',
    role: 'Customer – Samarth Travels',
    text: '“I recently booked a family trip through Samarth Travels and everything was perfectly arranged. The staff is friendly and professional. Highly recommended for hassle-free travel!”',
    image: '/img/testimonial/testi_2_1.jpg',
  },
  {
    name: 'Miss. Anjali Mehta',
    role: 'Solo Traveller – Samarth Travels',
    text: '“Samarth Travels helped me plan my first solo trip to South India. From hotel bookings to transport, they handled everything smoothly. I felt safe and cared for throughout.”',
    image: '/img/testimonial/testi_2_2.jpg',
  },
  {
    name: 'Mr. Ramesh Iyer',
    role: 'Business Client – Samarth Travels',
    text: '“Their corporate travel services are top-notch. Samarth Travels is punctual, efficient, and understands the value of time. They are now our official travel partner.”',
    image: '/img/testimonial/testi_2_3.jpg',
  },
  {
    name: 'Miss. Sneha Kapoor',
    role: 'Student Traveller – Samarth Travels',
    text: '“I went on an educational tour with Samarth Travels and had the best experience ever. The trip was well-organized, budget-friendly, and informative. Loved it!”',
    image: '/img/testimonial/testi_2_4.jpg',
  },
];


const Testimonials = () => {
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
            {/* <img
              src="/img/theme-img/title_shape_1.svg"
              alt="shape"
              className="me-2"
            /> */}
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

export default Testimonials;
