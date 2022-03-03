let offset = 0;
const slider = document.querySelector('.translate-block');

document.querySelector('.next').addEventListener('click', function() {
    offset += 550;
    if (offset > 1660) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
})

document.querySelector('.prev').addEventListener('click', function() {
    offset += -550;
    if (offset < 0) {
        offset = 1660;
    }
    slider.style.left = -offset + 'px';
})