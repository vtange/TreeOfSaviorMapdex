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
            var obj = input[i];
            if (modelObject.name == null) {
                if((obj.kind == modelObject.kind || modelObject.kind == null) && (obj.race == modelObject.race || modelObject.race == null) && (obj.elem == modelObject.elem || modelObject.elem == null) && (obj.armr == modelObject.armr || modelObject.armr == null) && (obj.foot == modelObject.foot || modelObject.foot == null)){
                    out.push(input[i]);
                }
            }
            else {
                if(((obj.name.toLowerCase().search(modelObject.name.toLowerCase())) >= 0) && (obj.kind == modelObject.kind || modelObject.kind == null) && (obj.race == modelObject.race || modelObject.race == null) && (obj.elem == modelObject.elem || modelObject.elem == null) && (obj.armr == modelObject.armr || modelObject.armr == null) && (obj.foot == modelObject.foot || modelObject.foot == null)){
                    out.push(input[i]);
                }
            }
        }
        return out;
    }
});
      //end of function
})();