/**
 * =============== DARK MODERN ===============
 * Creator : Alireza-Mokhtari
 * GitHub : AttackerAlireza
 * Telegram : Special_One
 **/
// Get Element
const element = document.getElementById("darkmodern");
if (element) {
  applayTheme();
  // Event Listener
  element.addEventListener("change", function () {
    defaultTheme();
  });
} else {
  alert("Error");
}
// init Theme CheckBox
function applayTheme() {
  var darkThemeSelected =
    localStorage.getItem("darkModern") !== null &&
    localStorage.getItem("darkModern") === "dark";
  darkThemeSelected = element.checked;
  darkThemeSelected
    ? document.body.setAttribute("data-darkmodern", "one-dark-pro")
    : document.body.removeAttribute("data-darkmodern");
}

var head = document.getElementsByTagName("HEAD")[0];

// Create new link Element
var link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";
link.type = "text/css";
link.href = "/src/css/darkmodern-bootstrap-v5.css";

// Reset Theme CheckBox
function defaultTheme() {
  if (element.checked) {
    head.appendChild(link);
    document.body.setAttribute("data-darkmodern", "one-dark-pro");
    localStorage.setItem("darkModern", "one-dark-pro");
  } else {
    head.removeChild(link);
    document.body.removeAttribute("data-darkmodern");
    localStorage.removeItem("darkModern");
  }
}


