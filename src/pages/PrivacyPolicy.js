import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/privacy-policy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Samarth Travels</title>
      </Helmet>

      <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title text-center">Privacy Policy</h1>
          </div>
        </div>
      </div>

      <section className="privacy-policy">
        <div className="container px-0">
          <div className="row g-0">
            <div className="col-12 col-md-7">
              <h3 className="title">Privacy Policy</h3>

              <p>
                At Samarth Travels, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services.
              </p>

              <div className="section">
                <p className="highlight darkcolor">Information We Collect:</p>
                <p className="highlight darkcolor">1. Personal Information:</p>
                <p>
                  When you book a service with us, we may collect personal information such as your name, contact details, payment information, and travel preferences.
                </p>

                <p className="highlight darkcolor">2. Usage Information:</p>
                <p>
                  We may collect information about how you interact with our website and mobile app, including IP address, device information, and pages visited.
                </p>

                <p className="highlight darkcolor">3. Location Information:</p>
                <p>
                  With your consent, we may collect your location information to provide location-based services and improve our offerings.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">How We Use Your Information:</p>
                <p className="highlight darkcolor">1. To Provide Services:</p>
                <p>
                  We use your information to process bookings, manage reservations, and provide transportation services.
                </p>

                <p className="highlight darkcolor">2. To Improve Services:</p>
                <p>
                  We analyze user behavior and feedback to enhance user experience and develop new features.
                </p>

                <p className="highlight darkcolor">3. For Communication:</p>
                <p>
                  We may use your contact information to send booking confirmations, updates, and promotional offers.
                </p>

                <p className="highlight darkcolor">4. For Marketing:</p>
                <p>
                  With your consent, we may send marketing communications about our services and special offers.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Information Sharing and Disclosure:</p>
                <p className="highlight darkcolor">1. Third-Party Service Providers:</p>
                <p>
                  We may share your information with trusted third-party service providers who assist us in providing our services.
                </p>

                <p className="highlight darkcolor">2. Legal Compliance:</p>
                <p>
                  We may disclose your information as required by law or to protect our rights or safety, or that of others.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Data Security:</p>
                <p>
                  We employ industry-standard security measures to protect your information from unauthorized access or disclosure. However, no method of transmission is 100% secure.
                </p>

                <p className="highlight darkcolor">Your Rights:</p>
                <p>
                  You have the right to access, update, or delete your personal information. You may also opt-out of marketing communications at any time.
                </p>

                <p className="highlight darkcolor">Changes to this Privacy Policy:</p>
                <p>
                  We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on our website.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>For any queries regarding our privacy policy, feel free to reach out:</p>
            <ul>
              <li><b>Phone:</b> <a href="tel:+919860256019">+91 9860256019</a></li>
              <li><b>Email:</b> <a href="mailto:samarthtravels9119@gmail.com">samarthtravels9119@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
