'use strict';

var Q       = require('q'),
    request = require('request'),
    config  = require('../config');

function ImageList(program) {
    var self = this;

    program
        .command('images')
        .description('Get available image list')
        .action(function () {
            self.action();
        });
}

/**
 * Initialize Commander object for Images command
 */
ImageList.prototype.action = function () {
    var options = {
        uri: config.api + '/images',
        method: 'GET'
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // 200 – no error
            console.log(JSON.parse(body).result);

        } else {
            // 500 – server error
            console.log('Request error', error);
            console.log('error: ', JSON.parse(body).error);
        }

    });
};

module.exports = function (program) {
    return new ImageList(program);
};
