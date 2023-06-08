var weather = document.getElementById("weather");
const forecastTable = document.querySelector('#forecast tbody');
// document.getElementById("inputLatitude").value = null;
// document.getElementById("inputLongitude").value = null;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
 document.getElementById("inputLatitude").value = position.coords.latitude.toFixed(4);
 document.getElementById("inputLongitude").value= position.coords.longitude.toFixed(4);
 console.log(position.coords.latitude);
 console.log(position.coords.longitude);
 console.log(getCoordsLink(position.coords.latitude, position.coords.longitude))
 getForecastLink(getCoordsLink(position.coords.latitude, position.coords.longitude))
 .then(function(forecastLink) {
   console.log(forecastLink);
  //  $("#forecast tbodys").empty();
   getTodaysForecast(forecastLink);
 })
 .catch(function(error) {
   console.error(error);
 });
}

function getCoordsLink(lat, long) {
  weather.innerHTML = `<a href=https://bing.com/maps/default.aspx?cp=${lat}~${long}>Location</a>`
  return `https://api.weather.gov/points/${lat},${long}`;
}

function getForecastLink(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const forecastLink = data.properties.forecast;
        while (forecastTable.rows.length > 1) {
          forecastTable.deleteRow(1);
        }
        resolve(forecastLink);
      })
      .catch(error => {
        reject(error);
      });
  });
}
function getTodaysForecast(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const periods = data.properties.periods;
    const forecastTable = document.querySelector('#forecast tbody');
    for (let i = 0; i < periods.length; i += 2) {
      const date = new Date(periods[i].startTime).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      const dayTemp = `${periods[i].temperature}°${periods[i].temperatureUnit}`;
      const nightTemp = `${periods[i + 1].temperature}°${periods[i + 1].temperatureUnit}`;
      const row = forecastTable.insertRow();
      const dateCell = row.insertCell();
      const dayTempCell = row.insertCell();
      const nightTempCell = row.insertCell();
      dateCell.innerHTML = date;
      dayTempCell.innerHTML = dayTemp;
      nightTempCell.innerHTML = nightTemp;
    }
  })
  .catch(error => console.log(error));
}

function forecastByInput() {
  const lat = document.getElementById("inputLatitude").value;
  const long = document.getElementById("inputLongitude").value;
  console.log(lat);
  console.log(long);
  getForecastLink(getCoordsLink(lat, long))
  .then(function(forecastLink) {
    console.log(forecastLink);
    // $("#forecast tr").remove();
    getTodaysForecast(forecastLink);
  })
  .catch(function(error) {
    console.error(error);
  });
}