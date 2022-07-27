window.onscroll = () => {
    const head = document.querySelector('.head');
    const scroly = window.scrollY


    if (scroly > 300) {
        head.classList.add('mymenu');
    } else if (scroly < 100) {
        head.classList.remove('mymenu');
    }

};