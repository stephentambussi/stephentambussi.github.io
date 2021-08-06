
var modal = document.getElementById("modal");

// Get image and insert it inside modal -- uses alt text as caption
var img = document.getElementById("WD");
var modalImg = document.getElementById("img_src");
var captionText = document.getElementById("caption");
img.onclick = function()
{
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
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