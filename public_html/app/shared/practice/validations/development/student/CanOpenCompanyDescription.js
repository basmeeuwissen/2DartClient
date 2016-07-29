
(function()
{
    'use strict';
    
    namespace('application.practice.validations.development.student')
        .CanOpenCompanyDescription = validate;
    
    function validate()
    {
        console.log('Validate CanOpenCompanyDescription', 'Development -> student');
        
        return true;
    };

})();
