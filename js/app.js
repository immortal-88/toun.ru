
var customFilters = angular.module("customFilters", []);
var customDirectives = angular.module("customDirectives", []);
var customServices = angular.module("customServices", []);

var taatrApp = angular.module("TaatrApp", 
	["customServices", "customDirectives","customFilters", 
	'ngRoute', 'ngSanitize'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      when('/view1', {
        templateUrl: 'views/view1.html',
        controller: 'View1Ctrl'
      }).
      when('/view2', {
        templateUrl: 'views/view2.html',
        controller: 'View2Ctrl'
      }).
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });





