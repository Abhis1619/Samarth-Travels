import React from "react";

const NonAcRateTable = () => {
  const data = [
    {
      type: "17 Seater",
      mumbai: "₹9,000",
      mahabaleshwar: "₹8,500",
      extraKm: "₹22",
      permit: "₹500"
    },
    {
      type: "20 Seater",
      mumbai: "₹10,500",
      mahabaleshwar: "₹9,500",
      extraKm: "₹25",
      permit: "₹500"
    },
    {
      type: "32 Seater",
      mumbai: "₹13,500",
      mahabaleshwar: "₹12,500",
      extraKm: "₹33",
      permit: "₹700"
    },
    {
      type: "35 Seater",
      mumbai: "₹14,500",
      mahabaleshwar: "₹13,500",
      extraKm: "₹36",
      permit: "₹700"
    },
    {
      type: "40 Seater",
      mumbai: "₹15,500",
      mahabaleshwar: "₹14,500",
      extraKm: "₹41",
      permit: "₹700"
    },
    {
      type: "45 Seater (2x2)",
      mumbai: "₹19,000",
      mahabaleshwar: "₹18,000",
      extraKm: "₹50",
      permit: "₹800"
    },
    {
      type: "49 Seater (3x2)",
      mumbai: "₹20,000",
      mahabaleshwar: "₹17,000",
      extraKm: "₹49",
      permit: "₹800"
    }
  ];

  return (
    <div className="rate-table-container table-responsive">
      <h2>Non-AC Bus & Tempo Traveller Rates</h2>
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

export default NonAcRateTable;
