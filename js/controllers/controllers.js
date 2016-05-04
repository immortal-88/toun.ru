'use strict';

// controllers

taatrApp.controller("MainCtrl", function ($scope, $location, $log,
 ajaxService, localStorageService, languageService, pageService, routeService) {

                $log.debug( $location.url() );
                $log.debug( $location.path() );  

   languageService.setup($scope, localStorageService);

   $scope.changelanguage = languageService.change($scope, localStorageService);

   $scope.getPage = pageService.setup($scope, localStorageService, ajaxService);

   $scope.getPage("/content/ru/go2json/frontpage/1", 'mainPage');
   $scope.getPage("/content/go2json/perfomance/25", 'perfomancePage');

   $scope.routeGoToView = routeService.setup();
 
   
   $scope.showMonth = function( obj, month ) {  
        var bool = false;
        if ( +month == 1) {
            $scope.first_len = 0; 
            for(var prs in obj)  { 
                if(obj.hasOwnProperty(prs)) $scope.first_len++;
            } 
bool = $scope.first_len >= 1 ? true : false; 
        }
        if ( +month == 2) { 
            $scope.second_len = 0; 
            for(var prs in obj)  { 
                if(obj.hasOwnProperty(prs)) $scope.second_len++;
            } 
bool = $scope.second_len >= 1 ? ( ($scope.first_len <= 11) ? 
    true : false ) : false;

        } 
        return bool;
   };

   $scope.showItemMonth = function(index, month){    
        var bool = false;
        if ( month == 1 ) {
bool = index <= 11 ? true : false ;
        }
        if ( month == 2 ) {
bool = index <= 11 ? ( ($scope.first_len <= 11) ? 
    true : false ): false ;
        }
        return bool;        
   };

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});
