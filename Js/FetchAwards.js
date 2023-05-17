console.log("Vi er i FetchAwards")

const awardForm = document.getElementById('awards-form');
const awardContainer = document.getElementById('awardsContainer');

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleString(undefined, options);
}

function fetchAwards() {
    fetch('http://localhost:9090/prover')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(awards => {
            awardContainer.innerHTML = '';
            awards.forEach(award => displayAward(award));
        })
        .catch(error => console.error('Error:', error));
}

function displayAward(award) {
    const awardElement = document.createElement('div');
    awardElement.classList.add('award');
    awardElement.innerHTML = `
    <h2>${award.title}</h2>
    <p>${award.body}</p>
    <p><em>${formatDate(award.date)}</em></p>
  `;
    awardContainer.appendChild(awardElement);
}

awardForm.addEventListener('submit', event => {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');

    const newAward = {
        title: titleInput.value,
        body: bodyInput.value,
        date: new Date().toISOString()
    };

    fetch('http://localhost:9090/prove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAward)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Parse response as text
        })
        .then(responseText => {
            if (responseText) {
                const createdAward = JSON.parse(responseText); // Parse the JSON from responseText
                displayAward(createdAward);
                titleInput.value = '';
                bodyInput.value = '';
            } else {
                console.log('Empty response received.');
            }
        })
        .catch(error => console.error('Error:', error));

})
    fetchAwards();

