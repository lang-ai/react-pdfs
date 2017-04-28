import React from 'react';

function Block({ displayName, addressLine, recipient }) {
  const className = `Address-Block${recipient ? ' is-recipient' : ''}`;

  const $address = addressLine.split('\n').reduce((acc, line, i) => {
    return [
      ...acc,
      <p key={i}>{line}</p>,
    ];
  }, []);

  return (
    <div className={className}>
      <p className="Address-Block-name">
        {displayName}
      </p>
      <div className="Address-Block-address">
        {$address}
      </div>
    </div>
  );
}

export default Block;

