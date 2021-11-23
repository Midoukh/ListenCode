import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalStoring from '../../../../services/localStorage';

import { handleChangePlayerVolume } from '../../../../actions';

import './style.css';

const VolumeRange = ({ handleChangeVolume }) => {
  const dispatch = useDispatch();
  const glbVolume = useSelector((state) => state.volume);
  const [volume, setVolume] = useState(glbVolume || 50);
  const handleOnChange = (e) => {
    setVolume((prev) => e.target.value);
    new LocalStoring('volume', volume).set();
    dispatch(handleChangePlayerVolume(volume));
    handleChangeVolume(e.target.value);
  };
  useEffect(() => {});
  return (
    <div>
      <input
        id="volume-changer"
        type="range"
        min="0"
        max="100"
        value={glbVolume}
        class="range blue"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default VolumeRange;
