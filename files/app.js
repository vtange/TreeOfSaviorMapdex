(function() {
    //start of function
  var app = angular.module('mapDex', ['filters']);
  app.factory('MonsterDB', function() {
    var MonsterDB = {};
    MonsterDB.monstall = monstall;
    MonsterDB.modelObject = {};
    return MonsterDB;
  }); //end of service
  app.controller('mapSelector', function() {
//load zones
    this.zones = zones;
//map selector
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
  app.controller('monsterDb',['$scope','MonsterDB', function($scope, MonsterDB) {
//monsterDb -> get database, get model object
    $scope.MonsterDB = MonsterDB;
    }]) //end of controller
  app.controller('searchControl',['$scope','MonsterDB', function($scope, MonsterDB) {
//monsterDb -> get database, get model object
    $scope.MonsterDB = MonsterDB;
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
//toggle search popup
      this.searchPopup = 0;
      this.toggle2 = function(){
        if(this.searchPopup == 0){
            return this.searchPopup = 1;
        }
        else {
            return this.searchPopup = 0;
        }
      };
      this.toggledOn2 = function(){
          return this.searchPopup === 1;
      };
}]) //end of controller
  app.controller('monsterSearch',['$scope','MonsterDB', function($scope, MonsterDB) {
//monsterDb -> get database, get model object
      $scope.MonsterDB = MonsterDB;
      //this is a form
      this.forThese = {};
      this.searchSubmit = {};
      this.Search = function(){
          this.searchSubmit = this.forThese;
          $scope.MonsterDB.modelObject = this.forThese;
          this.forThese = {};
      };
}]) //end of controller
  //end of function
})();