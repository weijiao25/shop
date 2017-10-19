var app=angular.module("app",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("shoppingcar")
    $stateProvider
        .state('shoppingcar',{
            url:"/shoppingcar",
            templateUrl:"./app/view/shop.html",
            controller:"parentcontroller"
        })
})
