'use strict';

/**
 * @ngdoc service
 * @name aulaVirtualApp.usuario
 * @description
 * # usuario
 * Service in the aulaVirtualApp.
 */
angular.module('aulaVirtualApp')
  .service('usuario', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
    	agregarUsuario: function(usuario){
    		return $http({
    			method: 'POST',
    			url: 'http://localhost:3000/signup',
    			data : usuario
    		});
    	}
    }
  });
