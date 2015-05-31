'use strict';

var Q             = require('q'),
    url           = require('url'),
    SecureRequest = require('../request/secure-request');

/**
 * @constructor
 */
function packageDomainsAction() {
    this.data = null;
}

/**
 * Set send data
 * @param {Object|string} data - Data to be send
 * @returns {CreateAction}
 */
packageDomainsAction.prototype.setData = function (data) {
    this.data = data;

    return this;
};

/**
 * Send create seed request to farmer server
 * @param {Object} server - farmer server specification
 * @returns {*|promise}
 */
packageDomainsAction.prototype.executeOn = function (server) {
    var deferred = Q.defer(),
        secureReq = new SecureRequest(),
        opt = {
            uri: url.resolve(server.api, '/api/container/greenhouse/domain'),
            method: 'GET',
            json: this.data
        };

    secureReq.send(opt, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            deferred.resolve(body);
        } else {
            if (body) {
                deferred.reject(body.error);
            } else {
                deferred.reject(error);
            }
        }
    });

    return deferred.promise;
};

module.exports = new packageDomainsAction();
