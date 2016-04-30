/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (angular, base64)
{
    'use strict';

    angular
        .module('twodart.shared.common')
        .service('authService', AuthenticationService);

    function AuthenticationService($window)
    {
        var self = this;

        var accessId = null;

        var accessKey = null;

        var authenticator = null;

        var construct = function()
        {
            restoreAuthentication();
        };

        self.getAccessId = function()
        {
            return accessId;
        };

        self.setAccessId = function(id)
        {
            accessId = id;
        };

        self.getAccessKey = function()
        {
            return accessKey;
        };

        self.setAccessKey = function(key)
        {
            accessKey = key;
        };

        self.setAuthenticator = function(user)
        {
            authenticator = user;
        };

        self.getAuthenticator = function()
        {
            return authenticator;
        };
        
        var createAuthorizationString = function(identifier, signature)
        {
            return base64.encode(identifier + ':' + signature);
        };

        self.createAuthorization = function()
        {
           return createAuthorizationString(accessId, accessKey);
        };

        self.isAuthenticated = function()
        {
            return (accessId !== null && accessKey !== null);
        };

        self.createAuthentication = function(identifier, password)
        {
            self.setAccessId(identifier);
            self.setAccessKey(password);
        };

        self.storeAuthentication = function(storeLocal)
        {
            var object =
            {
                accessId: accessId,
                accessKey: accessKey,
                authenticator: authenticator
            };

            var authentication = angular.toJson(object);
            
            if (storeLocal === undefined)
            {
                storeLocal = self.storedLocal();
            }
            
            var storage = (storeLocal === true) ? $window.localStorage : $window.sessionStorage;

            storage.setItem('authentication', authentication);
        };

        var restoreAuthentication = function()
        {
            var authentication = $window.sessionStorage.getItem('authentication');

            if (authentication === null)
            {
                authentication = $window.localStorage.getItem('authentication');
            }

            if (authentication !== null)
            {
                authentication = JSON.parse(authentication);
                accessId = authentication.accessId;
                accessKey = authentication.accessKey;
                authenticator = authentication.authenticator;
            }
        };

        self.storedInSession = function()
        {
            var authentication = $window.sessionStorage.getItem('authentication');
            
            return authentication !== null;
        };

        self.storedLocal = function()
        {
            var authentication = $window.localStorage.getItem('authentication');
            
            return authentication !== null;
        };

        self.deleteAuthentication = function()
        {
            accessId = null;
            accessKey = null;

            $window.sessionStorage.removeItem('authentication');
            $window.localStorage.removeItem('authentication');
        };

        construct();
    };

})(angular, base64);