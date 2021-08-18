
var modal = document.getElementsByClassName("modal");
var wd_modal = document.getElementById("wd-modal");

var skills = document.getElementsByClassName("skills");

var body = document.getElementsByClassName("body");

// Get image object and use it to expand text
// var img1 = document.getElementById("WD");
var btn = document.getElementsByClassName("open-modal");
var img2 = document.getElementsById("SCU");
var img3 = document.getElementsById("M");

btn[0].onclick = function()
{
    wd_modal.style.display = "flex";
    skills[0].style.display = "inline-flex";
    body[0].style.overflowY = "hidden";
}

img2.onclick = function()
{
    modal[1].style.display = "flex";
    skills[1].style.display = "inline-flex";
    body[1].style.overflowY = "hidden";
}

img3.onclick = function()
{
    modal[2].style.display = "flex";
    skills[2].style.display = "inline-flex";
    body[2].style.overflowY = "hidden";
}

// Get span element to close modal
var span = document.getElementsByClassName("close");

// When click on span (x), close the modal
span[0].onclick = function() 
{
    modal[0].style.display = "none";
    body[0].style.overflowY = "auto";
}

span[1].onclick = function() 
{
    modal[1].style.display = "none";
    body[1].style.overflowY = "auto";
}

span[2].onclick = function() 
{
    modal[2].style.display = "none";
    body[2].style.overflowY = "auto";
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        modal.style.display = "none";
        body.style.overflowY = "auto";
    }
});