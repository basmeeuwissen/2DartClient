
(function(angular)
{
    'use strict';
    
    angular
        .module('engine.directives.directive')
        .directive('directive', DirectiveDirective);

    function DirectiveDirective($compile, $engine)
    {
        return {
            restrict: 'E',
            //replace: true,
            transclude: false,
            templateUrl: '/2DartClient/engine/angular/directives/directive/DirectiveView.html',
            controller: 'DirectiveController',
            controllerAs: 'controller',
            link: function(scope, element, attribute)
            {
                var directiveName = $engine.find(scope.resource, 'Directive', scope.name);
                
                var child = angular.element('<{0}></{0}>'.format(directiveName));
                
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
