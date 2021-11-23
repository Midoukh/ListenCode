import React from 'react';
import styles from './play.css';
import playButton from '../../../../assets/play.svg';
const Play = ({ play }) => {
  return (
    <div className={styles.play} onClick={play}>
      <img src={playButton} alt="Play button" />
    </div>
  );
};

export default Play;
