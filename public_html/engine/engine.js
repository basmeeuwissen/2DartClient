
(function()
{
    // Exceptions
    addScript("/engine/library/exceptions/MemoryException.js");
    addScript("/engine/library/exceptions/MemoryValueNotFoundException.js");
    addScript("/engine/library/exceptions/MultipleCandidatesException.js");
    addScript("/engine/library/exceptions/NoCandidateFoundException.js");
    addScript("/engine/library/exceptions/NotRunnableException.js");
    addScript("/engine/library/exceptions/ResourceNotFoundException.js");
    addScript("/engine/library/exceptions/TypeNotFoundException.js");
    addScript("/engine/library/exceptions/ValueNotFoundException.js");
    
    // Memory
    addScript("/engine/library/memory/ValueRegister.js");
    addScript("/engine/library/memory/Memory.js");
    
    // Register
    addScript("/engine/library/register/CandidateRegister.js");
    addScript("/engine/library/register/ValueRegister.js");
    addScript("/engine/library/register/TypeRegister.js");
    addScript("/engine/library/register/ResourceRegister.js");
    
    // Base
    addScript("/engine/library/Context.js");
    addScript("/engine/library/Engine.js");
    
    // Angular
    addScript("/engine/angular/EngineModule.js");
    addScript("/engine/angular/providers/EngineProvider.js");
    addScript("/engine/angular/services/EngineService.js");
    
    // Angular directives
    addScript("/engine/angular/directives/directive/DirectiveModule.js");
    addScript("/engine/angular/directives/directive/DirectiveController.js");
    addScript("/engine/angular/directives/directive/DirectiveDirective.js");
    
    function addScript(url)
    {
        document.write('<script type="text/javascript" src="/2DartClient' + url + '?seed=' + Math.random() + '"></script>');
    }
})();
