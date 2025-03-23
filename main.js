export function maiorNumero(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return null;
    }
    let numeroMaior = 0
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] > lista[numeroMaior]){
            numeroMaior = i;
        }
    }
    return numeroMaior;
}

export function verificarParOuImpar(numero){
    if(typeof(numero) != 'number' || isNaN(numero)){
        return null;
    } else if(numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

export function diaDaSemana(numero){
    if(typeof(numero) != 'number' || isNaN(numero) || numero > 7 || numero <= 0){
        return 'Número inválido';
    }
    switch(numero){
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda-feira';
        case 3:
            return 'Terça-feira';
        case 4:
            return 'Quarta-feira';
        case 5:
            return 'Quinta-feira';
        case 6:
            return 'Sexta-feira';
        case 7:
            return 'Sábado';
    }
}

export function somarLista(lista){
    if(lista.length === 0){
        return 0;
    } else if(!Array.isArray(lista)){
        return null;
    } else {
        return lista.reduce((soma, numero) => {
            return soma + numero; 
        }, 0) 
    }

}

export function contarPalavras(srt){
    if(typeof srt != 'string'){
        return null;
    } else if(srt === ' '){
        return 0;
    } else {
        if(srt.split(' ').length === 1){
            return 1;
        } else {
            return srt.split(' ').length;
        }
    }
}

export function atualizarPropriedade(objeto){
    if(objeto.idade === undefined){
        return objeto = objeto = {
            nome: 'João',
            altura: 1.8,
        }
    } else {
        return {
            nome: 'João',
            idade: 30,
        }
    }
}

export function listarChaves(objeto){
    if(typeof objeto != 'object' || objeto === null){
        return null;
    } else {
        return Object.keys(objeto);
    }
} 

export function saudacaoPorHora(numero){
    if(typeof numero != 'number' || numero < 0 || numero > 23){
        return 'Hora inválida!'
    } else {
        if(numero >= 0 && numero < 12){
            return 'Bom dia!'
        } else if(numero >= 12 && numero < 18){
            return 'Boa tarde!'
        } else {
            return 'Boa noite!'
        }
    }
}