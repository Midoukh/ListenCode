import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleChangeCurrentBackground,
  handleGetCurrentSong,
  handleIsSongFavorite,
  setInfoMenuPos,
  handleIframeLoading,
} from '../../../actions';
import RadioGenres from './radio';
import noise from '../../../assets/static-noise-shot.wav';

import { handleCheckingIfSongIsFav } from '../../../Utility/handleCheckingIfSongIsFav';
import LocalStoring from '../../../services/localStorage';
import { useAlert } from 'react-alert';
import { handleChangeIframeSrc } from '../../../Utility/changeIframeSrc';

const Genre = ({ customStyle }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { currentSong, isPlayingFromFavs, songs } = useSelector(
    (state) => state
  );
  const [noiseAudio] = useState(new Audio(noise));

  const handleChangeBG = (genre) => {
    //const genre = e.target.value;
    if (isPlayingFromFavs) {
      //this function return a boolean
      if (!hanndleCheckingIfThereIsAnySongsInGenre(genre)) {
        return;
      }
    }
    dispatch(
      handleIframeLoading({
        loading: true,
        direction: `${genre} Genre`,
      })
    );
    dispatch(handleChangeCurrentBackground(genre));
    dispatch(handleGetCurrentSong(songs[genre][0]));
    noiseAudio.play();

    handleChangeIframeSrc(songs[genre][0].youtubeId);

    document.getElementsByTagName('iframe')[0].addEventListener('load', (e) => {
      dispatch(
        handleIframeLoading({
          loading: false,
          direction: `${genre} Genre`,
        })
      );
    });
    handleCheckingIfSongIsFav(currentSong, dispatch, handleIsSongFavorite);

    //persiste the genre to local Storage
    new LocalStoring('genre', genre).set();

    setTimeout(() => {
      dispatch(setInfoMenuPos('hidden'));
    }, 200);
  };

  //create a function that check if the genre has songs in it when we are playing from
  //localStorage
  //if it have continue
  //else show a message to the user that there's no song in this genre in your favorite

  const hanndleCheckingIfThereIsAnySongsInGenre = (genre) => {
    if (!songs[genre].length) {
      alert.show("there's no playlist of this genre in your favorite 😲", {
        type: 'error',
      });
      return false;
    }
    return true;
  };

  return (
    <RadioGenres handleChangeBG={handleChangeBG} customStyle={customStyle} />
  );
};

export default Genre;
