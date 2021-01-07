
// toggle animation start

let slide = document.getElementById('slide');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
btn1.onclick = function () {
    slide.style.transform = 'translateX(0px)';
    btn1.classList.add('active');
    btn2.classList.remove('active');
}
btn2.onclick = function () {
    slide.style.transform = 'translateX(-100vw)';
    btn2.classList.add('active');
    btn1.classList.remove('active');
}

// toggle animation end


// typing speed effect animation script start

var options = {
    strings: ['Youtuber.', 'Blogger.', 'Designer.', 'Developer.', 'Front-end Developer.'],
    typeSpeed: 100,
    loop: true,
    backSpeed: 60
};

var typed = new Typed('.type-effect', options);
var effect = new Typed('.typeeffect', options);


// typing speed effect animation script end


// navbar script start

function onClickMenu() {
    document.getElementsByClassName('three-line')[0].classList.toggle('change');
    let mobileView = document.getElementsByClassName('mobile-view')[0];
    mobileView.classList.toggle('mobile-change');
}

function clickMobile() {
    document.getElementsByClassName('three-line')[0].classList.remove('change');
    document.getElementsByClassName('mobile-view')[0].classList.remove('mobile-change');
}
// navbar script end

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

