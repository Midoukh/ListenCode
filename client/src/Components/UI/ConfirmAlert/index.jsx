import React from 'react';
import styles from './style.css';

const ConfirmAlert = ({
  handleCloseAlertConfirm,
  handlePlayFromFavs,
  isPlayingFromFavs,
}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Alert}>
        <h1>
          {isPlayingFromFavs
            ? 'You want to stop playing from your Favorites?'
            : 'You want to play from your Favorites?'}
        </h1>
        <div className={styles.Btns}>
          <button onClick={handlePlayFromFavs}>Yes</button>
          <button onClick={handleCloseAlertConfirm}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
