(function() {
    //start of function
var filters=angular.module('filters', []);

filters.filter('noBosses', function() {
    return function(input) {
        var out = [];
        for (var j = 0; j < input.length; j++) {
            if(input[j].kind == "Normal"){
                out.push(input[j]);
            }
        }
        return out;
    }
});
    
filters.filter('matchWith', function() {
    return function(input, modelObject) {
        var out = [];
        for (var i = 0; i < input.length; i++) {
            if(input[i].race == "Demon"){
                out.push(input[i]);
            }
        }
        return out;
    }
});
      //end of function
})();