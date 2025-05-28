document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const username = form.querySelector('input[name="username"]').value;
        const password = form.querySelector('input[name="password"]').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userFound = users.some(user => user.username === username && user.password === password);
        if (userFound) {
            alert('Login successful!');
              window.location.href = './Home.html'; 
        } else {
            alert('Invalid username or password.');
        }
    });
});
