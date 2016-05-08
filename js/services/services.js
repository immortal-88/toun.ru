'use strict';

// services

customServices.factory('ajaxService', function ($http) {
    return {

        get: function(fileName, func) {
            $http.get(fileName).
            then(function successCallback(response) {
                    func(response.data);
            }, function errorCallback (response) {
                console.log( response );
            });
        },
        post: function(fileName, func) { 
            $http.post( fileName ).
            then(function successCallback(response) {
                    func(response.data);
            }, function errorCallback (response) {
                console.log( response );
            });  ;
        } 

    }
});

customServices.factory('localStorageService', function () {
    return {

        set: function(name, data) {
            window.localStorage.setItem( name, JSON.stringify(data) );
        },
        get: function(name) {
            return JSON.parse ( window.localStorage.getItem(name) );
        }

    }
});

customServices.factory('languageService', function (
    localStorageService, seoTagsService) {
    return {
        setup: function(scope) {
            scope.languages = [];
            scope.languages['en'] = 'field_lang_en';
            scope.languages['ru'] = 'field_lang_ru';
            scope.languages['mns'] = 'field_lang_mns';
            scope.languages['kh'] = 'field_lang_kh';
           
            if ( !localStorageService.get('language1') || 
                !localStorageService.get('language2') ) {
                localStorageService.set('language1','ru');
                scope.language1 = localStorageService.get('language1');
                localStorageService.set('language2','mns');
                scope.language2 = localStorageService.get('language2');
            } else {
                scope.language1 = localStorageService.get('language1');
                scope.language2 = localStorageService.get('language2');
            }        
        },
        change: function(scope) {
            return function(lang, langcase ){        
                if( langcase == 1 ) {
                    localStorageService.set('language1',lang);
                    scope.language1 = localStorageService.get('language1');
                }   
                if( langcase == 2 ) {
                    localStorageService.set('language2',lang);
                    scope.language2 = localStorageService.get('language2');
                }  
                seoTagsService.setup(localStorageService, 'mainPage');     
            } 
        } 

    }
});

customServices.factory('pageService', function (
    localStorageService, ajaxService) {
    return {

        setup: function(scope){
            return function(json, nameOfPage) {
                if ( localStorageService.get(nameOfPage) ) {
                    scope[nameOfPage] = localStorageService.get(nameOfPage); 
                    console.log( scope[nameOfPage] );
                    return '';
                }
                ajaxService.post(json, function(data){ 
                    scope[nameOfPage] = data;
                    localStorageService.set(nameOfPage, scope[nameOfPage] );
                    console.log( scope[nameOfPage] );
                });
            }
        }

    }
});


customServices.factory('routeService', function ($location) {
    return {

        setup: function(){
            return function(path) {
                $location.path(path);
            }
        }

    }
});


customServices.factory('seoTagsService', function (localStorageService) {
    return {

        setup: function(nameOfPage){

var ar = [];
ar['en'] = 'field_lang_en';
ar['ru'] = 'field_lang_ru';

var page = localStorageService.get(nameOfPage);
if ( ! page ) { return false }
var lang = localStorageService.get('language1');
if ( ! lang ) { return false }

if ( ! page['seo'] ) { return false }    

    $( 'title' ).html( page['seo'][ar[lang]]['title'] );
    $( 'meta[name="description"]' ).attr('description',
    page['seo'][ar[lang]]['description'] );   

        }

    }
});
