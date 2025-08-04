import React from 'react';
import CourseSection from './CourseSection';
import WhyChooseUsabout from './WhyChooseUs';
import Testimonialsabout from './Testimonialsabout';

const About = () => {
  return (
    <>


     <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title text-center">About</h1>
                </div>
            </div>
        </div>

    <div className="overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box1">
              <div className="img1">
                <img src="/images/about_1_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="/images/about_1_2.jpg" alt="Image" />
              </div>
              <div className="year-counter-wrap">
                <div className="year-counter">
                  <div className="year-counter_number">
                    <span className="counter-number">15</span>+
                  </div>
                  <p className="year-counter_text">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-xl-6">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img src="/img/theme-img/title_shape_1.svg" alt="shape" /> About Us
              </span>
              <h2 className="sec-title">
                Learn To Drive, Drive With Safety And Control.
              </h2>
            </div>
            <p className="mt-n2 mb-33">
            Welcome to Samarth Travels, your premier travel partner dedicated to delivering unforgettable journeys and seamless travel experiences. At Samarth Travels, we believe that travel is not just about visiting destinations; it's about creating cherished memories and immersing yourself in the beauty and diversity of the world.
            </p>

            <div className="video-checklist">
              {/* Video Section */}
                <div className="checklist">
                <ul>
  <li><i className="far fa-check-circle"></i> Well-Maintained Fleet</li>
  <li><i className="far fa-check-circle"></i> Experienced Drivers</li>
  <li><i className="far fa-check-circle"></i> 24/7 Customer Support</li>
  <li><i className="far fa-check-circle"></i> Customizable Travel Plans</li>
</ul>

              </div>

              {/* Checklist 1 */}
              <div className="checklist">
                <ul>
  <li><i className="far fa-check-circle"></i> Affordable Pricing</li>
  <li><i className="far fa-check-circle"></i> Special Occasion Travel</li>
  <li><i className="far fa-check-circle"></i> Flexible Itineraries</li>
  <li><i className="far fa-check-circle"></i> Seamless Transfers</li>
</ul>

              </div>

              {/* Checklist 2 */}
              <div className="checklist">
                <ul>
  <li><i className="far fa-check-circle"></i> Expert Local Guides</li>
  <li><i className="far fa-check-circle"></i> Fast Service</li>
  <li><i className="far fa-check-circle"></i> Safety First</li>
</ul>

              </div>
            </div>

            {/* <a href="about.html" className="th-btn">
              About More <i className="fas fa-arrow-right ms-2"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>

    <CourseSection/>
    <WhyChooseUsabout/>
    <Testimonialsabout/>
    </>
  );
};

export default About;
