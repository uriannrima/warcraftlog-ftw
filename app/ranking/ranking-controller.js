angular.module('warcraftlogs-ftw').controller('RankingController', ['$scope', 'rankingService', function ($scope, rankingService) {
    $scope.rankingMessage = "This is a ranking message.";
    $scope.ranking = rankingService.getRanking();
}]);