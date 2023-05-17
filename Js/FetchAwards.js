console.log("Vi er i FetchAwards")

// GET request to fetch trails and awards
fetch('http://localhost:9090/prøver')
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        displayData(data); // Call a function to display the data
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });

// POST request to publish trails and awards
const trailsAndAwards = {
    // Fill in the properties of the trailsAndAwards object
};

fetch('http://localhost:9090/prøve', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(trailsAndAwards)
})
    .then(response => {
        if (response.ok) {
            console.log('awards published successfully');
        } else {
            console.error('Failed to publish awards');
        }
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });

// Function to display data
function displayData(data) {
    // Get the element where the data will be displayed
    const dataContainer = document.getElementById('dataContainer');

    // Clear any existing data
    dataContainer.innerHTML = '';

    // Loop through the data and create elements for each item
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('data-item');
        itemElement.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.body}</p>
      <p><em>${item.date ? formatDate(item.date) : 'No date available'}</em></p>
    `;
        dataContainer.appendChild(itemElement);
    });
}

// Helper function to format the date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
}