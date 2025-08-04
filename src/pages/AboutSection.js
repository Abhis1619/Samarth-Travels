import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutSection = () => {
  return (
    <div className="overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-5 pb-4 mb-xl-0 pb-xl-0">
            <div className="img-box3">
              <div className="img1">
                <img src="/images/about_2_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="/images/about_2_2.jpg" alt="About" />
              </div>
              <div className="shape1">
                <img src="/img/shape/dot_1.png" alt="About" />
              </div>
              <div className="year-counter">
                <div className="year-counter_number">
                  <span className="counter-number">15</span>+
                </div>
                <p className="year-counter_text">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img
                  src="/img/theme-img/title_shape_1.svg"
                  alt="shape"
                />
                About Us
              </span>
              <h2 className="sec-title">
                Your Memorable Journey Awaits !
              </h2>
            </div>
            <p className="mt-n2 mb-33">
            At Samarth Travels, we take pride in offering you a seamless and budget-friendly travel experience. Our commitment to transparent pricing ensures that you have complete clarity on all costs, leaving no room for hidden charges. With our Pune to Shirdi Bus Services, we guarantee you a memorable trip that adheres to all travel rules and regulations.
            </p>
            <div className="about-feature-wrap">
              <div className="about-feature">
                <div className="about-feature_icon">
                  <img
                    src="/img/icon/about_feature_1.svg"
                    alt="Icon"
                  />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Pocket-Friendly and Transparent Pricing Policy</h3>
                  {/* <p className="about-feature_text">
                    We are a certified driving school training center.
                  </p> */}
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature_icon">
                  <img
                    src="/img/icon/about_feature_2.svg"
                    alt="Icon"
                  />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Diverse Fleet of Bus Models</h3>
                  {/* <p className="about-feature_text">
                    We selected a lot of national awards & won this year.
                  </p> */}
                </div>
              </div>
            </div>
            <a href="/about" className="th-btn">
              About More <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
