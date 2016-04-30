/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.components.login')
        .controller('LoginController', LoginController);
    
    function LoginController($scope, userService)
    {
        var self = this;
        
        self.login = function()
        {
            userService.login($scope.email, $scope.password, function()
            {
                
                
                
            });
        };
    }
    
})(angular);