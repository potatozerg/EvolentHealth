describe('mainCtrl', () => {
  beforeEach(module('mainApp'));
  let $controller, $location, $rootScope, $scope, $window, controller;

  beforeEach(inject((_$controller_, _$location_, _$rootScope_, _$window_) => {

    $location = _$location_;
    $rootScope = _$rootScope_;
    $window = _$window_;
    $controller = _$controller_;
    spyOn($location, 'path');
    $scope = $rootScope.$new();
    controller =  $controller('mainCtrl', { $scope: $scope, $location: $location, $rootScope: $rootScope, $window: $window});
  }));

  it('changeView', () => {

    $scope.changeView('table');
    expect($location.path).toHaveBeenCalledWith('/home');
    $scope.changeView('list');
    expect($location.path).toHaveBeenCalledWith('/list');
    $scope.changeView('detail');
    expect($location.path).toHaveBeenCalledWith('/detail');
  });

  it('detailView', () => {

    const c = {
      firstName: 'Samuel',
      lastName: 'Liu',
      email: 'yukunliu1993@gmail.com',
      phoneNumber: 2084409791,
      status: 'Active'
    }
    const i = 1;

    $scope.detailView(c, i);
    expect($location.path).toHaveBeenCalledWith('/detail');
    expect($rootScope.new.firstName).toBe(c.firstName);
    expect($rootScope.index).toBe(i);

  });


});
