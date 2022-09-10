// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let M = parseInt(gets());
let A = parseInt(gets());
let B = parseInt(gets());

let C = M-(A+B);
	
let res = A;
if ( res < B) res =  B;  
if ( res < C) res =  C;
	
print( res )