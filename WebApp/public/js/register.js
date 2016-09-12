angular
    .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('DemoCtrl',  ['$scope', function($scope) {
        $scope.user = {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            company: 'Universidad Técnica Feredico Santa María',
            address: '',
            city: '',
            state: '',
            biography: '',
            postalCode: ''
        };

        $scope.states = ('RM I II III IV V VI VII VIII IX X XI XII XIII XIV XV').split(' ').map(function(state) {
            return {abbrev: state};
        });

        $scope.categoria = function() {
          $scope.sumA = parseInt($p1.a)+parseInt($p2.a)+parseInt($p3.a)+parseInt($p4.a)+parseInt($p5.a)+parseInt($p6.a)+parseInt($p7.a)+parseInt($p8.a)+parseInt($p9.a)+parseInt($p10.a)+parseInt($p11.a)+parseInt($p12.a);
            $scope.sumB = parseInt($p1.b)+parseInt($p2.b)+parseInt($p3.b)+parseInt($p4.b)+parseInt($p5.b)+parseInt($p6.b)+parseInt($p7.b)+parseInt($p8.b)+parseInt($p9.b)+parseInt($p10.b)+parseInt($p11.b)+parseInt($p12.b);
            $scope.sumC = parseInt($p1.c)+parseInt($p2.c)+parseInt($p3.c)+parseInt($p4.c)+parseInt($p5.c)+parseInt($p6.c)+parseInt($p7.c)+parseInt($p8.c)+parseInt($p9.c)+parseInt($p10.c)+parseInt($p11.c)+parseInt($p12.c);
            $scope.sumD = parseInt($p1.d)+parseInt($p2.d)+parseInt($p3.d)+parseInt($p4.d)+parseInt($p5.d)+parseInt($p6.d)+parseInt($p7.d)+parseInt($p8.d)+parseInt($p9.d)+parseInt($p10.d)+parseInt($p11.d)+parseInt($p12.d);

            $scope.R1 = $scope.sumC - $scope.sumA;
            $scope.R2 = $scope.sumD - $scope.sumB;

            if($scope.R1 <= 3 && $scope.R2 < 6){
                $scope.Result = "Divergente";
            }
            else if($scope.R1 > 3 && $scope.R2 < 6) {
                $scope.Result = "Asimilador";
            }
            else if($scope.R1 > 3 && $scope.R2 >= 6) {
                $scope.Result = "Convergente";
            }
            else {
                $scope.Result = "Adaptador";
            }
        };

        $scope.calcCategoria = function(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12) {
            $scope.sumA = parseInt(p1)+parseInt(p2)+parseInt(p3)+parseInt(p4)+parseInt(p5)+parseInt(p6)+parseInt(p7)+parseInt(p8)+parseInt(p9)+parseInt(p10)+parseInt(p11)+parseInt(p12);
        };
    }])
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

    });
