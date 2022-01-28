import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Toggle = ({ handleAddCurrentSongToFavorites }) => {
  const { isFavorite } = useSelector((state) => state);

  const toggleRef = useRef();

  const handleSwitch = (e) => {
    handleAddCurrentSongToFavorites(e);
  };
  const additionStyles = {
    position: 'absolute',
    left: '35%',
    top: '25%',
  };
  useEffect(() => {
    toggleRef.current.checked = isFavorite;
  });
  return (
    <div className="mt-heart" style={additionStyles}>
      <input
        id="ujyldvzw.1.1.6"
        type="checkbox"
        onClick={handleSwitch}
        ref={toggleRef}
      />
      <label htmlFor="ujyldvzw.1.1.6"></label>
    </div>
  );
};
export default Toggle;
