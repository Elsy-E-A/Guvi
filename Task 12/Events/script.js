const table = document.getElementById("dataTable");

  async function hlist() {
   
        const apiUrl = "https://www.gov.uk/bank-holidays.json";
        try {
          const response = await fetch(apiUrl);
          const dataRows = await response.json();
          console.log(dataRows);
         
          const date =Array.from(dataRows.scotland.events);
          console.log(date);

          table.innerHTML=`<tr>
<th>Division</th>
<th>Events</th>
<th>Date</th>
</tr>`;
          date.forEach((value, index) => {
            const newRow = table.insertRow(); //document.createElement("tr");
            const div = newRow.insertCell(); //document.createElement("td");
           const tit = newRow.insertCell(); //document.createElement("td");
  const dat = newRow.insertCell();
  div.textContent = dataRows.scotland.division;
  tit.textContent = value.title;
  dat.textContent = value.date;
    table.append(newRow,div,tit,dat);
   
  })}
  catch (err) {
    console.log("Error fetching Data: ", err);
  }
}

  hlist();