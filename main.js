function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");
ham.addEventListener("click", toggleMenu);
menu.classList.contains("showMenu");
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
}
var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleMenu);
});
