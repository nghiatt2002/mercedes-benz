const PATTERN_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

getElement("btnSignUp").addEventListener("click", function() {
    var email = getElement("email").value;
    var check = getElement("chkAgree").checked;

    if (!check) {
        getElement("accept-error").style.display = "block";
    } else {
        getElement("accept-error").style.display = "none";
    }

    if (!isEmpty(email) || !checkEmail(email)) {
        getElement("email-error").style.display = "block";
        getElement("email").focus();
    } else {
        getElement("email-error").style.display = "none";
    }

});

/**
 * check empty
 * @param inputVal
 */
var isEmpty = function(inputVal) {
    if (inputVal.trim() == "") {
        return false;
    }

    return true;
}

/**
 * 
 * @param inputVal
 */
var checkEmail = function(inputVal) {
    // Check email is valid
    if (inputVal.match(PATTERN_EMAIL)) {
        return true;
    }

    return false;
}


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

