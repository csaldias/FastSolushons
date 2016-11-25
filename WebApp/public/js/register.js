angular
    .module('portalAprendizaje',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('registroController',  function($scope, $http) {

        $scope.user = {
            usuario: '',
            email: '',
            password: '',
            rol: '',
            nombre: '',
            apellido: '',
            carrera: ''
        };

        $scope.carreras = ['Ingeniería Civil', 'Ingeniería Civil Eléctrica', 'Ingeniería Civil Informática',
            'Ingeniería Civil Matemática', 'Ingeniería Civil Mecánica', 'Ingeniería Civil de Minas',
            'Ingeniería Civil Química', 'Ingeniería Civil Plan Común'].map(function(carrera) {
            return {nombre: carrera};
        });

        $scope.registrarUsuario = function () {
            $http.post('/register/process', $scope.user)
                .error(function (data) {
                    console.log("Error: " + data);
                });
        };

    })
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

    });
