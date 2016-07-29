
(function (angular)
{
    'use strict';

    angular.module('twodart',
    [
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        
        'engine',
        
        'twodart.shared.componentA',
        'twodart.shared.componentB'
    ])
    
    .config(function(memoryProvider)
    {
        
    })
    
    .config(function(contextProvider)
    {
        contextProvider.setCircumstance('Client', 'School');
    })
    
    .config(function(registerProvider)
    {
        var typeRegister = registerProvider.addResource('Test'),
            valueRegister = typeRegister.addType('Directive'),
            candidateRegister = valueRegister.addValue('Overview');

        candidateRegister.addCandidate({}, 'component-a');
        candidateRegister.addCandidate({'client': 'school'}, 'component-b');
    })
    
    .config(function(engineProvider, memoryProvider, contextProvider, registerProvider)
    {
        engineProvider.setMemory(memoryProvider.getMemory());
        engineProvider.setContext(contextProvider.getContext());
        engineProvider.setRegister(registerProvider.getRegister());
    });

})(angular);
