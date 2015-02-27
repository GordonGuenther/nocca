'use strict';

var $extend = require('extend');
var $pubsub = require('node-pubsub');


module.exports = Nocca;

module.exports.$chainBuilderFactory = require('./lib/chainBuilderFactory');
module.exports.$constants = require('./lib/constants');
module.exports.$defaultSettings = require('./lib/defaultSettings');
module.exports.$endpoints = require('./lib/endpoints');
module.exports.$errors = require('./lib/errors');
module.exports.$forwarder = require('./lib/forwarder');
module.exports.$gui = require('./lib/gui');
module.exports.$keys = require('./lib/keys');
module.exports.$playback = require('./lib/playback');
module.exports.$recorder = require('./lib/recorder');
module.exports.$responder = require('./lib/responder');
module.exports.$scenario = require('./lib/scenario');
module.exports.$scenarioRecorder = require('./lib/scenarioRecorder');
module.exports.$server = require('./lib/server');
module.exports.$stats = require('./lib/stats');
module.exports.$utils = require('./lib/utils');


// the instance can carry state and allows multiple instances to run at the same time
function Nocca (config) {

    // these requires are within the Nocca instance to make sure the modules are unchanged
    var $constants = require('./lib/constants');
    var $defaultSettings = require('./lib/defaultSettings');

    // map this to self so there are no this-scope issues
    var self = this;

    // store merged config
    self.config = $extend(true, {}, $defaultSettings, config);

    // add constants for ease of reference
    self.constants = $constants;

    // NOTE: pubsub is NOT configurable
    self.pubsub = $pubsub;


    //   C O N F I G U R A B L E   S T U F F   B E L O W

    // set a logger to logger.disabled to turn off logging
    self.log = self.config.logger;
    self.logError = self.config.logger.error;
    self.logWarning = self.config.logger.warning;
    self.logSuccess = self.config.logger.success;
    self.logInfo = self.config.logger.info;
    self.logDebug = self.config.logger.debug;


    self.requestChainer = new self.config.chainBuilderFactory(self);
    self.responder = new self.config.responder(self);
    self.statsLogger = new self.config.statistics.logger(self);

    // instantiate servers by looping over them. Nice.
    Object.keys(self.config.servers).forEach(function (server) {

        if (self.config.servers[server].enabled === true) {
            self[server] = new self.config.servers[server].instance(self);
        }

    });

    self.endpointManager = new self.config.endpointManager(self);
    self.endpointManager.addEndpoints(self.config.endpoints);

    // TODO: add comment to explain what this does
    // TODO: create instance of recorder
    self.scenarioRecorder = self.config.playback.scenarioRecorder;
    for (var i = 0, iMax = self.config.scenarios.available.length; i < iMax; i++) {
        self.scenarioRecorder(self.config.scenarios.available[i].player());
    }

    // run all stat reporters so they can subscribe to events. Send in the instance as arg.
    self.config.statistics.reporters.forEach(function (reporter) {
        reporter(self);
    });

}