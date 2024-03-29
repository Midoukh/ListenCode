const currentSongReducer = (state = null, action) => {
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
