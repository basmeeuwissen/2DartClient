
(function(angular)
{
    'use strict';
    
    angular.module('application.practice.directives.details.qualifying',
    [
        
    ])
    
    .config(function(registerProvider)
    {
        registerProvider
            .addResource('Practice')
            .addType('Directive')
            .addValue('Details')
            .addCandidate({'orientation': 'qualifying'}, 'practice-details-qualifying');
    });

})(angular);
