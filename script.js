const firsthalf = [20, 150, 234, 85, 105];
const secondhalf = [117, 289, 215, 167, 98];

const xAxis = firsthalf.concat(secondhalf);
const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "50"],
    datasets: [
      {
        label: "labels",
        data: xAxis,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(193, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
