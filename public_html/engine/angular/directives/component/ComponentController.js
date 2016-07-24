
(function(angular)
{
    'use strict';
    
    angular
        .module('engine.directive.component')
        .controller('ComponentController', ComponentController);

    function ComponentController($scope)
    {
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from controller');
        };
        
        construct();
    }
    
})(angular);
