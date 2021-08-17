
var wd_modal = document.getElementById("wd-modal");
var scu_modal = document.getElementById("scu-modal");
var marvell_modal = document.getElementById("marvell-modal");

var skills = document.getElementsByClassName("skills");

var body = document.getElementsByClassName("body");

// Get image object and use it to expand text
var img1 = document.getElementById("WD");
var img2 = document.getElementsById("SCU");
var img3 = document.getElementsById("M");

img1.onclick = function()
{
    wd_modal.style.display = "flex";
    skills[0].style.display = "inline-flex";
    body[0].style.overflowY = "hidden";
}

img2.onclick = function()
{
    scu_modal.style.display = "flex";
    skills[1].style.display = "inline-flex";
    body[1].style.overflowY = "hidden";
}

img3.onclick = function()
{
    marvell_modal.style.display = "flex";
    skills[2].style.display = "inline-flex";
    body[2].style.overflowY = "hidden";
}

// Get span element to close modal
var span = document.getElementsByClassName("close");

// When click on span (x), close the modal
span[0].onclick = function() 
{
    wd_modal.style.display = "none";
    body[0].style.overflowY = "auto";
}

span[1].onclick = function() 
{
    scu_modal.style.display = "none";
    body[1].style.overflowY = "auto";
}

span[2].onclick = function() 
{
    marvell_modal.style.display = "none";
    body[2].style.overflowY = "auto";
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        wd_modal.style.display = "none";
        scu_modal.style.display = "none";
        marvell_modal.style.display = "none";
        body[0].style.overflowY = "auto";
        body[1].style.overflowY = "auto";
        body[2].style.overflowY = "auto";
    }
});