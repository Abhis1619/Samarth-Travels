

import React from 'react';

const BookingCard = ({ image, title, seats, ac, minKm, price }) => {
  const message = `Hello, I would like to book the "${title}". Please share more details.`;
  const whatsappUrl = `https://wa.me/919527500025?text=${encodeURIComponent(message)}`;

  return (
    <div className="booking-card">
      <img src={image} alt={title} className="booking-image" />

      <div className="booking-content" style={{backgroundColor:'#FCD4C6'}}>
        <h3 className="booking-title text-center">{title}</h3>
      
<ul className="booking-details px-5">
  <li className="booking-row"><span>Seater:</span><span>{seats}</span></li>
  <li className="booking-row"><span>AC:</span><span>{ac ? 'Yes' : 'No'}</span></li>
  <li className="booking-row"><span>Min KM:</span><span>{minKm}</span></li>
  <li className="booking-row"><span>Price:</span><span>₹{price}</span></li>
</ul>



        <div className='text-center py-2'>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <button className="book-btn">Book Now</button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
