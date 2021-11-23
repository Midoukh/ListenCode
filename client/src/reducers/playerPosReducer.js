const playerPosReducer = (state = 'normal', action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'PLAYER_POSITION':
      return action.payload;
    default:
      return state;
  }
};

export default playerPosReducer;
