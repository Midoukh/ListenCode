import React from 'react';
import './style.css';
import lofi from '../../../../assets/lofi.jpg';
import metal from '../../../../assets/metal.jpg';
import techno from '../../../../assets/techno.jpg';
import war from '../../../../assets/war.jpg';
import RadioCard from './radioCard';
import uuid from 'react-uuid';
import styles from './style.css';

const wrapperStyle = {
  maxHeight: '100%',
  width: '15vw',
  overflowY: 'scroll',
  overflowX: 'hidden',
};

const radioCardStyle = {
  height: '25vh',
  width: '25vh',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};
const imageStyle = {
  width: '100%',
  height: '100%',
};

const titleStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0, 0.85)',
  border: '5px solid lightblue',
  color: 'white',
  margin: '0',
  fontSize: '1em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Fira Sans'",
};

const imageWrapperStyle = {
  marginLeft: '1rem',
  boxShadow: '1px 1px 35px rgba(0,0,0,.3)',
  position: 'relative',
};

const options = [
  { value: 'lofi', label: 'Lofi', icon: lofi },
  { value: 'metal', label: 'Metal', icon: metal },
  { value: 'war', label: 'War', icon: war },
  { value: 'techno', label: 'Techno', icon: techno },
];

const Radio = ({ handleChangeBG, customStyle }) => {
  const handleOnChange = (e) => {
    if (e.target.tagName === 'DIV') {
      handleChangeBG(e.target.id);
    }
    if (e.target.tagName === 'INPUT') {
      handleChangeBG(e.target.value);
    }
    if (e.target.tagName === 'IMG') {
      handleChangeBG(e.target.alt);
    }
  };
  return (
    <form
      className={styles.wrapper}
      style={
        customStyle
          ? {
              ...wrapperStyle,
              ...customStyle,
            }
          : wrapperStyle
      }
    >
      {options.map((op) => (
        <RadioCard
          key={uuid()}
          radioCardStyle={radioCardStyle}
          imageWrapperStyle={imageWrapperStyle}
          titleStyle={titleStyle}
          imageStyle={imageStyle}
          imageSrc={op.icon}
          value={op.value}
          label={op.label}
          handleOnChange={handleOnChange}
        />
      ))}
    </form>
  );
};

export default Radio;
