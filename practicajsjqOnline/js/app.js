

$(document).ready(() => {



    const sumar = (num1,num2) =>{
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let resultado = num1 + num2
        return  resultado
    }
       
    
   $("#enviarEntrada").hover(() => {$("#foto").attr("src","./img/foto2.jpg")},()=>{$("#foto").attr("src","./img/foto1.jpg")})
})

/*
let entrada = $("#entrada").val()

    $("#contenedor").html(`
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
             <div class="card-body">
             <h5 class="card-title">${entrada}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
    </div>
  `)
  */


      /*
    let entrada = $("#entrada").val()
    $("#salida").text(entrada)

    console.log(numero1)
    numero1 = parseFloat(numero1)
    console.log(numero1)
    */
