angular.module('controllers', [])
  .controller('detailCtrl', ['$scope', '$location', '$rootScope', '$window',
    function($scope, $location, $rootScope, $window){

    // initialize
  	$scope.new = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      status: 'Active'
  	};

    $scope.saveData = () => {
      $window.localStorage.setItem('detail', JSON.stringify($scope.new));
    }

    $scope.getData = () => {
      $scope.new = JSON.parse($window.localStorage.getItem('detail') || null);
    }

    // delete input function
  	const clear = () => {
      $scope.new.firstName = '';
      $scope.new.lastName = '';
      $scope.new.email = '';
      $scope.new.phoneNumber = '';
      $scope.new.status = 'Active';
  	};

    // if clicked an existing document
    if ($rootScope.new) {
      if ($rootScope.new.firstName){
        $scope.new = $rootScope.new;
      } else {
        // new or refreshed
        if ($rootScope.method === 'create') {
          clear();
        } else {
          // if page refreshed
          $scope.getData();
        }
      }
    } else {
      // new or refreshed
      if ($rootScope.method === 'create') {
        clear();
      } else {
        // if page refreshed
        $scope.getData();
      }
    }

    // back to Table view and delete input
    $scope.back = () => {
      clear();
      $location.path('/home');
    };

    $scope.save = () => {
      $window.localStorage.removeItem('detail');

      if ($rootScope.method === 'create') {
        $rootScope.contacts.push($scope.new);
      } else if ($rootScope.method === 'update') {
        $rootScope.contacts[$rootScope.index] = $scope.new;
      }

      $rootScope.new = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        status: 'Active'
    	};
      $window.localStorage.setItem('contacts', JSON.stringify($rootScope.contacts));

      $location.path('/home');
    };

    $scope.validation = i => {
      if (i === 0) {
        return $scope.contactForm.firstName.$valid;
      } else if (i === 1) {
        return $scope.contactForm.lastName.$valid;
      } else if (i === 2) {
        return $scope.contactForm.email.$valid;
      } else {
        return $scope.contactForm.phoneNumber.$valid;
      }
    };

    $scope.style = i => {
      if ($scope.validation(i)){
        return {'color': 'black'};
      } else {
        return {'color': 'red'};
      }
    };
  }]);
