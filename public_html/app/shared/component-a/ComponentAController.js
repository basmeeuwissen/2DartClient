
(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.shared.componentA')
        .controller('ComponentAController', ComponentAController);

    function ComponentAController($scope)
    {
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from component A');
        };
        
        construct();
    }
    
})(angular);
