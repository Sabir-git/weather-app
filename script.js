const apikey = "9a537bdccf3d962c5cd0d6b867e8d95b" ;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const weatherIcon = document.querySelector(".weather-icon");

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");



async function Checkweather(city) {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);

     if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display ="none";
     }
     else{
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main = "clouds"){
             weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main ="clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main = "rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main = "drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main = "mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main = "snow"){
            weatherIcon.src = "images/snow.png"
        }
    
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display = "none";
     }
}
searchbtn.addEventListener("click" , () => {
    Checkweather(searchbox.value);
})



