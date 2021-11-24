import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackGround from '../BackGround/BackGround';
import Player from '../../Components/Player/Player';
import styles from './Layout.css';
import { getAllSongs } from '../../data/songsScript';
import ErrorBoundary from '../../HOC/ErrorBoundary';

import { handleGetAllSongs, setInfoMenuPos } from '../../actions';

const Layout = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state);

  const handleCheckWindowWidth = () => {
    console.log('This function is functing with me');
    if (window.innerWidth < 800) {
      dispatch(setInfoMenuPos('hidden'));
      console.log('Small screen');
    } else {
      dispatch(setInfoMenuPos('normal'));
      console.log('normal screen');
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
          <ErrorBoundary>
            <Player />
          </ErrorBoundary>
        </>
      )}
    </main>
  );
};

export default Layout;
