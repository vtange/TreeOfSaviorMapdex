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
      //toggle boss button
      this.bossToggle = 0;
      this.toggle = function(){
        if(this.bossToggle == 0){
            return this.bossToggle = 1;
        }
        else {
            return this.bossToggle = 0;
        }
      };
      this.toggledOn = function(){
          return this.bossToggle === 1;
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
  app.controller('searchControl', function() {
      this.monstall = monstall;
        //toggle search footer
      this.searchFooter = 0;
      this.toggle = function(){
        if(this.searchFooter == 0){
            return this.searchFooter = 1;
        }
        else {
            return this.searchFooter = 0;
        }
      };
      this.toggledOn = function(){
          return this.searchFooter === 1;
      };
        //toggle search results
      this.searchResults = 0;
      this.toggle2 = function(){
        if(this.searchResults == 0){
            return this.searchResults = 1;
        }
        else {
            return this.searchResults = 0;
        }
      };
      this.toggledOn2 = function(){
          return this.searchResults === 1;
      };
}) //end of controller
  app.controller('monsterSearch', function() {
      this.forThese = {};
      this.searchSubmit = [];
      this.Search = function(){
          this.searchSubmit.push(this.forThese);
          this.forThese = {};
      };
}) //end of controller
  //end of function
})();