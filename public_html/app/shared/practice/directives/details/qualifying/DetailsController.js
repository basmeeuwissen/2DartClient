
(function(angular)
{
    'use strict';
    
    angular
        .module('application.practice.directives.details.qualifying')
        .controller('PracticeDetailsQualifyingController', Controller);

    var DetailsController = application.practice.directives.details.DetailsController;

    function Controller($scope, $engine)
    {
        DetailsController.call(this, $scope, $engine);
        
        var self = this;
        
        var construct = function()
        {
            console.log('Hello from qualifying details');
        };
        
        construct();
    }
    
})(angular);
