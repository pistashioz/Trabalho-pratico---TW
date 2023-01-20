var payment=document.getElementById("pay-button");
payment.addEventListener("click",Thanks);

 function Thanks(){
    alert("Thanks for buying it from out store! You can check more about your order in your profile, for more questions just send a email to us!")
    window.location.assign("/homepage/main.html");
 }

//Close E vai para a home :D
closeProfile=document.getElementById("close-pay");
closeProfile.addEventListener("click",goMain);

function goMain(){
    window.location.assign("/homepage/main.html");
}