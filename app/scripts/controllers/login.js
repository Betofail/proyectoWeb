'use strict';

/**
 * @ngdoc function
 * @name aulaVirtualApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the aulaVirtualApp
 */
angular.module('aulaVirtualApp')
  .controller('LoginCtrl', function ($scope,usuario) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.usuario = {}

    $scope.crearUsuario = function(){
    	usuario.agregarUsuario($scope.usuario)

    	.then(function(respuesta) {
        console.log(respuesta)
  		},

  		function(error) { // optional
        console.log(error)
  		});

      console.log($scope.usuario)
		}
  });
