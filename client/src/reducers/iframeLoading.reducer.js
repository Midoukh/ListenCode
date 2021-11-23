const defaultState = {
  loading: false,
  direction: 'next',
};
const iframeLoadingReducer = (state = defaultState, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'IFRAME_LOADING':
      return action.payload;
    default:
      return state;
  }
};

export default iframeLoadingReducer;
