console.log("Vi er i FetchSelectionAvl")

const form = document.getElementById("selectionAvlForm");
const nameInput = document.getElementById("selectionAvlName");
const numberInput = document.querySelector("selectionAvlNumber");
const emailInput = document.querySelector("SelectionAvlEmail");
const selectionAvlList = document.getElementById("AvlsList");



const fetchSelectionsAvlList = () => {
   fetch("http://localhost:9090/Selection")
       .then((response) => response.json())
       .then((data) => {
           selectionAvlList.innerHTML ="";

           data.forEach((selectionModel) => {
               const selectionElement = document.createElement("div");
               selectionElement.innerHTML = `
              <h3>${selectionModel.name}</h3>
              <h3>${selectionModel.number}</h3>
              <h3>${selectionModel.email}</h3>
              <button onclick="deleteSelectionAvl('${selectionModel.id}')">Delete</button>
            `;

               selectionAvlList.appendChild(selectionElement);
           });
       })
       .catch((error) => {
       console.error("Error selectionAvl list:", error);
       showMessage("Error fetching selectionAvl list", true);
   });
};
// Build create User REST API

function createSelectionAvl(selection) {
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
            console.error('Error creating selectionAvl:', error);
        });
}

// Build get user by id REST API
function getSelectionByIdAvl(id) {
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
function getAllSelectionsAvl() {
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
function updateSelectionAvl(id, selection) {
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
            console.error('Error updating selectionAvl:', error);
        });
}

// Build Delete User REST API
function deleteSelectionAvl(id) {
    return fetch(`http://localhost:9090/Selection${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                return 'SelectionAvl successfully deleted!';
            } else {
                throw new Error('Error deleting selectionAvl.');
            }
        })
        .catch(error => {
            console.error('Error deleting selectionAvl:', error);
        });
}
fetchSelectionsAvlList();