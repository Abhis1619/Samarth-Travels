import React from 'react';
import CountUp from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhyChooseUs = () => {
  return (
    <div
      className="overflow-hidden space-top why-sec1"
      style={{
        backgroundImage: "url('/img/bg/why_bg_1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0',
      }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          {/* Image & Video */}
          <div className="col-xl-6 mb-4 mb-xl-0">
            <div className="img-box2 position-relative text-center">
              <div className="img1 position-relative">
                <img src="/images/why_1.png" alt="Why" className="img-fluid" />
                
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-xl-6 text-center text-xl-start text-white">
            <div className="title-area mb-4">
              <span className="sub-title d-inline-flex align-items-center mb-2">
                <img
                  src="/img/theme-img/title_shape_1_white.svg"
                  alt="shape"
                  className="me-2"
                />
                Why Choose Samarth Travels
              </span>
              <h2 className="sec-title">Your Pathway to Seamless Journeys..</h2>
            </div>

            {/* Feature List */}
            <div className="choose-feature-wrap mb-4">
              {[
                { title: 'Pocket-Friendly and Transparent Pricing', text: 'Online tracking is the process of gathering information.' },
                { title: 'Compliant with Travel Rules and Regulations', text: 'All of our course fee are very affordable for everyone.' },
                { title: 'Wide Range of Bus Models', text: 'We have the best trainers form helping you always.' },
                { title: 'Alluring Packages', text: "Our course is neither so long nor so short it's perfect." },
              ].map((item, index) => (
                <div className="choose-feature d-flex mb-3 py-3" key={index}>
                  <div className="choose-feature_icon me-3 ">
                    <i className="fa-solid fa-circle-check  fs-4"></i>
                  </div>
                  <div>
                    <h3 className="box-title mb-1 text-dark">{item.title}</h3>
                    {/* <p className="choose-feature_text mb-0">{item.text}</p> */}
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
