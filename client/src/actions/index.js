export const handleChangeCurrentBackground = (payload) => {
  return {
    type: 'CHANGE_BACKGROUND',
    payload,
  };
};
export const handleGetCurrentSong = (payload) => {
  return {
    type: 'GET_CURRENT_SONG',
    payload,
  };
};
export const handleAddAPlaylist = (payload) => {
  return {
    type: 'Add_PLAYLIST',
    payload,
  };
};
export const setFilter = (payload) => {
  return {
    type: 'SET_FILTER',
    payload,
  };
};
export const handleGetAllSongs = (payload) => {
  return {
    type: 'GET_ALL_SONGS',
    payload,
  };
};
export const setInfoMenuPos = (payload) => {
  return {
    type: 'SET_INFO_MENU',
    payload,
  };
};
export const handleIsSongFavorite = (payload) => {
  return {
    type: 'IS_FAVORITE',
    payload,
  };
};
export const handleMutePlayer = (payload) => {
  return {
    type: 'MUTE',
    payload,
  };
};
export const setPlayerPosition = (payload) => {
  return {
    type: 'PLAYER_POSITION',
    payload,
  };
};
export const isPlayingFromFavsAction = (payload) => {
  return {
    type: 'PLAY_FROM_FAVS',
    payload,
  };
};
export const handleChangePlayerVolume = (payload) => {
  return {
    type: 'CHANGE_VOLUME',
    payload,
  };
};
export const handleIframeLoading = (payload) => {
  return {
    type: 'IFRAME_LOADING',
    payload,
  };
};
