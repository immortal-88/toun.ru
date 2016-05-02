'use strict';

// directives

customDirectives.directive('initFeJs', function () {
    return {
        restrict: 'A',        
        link: function (scope, element, attr) {
                element.ready(function () {
        setTimeout(fe_init, 2000);         
                });
        }
    }
});

