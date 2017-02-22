'use strict';
angular.module('warcraftlogs-ftw.ranking').factory('rankingService', ['rankingResource', function (rankingResource) {
    // For private variables.
    var vm = this;

    // For public references.
    var service = {};

    service.getRankings = function (parameters) {
        return rankingResource.query({
            serverName: parameters.serverName,
            serverRegion: parameters.serverRegion,
            characterName: parameters.characterName,
            metric: parameters.metric
        }).$promise;
    };

    return service;
}]);