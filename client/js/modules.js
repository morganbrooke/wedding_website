var wedding_app = angular.module('wedding_app', ['ngRoute', 'auth0', 'angular-storage', 'angular-jwt'])
.config(function (authProvider) {
  authProvider.init({
    domain: 'morgan-brooke.auth0.com',
    clientID: '0EpR7Z6S7VAIV2J6wYyqM1H2zqtco14Y'
  });
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});