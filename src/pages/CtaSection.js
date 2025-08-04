import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CtaSection = () => {
  return (
    <section
      className="cta-sec1 style2"
      data-bg-src="assets/img/bg/cta_bg_3.jpg"
      data-pos-for="#blog-sec"
      data-sec-pos="bottom-half"
    >
      <a href="tel:+16369729901" className="play-btn">
        <FontAwesomeIcon icon={faPhone} />
      </a>
      <div className="container z-index-common space">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-lg-8 text-center">
            <div className="title-area mb-30">
              <span className="sub-title h4">(+163) 6972 9901</span>
              <h2 className="sec-title text-white">
                Book Your First Driving Lesson And Contact Us
              </h2>
            </div>
            <div className="btn-group justify-content-center">
              <a href="contact.html" className="th-btn style3">
                Book Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
              <a href="contact.html" className="th-btn style5">
                Contact Us <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
