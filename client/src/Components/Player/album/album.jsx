import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

import { handleIsSongFavorite, setPlayerPosition } from '../../../actions';

import styles from './album.css';
import metalAlbum from '../../../assets/metal.jpg';
import technoAlbum from '../../../assets/techno.jpg';
import lofiAlbum from '../../../assets/lofi.jpg';
import warAlbum from '../../../assets/war.jpg';
import minimizeIcon from '../../../assets/minimize.png';
import ToggleButton from '../../UI/toggleButton';
import LocalStoring from '../../../services/localStorage';
import { handleCheckingIfSongIsFav } from '../../../Utility/handleCheckingIfSongIsFav';
import KeyShortCuts from '../../KeyShortCuts';

const Album = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [showSwitch, setShowSwitch] = useState(false);
  const [favorites] = useState(
    JSON.parse(new LocalStoring('favorites', null).get()) || {
      lofi: [],
      metal: [],
      techno: [],
      war: [],
    }
  );
  const { genre, currentSong, playerPosition } = useSelector((state) => state);

  const albums = {
    lofi: lofiAlbum,
    war: warAlbum,
    techno: technoAlbum,
    metal: metalAlbum,
  };
  const handleShowToggleSwitch = () => {
    setShowSwitch((prev) => true);
  };
  const handleHideToggleSwitch = () => {
    setShowSwitch((prev) => false);
  };
  const handleAddCurrentSongToFavorites = (e) => {
    //get the favorites array from localStorage if it exist
    const isChecked = e.target.checked;
    const { genre } = currentSong;
    if (isChecked) {
      //create a new array and spread the old values on it
      //push the current song in it

      const favObj = { ...favorites };
      favObj[genre].push(currentSong);

      //favorite list should be exactly like the songs object
      //const Favorites = {
      //lofi:[],
      //metal: [],
      //techno: [],
      //war: []
      //}

      //update the localStorage
      new LocalStoring('favorites', JSON.stringify(favObj)).set();
      dispatch(handleIsSongFavorite(true));
      //show alert to the user
      alert.show('Song Added to Your Favorites!', {
        type: 'success',
      });
    } else if (!isChecked || !e.target.getAttribute('checked')) {
      handleRemoveSongFromFavorites();
    }
  };

  const handleRemoveSongFromFavorites = () => {
    console.log('Now removing');
    const { id: currentSongId, genre } = currentSong;

    const previousFavorites = { ...favorites };

    for (let key in previousFavorites) {
      console.log(key);
      if (key === genre) {
        console.log('Found what I want to remove');

        const updatedArr = previousFavorites[key].filter(
          (fav) => fav.id !== currentSongId
        );

        previousFavorites[key] = updatedArr;
      }
    }
    console.log(previousFavorites);

    new LocalStoring('favorites', JSON.stringify(previousFavorites)).set();
    dispatch(handleIsSongFavorite(false));

    alert.show('Song Removed From Your Favorites!', {
      type: 'info',
    });
  };

  const handleSetPlayerPosition = () => {
    console.log('Clicking the minimize');
    //1) check for the current player position and set it to the oposite
    if (playerPosition === 'normal') {
      console.log('It is true');
      dispatch(setPlayerPosition('hidden'));
    } else {
      dispatch(setPlayerPosition('normal'));
    }
  };

  useEffect(() => {
    handleCheckingIfSongIsFav(currentSong, dispatch, handleIsSongFavorite);
  }, [genre, currentSong]);
  return (
    <div
      className={styles.Album}
      style={{
        transform:
          playerPosition === 'hidden'
            ? 'translateY(28.2vh)'
            : 'translateY(0vh)',
      }}
    >
      <div className={styles.cadre}>
        <div
          className={styles.Filter}
          onMouseEnter={handleShowToggleSwitch}
          onMouseLeave={handleHideToggleSwitch}
          style={{
            opacity: showSwitch ? '1' : '0',
          }}
        >
          {currentSong && (
            <ToggleButton
              handleAddCurrentSongToFavorites={handleAddCurrentSongToFavorites}
            />
          )}
        </div>

        <img
          className={styles.AlbumPic}
          src={albums[genre]}
          alt="Album music"
        />
      </div>
      <KeyShortCuts />
      <img
        src={minimizeIcon}
        alt="minimize"
        className={styles.Minimize}
        onClick={handleSetPlayerPosition}
        style={{
          transform:
            playerPosition === 'hidden' ? 'rotateZ(180deg)' : 'rotateZ(0)',
        }}
      />
    </div>
  );
};

export default Album;
