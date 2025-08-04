import React from 'react';

const EnquiryForm = () => {
  return (


<>


     <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title text-center">Enquiry</h1>
                </div>
            </div>
        </div>

    <section style={{ background: '#fff', padding: '60px 0' }}>
      <div className="container">
        <div className="form-wrapper" style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 0 25px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Asking Question Now</h2>

          <form
            action="https://api.web3forms.com/submit" // ✅ Replace with your own Web3Forms endpoint if needed
            method="POST"
          >
            <input type="hidden" name="access_key" value="b559c78e-c575-438b-a7ed-a86cb8448c49" />

            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#f7921f',
                color: '#fff',
                padding: '14px',
                fontSize: '16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: '0.3s'
              }}
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </section>

</>
  );
};

export default EnquiryForm;
