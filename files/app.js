(function() {
    //start of function
  var app = angular.module('mapDex', []);
  app.controller('mapSelector', function() {
    this.zones = zones;
    this.zone = this.zones.map_1021;
    this.selectZone = function(setZone){
          this.zone = setZone;
    };
    this.Highlighted = function(checkZone){
          return this.zone === checkZone;
    };
    }) //end of controller
  app.controller('tabControl', function() {
      this.tab = 1;
      this.selectTab = function(setTab){
          this.tab = setTab;
      };
      this.isSelected = function(checkTab){
          return this.tab === checkTab;
      };
    }) //end of controller
  app.controller('monsterDb', function($controller) {
    //create instance of parent controller
    this.maplook = $controller('mapSelector',{});
    //^works
    this.monstall = monstall;
    }) //end of controller
  //end of function
})();



/*
    zones = {
     map_1021: {
         name: "West Siauliai Woods",
         area: "Klaipeda Area",
         type: "Field",
         level: 1,
         map: "map/westsiliulai.jpg"
     },
     map_1001: {
         name: "Klaipeda",
         area: "Klaipeda Area",
         type: "City",
         level: 0,
         map: "map/klaipeda.jpg"
     }
    };
    
    zone = zones.map_1021;
    selectZone = function(setZone){
          zone = this.zones[setZone];
    };
 
    console.log(zone.name);
    selectZone("map_1001");
    console.log(zone.name);  
    */
/*
var Good = function() {
    this.zones = {
     map_1021: {
         name: "West Siauliai Woods",
         area: "Klaipeda Area",
         type: "Field",
         level: 1,
         map: "map/westsiliulai.jpg"
     },
     map_1001: {
         name: "Klaipeda",
         area: "Klaipeda Area",
         type: "City",
         level: 0,
         map: "map/klaipeda.jpg"
     },
     map_1032: {
         name: "East Siauliai Woods",
         area: "Klaipeda Area",
         type: "Field",
         level: 6,
         map: "map/eastsiliulai.jpg"
     }
     };
    this.zone = this.zones.map_1021;
    this.selectZone = function(setZone){
          this.zone = this.zones[setZone];
    };
    this.Highlighted = function(checkZone){
          return this.zone === this.zones[checkZone];
    };
    };
    var mapp = new Good();
    
    
    
    mapp.selectZone("map_1001");
    
    console.log(mapp.zone.name);
    */