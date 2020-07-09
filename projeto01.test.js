/******************************************************************************* 
	Tarefa 1: 
		Atribuir o número 8 a uma variável chamada tomates
*******************************************************************************/




/******************************************************************************* 
	Tarefa 2: 
		Atribuir o número quatro e meio, a uma variável chamada melancias 
*******************************************************************************/



/******************************************************************************* 
  Tarefa 3: 
  	Atribuir o texto Bom dia à uma variável chamada mensagem 
*******************************************************************************/



/******************************************************************************* 
	Tarefa 4: 
    Atribuir o valor booleano verdadeiro à uma variável chamada ligado e o valor
    booleano falso para uma variável chamada desligado.
*******************************************************************************/


/* 
Fixar um valor de uma variável no código não faz muito sentido, pois só 
o programador poderia alterar os valores. Faz mais sentido capturarmos os 
dados de entrada digitados pelo usuário. Vamos usar o comando prompt para 
pegar os dados do usuário e o comando alert para exibit os dados capturados. 

## Referências:

https://www.w3schools.com/jsref/met_win_prompt.asp
https://www.w3schools.com/jsref/met_win_alert.asp

*/

/******************************************************************************* 
	Tarefa 5:
    Coletar o nome do usuário e mostrar concatenado com a frase, exibindo 
    Bom dia Bia, caso o nome informado seja Bia.
*******************************************************************************/


/* 
Variáveis podem receber o retorno expressões de lógicas que retornam verdadeiro
ou false (true ou false) e o retorno de cálculos feitos com operadores
aritméticos. 

## Referências:

https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Guia/Guia_express%C3%B5es_e_operadores
https://www.w3schools.com/js/js_comparisons.asp
https://www.w3schools.com/jsref/jsref_operators.asp

*/

/******************************************************************************* 
	Tarefa 6: 
	Faça um programa que captura a idade do usuário. Usa uma variável maiorIdade 
	para saber se a idade é maior ou igual a 18. E mostra true em um alert caso o 
	usuário seja maior de idade.
*******************************************************************************/








/* ************************************* */
/* O código abaixo não deve ser alterado */
/* ************************************* */


describe("Projeto 01", function() {

  it("Tarefa 1", function() {
    expect(tomates).toBe(8);
  });

  it("Tarefa 2", function() {
    expect(melancias).toBe(4.5);
  });

  it("Tarefa 3", function() {
    expect(mensagem).toBe("Bom dia");
  });

  it("Tarefa 4", function() {
    expect(ligado).toBe(true);
    expect(desligado).toBe(false);
  });

  it("Tarefa 5", function() {
    expect(nome).toBe("Bia");
  });

  it("Tarefa 6", function() {
    expect(maiorIdade).toBe(true);
  });

});

