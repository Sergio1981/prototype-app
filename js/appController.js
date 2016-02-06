angular.module("app").controller("ctrl1", ["$scope", "$http",function($scope, $http){
    
    $scope.title = "Projeto HTML5";
    $scope.outroNome = "Informações de usuários"; 
    $scope.cadastro = {};
    $scope.user=[
        {
        
        nome: "Stieve",
        sobrenome: "Jobs",
        idade: 55,
        profissao: "Meio Doido",
        data: new Date("2016", "04", "07"),
        preco: 10000000
        
        },
        {
        
        nome: "Bill",
        sobrenome:"Gates",
        idade: 55,
        profissao: "Meio Mimado",
        data: new Date("2016", "04", "07"),
        preco: 25000000
        
        }
    
    
    ];
    var loadBig = document.getElementById("loader-big");
    $scope.alerta = function(){
        loadBig.style.display = "block";
        alert("Minha aplicação esta funcionando!");
        loadBig.style.display = "none";
    };
    
    $scope.envia = function(cadastro) {
        loadBig.style.display = "block";
        $http({
            method: "POST",
            url:"http://localhost:82/aula/app-cadastro.php",
            data: cadastro,
            headers: {
               'Content-Type': undefined
            },
        }).success(function(data){
            alert(data);
            loadBig.style.display = "none";
            delete $scope.cadastro;
        }).error(function(data){
            alert(data? data : "Não foi possivel conectar! Tente novamente mais tarde");
            loadBig.style.display = "none";
        });
    };
}]);