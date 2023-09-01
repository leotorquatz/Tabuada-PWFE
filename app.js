/**********************************************************************************************************************************
* Objetivo: calculo de tabuada                                                                      *
* Data: 01/09/23                                                                                                                  *
* Autor: Leonardo Torquato                                                                                                             *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

// Função para calcular uma tabuada
const calcularTabuada = function(valorTabuada, contadorInicial, contadorFinal){
    // Entrada de dados que chegam pelos argumentos
    let tabuada = String (valorTabuada).replace(',','.')
    let contInicial = String (contadorInicial).replace(',','.')
    let contFinal = String (contadorFinal).replace(',','.')
    
    let resultado
    let status = false

    //organizar os valores (menor e maior)
    if(contFinal < contInicial){
        contFinal = contadorInicial
        contInicial = contadorFinal
    }

    if (tabuada == "" || contInicial == "" || contFinal == "")
        console.log("ERRO: É obrigatório a entrada de todos os valores")
        else if(isNaN(tabuada || isNaN(contInicial) || isNaN(contFinal)))
        console.log("ERRO: É obrigatório a entrada somente de números")
        else{
            //variaveis em numeros
            contInicial = Number(contInicial)
            contFinal = Number(contFinal)
            tabuada = Number(tabuada)

            //uso do while //
            while(contInicial <= contFinal){
                resultado = tabuada * contInicial
                console.log(tabuada + 'x' + contInicial + '=' + resultado)
                
                contInicial++;

                status = true
            }
        }

        return status
        
        
}


    console.log(calcularTabuada(7,0,10))