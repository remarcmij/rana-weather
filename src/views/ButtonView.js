function ButtonView(dom) {
  return (state) => {
    if (state.currentView === null) {
      dom.btnContainer.classList.add('hide');
    } else {
      dom.btnContainer.classList.remove('hide');
    }
  };
}

export default ButtonView;
