'use strict';

var state = {
    ranking: 'ranking',
};

angular.module('warcraftlogs-ftw.router', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider.state(state.ranking, {
        url: '/ranking',
        templateUrl: 'ranking/ranking.html',
        controller: 'RankingController as rankingController'
    });
});