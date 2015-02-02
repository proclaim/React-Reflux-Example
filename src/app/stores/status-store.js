var Reflux = require('reflux'),
    StatusAction = require('../actions/status-action');

var ProfileStore = Reflux.createStore({

    init: function() {
        this.listenTo(StatusAction.getStatus, this._getStatus);
        this.listenTo(StatusAction.updateStatus, this._updateStatus);
        this.Status;
    },
    _updateStatus: function(isOnline) {
        this.Status = isOnline ? 'ONLINE' : 'OFFLINE';
        this.trigger(this.Status);
    }

});

module.exports = ProfileStore;