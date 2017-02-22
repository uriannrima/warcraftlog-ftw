angular.module('warcraftlogs-ftw').controller('RankingController', ['$scope', '$filter', 'rankingService', 'zonesService', 'WARCRAFT_LOGS', function ($scope, $filter, rankingService, zonesService, WarcraftLogs) {
    var vm = this;
    $scope.rankingMessage = "This is a ranking message.";
    $scope.rankingList = [];
    $scope.encounterList = [];
    $scope.zones = [];

    vm.handleRequestError = function (reason) {
        console.log("Error has ocurred: ", reason);
    }

    vm.setZones = function (zones) {
        $scope.zones = zones;
    }

    vm.addToEncounterFilter = function (ranking) {
        // Check if encounter already is present in the filter
        var alreadyAdded = $scope.encounterList.filter(function (encounter) {
            return encounter.id == ranking.encounter;
        }).length > 0;

        // If not
        if (alreadyAdded) return;

        // Find encounter name and zone.
        var foundEncounter = undefined;
        var foundZone = undefined;
        for (iZone = 0; iZone < $scope.zones.length; iZone++) {
            if (foundZone !== undefined) break;
            var zone = $scope.zones[iZone];
            for (iEncounter = 0; iEncounter < zone.encounters.length; iEncounter++) {
                var encounter = zone.encounters[iEncounter];
                if (encounter.id == ranking.encounter) {
                    foundEncounter = encounter;
                    foundZone = zone;
                    break;
                }
            }
        }

        // Add to the filter.
        $scope.encounterList.push({
            id: foundEncounter.id,
            name: foundEncounter.name,
            zone: foundZone.name
        });
    };

    vm.setRankingList = function (rankingList) {
        angular.forEach(rankingList, function (ranking) {
            // Configure report url just to make things easier.
            var type = $scope.parameters.metric == "hps" ? "healing" : "damage-done";
            ranking.url = WarcraftLogs.ReportUrl + ranking.reportID + "#fight=" + ranking.fightID + "&type=" + type;

            // Configure encounter filter.
            vm.addToEncounterFilter(ranking);
        });

        $scope.rankingList = rankingList;
    };

    $scope.searchRanking = function () {
        var parameters = $scope.parameters;
        $scope.encounterList = [];
        rankingService.getCharacterRankings(parameters).then(vm.setRankingList, vm.handleRequestError);
    };

    zonesService.getZones().then(vm.setZones, vm.handleRequestError);
}]).filter('greaterThanEquals', function () {
    return function (inputArray, propertyNameParameter, propertyValueParameter) {
        var output = inputArray.filter(function (item) {
            if (propertyNameParameter === undefined ||
                propertyValueParameter === undefined ||
                item[propertyNameParameter] >= propertyValueParameter) {
                return item;
            }
        });

        return output;
    };
}).filter('perfomanceFilter', function () {
    return function (inputArray, perfomanceParameter) {
        var perfomanceValue = perfomanceParameter / 100;
        var output = inputArray.filter(function (item) {
            if (perfomanceParameter === undefined || (1 - (item.rank / item.outOf)) >= perfomanceValue) {
                return item;
            }
        });
        return output;
    };
});
