
(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.shared.dynamic')
        .directive('dependency', DynamicDirective);

    function DynamicDirective($compile)
    {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/2DartClient/app/shared/dynamic/DynamicView.html',
            controller: 'DynamicController',
            controllerAs: 'controller',
            link: function(scope, element, attr)
            {
                var child = angular.element('<{0}></{0}>'.format(scope.name));
                
                element.append(child);
                
                $compile(child)(scope);
            },
            scope:
            {
                name: '='
            }
        };
    }
    
})(angular);
