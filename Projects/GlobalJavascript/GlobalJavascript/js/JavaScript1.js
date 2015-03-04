//"use strict"; //forçar a declaração de variáveis;
//(function (ns) {
//    ns.add = function (x, y) {
//        return x + y;
//    }

//})

//var Namespace = Namespace || {};//cria um objeto vazio.

//Namespace.multiply = function (x, y) {
//    return x * y;
//};

//para utilizar Namespace
//______________________________________________________________________________________________
//Singleton. só pode existir uma instancia.
//MATH OU JSON


//funções globais

//var number = parseInt("1.0");
//var float1 = parseFloat("1.1");

//var x = 0;
//var y = 1;

//var z = y / x;
//var result = isFinite(z);
//var result = isNaN(z);//isNaN* = conver te para *não é um número

//______________________________________________________________________________________________
//SIMULAR UM CONSTRUTOR


//function Empregado1(nome, idade) {
//    this.nome = nome;
//    this.idade = idade;
//}

var Empregado = function (nome, idade) {
    this.nome = nome;//utilizando "this" torna-se público
    this.idade = idade;
    this.falar = function () {
        alert("Olá, meu nome é " + this.nome);
    }
}


//PROTOTYPE
//foi acrescentado no protótipo da função por ter feito na instancia do objeto



Empregado.prototype.andar = function (metros) {
    alert("Andei " + metros + " metros");
}

//var joaquim = new Empregado("Joaquim", 25);

//alert(joaquim.nome);


//Herança: qualquer outro objeto instanciado terá o protótipo

var manoel = new Empregado("Manoel", 30);

//alert(manoel.nome);
manoel.falar();
manoel.andar(10);


