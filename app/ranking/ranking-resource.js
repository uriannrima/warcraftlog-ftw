'use strict';
angular.module('warcraftlogs-ftw.ranking').factory('characterRankingResource', function ($resource) {
    var serviceUrl = 'https://www.warcraftlogs.com:443/v1/rankings/character/:characterName/:serverName/:serverRegion';

    var paramDefaults = {
        characterName: '@characterName',
        serverName: '@serverName',
        serverRegion: '@serverRegion',
        metric: '@metric',
        api_key: '4a91976b519daeb594b0cf6dc08af19c'
    };

    return $resource(serviceUrl, paramDefaults);
}).factory('encounterRankingResource', function ($resource) {
    var serviceUrl = 'https://www.warcraftlogs.com:443/v1/rankings/encounter/:encounterId';

    var paramDefaults = {
        encounterId: '@encounterId',
        difficulty: '@difficulty',
        metric: '@metric',
        class: '@class',
        spec: '@spec',
        server: '@server',
        region: '@region',
        api_key: '4a91976b519daeb594b0cf6dc08af19c'
    };

    return $resource(serviceUrl, paramDefaults);
});