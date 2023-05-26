console.log("Vi er er Fetchlogin")
/*
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
*/

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
            // Redirect to Forside.html
            //window.location.href = 'Forside.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;


    // Make a POST request to the signup endpoint
    fetch('http://localhost:9090/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: regUsername, email: regEmail, password: regPassword, roles: ["ROLE_ADMIN"]}),
    })
        .then((response) => {
            if (response.ok) {
                // Registration successful
                return response.json();
            } else if (response.status === 401) {
                throw new Error('Unauthorized: You are not allowed to access this resource.');
            } else {
                throw new Error('Registration failed');
            }
        })
        .then((data) => {
            // Handle the response data
            console.log(data);
            // Redirect to a different page or perform any additional actions
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

//logout

// Add a click event listener to the button
document.getElementById('signoutButton').addEventListener('click', () => {
    // Make a POST request to the signout endpoint
    fetch('http://localhost:9090/api/auth/signout', {
        method: 'POST',
    })
        .then(response => {
            if (response.ok) {
                // Remove the JWT token cookie
                document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

                // Display a success message
                alert('You have been signed out!');
            } else {
                // Handle the error response
                alert('Failed to sign out. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});
