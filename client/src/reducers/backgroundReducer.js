import LocalStoring from '../services/localStorage';

//a rducer receive the state and the action
const defaultGenre = new LocalStoring('genre', null).get() || 'lofi';
const backgroundReducer = (state = defaultGenre, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return action.payload;
    default:
      return state;
  }
};

export default backgroundReducer;
