'use strict';

// services

customServices.factory('ajax', function ($http) {
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

})
.factory('localStorage', function () {
    return {
        set: function(name, data) {
            window.localStorage.setItem( name, JSON.stringify(data) );
        },
        get: function(name) {
            return JSON.parse ( window.localStorage.getItem(name) );
        }      
    }

});