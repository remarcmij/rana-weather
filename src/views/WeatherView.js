import { changeTime } from '../utils/changeTime.js';
import { changeTempC } from '../utils/changeTempC.js';
// import { changeTempF } from '../utils/changeTempF.js';
import { changeWindSpeed } from '../utils/changeWindSpeed.js';
import { dateBuilder } from '../utils/dateBuilder.js';

function WeatherView(dom) {
  return (state) => {
    if (state.currentView === 'weather') {
      dom.weatherContainer.classList.remove('hide');
    } else {
      dom.weatherContainer.classList.add('hide');
    }

    if (!state.weatherData) {
      return;
    }

    const { main, weather, sys, dt, wind, name } = state.weatherData;
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const { sunrise, sunset } = sys;

    state.tempCelsius = changeTempC(temp);
    state.feelsLikeCelsius = changeTempC(feels_like);
    state.tempMinCelsius = changeTempC(temp_min);
    state.tempMaxCelsius = changeTempC(temp_max);
    const sunRise = changeTime(sunrise);
    const sunSet = changeTime(sunset);
    const currentTime = changeTime(dt);
    const windSpeed = changeWindSpeed(wind.speed);
    const now = new Date();
    dom.weatherContainer.classList.add('center');
    dom.weatherContainer.innerHTML = ` <button id="fahrenheit-btn">Fahrenheit</button>
                              <p>${name} ${sys.country}</p>
    <p>${dateBuilder(now)}</p>
      <p id="temp">${state.tempCelsius} °C</p>
      
      <p> ${state.main}</p>
      <p>Time: ${currentTime}</p>
      <img src = https://openweathermap.org/img/wn/${weather[0].icon}@2x.png>
      <p class="info">Humidity: ${humidity} %</p>
      <p><span id="high">H: ${
        state.tempMaxCelsius
      } °C</span><span id="low">L: ${state.tempMinCelsius} °C </span></p>
      <p id="feels-like">Feels like: ${state.feelsLikeCelsius} °C</p>
      <p><span>sunrise: ${sunRise}</span><span>sunset: ${sunSet}</span></p>
      <p class="info">Wind: ${windSpeed} km/h</p>`;

    const fahrenheitBtn = document.getElementById('fahrenheit-btn');
    fahrenheitBtn.classList.add('fahrenheit-btn');
    fahrenheitBtn.addEventListener('click', () => {
      // if (fahrenheitBtn.textContent === 'Fahrenheit') {
      //   fahrenheitBtn.textContent = 'Celsius';
      //   getTempFahrenheit();
      // } else {
      //   fahrenheitBtn.textContent = 'Fahrenheit';
      //   document.getElementById('temp').innerHTML = `${data.tempCelsius} °C`;
      //   document.getElementById(
      //     'high'
      //   ).innerHTML = `H: ${data.tempMaxCelsius} °C`;
      //   document.getElementById(
      //     'low'
      //   ).innerHTML = `L: ${data.tempMinCelsius} °C`;
      //   document.getElementById(
      //     'feels-like'
      //   ).innerHTML = `Feels like: ${data.feelsLikeCelsius} °C`;
      // }
    });
  };
}

export default WeatherView;
