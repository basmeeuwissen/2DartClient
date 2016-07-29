
(function()
{
    angular
        .module('engine')
        .provider('engine', EngineProvider);

    function EngineProvider()
    {
        var self = this;
        
        var theEngine = null;
        
        var construct = function()
        {
            theEngine = new engine.Engine();
        };
        
        self.setMemory = function(theMemory)
        {
            theEngine.setMemory(theMemory);
        };
        
        self.setContext = function(theContext)
        {
            theEngine.setContext(theContext);
        };
        
        self.setRegister = function(theRegister)
        {
            theEngine.setRegister(theRegister);
        };
        
        self.$get = [function()
        {
            return theEngine;
        }];
    
        construct();
    }
})();
