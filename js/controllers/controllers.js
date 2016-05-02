'use strict';

// controllers

taatrApp.controller("MainCtrl", function ($scope, $location, ajax, localStorage) {

    $scope.languages = [];
    $scope.languages['en'] = 'field_lang_en';
    $scope.languages['ru'] = 'field_lang_ru';
    $scope.languages['mns'] = 'field_lang_mns';
    $scope.languages['kh'] = 'field_lang_kh';

    $scope.language1 = 'ru';
    $scope.language2 = 'mns';   


    $scope.routeGoToView = function (path) {
        $location.path(path);
        console.log( path );
        
    }

   $scope.getPage = function(json, nameOfPage) {

    if ( localStorage.get(nameOfPage) ) {
       $scope[nameOfPage] = localStorage.get(nameOfPage); 
       console.log( $scope[nameOfPage] );
       return '';
    }

    ajax.post(json, function(data){ 
        $scope[nameOfPage] = data;
        localStorage.set(nameOfPage, $scope[nameOfPage] )
     });

   };

   $scope.changelanguage = function(lang, langcase ){
        
        if( langcase == 1 ) {
            $scope.language1 = lang;
        }
        if( langcase == 2 ) {
            $scope.language2 = lang;
        }
        
   };

   $scope.replaceNtoBR = function(str){
        if( str ) {
            var newstr = str.replace(/\\n/gi, '<br />');       
            return newstr;
        }
        return '';
   };

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

   $scope.getPage("/content/ru/go2json/frontpage/1", 'mainPage');

   $scope.test = function(item){
        console.log( item );        
   };

});

taatrApp.controller("View1Ctrl", function ($scope, $location, ajax, localStorage) {

        console.log( "View1Ctrl" );

});



taatrApp.controller("View2Ctrl", function ($scope, $location, ajax, localStorage) {

        console.log( "View2Ctrl" );

});