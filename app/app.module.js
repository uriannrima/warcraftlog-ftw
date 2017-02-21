angular.module('warcraftlogs-ftw', [
    'ngResource',
    'warcraftlogs-ftw.router',
    'warcraftlogs-ftw.ranking',
]).run(function ($rootScope) {
    $rootScope.ApplicationMessage = "Application level message";
});