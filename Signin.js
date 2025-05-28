document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const username = form.querySelector('input[name="user"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="pass"]').value;
        const confirmPassword = form.querySelector('input[name="confirm"]').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        const newUser = {
            username: username,
            email: email,
            password: password 
                };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = './Login.html';
    });
});
