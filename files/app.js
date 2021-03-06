(function() {
    //start of function
  var app = angular.module('mapDex', ['filters']);
  app.factory('MonsterDB', function() {
    var MonsterDB = {};
    MonsterDB.monstall = monstall;
    MonsterDB.modelObject = {};
    return MonsterDB;
  }); //end of service
  app.factory('UiDB', function() {
    var UiDB = {};
    UiDB.floor = 1;
    return UiDB;
  }); //end of service
  app.controller('mapSelector',['$scope','UiDB', function($scope, UiDB) {
//load floors from UiDB
    $scope.UiDB = UiDB;
//load zones
    this.zones = zones;
//map selector
    this.zone = this.zones.map_1021;
    this.selectZone = function(setZone){
          this.zone = setZone;
          $scope.UiDB.floor = 1;
    };
    this.Highlighted = function(checkZone){
          return this.zone === checkZone;
    };
    }]) //end of controller
  app.controller('tabControl',['$scope','UiDB', function($scope, UiDB) {
//load floors from UiDB
    $scope.UiDB = UiDB;
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
      this.changeFloor = function(newFloor){
          $scope.UiDB.floor = newFloor;
      };
      this.currentFloor = function(isFloor){
          return $scope.UiDB.floor === isFloor;
      };
    }]) //end of controller
  app.controller('monsterDb',['$scope','MonsterDB', function($scope, MonsterDB) {
//monsterDb -> get database, get model object
    $scope.MonsterDB = MonsterDB;
    $scope.editedItem = {};
    $scope.isEditing=false;
    $scope.onMonsterNum = -1;
    $scope.editrow=function(index){
        $scope.isEditing=true;
        $scope.onMonsterNum = index;
        angular.copy($scope.MonsterDB.monstall[index], $scope.editedItem);
    }
    $scope.editPending=function(index){
        return $scope.onMonsterNum === index;
    }
    $scope.save=function(index){
        console.log("saving..");
        $scope.isEditing=false;
        $scope.onMonsterNum = -1;
        angular.copy($scope.editedItem, $scope.MonsterDB.monstall[index]);
        //add a hard,persitent save function here.
        //clear editedItem -> LAST, or you save nothing lol
        $scope.editedItem = {}
    }
    $scope.cancelEdit=function(){
         $scope.isEditing=false;
         $scope.onMonsterNum = -1;
         $scope.editedItem = {};
    }
    $scope.delete=function(index){
      $scope.isEditing=false;
      $scope.onMonsterNum = -1;
      $scope.editedItem = {};
      $scope.MonsterDB.monstall.splice(index,1);//could also simply angular copy now, and end up with empty object for index. use if index problem with monster create
      //add a hard,persitent delete function here.
    }
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