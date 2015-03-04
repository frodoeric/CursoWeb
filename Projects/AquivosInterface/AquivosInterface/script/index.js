document.cookie = "username=Fulano;corPreferida=blue";

var valores = document.cookie.split(';')//quebrar uma string usando um caractere especial

var username = valores[0].split('=')[1];
var corPreferida = valores[1].slit('=')[1];

//sessionStorage

sessionStorage.setItem("nome", "Fulano");

var nome = sessionStorage.getItem("nom");

//or

sessionStorage["nome"] = "Fulano";

var nome = sessionStorage["nome"];

//localStorage
//permanente

localStorage["nome"] = "Fulano";
var outroNome = localStorage["nome"];