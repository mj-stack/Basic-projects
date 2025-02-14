const weatherForm = document.querySelector('.weather-form');
const cityInput = document.querySelector('.city-input');
const card = document.querySelector('.weather-card');
const apiKey = "ebbbfdac4e6f9d62c31305cf10a65c8d";


weatherForm.addEventListener('submit', async event => {

  event.preventDefault();

  const city = cityInput.value;

  if(city) {

    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }

  } else {
    displayError("Please enter a city");
  }

});

async function getWeatherData(city) {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  if(!response.ok){
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {

  const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("city-name");
  tempDisplay.classList.add("city-temp");
  humidityDisplay.classList.add("city-humidity");
  descDisplay.classList.add("climate-description");
  weatherEmoji.classList.add("climate-emoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherID) {

  switch(true){
    case (weatherID >= 200 && weatherID < 300):
      return "🌩️";
    case (weatherID >= 300 && weatherID < 400):
      return "🌧️";
    case (weatherID >= 500 && weatherID < 600):
      return "⛈️";
    case (weatherID >= 600 && weatherID < 700):
      return "🌨️";
    case (weatherID >= 700 && weatherID < 800):
      return "🌫️";
    case (weatherID === 800):
      return "☀️";
    case (weatherID > 800):
      return "☁️";
    default:
      return "❓"
  }

}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("city-error");

  card.textContent = "";
  card.style.display = 'flex';
  card.appendChild(errorDisplay);
}