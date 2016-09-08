angular
    .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('DemoCtrl', function($scope) {
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
    })
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

    });
