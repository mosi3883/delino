history.scrollRestoration = "manual";

window.addEventListener("beforeunload", function () {
  window.scrollTop(0);
});

const ham = document.querySelector(".hamberger");
const hamIcon = document.querySelector(".ham__icon.icon-menu");
const closeIcon = document.querySelector(".ham__icon.icon-close");
const overlay = document.querySelector(".overlay");
const mainNav = document.querySelector(".main-nav");

const showOverlay = function () {
  ham.dataset.state = "1";
  hamIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  overlay.classList.remove("hidden");
  setTimeout(() => (overlay.style.opacity = "1"), 10);
};

const hideOverlay = function () {
  hamIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  overlay.style.opacity = "0";

  setTimeout(() => overlay.classList.add("hidden"), 800);
  ham.dataset.state = "0";
};

const scrollTo = function (e) {
  const id = e.target.getAttribute("href");
  const goTo = document.querySelector(id);
  goTo.scrollIntoView({
    behavior: "smooth",
  });
};

const sectonObs = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0.1,
  }
);

ham.addEventListener("click", function (e) {
  e.preventDefault();
  if (ham.dataset.state === "0") {
    //alert("its close, openning");
    showOverlay();
  } else {
    hideOverlay();
    //alert("its open, closing");
  }
});

/* Scroll into view */

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav__link")) {
    scrollTo(e);
  }
});

document
  .querySelector(".overlay__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("overlay__link")) {
      hideOverlay();
      scrollTo(e);
    }
  });

document.querySelector(".header__btns").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    scrollTo(e);
  }
});

// show section with scroll

const allSec = document.querySelectorAll("section");

// hide section in begin
allSec.forEach((sec) => {
  sec.classList.add("section--hidden");
  sectonObs.observe(sec);
});

// active pulse

pulseObserve = new IntersectionObserver(
  function (entries) {
    console.log;
    if (entries[0].target.isIntersecting)
      document.querySelector(".plan:first-child").classList.add("play");
  },
  {
    root: null,
    threshold: 0.1,
  }
);

pulseObserve.observe(document.querySelector("#section--6"));
