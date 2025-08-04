import React from "react";

const LocalAcRateTable = () => {
  const data = [
    {
      type: "13 Seater",
      rate: "₹6,000",
      extraKm: "₹24",
      extraHr: "₹300"
    },
    {
      type: "13 Seater Urbania",
      rate: "₹8,000",
      extraKm: "₹37",
      extraHr: "₹500"
    },
    {
      type: "17 Seater",
      rate: "₹7,000",
      extraKm: "₹28",
      extraHr: "₹300"
    },
    {
      type: "17 Seater Urbania",
      rate: "₹8,500",
      extraKm: "₹37",
      extraHr: "₹500"
    },
    {
      type: "20 Seater",
      rate: "₹7,500",
      extraKm: "₹30",
      extraHr: "₹300"
    },
    {
      type: "27 Seater",
      rate: "₹9,500",
      extraKm: "₹45",
      extraHr: "₹500"
    },
    {
      type: "35 Seater",
      rate: "₹12,000",
      extraKm: "₹55",
      extraHr: "₹700"
    },
    {
      type: "41 Seater",
      rate: "₹14,000",
      extraKm: "₹60",
      extraHr: "₹700"
    },
    {
      type: "45 Seater",
      rate: "₹15,000",
      extraKm: "₹65",
      extraHr: "₹800"
    }
  ];

  return (
    <div className="rate-table-container table-responsive">
      <h2>Local AC Bus Rates (8 Hrs / 80 KM)</h2>
      <table className="rate-table">
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

export default LocalAcRateTable;
