
namespace('engine.exceptions');

(function()
{
    function CustomException(message)
    {
        this.name = "MemoryException";
        this.message = message;
        this.stack = (new Error()).stack;
    }
    
    CustomException.prototype = Object.create(Error.prototype);
    CustomException.prototype.constructor = CustomException;
    
    engine.exceptions.MemoryException = CustomException;
})();
