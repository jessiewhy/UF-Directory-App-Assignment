angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) 
  {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      $scope.listings.push({ 'code':$scope.code, 'building name': $scope.name, 'address':$scope.address });
        $scope.code='';
        $scope.name='';
        $scope.address='';
    };
    $scope.deleteListing = function(index){
         
    };
    $scope.showDetails = function(index) {

    };
  }
]
);