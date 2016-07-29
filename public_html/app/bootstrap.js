
(function (angular)
{
    'use strict';

    angular.module('application',
    [
        'engine',
        
        'application.practice'
    ])
    
    .config(function(contextProvider)
    {
        contextProvider.setCircumstance('Orientation', 'Development');
    })
    
    .config(function(engineProvider, memoryProvider, contextProvider, registerProvider)
    {
        engineProvider.setMemory(memoryProvider.getMemory());
        engineProvider.setContext(contextProvider.getContext());
        engineProvider.setRegister(registerProvider.getRegister());
    });

})(angular);
