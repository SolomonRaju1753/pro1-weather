const apiKey = "2c392ed320b8d747339650fd8375eefd";  
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
  const response = await fetch(apiUrl +city+`&appid=${apiKey}`);
  var data  = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src = "images/clouds.png"
    document.body.style.backgroundColor = "silver";
  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src = "images/clear.png"
    document.body.style.backgroundColor = "grey";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src = "images/rain.png"
    document.body.style.backgroundColor = "pink";
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src = "images/drizzle.png"
    document.body.style.backgroundColor = "grey";
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src = "images/mist.png"
    document.body.style.backgroundColor = "black";
  }

}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
});