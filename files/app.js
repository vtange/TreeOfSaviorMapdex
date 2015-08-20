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
      this.monsterToggle = 0;
      this.toggle = function(){
        if(this.monsterToggle == 0){
            return this.monsterToggle = 1;
        }
        else {
            return this.monsterToggle = 0;
        }
      };
    }) //end of controller
  app.controller('monsterDb', function($controller) {
    this.monstall = monstall;
    }) //end of controller
  //end of function
})();