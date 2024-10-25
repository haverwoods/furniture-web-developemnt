function validateForm2() {
  const userForm = document.forms["users-form"];
  const firstName = userForm["firstName"].value;
  const lasttName = userForm["lastName"].value;
  const CountryRegion = userForm["CountryRegion"].value;
  const streetAddress = userForm["streetAddress"].value;
  const townCity = userForm["townCity"].value;
  const Province = userForm["Province"].value;
  const ZIPcode = userForm["ZIPcode"].value;
  const phone = userForm["phone"].value;
  const emailAddress = userForm["emailAddress"].value;
  const additionalInformation = userForm["additionalInformation"].value;

  console.log(
    firstName,
    lasttName,
    CountryRegion,
    streetAddress,
    townCity,
    Province,
    ZIPcode,
    phone,
    emailAddress,
    additionalInformation
  );
  alert(firstName);
}

function validateForm() {
  const userForm = document.forms["users-form"];
  const firstName = userForm["firstName"].value;
  const lastname = userForm["lastName"].value;
  const country = userForm["country"].value;
  const address = userForm["address"].value;
  const town = userForm["town"].value;
  const province = userForm["province"].value;
  const zipcode = userForm["zipcode"].value;
  const phone = userForm["phone"].value;
  const email = userForm["email"].value;
  const additional = userForm["additional"].value;

  userForm["firstName"].value = "";
  userForm["lastName"].value = "";
  userForm["country"].value = "";
  userForm["address"].value = "";
  userForm["town"].value = "";
  userForm["province"].value = "";
  userForm["zipcode"].value = "";
  userForm["phone"].value = "";
  userForm["email"].value = "";
  userForm["additional"].value = "";

  console.log("hello", firstName, lastname, country, address, email);

  const tr = document.createElement("tr");

  const firstNameTd = document.createElement("td");
  firstNameTd.textContent = firstName;

  const lastNameTd = document.createElement("td");
  lastNameTd.textContent = lastname;

  const countryTd = document.createElement("td");
  countryTd.textContent = country;

  const addressTd = document.createElement("td");
  addressTd.textContent = address;

  const townTd = document.createElement("td");
  townTd.textContent = town;

  const provinceTd = document.createElement("td");
  provinceTd.textContent = province;

  const zipcodeTd = document.createElement("td");
  zipcodeTd.textContent = zipcode;

  const phoneTd = document.createElement("td");
  phoneTd.textContent = phone;

  const emailTd = document.createElement("td");
  emailTd.textContent = email;

  const additionalTd = document.createElement("td");
  additionalTd.textContent = additional;

  tr.appendChild(firstNameTd);
  tr.appendChild(lastNameTd);
  tr.appendChild(countryTd);
  tr.appendChild(townTd);
  tr.appendChild(addressTd);
  tr.appendChild(provinceTd);
  tr.appendChild(zipcodeTd);
  tr.appendChild(phoneTd);
  tr.appendChild(emailTd);
  tr.appendChild(additionalTd);

  const tBody = document.getElementById("data");

  console.log(tr);

  tBody.appendChild(tr);
}
