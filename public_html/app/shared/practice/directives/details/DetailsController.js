
(function(angular)
{
    'use strict';
    
    namespace('application.practice.directives.details')
        .DetailsController = Controller;

    function Controller($scope, $engine)
    {
        var self = this;
        
        self.canOpenCompanyDescription = function()
        {
            return $engine.run('Practice', 'Validation', 'CanOpenCompanyDescription');
        };
    }
    
})(angular);
