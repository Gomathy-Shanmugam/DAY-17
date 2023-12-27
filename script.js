var res = fetch("https://restcountries.com/v2/all")
var containerDiv=document.createElement("div")
containerDiv.className="container";
res.then((data) => data.json()).then((data1) => {
  for(var i=0;i<data1.length;i++){
  if(i%3===0){
    var rowdiv=document.createElement("div");
    rowdiv.className ="row";
    containerDiv.append(rowdiv);
  }
  
var div = document.createElement ("div")
div.className="col-lg-4 col-sm-12";
div.innerHTML = `

<div class = "container">
<div class="card" style="width: 18rem; background-color : rgb(250, 227, 191)">
<h5 class="card-title">${data1[i].name}</h5>
<img src="${data1[i].flag}" class="card-img-top" alt="...">
<div class="card-body">
<p class="card-text">Capital : ${data1[i].capital}</p>
  <p class="card-text">Region : ${data1[i].region}</p>
  <p class="card-text"> Country Code : ${data1[i].alpha2Code}</p>
  <p class="card-text"> Population : ${data1[i].population}</p>
  <a href="#" class="btn btn-secondary" data-country="${data1[i].name}">Click for weather</a>
 
  
 </div> 
</div>
</div>`;
    rowdiv.append(div);   
  }
  document.body.append(containerDiv);

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains('btn-secondary')) {
    var countryName = event.target.getAttribute('data-country');
    getWeather(countryName);
  }
});

function getWeather(countryName) {
  var apiKey = "9b3abd72af5e8ee4c215adb53b59b0e5";
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      alert(
        ` Description: ${weatherData.weather[0].description}`+
         `\n Id : ${weatherData.weather[0].id}` +
        ` \n Main : ${weatherData.weather[0].main}`+
        ` \n Humidity : ${weatherData.main.humidity}`+
        `\n Pressure : ${weatherData.main.pressure}`+
        `\n  Wind Speed : ${weatherData.wind.speed}`
      )
      
    
  })
    .catch((error) => {
      console.error(`Error fetching weather for ${countryName}:`, error);
    });
}
})

