const fs = require('fs');
const Path = require('path');
const exec = require('child_process').exec;

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const assets = require('../lib/asset-manifest.json');

/**
 * Import the main component file from the assets manifest
 */
const mainJsPath = Path.join(__dirname, `../lib/${assets['main.js']}`);
const Main = require(mainJsPath).default;

const STYLES_TAG = '%STYLES%';
const CONTENT_TAG = '%CONTENT%';

/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
 */
function getFile(relativePath) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, relativePath);

    return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    })
  });
}

/**
 * Writes the HTML to disk
 * @param {string} html
 * @return {Promise.<string>} Filepath
 */
function writeFile(content) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, '../build/invoice.html');

    return fs.writeFile(path, content, (err) => {
      if (err) return reject(err);
      return resolve(path);
    });
  });
}

/**
 * Generates the PDF using the HTML at the passed path
 * @param {String} htmlPath
 * @return {Promise.<string>} Resolves to the path of the generated PDF
 */
function generatePDF(htmlPath) {
  return new Promise((resolve, reject) => {
    const outputPath = Path.join(__dirname, '../build/invoice.pdf');

    exec(`wkhtmltopdf -B 0 -T 0 -L 0 -R 0 ${htmlPath} ${outputPath}`, (err, stdout, stderr) => {
      if (err) return reject(err);
      if (stderr) return reject(stderr);
      resolve(outputPath);
    });
  });
}

/**
 * Renders the React app and generates the PDF with the passed data.
 * @param {Object} data
 * @return {Promise.<string>} Promise resolves to the path to the generated PDF
 */
function createPDF(data) {
  return Promise.all([
    getFile('./template.html'),
    getFile(`../lib/${assets['main.css']}`),
  ])
    .then(([template, css]) => {
      // Render the app
      const element = React.createElement(Main, { data });
      const content = ReactDOMServer.renderToStaticMarkup(element);

      // Prepare the HTML
      let html = template;
      html = html.replace(CONTENT_TAG, content);
      html = html.replace(STYLES_TAG, css);

      // Write the HTML to disk
      return writeFile(html);
    })
    .then(path => generatePDF(path));
}

module.exports = createPDF;

