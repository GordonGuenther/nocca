'use strict';

var $buenosJscs = require('buenos-jscs');
var $buenosJshint = require('buenos-jshint');
var $buenosHtmllint = require('buenos-htmllint');
var $buenosCodetags = require('buenos-codetags');

module.exports = {
    lint: lint
};

if (!module.parent) {

    console.log('Starting linters, this could take some time.');

    lint()
        .then(function () {
            console.log('Linting done');
        });

}

function lint () {

    return _jscs()
        .then(_jshint)
        .then(_htmllint)
        .then(_codetags)
        .catch(function (err) {
            setTimeout(function () {
                throw err;
            }, 0);
        });

}

function _jscs () {

    return $buenosJscs().promise;

}

function _jshint () {

    return $buenosJshint().promise;

}

function _htmllint () {

    return $buenosHtmllint().promise;

}

function _codetags () {

    return $buenosCodetags().promise;

}