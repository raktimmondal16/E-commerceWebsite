// Function to toggle the menu on small screens
function menutoggle() {
    var menuItems = document.getElementById("MenuItems");
    if (menuItems.style.maxHeight == "0px") {
      menuItems.style.maxHeight = "200px";
    } else {
      menuItems.style.maxHeight = "0px";
    }
  }
  