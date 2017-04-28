const createPDF = require('../server/createPDF');

createPDF({})
  .then(out => console.log(out))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
