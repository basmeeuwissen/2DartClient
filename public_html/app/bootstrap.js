
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
    
    .config(function(engineProvider)
    {
        var resourceRegister = new engine.register.ResourceRegister('application'),
            memory = new engine.memory.Memory(),
            context = new engine.Context(),
            theEngine = new engine.Engine();
        
        theEngine.setContext(context);
        theEngine.setMemory(memory);
        theEngine.setRegister(resourceRegister);
        
        var typeRegister = resourceRegister.addResource('Test'),
            valueRegister = typeRegister.addType('Directive'),
            candidateRegister = valueRegister.addValue('Overview');

        candidateRegister.addCandidate({}, 'component-a');
        candidateRegister.addCandidate({'client': 'school'}, 'component-b');
        
        //context.setCircumstance('Client', 'School');
        
        engineProvider.setEngine(theEngine);
    });

})(angular);
