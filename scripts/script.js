const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=500) {
        header.classList.add('navbarDark');
        header.classList.add('shadow-lg');
    }
    else {
        header.classList.remove('navbarDark');
        header.classList.remove('shadow-lg');
    }
}