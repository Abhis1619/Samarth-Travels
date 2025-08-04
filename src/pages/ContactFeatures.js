import React from 'react';

const ContactFeatures = () => {
    return (
<>


 <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title text-center">Contact Us</h1>
                </div>
            </div>
        </div>

        <div className="space">
            <div className="container">
                <div className="row gy-4 justify-content-center">

                    

                    {/* Phone Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-feature bg-theme">
                            <div className="contact-feature_icon">
                                <img src="/img/icon/contact_feature_2.svg" alt="icon" />
                            </div>
                            <span className="contact-feature_subtitle">Have A Question?</span>
                            <h3 className="box-title">
                                <a href="tel:+919860256019">+91 9860256019</a><br/>
                                <a href="tel:+919527500025">+91 9527500025</a>
                            </h3>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-feature">
                            <div className="contact-feature_icon">
                                <img src="/img/icon/contact_feature_3.svg" alt="icon" />
                            </div>
                            <div className="contact-feature_content">
                                <span className="contact-feature_subtitle">Email Us On</span>
                                <h3 className="box-title">
                                    <a href="mailto:samarthtravels9119@gmail.com">samarthtravels9119@gmail.com</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Office Location */}
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-feature">
                            <div className="contact-feature_icon">
                                <img src="/img/icon/contact_feature_1.svg" alt="icon" />
                            </div>
                            <span className="contact-feature_subtitle">OUR OFFICE LOCATION</span>
                            <span className="contact-feature_subtitle">Samarth Travels</span>
                            <h3 className="box-title"> Flat no 201, Juhi Building, Suyash Shrushti Society, Tukai darshan Hadapsar, Pune- 411028</h3>
                        </div>
                    </div>


<div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25265.632255866363!2d73.95252!3d18.486719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15a50c312d7%3A0xe14af467791aafdf!2sSamarth%20Travels!5e1!3m2!1sen!2sin!4v1747648643009!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
                </div>
            </div>
        </div>

</>
    );
};

export default ContactFeatures;
