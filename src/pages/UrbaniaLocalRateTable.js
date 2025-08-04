import React from "react";

const UrbaniaLocalRateTable = () => {
  const data = [
    {
      type: "13 Seater AC Urbania",
      package: "₹8,000",
      km: "80 KM",
      extraKm: "₹37",
      hours: "8 Hrs",
      extraHr: "₹500"
    },
    {
      type: "17 Seater AC Urbania",
      package: "₹8,500",
      km: "80 KM",
      extraKm: "₹37",
      hours: "8 Hrs",
      extraHr: "₹500"
    }
  ];

  return (
    <div className="rate-table-container table-responsive">
      <h2>Pune to Pune City Urbania – Local Package</h2>
      <p className="subtitle">Includes: 80 KM / 8 Hours Minimum</p>
      <table className="rate-table">
        <thead>
          <tr>
            <th>Bus Type</th>
            <th>Package</th>
            <th>KM Included</th>
            <th>Extra KM</th>
            <th>Hours</th>
            <th>Extra Hour</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.type}</td>
              <td>{row.package}</td>
              <td>{row.km}</td>
              <td>{row.extraKm}</td>
              <td>{row.hours}</td>
              <td>{row.extraHr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrbaniaLocalRateTable;
