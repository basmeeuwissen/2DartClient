
(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.shared.componentA')
        .directive('componentA', ComponentADirective);

    function ComponentADirective()
    {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/2DartClient/app/shared/component-a/ComponentAView.html',
            controller: 'ComponentAController',
            controllerAs: 'controller'
        };
    }
    
})(angular);
