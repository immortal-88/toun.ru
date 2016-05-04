'use strict';

// directives

customDirectives.directive('initFeJsDir', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {
                element.ready(function () {
        setTimeout(fe_init, 2000);         
                });
        }
    }
});


customDirectives.directive('cssLazyLoad', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {
                element.ready(function () {

    var url = attr['url'];

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = url;

    var head = document.getElementsByTagName('head')[0];
    
    head.appendChild(link);        


                });
        }
    }
});
