
var customFilters = angular.module("customFilters", []);
var customDirectives = angular.module("customDirectives", []);
var customServices = angular.module("customServices", []);


var taatrApp = angular.module("TaatrApp", 
	["customServices", "customDirectives","customFilters", 
	'ngRoute', 'ngSanitize',"oc.lazyLoad"])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/views/main/init.html',
        controller: 'MainCtrl',
        title: 'Main'
      }).      
      when('/perfomance/25', {
        templateUrl: '/views/perfomance/init.html',
        controller: 'PerfomanceCtrl',
        title: 'Perfomance'
      }).  
      when('/repertuar', {
        templateUrl: '/views/repertuar/init.html',
        controller: 'RepertuarCtrl',        
      }).      
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });





