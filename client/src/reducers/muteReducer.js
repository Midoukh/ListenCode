import LocalStoring from '../services/localStorage';

const defaultMuting =
  JSON.parse(new LocalStoring('muted', null).get()) || false;
const muteReducer = (state = defaultMuting, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'MUTE':
      return action.payload;
    default:
      return state;
  }
};

export default muteReducer;
