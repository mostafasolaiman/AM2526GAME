let button = document.getElementById("my-button");
let storyText = document.getElementById("story-text");
    
button.addEventListener("click", function() {
    storyText.innerText = "The text changed after the button was clicked!";
});