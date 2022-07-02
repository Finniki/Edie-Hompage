`use strict`;

btnMenu = document.querySelector(".menu");
linksNav = document.querySelector(".nav_links");

btnMenu.addEventListener("click", function () {
  if (linksNav.style.display === "none") {
    linksNav.style.display = "block";
  } else {
    linksNav.style.display = "none";
  }
});
