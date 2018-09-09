angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) 
  {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      $scope.listings.push({ 'code':$scope.code, 'name': $scope.name, 'address':$scope.address, 'coordinates': {'latitude': $scope.latitude, 'longitude':$scope.longitude}});
        $scope.code='';
        $scope.name='';
        $scope.address='';
        $scope.latitude='';
        $scope.longitude='';

    };
    $scope.deleteListing = function(index){
      $scope.listings.splice(index,1);
      if(Sscope.listings.length()===0) $scope.listings=[];
    };
    $scope.showDetails = function(index) {
      $scope.Longitude="N/A";
      $scope.Latitude="N/A";
      $scope.Address="N/A";
      var item=$scope.listings[index];
      $scope.Longitude=item.coordinates.longitude;
      $scope.Latitude=item.coordinates.latitude;
      $scope.Address=item.address;
    };
  }
]
);