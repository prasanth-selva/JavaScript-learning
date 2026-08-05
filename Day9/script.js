function validateForm(){

let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
    alert("Invalid Email");
    return false;
}

if(phone.length!=10 || isNaN(phone)){
    alert("Phone Number must contain 10 digits");
    return false;
}

document.getElementById("msg").innerHTML="Form Submitted Successfully";
return false;

}

function toggleBox(){

document.getElementById("box").classList.toggle("move");

}