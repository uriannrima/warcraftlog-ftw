angular.module('warcraftlogs-ftw', [
    'warcraftlogs-ftw.router',
    'ui.router',
    'ngRoute'
]).run(function ($rootScope) {
    $rootScope.ApplicationMessage = "Application level message";
});