import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircleLoader from 'react-spinners/CircleLoader';
import PropagateLoader from 'react-spinners/PropagateLoader';

import Controls from './controls/controls';
import styles from './Player.css';
import Album from './album/album';
import Details from './details/details';
import Genre from './Genre/genre';
import ProgressBar from './progressBar/progressBar';

import {
  handleGetCurrentSong,
  handleIsSongFavorite,
  setInfoMenuPos,
  handleIframeLoading,
} from '../../actions';

import { handleCheckingIfSongIsFav } from '../../Utility/handleCheckingIfSongIsFav';
import { handleChangeIframeSrc } from '../../Utility/changeIframeSrc';

import infoIcon from '../../assets/info.png';
import genreIcon from '../../assets/war.png';

const Player = () => {
  const dispatch = useDispatch();

  const {
    genre,
    volume,
    songs,
    currentSong,
    playerPosition,
    infoMenuPosition,
    isAddingPlaylist,
  } = useSelector((state) => state);

  const [isPausing, setIsPausing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(0);
  const [currentYoutubeId, setCurrentYoutubeId] = useState(
    songs[genre][currentPlaylist] && songs[genre][currentPlaylist].youtubeId
  );

  const [reachTheEnd, setReachedTheEnd] = useState(false);
  const [currenTime, setCurrenTime] = useState(null);
  const [iframePlayer, setIframePlayer] = useState(null);
  const [isLooping, setIsLooping] = useState(false);
  //const [playerTarget, setPlayerTarget] = useState(null);
  const createPlayer = () => {
    setLoading(true);
    if (!window.YT) {
      // If not, load the script asynchronously
      loadPlayerScript();
    } else {
      // If script is already there, load the video directly
      loadVideo();
    }
    //setCurrentYoutubeId(songs[genre][currentPlaylist].youtubeId);
  };
  const loadPlayerScript = () => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    // onYouTubeIframeAPIReady will load the video after the script is loaded
    window.onYouTubeIframeAPIReady = loadVideo;

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };
  /*const handleChangeIframeSrc = (id) => {
    const iframeDom = iframePlayer.getIframe();
    const newSrc = `https://www.youtube.com/embed/${id}?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1`;
    iframeDom.src = newSrc;
    handleChangeVolume(volume);
  };*/

  const loadVideo = () => {
    // the Player object is created uniquely based on the id in props
    if (!iframePlayer) {
      setIframePlayer(
        new window.YT.Player(`youtube-player-${currentYoutubeId}`, {
          videoId: currentYoutubeId,
          events: {
            onReady: onPlayerReady,
          },
        })
      );
    }
    setLoading(false);
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
    event.target.setVolume(volume);
    setIsPausing(true);
    getTimeInterval(event.target);
  };
  const play = () => {
    console.log('PLAYING');

    if (iframePlayer.playVideo) {
      setIsPausing(true);
      iframePlayer.playVideo();
    }
  };
  const pause = () => {
    console.log('PAUSING');
    if (iframePlayer.pauseVideo) {
      setIsPausing(false);
      iframePlayer.pauseVideo();
      setCurrenTime(iframePlayer.getCurrentTime());
    }
  };
  const next = () => {
    //get how many playlist in the current genre
    const iframeDom = iframePlayer.getIframe();
    dispatch(
      handleIframeLoading({
        loading: true,
        direction: 'next',
      })
    );
    iframeDom.addEventListener('load', (e) => {
      console.log('iframe Loaded');
      dispatch(
        handleIframeLoading({
          loading: false,
          direction: 'next',
        })
      );
    });
    const genreLength = songs[genre].length;

    //change its source

    if (currentPlaylist + 1 === genreLength) {
      setCurrentPlaylist(0);
      dispatch(handleGetCurrentSong(songs[genre][0]));
    } else {
      setCurrentPlaylist((prev) => prev + 1);
      dispatch(handleGetCurrentSong(songs[genre][currentPlaylist + 1]));
    }
    let id;
    if (currentPlaylist + 1 < genreLength) {
      id = songs[genre][currentPlaylist + 1].youtubeId;
      setCurrentYoutubeId(
        (prev) => songs[genre][currentPlaylist + 1].youtubeId
      );
    } else {
      id = songs[genre][0].youtubeId;
      setCurrentYoutubeId((prev) => songs[genre][0].youtubeId);
    }

    //handleChangeIframeSrc(id);
    handleChangeIframeSrc(id, iframeDom);

    handleCheckingIfSongIsFav(currentSong, dispatch, handleIsSongFavorite);
  };
  const previous = () => {
    const iframeDom = iframePlayer.getIframe();
    dispatch(
      handleIframeLoading({
        loading: true,
        direction: 'previous',
      })
    );
    iframeDom.addEventListener('load', (e) => {
      console.log('iframe Loaded');
      dispatch(
        handleIframeLoading({
          loading: false,
          direction: 'previous',
        })
      );
    });
    //example 7
    //when decreasing the index by 1 it souldn't be less then 0
    // -1 = 5
    // -1 = 4
    // -1 = 3
    // -1 = 2
    // -1 = 1
    // -1 = 0 stop
    if (currentPlaylist > 0) {
      setCurrentPlaylist((prev) => prev - 1);
      setCurrentYoutubeId(
        (prev) => songs[genre][currentPlaylist - 1].youtubeId
      );

      handleChangeIframeSrc(
        songs[genre][currentPlaylist - 1].youtubeId,
        iframeDom
      );
      dispatch(handleGetCurrentSong(songs[genre][currentPlaylist - 1]));

      handleCheckingIfSongIsFav(currentSong, dispatch, handleIsSongFavorite);
    }
  };

  //run this function each 1 second to get the current time
  let interval;
  const getTimeInterval = (player) => {
    if (player) {
      interval = setInterval(() => {
        setCurrenTime((prev) => player.getCurrentTime() + 1);
        if (player.getCurrentTime() > 6) {
          //handleAutoNextPlaylist(player.getDuration(), player.getCurrentTime());
          if (player.getDuration() - player.getCurrentTime() < 1) {
            console.log('Video ended');

            if (isLooping) {
              console.log('Yes we looping');
              setCurrenTime((prev) => 0);
              player.seekTo(0);
              player.playVideo();
            } else {
              console.log('not looping');
            }
            /*clearInterval(interval);
            return;*/
          }
        }
      }, 500);
    }
  };
  const handleChangeVolume = (value) => {
    iframePlayer.setVolume(parseInt(value));
  };
  const handleMuteUnmute = (muting) => {
    if (
      iframePlayer !== null &&
      iframePlayer !== undefined &&
      iframePlayer.mute
    ) {
      if (muting) {
        iframePlayer.mute();
      } else {
        iframePlayer.unMute();
      }
    }
  };

  const handleAutoNextPlaylist = () => {
    //1) check if the playlist ends

    if (reachTheEnd) {
      setReachedTheEnd((prev) => false);
      next();
    }
  };
  const handlePlayVideoAt = (e) => {
    //what I have?
    //1) the width in vw, 2)the duration
    //seekedTime is in seconds
    if (iframePlayer.seekTo) {
      console.log('changing the time');
      //px in vw:
      //100 * px / windowWidth
      const offsetXinVW = (e.nativeEvent.offsetX * 100) / window.innerWidth;
      let w = 30;
      if (window.innerWidth <= 800) w = 60;
      const seekedTime = (offsetXinVW / w) * iframePlayer.getDuration();
      iframePlayer.seekTo(seekedTime);
    }
  };

  const handleLoopPlaying = () => {
    setIsLooping(!isLooping);
    getTimeInterval(iframePlayer);
  };

  const handleKeysPauseAndPlay = () => {
    if (iframePlayer) {
      if (!isPausing) {
        play();
      } else {
        pause();
      }
    }
  };

  const handleKeyShortCuts = (e) => {
    console.log(e.key);
    switch (e.key) {
      case ' ':
        //if key pressed is space and it pausing
        handleKeysPauseAndPlay();
        break;
      case 'ArrowLeft':
        previous();
        break;
      case 'ArrowRight':
        next();
        break;
      default:
        break;
    }
  };

  const handleShowDetailsInMobile = () => {
    dispatch(setInfoMenuPos('mobile'));
  };

  const handleShowGenresInMobile = () => {
    dispatch(setInfoMenuPos('mobile-genres'));
  };

  useEffect(() => {
    createPlayer();

    dispatch(handleGetCurrentSong(songs[genre][currentPlaylist]));

    document.addEventListener('keyup', handleKeyShortCuts);
    return () => document.removeEventListener('keyup', handleKeyShortCuts);
  }, []);
  return (
    <>
      <Album />
      <main
        onKeyUp={handleKeyShortCuts}
        className={styles.Player}
        style={{
          transform:
            playerPosition === 'hidden'
              ? 'translateY(29vh)'
              : 'translateY(0vh)',
        }}
      >
        {infoMenuPosition === 'normal' ? (
          <Details details={currentSong} />
        ) : (
          <div className={styles.MobileIcons}>
            <img
              className={styles.InfoIcon}
              src={infoIcon}
              alt="info"
              onClick={handleShowDetailsInMobile}
            />
            <img
              src={genreIcon}
              alt="genre"
              onClick={handleShowGenresInMobile}
            />
          </div>
        )}
        {iframePlayer ? (
          <ProgressBar
            time={iframePlayer.playerInfo.duration}
            currenTime={currenTime}
            handlePlayVideoAt={handlePlayVideoAt}
          />
        ) : (
          <div className={styles.WrapperLoader}>
            <PropagateLoader size={15} color="#50a1c0" />
          </div>
        )}
        {loading ? (
          <CircleLoader size={90} loading={true} color="#ffffff" />
        ) : (
          <Controls
            isPausing={isPausing}
            isLooping={isLooping}
            play={play}
            pause={pause}
            nextF={next}
            previousF={previous}
            handleChangeVolume={handleChangeVolume}
            handleMuteUnmute={handleMuteUnmute}
            handleLoopPlaying={handleLoopPlaying}
          />
        )}
        <Genre />
        <div
          id={`youtube-player-${currentYoutubeId ? currentYoutubeId : null}`}
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
        />
      </main>
    </>
  );
};

export default Player;
