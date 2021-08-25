var body = document.getElementsByClassName("body");

// Get image object and use it to expand text
var btns = document.getElementsByClassName("open-modal");

for (var i = 0; i < btns.length; i++) {
    var thisBtn = btns[i];
    thisBtn.addEventListener("click", function () {
        var modal = document.getElementById(this.dataset.modal);
        modal.style.display = "flex";
    }, false);
}

var modals = document.getElementsByClassName("modal");

// Get span element to close modal
var spans = document.getElementsByClassName("close");

// When click on span (x), close the modal
spans[0].onclick = function() 
{
    modals[0].style.display = "none";
}

spans[1].onclick = function() 
{
    modals[1].style.display = "none";
}

spans[2].onclick = function() 
{
    modals[2].style.display = "none";
}

spans[3].onclick = function()
{
    modals[3].style.display = "none";
}