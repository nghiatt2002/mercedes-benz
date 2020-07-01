function getElement(id) {
    return document.getElementById(id);
}

getElement("btnToggleMenu").addEventListener("click", function() {
    getElement("btnCloseMenu").style.display = "block";
    this.style.display = "none";
});

getElement("btnCloseMenu").addEventListener("click", function() {
    getElement("btnToggleMenu").style.display = "block";
    this.style.display = "none";
});

getElement("btnShowMore").addEventListener("click", function() {
    getElement("divShowMore").style.display = 'none';

    // show items hide
    var listItems = document.getElementsByClassName('item__hide');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.display = 'block';
    }
});


// Hide navbar on scroll
var prevScroll = window.scrollY;
window.onscroll = function() {
    var currScroll = window.scrollY;
    if (currScroll > prevScroll) {
        getElement('header').style.transform = 'translateY(-100px)';
        getElement('header').style.transition = 'transform 1s';
        getElement('header').style.transitionDelay = '1s';
    } else {
        getElement('header').style.transform = 'translateY(0px)';
        getElement('header').style.transition = 'transform 1s';
        getElement('header').style.transitionDelay = '1s';
    }
    prevScroll = currScroll;
}