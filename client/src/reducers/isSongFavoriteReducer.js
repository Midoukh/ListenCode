const isSongFavoriteReducer = (state = false, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'IS_FAVORITE':
      return action.payload;
    default:
      return state;
  }
};

export default isSongFavoriteReducer;
