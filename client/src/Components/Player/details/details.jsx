import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setInfoMenuPos } from '../../../actions';
import styles from './details.css';
import {
  lofi,
  metal,
  techno,
  war,
  disk,
  closeIcon,
  fonts,
  colors,
} from './constants';

const icons = {
  lofi,
  metal,
  techno,
  war,
};

const Details = ({ style, details }) => {
  const dispatch = useDispatch();
  const { infoMenuPosition } = useSelector((state) => state);

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
