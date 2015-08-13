(function() {
    //start of function
  var app = angular.module('mapDex', []);
  app.controller('mapSelector', function() {
  this.name = "controllername"
  this.zones = {
    map_1021: {
        name: "West Siauliai Woods",
        area: "Klaipeda Area",
        type: "Field",
        level: 1
    }, 
    map_1001: {
        name: "Klaipeda",
        area: "Klaipeda Area",
        type: "City",
        level: 0
    }, 
    map_1032: {
        name: "East Siauliai Woods",
        area: "Klaipeda Area",
        type: "Field",
        level: 6
    }, 
    map_3010: { 
        name: "Closed Town 18_2",
        area: "Kingdom Territory",
        type: "Field",
        level: 470
    }
    }
  });
  //end of function
})();

