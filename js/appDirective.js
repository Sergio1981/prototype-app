angular.module("app").directive("usuarios", function(){
    return {
        
        restrict: "E",
        scope:{
            info: "="
        
        },
        templateUrl: "js/meuTeste.html"
    };
    
});

