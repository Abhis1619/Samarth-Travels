import React from "react";

const UrbaniaOutstationRateTable = () => {
  const data = [
    {
      type: "13 Seater Urbania",
      perDayKm: "300 KM Minimum",
      perKmRate: "₹35",
      driverDA: "₹400 or Food Extra"
    },
    {
      type: "17 Seater Urbania",
      perDayKm: "300 KM Minimum",
      perKmRate: "₹36",
      driverDA: "₹400 or Food Extra"
    }
  ];

  return (
    <div className="rate-table-container table-responsive">
      <h2>Pune to Outstation Urbania Rates</h2>
      <table className="rate-table ">
        <thead>
          <tr>
            <th>Bus Type</th>
            <th>Per Day Minimum KM</th>
            <th>AC Per KM Rate</th>
            <th>Toll / Parking / Driver DA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.type}</td>
              <td>{row.perDayKm}</td>
              <td>{row.perKmRate}</td>
              <td>{row.driverDA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrbaniaOutstationRateTable;
