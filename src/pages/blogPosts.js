import React from 'react';

const blogPosts = [
  {
    title: 'Luxury Force Urbania on Rent in Pune',
    image: '/images/keyword/34.jpg',
    author: 'Samarth Travels',
    link: '/luxury-force-urbania-on-rent-in-pune',
  },
  {
    title: 'Tempo Traveller on Rent in Pune',
    image: '/images/keyword/21.jpg',
    author: 'Samarth Travels',
    link: '/tempo-traveller-on-rent-in-pune',
  },
  {
    title: 'Bus Rental in Pune',
    image: '/images/keyword/10.jpg',
    author: 'Samarth Travels',
    link: '/bus-rental-in-pune',
  },
  
];

const BlogSection = () => {
  return (
    <section className="space bg-smoke" id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <img src="/img/theme-img/title_shape_1.svg" alt="shape" />
            Samarth Travels Services
          </span>
          <h2 className="sec-title">Our Services</h2>
        </div>
        <div className="row slider-shadow th-carousel" data-slide-show="3" data-lg-slide-show="2" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-6 col-xl-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img src={post.image} alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-user"></i>By {post.author}
                    </a>
                 
                  </div>
                  <h3 className="box-title">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <a href={post.link} className="line-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
