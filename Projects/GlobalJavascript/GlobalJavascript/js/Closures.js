//Closure útil para classes funcionais, que têm funções
//uma função interna dentro de outra função.
//casos de uma função que retorna outra função.

//mantêm o estado da função
//var criarContador = function () {
//    var contador = 0;
//    return function () {
//        contador++;
//        return contador;
//    };
//};

//Com a utilização do Closure consegue-se utilizar os gets e sets, simulando uma classe
var criarPessoa = function (nome, endereco) {
    var _nome = nome;
    var _endereco = endereço;

    return {
        getNome: function () {
            return _nome;
        },
        getEndereco: function () {
            return _endereco;
        }
    };
};

var joaquim = criarPessoa("Joaquim", "Rua tal");

alert(joaquim.getEndereco());
alert(joaquim.getNome());
alert(joaquim._nome());        //undefined
alert(joaquim._endereco());    //undefined