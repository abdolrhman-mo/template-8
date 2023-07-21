// Nav Bar Contact
document.querySelector(".contact-link").addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Testimonials
const tBoxes = document.querySelectorAll(".testimonials .t-box");
const tNext = document.querySelector(".change-t-box span:last-of-type");
const tLast = document.querySelector(".change-t-box span:first-of-type");

tNext.addEventListener("click", () => {
  for (let i = 0; i < tBoxes.length - 1; i++) {
    if (tBoxes[i].classList.contains("active")) {
      tBoxes[i].classList.remove("active");
      tBoxes[i + 1].classList.add("active");
      break;
    }
  }
});

tLast.addEventListener("click", () => {
  for (let i = 1; i < tBoxes.length; i++) {
    if (tBoxes[i].classList.contains("active")) {
      tBoxes[i].classList.remove("active");
      tBoxes[i - 1].classList.add("active");
      break;
    }
  }
});

// FAQ
const tabsLinks = document.querySelectorAll(".tabs-list li");
tabsLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (
      document.querySelector(link.dataset.answer).classList.contains("active")
    ) {
      document.querySelectorAll(".tabs-list .answer").forEach((ele) => {
        if (ele.classList.contains("active")) {
          ele.classList.remove("active");
        }
      });
    } else {
      document.querySelectorAll(".tabs-list .answer").forEach((ele) => {
        if (ele.classList.contains("active")) {
          ele.classList.remove("active");
        }
      });
      document.querySelector(link.dataset.answer).classList.add("active");
    }
  });
});

// Nav Menu

const menuOverlay = document.querySelector(".menu-overlay");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-button")) {
    document.querySelector(".menu-box").classList.toggle("active");
    menuOverlay.classList.toggle("active");
  } else if (e.target.classList.contains("menu-overlay")) {
    document.querySelector(".menu-box").classList.remove("active");
    document.querySelector(".menu-overlay").classList.remove("active");
  }
});

document.querySelectorAll(".menu-box li").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(link.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector(".menu-box").classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
  });
});
