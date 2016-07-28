
namespace('engine');

(function()
{
    var Context = engine.Context,
        Register = engine.register.Register,
        Memory = engine.memory.Memory;
    
    var MissingContextException = engine.exceptions.MissingContextException,
        MissingRegisterException = engine.exceptions.MissingRegisterException;
    
    engine.Engine = function()
    {
        var self = this;
        
        var context = null,
            register = null,
            memory = null;
        
        var construct = function()
        {
            context = new Context();
            register = new Register();
            memory = new Memory();
        };
        
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
                    .findCandidate(context.getCircumstances(), true);
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
        
        construct();
    };
})();
