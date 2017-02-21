'use strict';
angular.module('warcraftlogs-ftw.ranking', ['rankingResource']).factory('rankingService', function (rankingResource) {
    // For private variables.
    var vm = this;

    // For public references.
    var service = {};

    service.getRanking = function (serverName, serverRegion, characterName, metric) {
        return {
            "status": "This is a stub",
            "encounter": 1849,
            "class": 7,
            "spec": 3,
            "guild": "Inspect",
            "rank": 10720,
            "outOf": 26148,
            "duration": 307490,
            "startTime": 1486837462224,
            "reportID": "4XHVaWYwjkTtKNC8",
            "fightID": 1,
            "difficulty": 4,
            "size": 21,
            "itemLevel": 881,
            "total": 666717,
            "estimated": true
        };
    };

    return service;
});