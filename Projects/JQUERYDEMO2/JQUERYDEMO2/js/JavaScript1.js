$(document).ready(function () {
    $("#meuDiv").css("background-color", "red");//referência e usa css dinâmicamente

    $("h2").each(function () {
        this.style.color = "red";//altera a cor para cada h2
    });

    $("#togleClassButton").click(function () {//pega o evento do botão caso clicado
        $(this).toggleClass("alerta");//       utiliza a classe alerta do css
    });


});