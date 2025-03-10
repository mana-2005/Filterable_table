let users = [];

function addUser() {
    let inputName = document.getElementById("name").value;
    let inputAge = Number(document.getElementById("age").value);
    let inputGender = document.getElementById("gender").value;

    if (!inputName || isNaN(inputAge) || !inputGender) {
        alert("Please enter valid name, age, and gender.");
        return;
    }

    users.push({ name: inputName, age: inputAge, gender: inputGender });

    users.sort((a, b) => a.name.localeCompare(b.name));

    // Clear the existing list
    document.getElementById("userList").innerHTML = '';

    // Create and display new user data
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let userElement = document.createElement("p");
        
        userElement.style.background = "lightblue";
        userElement.style.padding = "10px";
        userElement.style.margin = "5px";

        userElement.innerHTML = "Name: " + user.name + " | Age: " + user.age + " | Gender: " + user.gender;

        document.getElementById("userList").appendChild(userElement);
    }

    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("gender").value = '';
}

function sortUsers() {
    let sortBy = document.getElementById("sort-select").value;

    users.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    renderUsers();
}

function filterUsers() {
    let filterValue = document.getElementById("filter-input").value.toLowerCase();
    
    let filteredData = users.filter(user =>
        user.name.toLowerCase().includes(filterValue) || user.gender.toLowerCase().includes(filterValue)
    );

    renderFilteredUsers(filteredData);
}

function renderFilteredUsers(filteredData) {
    document.getElementById("userList").innerHTML = ''; // Clear current list

    filteredData.forEach(user => {
        let userElement = document.createElement("p");
        userElement.style.background = "lightgreen";
        userElement.style.padding = "10px";
        userElement.style.margin = "5px";

        userElement.innerHTML = "Name: " + user.name + " | Age: " + user.age + " | Gender: " + user.gender;

        document.getElementById("userList").appendChild(userElement);
    });
}

// Function to render all users
function renderUsers() {
    document.getElementById("userList").innerHTML = ''; 

    users.forEach(user => {
        let userElement = document.createElement("p");
        userElement.style.background = "lightblue";
        userElement.style.padding = "10px";
        userElement.style.margin = "5px";

        userElement.innerHTML = "Name: " + user.name + " | Age: " + user.age + " | Gender: " + user.gender;

        document.getElementById("userList").appendChild(userElement);
    });
}
