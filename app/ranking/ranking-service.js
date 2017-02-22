'use strict';
angular.module('warcraftlogs-ftw.ranking').factory('rankingService', ['$q', 'characterRankingResource', 'encounterRankingResource', function ($q, characterRankingResource, encounterRankingResource) {
    // For private variables.
    var vm = this;

    // For public references.
    var service = {};

    service.getCharacterRankings = function (parameters) {
        var deferred = $q.defer();

        characterRankingResource.query(parameters).$promise.then(function (serverData) {
            deferred.resolve(serverData);
        }, function (reason) {
            deferred.reject(reason);
        });

        return deferred.promise;
    };

    return service;
}]);