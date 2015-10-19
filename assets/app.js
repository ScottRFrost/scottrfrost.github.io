(function (angular) {
    'use strict';
    angular.module('ng-app', ['ngMaterial', 'ngRoute', 'ngAria', 'ngAnimate'])

        .config(function ($routeProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
            $routeProvider.when("/", {
                templateUrl: '/partials/home.html'
            });
            $routeProvider.when("/About", {
                templateUrl: '/partials/about.html'
            });
            $routeProvider.when("/Apps", {
                templateUrl: '/partials/apps.html'
            });
            $routeProvider.when("/Contact/:type", {
                templateUrl: '/partials/contact.html',
                controller: 'ContactController'
            });
            $routeProvider.when("/Resume", {
                templateUrl: '/partials/resume.html'
                //,controller: 'resumeCntl'
            });
            $routeProvider.otherwise({
                redirectTo: "/"
            });

            $locationProvider.html5Mode(false);
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('grey');
        })

        .controller('MainController', function ($scope, $route, $routeParams, $location, $mdSidenav, $mdDialog) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
            $scope.pageName = 'Home';

            //Menu
            $scope.menuItems = [
                { name: 'Home', url: '/', active: true },
                { name: 'About', url: '/About', active: false },
                { name: 'Resume', url: '/Resume', active: false },
                { name: 'Contact Me', url: '/Contact/Select', active: false },
                { name: 'Recommended Apps', url: '/Apps', active: false },
                { name: 'Linked In', url: 'https://www.linkedin.com/in/scottrfrost', active: false },
                { name: 'GitHub', url: 'https://github.com/ScottRFrost', active: false },
                { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/1187752/scottrfrost', active: false },
                { name: 'Personal Wiki', url: 'https://github.com/ScottRFrost/scottrfrost.github.io/wiki', active: false },
                { name: 'Google Photos', url: 'https://plus.google.com/photos/+ScottFrost/albums', active: false }
            ];
            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle();
            };
            $scope.changePage = function (index) {
                if ($scope.menuItems[index].url.substring(0, 4) === "http") {
                    window.location.assign($scope.menuItems[index].url);
                } else {
                    $location.path($scope.menuItems[index].url);
                    $scope.pageName = $scope.menuItems[index].name;
                    $scope.toggleLeft();
                }
            };
        })

        .controller('ContactController', function ($scope, $routeParams) {
            $scope.type = $routeParams.type;
            $scope.pageName = 'Contact';
        });
})(window.angular);