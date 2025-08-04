import React from "react";

const UrbaniaMumbaiRateTable = () => {
  const data = [
    {
      type: "13 Seater AC Urbania",
      package: "₹14,000",
      km: "350 KM",
      extraKm: "₹38",
      driverDA: "₹400 or Food Extra"
    },
    {
      type: "17 Seater AC Urbania",
      package: "₹15,000",
      km: "350 KM",
      extraKm: "₹38",
      driverDA: "₹400 or Food Extra"
    }
  ];

  return (
    <div className="rate-table-container table-responsive">
      <h2>Pune to Mumbai Urbania Rates</h2>
      <p className="subtitle">Per Day Minimum KM: 350</p>
      <table className="rate-table ">
        <thead>
          <tr>
            <th>Bus Type</th>
            <th>Package</th>
            <th>KM Included</th>
            <th>Extra KM</th>
            <th>Toll / Parking / Driver DA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.type}</td>
              <td>{row.package}</td>
              <td>{row.km}</td>
              <td>{row.extraKm}</td>
              <td>{row.driverDA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrbaniaMumbaiRateTable;
