import { fetchWeather } from '../model/Fetcher.js';

function SearchController(dom, model) {
  dom.search.addEventListener('search', () => {
    if (dom.search.value.length !== 0) {
      fetchWeather(model, dom.search.value);
    }
  });
}

export default SearchController;
