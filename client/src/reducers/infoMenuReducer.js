const setInfoMenuReducer = (state = 'normal', action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'SET_INFO_MENU':
      return action.payload;
    default:
      return state;
  }
};

export default setInfoMenuReducer;
