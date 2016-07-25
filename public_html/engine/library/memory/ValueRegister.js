
namespace('engine.memory');

(function()
{
    engine.memory.ValueRegister = function()
    {
        var self = this;
        
        var values = [];
        
        self.get = function(keys)
        {
            var values = getValues(keys, false),
                key = getKey(keys);
            
            return values[key];
        };
        
        self.set = function(keys, value)
        {
            var values = getValues(keys, true),
                key = getKey(keys);
            
            values[key] = value;
        };
        
        self.has = function(keys)
        {
            return self.get(keys) !== undefined;
        };
        
        self.remove = function(keys)
        {
            var values = getValues(keys, false),
                key = getKey(keys);
            
            return values[key] = undefined;
        };
        
        var getValues = function(keys, create)
        {
            var result = values,
                key;
            
            if (keys instanceof Array)
            {
                for (var index = 0; index < keys.length; index++)
                {
                    key = keys[index].toLowerCase();
                    
                    if (result[key] === undefined)
                    {
                        if (create !== true)
                        {
                            return [];
                        }
                        
                        result[key] = [];
                    }
                    
                    result = result[key];
                }
            }
            
            return result;
        };
        
        var getKey = function(keys)
        {
            if (keys instanceof Array)
            {
                return keys[keys.length - 1].toLowerCase();
            }
            
            return keys.toLowerCase();
        };
    };
})();
