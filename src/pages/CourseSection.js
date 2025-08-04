import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const courses = [
  {
    img: '/images/vision.jpg',
    price: '$80',
    title: 'Our Vision',
    description:
      'At Samarth Travels, our core values revolve around the customer satisfaction, professionalism, and attention to detail. We strive to ensuring that each journey is meticulously planned to suit your interests and needs. Our dedicated customer support team is always available to assist you, providing prompt responses and solutions to any queries you may have.',
    instructor: 'David Watt',
    duration: '6 Weeks',
  },
  {
    img: '/images/mission.jpg',
    price: '$150',
    title: 'Our Mission',
    description:
      'As we traverse the globe together, we are committed to sustainable and responsible travel practices. We aim to leave a positive impact on the destinations we visit, preserving their natural beauty and supporting local communities. Whether you seek a relaxing beach escape, an adventure-filled expedition, or an enriching cultural journey, Samarth Travels is here to bring your travel dreams to life.',
    instructor: 'David Watt',
    duration: '6 Weeks',
  },

];

const CourseSection = () => {
  return (
    <section
      className="space bg-smoke"
      style={{
        backgroundImage: "url('/img/bg/course_bg_1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
 
      <div className="shape-mockup" style={{ position: 'absolute', bottom: '0%', right: '0.5%' }}>
        <img src="/img/shape/light_1.png" alt="shape" />
      </div>
  

      {/* Course Content */}
      <div className="container position-relative">
        <div className="title-area text-center">
          <span className="sub-title">
            <img src="/img/theme-img/title_shape_1.svg" alt="shape" /> About Samarth Travels
          </span>
          <h2 className="sec-title">Samarth Travels Best Travels Company</h2>
        </div>

        <div className="row">
          {courses.map((course, index) => (
            <div className="col-xl-6 mb-4" key={index}>
              <div className="course-card">
                <div className="course-card_img">
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="course-card_content">
                  {/* <div className="price-wrap">
                    <span className="price">{course.price}</span>
                    <span className="category">
                      <i className="fa-solid fa-chart-simple me-1"></i> Intermediate
                    </span>
                  </div> */}
                  <h3 className="box-title">
                    <a href="/about">{course.title}</a>
                  </h3>
                  <p className="course-card_text">{course.description}</p>
                  {/* <div className="course-meta d-flex justify-content-between align-items-center">
                    <div className="meta-box d-flex align-items-center">
                      <div className="avater me-2">
                        <img src="/img/blog/avater_1.png" alt="instructor" />
                      </div>
                      <div className="media-body">
                        <h6 className="title mb-0">{course.instructor}</h6>
                        <span className="info">Instructor</span>
                      </div>
                    </div>
                    <span>
                      <i className="fas fa-clock"></i> {course.duration}
                    </span>
                  </div> */}
                  <div className="mt-3">
                    <a href="/about" className="th-btn btn-small">
                      Read More <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
