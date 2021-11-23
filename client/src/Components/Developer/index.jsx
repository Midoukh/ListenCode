import React from 'react';
import styles from './style.css';
import devPhoto from '../../assets/developer.jpg';

const Developer = () => {
  return (
    <a
      href="https://github.com/Midoukh"
      target="_blank"
      rel="noreferrer"
      className={styles.Wrapper}
    >
      <div className={styles.Flexer}>
        <img src={devPhoto} alt="developer" />
        <h3>@ahmedkhelili</h3>
      </div>
    </a>
  );
};
export default Developer;
