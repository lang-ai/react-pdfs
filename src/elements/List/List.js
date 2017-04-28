import React from 'react';

import './List.css';

function formatPrice(n) {
  return n.toLocaleString('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + ' $';
}

function List({ list, tax }) {
  const subtotal = list.reduce((acc, item) => (
    acc + (item.quantity * item.unitPrice)
  ), 0);
  const taxes = subtotal * tax;

  return (
    <div className="List">
      <table className="List-content">
        <thead>
          <tr>
            <th>Description</th>
            <th className="List-number">Quantity</th>
            <th className="List-number">Unit price</th>
            <th className="List-number">Line total</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr>
              <td>{item.name}</td>
              <td className="List-number">{item.quantity}</td>
              <td className="List-number">{formatPrice(item.unitPrice / 100)}</td>
              <td className="List-number">
                {formatPrice((item.unitPrice * item.quantity) / 100)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="List-totals">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td className="List-number">
              {formatPrice(subtotal / 100)}
            </td>
          </tr>
          <tr>
            <td>Tax ({tax * 100}%)</td>
            <td className="List-number">
              {formatPrice(taxes / 100)}
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td className="List-number">
              {formatPrice((subtotal + taxes) / 100)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;

