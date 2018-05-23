angular.module('NoteWrangler').directive('nwPageNav', function() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "assets/templates/directives/nwPageNav.html",
    controller: function($scope , $location){
      $scope.isPage = function(name){
        // \/notes($|\/)/
        return new RegExp("/" + name + "($|/)").test($location.path());
      }
    }
  }
});