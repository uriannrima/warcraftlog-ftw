'use strict';
angular.module('warcraftlogs-ftw.ranking', ['$resource']).factory('rankingResource', function ($resource) {
    var serviceUrl = 'https://www.warcraftlogs.com:443/v1/rankings/character/:characterName/:serverName/:serverRegion';
    var serviceMethods = {
        get: {
            method: 'GET',
            cache: false,
            isArray: true
        }
    };
    return $resource(serviceUrl, {}, serviceMethods);
});