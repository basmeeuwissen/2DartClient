/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular)
{
    'use strict';
    
    angular.module('twodart').config(['$routeProvider', function($routeProvider)
    {
        $routeProvider.when('/',
        {
            templateUrl: '/app/components/home/HomeView.html',
            controller: 'HomeController',
            controllerAs: 'controller'
        });
        
        $routeProvider.when('/login',
        {
            templateUrl: '/app/components/login/LoginView.html',
            controller: 'LoginController',
            controllerAs: 'controller'
        });
        
        $routeProvider.when('/register',
        {
            templateUrl: '/app/components/register/RegisterView.html',
            controller: 'RegisterController',
            controllerAs: 'controller'
        });
        
        $routeProvider.when('/lobby',
        {
            templateUrl: '/app/components/lobby/LobbyView.html',
            controller: 'LobbyController',
            controllerAs: 'controller'
        });
        
        $routeProvider.when('/game',
        {
            templateUrl: '/app/components/game/GameView.html',
            controller: 'GameController',
            controllerAs: 'controller'
        });
        
        $routeProvider.when('/user',
        {
            templateUrl: '/app/components/user/UserView.html',
            controller: 'UserController',
            controllerAs: 'controller'
        });
        
        /*
        $routeProvider.when('/password-reset/:resetCode',
        {
            templateUrl: '/app/components/password-reset/PasswordResetView.html',
            controller: 'PasswordResetController',
            controllerAs: 'controller'
        });
        */
        
        /*
        $routeProvider.when('/forgot-password',
        {
            templateUrl: '/app/components/forgot-password/ForgotPasswordView.html',
            controller: 'ForgotPasswordController',
            controllerAs: 'controller'
        });
        */
        
        $routeProvider.when('/user',
        {
            templateUrl: '/app/components/user/UserView.html',
            controller: 'UserController',
            controllerAs: 'controller'
        });
        
        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

})(angular);