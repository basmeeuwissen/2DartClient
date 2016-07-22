
(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.shared.dynamic')
        .controller('DynamicController', DynamicController);

    function DynamicController($scope)
    {
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from controller');
        };
        
        construct();
    }
    
})(angular);
