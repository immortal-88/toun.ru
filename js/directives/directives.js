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

    var href = attr['href'];

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = href;

    var head = document.getElementsByTagName('head')[0];
    
    head.appendChild(link);        


                });
        }
    }
});


customDirectives.directive('setAtrForMenuDir', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {
                element.ready(function () {

    if ( attr['datamenuhref'] ) {
        element.attr( 'datamenuhref', scope.itemofmenu );
    }
    if ( attr['datamenuid'] ) {
        element.attr( 'id', scope.itemofmenu.slice(1) );
    }
    
                });
        }
    }
});

customDirectives.directive('videoSetDir', function () {
    return {
        restrict: "A",
        scope : false,
        link: function (scope, element, attr) {
                element.ready(function () {

if(scope['mainPage']) {
    var fild = attr['fildname'];
    var id = attr['videoid'];
    var video = document.getElementById(id);
    var source = document.createElement('source');
    source.setAttribute('src', scope['mainPage']['lenta'][fild]);
    video.appendChild(source);
    video.play();                      
}

                });
        }
    }
});


customDirectives.directive('imgSetDir', function () {
    return {
        restrict: "A",
        scope : false,
        link: function (scope, element, attr) {
                element.ready(function () {

if(scope['mainPage']) {
    var fild = attr['fildname'];
    source.setAttribute('src', scope['mainPage']['lenta'][fild]);                     
}

                });
        }
    }
});

customDirectives.directive('submitDir', function () {
    return {
        restrict: "AE",
        scope : false,
        link: function (scope, element) {
            element.bind('submit', function (event) {
                console.log("mousedown");
            });
        }
    }
});