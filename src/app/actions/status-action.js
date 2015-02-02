var Reflux = require('reflux'),
    Actions;

Actions = Reflux.createActions([
    'getStatus',
    'updateStatus'
]);

module.exports = Actions;