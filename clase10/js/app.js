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
const funcionmaxi = (num1,num2,opera) => {
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
let final = funcionmaxi(num1,num2,opera)


document.write(final)



