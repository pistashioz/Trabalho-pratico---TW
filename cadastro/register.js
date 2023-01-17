

//Show password
function showPassword() {
    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";

    } else {
      x.type = "password";
    }
  }

  //Pra ver se as o confirm senha esta igual
     
    let password= document.getElementById("password").value;
    let confirm= document.getElementById("password1").value;

    const button=document.getElementById("register");
    button.addEventListener("click",validaPassword);
     
    function validaPassword(){
    let password= document.getElementById("password").value;
    let confirm= document.getElementById("password1").value;
 
    console.log("oiii")
    if(password==""){
      alert("Field cannot be empty!");
    }
    else if(password!=confirm){
      alert("The passwords do not match :'(")
      return false
    }
    else if(password==confirm){
      alert("Account created successfully!");
      window.location.assign("/homepage/main.html");
      console.log("oi");}
      return true
  }

  
  

