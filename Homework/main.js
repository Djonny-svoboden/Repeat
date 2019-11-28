var bultab;
var tabCont;
window.onload = function() {
    tabCont = document.getElementsByClassName('inner-tab')
    bultab = document.getElementsByClassName('buttab')
    hidetabs(1);
}

function hidetabs(a) {
    for (var i = a; i < tabCont.length; i++) {
        tabCont[i].classList.remove('show');
        tabCont[i].classList.add("hide");
        bultab[i].classList.remove('fullborder');
    }
}