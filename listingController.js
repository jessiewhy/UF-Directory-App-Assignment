angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) 
  {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({ 
        'code':$scope.code, 
        'buildingName': $scope.buildingName,
        'lat':$scope.lat,
        'long': $scope.long,
        'add': $scope.add});
      $scope.code='';
      $scope.buildingName='';
      $scope.lat='';
      $scope.long='';
      $scope.add='';
    };
    $scope.deleteListing = function(index){
         
    };
    $scope.showDetails = function(index) {

    };
  }
]
);