'use strict';

angular.module('warcraftlogs-ftw', [
    'warcraftlogs-ftw.router',
    'ui.router'
]).run(function ($rootScope) {
    $rootScope.ApplicationMessage = "Application level message";
});