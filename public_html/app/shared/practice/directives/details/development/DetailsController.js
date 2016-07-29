
(function(angular)
{
    'use strict';
    
    angular
        .module('application.practice.directives.details.development')
        .controller('PracticeDetailsDevelopmentController', Controller);

    function Controller($scope)
    {
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from development details');
        };
        
        construct();
    }
    
})(angular);
