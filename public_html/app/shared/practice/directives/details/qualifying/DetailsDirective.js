
(function(angular)
{
    'use strict';
    
    angular
        .module('application.practice.directives.details.qualifying')
        .directive('practiceDetailsQualifying', Directive);

    function Directive()
    {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/2DartClient/app/shared/practice/directives/details/qualifying/DetailsView.html',
            controller: 'PracticeDetailsQualifyingController',
            controllerAs: 'controller'
        };
    }
    
})(angular);
