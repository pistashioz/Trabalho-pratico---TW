// Dark Theme
let icon = document.getElementById("icon");
let logo = document.getElementById("logo");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "Images/light_mode.png";
        logo.src = "Images/logo-invertido.png";
    } else {
        icon.src = "Images/dark_mode.png";
        logo.src = "Images/logo.png";
    }

}