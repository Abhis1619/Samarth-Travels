// import React from 'react';
// import Slider from 'react-slick';

// const slides = [
//   {
//     bgImage: "/images/slider/1.jpg",
//     title1: "Learn to Drive",
//     title2: "With Confidence",
//   },
//   {
//     bgImage: "/images/slider/2.jpg",
//     title1: "Drive with Our",
//     title2: "Expert Member",
//   },
//   {
//     bgImage: "/images/slider/3.jpg",
//     title1: "Be Professional",
//     title2: "By Our Course",
//   },
// ];

// const Sliderr = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     fade: true,
//     arrows: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//   };

//   return (
//     <div className="th-hero-wrapper hero-7" id="hero">
//       <Slider {...settings} className="hero-slider-7 th-carousel">
//         {slides.map((slide, index) => (
//           <div className="th-hero-slide" key={index}>
//             <div className="hero-shape-wrap">
//               <div className="hero-shape">
//                 <div className="shape1">
//                   <img src="/img/hero/line_shape.svg" alt="shape" />
//                 </div>
//                 <div className="shape2">
//                   <img src="/img/hero/offer.png" alt="shape" />
//                 </div>
//               </div>
//             </div>
//             <div className="th-hero-bg" style={{ backgroundImage: `url(${slide.bgImage})` }}>
//               <img src="/img/hero/hero_overlay_7.png" alt="overlay" />
//             </div>
//             <div className="container">
//               <div className="hero-style7">
//                 <span className="sub-title has-line">Grow Up Your Driving Skill</span>
//                 <h1 className="hero-title3">{slide.title1}</h1>
//                 <h1 className="hero-title3">{slide.title2}</h1>
//                 <p className="hero-text">
//                   When coming up with driving school slogans, it is important to think about the main message you want to communicate.
//                 </p>
//                 <div className="btn-group">
//                   <a href="about.html" className="th-btn style3">
//                     Discover More<i className="fas fa-arrow-right ms-2"></i>
//                   </a>
//                   <div className="video-btn">
//                     <a
//                       href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
//                       className="play-btn popup-video"
//                       target="_blank" rel="noopener noreferrer"
//                     >
//                       <i className="fas fa-play"></i>
//                     </a>
//                     <a
//                       href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
//                       className="line-btn popup-video"
//                       target="_blank" rel="noopener noreferrer"
//                     >
//                       Watch Our Story
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Sliderr;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderr = () => {
  const settings = {
    fade: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const slides = [
    {
      id: 1,
      title1: "Learn to Drive",
      title2: "With Confidence",
      image: "/images/slider/1.jpg",
    },
    {
      id: 2,
      title1: "Drive with Our",
      title2: "Expert Member",
      image: "/images/slider/2.jpg",
    },
    {
      id: 3,
      title1: "Be Professional",
      title2: "By Our Course",
      image: "/images/slider/3.jpg",
    },
  ];

  return (
    <div className="th-hero-wrapper hero-7" id="hero">
      <Slider {...settings} className="hero-slider-7 th-carousel">
        {slides.map((slide) => (
          <div className="th-hero-slide" key={slide.id}>
            <div className="hero-shape-wrap">
              <div className="hero-shape">
                <div className="shape1">
                  <img src="/img/hero/line_shape.svg" alt="shape" />
                </div>
                <div className="shape2">
                  <img src="/img/hero/offer.png" alt="shape" />
                </div>
              </div>
            </div>
            <div className="th-hero-bg">
              <img src={slide.image} alt="hero background" />
              <img
                src="/img/hero/hero_overlay_7.png"
                alt="overlay"
                className="overlay-img"
              />
            </div>
            <div className="container">
              <div className="hero-style7">
                <span className="sub-title has-line">Grow Up Your Driving Skill</span>
                <h1 className="hero-title3">{slide.title1}</h1>
                <h1 className="hero-title3">{slide.title2}</h1>
                <p className="hero-text">
                  When coming up with driving school slogans, it is important to think about
                  the main message you want to communicate.
                </p>
                <div className="btn-group">
                  <a href="about.html" className="th-btn style3">
                    Discover More <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                  <div className="video-btn">
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="line-btn popup-video"
                    >
                      Watch Our Story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderr;
