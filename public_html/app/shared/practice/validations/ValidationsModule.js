
(function(angular)
{
    'use strict';
    
    angular.module('application.practice.validations',
    [
        
    ])
    
    .config(function(registerProvider)
    {
        registerProvider
            .addResource('Practice')
            .addType('Validation')
            .addValue('CanOpenCompanyDescription')
            .addCandidate({}, application.practice.validations.CanOpenCompanyDescription)
            .addCandidate({'orientation': 'qualifying'}, application.practice.validations.qualifying.CanOpenCompanyDescription)
            .addCandidate({'orientation': 'development', 'client': 'student'}, application.practice.validations.development.student.CanOpenCompanyDescription);
    });

})(angular);
