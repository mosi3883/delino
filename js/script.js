const ham = document.querySelector(".hamberger");
const hamIcon = document.querySelector(".ham__icon.icon-menu");
const closeIcon = document.querySelector(".ham__icon.icon-close");
const overlay = document.querySelector(".overlay")
ham.addEventListener("click", function () {
  if (ham.dataset.state === "0") {
    //alert("its close, openning");
    hamIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden");
    ham.dataset.state = "1";
    overlay.classList.remove("hidden");
  } else {
    //alert("its open, closing");
    hamIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden");
    ham.dataset.state = "0";
    overlay.classList.add("hidden");
  }
})