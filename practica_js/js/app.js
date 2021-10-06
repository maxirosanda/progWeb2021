$(document).ready(function(){

    $("#sum").click(function(){

       let valor1 = $("#valor1").val()
       let valor2 = $("#valor2").val()
       valor1 = parseInt(valor1)
       valor2 = parseInt(valor2)
       let resultado = valor1 + valor2
    $("#resultado").text(resultado)
    });
    
  
  });
  