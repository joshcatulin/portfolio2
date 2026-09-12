var typed = new Typed(".multiple-text", {
  strings: ["CATULIN", "a Student"],
  startDelay: 500,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

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
        let activeLink = document.querySelector(
          "header nav a[href*=" + id + "]"
        );
        if (activeLink) activeLink.classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 50);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const readMoreBtns = document.querySelectorAll(".read-more");

readMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const readMoreId = this.getAttribute("data-readmore-id");
    const moreText = document.querySelector(
      `.more-text[data-readmore-id="${readMoreId}"]`
    );
    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {
      this.textContent = "Read More";
    } else {
      this.textContent = "Read Less";
    }
  });
});

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img, .services-container", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
