import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setInfoMenuPos } from '../../../actions';

import styles from './details.css';

import lofi from '../../../assets/coffee.png';
import metal from '../../../assets/metal.png';
import techno from '../../../assets/techno.png';
import war from '../../../assets/war.png';
import disk from '../../../assets/disk.png';
import closeIcon from '../../../assets/close.png';

const icons = {
  lofi,
  metal,
  techno,
  war,
};
const fonts = {
  lofi: 'Pacifico',
  metal: "'Fira Sans', sans-serif",
  techno: "'Share Tech Mono', monospace",
  war: "'Warnes', cursive",
};
const colors = {
  lofi: '#c55e41',
  metal: '#5b2c50',
  techno: '#4b9ac5',
  war: '#947f26',
};

const Details = ({ style, details }) => {
  const dispatch = useDispatch();
  const { infoMenuPosition, currentSong } = useSelector((state) => state);

  //this function get called only on smaller screens
  const handleHideDetailsMobile = () => {
    dispatch(setInfoMenuPos('hidden'));
  };

  return (
    <div
      className={styles.details}
      style={
        style && {
          ...style,
        }
      }
    >
      {infoMenuPosition === 'mobile' && (
        <img
          onClick={handleHideDetailsMobile}
          className={styles.Close}
          src={closeIcon}
          alt="close"
        />
      )}
      <h1>{details && details.name}</h1>
      <div className={styles.IconWrapper}>
        <img
          src={details && icons[details.genre]}
          alt={details && details.genre}
        />
        <h4
          style={{
            fontFamily: details && fonts[details.genre],
            color: details && colors[details.genre],
          }}
        >
          {details && details.genre}
        </h4>
      </div>
      <div className={styles.Disk}>
        <img
          className={styles.DiskImg}
          src={(details && details.thumbnail) || disk}
          alt="disk"
        />
      </div>
    </div>
  );
};
Details.propTypes = {
  details: PropTypes.object,
  style: PropTypes.object,
};

export default Details;
