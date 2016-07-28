
(function(angular)
{
    'use strict';
    
    angular
        .module('engine.directive.component')
        .directive('component', ComponentDirective);

    function ComponentDirective($compile, $engine)
    {
        return {
            restrict: 'E',
            //replace: true,
            transclude: false,
            templateUrl: '/2DartClient/engine/angular/directives/component/ComponentView.html',
            controller: 'ComponentController',
            controllerAs: 'controller',
            link: function(scope, element, attribute)
            {
                var componentName = $engine.find(scope.resource, 'Component', scope.name);
                
                var child = angular.element('<{0}></{0}>'.format(componentName));
                
                element.append(child);
                
                $compile(child)(scope);
            },
            scope:
            {
                resource: '=',
                name: '='
            }
        };
    }
    
})(angular);
