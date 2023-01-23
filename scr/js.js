///current time and day
let now = new Date();
let time = document.querySelector("#current-time-day");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hours = now.getHours();
let minutes = now.getMinutes();
let day = days[now.getDay()];
let date = now.getDate();
let year = now.getFullYear();
let months =["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
let month = months[now.getMonth()];
let curdate = document.querySelector("#current-date");
curdate.innerHTML = `${date}/${month}/${year}`;
time.innerHTML = `${day} ${hours}:${minutes}`;
function city(but){
    but.preventDefault();
    let search= document.querySelector("#search-city-name");
    let h1 =document.querySelector("h1");
    h1.innerHTML = `${search.value}`;
    searchCity(search.value);
}
let form = document.querySelector("#search-city");
form.addEventListener("click", city);
function searchCity(city) {
    let apiKey = "74f9e705863006708a276306e7966f95";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showTemperature);
  }
  
  function showTemperature(response) {
    let cityName = document.querySelector("h1");
    cityName.innerHTML = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    let mainTemp = document.querySelector("#current-temp");
    mainTemp.innerHTML = `${temperature}`;
   }