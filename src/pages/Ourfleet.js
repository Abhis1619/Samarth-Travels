import React from 'react';

const teamMembers = [
  {
    name: "Mini Bus or Tempo Traveller 13 Seater",
    designation: "CEO, of Founder",
    image: "/images/gallery/1.jpg",
  },
  {
    name: "Mini Bus or Tempo Traveller 17 Seater",
    designation: "Instructor",
    image: "/images/gallery/2.jpg",
  },
  {
    name: "Mini Bus or Tempo Traveller 20 Seater",
    designation: "Instructor",
    image: "/images/gallery/3.jpg",
  },
  {
    name: "20 Seater Tempo Traveller AC",
    designation: "Senior Instructor",
    image: "/images/gallery/4.jpg",
  },
  {
    name: "Mini Bus or Tempo Traveller 27 Seater",
    designation: "Instructor",
    image: "/images/gallery/5.jpg",
  },
  {
    name: "Bus 30 Seater",
    designation: "Instructor",
    image: "/images/gallery/6.jpg",
  },
  {
    name: "32 Seater Non AC -AC",
    designation: "Senior Instructor",
    image: "/images/gallery/7.jpg",
  },
  {
    name: "Bus 35 Seater",
    designation: "Instructor",
    image: "/images/gallery/8.jpg",
  },
   {
    name: "45 Seater Bus AC - Non AC",
    designation: "Instructor",
    image: "/images/gallery/9.jpg",
  },
  {
    name: "50 Seater AC - Non AC",
    designation: "Instructor",
    image: "/images/gallery/10.jpg",
  },
  {
    name: "Volvo Bus",
    designation: "Senior Instructor",
    image: "/images/gallery/11.jpg",
  },
  {
    name: "13 Seater Urbania",
    designation: "Instructor",
    image: "/images/gallery/12.jpg",
  },
   {
    name: "17 Seater Urbania",
    designation: "Instructor",
    image: "/images/gallery/14.jpg",
  },
];

const Ourfleet = () => {
  return (

<>


 <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title text-center">Our Fleets</h1>
                </div>
            </div>
        </div>

    <section className="space ">
      <div className="container">
        <div className="row gy-30 ">
          {teamMembers.map((member, index) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3" key={index}>
              <div className="th-team team-card">
                <div className="team-img">
                  <img src={member.image} alt="Team" />
                 
                </div>

                <h3 className="box-title">
                  <a href="team-details.html">{member.name}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
  );
};

export default Ourfleet;
