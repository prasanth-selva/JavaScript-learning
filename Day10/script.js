function showMessage() {
    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("message").innerText =
            "Please enter your name";
    } else {
        document.getElementById("message").innerText =
            "Hello " + name + "!";
    }
}