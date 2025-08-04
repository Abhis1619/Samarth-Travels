// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const Carousel = () => {
//   useEffect(() => {
//     const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min');
//     const carouselElement = document.querySelector('#carouselExampleControls');
//     if (carouselElement) {
//       new bootstrap.Carousel(carouselElement, {
//         ride: 'carousel',
//         interval: 3000,  
//       });
//     }
//   }, []);

//   return (
//     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src="/images/slider/1.jpg" className="d-block w-100" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src="/images/slider/2.jpg" className="d-block w-100" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src="/images/slider/3.jpg" className="d-block w-100" alt="Slide 3" />
//         </div>
//         <div className="carousel-item">
//           <img src="/images/slider/4.jpg" className="d-block w-100" alt="Slide 4" />
//         </div>
//         <div className="carousel-item">
//           <img src="/images/slider/5.jpg" className="d-block w-100" alt="Slide 5" />
//         </div>
//         <div className="carousel-item">
//           <img src="/images/slider/6.jpg" className="d-block w-100" alt="Slide 6" />
//         </div>
//         {/* <div className="carousel-item">
//           <img src="/images/slider/7.jpg" className="d-block w-100" alt="Slide 6" />
//         </div> */}
        
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


// const Carousel = () => {
//   return (
//     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-inner">
//         {/* Slide 1 */}
//         <div className="carousel-item active">
//           <img src="/images/slider/1.jpg" className="d-block w-100" alt="Slide 1" />
//           <div className="carousel-caption text-start custom-caption">
//             <p className="hero-subtitle text-warning">— Welcome To Samarth Travels</p>
//             <h1 className="display-5 fw-bold text-white">Best Bus Rent In Pune</h1>
//             <p className="text-light mb-4">Your trusted travel partner</p>
//             <a
//               href="https://api.whatsapp.com/send?phone=919860256019&text=Hello%20Samarth%20Travels"
//               className="btn btn-warning btn-lg rounded-pill fw-bold"
//             >
//               <i className="fab fa-whatsapp me-2"></i>CONTACT US →
//             </a>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div className="carousel-item">
//           <img src="/images/slider/2.jpg" className="d-block w-100" alt="Slide 2" />
//           <div className="carousel-caption text-start custom-caption">
//             <p className="hero-subtitle text-warning">— Trusted By Thousands</p>
//             <h1 className="display-5 fw-bold text-white">Luxury AC Buses Available</h1>
//             <p className="text-light mb-4">Perfect for weddings, tours, and corporate travel</p>
//             <a href="/packages" className="btn btn-warning btn-lg rounded-pill fw-bold">
//               <i className="fas fa-bus me-2"></i>Explore Packages
//             </a>
//           </div>
//         </div>

//         {/* Slide 3 */}
//         <div className="carousel-item">
//           <img src="/images/slider/3.jpg" className="d-block w-100" alt="Slide 3" />
//           <div className="carousel-caption text-start custom-caption">
//             <p className="hero-subtitle text-warning">— Seamless Experience</p>
//             <h1 className="display-5 fw-bold text-white">Corporate Bus Booking Made Easy</h1>
//             <p className="text-light mb-4">Book your next event with us</p>
//             <a href="/online-booking" className="btn btn-warning btn-lg rounded-pill fw-bold">
//               <i className="fas fa-calendar-check me-2"></i>Book Now
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;







import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="/images/slider/1.jpg" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption text-start custom-caption">
            <p className="hero-subtitle text-warning">— Welcome To Samarth Travels</p>
            <h1 className="display-5 fw-bold text-white">Best Bus Rent In Pune</h1>
            <p className="text-light mb-4">Your trusted travel partner</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="/images/slider/2.jpg" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption text-start custom-caption">
            <p className="hero-subtitle text-warning">— Trusted By Thousands</p>
            <h1 className="display-5 fw-bold text-white">Luxury AC Buses Available</h1>
            <p className="text-light mb-4">Perfect for weddings, tours, and corporate travel</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="/images/slider/3.jpg" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption text-start custom-caption">
            <p className="hero-subtitle text-warning">— Seamless Experience</p>
            <h1 className="display-5 fw-bold text-white">Best Luxury Force Urbania on rent</h1>
            <p className="text-light mb-4">Book your next event with us</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img src="/images/slider/4.jpg" className="d-block w-100" alt="Slide 4" />
          <div className="carousel-caption text-start custom-caption">
            <p className="hero-subtitle text-warning">— Group Tours Simplified</p>
            <h1 className="display-5 fw-bold text-white">45+ Seater Buses Available</h1>
            <p className="text-light mb-4">Ideal for school trips and office outings</p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <img src="/images/slider/5.jpg" className="d-block w-100" alt="Slide 5" />
          <div className="carousel-caption text-start custom-caption">
            <p className="hero-subtitle text-warning">— Travel in Comfort</p>
            <h1 className="display-5 fw-bold text-white">Clean & Well-Maintained Vehicles</h1>
            <p className="text-light mb-4">Hygienic and safe rides always</p>
          </div>
        </div>

        {/* Slide 6 */}
        <div className="carousel-item">
          <img src="/images/slider/6.jpg" className="d-block w-100" alt="Slide 6" />
          <div className="carousel-caption text-start custom-caption">
            <p className="hero-subtitle text-warning">— City to City Comfort</p>
            <h1 className="display-5 fw-bold text-white">Best Tempo Traveller on rent in Pune</h1>
            <p className="text-light mb-4">Book hassle-free intercity rides now</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
