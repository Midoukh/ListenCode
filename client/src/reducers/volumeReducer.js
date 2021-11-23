import LocalStoring from '../services/localStorage';

const defaultVolume = new LocalStoring('volume', null).get() || 50;
const volumeReducer = (state = defaultVolume, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'CHANGE_VOLUME':
      return action.payload;
    default:
      return state;
  }
};

export default volumeReducer;
