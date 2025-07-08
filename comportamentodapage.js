var nome = "Julia";
let idade = 19;
let mensagem = `Olá ${nome}. Sua idade é ${idade} anos`;
console.log(mensagem); 

/*Ou pode-se, caso não queira usar a variável "LET", pode-se imprimir a mensagem diretamente na 
tag "console.log" Ex. console.log(`Olá ${nome}. Sua idade é ${idade} anos`);
Além disso, não pode-se simplificar a junção de dados do texto utilizando "+". 
Ex. console.log("Olá " + nome + ". Sua idade é" + idade + " anos");*/

if(idade >= 18){
    console.log("Seja bem vindo")
}
else{console.log("Acesso Negado")
}
