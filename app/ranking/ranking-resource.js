'use strict';
angular.module('warcraftlogs-ftw.ranking').factory('characterRankingResource', ['WARCRAFT_LOGS', '$resource', function (WarcraftLogs, $resource) {
    var serviceUrl = WarcraftLogs.ApiUrl + '/rankings/character/:characterName/:serverName/:serverRegion';

    var paramDefaults = {
        characterName: '@characterName',
        serverName: '@serverName',
        serverRegion: '@serverRegion',
        metric: '@metric',
        api_key: WarcraftLogs.ApiKey
    };

    return $resource(serviceUrl, paramDefaults);
}]).factory('encounterRankingResource', ['WARCRAFT_LOGS', '$resource', function (WarcraftLogs, $resource) {
    var serviceUrl = WarcraftLogs.ApiUrl + '/rankings/encounter/:encounterId';

    var paramDefaults = {
        encounterId: '@encounterId',
        difficulty: '@difficulty',
        metric: '@metric',
        class: '@class',
        spec: '@spec',
        server: '@server',
        region: '@region',
        api_key: WarcraftLogs.ApiKey
    };

    return $resource(serviceUrl, paramDefaults);
}]);