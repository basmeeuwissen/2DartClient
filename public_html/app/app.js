/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function()
{
    addScript("/app/shared/common/CommonModule.js");
    addScript("/app/shared/common/AuthenticationService.js");
    addScript("/app/shared/common/EventService.js");
    addScript("/app/shared/common/RequestService.js");
    
    addScript("/app/shared/user/UserModule.js");
    addScript("/app/shared/user/UserService.js");
    
    addScript("/app/components/application/ApplicationModule.js");
    addScript("/app/components/application/ApplicationController.js");
    
    addScript("/app/components/game/GameModule.js");
    addScript("/app/components/game/GameController.js");
    
    addScript("/app/components/home/HomeModule.js");
    addScript("/app/components/home/HomeController.js");
    
    addScript("/app/components/lobby/LobbyModule.js");
    addScript("/app/components/lobby/LobbyController.js");
    
    addScript("/app/components/login/LoginModule.js");
    addScript("/app/components/login/LoginController.js");
    
    addScript("/app/components/register/RegisterModule.js");
    addScript("/app/components/register/RegisterController.js");
    
    addScript("/app/components/user/UserModule.js");
    addScript("/app/components/user/UserController.js");
    
    addScript("/app/bootstrap.js");
    addScript("/app/routes.js");
    
    function addScript(url)
    {
        document.write('<script type="text/javascript" src="' + url + '?seed=' + Math.random() + '"></script>');
    }
})();