let text = document.getElementById('text');
let sports1 = document.getElementById('sports1');
let sports2 = document.getElementById('sports2');


window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    sports1.style.right = value * -1.5 + 'px';
    sports2.style.left = value * -1.5 + 'px';
});