
var button = document.getElementById("clickMe");
button.onclick = function () {
    var elemento = document.getElementById("destaque");
    elemento.innerHTML = "Hello <strong>WORLD</strong>";
};

for (var i = 0; i < 500; i++) {

    setTimeout(function () {
        alert("glu glu");

    }, 1000);

    setTimeout(function () {
        alert("iê iê!");

    }, 1000);

    setTimeout(function () {
        alert("tetéia!");

    }, 1000);

}




//(function () {
//    "use strict";

//    var objeto = {
//        nome: "Fulano",
//        sobrenome: "Souza",
//        getFullname: function () {
//            return this.nome = " " + this.sobrenome;
//        }
//    };

//    console.log(objeto.getFullname());
//    var nome = objeto["nome"];

//    var array = ["banana", "abacate", "maca"];
//    array.push("pera");
//    array[4] = "jaca";

//    var data = new Date(2015, 1, 1);

//    var attendees = [
//        {
//            "name": "Eric Gruber",
//            "currentTrack": "1"
//        }
//    ]

//})();

//TESTAR REFERÊNCIAS
// instalar o CHUZTPAH para o usar o qunit



//function add(x, y) {
//    if (typeof x == "number" && typeof y === "number") {
//        return x + y;

//    }
//    throw new RangeException();
    
//}



//var x;

//console.log("O tipo de x: " + typeof x);

//x = 1;

//console.log("O tipo de x: " + typeof x);

//x = "banana";

//console.log("O tipo de x: " + typeof x);

//x = new Date(10 / 01 / 2015);

//console.log("O tipo de x: " + typeof x);

//x = true;

//console.log("O tipo de x: " + typeof x);

//document.write("Hello World");