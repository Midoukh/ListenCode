import LocalStoring from '../services/localStorage';

const favs = JSON.parse(new LocalStoring('favorites').get());
const currentSongReducer = (state = favs['lofi'][0], action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'GET_CURRENT_SONG':
    case 'Add_PLAYLIST':
      return action.payload;
    default:
      return state;
  }
};

export default currentSongReducer;
