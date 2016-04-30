/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.components.home')
        .controller('HomeController', HomeController);

    function HomeController($scope, $location, userService)
    {        
        var construct = function()
        {
            if (userService.hasUser())
            {
                $location.path('/lobby');
            }
            else
            {
                $location.path('/login');
            }
        };
        
        construct();
    }
    
})(angular);