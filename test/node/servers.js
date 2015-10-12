'use strict';

var $nocca = require('../../index');

new $nocca({
    endpoints: {
        google: {
            targetBaseUrl: 'http://www.google.com/',
            keyGenerator: $nocca.$keys.urlOnlyKeyGeneratorBuilder()
        },
        yahoo: {
            targetBaseUrl: 'http://www.yahoo.com/'
        },
        _default: {
            targetBaseUrl: 'http://localhost:3004/'
        }
    },
    scenarios: {
        available: [
            require(__dirname + '/scenarios/scenario_google')
        ],
        writeNewScenarios: true,
        scenarioOutputDir: '/dev/tmp/'
    },
    keyGenerator: $nocca.$keys.cherryPicking,
    requestKeyParams: {
        properties: ['path', 'method'],
        query: ['login', 'password'],
        headers: ['accept', 'content-type', 'soapaction'],
        body: {
            xpath: ['//S:Body'],
            json: ['user.id']
        }
    }
});
