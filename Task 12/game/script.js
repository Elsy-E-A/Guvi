function display(event){
  event.preventDefault();
  const table = document.getElementById("dataTable");
const val=document.getElementById("game").value;
  async function hlist() {
   
        const apiUrl = "https://isro.vercel.app/api/centres";
        try {
          const response = await fetch(apiUrl);
          const dataRows = await response.json();
          console.log(dataRows);
         
          const date =Array.from(dataRows.centres);
          console.log(date);
          const dataRow =date.filter(function (value){
            if(value.State==val)
            return value;
          });
          console.log(dataRow);


          table.innerHTML=`<tr>
          
          <th>Centre Name</th>
<th>State</th>
<th>Place</th>
</tr>`;
          dataRow.forEach((value, index) => {
            const newRow = table.insertRow(); //document.createElement("tr");
             const div = newRow.insertCell(); //document.createElement("td");
           const tit = newRow.insertCell(); //document.createElement("td");
  const dat = newRow.insertCell();
 div.textContent = value.name;
  tit.textContent = value.State;
  dat.textContent = value.Place;
    table.append(newRow,div,tit,dat);
   
  })}
  catch (err) {
    console.log("Error fetching Data: ", err);
  }
}

  hlist();
}