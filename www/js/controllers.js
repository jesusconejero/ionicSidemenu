angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    function($scope, $cordovaCamera){
        module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  $scope.takePicture = function() {
    var options = { 
        quality : 75, 
        destinationType : Camera.DestinationType.DATA_URL, 
        sourceType : Camera.PictureSourceType.CAMERA, 
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      alert("Que wena Conejo!");
    }, function(err) {
      alert("Mal Conejo, Mal!s");
    });
  }
});

    }
    
    
    function($scope, $cordovaBarcodeScanner){
        module.controller('BarcodeScannerCtrl', function($scope, $cordovaBarcodeScanner) {

  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert("Que wena Conejo!");

    }, function(err) {
      alert("Mal Conejo, Mal!s");

    });
  };

  // NOTE: encoding not functioning yet
  $scope.encodeData = function() {
    $cordovaBarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com").then(function(success) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user

    });      
  }
});

    }
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
