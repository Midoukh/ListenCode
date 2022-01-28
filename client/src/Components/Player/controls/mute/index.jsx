import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalStoring from '../../../../services/localStorage';

import {
  handleChangePlayerVolume,
  handleMutePlayer,
} from '../../../../actions/';

const Mute = ({ handleMuteUnmute, handleChangeVolume }) => {
  const volume = useSelector((state) => state.volume);
  const [previosVolume, setPreviousVolume] = useState(volume);

  const dispatch = useDispatch();
  const [muted, setMuted] = useState(
    JSON.parse(new LocalStoring('muted').get()) || false
  );
  const muteRef = useRef();
  const handleMuteImmute = (e) => {
    setMuted((prev) => e.target.checked);

    //this function deals with YP api
    handleMuteUnmute(e.target.checked);

    //dispatch the muting action
    dispatch(handleMutePlayer(e.target.checked));

    //persiste the state
    new LocalStoring('muted', e.target.checked).set();

    //change the global volume state to o when muting
    const volumeChanger = document.getElementById('volume-changer');
    if (e.target.checked === true) {
      dispatch(handleChangePlayerVolume(0));
      handleChangeVolume(0);
      volumeChanger.setAttribute('value', 0);
    } else if (e.target.checked === false) {
      dispatch(handleChangePlayerVolume(previosVolume));
      handleChangeVolume(previosVolume);
    }
  };
  const checkedPersistance = () => {
    console.log(muteRef.current.checked);
    if (muted === true) {
      console.log('True is');
      muteRef.current.setAttribute('checked', true);

      handleMuteUnmute(true);
    }
  };
  useEffect(() => {
    checkedPersistance();
  }, []);
  return (
    <div className="mt-icon-music" style={{ fontSize: '9px' }}>
      <input
        id="ujyldvzw.1.1"
        type="checkbox"
        onChange={handleMuteImmute}
        ref={muteRef}
      />
      <label htmlFor="ujyldvzw.1.1"></label>
    </div>
  );
};

export default Mute;
