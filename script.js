let openSubMenu = document.getElementById("has-child");
let subMenu = document.getElementById("header-nav-child");
openSubMenu.addEventListener('mouseover', function() {
  subMenu.style.visibility ="visible";
  
});

openSubMenu.addEventListener('mouseout', function() {
  subMenu.style.visibility ="hidden";
  
});