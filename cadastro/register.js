

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
  /*function validaPassword(){
    var x= document.getElementsByName("password");
    var y= document.getElementsByName("password1");
    console.log("oiii")
    if(x==y){
        alert("Account created successfully!");
        event.preventDefault();
        window.location.assign("/homepage/main.html");
        console.log("oi");
    }
    else{
        alert("The passwords do not match :'(")
    }
  }(*/

            // Function to check Whether both passwords
            // is same or not.
           /* function checkPassword(form) {
                password1 = form.password1.value;
                password2 = form.password2.value;
  
                // If password not entered
                if (password1 == '')
                    alert ("Please enter Password");
                      
                // If confirm password not entered
                else if (password2 == '')
                    alert ("Please enter confirm password");
                      
                // If Not same return False.    
                else if (password1 != password2) {
                    alert ("\nPassword did not match: Please try again...")
                    return false;
                }
  
                // If same return True.
                else{
                    alert("Password Match: Welcome to GeeksforGeeks!")
                    return true;
                }
            }*/

