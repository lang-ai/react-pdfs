# Generating PDFs with React

> This is an example project you can use to generate PDFs with React.
> Start by checking the related talk slides [here](http://bit.ly/react-emails-pdf).


### Example

To provide an example as starting point, this project generates a demo invoice.

To generate the example:

```
$ npm install
$ npm run build
$ node example/invoice.js
```



The result html will be saved in the `/build/` directory. Here is how it looks like:

![PDF Preview](https://s3-eu-west-1.amazonaws.com/langai-public/github/invoice.png)


### Development

This project was bootstrapped with [Create React App][react-create-app].
 See the development guide [here][react-create-app-guide].


### Creating the PDF

To create the PDF, simply import the function (you may want to use it as a module) and call it with the
data. It returns a promise that resolves when the generated PDF path.

```js
// In case you use it as a module
// const createPDF = require('react-pdfs-example');

const createPDF = require('../server/createPDF');

const data = { 
  date: new Date().toISOString(),
  number: 32149,
    recipient: {
    displayName: 'John White',
    addressLine: 'CEO at Carddesign.con\nLondon, United Kingdom',
  },
  // more data...
};

createPDF(data)
  .then((path) => {
    // PDF has been generated with the config from the function
    // generatePDF() inside server/createPDF.js.
    // Returns the generated PDF path.
  });
```

- - - - - - - - - -

[![LangAI](https://s3-eu-west-1.amazonaws.com/langai-public/github/logo-small.png)][langai]

**Built with ❤️ by Lang.ai**

 [langai]: https://lang.ai/
 [react-create-app]: https://github.com/facebookincubator/create-react-app
 [react-create-app-guide]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md

