conn = jsforce.browser.connection;
console.log('conn',conn);

var app = angular.module('SFDCAdminHelper',['ngRoute','ngTable','ngSanitize','SFDCAdminHelperControllers','SFDCAdminHelperServices']);
var sfdcConn = jsforce.browser.connection;

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/objects', {
        templateUrl: 'partials/object-list.html',
        controller: 'SFDCObjectListController as ctrl'
      }).
      when('/objects/:objName', {
        templateUrl: 'partials/object-detail.html',
        controller: 'SFDCObjectDetailCtrl',
        controllerAs: "ctrl"
      }).
      when('/fieldNew/:objName', {
        templateUrl: 'partials/field-new.html',
        controller: 'SFDCFieldCreateCtrl',
        controllerAs: "ctrl"
      }).
      when('/addfields', {
        templateUrl: 'partials/add-fields.html',
      }).
      when('/', {
        templateUrl: 'partials/home.html',
        controller: '',
        controllerAs: "ctrl"
      })
  }]);
