/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (angular)
{
    'use strict';

    angular.module('twodart',
    [
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        
        'twodart.shared.dynamic',
        'twodart.shared.componentA',
        'twodart.shared.componentB'
    ]);

})(angular);

if (!String.prototype.format)
{
    String.prototype.format = function ()
    {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number)
        {
            return typeof args[number] !== 'undefined'
                ? args[number]
                : match;
        });
    };
}