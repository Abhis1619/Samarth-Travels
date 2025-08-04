// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const TestimonialSection = ({ testimonials }) => {
//   return (
//     <section
//       className="testimonial position-relative space"
//       style={{
//         backgroundImage: "url('/img/bg/testimonial-bg.png')",
//         backgroundSize: "cover",
//       }}
//     >
//       <img
//         src="/img/icons/eiffel-tower-dark.png"
//         alt="testimonial-icon"
//         className="testimonial-icon"
//       />
//       <div className="container">
//         <div className="title-area text-center">
//           <span className="sec-subtitle">Our Testimonials</span>
//           <h2 className="sec-title">What Customers Say About Us</h2>
//         </div>
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 4000 }}
//           pagination={{ clickable: true }}
//           loop={true}
//           spaceBetween={30}
//           breakpoints={{
//             0: {
//               slidesPerView: 1, // Mobile view: 1 slide
//             },
//             768: {
//               slidesPerView: 2, // Tablet & desktop: 2 slides
//             },
//           }}
//           className="testimonial-slider mt-5"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="testimonial-content text-center p-4 bg-white shadow rounded">

//                 <i className="fa-solid fa-quote-left mb-2"></i>
//                 <div className="rating mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <i
//                       key={i}
//                       className="fa-solid fa-star text-warning mx-1"
//                     ></i>
//                   ))}
//                 </div>
//                 <p className="revew mx-auto" style={{ maxWidth: 500 }}>
//                   “{testimonial.text}”
//                 </p>
//                 <div className="author mt-3">
//                   <h5 className="author-name mb-1">{testimonial.name}</h5>
//                   <span className="author-degi">{testimonial.position}</span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;



import React from 'react';
import Slider from 'react-slick';

const Testimonialskeyword = ({ data, title = "What Our Client Says..", subtitle = "Testimonials" }) => {
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
      <div
        className="shape-mockup"
        style={{ position: 'absolute', top: '1%', right: '0', zIndex: 0 }}
      >
        <img src="/img/shape/earth_1.png" alt="shape" />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="title-area text-center mb-4">
          <span className="sub-title d-inline-flex align-items-center">
            {subtitle}
          </span>
          <h2 className="sec-title">{title}</h2>
        </div>

        <Slider {...settings} className="slider-shadow th-carousel">
          {data.map((item, index) => (
            <div className="px-3" key={index}>
              <div className="testi-box">
                <div className="testi-box_img position-relative">
                  {/* Image usage optional */}
                  {/* <img src={item.image} alt="Avatar" /> */}
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

export default Testimonialskeyword;
