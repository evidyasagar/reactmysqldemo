import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ data, title }) {
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Line Chart</h2> */}
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: title,
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: { title: { display: true, text: "Time" } },
            y: { title: { display: true, text: "Total Orders" } },
          },
          ticks: {
            precision: 0,
          },
        }}
      />
    </div>
  );
}
export default LineChart;
