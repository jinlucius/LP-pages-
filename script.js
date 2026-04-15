document.addEventListener("DOMContentLoaded", () => {
  // Accordion logic
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      header.classList.toggle("active");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("section6").scrollIntoView({ behavior: "smooth" });
});

