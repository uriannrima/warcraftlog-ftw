var state = {
    home: 'home',
    ranking: 'ranking',
};

angular.module('warcraftlogs-ftw.router', [
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state(state.home, {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'HomeController as homeController'
    }).state(state.ranking, {
        url: '/ranking',
        templateUrl: 'app/views/ranking.html',
        controller: 'RankingController as rankingController'
    });
}).factory('router', function ($state) {
    var service = {};
    service.state = state;

    service.goToRanking = function () {
        $state.go(state.ranking);

        return service;
    };
});