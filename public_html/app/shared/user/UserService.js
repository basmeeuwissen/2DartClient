/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular)
{
    'use strict';
    
    angular
        .module('twodart.shared.user')
        .service('userService', UserService);

    function UserService($http, authService)
    {
        var self = this;
        
        self.login = function(email, password, onSuccess)
        {
            var uri = '/api/players/me';
            
            authService.createAuthentication(email, password);
            
            $http.get(uri)
                .success(function(player)
                {
                    authService.setAuthenticator(player);
                    authService.storeAuthentication(false);
                    onSuccess();
                })
                .error(function()
                {
                    console.log('error');
                });
        };
        
        self.logout = function()
        {
            authService.deleteAuthentication();
        };
        
        self.getUser = function()
        {
            return authService.getAuthenticator();
        };
        
        self.hasUser = function()
        {
            return authService.isAuthenticated();
        };
    }
    
})(angular);