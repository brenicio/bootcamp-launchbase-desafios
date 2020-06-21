const usuarios = [
    {nome: 'Carlos', tecnologias: ['Html', 'CSS']},
    {nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS']},
    {nome: 'Tuane', tecnologias: ['HTML', 'Node.js']}
]

const pessoas = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

function percorreLista(lista){
    for(let i =0; i<lista.length; i++){
        console.log(`${lista[i].nome} trabalha com ${lista[i].tecnologias}`)
    }
}


function checaUsuarioTrabalhaCss(listausuario){
    for(let i = 0; i<listausuario.length; i++){
        for(let b = 0; b<listausuario[i].tecnologias.length; b++){
            if(listausuario[i].tecnologias[b]=='CSS'){
                console.log(`O usuário ${listausuario[i].nome} trabalha com ${listausuario[i].tecnologias[b]}`)
            }
        }
    }    
}

function saldoPessoas(listapessoas){    
    for(let pessoas of listapessoas){
        let saldoTotal = calculaSaldo(pessoas.receitas, pessoas.despesas)
       
        if(saldoTotal>0){
            console.log(`${pessoas.nome} possui saldo POSITIVO de ${saldoTotal.toFixed(2)}`)
        }else{
            console.log(`${pessoas.nome} possui saldo NEGATIVO de ${saldoTotal.toFixed(2)}`)
        }
        
    }
}

function calculaSaldo(receitas, despesas){
    let receitasSoma = somaNumeros(receitas)
    let despesasSoma = somaNumeros(despesas)

    return receitasSoma - despesasSoma
}

function somaNumeros(numeros){
    let soma = 0
    for(let i = 0; i<numeros.length; i++){
        soma = soma + numeros[i]
    }
    return soma
}

const array1 = [9.8, 120.3, 340.2, 45.3]

saldoPessoas(pessoas)