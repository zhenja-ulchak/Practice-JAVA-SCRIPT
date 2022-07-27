const timeLine = document.querySelector('.time-line');
const timeLineHeight = document.querySelector('.time-line').dataset.height;

window.onscroll = () => scrollHend();

function scrollHend() {
    if (window.scrollY >= timeLineHeight) {
        timeLine.style.height = timeLineHeight + 'px';
    } else {
        timeLine.style.height = window.scrollY + 'px'
    }
}