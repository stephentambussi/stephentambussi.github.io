
var modals = document.getElementsByClassName("modal");
var wd_modal = document.getElementById("wd-modal");

var skills = document.getElementsByClassName("skills");

var body = document.getElementsByClassName("body");

// Get span element to close modal
var spans = document.getElementsByClassName("close");

// Get image object and use it to expand text
var btns = document.getElementsByClassName("open-modal");

for (var i = 0; i < btns.length; i++) {
    var thisBtn = btns[i];
    thisBtn.addEventListener("click", function () {
        var modal = document.getElementById(this.dataset.modal);
        modal.style.display = "flex";
    }, false);
}

btns[0].onclick = function()
{
    wd_modal.style.display = "flex";
    skills[0].style.display = "inline-flex";
    body[0].style.overflowY = "hidden";
}

img2.onclick = function()
{
    modals[1].style.display = "flex";
    skills[1].style.display = "inline-flex";
    body[1].style.overflowY = "hidden";
}

img3.onclick = function()
{
    modals[2].style.display = "flex";
    skills[2].style.display = "inline-flex";
    body[2].style.overflowY = "hidden";
}

// When click on span (x), close the modal
span[0].onclick = function() 
{
    modals[0].style.display = "none";
    body[0].style.overflowY = "auto";
}

span[1].onclick = function() 
{
    modals[1].style.display = "none";
    body[1].style.overflowY = "auto";
}

span[2].onclick = function() 
{
    modals[2].style.display = "none";
    body[2].style.overflowY = "auto";
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        modals.style.display = "none";
        body.style.overflowY = "auto";
    }
});