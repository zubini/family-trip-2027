// Detailkarte USA Appalachen: Los Angeles bis New Orleans (Stationen 1 bis 9), gleich wie bei USA Mitte.
const app = require('./usa-appalachen.js'), west = require('./usa-mitte-west.js');
module.exports = Object.assign({}, west, {
  reise: 'usaappalachen',
  titel: 'Detailkarte von Los Angeles über Albuquerque und Texas bis New Orleans',
  wege: app.wege.slice(0, 8)
});
