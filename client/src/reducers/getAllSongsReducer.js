const getAllSongsReducer = (state = null, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'GET_ALL_SONGS':
      return action.payload;
    default:
      return state;
  }
};

export default getAllSongsReducer;
