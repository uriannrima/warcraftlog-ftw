'use strict';
angular.module('warcraftlogs-ftw.zones').factory('zonesService', ['$q', 'zonesResource', function ($q, zonesResource) {
    // For private variables.
    var vm = this;

    // For public references.
    var service = {};

    service.getZones = function () {
        var deferred = $q.defer();

        zonesResource.query().$promise.then(function (serverData) {
            deferred.resolve(serverData);
        }, function (reason) {
            deferred.reject(reason);
        });

        return deferred.promise;
    };

    return service;
}]);