/*Trabajo js 1 */


/*
console.log("hola mundo")
document.write("<h2>hlkdfjsl</h2>")
let maxi = "chau"
let maxi2 = "buenos dias"
console.log(maxi)
maxi = "hasta mañana"
console.log(maxi)
console.log(maxi2)
const PI = 3.14
console.log(PI)
let numero1 = 45
console.log(numero1)
numero1 = 50
console.log(numero1)
const MES ="julio"
console.log(MES)
*/
/*
let maxi = 12
console.log(126)
let variable1 = 34
let variable2 = "hola mundo"
let variable3 = maxi
console.log(maxi)
maxi = 34
console.log(maxi)
console.log(variable2)
const IVA = 0.21
let autosMarca = ["fiat","ford","audi","chrevrolet"]
console.log(autosMarca[1])
*/
/*
let auto = {
    "nombre":"fiat uno",
    "marca":"fiat",
    "valor":1800000,
    "año":2021,
    "descuento":0.10
}


let numero = 34
let texto = "hola mundo"
let arrayNumeros = [12,434,124,31]
let arrayTexto =["hola", "mundo"]
let objeto = {
    "clave":"valor",
    "clave2":23
}
let descuentoValido = true

if(descuentoValido == true){
    console.log(auto.descuento)
}else{
    console.log("no se puede hacer el descuento")
}
if(auto.valor >1500000){
    console.log("el auto es de alta gama")
}else{
    console.log("auto nacional")
}
*/
/*
let valor1= 12
let valor2 =11
let valor3 =25
let valo4="glhsglsjoi"

if(valor1 == valor2){
    console.log("estos valores son iguales")
}
else if(valor1>valor2){
    console.log("valor 1 es mayor a valor 2")
}
else if(valor1<valor2){
    console.log("valor 1 menor a valor 2")
}else{
    console.log("dato mal ingresado")
}

let arrayNumeros=[23,2323,232,646,464,855,1232,8587,58]

if(arrayNumeros[2]==arrayNumeros[6]){
    console.log("son iguales")
}else if(arrayNumeros[2]>arrayNumeros[6]){
    console.log("posicion 2 es mayor que posicion 6")
}else if ( arrayNumeros[2]<arrayNumeros[6]){
    console.log("gjdflkjdlgjd")
}

let palabra1 ="hola"

if(palabra1 == "casa"){
    console.log("te estan saludando")
}*/
/*
let arrayNumeros=[23,2323,232,646,464,855,1232,8587,58,5463,435,535,463,55,4545,45435,353]


let count = 0
while(count < arrayNumeros.length){
    console.log( `el valor de la posicion ${count} es ${arrayNumeros[count]} `)
    count = count + 1
}

console.log("ya termino el ciclo")
*/


 const calculadora = (num1,num2,opera) => {
    let resultado = 0
        if(opera =="sum"){
            resultado = num1 + num2
          }
          if(opera=="rest"){
               resultado =num1 -num2
          }
          
          if(opera=="divi"){
              resultado = num1/num2
          }
          
          if(opera=="multi"){
              resultado = num1 * num2
          }
        return resultado
    }
let num1 = 78
let num2 = 25
let opera ="sum"
let final = calculadora(num1,num2,opera)


console.log(final)


