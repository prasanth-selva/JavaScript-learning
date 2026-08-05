function validateForm(){

let email=document.getElementById("email").value;

let phone=document.getElementById("phone").value;

let msg=document.getElementById("msg");

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email==""){

alert("Enter Email");

return false;

}

if(!emailPattern.test(email)){

alert("Invalid Email");

return false;

}

if(phone.length!=10 || isNaN(phone)){

alert("Phone Number must contain 10 digits");

return false;

}

msg.innerHTML="✅ Form Submitted Successfully";

msg.style.animation="pop .5s";

return false;

}

function toggleBox(){

document.getElementById("box").classList.toggle("move");

}