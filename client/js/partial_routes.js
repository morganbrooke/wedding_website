wedding_app.config(function($routeProvider) {
  $routeProvider
  .when('/location', {
    templateUrl: 'partials/location.html'
  })
  .when('/history', {
    templateUrl: 'partials/history.html'
  })
  .when('/weddingparty', {
  	templateUrl: 'partials/weddingparty.html'
  })
  .when('/accomidations', {
  	templateUrl: 'partials/accomidations.html'
  })
  .when('/request', {
  	templateUrl: 'partials/request.html',
    controller: 'requestsController',
    controllerAs: 'rc'
  })
  .when('/', {
  	templateUrl: 'partials/login.html',
  	controller: 'loginController',
    controllerAs: 'lc'
  })
  // .when({
  //   redirectTo: '/'
  // });
});