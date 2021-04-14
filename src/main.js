import getDOM from './utils/getDOM.js';
import Model from './model/Model.js';
import LoggerView from './views/LoggerView.js';
import WeatherView from './views/WeatherView.js';
import PollutionView from './views/PollutionView.js';
import CovidView from './views/CovidView.js';
import SearchController from './controllers/SearchController.js';
import ButtonView from './views/ButtonView.js';
import ViewButtonsController from './controllers/ViewButtonsController.js';
import ErrorView from './views/ErrorView.js';

async function main() {
  const dom = getDOM();

  const model = Model();

  model.subscribe(LoggerView());
  model.subscribe(WeatherView(dom));
  model.subscribe(PollutionView(dom));
  model.subscribe(CovidView(dom));
  model.subscribe(ButtonView(dom));
  model.subscribe(ErrorView(dom, model));

  SearchController(dom, model);
  ViewButtonsController(dom, model);
}

window.addEventListener('load', main);
