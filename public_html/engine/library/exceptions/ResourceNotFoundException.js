
namespace('engine.exceptions');

(function()
{
    function CustomException(name)
    {
        var message = 'The resource \'{0}\' could not be found'.format(name);
        
        this.name = "ResourceNotFoundException";
        this.message = message;
        this.stack = (new Error()).stack;
    }
    
    CustomException.prototype = Object.create(Error.prototype);
    CustomException.prototype.constructor = CustomException;
    
    engine.exceptions.ResourceNotFoundException = CustomException;
})();
