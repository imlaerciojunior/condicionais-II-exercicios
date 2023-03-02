//códigos a serem reescritos

// a)
const nome = prompt("digite seu nome")

if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}

// ----------------- a) - if ternario ------------------

nome === "José" ? console.log("Oi, Zé") : console.log("Olá, " + nome)



// b)
const idade = Number(prompt("digite sua idade"))

if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}

// ---------------- b) - if ternario ------------------

idade >= 18 ? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista!")