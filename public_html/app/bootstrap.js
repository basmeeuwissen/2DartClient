/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(angular)
{
    'use strict';
    
    angular.module('twodart',
    [
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        
        'twodart.shared.common',
        'twodart.shared.user',
        
        'twodart.components.application',
        'twodart.components.game',
        'twodart.components.home',
        'twodart.components.lobby',
        'twodart.components.login',
        'twodart.components.register',
        'twodart.components.user'
    ])
    
    .config(['$locationProvider', function($locationProvider)
    {
        //$locationProvider.html5Mode(true);
        $locationProvider.baseHref = '/';
    }])

    .config(function($httpProvider)
    {
	$httpProvider.interceptors.push('requestService');
	
	if (!$httpProvider.defaults.headers.get)
	{
            $httpProvider.defaults.headers.get = {};
	}
        
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    });
    
})(angular);