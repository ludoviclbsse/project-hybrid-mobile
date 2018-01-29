angular.module('starter.controllers', [])
.controller('ProvidersCtrl', function($scope, BackendAPI) {

  $scope.ServiceProviders = BackendAPI.providers()
  .then(function(res){
    $scope.ServiceProviders = res.data;
    console.log(res);
  })
  .catch(function(err) {
    console.log("Connection error : "+ JSON.stringify(err));
  })
  .finally(function() {
    console.log("Finish ");
  });
})

.controller('SectionsCtrl', function($scope, BackendAPI, $stateParams, $state) {

  $scope.ProvidersSections = BackendAPI.get_sections()
  .then(function(res){
    $scope.ProvidersSections = res.data;
    console.log(res);
  })
  .catch(function(err) {
    console.log("Connection error : "+ JSON.stringify(err));
  })
  .finally(function() {
    console.log("Finish ");
  });

  $scope.currentNews=$stateParams.newsCode;
//  $scope.sections=NewsSections.all();
  $scope.goToSection= function(sect){
    $state.go('sections',{ServiceProvider: sect.ServiceProvider, section: sect.title, url: sect.url});
  };
}

/*
.controller('DashCtrl', function($scope) {

})*/

/*
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  console.log($scope.chats);
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

})
*/
);
