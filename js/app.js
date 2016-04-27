var taatrApp = angular.module("TaatrApp", []) 

.directive('initFeJs', function () {
    return {
        restrict: 'A',        
        link: function (scope, element, attr) {
                element.ready(function () {                    
                    fe_init ();
                });
        }
    }
});

taatrApp.controller("MainCtrl", function ($scope) {

    $scope.page = 'views/main.html';
    $scope.loadscript = 'js/fe-event-main.js';

});


        window.onload = function () {

                var xhr = new XMLHttpRequest();          
                xhr.open("GET", "/content/kh/go2json/menu/menu-json", true);  

                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) { 
                        if (xhr.status == 200) { 
           console.log( JSON.parse( xhr.responseText ) );
                        }
                    }
                }
                
                xhr.send();                              
        };
