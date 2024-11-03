document.addEventListener("DOMContentLoaded", () => {
  // Check if GSAP is available
  if (window.gsap) {
    gsap.from(".hero h1", { opacity: 0, y: 20, duration: 0 });
    gsap.from(".hero p", { opacity: 0, y: 20, duration: 0 });

    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.8,
        delay: index * 0.3,
        duration: 0.6,
      });
    });
  } else {
    console.error("GSAP is not defined. Please check the script inclusion.");
  }
});
