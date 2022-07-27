// робим виборку
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const res = document.querySelector('#res');
const res2 = document.querySelector('#res2');
const deletes = document.querySelector('#deletes');

// зазначаєм собитфє для бтн
btn.addEventListener('click', addTodo)

todos = [];
deletes.addEventListener('click', remuveTodo)

function remuveTodo() {
    const l = todos.pop();
    console.log(l);
    res2.innerHTML = l;
    let value = '';
    for (const todo of todos) {

        value = todo;
    }

    res2.innerHTML += `
    <li>${value}</li>
    `
    if (res2 == true) {
        res.value = ''
    }
}

// 
function addTodo() {
    //берем значення з інпута
    let val = input.value;
    console.log(val);

    // післяджобавлення удаляєм
    input.value = '';
    // добавляєм значення в масив
    todos.push(val);
    // визиваєм функцію яка шото робить з масивом
    addlists()
}

function addlists() {
    // просто пусте знач
    let value = '';
    // перебираєм масив 
    for (const todo of todos) {
        // кожне значення забиваєм в перемену
        value = todo;
    }
    // виводим перемену
    res.innerHTML += `
    <li>${value}</li>
    `
        // h1.innerHTML += `${value[0]}`
}