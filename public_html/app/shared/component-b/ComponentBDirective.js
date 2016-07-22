
(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.shared.componentB')
        .directive('componentB', ComponentBDirective);

    function ComponentBDirective()
    {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/2DartClient/app/shared/component-b/ComponentBView.html',
            controller: 'ComponentBController',
            controllerAs: 'controller'
        };
    }
    
})(angular);
