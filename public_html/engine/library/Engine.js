
namespace('engine');

(function()
{
    var MissingContextException = engine.exceptions.MissingContextException,
        MissingRegisterException = engine.exceptions.MissingRegisterException,
        NotRunnableException = engine.exceptions.NotRunnableException;
    
    engine.Engine = function()
    {
        var self = this;
        
        var context = null,
            register = null,
            memory = null;
        
        self.getContext = function()
        {
            return context;
        };
        
        self.setContext = function(theContext)
        {
            context = theContext;
        };
        
        self.getMemory = function()
        {
            return memory;
        };
        
        self.setMemory = function(theMemory)
        {
            memory = theMemory;
        };
        
        self.getRegister = function()
        {
            return register;
        };
        
        self.setRegister = function(theRegister)
        {
            register = theRegister;
        };
        
        self.find = function(resourceName, typeName, valueName)
        {
            validate();
            
            return register
                    .getResource(resourceName, true)
                    .getType(typeName, true)
                    .getValue(valueName, true)
                    .findCandidate(context.getCircumstances(), true)
                    .value;
        };
        
        self.run = function(resourceName, typeName, valueName)
        {
            var value = self.find(resourceName, typeName, valueName);
            
            if (typeof value !== 'function')
            {
                throw new NotRunnableException(resourceName, typeName, valueName);
            }
            
            value();
        };
        
        var validate = function()
        {
            if (context === null)
            {
                throw new MissingContextException();
            }

            if (register === null)
            {
                throw new MissingRegisterException();
            }
        };
    };
})();
