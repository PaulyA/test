'use strict';

// Declare app level module which depends on views, and components
angular.module('productManagement', [
  'ngRoute',
  'productManagement.view1',
  'productManagement.view2',
  'productManagement.products',
  'productManagement.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
