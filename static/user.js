// prompt funcional //

document.addEventListener('DOMContentLoaded', () => {

    if (!localStorage.getItem('user')) {
        let name = prompt("Please enter your name:");
        localStorage.setItem('user', name);
        document.querySelector('#welcome').innerHTML = `Welcome ${name}!`;
    }else{
        let name = localStorage.getItem('user');
        document.querySelector('#welcome').innerHTML = `Welcome Back ${name}!`;
    }
});

