import React from 'react';
import styles from './style.css';

const Modal = ({ children }) => {
  return <section className={styles.Modal}>{children}</section>;
};

export default Modal;
