import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import ReactTooltip from 'react-tooltip';

import styles from './BackGround.css';
import Modal from '../../Components/UI/Modal';
import LocalStoring from '../../services/localStorage';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { backgrounds } from '../../data/backgrounds';
import addIcon from '../../assets/add.gif';
import fullScreenIcon from '../../assets/expand.gif';
import heartIcon from '../../assets/heart.gif';
import snowIcon from '../../assets/snow.gif';
import placeholder from '../../assets/placeholder.jpg';
import { getAllSongs } from '../../data/songsScript';

import { handleGetAllSongs, isPlayingFromFavsAction } from '../../actions';

import Form from '../../Components/Form';
import ConfirmAlert from '../../Components/UI/ConfirmAlert';
import ReactMenu from '../../Components/UI/ReactMenu';
import Details from '../../Components/Player/details/details';
import Genres from '../../Components/Player/Genre/genre';
import Developer from '../../Components/Developer';

const filters = {
  '3D': 'Effect3D',
  Glitch: 'EffectGlitch',
  vhs: 'EffectVHS',
  Gb: 'EffectGB',
};

const iconStyle = {
  marginTop: '.9rem',
  height: '40px',
  width: '40px',
  cursor: 'pointer',
  opacity: '.5',
  transition: '1s all cubic-bezier(1, 0, 0, 1)',
};

const BackGround = () => {
  const alert = useAlert();
  const {
    genre: bg,
    isPlayingFromFavs,
    filter,
    currentSong,
    infoMenuPosition,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loadingBg, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentBGIndex, setCurrentBGIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [favs] = useState(
    JSON.parse(new LocalStoring('favorites', null).get())
  );

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    console.log('clicking adding image');
    setShowModal((prev) => true);
  };

  const handleAutoBgChange = () => {
    const listOfBGSLength = backgrounds[bg].length;
    if (currentBGIndex + 1 === listOfBGSLength) {
      setCurrentBGIndex(0);
    } else {
      setCurrentBGIndex((prev) => prev + 1);
    }
  };
  const handleOnMouseEanter = (e) => {
    e.target.style.opacity = 1;
  };
  const handleOnMouseLeave = (e) => {
    e.target.style.opacity = 0.5;
  };
  const handleFullScreen = () => {
    const elem = document.documentElement;
    if (!isFullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      setIsFullScreen((prev) => true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullScreen((prev) => false);
    }
  };
  const handleShowAlertConfirm = () => {
    //check if there's any songs in the favorite list
    let notEmpty = false;
    const favPlaylists = JSON.parse(new LocalStoring('favorites', null).get());
    if (favPlaylists) {
      for (let key in favPlaylists) {
        if (favPlaylists[key].length) {
          notEmpty = true;
          break;
        }
      }
    }

    if (!notEmpty) {
      alert.show('Your Favorite list is empty 🤦', {
        type: 'info',
      });
      return;
    }
    setShowConfirm((prev) => true);
  };
  const handleCloseAlertConfirm = () => {
    setShowConfirm((prev) => false);
  };
  const handleShowFilterMenu = () => {
    setShowFilterMenu((prev) => true);
  };
  const handleHideFilterMenu = () => {
    setShowFilterMenu((prev) => false);
  };
  const handlePlayFromFavs = () => {
    //if already Playing from favs
    if (isPlayingFromFavs) {
      getAllSongs(dispatch, handleGetAllSongs);
      dispatch(isPlayingFromFavsAction(false));
      handleCloseAlertConfirm();
      return;
    }
    console.log('Not playing from favs');

    //else
    //1 dispatch the songs so the data came from localStorage
    dispatch(handleGetAllSongs(favs));

    //2 dispatch isPlayingFromAction to true
    dispatch(isPlayingFromFavsAction(true));

    // close the alert
    handleCloseAlertConfirm();
  };
  const handleImageError = (e) => {
    try {
      if (e.type === 'error') {
        e.target.src = placeholder;
        setError('broken-image');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const timer1 = setTimeout(() => {
      handleAutoBgChange();
    }, 60000);
    return () => {
      clearTimeout(timer1);
    };
  }, [currentBGIndex, showModal, filter]);
  console.log(filters[filter]);
  return (
    <>
      {showModal && (
        <Modal>
          <Form handleClose={handleClose} />
        </Modal>
      )}
      {showConfirm && (
        <ConfirmAlert
          handleCloseAlertConfirm={handleCloseAlertConfirm}
          handlePlayFromFavs={handlePlayFromFavs}
          isPlayingFromFavs={isPlayingFromFavs}
        />
      )}
      {showFilterMenu && (
        <Modal>
          <ReactMenu
            items={['3D', 'Glitch', 'vhs', 'Gb']}
            handleClose={handleHideFilterMenu}
          />
        </Modal>
      )}
      {infoMenuPosition === 'mobile' && (
        <Modal>
          <Details
            details={currentSong}
            style={{
              display: 'block',
              position: 'relative',
              borderRadius: '10px',
              padding: '4rem',
            }}
          />
        </Modal>
      )}
      {infoMenuPosition === 'mobile-genres' && (
        <Modal>
          <Genres
            customStyle={{
              display: 'block',
              overflowY: 'initial',
            }}
          />
        </Modal>
      )}
      <div className={styles.bg}>
        <Developer />
        <div className={styles.SideMenu}>
          <img
            data-tip="Add A Playlist"
            src={addIcon}
            alt="add"
            style={iconStyle}
            onMouseEnter={handleOnMouseEanter}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleShow}
          />
          <img
            data-tip="FullScreen"
            src={fullScreenIcon}
            alt="full screen"
            style={{
              ...iconStyle,
              top: '3.5rem',
            }}
            onMouseEnter={handleOnMouseEanter}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleFullScreen}
          />
          <img
            data-tip="Play From Favorites"
            src={heartIcon}
            alt="heart"
            style={{
              ...iconStyle,
              top: '7rem',
            }}
            onMouseEnter={handleOnMouseEanter}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleShowAlertConfirm}
          />
          <img
            data-tip="Change BG Filter"
            src={snowIcon}
            alt="change background filter"
            style={{
              ...iconStyle,
              top: '10.5rem',
            }}
            onMouseEnter={handleOnMouseEanter}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleShowFilterMenu}
          />
          <ReactTooltip />
          <ReactTooltip />
          <ReactTooltip />
          <ReactTooltip />
        </div>

        {loadingBg ? (
          <Spinner marginLeft="50%" marginTop="20%" />
        ) : (
          <figure
            className={`${styles.Effect} ${styles[filters[filter]]}`}
            style={{
              backgroundImage: error
                ? `url('${placeholder}')`
                : `url('${backgrounds[bg][currentBGIndex]}')`,
            }}
          >
            <img
              src={backgrounds[bg][currentBGIndex]}
              alt="Back ground gif"
              onError={handleImageError}
              onLoad={(event) => setError('')}
            />
            <figcaption>BackGound</figcaption>
          </figure>
        )}
      </div>
    </>
  );
};
/**
 * <video
                className={styles.bgVideo} 
                loop muted autoPlay src={this.state.bg}></video>
 */
export default BackGround;
