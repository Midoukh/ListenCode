import { combineReducers } from 'redux';
import isAddingPlaylist from './addPlaylist.reducer';
import backgroundReducer from './backgroundReducer';
import currentSongReducer from './currentSongReducer';
import setFilterReducer from './filterReducer';
import getAllSongsReducer from './getAllSongsReducer';
import iframeLoadingReducer from './iframeLoading.reducer';
import setInfoMenuReducer from './infoMenuReducer';
import isSongFavoriteReducer from './isSongFavoriteReducer';
import muteReducer from './muteReducer';
import playerPosReducer from './playerPosReducer';
import playFromFavs from './playingFromFavsReducer';
import volumeReducer from './volumeReducer';

const allReducers = combineReducers({
  genre: backgroundReducer,
  volume: volumeReducer,
  isMute: muteReducer,
  currentSong: currentSongReducer,
  isFavorite: isSongFavoriteReducer,
  songs: getAllSongsReducer,
  isPlayingFromFavs: playFromFavs,
  filter: setFilterReducer,
  playerPosition: playerPosReducer,
  infoMenuPosition: setInfoMenuReducer,
  isIframeLoading: iframeLoadingReducer,
  isAddingPlaylist: isAddingPlaylist,
});

export default allReducers;
