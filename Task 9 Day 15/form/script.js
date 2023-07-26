const form = document.getElementById("form");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fname = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const add = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }
  const state = document.getElementById("state").value;;
  const count= document.getElementById("country").value;

  const newRow = table.insertRow(); //document.createElement("tr");
  const fnameCol = newRow.insertCell(); //document.createElement("td");
  const lnameCol = newRow.insertCell();
  const addCol = newRow.insertCell();
  const pineCol = newRow.insertCell();
  const genderCol = newRow.insertCell(); //document.createElement("td");
  const foodCol = newRow.insertCell(); //document.createElement("td");
 const stateCol = newRow.insertCell(); //document.createElement("td")
 const countryCol = newRow.insertCell(); //document.createElement("td")
 
 table.innerHTML=`<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Address</th>
<th>Pincode</th>
<th>Gender</th>
<th>Food</th>
<th>State</th>
<th>Country</th>
</tr>`;
  fnameCol.textContent = fname;
  lnameCol.textContent = lname;
  addCol.textContent = add;
  pineCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");
  stateCol.textContent=state;
  countryCol.textContent=count;
  table.append(newRow,fnameCol,lnameCol,addCol,pineCol,genderCol,foodCol,stateCol,countryCol)
  form.reset()
  
});