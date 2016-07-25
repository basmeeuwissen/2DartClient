
namespace('engine.register');

(function()
{
    var CandidateRegister = engine.register.CandidateRegister;
    
    engine.register.CandidateRegister = function(name)
    {
        var self = this;
        
        var values = [];
        
        self.getName = function()
        {
            return name;
        };
        
        self.addValue = function(name)
        {
            name = name.toLowerCase();
            
            if (values[name] === undefined)
            {
                values[name] = new CandidateRegister(name);
            }
            
            return values[name];
        };
        
        self.getValues = function()
        {
            return values;
        };
        
        self.getValue = function(name, require)
        {
            name = name.toLowerCase();
            
            if (values[name] === undefined && require === true)
            {
                // throw execption
            }
            
            return values[name];
        };
    };
})();
