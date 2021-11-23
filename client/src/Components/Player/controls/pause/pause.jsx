import React from 'react';
import styles from './pause.css';
const Pause = ({ pause }) => {
  return (
    <div className={styles.pause} onClick={pause}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Pause;
