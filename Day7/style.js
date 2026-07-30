// Body Styling
document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.background = "linear-gradient(135deg,#1e3c72,#2a5298)";
document.body.style.fontFamily = "Arial";

// Box Styling
const box = document.getElementById("box");
box.style.backgroundColor = "white";
box.style.padding = "30px";
box.style.borderRadius = "15px";
box.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
box.style.textAlign = "center";
box.style.width = "350px";

// Title Styling
const title = document.getElementById("title");
title.style.color = "#333";

// Paragraph Styling
const text = document.getElementById("text");
text.style.fontSize = "18px";
text.style.color = "#555";

// Button Styling
const btn = document.getElementById("btn");
btn.style.padding = "10px 20px";
btn.style.backgroundColor = "#007BFF";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";
btn.style.fontSize = "16px";

// DOM Event
btn.addEventListener("click", function () {
    title.innerHTML = "DOM Style Changed!";
    text.innerHTML = "All styles are applied using JavaScript only.";

    title.style.color = "red";
    text.style.color = "green";

    box.style.backgroundColor = "#FFF8DC";
    document.body.style.background =
        "linear-gradient(135deg,#11998e,#38ef7d)";
});