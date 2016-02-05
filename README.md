# Tree Of Savior Monster Map
A map with monster data inputed in. Made to help orient the Tree of Savior Translation group on What monsters are found where.


This was my first app. Very crude and disorganized code. 'Monstall' isn't even proper JSON. A lot of repeat angularized HTML.

Major Takeaways:
1. Loading JSON Data via HTML
2. Loading Data in Services to be shared between Controllers
3. Use of Angular Filters to filter Ng-Repeat
4. Use of Ng-Switch for picture/icon handling
5. Used MonsterDB.monstall.indexOf(monster) instead of $index to track monsters due to issues with non-sequential lists.
6. Vertical Delete Button

EDIT MODE
4. Use of a transparent, Full-screen DIV layer to block clicks outside edited object
5. Use of angular.copy($scope.MonsterDB.monstall[index], $scope.editedItem);
      - copy original to form-controlled 'editedItem' to edit.
      - reverse to save -> angular.copy($scope.editedItem, $scope.MonsterDB.monstall[index]);
6. 

Should've:

1. Used a JSON for Map Data
