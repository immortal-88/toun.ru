'use strict';

// filters

customFilters.filter("firstUpperCase", function () {
    return function (value) {
        if (angular.isString(value)) {
            return value.slice(0, 1).toUpperCase() + value.slice(1);
        }
    };
});

customFilters.filter("onlyCharacters", function () {
    return function (value, len) {
        if (angular.isString(value)) {              	       	
        	return value.length < +len ? value : 
        	value.substr(0,+len) + '...';
        }
    };
});

customFilters.filter("replaceNtoBR", function () {
    return function(value){
        if (angular.isString(value)) { 
            var newstr = value.replace(/\\n/gi, '<br />');       
            return newstr;
        }
        return '';
   };
});

customFilters.filter("replaceNtoBR", function () {
    return function(value){
        if (angular.isString(value)) { 
            var newstr = value.replace(/\\n/gi, '<br />');       
            return newstr;
        }
        return '';
   };
}); 