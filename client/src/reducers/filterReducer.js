import LocalStoring from '../services/localStorage';

const defaultFilter = new LocalStoring('filter', null).get() || '3D';
const setFilterReducer = (state = defaultFilter, action) => {
  //the state is the currentBackground
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default setFilterReducer;
