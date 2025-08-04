// import React from "react";

// const FaqSection = ({ title = "Asked Questions", subtitle = "Faq", items = [] }) => {
//   return (
//     <section
//       className="vs-faq space"
//       style={{ backgroundImage: "url('assets/img/bg/404-faq.png')" }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-auto mx-auto">
//             <div className="title-area text-center">
//               <span
//                 className="sec-subtitle text-capitalize fade-anim"
//                 data-direction="top"
//               >
//                 {subtitle}
//               </span>
//               <h2 className="sec-title fade-anim" data-direction="bottom">
//                 {title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="row g-3">
//           <div className="col-12">
//             <div className="accordion accordion-style1" id="accordionLeft">
//               {items.map((item, index) => {
//                 const collapseId = `collapse${index}`;
//                 const headingId = `heading${index}`;
//                 return (
//                   <div className="accordion-item" key={index}>
//                     <h6 className="accordion-header" id={headingId}>
//                       <button
//                         className={`accordion-button ${
//                           index !== 0 ? "collapsed" : ""
//                         }`}
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target={`#${collapseId}`}
//                         aria-expanded={index === 0 ? "true" : "false"}
//                         aria-controls={collapseId}
//                       >
//                         {item.question}
//                       </button>
//                     </h6>
//                     <div
//                       id={collapseId}
//                       className={`accordion-collapse collapse ${
//                         index === 0 ? "show" : ""
//                       }`}
//                       data-bs-parent="#accordionLeft"
//                     >
//                       <div className="accordion-body">{item.answer}</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;







import React from 'react';

const FAQSection = ({ faqs, accordionId = 'faqAccordion' }) => {
  return (
    <div className="space space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 mb-30">
            <div className="accordion" id={accordionId}>
              {faqs.map((faq, index) => (
                <div className={`accordion-card bg-smoke ${index === 0 ? 'active' : ''}`} key={faq.id}>
                  <div className="accordion-header" id={`heading-${accordionId}-${faq.id}`}>
                    <button
                      className={`accordion-button bg-smoke ${index === 0 ? '' : 'collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${accordionId}-${faq.id}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={`collapse-${accordionId}-${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${accordionId}-${faq.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading-${accordionId}-${faq.id}`}
                    data-bs-parent={`#${accordionId}`}
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
      </div>
    </div>
  );
};

export default FAQSection;
