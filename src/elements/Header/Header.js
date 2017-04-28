import React from 'react';
import format from 'date-fns/format';

import logoSrc from './logo.png';
import './Header.css';

function Header({ date, number }) {
  return (
    <div className="Header clearfix">
      <div className="Header-logo">
        <img src={logoSrc} alt="Logo" />
      </div>

      <div className="Header-right clearfix">
        <div className="Header-title">
          Invoice #{number}
        </div>
        <div className="Header-date">
          {format(new Date(date), 'MMMM D, YYYY')}
        </div>
      </div>
    </div>
  );
}

export default Header;

