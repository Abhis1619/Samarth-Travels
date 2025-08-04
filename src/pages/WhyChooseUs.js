import React from 'react';

const WhyChooseUsabout = () => {
  return (
    <section
      className="bg-smoke space"
      style={{ backgroundImage: "url('/img/bg/why_bg_2.jpg')" }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          {/* Video Image Section */}
          <div className="col-xl-6 mb-35 mb-xl-0">
            <div className="img-box4">
              <div className="img1">
                <img src="/images//why_2_1.jpg" alt="About" />
                {/* <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="play-btn popup-video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play"></i>
                </a> */}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-xl-6 text-center text-xl-start">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img src="/img/theme-img/title_shape_1.svg" alt="shape" />
                You Get Know More
              </span>
              <h2 className="sec-title">
               Come, join us on a journey beyond the ordinary, and experience the magic of travel with Samarth Travels.
              </h2>
            </div>
            <p className="mt-n2 mb-33">
              Driving defensively includes controlling your speed, looking ahead and being
              prepared for unexpected events, being alert and distraction-free, and preparedness
              for all sorts of actions and reactions of other drivers.
            </p>

            <div className="mb-40">
              <div className="skill-feature">
                <h3 className="skill-feature_title">Bus Service</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '80%' }}>
                    <div className="progress-value">80%</div>
                  </div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Tempo Traveller Service</h3>
                <div className="progress">
                  <div className="progress-bar bg-theme" style={{ width: '90%' }}>
                    <div className="progress-value">90%</div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/contact-us" className="th-btn">
              Contact Us <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsabout;
