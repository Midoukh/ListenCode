import LocalStoring from '../services/localStorage';

const favorites = JSON.parse(new LocalStoring('favorites', null).get()) || {
  lofi: [],
  metal: [],
  techno: [],
  war: [],
};
export const handleCheckingIfSongIsFav = (currentSong, dispatch, action) => {
  console.log('checking if current song is in fav list');
  console.log('The current song is', currentSong);
  if (currentSong) {
    const { id: currentSongId, genre } = currentSong;

    if (favorites) {
      const doesFavExist = favorites[genre].filter(
        (p) => p.id === currentSongId
      );
      console.log(doesFavExist);
      if (doesFavExist.length) {
        dispatch(action(true));
      } else {
        dispatch(action(false));
      }
    }
  }
};
