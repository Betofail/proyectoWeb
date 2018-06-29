'use strict';

/**
 * @ngdoc service
 * @name aulaVirtualApp.Session
 * @description
 * # Session
 * Factory in the aulaVirtualApp.
 */
angular.module('aulaVirtualApp')
  .factory('Session', function ($window) {
    // Service logic
    // ...

    var localStorage = $window.localStorage;
    
    var Session = {
      getItem: function(key) {
        return angular.fromJson(localStorage.getItem(key));
      },
      setItem: function(key, value) {
        return localStorage.setItem(key, angular.toJson(value));
      },
      removeItem: function(key) {
        return localStorage.removeItem(key);
      }
    };

    return Session;
  });
