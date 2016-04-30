/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.components.game')
        .controller('GameController', GameController);
    
    function GameController($scope)
    {
        $scope.name = 'Bas';
        
        console.log('Hallo wereld!');
    }
    
})(angular);