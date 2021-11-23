import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classes from './progressBar.css';

const ProgressBar = ({ time, currenTime, handlePlayVideoAt }) => {
  const { isPlayingFromFavs, isIframeLoading } = useSelector((state) => state);

  const [duration, setDuration] = useState(null);
  const [parsedTime, setParsedTime] = useState('');
  const prgBarRef = useRef();
  const prgMovedRef = useRef();
  const handleParseTime = (nowTime) => {
    setParsedTime(new Date(currenTime * 1000).toISOString().substr(11, 8));
  };
  const handleUpdateProgressPercentage = () => {
    //the final width of the div is 30vw
    const durationInMilis = time * 1000;
    const currentTimeInMilis = currenTime * 1000;
    let width = 30;
    if (window.innerWidth <= 800) {
      width = 60;
    }
    const x = (currentTimeInMilis / durationInMilis) * width;

    prgBarRef.current.style.width = `${x}vw`;
  };

  useEffect(() => {
    handleParseTime(currenTime);
    handleUpdateProgressPercentage();
  }, [time, currenTime]);
  return (
    <section className={classes.Container}>
      <span className={classes.Info}>
        {isPlayingFromFavs ? '(ℹ Now playing from your Fav Playlists)' : ''}
        {isIframeLoading.loading
          ? `Playing the ${isIframeLoading.direction} Playlist...`
          : ''}
      </span>
      <h3 className={classes.Num}>{parsedTime}</h3>
      <div className={classes.Progress}>
        <div
          className={[classes.Progress2, classes.ProgressMoved].join(' ')}
          ref={prgMovedRef}
          onClick={handlePlayVideoAt}
        >
          <div className={classes.ProgressBar2} ref={prgBarRef}></div>
        </div>
      </div>
      <h3 className={classes.Num}>
        {time && new Date(time * 1000).toISOString().substr(11, 8)}
      </h3>
    </section>
  );
};

ProgressBar.propTypes = {
  time: PropTypes.number,
  currenTime: PropTypes.number,
  handlePlayVideoAt: PropTypes.func,
};

export default ProgressBar;
