import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackGround from '../BackGround/BackGround';
import Player from '../../Components/Player/Player';
import styles from './Layout.css';
import { getAllSongs } from '../../data/songsScript';

import { handleGetAllSongs, setInfoMenuPos } from '../../actions';

const Layout = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state);

  const handleCheckWindowWidth = () => {
    if (window.innerWidth < 800) {
      dispatch(setInfoMenuPos('hidden'));
    } else {
      dispatch(setInfoMenuPos('normal'));
    }
  };

  useEffect(() => {
    getAllSongs(dispatch, handleGetAllSongs);
    handleCheckWindowWidth();
    window.addEventListener('resize', handleCheckWindowWidth);
    return false;
  }, []);
  return (
    <main className={styles.Layout}>
      {songs && (
        <>
          <BackGround />
          <Player />
        </>
      )}
    </main>
  );
};

export default Layout;
