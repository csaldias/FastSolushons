angular
    .module('portalAprendizaje',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('encuestaController',  function($scope, $http, $window) {
        $scope.pregunta = {
        };

        //Debug: Datos de prueba para encuesta
        $scope.pregunta = {
            "p1":{
                "a":"4",
                "c":"1",
                "d":"2",
                "b":"3"},
            "p2":{
                "c":"4",
                "b":"1",
                "a":"2",
                "d":"3"},
            "p3":{
                "a":"3",
                "b":"2",
                "c":"1",
                "d":"4"},
            "p4":{
                "b":"1",
                "a":"4",
                "d":"2",
                "c":"3"},
            "p5":{
                "c":"1",
                "d":"2",
                "b":"3",
                "a":"4"},
            "p6":{
                "c":"1",
                "a":"3",
                "d":"2",
                "b":"4"},
            "p7":{
                "b":"4",
                "d":"2",
                "c":"1",
                "a":"3"},
            "p8":{
                "b":"1",
                "a":"2",
                "c":"4",
                "d":"3"},
            "p9":{
                "c":"1",
                "b":"4",
                "d":"2",
                "a":"3"},
            "p10":{
                "a":"1",
                "c":"2",
                "b":"4",
                "d":"3"},
            "p11":{
                "c":"1",
                "b":"3",
                "a":"2",
                "d":"4"},
            "p12":{
                "b":"4",
                "a":"1",
                "c":"2",
                "d":"3"}};

        $scope.categoria = 0;

        $scope.obtenerCat = function () {
            //La forma mas obvia y menos elegante para calcular la categoria del usuario xd
            sumA = parseInt($scope.pregunta.p1.a)+parseInt($scope.pregunta.p2.a)+parseInt($scope.pregunta.p3.a)+
                   parseInt($scope.pregunta.p4.a)+parseInt($scope.pregunta.p5.a)+parseInt($scope.pregunta.p6.a)+
                   parseInt($scope.pregunta.p7.a)+parseInt($scope.pregunta.p8.a)+parseInt($scope.pregunta.p9.a)+
                   parseInt($scope.pregunta.p10.a)+parseInt($scope.pregunta.p11.a)+parseInt($scope.pregunta.p12.a);
            sumB = parseInt($scope.pregunta.p1.b)+parseInt($scope.pregunta.p2.b)+parseInt($scope.pregunta.p3.b)+
                   parseInt($scope.pregunta.p4.b)+parseInt($scope.pregunta.p5.b)+parseInt($scope.pregunta.p6.b)+
                   parseInt($scope.pregunta.p7.b)+parseInt($scope.pregunta.p8.b)+parseInt($scope.pregunta.p9.b)+
                   parseInt($scope.pregunta.p10.b)+parseInt($scope.pregunta.p11.b)+parseInt($scope.pregunta.p12.b);
            sumC = parseInt($scope.pregunta.p1.c)+parseInt($scope.pregunta.p2.c)+parseInt($scope.pregunta.p3.c)+
                   parseInt($scope.pregunta.p4.c)+parseInt($scope.pregunta.p5.c)+parseInt($scope.pregunta.p6.c)+
                   parseInt($scope.pregunta.p7.c)+parseInt($scope.pregunta.p8.c)+parseInt($scope.pregunta.p9.c)+
                   parseInt($scope.pregunta.p10.c)+parseInt($scope.pregunta.p11.c)+parseInt($scope.pregunta.p12.c);
            sumD = parseInt($scope.pregunta.p1.d)+parseInt($scope.pregunta.p2.d)+parseInt($scope.pregunta.p3.d)+
                   parseInt($scope.pregunta.p4.d)+parseInt($scope.pregunta.p5.d)+parseInt($scope.pregunta.p6.d)+
                   parseInt($scope.pregunta.p7.d)+parseInt($scope.pregunta.p8.d)+parseInt($scope.pregunta.p9.d)+
                   parseInt($scope.pregunta.p10.d)+parseInt($scope.pregunta.p11.d)+parseInt($scope.pregunta.p12.d);

            console.log("sumA="+sumA+",sumB="+sumB+",sumC="+sumC+",sumD="+sumD);

            R1 = sumC - sumA;
            R2 = sumD - sumB;

            console.log("R1="+R1+",R2="+R2);

            if(R1 <= 3 && R2 < 6){
                $scope.categoria = 1; //Divergente
            }
            else if(R1 > 3 && R2 < 6) {
                $scope.categoria = 2; //Asimilador
            }
            else if(R1 > 3 && R2 >= 6) {
                $scope.categoria = 3; //Convergente
            }
            else {
                $scope.categoria = 4; //Adaptador
            }
            //Enviamos el resultado
            $http.post('/encuesta/process', {categoria:$scope.categoria})
                .success(function (data) {
                    //console.log("Success: " + data);
                    $window.location.href = "/";
                })
                .error(function (data) {
                    console.log("Error: " + data);
                });
        };

    });