angular.module('warcraftlogs-ftw').controller('RankingController', ['$scope', 'rankingService', function ($scope, rankingService) {
    var vm = this;
    $scope.rankingMessage = "This is a ranking message.";

    vm.setRankingList = function (rankingList) {
        $scope.rankingList = rankingList;
    };

    $scope.searchRanking = function () {
        var parameters = $scope.parameters;
        rankingService.getRankings(parameters).then(function (data) {
            vm.setRankingList(data);
        });
    };
}]);