import React, { useState } from 'react';
import BookingCard from './BookingCard';


const bookingData = [
  {
    image: '/images/fleets/16.jpg',
    title: '13 Seater Ac Urbania',
    seats: 13,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/1.jpg',
    title: '13 Seater Winger A/C',
    seats: 13,
    ac: true,
    pets: false,
    minKm: 300,
    price: '8,100',
  },
  {
    image: '/images/fleets/17.jpg',
    title: '17 Seater Ac Urbania',
    seats: 17,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/3.jpg',
    title: '17 Seater A/C Push Back',
    seats: 17,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/4.jpg',
    title: '17 Seater Non A/C Tempo Traveller',
    seats: 17,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/5.jpg',
    title: '20 Seater A/C Tempo Traveller',
    seats: 20,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/6.jpg',
    title: '20 Seater Non A/C Tempo Traveller',
    seats: 20,
    ac: false,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/7.jpg',
    title: '26 Seater A/C',
    seats: 26,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/4.jpg',
    title: '27 Seater Non A/C Push Back',
    seats: 27,
    ac: false,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/9.jpg',
    title: '32 Seater A/C Push Back',
    seats: 32,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/10.jpg',
    title: '32 Seater Non A/C',
    seats: 32,
    ac: false,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/11.jpg',
    title: '35 Seater A/C (Bharat Benz)',
    seats: 35,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/12.jpg',
    title: '40 Seater Non A/C',
    seats: 40,
    ac: false,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/13.jpg',
    title: '40 Seater A/C',
    seats: 40,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/14.jpg',
    title: '45 Seater A/C',
    seats: 45,
    ac: true,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
  {
    image: '/images/fleets/15.jpg',
    title: '45 Seater Non A/C',
    seats: 45,
    ac: false,
    pets: false,
    minKm: 300,
    price: '10,800',
  },
];


const BookingList = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (vehicleName) => {
    setSelectedVehicle(vehicleName);
    setUserName('');
    setSubmitted(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title text-center">Booking</h1>
          </div>
        </div>
      </div>

      <div className="booking-list-container" >
        <div className="booking-grid" >
          {bookingData.map((item, index) => (
            <BookingCard key={index} {...item} onBook={handleBooking} />
          ))}
        </div>
      </div>

      {selectedVehicle && (
        <div className="booking-form" >
  
          {submitted && <p>✅ Booking confirmed for <strong>{userName}</strong> - {selectedVehicle}</p>}
        </div>
      )}
    </>
  );
};

export default BookingList;
