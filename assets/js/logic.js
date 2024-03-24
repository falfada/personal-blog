// Dark Mode Functionality
const themeToggle = document.getElementById('darkmode-toggle');
const bodyContainer = document.body;

let mode = "light";

themeToggle.addEventListener("click", function(){
    if(mode === "light"){
        mode = "dark";
        bodyContainer.setAttribute("class", "dark");
    } else{
        mode = "light";
        bodyContainer.setAttribute("class", "light");
    }
});