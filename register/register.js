

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
  
      if(password==""){
        alert("Field cannot be empty!");
      }
      else if(password!=confirm){
        alert("The passwords do not match :'(")
        return false
      }
      else if(password==confirm){
        alert("Account created successfully!");
        event.preventDefault();
        window.location.assign("/homepage/main.html");
        return true
      }
    }

  
  

