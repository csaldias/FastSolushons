(function() {
  'use strict';

  angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('AppCtrl', function($scope) {
      $scope.isOpen = false;

      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };
    });

    angular.module('toolbarDemo1', ['ngMaterial'])

        .controller('AppCtrl', function($scope) {

        });

    angular.module('cardDemo2', ['ngMaterial'])

        .controller('AppCtrl', function($scope) {
            $scope.imagePath = 'img/washedout.png';
        });

})();

/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/