
var modal = document.getElementById("wd-modal");

var hard_skills = document.getElementById("hard-skills");

// Get image object and use it to expand text
var img = document.getElementById("WD");

img.onclick = function()
{
    modal.style.display = "flex";
    hard_skills.style.display = "inline-flex";
}

// Get span element to close modal
var span = document.getElementsByClassName("close")[0];

// When click on span (x), close the modal
span.onclick = function() 
{
    modal.style.display = "none";
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        modal.style.display = "none";
    }
});