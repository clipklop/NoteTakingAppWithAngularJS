angular.module('ngGravatar', []);

const gravatar = angular.module('ngGravatar');

gravatar.directive("gravatar", function(Gravatar) {
  return {
    replace: true,
    restrict: "E",
    template: "<img ng-src='{{gravatarUrl()}}'>",
    scope: {email: "="},
    link: function(scope) {
      scope.gravatarUrl = function() {
        return Gravatar(scope.email);
      }
    }
  }
});

gravatar.provider('Gravatar', function() {
  let imageSize = 50, url = "http://www.gravatar.com/avatar/";

  this.setSize = function(value) {
    imageSize = value;
  }

  this.$get = function() {
    return function(email) { 
      return url + CryptoJS.MD5(email) + "?size=" + imageSize.toString();
    }
  }
});