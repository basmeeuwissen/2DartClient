
namespace('engine.exceptions');

(function()
{
    function CustomException(name, circumstances)
    {
        var message = 'No candidate found for {0} with circumstances: {1}'.format(name, jQuery.param(circumstances));
        
        this.name = "NoCandidateFoundException";
        this.message = message;
        this.stack = (new Error()).stack;
    }
    
    CustomException.prototype = Object.create(Error.prototype);
    CustomException.prototype.constructor = CustomException;
    
    engine.exceptions.NoCandidateFoundException = CustomException;
})();
