(function() {
    //start of function
  var app = angular.module('mapDex', []);

  app.controller('mapSelector', function() {
    this.products = zones;
  });

  var zones = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [ "http://icons.iconarchive.com/icons/robinweatherall/cashino/256/Gem-icon.png" ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Gem-icon.png",
      "http://icons.iconarchive.com/icons/iconshock/real-vista-development/256/ruby-icon.png",
      "http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Garnet-icon.png"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Topaz-icon.png",
      "http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Ruby-icon.png",
      "http://icons.iconarchive.com/icons/artdesigner/my-secret/128/diamond-icon.png"
    ]
  }];
  
  //end of function
})();
