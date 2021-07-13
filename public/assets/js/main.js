function sidenav_show() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  document.getElementsById("mySide").style.display = "block";
}

function sidenav_hide() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  document.body.style.backgroundColor = "#f6fafd";
  document.getElementsById("mySide").style.display = "none";
}
