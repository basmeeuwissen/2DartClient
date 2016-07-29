
(function()
{
    angular
        .module('engine')
        .service('$engine', EngineService);

    function EngineService(engine, $location)
    {
        var self = this;
        
        self.find = function(resourceName, typeName, valueName)
        {
            return engine.find(resourceName, typeName, valueName);
        };
        
        self.run = function(resourceName, typeName, valueName)
        {
            return engine.run(resourceName, typeName, valueName);
        };
        
        self.route = function(resourceName, typeName, valueName)
        {
            var path = engine.find(resourceName, typeName, valueName);
            
            $location.path(path);
        };
        
        self.getMemoryValue = function(keys, require)
        {
            return engine.getMemory().get(keys, require);
        };
        
        self.setMemoryValue = function(keys, value)
        {
            engine.getMemory().set(keys, value);
        };
        
        self.hasMemoryValue = function(keys)
        {
            return engine.getMemory().has(keys);
        };
        
        self.setCircumstance = function(key, value)
        {
            engine.getContext().setCircumstance(key, value);
        };
        
        self.getCircumstance = function(key)
        {
            return engine.getContext().getCircumstance(key);
        };
        
        self.hasCircumstance = function(key)
        {
            return engine.getContext().hasCircumstance(key);
        };
    }
})();
