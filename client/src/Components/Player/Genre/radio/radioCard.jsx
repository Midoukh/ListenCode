import React from 'react';
import { useSelector } from 'react-redux';
const RadioCard = ({
  radioCardStyle,
  imageWrapperStyle,
  titleStyle,
  imageStyle,
  imageSrc,
  value,
  label,
  handleOnChange,
}) => {
  const genre = useSelector((state) => state.genre);
  return (
    <div
      style={radioCardStyle}
      onChange={handleOnChange}
      id={value}
      onClick={handleOnChange}
    >
      <input
        type="radio"
        name="genre"
        value={value}
        checked={genre === value}
        onChange={() => {}}
      />
      <div style={imageWrapperStyle}>
        <div
          id={value}
          style={{
            ...titleStyle,
            backgroundColor:
              genre === value ? 'transparent' : 'rgba(0,0,0, 0.85)',
            border: genre === value ? '5px solid lightblue' : 'none',
          }}
        >
          <h4
            style={{
              textShadow: '1px 2px 12px rgba(0,0,0,.9)',
            }}
          >
            {label}
          </h4>
        </div>
        <img src={imageSrc} alt={value} style={imageStyle} />
      </div>
    </div>
  );
};

export default RadioCard;
