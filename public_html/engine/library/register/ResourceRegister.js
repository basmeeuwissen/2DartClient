
namespace('engine.register');

(function()
{
    var TypeRegister = engine.register.TypeRegister;
    
    var ResourceNotFoundException = engine.register.ResourceNotFoundException;
    
    engine.register.ResourceRegister = function(name)
    {
        var self = this;
        
        var resources = [];
        
        self.getName = function()
        {
            return name;
        };
        
        self.addResource = function(name)
        {
            name = name.toLowerCase();
            
            if (resources[name] === undefined)
            {
                resources[name] = new TypeRegister(name);
            }
            
            return resources[name];
        };
        
        self.getResources = function()
        {
            return resources;
        };
        
        self.getResource = function(name, require)
        {
            name = name.toLowerCase();
            
            if (resources[name] === undefined && require === true)
            {
                throw new ResourceNotFoundException(name);
            }
            
            return resources[name];
        };
    };
})();
