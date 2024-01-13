let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.screenY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  //reset:true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.project-container,.portfolio-box,.contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".home-content h1, .quote-content, .about-img, .education",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(".home-content p,.about-content, .education2", {
  origin: "right",
});

const typed = new Typed(".multiple-text", {
  strings: ["Information System Student", "Aspiring Fullstack developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzFPVGxI-75Ilkm2z_EMuI9ubPlp8-7dQmMzzdPiIunLPPzj3bcY1ohMdT_DfZ3zPwhTA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
