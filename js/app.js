document.addEventListener("DOMContentLoaded", () => {
  const { animate } = window["framer-motion"];

  // Framer Motion animations
  animate(".hero h1", { opacity: [0, 1], y: [-20, 0] }, { duration: 1 });
  animate(".hero p", { opacity: [0, 1], y: [-20, 0] }, { duration: 1.5 });

  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item, index) => {
    animate(
      item,
      { opacity: [0, 1], scale: [0.8, 1] },
      { delay: index * 0.3, duration: 0.6 }
    );
  });

  // Chart.js for visual data representation
  const ctx1 = document.getElementById("chart1").getContext("2d");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["Before SEO", "After SEO"],
      datasets: [
        {
          label: "Traffic Growth (%)",
          data: [100, 300],
          backgroundColor: ["#35BBDF", "#4D94E6"],
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

  const ctx2 = document.getElementById("chart2").getContext("2d");
  new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["Month 1", "Month 2", "Month 3", "Month 4"],
      datasets: [
        {
          label: "Client Inquiries Growth",
          data: [50, 75, 150, 300],
          backgroundColor: "#21DADB",
          borderColor: "#4D94E6",
          fill: false,
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
});
