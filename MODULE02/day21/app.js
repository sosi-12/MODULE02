const form = document.querySelector("#signup");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const error = document.querySelector("#error");
const count = document.querySelector("#count");

const phonePattern = /^(?:\+251|0)9\d{8}$/;


function getUsers() {
    const saved = localStorage.getItem("users");

    if (saved) {
        return JSON.parse(saved);
    }

    return [];
}


function showCount() {
    const users = getUsers();

    count.textContent = `Signed-up users: ${users.length}`;
}


form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();


    if (name.length < 2) {
        error.textContent = "Name must be at least 2 characters.";
        return;
    }


    if (!phonePattern.test(phone)) {
        error.textContent = "Enter a valid Ethiopian phone number.";
        return;
    }


    const user = {
        name: name,
        phone: phone
    };


    const users = getUsers();

    users.push(user);


    localStorage.setItem("users", JSON.stringify(users));


    error.textContent = "Signup successful.";

    form.reset();

    showCount();
});


showCount();