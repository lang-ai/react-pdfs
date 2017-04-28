import React from 'react';
import ReactDOM from 'react-dom';

import Invoice from './Invoice';

const data = {
  date: new Date().toISOString(),
  number: 3853,
};

ReactDOM.render(
  <Invoice data={data} />,
  document.getElementById('root')
);
