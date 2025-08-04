import React from 'react';

const steps = [
  {
    id: '01',
    icon: '/img/icon/process_card_1.svg',
    title: 'Pune Local Packages , Corporate Events, Marriages Events Services.',
    text: 'Pune Local is a reliable and efficient transportation system, Corporate sector thrives in Pune"s diverse economy, and the city offers a vibrant array of Events catering to various interests.'
  },
  {
    id: '02',
    icon: '/img/icon/process_card_2.svg',
    title: 'Pune to Outstation Bus & Tempo Traveller Services All Packages.',
    text: 'From the picturesque hill stations of Mahabaleshwar and Lonavala to the serene beaches of Goa and Konkan, we take you on a captivating voyage.'
  },
  {
    id: '03',
    icon: '/img/icon/process_card_3.svg',
    title: 'Pune to Shirdi, Nashik Bus & Tempo Traveller Services.',
    text: 'Pune to Shirdi Bus Services provide convenient and comfortable transportation for pilgrims and travelers seeking a spiritual journey.'
  },
  {
    id: '04',
    icon: '/img/icon/process_card_4.svg',
    title: 'Customizable Packages',
    text: 'why we offer customizable packages, allowing you to tailor your journey according to your preferences and schedule.'
  }
];

const WorkProcess = () => {
  return (
    <section className="work-process" style={{ backgroundImage: 'url("/images/process_bg_1.jpg")' }}>
      <div className="container">
        <div className="row justify-content-center space">
          <div className="col-xl-8 col-lg-10 offset-xl-4">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="/img/theme-img/title_shape_1.svg" alt="shape" /> Our Facilities
              </span>
              <h2 className="sec-title">Facilities we provide</h2>
            </div>

            <div className="process-card-wrap">
              {steps.map((step) => (
                <div className="process-card" key={step.id}>
                  <div className="process-card_icon">
                    <img src={step.icon} alt="icon" />
                  </div>
                  <div className="process-card_img">
                    <img src={step.icon} alt="icon" />
                  </div>
                  <div className="process-card_number">{step.id}</div>
                  <h2 className="box-title">{step.title}</h2>
                  <p className="process-card_text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
