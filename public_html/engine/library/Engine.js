
namespace('engine');

(function()
{
    var Context = engine.Context,
        Register = engine.register.Register,
        Memory = engine.memory.Memory;
    
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
        
        self.getMemory = function()
        {
            return memory;
        };
        
        self.find = function(resourceName, typeName, valueName)
        {
            return register
                    .getResource(resourceName, true)
                    .getType(typeName, true)
                    .getValue(valueName, true)
                    .findCandidate(context.getCircumstances(), true);
        };
        
        construct();
    };
})();
