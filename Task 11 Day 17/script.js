const apiUrl = "https://restcountries.com/v3.1/all";
const obj = document.getElementById("card");

fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
      
    }
  })
  .then((val) => {
    console.log(val);
    for (var i = 0; i < 3; i++) {

      obj.innerHTML=`<div class="card">
      <div class="card-header"><p class="card-text">${val[i].name.common}</p></div>
    <div class="card-body">
     <div class="col-lg-4" id="one"> 
<img src="${val[i].flags.png}"></img>
      </div>
    <div class="col-sm-12" id="one-t">
    <div>Capital : ${val[i].capital}</div>
    <div>Region : ${val[i].region}</div>
    <div>Lat & Long : ${val[i].latlng}</div>
    <div>Official Name : ${val[i].name.official}</div>
    <div>Country Codes : ${val[i].cioc}</div>
    <div><button class="btn btn-primary"><a href="https://api.openweathermap.org/data/2.5/weather?lat=${val[i].latlng[0]}&lon=${val[i].latlng[1]}&appid=37ba9824a231c697643e4a57ef092cf6">Click for Weather</a></button></div>
    
    </div>
    </div>
  </div><div class="card">
  <div class="card-header"><p class="card-text">${val[i+1].name.common}</p></div>
<div class="card-body">
 <div class="col-lg-4" id="one"> 
<img src="${val[i+1].flags.png}"></img>
  </div>
<div class="col-sm-12" id="one-t">
<div>Capital : ${val[i+1].capital}</div>
<div>Region : ${val[i+1].region}</div>
<div>Lat & Long : ${val[i+1].latlng}</div>
<div>Official Name : ${val[i+1].name.official}</div>
<div>Country Codes : ${val[i+1].cioc}</div>
<div><button class="btn btn-primary" ><a href="https://api.openweathermap.org/data/2.5/weather?lat=${val[i+1].latlng[0]}&lon=${val[i+1].latlng[1]}&appid=37ba9824a231c697643e4a57ef092cf6">Click for Weather</a></button></div>

</div>
</div>
</div><div class="card">
<div class="card-header"><p class="card-text">${val[i+2].name.common}</p></div>
<div class="card-body">
<div class="col-lg-4" id="one"> 
<img src="${val[i+2].flags.png}"></img>
</div>
<div class="col-sm-12" id="one-t">
<div>Capital : ${val[i+2].capital}</div>
<div>Region : ${val[i+2].region}</div>
<div>Lat & Long : ${val[i+2].latlng}</div>
<div>Official Name : ${val[i+2].name.official}</div>
<div>Country Codes : ${val[i+2].cioc}</div>
<div><button class="btn btn-primary"><a href="https://api.openweathermap.org/data/2.5/weather?lat=${val[i+2].latlng[0]}&lon=${val[i+2].latlng[1]}&appid=37ba9824a231c697643e4a57ef092cf6">Click for Weather</a></button></div>

</div>
</div>
</div>`
  
     }})

  

  .catch((err) => {
    console.log("Error: ", err);
  });