
(function()
{
    angular
        .module('engine')
        .provider('engine', EngineProvider);

    function EngineProvider()
    {
        var self = this;
        
        var engine = null;
        
        self.setEngine = function(theEngine)
        {
            engine = theEngine;
        };
        
        self.$get = [function()
        {
            return engine;
        }];
    }
})();
