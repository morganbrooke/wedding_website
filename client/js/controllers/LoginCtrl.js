wedding_app.controller('loginController', ['$scope', '$http', 'auth', 'store', '$location',
function ($scope, $http, auth, store, $location) {
  $scope.login = function () {
    auth.signin({}, function (profile, token) {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      $location.path('/location');
    }, function (e) {
      console.log('error here', e);
      // Error callback
    });
  }
  $scope.logout = function() {
  auth.signout();
  store.remove('profile');
  store.remove('token');
  }
}]);