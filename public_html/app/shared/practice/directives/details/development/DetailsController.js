
(function(angular)
{
    'use strict';
    
    angular
        .module('application.practice.directives.details.development')
        .controller('PracticeDetailsDevelopmentController', Controller);

    var DetailsController = application.practice.directives.details.DetailsController;

    function Controller($scope, $engine)
    {
        DetailsController.call(this, $scope, $engine);
        
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from development details');
        };
        
        construct();
    }
    
})(angular);
