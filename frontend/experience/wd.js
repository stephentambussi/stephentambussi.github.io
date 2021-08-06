
var modal = document.getElementById("wd-modal");

// Get text and insert it inside modal
var img = document.getElementById("WD");

img.onclick = function()
{
    modal.style.display = "block";
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