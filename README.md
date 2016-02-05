# Tree Of Savior Monster Map
A map with monster data inputed in. Made to help orient the Tree of Savior Translation group on What monsters are found where.


This was my first app. Very crude and disorganized code. 'Monstall' isn't even proper JSON. A lot of repeat angularized HTML.

Major Takeaways:

 1. Loading JSON Data via HTML
 2. Tabs, floors, selected zone control.
 3. Use of Angular Filters to filter Ng-Repeat
 4. Use of Ng-Switch for picture/icon handling
 5. Used MonsterDB.monstall.indexOf(monster) instead of $index to track monsters due to issues with non-sequential lists.
 6. Vertical Delete Button

EDIT MODE

 7. Use of a transparent, Full-screen DIV layer to block clicks outside edited object
 8. Use of ```angular.copy($scope.MonsterDB.monstall[index], $scope.editedItem);```
      - copy original to form-controlled 'editedItem' to edit.
      - reverse to save -> ```angular.copy($scope.editedItem, $scope.MonsterDB.monstall[index]);```
SEARCH MODE

 9. Move info from Controller to Controller via Service
 10. Angular Filter Array of Objects by 'searched for' object. Basic Name search and attribute searching.

Should've:

 1. Used a JSON for Map Data
 2. More ng-repeat to avoid repeated HTML elements.
 3. Split Controllers, or just do it in one controller and not have to use a service.
