
(function(angular)
{
    'use strict';
    
    angular.module('application.practice.directives.details.development',
    [
        
    ])
    
    .config(function(registerProvider)
    {
        registerProvider
            .addResource('Practice')
            .addType('Directive')
            .addValue('Details')
            .addCandidate({'orientation': 'development'}, 'practice-details-development');
    });

})(angular);
