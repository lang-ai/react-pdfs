import React from 'react';

import Block from './Block';

import './Address.css';

function Address({ emitter, recipient }) {
  return (
    <div className="Address clearfix">
      <Block recipient {...recipient} />
      <Block {...emitter} />
    </div>
  );
}

export default Address;

