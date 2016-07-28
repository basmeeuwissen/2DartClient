/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function()
{
    addScript("/app/shared/component-a/ComponentAModule.js");
    addScript("/app/shared/component-a/ComponentAController.js");
    addScript("/app/shared/component-a/ComponentADirective.js");
    
    addScript("/app/shared/component-b/ComponentBModule.js");
    addScript("/app/shared/component-b/ComponentBController.js");
    addScript("/app/shared/component-b/ComponentBDirective.js");
    
    addScript("/app/bootstrap.js");
    addScript("/app/routes.js");
    
    function addScript(url)
    {
        document.write('<script type="text/javascript" src="/2DartClient' + url + '?seed=' + Math.random() + '"></script>');
    }
})();