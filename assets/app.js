/*jslint vars: true, white: true, browser: true, eqeq: true, plusplus: true, es5: true */
/*global angular, $ */

//App Setup
var app = angular.module("ng-app", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

//Routing
app.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
        "use strict";
        $routeProvider.when("/", {
            templateUrl: '/partials/home.html',
            controller: 'homeCntl',
            currentTab: 'home'
        });
        $routeProvider.when("/Resume", {
            templateUrl: '/partials/resume.html',
            controller: 'resumeCntl'
        });
        $routeProvider.otherwise({
            redirectTo: "/"
        });
        //$locationProvider.html5Mode(true);
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

//Controllers
app.controller("baseCntl", function ($scope, $rootScope, $modal, $route) {
    "use strict";
        $scope.$on('errorThrown', function (o, title, message) {
            $modal.open({
                scope: $scope,
                template: '<div class="modal-header"><h3>' + title + '</h3></div><div class="modal-body">' + message + '</div><div class="modal-footer"><button class="btn btn-primary" ng-click="confirm()"><i class="fa fa-check"></i> OK</button></div>',
                controller: function ($modalInstance) {
                    $scope.confirm = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }
            });
        });
    $scope.$on('$routeChangeSuccess', function(event, current, previous, rejection) { $scope.controller = current.controller; }); //Capture controller here for use in tab active classes
});

app.controller("homeCntl", function ($scope, $modal) {
    "use strict";
});

app.controller("resumeCntl", function ($scope, $modal) {
    "use strict";
});