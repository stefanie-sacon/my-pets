document.addEventListener("DOMContentLoaded", function () {
  const toggleChecker = document.getElementById("toggleChecker");
  const togglerLabel = document.getElementById("togglerLable");
  const nav = document.querySelector("nav");
  const navList = document.querySelector("nav ul");

  toggleChecker.addEventListener("change", function () {
    if (toggleChecker.checked) {
      navList.classList.add("show");
    } else {
      navList.classList.remove("show");
    }
  });
});
