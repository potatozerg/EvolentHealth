describe('listCtrl', () => {
  beforeEach(module('controllers'));
  let $controller, $location, $rootScope, $scope, $window, controller;

  beforeEach(inject((_$controller_, _$location_, _$rootScope_, _$window_) => { //instantiate controller using $controller service

    $location = _$location_;
    $rootScope = _$rootScope_;
    $window = _$window_;
    $controller = _$controller_;

    $scope = $rootScope.$new();
    controller =  $controller('listCtrl', { $scope: $scope, $location: $location, $rootScope: $rootScope, $window: $window});

    $scope.contacts = [
      {
        status: 'Inactive',
        delete: true
      },
      {
        status: 'Active',
        delete: true
      }
    ];
  }));

  it('style', () => {

    expect($scope.style(0)['background-color']).toBe('#f2f2f2');
    expect($scope.style(1)['background-color']).toBe('white');
  });

  it('activate', () => {

    $scope.activate($scope.contacts[0]);
    $scope.activate($scope.contacts[1]);
    expect($scope.contacts[0].status).toBe('Active');
    expect($scope.contacts[1].status).toBe('Inactive');
  });

  it('delete', () => {

    $scope.delete();
    expect($scope.contacts.length).toBe(0);
  });

});
