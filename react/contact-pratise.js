// Define the contact object
var contact = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
};

// Convert the contact object to a JSON string
var contactJSON = JSON.stringify(contact);

// Store the JSON string in localStorage under the key "contact"
localStorage.setItem("contact", contactJSON);

// Retrieve the contact object from localStorage
var storedContactJSON = localStorage.getItem("contact");

// Convert the JSON string back to a JavaScript object
var storedContact = JSON.parse(storedContactJSON);

// Access the properties of the retrieved contact object
console.log("Name: " + storedContact.name);
console.log("Email: " + storedContact.email);
console.log("Phone: " + storedContact.phone);

