'use strict';

/**
 * @ngdoc function
 * @name aulaVirtualApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the aulaVirtualApp
 */
angular.module('aulaVirtualApp')
  .controller('LoginCtrl', function ($scope,$location,usuario) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.usuario = {}

   	$scope.loginUsuario = function() {
   		usuario.loginUsuario($scope.usuario)
   		.then(function(respuesta){
   			console.log(respuesta)
   			$location.path("/home")
   		},
   		function(error) {
   			console.log(error)
   		});
   		console.log($scope.usuario)
   	} 

  });