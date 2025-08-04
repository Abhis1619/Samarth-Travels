import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/TermsConditions.css'; // Ensure this CSS file includes the new styles

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>Samarth Travels - Terms & Conditions</title>
        <meta name="description" content="Terms & Conditions of Samarth Travels" />
      </Helmet>

      <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title text-center">Terms & Conditions</h1>
          </div>
        </div>
      </div>

      <section className="terms-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="terms-content">
                <p><b className="highlight">1. Booking Confirmation:</b> All bookings are subject to availability and will be confirmed upon successful payment and issuance of a booking reference number.</p>

                <p><b className="highlight">2. Payment:</b> Full payment is required at the time of booking. Payments can be made online or at our authorized offices.</p>

                <p><b className="highlight">3. Cancellation and Rescheduling:</b> Cancellations and rescheduling are subject to our cancellation policy. Fees may apply based on timing.</p>

                <p><b className="highlight">4. Passenger Responsibility:</b> Passengers must carry valid identification and tickets. We reserve the right to refuse boarding without proper documentation.</p>

                <p><b className="highlight">5. Baggage Policy:</b> Limited baggage is allowed per ticket. Additional baggage may incur extra charges.</p>

                <p><b className="highlight">6. Travel Insurance:</b> We recommend purchasing travel insurance to cover unforeseen events.</p>

                <p><b className="highlight">7. Safety Regulations:</b> Passengers must adhere to all safety regulations and instructions from our staff.</p>

                <p><b className="highlight">8. Changes to Itinerary:</b> We reserve the right to alter itineraries due to unforeseen circumstances.</p>

                <p><b className="highlight">9. Refusal of Service:</b> We may refuse service to passengers exhibiting disruptive behavior or violating terms.</p>

                <p><b className="highlight">10. Jurisdiction:</b> These terms are governed by the laws of India. Any disputes shall be resolved in Pune.</p>

                <h3>General Policy</h3>
                <p><b className="highlight">Booking Procedure:</b> Book services through our website or customer service.</p>
                <p><b className="highlight">Customer Service:</b> Our team is available to assist with inquiries and requests.</p>

                <h3>Refund Policy</h3>
                <p><b className="highlight">Cancellation Fees:</b> Fees may apply based on the timing of the cancellation.</p>
                <p><b className="highlight">Refund Process:</b> Refunds will be processed according to the original payment method.</p>
                <p><b className="highlight">No-Show Policy:</b> No-shows may not be eligible for refunds.</p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>For any queries regarding our terms, feel free to reach out:</p>
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

export default TermsConditions;
