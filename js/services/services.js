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

customServices.factory('languageService', function () {
    return {
        setup: function(scope, localStorageService) {
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
        change: function(scope, localStorageService) {
            return function(lang, langcase ){        
                if( langcase == 1 ) {
                    localStorageService.set('language1',lang);
                    scope.language1 = localStorageService.get('language1');
                }   
                if( langcase == 2 ) {
                    localStorageService.set('language2',lang);
                    scope.language2 = localStorageService.get('language2');
                }       
            } 
        } 

    }
});

customServices.factory('pageService', function () {
    return {

        setup: function(scope, localStorageService, ajaxService){
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
