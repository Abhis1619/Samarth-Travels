import React from "react";

const LocalNonAcRateTable = () => {
  const data = [
    {
      type: "17 Seater",
      rate: "₹5,500",
      extraKm: "₹22",
      extraHr: "₹300"
    },
    {
      type: "20 Seater",
      rate: "₹6,000",
      extraKm: "₹25",
      extraHr: "₹300"
    },
    {
      type: "32 Seater",
      rate: "₹7,500",
      extraKm: "₹33",
      extraHr: "₹500"
    },
    {
      type: "35 Seater",
      rate: "₹8,000",
      extraKm: "₹36",
      extraHr: "₹500"
    },
    {
      type: "40 Seater",
      rate: "₹8,500",
      extraKm: "₹41",
      extraHr: "₹500"
    },
    {
      type: "45 Seater (2x2)",
      rate: "₹10,000",
      extraKm: "₹50",
      extraHr: "₹800"
    },
    {
      type: "49 Seater (3x2)",
      rate: "₹10,000",
      extraKm: "₹49",
      extraHr: "₹800"
    }
  ];

  return (
    <div className="rate-table-container table-responsive">
      <h2>Local Non-AC Bus Rates (8 Hrs / 80 KM)</h2>
      <table className="rate-table ">
        <thead>
          <tr>
            <th>Bus Type</th>
            <th>Base Rate</th>
            <th>Extra KM</th>
            <th>Extra Hour</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.type}</td>
              <td>{row.rate}</td>
              <td>{row.extraKm}</td>
              <td>{row.extraHr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocalNonAcRateTable;
