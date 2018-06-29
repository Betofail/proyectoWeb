'use strict';

/**
 * @ngdoc function
 * @name aulaVirtualApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the aulaVirtualApp
 */
angular.module('aulaVirtualApp')
  .controller('LoginCtrl', function ($scope,$location,usuario,Session) {
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
        var user = respuesta.data
        if (user) {
          Session.setItem('user',user.data);
          $location.path("/home")
        }
   			
   		},
   		function(error) {
         $scope.mensaje = "usuario o contraseña incorrecta"
   			console.log(error)
   		});
   		console.log($scope.usuario)
   	}
    $scope.logOut = function(){
      Session.removeItem('user')
      $location.path("/")
    }

  });