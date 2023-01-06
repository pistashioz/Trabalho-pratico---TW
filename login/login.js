
function registerIn(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if (email=="luisapinho@gmail.com" && password=="luisa123" || email=="simao@gmail.com" && password=="simao123" ){
        alert("login successfully!");
        event.preventDefault();
    }
    
}
const register=document.getElementById("login");
register.addEventListener("click",registerIn);