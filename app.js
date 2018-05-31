var app=angular.module('myModule',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('test',{
        url:'/test/:vietnam',
        templateUrl:'test.html',
            controller:'myController'
    });
}]);
app.controller('myController',['$scope','$stateParams',function ($scope,$stateParams) {
    $scope.value="Hello World";
    $scope.vietnam=$stateParams.vietnam;
    console.log($scope.vietnam);
}]);