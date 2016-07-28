
namespace('engine.exceptions');

(function()
{
    function CustomException(circumstances)
    {
        var message = 'Multiple candidates found for circumstances: {0}'.format(jQuery.param(circumstances));
        
        this.name = "MultipleCandidatesException";
        this.message = message;
        this.stack = (new Error()).stack;
    }
    
    CustomException.prototype = Object.create(Error.prototype);
    CustomException.prototype.constructor = CustomException;
    
    engine.exceptions.MultipleCandidatesException = CustomException;
})();
