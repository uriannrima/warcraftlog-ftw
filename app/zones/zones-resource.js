'use strict';
angular.module('warcraftlogs-ftw.zones').factory('zonesResource', ['WARCRAFT_LOGS', '$resource', function (WarcraftLogs, $resource) {
    var serviceUrl = WarcraftLogs.ApiUrl + '/zones';

    var paramDefaults = {
        api_key: WarcraftLogs.ApiKey
    };

    return $resource(serviceUrl, paramDefaults);
}]);