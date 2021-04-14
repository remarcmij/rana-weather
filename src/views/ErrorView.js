function ErrorView(dom, model) {
  return (state) => {
    if (!state.error) {
      dom.errorContainer.textContent = '';
      return;
    }

    if (state.error.cod === 404) {
      dom.errorContainer.textContent = `Please enter the right city name`;
    } else {
      dom.errorContainer.textContent = `Please check your network`;
    }

    setTimeout(() => {
      model.setState({ ...model.getState(), error: null });
    }, 2000);
  };
}

export default ErrorView;
