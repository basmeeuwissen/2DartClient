
namespace('engine');

(function()
{
    engine.Context = function()
    {
        var self = this;
        
        var circumstances = [];
        
        self.setCircumstance = function(key, value)
        {
            key = key.toLowerCase();
            
            if (typeof value === 'string')
            {
                value = value.toLowerCase();
            }
            
            circumstances[key] = value;
        };
        
        self.getCircumstance = function(key)
        {
            key = key.toLowerCase();
            
            return circumstances[key];
        };
        
        self.hasCircumstance = function(key)
        {
            return self.getCircumstance(key) !== undefined;
        };
        
        self.removeCircumstance = function(key)
        {
            key = key.toLowerCase();
            
            circumstances[key] = undefined;
        };
        
        self.getCircumstances = function()
        {
            return circumstances;
        };
    };
})();
