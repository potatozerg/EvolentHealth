angular.module('controllers')
  .controller('listCtrl', ['$scope', '$rootScope', '$window', function($scope, $rootScope, $window){

    // load data
    $scope.contacts = $rootScope.contacts;

    $scope.style = i => {
      if ($scope.contacts[i].status === 'Inactive'){
        return {'background-color': '#f2f2f2'};
      } else {
        return {'background-color': 'white'};
      }
    }

    // function to toggle status
    $scope.activate = c => {
      c.status === 'Active' ? c.status = 'Inactive' : c.status = 'Active';
      $rootScope.contacts = $scope.contacts;
      $window.localStorage.setItem('contacts', JSON.stringify($scope.contacts));
    }

    // Delete selected contact function
    $scope.delete = () => {
      const deleted = [];
      $scope.contacts.forEach(function(d, i) {
        if (d.delete) {
          deleted.push(i);
        }
      });
      while(deleted.length) {
        $scope.contacts.splice(deleted.pop(), 1);
      }
      $rootScope.contacts = $scope.contacts;
      $window.localStorage.setItem('contacts', JSON.stringify($scope.contacts));
    }

  }]);
