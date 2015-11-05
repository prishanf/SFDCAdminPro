
/*jsforce.browser.init({
  clientId: '3MVG9xOCXq4ID1uHAnPPZCSnxRBzZamdw0VQGiv4KJLw43CcwoxqJisQ5nU9X8smAHp0qZ1pKVROndyq60ROk',
  redirectUri: 'https://prishanf.github.io/SFDCAdminPro/callback.html',
  proxyUrl: 'https://node-salesforce-proxy.herokuapp.com/proxy/'
});
jsforce.browser.on('connect', function(conn) {
  console.log('connect:', conn);
  var userInfo;
  console.log('sf_user_info:', localStorage.getItem('sf_user_info'));
  if (localStorage.getItem('sf_user_info')) {
    userInfo = JSON.parse(localStorage.getItem('sf_user_info'));
    renderProfile();
    return;
  }
  conn.identity().then(function(res) {
    console.log('id:', res);
    userInfo = {
      username: res.username,
      photos: res.photos
    };
    localStorage.setItem('sf_user_info', JSON.stringify(userInfo));
    renderProfile();
  });
  function renderProfile() {
    $('#navigation.navbar-right li.login').hide();
    var profileMenu = $('#navigation.navbar-right li.profile').show();
    profileMenu.find('.profile-icon').empty().append(
      $('<img>').attr('src',
        userInfo.photos && userInfo.photos.thumbnail ?
        userInfo.photos.thumbnail + '?oauth_token=' + conn.accessToken :
        '/images/profile-none.png'
      )
    );
    profileMenu.find('.profile-name').text(userInfo.username).attr('title', userInfo.username);
    window.jsConn=jsforce.browser.connection;
  }
});
jsforce.browser.on('disconnect', function() {
  console.log('disconnect function called',localStorage.getItem('sf_user_info'));
  localStorage.removeItem('sf_user_info')
  $('#navigation.navbar-right li.login').show();
  $('#navigation.navbar-right li.profile').hide();
  window.location=''
});
*/


conn = jsforce.browser.connection;
console.log('conn',conn);

var app = angular.module('SFDCAdminHelper',['ngRoute','ngTable','ngSanitize','SFDCAdminHelperControllers','SFDCAdminHelperServices']);
var sfdcConn = jsforce.browser.connection;
console.log(app);

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
      when('/', {
        templateUrl: 'partials/home.html',
        controller: '',
        controllerAs: "ctrl"
      })
  }]);
