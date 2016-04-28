'use strict';

// controllers

taatrApp.controller("MainCtrl", function ($scope, ajax, localStorage) {

    $scope.page = 'views/main.html';
    $scope.language1 = 'ru';
    $scope.language2 = 'mns';    
    $scope.menu = [];


   $scope.getMainManu = function(json) {

    if ( localStorage.get('menu') ) {
       $scope.menu = localStorage.get('menu'); 
       console.log( $scope.menu );
       return '';
    }
    ajax.post("/content/kh/go2json/menu/menu-json", function(data){ 
        $scope.menu = [];
        var incr = 0;       
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                $scope.menu[incr] = {};    
                $scope.menu[incr].item = data[i].link;               
                if ( data[i].below.length != 0 ) {
                    var subincr = 0;
                    $scope.menu[incr].submemu = [];
                    for (var pp in data[i].below) {
                        if (data[i].below.hasOwnProperty(pp)) {
            $scope.menu[incr].submemu[subincr] = data[i].below[pp].link;  
            subincr++;  
                        }
                    }                   
                }
                incr++;
            }
        }
        localStorage.set('menu', $scope.menu )
        console.log( $scope.menu );
     });
   };
   $scope.getMainManu("/content/kh/go2json/menu/menu-json");

});