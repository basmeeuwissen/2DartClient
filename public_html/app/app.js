
(function()
{
    addScript("/app/shared/practice/PracticeModule.js");
    
    addScript("/app/shared/practice/directives/DirectivesModule.js");
    addScript("/app/shared/practice/directives/details/DetailsModule.js");
    addScript("/app/shared/practice/directives/details/DetailsController.js");
    addScript("/app/shared/practice/directives/details/development/DetailsModule.js");
    addScript("/app/shared/practice/directives/details/development/DetailsController.js");
    addScript("/app/shared/practice/directives/details/development/DetailsDirective.js");
    addScript("/app/shared/practice/directives/details/qualifying/DetailsModule.js");
    addScript("/app/shared/practice/directives/details/qualifying/DetailsController.js");
    addScript("/app/shared/practice/directives/details/qualifying/DetailsDirective.js");
    
    addScript("/app/shared/practice/validations/ValidationsModule.js");
    addScript("/app/shared/practice/validations/CanOpenCompanyDescription.js");
    addScript("/app/shared/practice/validations/qualifying/CanOpenCompanyDescription.js");
    addScript("/app/shared/practice/validations/development/student/CanOpenCompanyDescription.js");
    
    addScript("/app/bootstrap.js");
    //addScript("/app/routes.js");
    
    function addScript(url)
    {
        document.write('<script type="text/javascript" src="/2DartClient' + url + '?seed=' + Math.random() + '"></script>');
    }
})();
