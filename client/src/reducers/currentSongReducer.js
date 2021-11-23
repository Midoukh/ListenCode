const currentSongReducer = (state = null, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'GET_CURRENT_SONG':
      return action.payload;
    default:
      return state;
  }
};

export default currentSongReducer;
