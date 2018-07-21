const app = angular.module('mainApp', ['ngRoute', 'controllers']);

app.controller('mainCtrl', ['$scope', '$location', '$rootScope', '$window',
  function($scope, $location, $rootScope, $window){

  const initialize = () => {
    if ($window.localStorage.getItem('contacts')) {
      $scope.contacts = JSON.parse($window.localStorage.getItem('contacts'));
    } else {
      $scope.contacts = [
        {
          firstName: 'Samuel',
          lastName: 'Liu',
          email: 'yukunliu1993@gmail.com',
          phoneNumber: 2084409791,
          status: 'Active'
        },
        {
          firstName: 'Tom',
          lastName: 'Brady',
          email: 'tombrady@gmail.com',
          phoneNumber: 1234567890,
          status: 'Inactive'
        },
        {
          firstName: 'Lebron',
          lastName: 'James',
          email: 'lj@gmail.com',
          phoneNumber: 3456789012,
          status: 'Active'
        },
        {
          firstName: 'Stephen',
          lastName: 'Curry',
          email: 'sc@gmail.com',
          phoneNumber: 4567890123,
          status: 'Active'
        },
        {
          firstName: 'C',
          lastName: 'Ronaldo',
          email: 'CR7@gmail.com',
          phoneNumber: 5678901234,
          status: 'Inactive'
        },
        {
          firstName: 'Lionel',
          lastName: 'Messi',
          email: 'LM@gmail.com',
          phoneNumber: 6789012345,
          status: 'Active'
        },
        {
          firstName: 'Paul',
          lastName: 'Pogba',
          email: 'PP@gmail.com',
          phoneNumber: 7890123456,
          status: 'Active'
        },
      ];
    }
    $rootScope.contacts = $scope.contacts;
  };

  initialize();

  $scope.style = [];
  for (c of $scope.contacts) {
    if (c.status === 'Inactive'){
      $scope.style.push({'background-color': '#f2f2f2'});
    } else {
      $scope.style.push({'background-color': 'white'});
    }
  }

  $scope.changeView = view => {

    if(view === 'table') {
      $location.path('/home');
    } else if (view === 'list') {
      delete $scope.documents;
      $location.path('/list');
    } else {
      $rootScope.method = 'create';
      $location.path('/detail');
    }
  };

	// when click on a document, enter to the detail page
	$scope.detailView = (c, i) => {

		$rootScope.method = 'update';
    $rootScope.new = {
  		firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      status: 'activate'
  	};
		$rootScope.new.firstName = c.firstName;
    $rootScope.new.lastName = c.lastName;
    $rootScope.new.email = c.email;
    $rootScope.new.phoneNumber = c.phoneNumber;
    $rootScope.new.status = c.status;
    $rootScope.index = i;
    $location.path('/detail');
	};

}]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

	$routeProvider.when("/",{
    redirectTo:"/home"
	}).when("/home",{
		templateUrl:"templates/main.html",
		controller: "mainCtrl"
	}).when("/list",{
		templateUrl:"templates/list/list.html",
		controller: "listCtrl"
	}).when("/detail",{
		templateUrl:"templates/detail/detail.html",
		controller: "detailCtrl"
	}).otherwise({
		redirectTo:"/home"
	})
	$locationProvider.html5Mode(true);
}]);
