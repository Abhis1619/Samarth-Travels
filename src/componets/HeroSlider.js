import React from 'react';
import Carousel from './Carousel';
import AboutSection from '../pages/AboutSection';
import CounterSection from '../pages/CounterSection';
import CourseSection from '../pages/CourseSection';
import FaqSection from '../pages/FaqSection';
import WhyChooseUs from './WhyChooseUs';
import WorkProcess from '../pages/WorkProcess';
import Testimonials from '../pages/Testimonials';
import CtaSection from '../pages/CtaSection';
import BlogSection from '../pages/blogPosts';
import Sliderr from './Slider';


const HeroSection = () => {
  
  return (


    <div className="th-hero-wrapper hero-1" id="hero">



       {/* <Sliderr/> */}
        <Carousel/>
        <AboutSection/>
        <CounterSection/>
        <CourseSection/>
        <FaqSection/>
        <WhyChooseUs/>
        <WorkProcess/>
        <Testimonials/>
        {/* <CtaSection/> */}
        <BlogSection/>
    </div>
  );
};

export default HeroSection;
