angular.module('warcraftlogs-ftw').controller('RankingController', ['$scope', '$filter', 'rankingService', function ($scope, $filter, rankingService) {
    var vm = this;
    $scope.rankingMessage = "This is a ranking message.";

    vm.setRankingList = function (rankingList) {
        angular.forEach(rankingList, function (ranking) {
            ranking.url = "https://www.warcraftlogs.com/reports/" + ranking.reportID + "#fight=" + ranking.fightID + "&type=damage-done";
        });
        $scope.rankingList = rankingList;
    };

    $scope.searchRanking = function () {
        var parameters = $scope.parameters;
        rankingService.getRankings(parameters).then(vm.setRankingList, function (reason) {
            console.log("Error has ocurred: ", reason);
        });
    };
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
}).filter('ratioFilter', function () {
    return function (inputArray, ratioParameter) {
        var ratioValue = ratioParameter / 100;
        var output = inputArray.filter(function (item) {
            if (ratioParameter === undefined || item.rank / item.outOf >= ratioValue) {
                return item;
            }
        });
        return output;
    };
});