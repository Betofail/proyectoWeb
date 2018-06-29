'use strict';

/**
 * @ngdoc function
 * @name aulaVirtualApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the aulaVirtualApp
 */
angular.module('aulaVirtualApp')
  .controller('ProfileCtrl', function ($scope,usuario,Session,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = Session.getItem('user').user

    $scope.crearTabla = function(){
      console.log($scope.user)
    	usuario.obtenerClases($scope.user)
    	.then(function(respuesta)
    	{
        respuesta = respuesta.data.data
    		$scope.table = respuesta
        console.log($scope.table)
    	},
    	function(error)
    	{
    		console.log(error)
    	});
    }
    
  });
