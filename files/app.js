(function() {
    //start of function
  var app = angular.module('mapDex', []);
  app.controller('mapSelector', function() {
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
     },
     map_1041: {
         name: "Miners' Village",
         area: "Klaipeda Area",
         type: "Field",
         level: 12,
         map: "map/minersvillage.jpg"
     },
     map_2081: {
         name: "Srautas Canyon",
         area: "Klaipeda Area",
         type: "Field",
         level: 26,
         map: "map/srautascanyon.jpg"
     },
     map_2051: {
         name: "Grynas Trails",
         area: "Kiren Province",
         type: "Field",
         level: 336,
         map: ""
     },
     map_2061: {
         name: "Grynas Training Camp",
         area: "Kiren Province",
         type: "Field",
         level: 340,
         map: ""
     },
     map_2071: {
         name: "Grynas Hills",
         area: "Kiren Province",
         type: "Field",
         level: 344,
         map: ""
     },
     map_1180: {
         name: "Gitis Settlement Area",
         area: "Klaipeda Area",
         type: "Field",
         level: 69,
         map: "map/gitissettlementarea.jpg"
     },
     map_1051: {
         name: "Crystal Mine",
         area: "Klaipeda Area",
         type: "Dungeon",
         level: 16,
         map: "map/crystalmine.jpg"
     },
     map_2082: {
         name: "Gele Plateau",
         area: "Klaipeda Area",
         type: "Field",
         level: 29,
         map: "map/geleplateau.jpg"
     },
     map_2451: {
         name: "Pilgrimage Trail 41_4",
         area: "Kiren Province",
         type: "Field",
         level: 350,
         map: ""
     },
     map_2471: {
         name: "Monastery 41_6",
         area: "Kiren Province",
         type: "Field",
         level: 359,
         map: ""
     },
     map_2461: {
         name: "Pilgrimage Trail 41_5",
         area: "Kiren Province",
         type: "Field",
         level: 356,
         map: ""
     },
     map_3720: {
         name: "Bracken Forest 43_4",
         area: "Kiren Province",
         type: "Field",
         level: 364,
         map: ""
     },
     map_3750: {
         name: "Myrkiti Farm",
         area: "Klaipeda Area",
         type: "Field",
         level: 86,
         map: "map/myrkitifarm.jpg"
     },
     map_1176: {
         name: "Baron Allerno",
         area: "Klaipeda Area",
         type: "Field",
         level: 84,
         map: "map/baronallerno.jpg"
     },
     map_2088: {
         name: "Veja Ravine",
         area: "Klaipeda Area",
         type: "Field",
         level: 46,
         map: "map/vejaravine.jpg"
     },
     map_1081: {
         name: "Katyn Forest",
         area: "Klaipeda Area",
         type: "Field",
         level: 106,
         map: "map/katlynforest.jpg"
     },
     map_2083: {
         name: "Nefritas Cliff",
         area: "Klaipeda Area",
         type: "Field",
         level: 32,
         map: "map/nefritascliff.jpg"
     },
     map_2421: {
         name: "Pilgrimage Trail 41_1",
         area: "Kiren Province",
         type: "Field",
         level: 343,
         map: ""
     },
     map_2431: {
         name: "Pilgrimage Trail 41_2",
         area: "Kiren Province",
         type: "Field",
         level: 346,
         map: ""
     },
     map_2441: {
         name: "Pilgrimage Trail 41_3",
         area: "Kiren Province",
         type: "Field",
         level: 353,
         map: ""
     },
     map_3690: {
         name: "Bracken Forest 43_1",
         area: "Kiren Province",
         type: "Field",
         level: 355,
         map: ""
     },
     map_3710: {
         name: "Bracken Forest 43_3",
         area: "Kiren Province",
         type: "Field",
         level: 361,
         map: ""
     },
     map_3740: {
         name: "Aqueduct Bridge Area",
         area: "Klaipeda Area",
         type: "Field",
         level: 89,
         map: "map/aqueductarea.jpg"
     },
     map_3730: {
         name: "Tenants Farm",
         area: "Klaipeda Area",
         type: "Field",
         level: 92,
         map: "map/tenantsfarm.jpg"
     },
     map_2089: {
         name: "Vieta gorge",
         area: "Klaipeda Area",
         type: "Field",
         level: 49,
         map: "map/vietagorge.jpg"
     },
     map_1082: {
         name: "Owl Burial Ground",
         area: "Klaipeda Area",
         type: "Field",
         level: 109,
         map: "map/owlburialground.jpg"
     },
     map_2084: {
         name: "Tenet Garden",
         area: "Klaipeda Area",
         type: "Field",
         level: 35,
         map: "map/tenetgarden.jpg"
     },
     map_2085: {
         name: "Tenet Chapel",
         area: "Klaipeda Area",
         type: "Dungeon",
         level: 40,
         map: "map/tenetchapl.jpg"
     },
     map_3670: {
         name: "Bracken Forest 42_1",
         area: "Kiren Province",
         type: "Field",
         level: 363,
         map: ""
     },
     map_3680: {
         name: "Bracken Forest 42_2",
         area: "Kiren Province",
         type: "Field",
         level: 367,
         map: ""
     },
     map_3700: {
         name: "Bracken Forest 43_2",
         area: "Kiren Province",
         type: "Field",
         level: 358,
         map: ""
     },
     map_3660: {
         name: "Limestone Cave 55-1",
         area: "Kiren Province",
         type: "Dungeon",
         level: 367,
         map: ""
     },
     map_2300: {
         name: "Greene Manor",
         area: "Klaipeda Area",
         type: "Field",
         level: 149,
         map: "map/greenmanor.jpg"
     },
     map_3610: {
         name: "Demon Prison District 1",
         area: "Klaipeda Area",
         type: "Dungeon",
         level: 151,
         map: ""
     },
     map_2090: {
         name: "Cobalt Forest",
         area: "Klaipeda Area",
         type: "Field",
         level: 52,
         map: "map/cobalt.jpg"
     },
     map_1141: {
         name: "Poslinkis Forest",
         area: "Klaipeda Area",
         type: "Field",
         level: 112,
         map: "map/poslinkisfrst.jpg"
     },
     map_1151: {
         name: "Saknis Plains",
         area: "Klaipeda Area",
         type: "Field",
         level: 114,
         map: ""
     },
     map_3560: {
         name: "Limestone Cave 52_1",
         area: "Kiren Province",
         type: "Dungeon",
         level: 371,
         map: ""
     },
     map_3550: {
         name: "Coral Plains 44_3",
         area: "Kiren Province",
         type: "Field",
         level: 378,
         map: ""
     },
     map_2301: {
         name: "Shaton Farm",
         area: "Klaipeda Area",
         type: "Field",
         level: 152,
         map: ""
     },
     map_1175: {
         name: "Dina Bee Farm",
         area: "Klaipeda Area",
         type: "Field",
         level: 160,
         map: "map/dinabeefarm.jpg"
     },
     map_2091: {
         name: "Septyni Glen",
         area: "Klaipeda Area",
         type: "Field",
         level: 55,
         map: "map/septyniglen.jpg"
     },
     map_1201: {
         name: "Gate Route",
         area: "Fedimian Area",
         type: "Field",
         level: 58,
         map: "map/gateroute.jpg"
     },
     map_1231: {
         name: "Dvasia Peak",
         area: "Fedimian Area",
         type: "Field",
         level: 120,
         map: "map/dvasiapeak.jpg"
     },
     map_1241: {
         name: "Sunset Flag Forest",
         area: "Fedimian Area",
         type: "Field",
         level: 123,
         map: "map/sunsetflagforst.jpg"
     },
     map_1251: {
         name: "Gateway of Great King",
         area: "Fedimian Area",
         type: "Field",
         level: 58,
         map: "map/gatewayofgreatking.jpg"
     },
     map_1261: {
         name: "Ramstis Ridge",
         area: "Fedimian Area",
         type: "Field",
         level: 61,
         map: "map/ramstisridge.jpg"
     },
     map_3540: {
         name: "Coral Plains 44_2",
         area: "Kiren Province",
         type: "Field",
         level: 381,
         map: ""
     },
     map_3530: {
         name: "Coral Plains 44_1",
         area: "Kiren Province",
         type: "Field",
         level: 385,
         map: ""
     },
     map_2302: {
         name: "Shaton Reservoir",
         area: "Klaipeda Area",
         type: "Field",
         level: 155,
         map: "map/shatonresevior.jpg"
     },
     map_1174: {
         name: "Vilna Forest",
         area: "Klaipeda Area",
         type: "Field",
         level: 163,
         map: ""
     },
     map_1173: {
         name: "Uskis Arable Land",
         area: "Klaipeda Area",
         type: "Field",
         level: 166,
         map: "map/uskisarable.jpg"
     },
     map_1172: {
         name: "Spring Light Woods",
         area: "Klaipeda Area",
         type: "Field",
         level: 169,
         map: "map/springlightwoods.jpg"
     },
     map_1211: {
         name: "Sirdgela Forest",
         area: "Fedimian Area",
         type: "Field",
         level: 61,
         map: "map/sirdgelafrst.jpg"
     },
     map_1221: {
         name: "Kvailas Forest",
         area: "Fedimian Area",
         type: "Field",
         level: 64,
         map: "map/kvailasfrst.jpg"
     },
     map_1271: {
         name: "Overlong Bridge Valley",
         area: "Fedimian Area",
         type: "Field",
         level: 64,
         map: "map/overlongvalley.jpg"
     },
     map_2402: {
         name: "Underground Passage 3",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 0,
         map: ""
     },
     map_3470: {
         name: "Mokusul Chamber",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 188,
         map: "map/moksulchamber.jpg"
     },
     map_2521: {
         name: "Raukime Resorvoir",
         area: "Fedimian Area",
         type: "Field",
         level: 179,
         map: "map/raukimeresevior.jpg"
     },
     map_2511: {
         name: "Glade Slope",
         area: "Fedimian Area",
         type: "Field",
         level: 173,
         map: "map/gladeslope.jpg"
     },
     map_2501: {
         name: "Biltis Forest",
         area: "Fedimian Area",
         type: "Field",
         level: 176,
         map: "map/biltisforest.jpg"
     },
     map_2401: {
         name: "Passage of the Recluse",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 0,
         map: "map/passage%20of%20the%20recluse.jpg"
     },
     map_1281: {
         name: "Akmens Ridge",
         area: "Fedimian Area",
         type: "Field",
         level: 67,
         map: "map/arkmen.jpg"
     },
     map_3450: {
         name: "Monastery 35_4",
         area: "Romuva Sanctuary",
         type: "Dungeon",
         level: 229,
         map: ""
     },
     map_1411: {
         name: "Underground Grave of Ritinis",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 191,
         map: "map/undergrdgrave.jpg"
     },
     map_3460: {
         name: "Bidentis Shrine",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 194,
         map: ""
     },
     map_1391: {
         name: "The place of Balyus' Eternal Sleep",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 197,
         map: ""
     },
     map_2531: {
         name: "Thilla Monastery",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 183,
         map: ""
     },
     map_1291: {
         name: "Tiltas Valley",
         area: "Fedimian Area",
         type: "Field",
         level: 69,
         map: "map/tiltasvalley.jpg"
     },
     map_2541: {
         name: "Canyon Area 36_1",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 227,
         map: ""
     },
     map_3440: {
         name: "Monastery 35_3",
         area: "Romuva Sanctuary",
         type: "Dungeon",
         level: 226,
         map: ""
     },
     map_2581: {
         name: "Istora Ruins",
         area: "Fedimian Area",
         type: "Field",
         level: 176,
         map: "map/istoraruins.jpg"
     },
     map_2571: {
         name: "Namu Temple Ruins",
         area: "Fedimian Area",
         type: "Field",
         level: 172,
         map: "map/namutemple.jpg"
     },
     map_2561: {
         name: "Nuoridin Falls",
         area: "Fedimian Area",
         type: "Field",
         level: 168,
         map: "map/nuoridenfalls.jpg"
     },
     map_1421: {
         name: "Stele Road",
         area: "Fedimian Area",
         type: "Field",
         level: 96,
         map: "map/stelerd.jpg"
     },
     map_1321: {
         name: "Zachariel Crossroad",
         area: "Fedimian Area",
         type: "Field",
         level: 78,
         map: "map/zacherialcrossrd.jpg"
     },
     map_1331: {
         name: "Royal Mausoleum",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 81,
         map: "map/royalmaus.jpg"
     },
     map_1301: {
         name: "Rukas Plateau",
         area: "Fedimian Area",
         type: "Field",
         level: 73,
         map: "map/rukasplateau.jpg"
     },
     map_2551: {
         name: "Pilgrimage Trail 36_2",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 230,
         map: ""
     },
     map_3420: {
         name: "Siauliai 35_1",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 223,
         map: ""
     },
     map_3430: {
         name: "Coral Plains 35_2",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 220,
         map: ""
     },
     map_1431: {
         name: "Ancient Garden of Goddess",
         area: "Fedimian Area",
         type: "Field",
         level: 99,
         map: "map/goddessgarden.jpg"
     },
     map_1441: {
         name: "Escanciu Village",
         area: "Fedimian Area",
         type: "Field",
         level: 103,
         map: "map/escaniuvillage.jpg"
     },
     map_1311: {
         name: "Plateau of Rex",
         area: "Fedimian Area",
         type: "Field",
         level: 76,
         map: "map/plateurex.jpg"
     },
     map_2411: {
         name: "Myurasu passage",
         area: "Romuva Sanctuary",
         type: "Dungeon",
         level: 0,
         map: ""
     },
     map_1531: {
         name: "Pilgrimage Trail 48",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 234,
         map: ""
     },
     map_3350: {
         name: "Coral Plains 32_1",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 216,
         map: ""
     },
     map_1451: {
         name: "Fedimian Suburbs",
         area: "Fedimian Area",
         type: "Field",
         level: 107,
         map: "map/fedimiansubs.jpg"
     },
     map_1461: {
         name: "Mage Tower 1st Floor",
         area: "Fedimian Area",
         type: "Dungeon",
         level: 113,
         map: "map/magetower.jpg"
     },
     map_1541: {
         name: "Pilgrimage Trail 49",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 237,
         map: ""
     },
     map_3390: {
         name: "34_1 Grand Fruit Forest",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 235,
         map: ""
     },
     map_3400: {
         name: "34_2 Grand Fruit Forest",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 238,
         map: ""
     },
     map_3360: {
         name: "Coral Plains 32_2",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 213,
         map: ""
     },
     map_981: {
         name: "Fedimian",
         area: "Fedimian Area",
         type: "City",
         level: 0,
         map: "map/fedimian.jpg"
     },
     map_1511: {
         name: "Way of Big Starving Demon",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 121,
         map: "map/starvingpath.jpg"
     },
     map_1521: {
         name: "Pilgrim Path",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 124,
         map: "map/pilgrimpath.jpg"
     },
     map_1551: {
         name: "Altary Way",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 127,
         map: "map/altary.jpg"
     },
     map_1561: {
         name: "Forest of Prayer",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 130,
         map: "map/forestprayer.jpg"
     },
     map_1581: {
         name: "The main hall",
         area: "Romuva Sanctuary",
         type: "Dungeon",
         level: 137,
         map: ""
     },
     map_3410: {
         name: "34_3 Grand Fruit Forest",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 242,
         map: ""
     },
     map_3370: {
         name: "32_3 Grand Fruit Forest",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 210,
         map: ""
     },
     map_2491: {
         name: "???? ??",
         area: "Kallis Province",
         type: "Dungeon",
         level: 251,
         map: ""
     },
     map_2481: {
         name: "???? ??",
         area: "Kallis Province",
         type: "Dungeon",
         level: 247,
         map: ""
     },
     map_1571: {
         name: "Apsimesti Crossroad",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 133,
         map: "map/apsimesticrss.jpg"
     },
     map_1542: {
         name: "Feretory Hills",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 197,
         map: ""
     },
     map_1543: {
         name: "Sutatis Trade Route",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 200,
         map: ""
     },
     map_3380: {
         name: "32_4 Grand Fruit Forest",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 207,
         map: ""
     },
     map_2412: {
         name: "Underground Passage 4",
         area: "Kallis Province",
         type: "Dungeon",
         level: 0,
         map: ""
     },
     map_1651: {
         name: "Roxona Market",
         area: "Kallis Province",
         type: "Field",
         level: 187,
         map: "map/roxanamarket.jpg"
     },
     map_1641: {
         name: "Verkti Square",
         area: "Kallis Province",
         type: "Field",
         level: 184,
         map: "map/vertisquare.jpg"
     },
     map_1681: {
         name: "Downtown",
         area: "Kallis Province",
         type: "Field",
         level: 193,
         map: "map/downtown.jpg"
     },
     map_1631: {
         name: "Dingofasil District",
         area: "Kallis Province",
         type: "Field",
         level: 247,
         map: ""
     },
     map_3340: {
         name: "Coastal Fortress",
         area: "Kallis Province",
         type: "Field",
         level: 244,
         map: ""
     },
     map_1544: {
         name: "Mochia Forest",
         area: "Romuva Sanctuary",
         type: "Field",
         level: 203,
         map: ""
     },
     map_3290: {
         name: "Catacombs 25_4",
         area: "Grand Forest Area",
         type: "Dungeon",
         level: 281,
         map: ""
     },
     map_2141: {
         name: "Isolated plateau 28_2",
         area: "Kallis Province",
         type: "Field",
         level: 279,
         map: ""
     },
     map_1661: {
         name: "Ruklys Street",
         area: "Kallis Province",
         type: "Field",
         level: 190,
         map: "map/ruklysst.jpg"
     },
     map_1751: {
         name: "Ibre Plateau",
         area: "Kallis Province",
         type: "Field",
         level: 260,
         map: ""
     },
     map_1691: {
         name: "Inner Enceinte District",
         area: "Kallis Province",
         type: "Field",
         level: 196,
         map: ""
     },
     map_1701: {
         name: "Sentry Bailey",
         area: "Kallis Province",
         type: "Dungeon",
         level: 200,
         map: ""
     },
     map_3310: {
         name: "Fort of the Land 30_1",
         area: "Kallis Province",
         type: "Dungeon",
         level: 251,
         map: ""
     },
     map_3320: {
         name: "Fort of the Land 30_2",
         area: "Kallis Province",
         type: "Dungeon",
         level: 255,
         map: ""
     },
     map_3240: {
         name: "Maple Forest 24_2",
         area: "Grand Forest Area",
         type: "Field",
         level: 309,
         map: ""
     },
     map_3230: {
         name: "Maple Forest 24_1",
         area: "Grand Forest Area",
         type: "Field",
         level: 306,
         map: ""
     },
     map_3250: {
         name: "Maple Forest 24_3",
         area: "Grand Forest Area",
         type: "Field",
         level: 303,
         map: ""
     },
     map_3280: {
         name: "Maple Forest 25_3",
         area: "Grand Forest Area",
         type: "Field",
         level: 285,
         map: ""
     },
     map_1761: {
         name: "Grand Yard Mesa",
         area: "Kallis Province",
         type: "Field",
         level: 264,
         map: ""
     },
     map_1771: {
         name: "Sventimas Exile",
         area: "Kallis Province",
         type: "Field",
         level: 268,
         map: ""
     },
     map_3760: {
         name: "Isolated Plateau",
         area: "Kallis Province",
         type: "Field",
         level: 279,
         map: ""
     },
     map_3330: {
         name: "Fort of the Land 30_3",
         area: "Kallis Province",
         type: "Dungeon",
         level: 259,
         map: ""
     },
     map_3160: {
         name: "Monastery 22_5",
         area: "Grand Forest Area",
         type: "Dungeon",
         level: 331,
         map: ""
     },
     map_3300: {
         name: "White Tree 56_1",
         area: "Grand Forest Area",
         type: "Field",
         level: 316,
         map: ""
     },
     map_2121: {
         name: "White tree 23_3",
         area: "Grand Forest Area",
         type: "Field",
         level: 312,
         map: ""
     },
     map_2111: {
         name: "Maple forest 23_2",
         area: "Grand Forest Area",
         type: "Field",
         level: 308,
         map: ""
     },
     map_3270: {
         name: "Maple Forest 25_2",
         area: "Grand Forest Area",
         type: "Field",
         level: 288,
         map: ""
     },
     map_2131: {
         name: "Isolated plateau 28_1",
         area: "Kallis Province",
         type: "Field",
         level: 276,
         map: ""
     },
     map_1781: {
         name: "Kadume Cliff",
         area: "Kallis Province",
         type: "Field",
         level: 272,
         map: ""
     },
     map_1791: {
         name: "Steel Heights",
         area: "Kallis Province",
         type: "Field",
         level: 275,
         map: ""
     },
     map_1831: {
         name: "Kalejimas Visiting Room",
         area: "Kallis Province",
         type: "Dungeon",
         level: 283,
         map: ""
     },
     map_3150: {
         name: "Monastery 22_4",
         area: "Grand Forest Area",
         type: "Dungeon",
         level: 328,
         map: ""
     },
     map_3140: {
         name: "White tree 22_3",
         area: "Grand Forest Area",
         type: "Field",
         level: 325,
         map: ""
     },
     map_3130: {
         name: "White tree 22_2",
         area: "Grand Forest Area",
         type: "Field",
         level: 322,
         map: ""
     },
     map_2101: {
         name: "White tree 23_1",
         area: "Grand Forest Area",
         type: "Field",
         level: 305,
         map: ""
     },
     map_3260: {
         name: "Maple Forest 25_1",
         area: "Grand Forest Area",
         type: "Field",
         level: 291,
         map: ""
     },
     map_3780: {
         name: "3cm lake 26_2",
         area: "Starlit Lake Area",
         type: "Field",
         level: 395,
         map: ""
     },
     map_1881: {
         name: "3Cm lake 83",
         area: "Starlit Lake Area",
         type: "Field",
         level: 383,
         map: ""
     },
     map_1891: {
         name: "3Cm lake 84",
         area: "Starlit Lake Area",
         type: "Field",
         level: 386,
         map: ""
     },
     map_3120: {
         name: "White tree 22_1",
         area: "Grand Forest Area",
         type: "Field",
         level: 318,
         map: ""
     },
     map_3110: {
         name: "White tree 21_2",
         area: "Grand Forest Area",
         type: "Field",
         level: 309,
         map: ""
     },
     map_1191: {
         name: "Kule Peak",
         area: "Grand Forest Area",
         type: "Field",
         level: 300,
         map: ""
     },
     map_3770: {
         name: "3cm lake 26_1",
         area: "Starlit Lake Area",
         type: "Field",
         level: 399,
         map: ""
     },
     map_1911: {
         name: "3Cm lake 86",
         area: "Starlit Lake Area",
         type: "Field",
         level: 394,
         map: ""
     },
     map_1901: {
         name: "3Cm lake 85",
         area: "Starlit Lake Area",
         type: "Field",
         level: 390,
         map: ""
     },
     map_3170: {
         name: "Fantasy Library 48_1",
         area: "Grand Forest Area",
         type: "Dungeon",
         level: 317,
         map: ""
     },
     map_3100: {
         name: "White tree 21_1",
         area: "Grand Forest Area",
         type: "Field",
         level: 312,
         map: ""
     },
     map_3060: {
         name: "Castle Field 20_3",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 448,
         map: ""
     },
     map_3040: {
         name: "Castle Field 20_1",
         area: "Kingdom Territory",
         type: "Field",
         level: 442,
         map: ""
     },
     map_1981: {
         name: "Castle 93",
         area: "Kingdom Territory",
         type: "Field",
         level: 408,
         map: ""
     },
     map_1921: {
         name: "3Cm lake 87",
         area: "Starlit Lake Area",
         type: "Field",
         level: 398,
         map: ""
     },
     map_3221: {
         name: "3cm lake 27_2",
         area: "Starlit Lake Area",
         type: "Field",
         level: 437,
         map: ""
     },
     map_3223: {
         name: "3cm lake 27_3",
         area: "Starlit Lake Area",
         type: "Field",
         level: 441,
         map: ""
     },
     map_3070: {
         name: "Castle Field 20_4",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 451,
         map: ""
     },
     map_3050: {
         name: "Castle Field 20_2",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 445,
         map: ""
     },
     map_1982: {
         name: "Castle 94",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 411,
         map: ""
     },
     map_1983: {
         name: "Castle 95",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 414,
         map: ""
     },
     map_1931: {
         name: "Star Tower 88",
         area: "Starlit Lake Area",
         type: "Dungeon",
         level: 403,
         map: ""
     },
     map_3220: {
         name: "3cm lake 27_1",
         area: "Starlit Lake Area",
         type: "Field",
         level: 434,
         map: ""
     },
     map_3030: {
         name: "Castle Dungeon 19_2",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 432,
         map: ""
     },
     map_3790: {
         name: "Closed Town 53_1",
         area: "Royal Territory",
         type: "Field",
         level: 459,
         map: ""
     },
     map_3080: {
         name: "Closed Town 20_5",
         area: "Kingdom Territory",
         type: "Field",
         level: 454,
         map: ""
     },
     map_3090: {
         name: "Closed Town 20_6",
         area: "Kingdom Territory",
         type: "Field",
         level: 457,
         map: ""
     },
     map_1984: {
         name: "Castle 96",
         area: "Kingdom Territory",
         type: "Field",
         level: 417,
         map: ""
     },
     map_1986: {
         name: "Castle 97",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 420,
         map: ""
     },
     map_1991: {
         name: "Closed Town 103",
         area: "Kingdom Territory",
         type: "Field",
         level: 454,
         map: ""
     },
     map_1006: {
         name: "Orsha",
         area: "Royal Territory",
         type: "City",
         level: 0,
         map: ""
     },
     map_1985: {
         name: "Castle 98",
         area: "Kingdom Territory",
         type: "Field",
         level: 420,
         map: ""
     },
     map_1988: {
         name: "Castle 101",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 424,
         map: ""
     },
     map_3020: {
         name: "Castle Dungeon 19_1",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 429,
         map: ""
     },
     map_1995: {
         name: "Closed Town 107",
         area: "Kingdom Territory",
         type: "Field",
         level: 467,
         map: ""
     },
     map_1993: {
         name: "Closed Town 105",
         area: "Kingdom Territory",
         type: "Field",
         level: 463,
         map: ""
     },
     map_1992: {
         name: "Closed Town 104",
         area: "Kingdom Territory",
         type: "Field",
         level: 457,
         map: ""
     },
     map_1987: {
         name: "Castle 99",
         area: "Kingdom Territory",
         type: "Field",
         level: 427,
         map: ""
     },
     map_1989: {
         name: "Castle 100",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 431,
         map: ""
     },
     map_1990: {
         name: "Castle 102",
         area: "Kingdom Territory",
         type: "Field",
         level: 435,
         map: ""
     },
     map_2000: {
         name: "Closed Dungeon 108",
         area: "Kingdom Territory",
         type: "Dungeon",
         level: 472,
         map: ""
     },
     map_1994: {
         name: "Closed Town 106",
         area: "Kingdom Territory",
         type: "Field",
         level: 460,
         map: ""
     },
     map_3000: {
         name: "Closed Town 18_1",
         area: "Kingdom Territory",
         type: "Field",
         level: 467,
         map: ""
     },
     map_3010: {
         name: "Closed Town 18_2",
         area: "Kingdom Territory",
         type: "Field",
         level: 470,
         map: ""
     }
     }
    }) //end of controller
  app.controller('tabControl', function() {
      this.tab = 1;
      this.selectTab = function(setTab){
          this.tab = setTab
      };
      this.isSelected = function(checkTab){
          return this.tab === checkTab;
      };
    }) //end of controller
  app.controller('monsterDb', function() {
    }) //end of controller
  //end of function
})();

