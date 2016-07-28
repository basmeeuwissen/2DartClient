
namespace('engine.exceptions');

(function()
{
    function CustomException(resourceName, typeName, valueName)
    {
        var message = 'The dependency is not runnable: {0} -> {1} -> {2}'.format(resourceName, typeName, valueName);
        
        this.name = "NotRunnableException";
        this.message = message;
        this.stack = (new Error()).stack;
    }
    
    CustomException.prototype = Object.create(Error.prototype);
    CustomException.prototype.constructor = CustomException;
    
    engine.exceptions.NotRunnableException = CustomException;
})();
