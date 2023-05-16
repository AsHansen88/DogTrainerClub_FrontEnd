console.log("Vi er i FetchSelectionAvl")


const form = document.getElementById("createSelectionForm");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");
const SelectionList = document.getElementById("SelectionList");

// Build create Selection REST API
function createSelection() {
    const selection = {
        name: nameInput.value,
        number: numberInput.value,
        email: emailInput.value
    };

    fetch('http://localhost:9090/Selection', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selection),
    })
        .then(response => response.json())
        .then(savedSelection => {
            console.log('Created selection:', savedSelection);
            // Handle success or display a message
        })
        .catch(error => {
            console.error('Error creating selection:', error);
        });
}

const fetchSelectionList = () => {
    fetch('http://localhost:9090/Selection')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error fetching selection list');
            }
        })
        .then(selections => {
            // Handle the retrieved selections, e.g., display them on the page
            console.log('All selections:', selections);
            // Update the selection list UI or perform any other necessary operations
        })
        .catch(error => {
            console.error('Error retrieving selections:', error);
        });
};

// Build Get All Selections REST API
function getAllSelections() {
    fetch('http://localhost:9090/Selection')
        .then(response => response.json())
        .then(selections => {

            SelectionList.innerHTML = "";

            selections.forEach((SelectionModel) => {
                const SelectionElement = document.createElement("div");
                SelectionElement.innerHTML = `
              <h3>${SelectionModel.name}</h3>
              <h3>${SelectionModel.number}</h3>
              <h3>${SelectionModel.email}</h3>
              <button onclick="deleteSelection('${SelectionModel.id}')">Delete</button>
            `;

                SelectionList.appendChild(SelectionElement);
            });

            console.log('All selections:', selections);
            // Handle the retrieved selections, e.g., display them on the page
        })
        .catch(error => {
            console.error('Error retrieving selections:', error);
        });
}

const showMessage = (message, isError = false) => {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.classList.remove("error");
    if (isError) {
        messageElement.classList.add("error");
    }
};

// Function to delete an about us entry
const deleteSelection = (selectionId) => {
    fetch(`http://localhost:9090/Selection/${selectionId}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.ok) {
                showMessage("About Us Selection deleted successfully");
                fetchSelectionList();
            } else {
                throw new Error("Error deleting selection entry");
            }
        })
        .catch((error) => {
            console.error("Error deleting selection entry:", error);
            showMessage("Error deleting selection entry", true);
        });
};

getAllSelections();