let icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "Imagens/light_mode.png";
    } else {
        icon.src = "Imagens/dark_mode.png";
    }

}