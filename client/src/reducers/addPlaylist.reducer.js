const isAddingPlaylist = (state = false, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'Add_PLAYLIST':
      return action.payload;
    default:
      return state;
  }
};

export default isAddingPlaylist;
