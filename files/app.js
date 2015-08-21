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
      //tabs
      this.tab = 1;
      this.selectTab = function(setTab){
          this.tab = setTab;
      };
      this.isSelected = function(checkTab){
          return this.tab === checkTab;
      };
      //toggle button
      this.monsterToggle = 0;
      this.toggle = function(){
        if(this.monsterToggle == 0){
            return this.monsterToggle = 1;
        }
        else {
            return this.monsterToggle = 0;
        }
      };
      //floor changing
      this.floor = 1;
      this.changeFloor = function(newFloor){
          this.floor = newFloor;
      };
      this.currentFloor = function(isFloor){
          return this.floor === isFloor;
      };
    }) //end of controller
  app.controller('monsterDb', function($controller) {
    this.monstall = monstall;
    }) //end of controller
  //end of function
})();