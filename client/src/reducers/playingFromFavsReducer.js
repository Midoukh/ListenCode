const playFromFavs = (state = false, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'PLAY_FROM_FAVS':
      return action.payload;
    default:
      return state;
  }
};

export default playFromFavs;
