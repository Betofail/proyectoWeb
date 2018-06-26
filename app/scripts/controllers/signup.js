'use strict';

/**
 * @ngdoc function
 * @name aulaVirtualApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the aulaVirtualApp
 */
angular.module('aulaVirtualApp')
  .controller('SignupCtrl', function ($scope,$location,usuario) {
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
        $location.path("/")
      },

      function(error) { // optional
        console.log(error)
      });

      console.log($scope.usuario)
    }
  });
