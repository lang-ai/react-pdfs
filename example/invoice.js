const createPDF = require('../server/createPDF');

createPDF({
  date: new Date().toISOString(),
  number: 32149,
  recipient: {
    displayName: 'John White',
    addressLine: 'CEO at Carddesign.con\nLondon, United Kingdom',
  },
  emitter: {
    displayName: 'Awesome & Co',
    addressLine: 'Weather forecasting\nLondon, United Kingdom',
  },
  list: [
    {
      name: 'Daily weather report',
      quantity: 34,
      unitPrice: 320,
    },
    {
      name: 'Email delivery service',
      quantity: 34,
      unitPrice: 15,
    },
    {
      name: 'Weather report custom design setup',
      quantity: 1,
      unitPrice: 98000,
    },
  ],
  tax: 0.23,
})
  .then(out => console.log(out))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
