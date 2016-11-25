(function() {
  'use strict';

  angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('AppCtrl', function($scope) {
        var originatorEv;

        this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        this.goLogin = function() {
            $location.url('/');
        };

      $scope.isOpen = false;
        $scope.tarjeta1 = 'img/lineas_campo.gif';
        $scope.tarjeta2 = 'img/gauss.gif';
        $scope.tarjeta3 = 'img/potencial.png';
        $scope.tarjeta4 = 'img/capacitor1.gif';
        $scope.tarjeta5 = 'img/resistencia.jpg';
        $scope.anuncio = 'img/usmCC.jpg';
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };
    });

})();

/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/