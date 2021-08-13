
var modal = document.getElementById("marvell-modal");

var skills = document.getElementById("skills");

var body = document.getElementById("body");

// Get image object and use it to expand text
var img = document.getElementById("M");

img.onclick = function()
{
    modal.style.display = "flex";
    skills.style.display = "inline-flex";
    body.style.overflowY = "hidden";
}

// Get span element to close modal
var span = document.getElementsByClassName("close")[0];

// When click on span (x), close the modal
span.onclick = function() 
{
    modal.style.display = "none";
    body.style.overflowY = "auto";
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        modal.style.display = "none";
        body.style.overflowY = "auto";
    }
});