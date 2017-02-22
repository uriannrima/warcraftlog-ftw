angular.module('warcraftlogs-ftw', [
    'ngResource',
    'warcraftlogs-ftw.router',
    'warcraftlogs-ftw.ranking',
    'warcraftlogs-ftw.zones'
]).run(function ($rootScope) {
    $rootScope.ApplicationMessage = "Application level message";
});