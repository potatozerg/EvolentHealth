describe('detailCtrl', () => {
  beforeEach(module('controllers'));
  let $controller, $location, $rootScope, $scope, $window, controller;

  beforeEach(inject((_$controller_, _$location_, _$rootScope_, _$window_) => {

    $location = _$location_;
    $rootScope = _$rootScope_;
    $window = _$window_;
    $controller = _$controller_;

    spyOn($window.localStorage, 'getItem');
    spyOn($window.localStorage, 'setItem');

    spyOn($location, 'path');

    $scope = $rootScope.$new();
    controller =  $controller('detailCtrl', { $scope: $scope, $location: $location, $rootScope: $rootScope, $window: $window});

    $scope.new = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      status: 'Active'
  	};
  }));

  it('saveData', () => {

    $scope.saveData();
    expect($window.localStorage.setItem).toHaveBeenCalled();
  });

  it('getData', () => {

    $scope.getData();
    expect($window.localStorage.getItem).toHaveBeenCalled();
  });

  it('back', () => {

    $scope.back();
    expect($location.path).toHaveBeenCalledWith('/home');
  });

  it('save', () => {

    $scope.save();
    expect($window.localStorage.setItem).toHaveBeenCalled();
    expect($location.path).toHaveBeenCalledWith('/home');
  });
});
