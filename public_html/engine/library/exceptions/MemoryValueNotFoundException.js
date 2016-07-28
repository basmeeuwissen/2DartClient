
namespace('engine.exceptions');

(function()
{
    function CustomException(key)
    {
        var message = 'No memory value found for: {0}';
        
        if (key instanceof Array)
        {
            message = message.format(key.join());
        }
        else
        {
            message = message.format(key);
        }
        
        this.name = "MemoryValueNotFoundException";
        this.message = message;
        this.stack = (new Error()).stack;
    }
    
    CustomException.prototype = Object.create(Error.prototype);
    CustomException.prototype.constructor = CustomException;
    
    engine.exceptions.MemoryValueNotFoundException = CustomException;
})();
