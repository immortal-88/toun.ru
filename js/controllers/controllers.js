'use strict';

// controllers

taatrApp.controller("MainCtrl", function ($scope, ajax, localStorage) {

    $scope.page = 'views/main.html';

    $scope.languages = [];
    $scope.languages['en'] = 'field_lang_en';
    $scope.languages['ru'] = 'field_lang_ru';
    $scope.languages['mns'] = 'field_lang_mns';
    $scope.languages['kh'] = 'field_lang_kh';

    $scope.language1 = 'ru';
    $scope.language2 = 'mns';    

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
        var newstr = str.replace(/\\n/gi, '<br />');       
        return newstr;
   };

   $scope.getPage("/content/ru/go2json/frontpage/1", 'mainPage');

   $scope.test = function(item){
        console.log( item );        
   };

});