
namespace('engine.memory');

(function()
{
    var ValueRegister = engine.memory.ValueRegister;
    
    engine.memory.Memory = function()
    {
        var self = this;
        
        var scopes = [];
        
        var construct = function()
        {
            self.openScope();
        };
        
        self.openScope = function()
        {
            scopes.push(new ValueRegister());
        };
        
        self.closeScope = function()
        {
            if (scopes.length === 1)
            {
                // throw exception
            }
            
            scopes.pop();
        };
        
        self.getCurrentScope = function()
        {
            return scopes[scopes.length - 1];
        };
        
        self.get = function(keys, require)
        {
            var value = undefined;
            
            for (var index = scopes.length - 1; index >= 0; index--)
            {
                value = scopes[index].get(keys);
                
                if (value !== undefined)
                {
                    break;
                }
            }
            
            if (value === undefined && require === true)
            {
                // throw exception
            }
            
            return value;
        };
        
        self.set = function(keys, value)
        {
            var scope = self.getCurrentScope();
            
            scope.set(keys, value);
        };
        
        self.has = function(keys)
        {
            return self.get(keys) !== undefined;
        };
        
        self.remove = function(keys)
        {
            var scope = self.getCurrentScope();
            
            scope.remove(keys);
        };
        
        construct();
    };
})();
