
(function()
{
    angular
        .module('engine')
        .provider('register', RegisterProvider);

    function RegisterProvider()
    {
        var self = this;
        
        var theRegister = null;
        
        var construct = function()
        {
            theRegister = new engine.register.ResourceRegister();
        };
        
        self.getRegister = function()
        {
            return theRegister;
        };
        
        self.addResource = function(resourceName)
        {
            return theRegister.addResource(resourceName);
        };
        
        self.$get = [function()
        {
            return theRegister;
        }];
    
        construct();
    }
})();
