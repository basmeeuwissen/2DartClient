
(function()
{
    angular
        .module('engine')
        .provider('context', ContextProvider);

    function ContextProvider()
    {
        var self = this;
        
        var theContext = null;
        
        var construct = function()
        {
            theContext = new engine.Context();
        };
        
        self.getContext = function()
        {
            return theContext;
        };
        
        self.setCircumstance = function(key, value)
        {
            theContext.setCircumstance(key, value);
        };
        
        self.$get = [function()
        {
            return theContext;
        }];
    
        construct();
    }
})();
