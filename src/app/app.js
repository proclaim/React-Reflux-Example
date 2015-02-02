/** @jsx React.DOM */

'use strict';

var React = require('react'),
    StatusStore = require('./stores/status-store'),
    StatusAction = require('./actions/status-action'),
    Reflux = require('reflux'),
    ExampleApp;

ExampleApp = React.createClass({

    mixins: [
        Reflux.ListenerMixin,
        Reflux.connect(StatusStore, "Status")],
    getInitialState: function() {
        return {
            Status:''
        };
    },
    componentDidMount: function() {
        this.listenTo(StatusStore, this._status);
    },
    _getStatus: function() {
        console.log(StatusStore.Status);
    },
    _setOnline: function() {
        StatusAction.updateStatus(true);
    },
    _setOffline: function() {
        StatusAction.updateStatus(false);
    },
    _status: function(status) {
        console.log('current status:', status);
    },
    render: function() {
        return (
        	/*jshint ignore:start */
            <div className="container">
            	<h2>Hello, World</h2>
                <div className="btn-group">
                    <a className="btn btn-primary" onClick={this._getStatus}>Get Status</a>
                    <a className="btn btn-primary" onClick={this._setOnline}>Set Online</a>
                    <a className="btn btn-primary" onClick={this._setOffline}>Set Offline</a>
                </div>
                <p>Current Status: {this.state.Status}</p>
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
