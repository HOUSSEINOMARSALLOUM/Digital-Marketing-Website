document.addEventListener("DOMContentLoaded", () => {
  // GSAP Animations for Hero Section and Benefits
  if (window.gsap) {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -50, duration: 1.2 });

    const benefitItems = document.querySelectorAll(".benefit-item");
    benefitItems.forEach((item, index) => {
      gsap.from(item, { opacity: 0, y: 20, delay: index * 0.2, duration: 0.6 });
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

  // Check if case studies are already in localStorage, if not, set them
  if (!localStorage.getItem("caseStudies")) {
    const caseStudies = [
      {
        name: "E-Commerce SEO Boost",
        description: "Improved the organic traffic of an online store by 200%.",
        owner: "Online Store Inc.",
        url: "https://example.com/ecommerce-case-study",
      },
      {
        name: "Local Business SEO",
        description: "Achieved top rankings for a local restaurant chain.",
        owner: "Gourmet Eats",
        url: "https://example.com/local-seo-case-study",
      },
      {
        name: "SaaS Product Growth",
        description: "Increased the user base of a SaaS product by 150%.",
        owner: "Tech Innovations",
        url: "https://example.com/saas-case-study",
      },
    ];
    localStorage.setItem("caseStudies", JSON.stringify(caseStudies));
  }

  // Retrieve case studies from localStorage
  const caseStudiesContainer = document.getElementById(
    "case-studies-container"
  );
  const storedCaseStudies = JSON.parse(localStorage.getItem("caseStudies"));

  // Dynamically create case study elements
  storedCaseStudies.forEach((study) => {
    const div = document.createElement("div");
    div.classList.add("col-md-6", "mb-3");
    div.innerHTML = `
        <div class="portfolio-item shadow-sm p-3 bg-white rounded">
          <h5>${study.name}</h5>
          <p><strong>Description:</strong> ${study.description}</p>
          <p><strong>Owner:</strong> ${study.owner}</p>
          <p><strong>URL:</strong> <a href="${study.url}" target="_blank">${study.url}</a></p>
        </div>
      `;
    caseStudiesContainer.appendChild(div);
    gsap.from(div, { opacity: 0, y: 20, duration: 0.8 });
  });
});
