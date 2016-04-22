![alt tag](http://res.cloudinary.com/dmj8qtant/image/upload/c_limit,w_600/v1458021789/txoesa3ldl3ggvlqjmpi.jpg)
# Tree Of Savior Monster Map
A map with monster data inputed in. Made to help orient the Tree of Savior Translation group on What monsters are found where.


This was my first app. Very crude and disorganized code. 'Monstall' isn't even proper JSON. A lot of repeat angularized HTML.

## Tech
AngularJS + filtering a list via multiple dropdown options.
JQuery mouseover map popup

### Niceties

CRUD functions: editing monsters. Search w/ 'search results' popup: ng-filter an object via multiple parameters. Monsters based off map-zone AND floor.

### Details
#### CSS:
 1. Toggling buttons and tabs -> stay lit up without outlines, etc.
 2. "X" for closing pseudoelement (first use) 
 3. Using a fullscreen clickblocker that darkens rest of site when user is focused on editing a monster
 4. Vertical Text

#### JS:

 1. Loading JSON Data via HTML
 2. Tabs, floors, selected zone control.
 3. Use of Angular Filters to filter Ng-Repeat
 4. Use of Ng-Switch for picture/icon handling
 5. Used MonsterDB.monstall.indexOf(monster) instead of $index to track monsters due to issues with non-sequential lists.
 6. Vertical Delete Button

###### EDIT MONSTER MODE

 7. Use of a transparent, Full-screen DIV layer to block clicks outside edited object
 8. Use of ```angular.copy($scope.MonsterDB.monstall[index], $scope.editedItem);```
      - copy original to form-controlled 'editedItem' to edit.
      - reverse to save -> ```angular.copy($scope.editedItem, $scope.MonsterDB.monstall[index]);```

###### SEARCH MONSTERS MODE

 9. Share access of data between more than one Controller via Services.
 10. Angular Filter Array of Objects by 'searched for' object. Basic Name search and attribute searching.

###### HINDSIGHT:

 1. Should've used an Array of JSON for Map Data, ng-repeat prefers Arrays. With ng-style, could use JSON for positioning
 2. More ng-repeat to avoid repeated HTML elements.
 3. Split Controllers, or just do it in one controller and not have to use a service.
