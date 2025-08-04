import React from "react";

const RateTable = () => {
  const data = [
    {
      type: "13 Seater",
      mumbai: "₹10,500",
      mahabaleshwar: "₹10,500",
      extraKm: "₹24",
      permit: "₹500"
    },
    {
      type: "13 Seater Urbania",
      mumbai: "₹15,000",
      mahabaleshwar: "₹10,800",
      extraKm: "₹35",
      permit: "₹500"
    },
    {
      type: "17 Seater",
      mumbai: "₹11,500",
      mahabaleshwar: "₹11,500",
      extraKm: "₹28",
      permit: "₹500"
    },
    {
      type: "17 Seater Urbania",
      mumbai: "₹15,000",
      mahabaleshwar: "₹10,800",
      extraKm: "₹36",
      permit: "₹500"
    },
    {
      type: "20 Seater",
      mumbai: "₹12,500",
      mahabaleshwar: "₹12,500",
      extraKm: "₹30",
      permit: "₹700"
    },
    {
      type: "27 Seater",
      mumbai: "₹17,000",
      mahabaleshwar: "₹16,000",
      extraKm: "₹45",
      permit: "₹700"
    },
    {
      type: "35 Seater",
      mumbai: "₹21,500",
      mahabaleshwar: "₹19,500",
      extraKm: "₹55",
      permit: "₹700"
    },
    {
      type: "41 Seater",
      mumbai: "₹24,000",
      mahabaleshwar: "₹22,000",
      extraKm: "₹60",
      permit: "₹800"
    },
    {
      type: "45 Seater",
      mumbai: "₹26,000",
      mahabaleshwar: "₹24,000",
      extraKm: "₹65",
      permit: "₹800"
    }
  ];

  return (
    <div className="rate-table-container table-responsive">
      <h2>AC Bus & Tempo Traveller Rates</h2>
      <table className="rate-table">
        <thead>
          <tr>
            <th>Bus Type</th>
            <th>Mumbai (Up to 350 KM)</th>
            <th>Mahabaleshwar (Up to 300 KM)</th>
            <th>Extra KM</th>
            <th>Special Permit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.type}</td>
              <td>{row.mumbai}</td>
              <td>{row.mahabaleshwar}</td>
              <td>{row.extraKm}</td>
              <td>{row.permit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RateTable;
