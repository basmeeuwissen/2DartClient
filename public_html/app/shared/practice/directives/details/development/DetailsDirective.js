
(function(angular)
{
    'use strict';
    
    angular
        .module('application.practice.directives.details.development')
        .directive('practiceDetailsDevelopment', Directive);

    function Directive()
    {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/2DartClient/app/shared/practice/directives/details/development/DetailsView.html',
            controller: 'PracticeDetailsDevelopmentController',
            controllerAs: 'controller'
        };
    }
    
})(angular);
