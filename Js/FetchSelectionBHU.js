console.log("Vi er i FetchSelectionBHU")

// Build create User REST API

function createSelection(selection) {
    return fetch('http://localhost:9090/Selection', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selection),
    })
        .then(response => response.json())
        .then(savedSelection => {
            return savedSelection;
        })
        .catch(error => {
            console.error('Error creating selection:', error);
        });
}

// Build get user by id REST API
function getSelectionById(id) {
    return fetch(`http://localhost:9090/Selection${id}`)
        .then(response => response.json())
        .then(selection => {
            return selection;
        })
        .catch(error => {
            console.error('Error retrieving selection:', error);
        });
}

// Build Get All Users REST API
function getAllSelections() {
    return fetch('http://localhost:9090/Selection')
        .then(response => response.json())
        .then(selections => {
            return selections;
        })
        .catch(error => {
            console.error('Error retrieving selections:', error);
        });
}

// Build Update User REST API
function updateSelection(id, selection) {
    return fetch(`http://localhost:9090/Selection${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selection),
    })
        .then(response => response.json())
        .then(updatedSelection => {
            return updatedSelection;
        })
        .catch(error => {
            console.error('Error updating selection:', error);
        });
}

// Build Delete User REST API
function deleteSelection(id) {
    return fetch(`http://localhost:9090/Selection${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                return 'Selection successfully deleted!';
            } else {
                throw new Error('Error deleting selection.');
            }
        })
        .catch(error => {
            console.error('Error deleting selection:', error);
        });
}