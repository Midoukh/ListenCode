import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { useAlert } from 'react-alert';

import { setFilter } from '../../../actions';

import style from './style.css';
import filterImg from '../../../assets/filter.jpg';
import closeIcon from '../../../assets/close.png';
import LocalStoring from '../../../services/localStorage';

export default function ReactMenu({ items, handleClose }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { filter } = useSelector((state) => state);
  const handleSetFilter = (chosedFilter) => {
    //1) persist state filter to localStorage
    new LocalStoring('filter', chosedFilter).set();

    //2) dispatch the action
    dispatch(setFilter(chosedFilter));

    //3)close the menu
    handleClose();

    //4)Show a message to the user
    alert.show(`${chosedFilter} was applied successfully 🙂`, {
      type: 'success',
      timeout: 2000,
    });
  };

  return (
    <div className={style.Container}>
      <img
        onClick={handleClose}
        className={style.Close}
        src={closeIcon}
        alt="close"
      />
      <div className={style.Title}>
        <h2>Choose A Filter</h2>
      </div>
      <div className={style.Grid}>
        {items.map((item) => (
          <div
            key={uuid()}
            className={style.Card}
            onClick={() => handleSetFilter(item)}
            style={{
              opacity: filter === item ? '1' : '.85',
            }}
          >
            <img src={filterImg} alt="card" />
            <div
              className={style.FilterName}
              style={{
                border:
                  filter === item
                    ? '3px solid #ed9d60'
                    : '3px solid transparent',
                boxShadow:
                  filter === item ? '1px 2px 10px rgba(0,0,0,.6)' : 'none',
              }}
            >
              <h4>{item}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
