function display(val){
const table = document.getElementById("dataTable");
const house=val;
console.log(val);
  async function hlist() {
   
        const apiUrl = "https://hp-api.onrender.com/api/characters";
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          console.log(data);
          const dataRows =data.filter(function (value){
            if(value.house==val)
            return value;
          });
          console.log(dataRows);

        
          table.innerHTML=`<tr>
<th>Student Name</th>
<th>Gender</th>
<th>Ancestry</th>
<th>Actor Name</th>
<th>Patronus</th>
</tr>`;
          dataRows.forEach((value, index) => {
            const newRow = table.insertRow(); //document.createElement("tr");
            const nameCol = newRow.insertCell(); //document.createElement("td");
           const genCol = newRow.insertCell(); //document.createElement("td");
  const anCol = newRow.insertCell();
  const actCol = newRow.insertCell();
  const patronusCol = newRow.insertCell();
  nameCol.textContent = value.name;
  genCol.textContent = value.gender;
  anCol.textContent = value.ancestry;
  actCol.textContent = value.actor;
  patronusCol.textContent = value.patronus;
    table.append(newRow,nameCol,genCol,anCol,actCol,patronusCol);
   
  })}
  catch (err) {
    console.log("Error fetching Data: ", err);
  }
}

  hlist();
}