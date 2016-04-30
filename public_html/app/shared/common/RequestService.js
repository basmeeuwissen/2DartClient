/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (angular)
{
    'use strict';

    angular
        .module('twodart.shared.common')
        .service('requestService', RequestService);

    function RequestService($q, $rootScope, authService, eventService)
    {
        var self = this;

        var openRequests = 0;

        self.request = function(config)
        {
            config.headers = config.headers || {};

            if (authService.isAuthenticated())
            {
                config.headers['Authorization'] = 'Basic ' + authService.createAuthorization();
            }

            requestOpened();

            return config || $q.when(config);
        };

        self.response = function(response)
        {
            requestClosed();

            return response || $q.when(response);
        };

        self.responseError = function(response)
        {
            if (response.status === 401 || response.status === 403)
            {
                eventService.dispatch('request.unauthorized');
            }

            requestClosed();

            return $q.reject(response);
        };

        var requestOpened = function()
        {
            openRequests++;
            $rootScope.loading = true;
        };

        var requestClosed = function()
        {
            openRequests--;

            if (openRequests === 0)
            {
                $rootScope.loading = false;
            }
        };
    };

})(angular);