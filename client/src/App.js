import React from 'react';
import Layout from './Containers/Layout/Layout';
import { backgrounds } from './data/backgrounds';
import InternetLostWrap from './HOC/InternetLostWrap';

//reducers

const App = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default InternetLostWrap(App);
