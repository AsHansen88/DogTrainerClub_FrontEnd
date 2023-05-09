console.log("Vi er i FetchFile")

//Upload
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

/** @param {Event} event */
function handleSubmit(event) {
    /** @type {HTMLFormElement} */
    const form = event.currentTarget;
    const url = new URL(form.action);
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);

    /** @type {Parameters<fetch>[1]} */
    const fetchOptions = {
        method: form.method,
    };

    if (form.method.toLowerCase() === 'post') {
        if (form.enctype === 'multipart/form-data') {
            fetchOptions.body = formData;
        } else {
            fetchOptions.body = searchParams;
        }
    } else {
        url.search = searchParams;
    }

    fetch(url, fetchOptions);

    event.preventDefault();

};

//List and download

// Fetch the file list from the server
/*
fetch('http://localhost:9090/files')
    .then(response => response.json())
    .then(data => {
        const fileListElement = document.getElementById('/files/');
        data.forEach(file => {
            const li = document.createElement('li');
            li.textContent = file.name;
            fileListElement.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

*/

//List and download

// Fetch the file list from the server
fetch('http://localhost:9090/files')
    .then(response => response.json())
    .then(data => {
        const fileListElement = document.getElementById('/files/');
        data.forEach(file => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = file.name;
            link.href = file.path; // Assuming the file path is provided by the server
            link.download = file.name; // Set the filename for download

            li.appendChild(link);
            fileListElement.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
