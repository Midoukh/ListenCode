import React from 'react';
import styles from './style.css';

const KeyShortCuts = () => {
  const handleOpenClose = (e) => {
    if (e.target.hasAttribute('open')) {
      e.target.style.top = '0';
    } else {
      e.target.style.top = '40%';
    }
  };
  return (
    <details
      className={styles.Details}
      onToggle={handleOpenClose}
      data-testid="details"
    >
      <summary>ShortCuts</summary>
      <dl>
        <dt>Play/Pause:</dt>
        <dd>SpaceBar</dd>
        <dt>Next/Previous</dt>
        <dd>Right/Left arrows</dd>
      </dl>
    </details>
  );
};

export default KeyShortCuts;
