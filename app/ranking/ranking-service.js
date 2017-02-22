'use strict';
angular.module('warcraftlogs-ftw.ranking').factory('rankingService', ['$q', 'rankingResource', function ($q, rankingResource) {
    // For private variables.
    var vm = this;

    // For public references.
    var service = {};

    service.getRankings = function (parameters) {
        var deferred = $q.defer();

        rankingResource.query(parameters).$promise.then(function (serverData) {
            deferred.resolve(serverData);
        }, function (reason) {
            deferred.reject(reason);
        });

        return deferred.promise;
    };

    return service;
}]);