var app=angular.module('myModule',['ui.router']);
app.config(function ($stateProvider) {
        var test = {
            name: 'product',
            url: '/product',
            templateUrl: '../view/product.html'
        }
        $stateProvider.state(test);
});