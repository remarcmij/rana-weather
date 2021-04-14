import fetchData from '../utils/fetchData.js';

export async function fetchWeather(model, city) {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const url = `${baseUrl}?q=${city}&APPID=73506690695f236e1305cf5f9aa6fc38`;

  const state = model.getState();
  try {
    model.setState({ ...state, loading: true, error: null });
    const weatherData = await fetchData(url);
    model.setState({
      ...state,
      weatherData,
      loading: false,
      currentView: 'weather',
    });
  } catch (error) {
    model.setState({ ...state, loading: false, error, currentView: null });
  }
}

export async function fetchPollution(model, coord) {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/air_pollution';
  const url = `${baseUrl}?lat=${coord.lat}&lon=${coord.lon}&appid=73506690695f236e1305cf5f9aa6fc38`;

  const state = model.getState();
  try {
    model.setState({ ...state, loading: true, error: null });
    const pollutionData = await fetchData(url);
    model.setState({
      ...state,
      pollutionData,
      loading: false,
      currentView: 'pollution',
    });
  } catch (error) {
    model.setState({ ...state, loading: false, error, currentView: null });
  }
}

export async function fetchCovid(model, country) {
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
    type: 'region',
  });
  const countryName = regionNamesInEnglish.of(country);
  const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${countryName}`;

  const state = model.getState();
  try {
    model.setState({ ...state, loading: true, error: null });
    const covidData = await fetchData(url);
    model.setState({
      ...state,
      covidData,
      loading: false,
      currentView: 'covid',
    });
  } catch (error) {
    model.setState({ ...state, loading: false, error, currentView: null });
  }
}
