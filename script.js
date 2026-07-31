function validate() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name == "") {
        alert("Name cannot be empty");
        return false;
    }

    if (age < 18) {
        alert("Age must be 18 or above");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}

function validate(){

    let email = document.getElementById("email").value;

    if(!email.includes("@") || !email.includes(".")){
        alert("Invalid Email");
        return false;
    }

    return true;
}
let password = document.getElementById("password").value;

if(password.length < 8){
    alert("Password must contain at least 8 characters");
    return false;
}