function toJSON(response) {
    return response.json();
}

function handleErrors(error) {
    console.error('Please try again problem occered!');
}

// Fetch all users from Database =================================================

function usersTemplate(data) {
    const template = `
                 <tr>
                    <td id="id${data.id}">${data.id}</td>
                    <td id="name${data.id}">${data.name}</td>
                    <td id="email${data.id}">${data.email}</td>
                    <td id="company${data.id}">${data.company}</td>
                    <td>
                        <button onclick="updateUser(${data.id})" class="btn"><i class="fas fa-user-edit text-primary h5 "></i></button>
                        <button onclick="deleteUserById(${data.id})" class="btn"><i class="fas fa-user-slash text-danger h5"></i></button>
                    </td>
                </tr>
    `;
    return template;
}

function showAllUsers(data) {

    let output = "";
    for (let i = 0; i < data.length; i++) {
        output += usersTemplate(data[i]);
    }
    document.getElementById('tableBody').innerHTML = output;


    // Render Filter List
    let companyList = [];

    for (let i = 0; i < data.length; i++) {
        companyList.push(data[i].company);

    }
    document.getElementById('')

}


fetch("http://localhost:8081/api/users")
    .then(toJSON)
    .then(showAllUsers)
    .catch(handleErrors);

// Delete user from Database =================================================

function deleteUserById(id) {
    const url = "http://localhost:8081/api/users/" + id;
    fetch(url, { method: "DELETE" })
        .then(toJSON)
        .catch(handleErrors);

    alert("User with ID: " + id + " was just deleted!");
    window.location.reload();
}


// Add new user to Database =================================================


function addNewUser() {
    const addName = document.getElementById('addName').value;
    const addEmail = document.getElementById('addEmail').value;
    const addCompany = document.getElementById('addCompany').value;

    console.log(addName);

    const obj = {
        name: addName,
        email: addEmail,
        company: addCompany
    };

    fetch("http://localhost:8081/api/users/", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(toJSON)
        .catch(handleErrors);

    alert("You have just added a new user to Database!");
    window.location.reload();

}

// Edit existing user to Database =================================================

function updateUser(id) {
    const nameId = "name" + id;
    const emailId = "email" + id;
    const companyId = "company" + id;


    const userName = document.getElementById(nameId).innerText;
    const userEmail = document.getElementById(emailId).innerText;
    const userCompany = document.getElementById(companyId).innerText;


    const user = {
        id: id,
        name: userName,
        email: userEmail,
        company: userCompany
    };

    fetch("http://localhost:8081/api/users/", {
        method: "PUT",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(toJSON)
        .catch(handleErrors);

    alert("You have just updated the user with ID: " + id);

    window.location.reload();

}


// Fetch by company =================================================

function perCompany(companyId) {
    const url = "http://localhost:8081/api/users/company/" + companyId;

    function showAllUsersPerCompany(data) {

        let output = "";
        for (let i = 0; i < data.length; i++) {
            output += usersTemplate(data[i]);
        }
        document.getElementById('tableBody').innerHTML = output;


        // Render Filter List
        let companyList = [];

        for (let i = 0; i < data.length; i++) {
            companyList.push(data[i].company);

        }
        document.getElementById('')

    }


    fetch(url)
        .then(toJSON)
        .then(showAllUsersPerCompany)
        .catch(handleErrors);
}


function showAll() {

    fetch("http://localhost:8081/api/users")
        .then(toJSON)
        .then(showAllUsers)
        .catch(handleErrors);
}