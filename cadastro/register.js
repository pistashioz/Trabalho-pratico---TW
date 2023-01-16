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


//Show password
function showPassword() {
    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";

    } else {
      x.type = "password";
    }
  }