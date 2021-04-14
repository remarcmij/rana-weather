import { fetchPollution, fetchCovid } from '../model/Fetcher.js';

function ViewButtonsController(dom, model) {
  dom.weatherBtn.addEventListener('click', () => {
    model.setState({ ...model.getState(), currentView: 'weather' });
  });

  dom.pollutionBtn.addEventListener('click', async () => {
    const { coord } = model.getState().weatherData;
    await fetchPollution(model, coord);
    model.setState({ ...model.getState(), currentView: 'pollution' });
  });

  dom.covidBtn.addEventListener('click', async () => {
    const { country } = model.getState().weatherData.sys;
    await fetchCovid(model, country);
    model.setState({ ...model.getState(), currentView: 'covid' });
  });
}

export default ViewButtonsController;
