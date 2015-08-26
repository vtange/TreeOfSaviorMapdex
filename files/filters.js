(function() {
    //start of function
var filters=angular.module('filters', []);

filters.filter('matchWith', function() {
    return function(input, searchSubmit) {
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