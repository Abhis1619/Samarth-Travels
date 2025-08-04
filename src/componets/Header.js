import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';



const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    // <header className={`header ${scrolling ? 'sticky-header' : ''}`}>
    <header className>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto">
              <div className="header-top-contact">
                <ul className='anchor d-md-flex'>
                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+919860256019">
                      <i className="fas fa-phone-volume text-white"></i> +91 9860256019
                    </a>
                  </li>
                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+919527500025 ">
                      <i className="fas fa-phone-volume text-white"></i> +91 9527500025
                    </a>
                  </li>
                  <li>
                    <a className='text-white' href="mailto:samarthtravels9119@gmail.com">
                      <i className="far fa-envelope text-white"></i>
                      <span className='text-white fw-bold'> samarthtravels9119@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar expand="lg">
          <Container>
            <img src="/images/logo.png" className='logoo' alt="logo" />
            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolor"></i> 
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav" className={isNavOpen ? "show" : ""}>
              <Nav className="mx-auto">
                <Nav.Link href="/" className='fw-bold nav-item'>Home</Nav.Link>
                <NavDropdown title="About Us" id="about-us-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/about" className='fw-bold nav-item'>About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/term-condition" className='fw-bold nav-item'>Term & Condition</NavDropdown.Item>
                  <NavDropdown.Item href="/privacy-policy" className='fw-bold '>Privacy Policy</NavDropdown.Item>
                 
                </NavDropdown>
                <Nav.Link href="/services" className='fw-bold nav-item'>Services</Nav.Link>
                <Nav.Link href="/our-fleet" className='fw-bold nav-item'>Our Fleet</Nav.Link>
                <Nav.Link href="/packages" className='fw-bold nav-item'>Packages</Nav.Link>
                <Nav.Link href="/booking" className='fw-bold nav-item'>Online Booking</Nav.Link>
                <Nav.Link href="/gallery" className='fw-bold nav-item'>Gallery</Nav.Link>
                <NavDropdown title="Contact Us" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/contact-us" className='fw-bold nav-item'>Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="/enquiry" className='fw-bold'>Enquiry</NavDropdown.Item>
                </NavDropdown>
              </Nav>
           
            </Navbar.Collapse>
            
          </Container>
         
        </Navbar>
      </div>

      {/* Search Area */}
      {isSearchOpen && (
        <div className="search-area">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Type Keyword..." />
              <button type="submit" className="search-icon-btn">
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;






