function showMessage() {
    alert("Thanks for visiting my portfolio!");
}
function changeTitle() {
    document.getElementById("home").innerHTML =
        "Welcome to Wisdom's Awesome Portfolio!";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");

    li.innerHTML =
        taskInput.value +
        ' <button onclick="this.parentElement.style.textDecoration=\'line-through\'">Complete</button>' +
        ' <button onclick="this.parentElement.remove()">Delete</button>';

    taskList.appendChild(li);

    taskInput.value = "";
}
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        document.getElementById("errorMessage").innerHTML =
            "Please fill in all fields!";
        return false;
    }

   if (!/^\d{11}$/.test(phone)) {
    document.getElementById("errorMessage").innerHTML =
        "Phone number must be exactly 11 digits!";
    return false;
}

    alert("Form submitted successfully!");
    return true;
}