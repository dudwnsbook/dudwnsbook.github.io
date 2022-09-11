const API_KEY="89c4b90e68a5fb4d4affd4fdba3d7a65";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

   const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
fetch(url).then((response) => response.json()).then((data)=>{
  const weather = document.querySelector(".weather-wrap span:last-child")
    const city = document.querySelector(".weather-wrap span:first-child")
   city.innerText = `[${data.name}]`;
 weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
});

}
function onGeoError(){
  alert("error")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

