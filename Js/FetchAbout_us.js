console.log("vi er i fetchAbout-us")

const form = document.getElementById("aboutUsForm");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname")
const phonenumber = document.getElementById("phonenumber")
const email = document.getElementById("email")
const photo = document.getElementById("photo")
//const descriptionInput = document.getElementById("description");
const aboutUsList = document.getElementById("aboutUsList");


// Function to display a message
const showMessage = (message, isError = false) => {
    const messageElement = document.createElement("p");
    messageElement.id = "message";
    messageElement.textContent = message;

    if (isError) {
        messageElement.style.color = "red";
    }

    document.body.insertBefore(messageElement, form);
};

// Function to fetch and display the about us list
const fetchAboutUsList = () => {
    fetch("http://localhost:9090/About")
        .then((response) => response.json())
        .then((data) => {
            aboutUsList.innerHTML = "";

            data.forEach((aboutUsModel) => {
                const aboutUsElement = document.createElement("div");
                aboutUsElement.innerHTML = `
              <h3>${aboutUsModel.firstname}</h3>
              <h3>${aboutUsModel.lastName}</h3>
              <h3>${aboutUsModel.phonenumber}</h3>
              <h3>${aboutUsModel.email}</h3>
              <h3>${aboutUsModel.photo}</h3>
              <button onclick="deleteAboutUs('${aboutUsModel.id}')">Delete</button>
            `;

                aboutUsList.appendChild(aboutUsElement);
            });
        })
        .catch((error) => {
            console.error("Error fetching about us list:", error);
            showMessage("Error fetching about us list", true);
        });
};

// Function to create an about us entry
const createAboutUs = (event) => {
    event.preventDefault();

    const firstname = firstname.value;
    const lastname = lastname.value;
    const phonenumber = phonenumber.value;
    const email = email.value
    const photo = photo.value


    const aboutUs = {
        firstname,
        lastname,
        phonenumber,
        email,
        photo
    };

    fetch("http://localhost:9090/About", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(aboutUs),
    })
        .then((response) => {
            if (response.ok) {
                firstname.value = "";
                lastname.value = "";
                phonenumber.value = "";
                email.value = "";
                photo.value ="";
                showMessage("About Us entry created successfully");
                fetchAboutUsList();
            } else {
                throw new Error("Error creating About Us entry");
            }
        })
        .catch((error) => {
            console.error("Error creating About Us entry:", error);
            showMessage("Error creating About Us entry", true);
        });
};

// Function to delete an about us entry
const deleteAboutUs = (aboutUsId) => {
    fetch(`http://localhost:9090/About/${id}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.ok) {
                showMessage("About Us entry deleted successfully");
                fetchAboutUsList();
            } else {
                throw new Error("Error deleting About Us entry");
            }
        })
        .catch((error) => {
            console.error("Error deleting About Us entry:", error);
            showMessage("Error deleting About Us entry", true);
        });
}

// Initial fetch to display the about us list
fetchAboutUsList();
