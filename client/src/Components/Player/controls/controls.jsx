import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import BounceLoader from 'react-spinners/BounceLoader';
import Pause from './pause/pause';
import Play from './play/play';
import styles from './controls.css';
import next from '../../../assets/next.svg';
import previous from '../../../assets/previous.svg';
import repeat from '../../../assets/repeat.svg';
import VoulumeRange from './volume';
import Mute from './mute';

const Controls = ({
  isPausing,
  isLooping,
  handleLoopPlaying,
  play,
  pause,
  nextF,
  previousF,
  handleChangeVolume,
  handleMuteUnmute,
}) => {
  //destructuring global state
  const { isIframeLoading } = useSelector((state) => state);

  return (
    <main className={styles.controls}>
      <Mute
        handleMuteUnmute={handleMuteUnmute}
        handleChangeVolume={handleChangeVolume}
      />
      <VoulumeRange handleChangeVolume={handleChangeVolume} />
      {isIframeLoading.loading ? (
        <BounceLoader size={30} color="#4895b9" />
      ) : (
        <img
          className={styles.Button}
          src={previous}
          alt="Previous"
          onClick={previousF}
        />
      )}
      {isIframeLoading.loading ? (
        <BounceLoader size={45} color="#4895b9" />
      ) : !isPausing ? (
        <Play play={play} />
      ) : (
        <Pause pause={pause} />
      )}

      {isIframeLoading.loading ? (
        <BounceLoader size={30} color="#4895b9" />
      ) : (
        <img className={styles.Button} src={next} alt="Next" onClick={nextF} />
      )}
      <figure className={styles.Figure}>
        <img
          className={styles.Button}
          src={repeat}
          alt="Repeat"
          onClick={handleLoopPlaying}
        />
        <figcaption
          style={{
            color: isLooping ? '#074e07' : '#920505',
            textShadow: isLooping
              ? '2px 2px 10px #146914cb'
              : '2px 2px 10px #a72020d5',
          }}
        >
          {isLooping ? 'On' : 'OFF'}
        </figcaption>
      </figure>
    </main>
  );
};

Controls.propTypes = {
  isPausing: PropTypes.bool.isRequired,
  isLooping: PropTypes.bool.isRequired,
  handleLoopPlaying: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  nextF: PropTypes.func.isRequired,
  previousF: PropTypes.func.isRequired,
  handleChangeVolume: PropTypes.func.isRequired,
  handleMuteUnmute: PropTypes.func.isRequired,
};

export default Controls;
