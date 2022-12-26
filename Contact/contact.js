// Dark Theme
let icon = document.getElementById("icon");
let logo = document.getElementById("logo");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "Imagens/light_mode.png";
        logo.src = "Imagens/logo-invertido.png";
    } else {
        icon.src = "Imagens/dark_mode.png";
        logo.src = "Imagens/logo.png";
    }

}