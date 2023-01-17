//Isso é pra aparecer um de cada vez


const tabBtn= document.querySelectorAll(".tab");
const tab= document.getElementsByClassName("tabShow");

console.log(tab);
    
    function tabs(panelIndex){
        console.log('enter');
        
        for (i=0; i<tab.length; i++) {
            tab[i].style.display='none';
            
        }
        /*tab.forEach(function(node){
            node.style.display="none";
            console.log(node);
        });*/
        tab[panelIndex].style.display="flex";

    }

//Menu Slide
var i=0;
function toggle(){
    
    if(i==0){
        
        document.getElementById("arrow").style.transform='rotate(-180deg)';
        document.getElementById("menu").style.left='0';
        i=1;
    }
    else{
       
        document.getElementById("arrow").style.transform='rotate(0deg)';
        document.getElementById("menu").style.left='-300px';
        i=0;
    }
}

//Show password
function showPassword() {
    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";

    } else {
      x.type = "password";
    }
  }

//Da log out e leva pra pagina de login
function logOut(){
    window.location.assign("/login/login.html")
}

// Confirmação simples do Update
update=document.getElementById("update");
update.addEventListener("click",ConfirmationUpdate);

var password=document.getElementById("password").value;

function ConfirmationUpdate(){
    var confirmation=window.prompt("Insira sua senha novamente: ");
    var password=document.getElementById("password").value;
    if(confirmation==password){
        alert("Update Successfully!");
    }
    else if (confirmation!=password){
        alert("The password is not correct!");
    }
}