const btn = document.querySelector('#btn');
const url = 'https://jsonplaceholder.typicode.com/users';
const span = document.querySelector('#span');

btn.addEventListener('click', getUsers(url));

async function getUsers(url) {
    try {
        const response = await fetch(url);

        const result = await response.json();

        // console.log(result[1].email);
        span.innerHTML = result[1].name;
    } catch (error) {
        console.error(error);
    }

}