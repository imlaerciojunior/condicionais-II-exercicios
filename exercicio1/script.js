//EXERCICIO 1

//1)
const numero = Number(prompt("Digite um número"))


if(numero %2 === 0){
    console.log(`o número ${numero} é divisível por 2`)
    if(numero %3 === 0){
        console.log(`o número ${numero} é divisível por 3`)
    }else{
        console.log(`o número ${numero} não é divisível por 3`)
    }
}else{
    console.log(`o número ${numero} não é divisível por 2`)
}

//2)

/*if(numero %2 === 0 && numero %3 === 0){
    console.log(`o número ${numero} é divisível por 2 ou 3`)
}else{
    console.log(`o número ${numero} não é divisível por 2 ou 3`)
}*/