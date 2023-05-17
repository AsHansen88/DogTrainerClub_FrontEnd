const trailsForm = document.getElementById('trails-form')
const trailContainer = document.getElementById('trails-container');

function trailsFormdata(dataString){
const options = {year: 'numeric', month: 'long', day: 'numeric'};
return new Date (dataString).toLocaleString(undefined, options);
}

function fetchTrails(){
    fetch('http://localhost:9090/prover')
        .then(response => response.json())
        .then(trails => {
            trailContainer.innerHTML='';
            trails.forEach(trail => displayTrail(trail))
        })
        .catch(error => console.error('Error:', error))
}

function displayTrail(trail){
    const trailElement = document.createElement('body');
    trailElement.classList.add('trail')
    trailElement.innerHTML = `
    <h2>${trail.title}</h2>
    <p>${trail.body}</p>
    <p><em>${trailsFormdata(trail.date)}</em></p>
    `;
   trailContainer.appendChild(trailElement);
};

trailsForm.addEventListener('submit',event => {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');


    const newTrail = {
        title: titleInput.value,
        body: bodyInput.value,
        date: new Date().toISOString()
    };

    fetch('http://localhost:9090/prove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTrail)
    })
        .then(response => response.json())
        .then(createdTrail => {
            displayPost(createdTrail);
            titleInput.value = '';
            bodyInput.value = '';
        })
        .catch(error => console.error('Error:', error));
});

fetchTrails();