function PollutionView(dom) {
  return (state) => {
    if (state.currentView === 'pollution') {
      dom.pollutionContainer.classList.remove('hide');
    } else {
      dom.pollutionContainer.classList.add('hide');
    }

    if (!state.pollutionData) {
      return;
    }

    const { list } = state.pollutionData;
    const [result] = list;
    const aqi = result.main.aqi;
    dom.pollutionContainer.classList.add('center');

    switch (aqi) {
      case 1:
        dom.pollutionContainer.textContent = `Aqi: ${aqi} Good`;
        dom.pollutionContainer.style.color = 'green';
        break;
      case 2:
        dom.pollutionContainer.textContent = `Aqi: ${aqi} Fair`;
        dom.pollutionContainer.style.color = 'yellow';
        break;
      case 3:
        dom.pollutionContainer.textContent = `Aqi: ${aqi} Moderate`;
        dom.pollutionContainer.style.color = 'orange';
        break;
      case 4:
        dom.pollutionContainer.textContent = `Aqi: ${aqi} Poor`;
        dom.pollutionContainer.style.color = 'red';
        break;
      default:
        dom.pollutionContainer.textContent = `Aqi: ${aqi} Very Poor`;
        dom.pollutionContainer.style.color = 'purple';
    }
    for (const [key, value] of Object.entries(result.components)) {
      const p = document.createElement('p');
      p.style.padding = '10px';
      p.textContent = `${key}: ${value}`;
      dom.pollutionContainer.appendChild(p);
    }
  };
}

export default PollutionView;
