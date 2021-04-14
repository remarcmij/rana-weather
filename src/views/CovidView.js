function CovidView(dom) {
  return (state) => {
    if (state.currentView === 'covid') {
      dom.covidContainer.classList.remove('hide');
    } else {
      dom.covidContainer.classList.add('hide');
    }

    if (!state.covidData) {
      return;
    }

    const { All } = state.covidData;
    const {
      country,
      confirmed,
      deaths,
      location,
      population,
      recovered,
      capital_city,
    } = All;
    dom.covidContainer.classList.add('center');
    dom.covidContainer.innerHTML = `
      <p class="corona"><span>Showing information for: </span> <br>${country}</p>
      <p class="corona">Capital-city: ${capital_city}</p>
        <p class="corona">Population: ${population}</p>
        <p class="corona">Location: ${location}</p>
        <p class="corona">Confirmed: ${confirmed}</p>
        <p class="corona">Deaths: ${deaths}</p>
        <p class="corona">Recovered: ${recovered}`;
  };
}

export default CovidView;
