
import React from 'react';
// import BusRatesTable from './BusRatesTable';
import { Helmet } from 'react-helmet';
import RateTable from './RateTable';
import NonAcRateTable from './NonAcRateTable';
import LocalAcRateTable from './LocalAcRateTable';
import LocalNonAcRateTable from './LocalNonAcRateTable';
import UrbaniaOutstationRateTable from './UrbaniaOutstationRateTable';
import UrbaniaLocalRateTable from './UrbaniaLocalRateTable';
import UrbaniaMumbaiRateTable from './UrbaniaMumbaiRateTable';

const Packages = () => {

 
  return (
   <div>
 


 <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title text-center">Packages </h1>
                </div>
            </div>
        </div>



<RateTable/>
<NonAcRateTable/>
<LocalAcRateTable/>
<LocalNonAcRateTable/>
<UrbaniaOutstationRateTable/>
<UrbaniaLocalRateTable/>
<UrbaniaMumbaiRateTable/>
{/* <BusRatesTable/> */}
<div className="rules-guidelines-container">
  <h2 className="rules-title">Rules and Guidelines:</h2>
  <ul className="rules-list">
    <li>Driver allowance will charge extra.</li>
    <li>Cab running km is limited to 300 km per day.</li>
    <li>Time starts from 6:00 AM to 10:00 PM, and the bus must be free at 10:00 PM. After 10:00 PM, extra charges apply. Night charges apply from 12:00 AM to 6:00 AM.</li>
    <li>Time and km will be calculated from our office to office.</li>
    <li>Interstate taxes, toll taxes, parking, and service tax are charged as actuals.</li>
    <li>Extra charges will apply for extra km and hours. Government taxes will be charged as per government rules.</li>
    <li>The charges quoted above are calculated based on the current fuel prices. Any hike in fuel prices will result in a variation in rates.</li>
  </ul>
</div>


   </div>
  );
};

export default Packages;
