console.log("Vi er i fetchUserLogin")

// Make a GET request to the "/all" endpoint
fetch('http://localhost:9090/api/test/all')
    .then(response => response.text())
    .then(data => {
        console.log(data); // Output: Public Content.
    })
    .catch(error => {
        console.error('Error:', error);
    });

/*
// Make a GET request to the "/user" endpoint
fetch('http://localhost:9090/api/test/user')
    .then(response => response.text())
    .then(data => {
        console.log(data); // Output: User Content.
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Make a GET request to the "/mod" endpoint
fetch('http://localhost:9090/api/test/mod')
    .then(response => response.text())
    .then(data => {
        console.log(data); // Output: Moderator Board.
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Make a GET request to the "/admin" endpoint
fetch('http://localhost:9090/api/test/admin')
    .then(response => response.text())
    .then(data => {
        console.log(data); // Output: Admin Board.
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/

const token = 'Bearer token';

// Make a GET request to the "/user" endpoint
fetch('http://localhost:9090/api/test/user', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => response.text())
    .then(data => {
        console.log(data); // Output: User Content.
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Make a GET request to the "/mod" endpoint
fetch('http://localhost:9090/api/test/mod', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => response.text())
    .then(data => {
        console.log(data); // Output: Moderator Board.
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Make a GET request to the "/admin" endpoint
fetch('http://localhost:9090/api/test/admin', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => response.text())
    .then(data => {
        console.log(data); // Output: Admin Board.
    })
    .catch(error => {
        console.error('Error:', error);
    });

