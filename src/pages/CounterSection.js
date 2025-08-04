import React from 'react';
import CountUp from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css';

const CounterSection = () => {
  return (
    <div
      className=""
      data-overlay="title"
      data-opacity="9"
      data-bg-src="assets/img/bg/counter_bg_2.jpg"
    >
      <div className="container">
        <div className="counter-card-wrap  flex-wrap justify-content-between gap-3 py-5">
          <div className="counter-card style2 text-center">
            <h2 className="counter-card_number">
              <CountUp end={3600} duration={3} separator="," />+
            </h2>
            <span className="counter-card_text">Trips</span>
          </div>
          <div className="counter-card style2 text-center">
            <h2 className="counter-card_number">
              <CountUp end={1500} duration={3} separator="," />+
            </h2>
            <span className="counter-card_text">Clients</span>
          </div>
          <div className="counter-card style2 text-center">
            <h2 className="counter-card_number">
              <CountUp end={150} duration={2} />+
            </h2>
            <span className="counter-card_text">Expert Instructors</span>
          </div>
          <div className="counter-card style2 text-center">
            <h2 className="counter-card_number">
              <CountUp end={45} duration={2} />+
            </h2>
            <span className="counter-card_text">Packages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CounterSection = () => {
//   return (
//     <div
//       className=""
//       data-overlay="title"
//       data-opacity="9"
//       data-bg-src="assets/img/bg/counter_bg_2.jpg"
//     >
//       <div className="container">
//         <div className="counter-card-wrap">
//           <div className="counter-card style2">
//             <h2 className="counter-card_number">
//               <span className="counter-number">5,400</span>+
//             </h2>
//             <span className="counter-card_text">Learn From Here</span>
//           </div>
//           <div className="counter-card style2">
//             <h2 className="counter-card_number">
//               <span className="counter-number">1,350</span>+
//             </h2>
//             <span className="counter-card_text">Current Students</span>
//           </div>
//           <div className="counter-card style2">
//             <h2 className="counter-card_number">
//               <span className="counter-number">150</span>+
//             </h2>
//             <span className="counter-card_text">Expert Instructors</span>
//           </div>
//           <div className="counter-card style2">
//             <h2 className="counter-card_number">
//               <span className="counter-number">60</span>+
//             </h2>
//             <span className="counter-card_text">Best Awards Won</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterSection; 










// import React from 'react';
// import CountUp from 'react-countup';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CounterSection = () => {
//   return (
//     <div
//       className="py-5"
//       style={{
//         backgroundImage: "url('assets/img/bg/counter_bg_2.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: '#fff',
//       }}
//     >
//       <div className="container">
//         <div className="row text-center counter-card-wrap">
//           <div className="col-md-3 mb-4">
//             <div className="counter-card style2">
//               <h2 className="counter-card_number">
//                 <CountUp end={5400} duration={2} separator="," />+
//               </h2>
//               <span className="counter-card_text">Learn From Here</span>
//             </div>
//           </div>
//           <div className="col-md-3 mb-4">
//             <div className="counter-card style2">
//               <h2 className="counter-card_number">
//                 <CountUp end={1350} duration={2} separator="," />+
//               </h2>
//               <span className="counter-card_text">Current Students</span>
//             </div>
//           </div>
//           <div className="col-md-3 mb-4">
//             <div className="counter-card style2">
//               <h2 className="counter-card_number">
//                 <CountUp end={150} duration={2} separator="," />+
//               </h2>
//               <span className="counter-card_text">Expert Instructors</span>
//             </div>
//           </div>
//           <div className="col-md-3 mb-4">
//             <div className="counter-card style2">
//               <h2 className="counter-card_number">
//                 <CountUp end={60} duration={2} separator="," />+
//               </h2>
//               <span className="counter-card_text">Best Awards Won</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterSection;
