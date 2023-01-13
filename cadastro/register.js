let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
function registerIn(){

    if (email=="luisapinho@gmail.com" && password=="luisa123"){
        alert("login successfully!");
        event.preventDefault();
    }
    
}
const register=document.getElementById("register");
register.addEventListener("click",registerIn);