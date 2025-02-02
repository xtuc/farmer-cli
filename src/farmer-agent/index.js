'use strict';

var createAction            = require('./api-client/actions/createAction'),
    deployAction            = require('./api-client/actions/deployAction'),
    deleteAction            = require('./api-client/actions/deleteAction'),
    runScriptAction         = require('./api-client/actions/runScriptAction'),
    inspectAction           = require('./api-client/actions/inspectAction'),
    listAction              = require('./api-client/actions/listAction'),
    assignDomainAction      = require('./api-client/actions/assignDomainAction'),
    unassignDomainAction    = require('./api-client/actions/unassignDomainAction'),
    packageDomainsAction    = require('./api-client/actions/packageDomainsAction'),
    createBackupAction      = require('./api-client/actions/createBackupAction'),
    restoreBackupAction     = require('./api-client/actions/restoreBackupAction'),
    deleteBackupAction      = require('./api-client/actions/deleteBackupAction'),
    listBackupAction        = require('./api-client/actions/listBackupAction'),
    config                  = require('../config');

function Agent () {
}

Agent.prototype.createSeed = function (data) {
    return createAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.deleteSeed = function (data) {
    return deleteAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.inspect = function (data) {
    return inspectAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.deploySeed = function (data) {
    return deployAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.runOnSeed = function (data) {
    return runScriptAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.list = function () {
    return listAction
        .executeOn({
            api: config.API
        });
};

Agent.prototype.assignDomain = function (data) {
    return assignDomainAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.unassignDomain = function (data) {
    return unassignDomainAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.packageDomains = function (data) {
    return packageDomainsAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.createBackup = function (data) {
    return createBackupAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.restoreBackup = function (data) {
    return restoreBackupAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.deleteBackup = function (data) {
    return deleteBackupAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.listBackup = function (data) {
    return listBackupAction
        .setData(data)
        .executeOn({
            api: config.API
        });
};

Agent.prototype.destroySeed = function (data) {

};

Agent.prototype.testSeed = function (data) {

};

Agent.prototype.releaseSeed = function (data) {

};

Agent.prototype.setupPlant = function (data) {

};

Agent.prototype.updatePlant = function (data) {

};

Agent.prototype.destroyPlant = function (data) {

};

Agent.prototype.getDataFor = function () {

};

module.exports = new Agent();
