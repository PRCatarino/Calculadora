var numero = 0;
var valorUm = 0;
var valordois = 0;

function limpaMostrador(){
    document.querySelector(".textoMostrador").innerHTML = 0;
}

function clickTecla(elemento){
    let valTela = document.querySelector(".textoMostrador").innerHTML;
    const valDigitado = elemento.innerHTML;
    let resultado = 0;

    if(esimbolo(valTela[valTela.length-1]) && esimbolo(valDigitado)){
        return 
    }
 
    if(valTela =="0" && !esimbolo(valDigitado)){
          valTela=""
    } 
                                                                                                      //-5
    if(["=","+","-","×","÷"].indexOf(valDigitado)>-1 && procurarSinalTexto(valTela.substr(1))){      //O valor digitado é igual o =,nesse momento eu faço o calculo 
                                             
            if(valTela.indexOf("+") > -1){                           // procuro no conteudo se existi o valor +
                const numeros = valTela.split("+");                 // estou criando uma lista quebrada por +
                const numeroUm = Number.parseFloat(numeros[0])       //converte o primeiro item da lista para numero 
                const numeroDois = Number.parseFloat(numeros[1])    // convertendo o o segundo item da lista para numero
               
                resultado = soma(numeroUm, numeroDois)          //chamo a função de soma passando os dois numeros convertidos

                document.querySelector(".textoMostrador").innerHTML = resultado; //escrevendo resultado no div
            }else if(valTela.indexOf("×") > -1){                           // procuro no conteudo se existi o valor +
                const numeros = valTela.split("×");                 // estou criando uma lista quebrada por +
                const numeroUm = Number.parseFloat(numeros[0])       //converte o primeiro item da lista para numero 
                const numeroDois = Number.parseFloat(numeros[1])    // convertendo o o segundo item da lista para numero
                
                resultado = multiplicacao(numeroUm, numeroDois)          //chamo a função de soma passando os dois numeros convertidos
                
                
                document.querySelector(".textoMostrador").innerHTML = resultado; //escrevendo resultado no div
            }else if(valTela.indexOf("÷") > -1){                           // procuro no conteudo se existi o valor +
                const numeros = valTela.split("÷");                   // estou criando uma lista quebrada por +
                const numeroUm = Number.parseFloat(numeros[0])       //converte o primeiro item da lista para numero 
                const numeroDois = Number.parseFloat(numeros[1])    // convertendo o o segundo item da lista para numero
                
                resultado = divisao(numeroUm, numeroDois)          //chamo a função de soma passando os dois numeros convertidos
                
                document.querySelector(".textoMostrador").innerHTML = resultado; //escrevendo resultado no div
            
            }else if(valTela.indexOf("-") > -1){                           // procuro no conteudo se existi o valor +
                const numeroUm = Number.parseFloat(valTela.substr(0, valTela.lastIndexOf("-")));      //converte o primeiro item da lista para numero 
                const numeroDois =  Number.parseFloat(valTela.substr(valTela.lastIndexOf("-")+1));// convertendo o o segundo item da lista para numero
               
                resultado = subtracao(numeroUm, numeroDois)          //chamo a função de soma passando os dois numeros convertidos
        
                document.querySelector(".textoMostrador").innerHTML = resultado; //escrevendo resultado no div
            }  
            if(valDigitado !="="){
                document.querySelector(".textoMostrador").innerHTML = document.querySelector(".textoMostrador").innerHTML + valDigitado;
                
           }
           return
        }
        document.querySelector(".textoMostrador").innerHTML = valTela + valDigitado;                //atualizo a tela
    }
    function procurarSinalTexto(texto){
        
        if(texto.indexOf("+")>-1){
            return true
    }
    if(texto.indexOf("-")>-1){
        return true
    }
    if(texto.indexOf("=")>-1){
        return true
    }
    if(texto.indexOf("×")>-1){
        return true
    }
    if(texto.indexOf("÷")>-1){
        return true
    }
}

function soma(numeroUm, numeroDois){
    return numeroUm + numeroDois;
}
function multiplicacao(numeroUm, numeroDois){
    return numeroUm * numeroDois;
}

function divisao(numeroUm, numeroDois){
    return numeroUm / numeroDois;
}
function subtracao(numeroUm, numeroDois){
    return numeroUm - numeroDois;
}

function esimbolo(texto){
    if(["=","+","-","×","÷","."].indexOf(texto)>-1){
    return true        
    }else{
        return false
    }
}
