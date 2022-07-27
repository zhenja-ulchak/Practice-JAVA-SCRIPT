const scrollElem = document.querySelector('.scroll');

window.onscroll = () => {
    scInd();
}

function scInd() {
    //вираховує висоту прокрутки в цифрах
    const top = document.documentElement.scrollTop;
    // scrollHeight вищитує всю висоту документа зразу
    const height = document.documentElement.scrollHeight;
    //висота ерана дівайса clientHeight
    const height2 = document.documentElement.clientHeight;
    //мінусуєм
    const res = height - height2;

    const scrolRes = (top / res) * 100;
    scrollElem.style.width = scrolRes + '%'
}