import Observable from '../utils/Observable.js';

function Model() {
  let state = {
    weatherData: null,
    pollutionData: null,
    covidData: null,
    currentView: null,
    loading: false,
    error: null,
  };

  const observable = Observable();

  return {
    subscribe(listener) {
      observable.subscribe(listener);
    },
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      observable.notify(state);
    },
  };
}

export default Model;
