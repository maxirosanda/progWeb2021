export const calculadora = (num1,num2,opera) => {
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