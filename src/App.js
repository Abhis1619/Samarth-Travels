import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './componets/Header';
import HeroSection from './componets/HeroSlider';
import Footer from './componets/Footer';
import ContactFeatures from './pages/ContactFeatures';
import Gallery from './pages/Gallery';
import EnquiryForm from './pages/Enquiry';
import ServicesSection from './pages/ServicesSection';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Ourfleet from './pages/Ourfleet';
import Packages from './pages/Packages';
import BookingList from './pages/BookingList';
import About from './pages/About';
import Tempotravellerpune from './pages/Tempo Traveller Pune';
import ScrollToTop from './componets/ScrollToTop';
import ContactButtons from './componets/ContactButtons';
import Tempotravelleronrentinpune from './pages/Tempo Traveller on Rent Pune';
import Busonrentinpune from './pages/Bus on Rent in Pune';
import Tempotravelleronrent from './pages/Tempo Traveller on Rent';
import Tempotravellerrentinpune from './pages/Tempo Traveller Rent in Pune';
import Tempotravellerhire from './pages/Tempo Traveller Hire in Pune';
import Minibusforrent from './pages/Mini Bus for Rent';
import Busonrenthire from './pages/Bus on Rent Hire';
import Busonrentpune from './pages/Bus on Rent Pune';
import Busrentalinpune from './pages/Bus Rental in Pune';
import Hiretempotraveller from './pages/Hire Tempo Traveller';
import Bushireinpune from './pages/Bus Hire in Pune';
import Actempotraveller from './pages/Ac Tempo Traveller Rent Pune';
import BusRatesTable from './pages/BusRatesTable';
import Busrentalforcorporate from './pages/Bus Rental For Corporate Events';
import Busrentalfortour from './pages/Bus Rental for Tour';
import Busrentalforcorporateinpune from './pages/Bus Rental For Corporate in Pune';
import Tempotravelleronrentinpunne from './pages/Tempo Traveller on Rent in Pune';
import Acbusonrent from './pages/AC Bus On Rent';
import Nonacbusrentalservice from './pages/Non Ac Bus Rental Service';
import Busonhirepunetomahabaleshwar from './pages/Bus on Hire on Pune to Mahabaleshwar Package Tour';
import Bushireforpicnic from './pages/Bus Hire for Picnic';
import Busonrentforeventinpune from './pages/Bus on Rent For Event in Pune';
import Busonhirepune from './pages/Bus on Hire Pune';
import Seatertempotraveller from './pages/32 Seater Tempo Traveller Service';
import Fourseaterbus from './pages/40 Seater Bus on Rent in Pune';
import Fiftyseaterbusrentinpune from './pages/50 Seater Bus on Rent in Pune';
import Luxuryforceurbaniaonrent from './pages/Luxury Force Urbania on Rent in Pune';
import Punetomahabaleshwar from './pages/Pune to Mahabaleshwar Urbania Bus Hire on Rent';
import Punetoshirdiforceurbania from './pages/Pune to Shirdi Force Urbania on Rent';
import Urbanialauxurybusrentals from './pages/Urbania Luxury Bus Rentals in Pune';
import Punetooutstationurbaniabushire from './pages/Pune to Outstation Urbania Bus Hire in Pune';
import Punetoashtavinayakurbania from './pages/Pune to Ashtavinayak Urbania Tour Package';
import Urbaniatouristbusonrent from './pages/Urbania Tourist Bus on Rent in Pune';
import Bushireforoutstation from './pages/Bus Hire For Outstation';
import Busonrentforlocal from './pages/Bus on Rent for Local';
import Busrentalforwedding from './pages/Bus Rental For Wedding';
import Busrentformarriage from './pages/Bus Rent for Marriage';
import Thirtinseatertempotraveller from './pages/13 Seater Tempo Traveller on Rent in Pune';
import Sevantinseatertempotraveller from './pages/17 Seater Tempo Traveller on Rent in Pune';
import Twentyseater from './pages/20 Seater Bus on Rent in Pune';
import Urbaniaonrentinpune from './pages/Urbania On Rent In Pune';
import Forceurbaniaonrentinpune from './pages/Force Urbania on Rent in Pune';
import Urbaniaonrentinpimprichichwad from './pages/Urbania On Rent in Pimpri Chinchwad';
import Punetomahabaleshwarurbania from './pages/Pune to Mahabaleshwar Urbania On Rent';
import Punetomumbaiurbaniaonrent from './pages/Pune to Mumbai Urbania On Rent';
import Punetogoaurbaniaonrent from './pages/Pune to Goa Urbania On Rent';
import Urbaniahireforoutstation from './pages/Urbania Hire for Outstation in Pune';
import Sevntinseaterurbania from './pages/17 Seater Force Urbania on Rent in Pune';
import Thirtinseaterurbania from './pages/13 seater force urbania on Rent in Pune';
import Urbaniahireforcorporate from './pages/Urbania Hire for Corporate Event in Pune';
import Tempotravellerhireforoutstation from './pages/Tempo Traveller Hire for Outstation in Pune';
import Luxurytempotraveller from './pages/Luxury Tempo Traveller On Rent in Pune';
import Twentyfiveseatetempotraveller from './pages/25 Seater Tempo Traveller on Rent in Pune';
import Punetomahabaleshwartempotraveller from './pages/Pune to Mahabaleshwar Tempo Traveller';
import Punetoshirditempotraveller from './pages/Pune to Shirdi Tempo Traveller On Rent';
import Thirtitwiseaterbus from './pages/32 Seater Bus Rent in Pune';
import Fourtifiveseater from './pages/45 Seater Bus on Rent in Pune';
import Busrentalforschooltrips from './pages/Bus Rentals For School Trips in Pune';
import BUsbookingforweddinginpune from './pages/Bus booking for wedding in Pune';
import Busbookingformarriage from './pages/Bus Booking for Marriage';
import Busserviceforcorporate from './pages/Bus Service for Corporate Pune';
import Busrentalfortourpackage from './pages/Bus Rental for Tour Packages';
import Acbusonrentinpune from './pages/AC Bus On Rent in Pune';
import Punebushirerentalservice from './pages/Pune Bus Hire Rental Service';
import Busserviceforpicnicinpune from './pages/Bus Service for Picnic in Pune';
import Nonacbusrentalserviceinpune from './pages/Non Ac Bus Rental Service in Pune';
import Minibusonrentinpune from './pages/Mini Bus On Rent in Pune';
import Fourtyseatertempotraveller from './pages/14 Seater Tempo Traveller on Rent';
import Sevntinseaterbus from './pages/17 Seater Bus on Rent Pune';
import Manyseaaterbus from './pages/14 17 20 25 Seater Bus on in Pune';
import Travelsagentinpuneforminibushire from './pages/Travel Agents in Pune for Mini Bus Hire';
import Luxurybusrentalsinpune from './pages/Luxury Bus Rental in Pune';
import Manysseater from './pages/32,35,40,45,50 Seater Bus on Rent in Pune';
import Volvobusonrentinpune from './pages/Volvo Bus On Rent in Pune';
import Tempotravellerrental from './pages/Tempo Traveller Rental Services in Pune';
import Twentyseatertraveller from './pages/20 Seater Tempo Traveller On Rent in Pune';
import Twentytempotravelleronrent from './pages/26 Seater Tempo Traveller On Rent in Pune';
import Busrentalsserviceinpune from './pages/Bus Rental Services in Pune';
import Weddingbusrentalservice from './pages/Wedding Bus Rental Service';
import Busonrentinpimprichichwad from './pages/Bus On Rent in Pimpri Chinchwad';

function App() {
 
  useEffect(() => {
    const blockedIPs = ['123.45.67.89', '171.61.88.172'];

    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        const userIP = data.ip;

        if (blockedIPs.includes(userIP)) {
          document.body.innerHTML = "<h1 style='text-align:center;margin-top:50px;'>Access Denied</h1>";
        }
      })
      .catch(err => {
        console.error('IP fetch failed:', err);
      });
  }, []);

  return (
    <Router>
 <Header/>
    <ContactButtons/>
<ScrollToTop/>

      <Routes>

        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<BookingList />} />
        <Route path="/our-fleet" element={<Ourfleet />} />
        <Route path="/contact-us" element={<ContactFeatures />} />

        <Route path="/tempo-traveller-pune" element={<Tempotravellerpune />} />
    
<Route path="/tempo-traveller-on-rent-pune" element={<Tempotravelleronrentinpune />} />
<Route path="/bus-on-rent-in-pune" element={<Busonrentinpune />} />
<Route path="/tempo-traveller-on-rent" element={<Tempotravelleronrent />} />
<Route path="/tempo-traveller-rent-in-pune" element={<Tempotravellerrentinpune />} />
<Route path="/tempo-traveller-hire-in-pune" element={<Tempotravellerhire />} />
<Route path="/mini-bus-for-rent" element={<Minibusforrent />} />
<Route path="/bus-on-rent-hire" element={<Busonrenthire />} />
<Route path="/bus-on-rent-pune" element={<Busonrentpune />} />
<Route path="/bus-rental-in-pune" element={<Busrentalinpune />} />
<Route path="/hire-tempo-traveller" element={<Hiretempotraveller />} />
<Route path="/bus-hire-in-pune" element={<Bushireinpune />} />

<Route path="/ac-tempo-traveller-rent-pune" element={<Actempotraveller />} />
<Route path="/bus-rental-for-corporate-events" element={<Busrentalforcorporate />} />
<Route path="/bus-rental-for-tour" element={<Busrentalfortour />} />
<Route path="/bus-rental-for-corporate-in-pune" element={<Busrentalforcorporateinpune />} />
<Route path="/tempo-traveller-on-rent-in-pune" element={<Tempotravelleronrentinpunne />} />
<Route path="/ac-bus-on-rent" element={<Acbusonrent />} />
<Route path="/non-ac-bus-rental-service" element={<Nonacbusrentalservice />} />
<Route path="/bus-on-hire-pune-to-mahabaleshwar-package-tour" element={<Busonhirepunetomahabaleshwar />} />
<Route path="/bus-hire-for-picnic" element={<Bushireforpicnic />} />
<Route path="/bus-on-rent-for-event-in-pune" element={<Busonrentforeventinpune />} />
<Route path="/bus-on-hire-pune" element={<Busonhirepune />} />
<Route path="/32-seater-tempo-traveller-service" element={<Seatertempotraveller />} />



<Route path="/40-seater-bus-on-rent-in-pune" element={<Fourseaterbus />} />
<Route path="/50-seater-bus-on-rent-in-pune" element={<Fiftyseaterbusrentinpune />} />
<Route path="/luxury-force-urbania-on-rent-in-pune" element={<Luxuryforceurbaniaonrent />} />
<Route path="/pune-to-mahabaleshwar-urbania-bus-hire-on-rent" element={<Punetomahabaleshwar />} />
<Route path="/pune-to-shirdi-force-urbania-on-rent" element={<Punetoshirdiforceurbania />} />
<Route path="/urbania-luxury-bus-rentals-in-pune" element={<Urbanialauxurybusrentals />} />
<Route path="/pune-to-outstation-urbania-bus-hire-in-pune" element={<Punetooutstationurbaniabushire />} />
<Route path="/pune-to-ashtavinayak-urbania-tour-package" element={<Punetoashtavinayakurbania />} />
<Route path="/urbania-tourist-bus-on-rent-in-pune" element={<Urbaniatouristbusonrent />} />

<Route path="/bus-hire-for-outstation" element={<Bushireforoutstation />} />
<Route path="/bus-on-rent-for-local" element={<Busonrentforlocal />} />
<Route path="/bus-rental-for-wedding" element={<Busrentalforwedding />} />
<Route path="/bus-rent-for-marriage" element={<Busrentformarriage />} />
<Route path="/13-seater-tempo-traveller-on-rent-in-pune" element={<Thirtinseatertempotraveller />} />
<Route path="/17-seater-tempo-traveller-on-rent-in-pune" element={<Sevantinseatertempotraveller />} />
<Route path="/20-seater-bus-on-rent-in-pune" element={<Twentyseater />} />



<Route path="/urbania-on-rent-in-pune" element={<Urbaniaonrentinpune />} />
<Route path="/force-urbania-on-rent-in-pune" element={<Forceurbaniaonrentinpune />} />
<Route path="/urbania-on-rent-in-pimpri-chinchwad" element={<Urbaniaonrentinpimprichichwad />} />
<Route path="/pune-to-mahabaleshwar-urbania-on-rent" element={<Punetomahabaleshwarurbania />} />
<Route path="/pune-to-mumbai-urbania-on-rent" element={<Punetomumbaiurbaniaonrent />} />
<Route path="/pune-to-goa-urbania-on-rent" element={<Punetogoaurbaniaonrent />} />
<Route path="/urbania-hire-for-outstation-in-pune" element={<Urbaniahireforoutstation />} />
<Route path="/17-seater-force-urbania-on-rent-in-pune" element={<Sevntinseaterurbania />} />
<Route path="/13-seater-force-urbania-on-rent-in-pune" element={<Thirtinseaterurbania />} />
<Route path="/urbania-hire-for-corporate-event-in-pune" element={<Urbaniahireforcorporate />} />
<Route path="/tempo-traveller-hire-for-outstation-in-pune" element={<Tempotravellerhireforoutstation />} />
<Route path="/luxury-tempo-traveller-on-rent-in-pune" element={<Luxurytempotraveller />} />
<Route path="/25-seater-tempo-traveller-on-rent-in-pune" element={<Twentyfiveseatetempotraveller />} />
<Route path="/pune-to-mahabaleshwar-tempo-traveller" element={<Punetomahabaleshwartempotraveller />} />
<Route path="/pune-to-shirdi-tempo-traveller-on-rent" element={<Punetoshirditempotraveller />} />
<Route path="/32-seater-bus-rent-in-pune" element={<Thirtitwiseaterbus />} />
<Route path="/45-seater-bus-on-rent-in-pune" element={<Fourtifiveseater />} />

<Route path="/bus-rentals-for-school-trips-in-pune" element={<Busrentalforschooltrips />} />
<Route path="/bus-booking-for-wedding-in-pune" element={<BUsbookingforweddinginpune />} />
<Route path="/bus-booking-for-marriage" element={<Busbookingformarriage />} />
<Route path="/bus-service-for-corporate-in-pune" element={<Busserviceforcorporate />} />
<Route path="/bus-rental-for-tour-packages" element={<Busrentalfortourpackage />} />
<Route path="/ac-bus-on-rent-in-pune" element={<Acbusonrentinpune />} />
<Route path="/pune-bus-hire-rental-service" element={<Punebushirerentalservice />} />
<Route path="/bus-service-for-picnic-in-pune" element={<Busserviceforpicnicinpune />} />
<Route path="/non-ac-bus-rental-service-in-pune" element={<Nonacbusrentalserviceinpune />} />
<Route path="/mini-bus-on-rent-in-pune" element={<Minibusonrentinpune />} />
<Route path="/14-seater-tempo-traveller-on-rent" element={<Fourtyseatertempotraveller />} />
<Route path="/17-seater-bus-on-rent-pune" element={<Sevntinseaterbus />} />
<Route path="/14-17-20-25-seater-bus-on-rent-in-pune" element={<Manyseaaterbus />} />
<Route path="/travel-agents-in-pune-for-mini-bus-hire" element={<Travelsagentinpuneforminibushire />} />
<Route path="/luxury-bus-rental-in-pune" element={<Luxurybusrentalsinpune />} />
<Route path="/32-35-40-45-50-seater-bus-on-rent-in-pune" element={<Manysseater />} />
<Route path="/volvo-bus-on-rent-in-pune" element={<Volvobusonrentinpune />} />
<Route path="/tempo-traveller-rental-services-in-pune" element={<Tempotravellerrental />} />
<Route path="/20-seater-tempo-traveller-on-rent-in-pune" element={<Twentyseatertraveller />} />
<Route path="/26-seater-tempo-traveller-on-rent-in-pune" element={<Twentytempotravelleronrent />} />
<Route path="/bus-rental-services-in-pune" element={<Busrentalsserviceinpune />} />
<Route path="/wedding-bus-rental-service" element={<Weddingbusrentalservice />} />
<Route path="/bus-on-rent-in-pimpri-chinchwad" element={<Busonrentinpimprichichwad />} />

      </Routes>
<Footer/>
    </Router>
  );
}



export default App;
