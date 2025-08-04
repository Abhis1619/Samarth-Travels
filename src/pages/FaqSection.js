import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const faqs = [
  {
    question: 'How can I book a bus with Samarth Travels?',
    answer:
      'You can easily book a bus by visiting our website, calling our support number, or using our mobile app. Just select your pickup and drop-off location, and we’ll handle the rest.',
  },
  {
    question: 'What types of vehicles does Samarth Travels offer?',
    answer:
      'Samarth Travels offers a wide range of vehicles including sedans, SUVs, tempo travelers, and luxury coaches to suit all types of travel needs—be it individual, family, or corporate.',
  },
  {
    question: 'Are your drivers experienced and verified?',
    answer:
      'Yes, all our drivers are professionally trained, verified, and have years of experience to ensure your journey is safe and comfortable.',
  },
  {
    question: 'Do you provide outstation and local travel services?',
    answer:
      'Absolutely! Samarth Travels offers both local city travel and outstation packages with flexible booking options and competitive pricing.',
  },
  {
    question: 'Can I modify or cancel my booking?',
    answer:
      'Yes, you can modify or cancel your booking by contacting our customer support at least 2 hours before your scheduled pickup time. Cancellation charges may apply as per our policy.',
  },
];


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      id="faq-sec"
      style={{
        backgroundImage: "url('/img/bg/faq_bg_2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0',
        color: '#fff',
      }}
    >
      <div className="container">
        <div className="row justify-content-center justify-content-lg-start">
          {/* FAQ Accordion */}
          <div className="col-xl-7 text-center text-xl-start">
            <div className="pe-xl-5 mb-4">
              <div className="title-area mb-4">
                <span className="sub-title">
                  <img
                    src="/img/theme-img/title_shape_1_white.svg"
                    alt="shape"
                    style={{ marginRight: 10 }}
                  />
                  FAQ
                </span>
                <h2 className="sec-title text-white">Frequently Asked Questions</h2>
              </div>
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div
                    className={`accordion-card style2 ${activeIndex === index ? 'active' : ''}`}
                    key={index}
                  >
                    <div className="accordion-header" id={`collapse-item-${index}`}>
                      <button
                        className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleAccordionToggle(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`collapse-${index}`}
                      >
                        {faq.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? 'show' : ''
                      }`}
                      aria-labelledby={`collapse-item-${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Form */}
          <div className="col-xl-5">
            <div className="faq-form  p-4 rounded text-dark">
              <h4 className="form-title text-center mb-4">Ask a Question Now</h4>
              <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="needs-validation"
  onSubmit={() => alert('Your message has been sent!')}
>
  <input
    type="hidden"
    name="access_key"
    value="b559c78e-c575-438b-a7ed-a86cb8448c49" // ← Replace with your actual Web3Forms access key
  />

  <div className="row">
    <div className="form-group col-md-6 mb-3">
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Your Name"
        required
      />
    </div>
    <div className="form-group col-md-6 mb-3">
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Email Address"
        required
      />
    </div>
    <div className="form-group col-md-12 mb-3">
      <input
        type="tel"
        name="phone"
        className="form-control"
        placeholder="Phone Number"
        required
      />
    </div>
    <div className="form-group col-12 mb-3">
      <textarea
        rows="3"
        name="message"
        className="form-control"
        placeholder="Your Message"
        required
      ></textarea>
    </div>
    <div className="form-group col-12">
      <button type="submit" className="th-btn btn-fw w-100">
        Send Message <i className="fas fa-arrow-right ms-2"></i>
      </button>
    </div>
  </div>
</form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
