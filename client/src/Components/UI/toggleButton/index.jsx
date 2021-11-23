import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
const Toggle = ({ handleAddCurrentSongToFavorites }) => {
  const { currentSong, isFavorite } = useSelector((state) => state);
  const [liked, setLiked] = useState(isFavorite);
  const toggleRef = useRef();
  const handleSwitch = (e) => {
    console.log(e.target.checked);
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
    <div class="mt-heart" style={additionStyles}>
      <input
        id="ujyldvzw.1.1"
        type="checkbox"
        onClick={handleSwitch}
        ref={toggleRef}
      />
      <label for="ujyldvzw.1.1"></label>
    </div>
  );
};
export default Toggle;

/*<div className={styles.Container} id="hi">
      <div className={integratedClases.join(' ')} onClick={handleSwitch}></div>
    </div>*/
