
(function(angular)
{
    'use strict';
    
    angular
        .module('application.practice.directives.details.qualifying')
        .controller('PracticeDetailsQualifyingController', Controller);

    function Controller($scope)
    {
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from qualifying details');
        };
        
        construct();
    }
    
})(angular);
