
//se usa para leer todo el documento
$(document).ready(function(){
  //aca va la logina
  })

//se usa para ejecutar un evento (puede ser: click ,hover ,etc)
  $("#acaVaElIdDelBoton").click(function(){
   //aca va la logica
});

//se usa para tomar el valor de una etiqueta de html (ejemplo: tomar el valor en un imput)
let valor = $("#acaVaElIdDelInput").val()

//se utiliza para pasar un valor en string a int (pasar de texto a entero)
valor1 = parseInt(valor1)
valor2 = parseFloat(valor2)

//se utiliza para cambiar el texto de una etiqueta html (h1,h2,h3,h4,h5,h6,p)
$("#acaVaElIdDeLaEtiquetaHTMLdeTexto").text("contenidoACambiar")

//se utiliza para remplazar el contenido (por ejemplo remplazar lo que hay dentro de un div)
$("#acaVaelId").html("<p>esto va dentro del contenedor<p>")

//se utiliza para agregar contenido al final de una etiquete html
$("#acaVaElID").append("<div><h4>este contenido fue agregado al final</h4></div>")

//se utiliza para agregar contenido al principio de una etiquete html
$("#acaVaElID").prepend("<div><h4>este contenido fue agregado al principio</h4></div>")

//para modificar un atributo del un elemento html (ejemplo se puede utilizar para cambiar el valor de src de una imagen)
$("#id").attr("nombreAtributo","loQuequieroModificar")

//agregar clases 
$("#idEtiquetaHTML").addClass("claseaAgregar")

//remover clase
$("#idEtiquetaHTML").removeClass("claseaRemovida")

// agregar o quitar clase
$("#id").toggleClass("nombreClase") 

// ocultar un elemento html
$("#id").hide(1000)
$("#id").fadeOut(1000)  // puede ser slow o fast o un numero

// mostrar un elemento html que estaba oculto
$("#id").show(1000)
$("#id").fadeIn(1000)  // puede ser slow o fast o un numero

//intercambia entre mostrar y ocultar
$("#id").toggle(1000)

