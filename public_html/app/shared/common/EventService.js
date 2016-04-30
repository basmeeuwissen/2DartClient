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
        .service('eventService', EventService);

    function EventService()
    {
        var self = this;

        var listeners = [];
        
        self.listen = function(eventName, handler)
        {
            if (listeners[eventName] === undefined)
            {
                listeners[eventName] = [];
            }

            listeners[eventName].push(handler);
        };
        
        self.remove = function(eventName, handler)
        {
            var handlers = listeners[eventName];

            if (handlers !== undefined)
            {
                var index = handlers.indexOf(handler);

                if (index !== -1)
                {
                    handlers.splice(index, 1);
                }
            }
        };
        
        self.dispatch = function(eventName, subject, parameters)
        {
            var eventListeners = listeners[eventName];

            if (eventListeners !== undefined)
            {
                for (var index in eventListeners)
                {
                    eventListeners[index](eventName, subject, parameters);
                }
            }
        };
    };

})(angular);