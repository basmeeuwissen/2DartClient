
(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.shared.componentB')
        .controller('ComponentBController', ComponentBController);

    function ComponentBController($scope)
    {
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from component B');
        };
        
        construct();
    }
    
})(angular);
