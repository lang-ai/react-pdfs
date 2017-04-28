import React from 'react';

import Header from './elements/Header/Header';
import Address from './elements/Address/Address';
import List from './elements/List/List';

import './vendor/normalize.css';
import './global.css';
import './Invoice.css';

function Invoice({ data }) {
  return (
    <div className="Invoice">
      <Header date={data.date} number={data.number} />
      <Address recipient={data.recipient} emitter={data.emitter} />
      <List list={data.list} tax={data.tax} />
    </div>
  );
}

export default Invoice;

