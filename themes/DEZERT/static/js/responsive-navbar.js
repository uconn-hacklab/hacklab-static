/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function triggerHamburger() {
// get the navbar element and put it into a variable
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} 

// Javascript adds a class to the dropdown when the section is clicked 
// This class is used to show the dropdown menu
window.onload = function() { 
    var section_buttons = document.getElementsByClassName("dropbtn");
    for (var i = 0; i < section_buttons.length; i++) {
        section_buttons[i].onclick = function() {
            var dropdown = this.parentNode;
            console.log(dropdown);
            if (dropdown.className === "dropdown") {
                dropdown.className += " section-clicked";
            } else {
                dropdown.className = "dropdown";
            }
        }
    }

}

