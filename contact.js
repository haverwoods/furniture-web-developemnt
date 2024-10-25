let updateElement=null;

function validateForm2() {
  const userForm2 = document.forms["users-Form2"];
  const yourName = userForm2["Name"].value;
  const emailAddress = userForm2["emailAddress"].value;
  const Subject = userForm2["Subject"].value;
  const Message = userForm2["Message"].value;
  console.log(yourName, emailAddress, Subject, Message);

  alert(emailAddress);
}

function validateForm() {
  const userForm = document.forms["users-form"];
  const yourName = userForm["yourname"].value;
  const emailAddress = userForm["emailaddress"].value;
  const subject = userForm["subject"].value;
  const message = userForm["message"].value;

  userForm["yourname"].value= ""
  userForm["emailaddress"].value=""
  userForm["subject"].value=""
  userForm["message"].value= ""

  console.log("hello", yourName, emailAddress, subject, message);

  const tr = document.createElement("tr");

  const firstNameTd = document.createElement("td");
  firstNameTd.textContent = yourName;

  const lastNameTd = document.createElement("td");
  lastNameTd.textContent = emailAddress;

  const addressTd = document.createElement("td");
  addressTd.textContent = subject;

  const emailTd = document.createElement("td");
  emailTd.textContent = message;

  tr.appendChild(firstNameTd);
  tr.appendChild(lastNameTd);

  tr.appendChild(addressTd);
  tr.appendChild(emailTd);

  const tBody = document.getElementById("data");

  console.log(tr);

  tBody.appendChild(tr);

  if(updateElement){
    updateElement.remove();
    updateElement=null;
}
}
