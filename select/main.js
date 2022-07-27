// const check = document.querySelector('#check');
// const p = document.querySelector('#p');
const select = document.getElementById('select');
const btn = document.getElementById('btn');

btn.onclick = (event) => {
    // console.log('select options', select.options);
    // console.log('select value', select.value);
    // console.log('select options', select.selectedIndex);
    // console.log('select options', select.options[2].selected = true);
    let chText = select.options[select.selectedIndex].text;
    console.log(chText);
    if (chText) {
        alert('ok' + chText);
    }

}





















// check.onclick = function(event) {
//     // console.log(event.isTrusted);
//     const isCheck = check.checked;
//     console.log(isCheck);
//     if (isCheck) {
//         p.innerHTML = 'ви піздабол';
//     }
// }