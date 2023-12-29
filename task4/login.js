let registeredUser = {};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        login();
    });

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        signup();
    });
});

function switchForm(form) {
    if (form === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
    } else if (form === 'signup') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;

    // Here you'd typically send a request to your server
    // But for this demo, we'll just store it locally
    registeredUser = { username, password, email };
    alert('Signup successful. Please log in.');

    // Clear the form and switch to login
    document.getElementById('signup-form').reset();
    switchForm('login');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === registeredUser.username && password === registeredUser.password) {
        alert('Successfully logged in!');
    } else {
        alert('Incorrect username or password.');
    }
}
