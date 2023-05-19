console.log("Vi er er Fetchlogin")


// Login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the '/signin' endpoint
    fetch('http://localhost:9090/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Registration form submission
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;
    const role = document.getElementById('role').value;

    // Send a POST request to the '/signup' endpoint
    fetch('http://localhost:9090/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: regUsername, email: regEmail, password: regPassword, role })
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

