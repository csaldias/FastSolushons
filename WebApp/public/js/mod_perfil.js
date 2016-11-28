/*$(window, document, undefined).ready(function() {

    $('input').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function(e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });

});*/

angular
    .module('portalAprendizaje',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('modPerfilController',  function($scope, $http, $window) {

        $scope.user = {
            email: '',
            password: '',
            nombre: '',
            carrera: ''
        };

        $scope.carreras = ['Ingeniería Civil', 'Ingeniería Civil Eléctrica', 'Ingeniería Civil Informática',
            'Ingeniería Civil Matemática', 'Ingeniería Civil Mecánica', 'Ingeniería Civil de Minas',
            'Ingeniería Civil Química', 'Ingeniería Civil Plan Común'].map(function(carrera) {
            return {nombre: carrera};
        });

        console.log($scope);

        $http.post('/user/details', $scope.user)
            .success(function (data) {
                console.log("Success: " + data);
            })
            .error(function (data) {
                console.log("Error: " + data);
            });

    })
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

    });
