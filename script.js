// Function for Home page button
function showDiscount() {
    alert("Use Code: SAVE10 to get 10% off today!");
}

// Function for Products page buttons
function buyItem(itemName) {
    alert("You clicked buy on: " + itemName);
}

// Function for Contact page button
function sendMessage() {
    var name = document.getElementById("userName").value;
    if (name === "") {
        alert("Please enter your name!");
    } else {
        alert("Thank you " + name + ", your message has been sent!");
    }
}