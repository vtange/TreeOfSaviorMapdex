(function() {
    //start of function
var filters=angular.module('filters', []);

filters.filter('demons', function() {
    return function(input) {
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