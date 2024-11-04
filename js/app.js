document.addEventListener("DOMContentLoaded", () => {
  // GSAP Animations for Hero Section and Benefits
  if (window.gsap) {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -50, duration: 1.2 });

    const benefitItems = document.querySelectorAll(".benefit-item");
    benefitItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 20,
        delay: index * 0.2,
        duration: 0.6,
      });
    });

    gsap.from("nav .nav-link", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
    });
  } else {
    console.error("GSAP is not defined. Please check the script inclusion.");
  }

  // Axios to Fetch
  if (window.axios) {
    axios
      .get(
        "https://api.marketstack.com/v1/eod?access_key={6e0f3f99a36130edd83573ec22353ba8}"
      )
      .then((response) => {
        const caseStudiesContainer = document.getElementById(
          "case-studies-container"
        );
        const caseStudies = response.data;

        caseStudies.forEach((study) => {
          const div = document.createElement("div");
          div.classList.add("col-md-6", "mb-3");
          div.innerHTML = `
                      <div class="portfolio-item shadow-sm p-3 bg-white rounded">
                          <h5>${study.name}</h5>
                          <p><strong>Description:</strong> ${
                            study.description || "Not Available"
                          }</p>
                          <p><strong>Owner:</strong> ${study.owner.login}</p>
                          <p><strong>URL:</strong> <a href="${
                            study.html_url
                          }" target="_blank">${study.html_url}</a></p>
                      </div>
                  `;
          caseStudiesContainer.appendChild(div);
          gsap.from(div, { opacity: 0, y: 20, duration: 0.8 });
        });
      })
      .catch((error) => {
        console.error("Error fetching...:", error);
      });
  } else {
    console.error("Axios is not defined. Please check the script inclusion.");
  }
});
