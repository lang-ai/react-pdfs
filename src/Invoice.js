import React from 'react';

import Header from './elements/Header/Header';

import './vendor/normalize.css';
import './global.css';

function Invoice({ data }) {
  return (
    <div className="Invoice">
      <Header date={data.date} number={data.number} />
    </div>
  );
}

export default Invoice;

