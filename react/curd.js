// Define the contact object
var contact1 = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
  };
  
  var contact2 = {
    id: 2,
    name: "Vis Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
  };
  
  
  var contact3 = {
    id: 3,
    name: "par Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
  };
  
  
  var contacts = [contact1, contact2, contact3]
  
  
  localStorage.setItem("contacts", JSON.stringify(contacts));
  
  /* var contactsFromLocalStorage = localStorage.getItem("myContacts"); */
  
  // Convert the JSON string back to a JavaScript object
  var originalContacts = JSON.parse(localStorage.getItem("contacts"));
  
  /* var updateContacts = [];
  
  for(var i=0;i<originalContacts.length;i++){
    console.log(originalContacts[i]);
    if( originalContacts[i].id == 2){
      originalContacts[i].name = 'Narayana'
      originalContacts[i].email = 'abc@gmail.com'
    }
    if(originalContacts[i].id != 3){
     updateContacts.push(originalContacts[i]);
    }
  } */
  
  
  function updateContact(contactId, contactName, contactEmail) {
    var updateContacts = [];
  
    for (var i = 0; i < originalContacts.length; i++) {
      if (originalContacts[i].id == contactId) {
        originalContacts[i].name = contactName;
        originalContacts[i].email = contactEmail;
      }
      updateContacts.push(originalContacts[i]);
    }
  
    localStorage.setItem("contacts", JSON.stringify(updateContacts));
  }
  
  /* updateContact(1, 'viswareddy', 'abc@email.com');
  updateContact(3, 'parmesh', 'paougla@email.com') */
  
  function deleteContact(id) {
   var originalContacts = JSON.parse(localStorage.getItem("contacts"));
   console.log(originalContacts)
  
    var remainingContacts = []
    for (var i = 0; i < originalContacts.length; i++) {
      
      if (originalContacts[i].id != id) {
        remainingContacts.push(originalContacts[i]);
      }
    }
    console.log(remainingContacts)
    localStorage.setItem("contacts", JSON.stringify(remainingContacts));
  
  }
  
  deleteContact(100);
   
  
  function addContact(id, name, email, phone) {
    var contact = {
      id: id,
      name: name,
      email: email,
      phone: phone,
    };
    originalContacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(originalContacts));
  }
  
  
  /* 
  addContact(100, 'rajamma', 'raja@gmail.com', 7676545455);
  addContact(101, 'jamal', 'raja@gmail.com', 7676545455); */
  