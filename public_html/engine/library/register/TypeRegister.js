
namespace('engine.register');

(function()
{
    var ValueRegister = engine.register.ValueRegister;
    
    var TypeNotFoundException = engine.register.TypeNotFoundException;
    
    engine.register.TypeRegister = function(name)
    {
        var self = this;
        
        var types = [];
        
        self.getName = function()
        {
            return name;
        };
        
        self.addType = function(name)
        {
            name = name.toLowerCase();
            
            if (types[name] === undefined)
            {
                types[name] = new ValueRegister(name);
            }
            
            return types[name];
        };
        
        self.getTypes = function()
        {
            return types;
        };
        
        self.getType = function(name, require)
        {
            name = name.toLowerCase();
            
            if (types[name] === undefined && require === true)
            {
                throw new TypeNotFoundException(name);
            }
            
            return types[name];
        };
    };
})();