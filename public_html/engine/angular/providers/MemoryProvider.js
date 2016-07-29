
(function()
{
    angular
        .module('engine')
        .provider('memory', MemoryProvider);

    function MemoryProvider()
    {
        var self = this;
        
        var theMemory = null;
        
        var construct = function()
        {
            theMemory = new engine.memory.Memory();
        };
        
        self.getMemory = function()
        {
            return theMemory;
        };
        
        self.setValue = function(keys, value)
        {
            theMemory.set(keys, value);
        };
        
        self.$get = [function()
        {
            return theMemory;
        }];
    
        construct();
    }
})();
