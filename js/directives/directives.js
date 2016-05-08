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


                console.log( "before Interval" ); 
                var intervalID = setInterval(function(){
console.log( "after Interval" );  
if(!scope['mainPage']) { return '' }  
if(!scope['mainPage']) { return '' }                            
if(!scope['mainPage']['lenta']) { return '' }  


    var fild = attr['fildname'];
    var id = attr['videoid'];
    var video = document.getElementById(id);
    if ( video.getAttribute('itisdone') ) { 
        clearInterval(intervalID) 
        return '';
    }
    var source = document.createElement('source');
    source.setAttribute('src', scope['mainPage']['lenta'][fild]);
    video.appendChild(source);
    video.setAttribute('itisdone', ' true ')
    console.log( 'before play' );
    clearInterval(intervalID);    
    video.play(); 


                }, 500 );
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


                    var intervalID = setInterval(function(){ 
if(!scope['mainPage']) { return '' }  
if(!scope['mainPage']) { return '' }                            
if(!scope['mainPage']['lenta']) { return '' }   
if( element.attr('src') ) {  
        clearInterval(intervalID) 
        return '';
}
     
    var fild = attr['fildname'];
    element.attr('src', scope['mainPage']['lenta'][fild]);
    clearInterval(intervalID);
                    }, 1000 );                     


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