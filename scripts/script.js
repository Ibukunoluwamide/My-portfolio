const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=500) {
        header.classList.add('navbarDark');
        switcher.style.color = 'black'
    }
    else {
        header.classList.remove('navbarDark');
        switcher.style.color = 'white'
    }
}

const switchMode = ()=> {
    let body = document.body
    body.classList.toggle("dark-mode");
    if (body.className =='dark-mode') {
        switcher.classList.remove('fa-moon')
        switcher.classList.add('fa-sun')
    }else{
        switcher.classList.remove('fa-sun')
        switcher.classList.add('fa-moon')
    }

}