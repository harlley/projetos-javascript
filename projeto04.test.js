/*******************************************************************************
	Tarefa 1: (USE SWITCH CASE) 
		Crie uma função chamada calcularFrete que recebe a sigla do estado como 
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo 
		com a seguinte tabela de preços:
			MG     -> 12,50
			SP     -> 23,90
			RJ     -> 18,20
			Outros -> 35,90
*******************************************************************************/







/*******************************************************************************
	Tarefa 2: (USE SWITCH CASE)
		Crie um função chamada nomeMes, que recebe um número referente ao mês e 
		retorna o nome do mês equivalente. 1 para Janeiro, 2 para Fevereiro, 3 para 
		março e assim por diante, até 12 para dezembro. Deve retornar a mensagem
		"Mês inválido" caso seja usado algum número que não esteja entre 1 e 12.
*******************************************************************************/







/*******************************************************************************
	Tarefa 3: (USE SWITCH CASE) 
		Crie uma função chamada tabelaPeriodica que recebe como parâmetro a sigla
		de um elemento químico e retorne o nome desse elemento. Para exemplificar, 
		passando a sigla Zn, vai retornar zinco e Pt vai retornar platina.
		Use essa referência para abranger todos os elementos:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica		
*******************************************************************************/






/* ************************************* */
/* O código abaixo não deve ser alterado */
/* ************************************* */

describe("Projeto 04", function() {

  it("Tarefa 1", function() {
    // Teste com os estados MG, SP, RJ e CE	
    expect( calcularFrete("MG") ).toBe(12.5);
    expect( calcularFrete("SP") ).toBe(23.9);
    expect( calcularFrete("RJ") ).toBe(18.2);
    expect( calcularFrete("CE") ).toBe(35.9);
  });

  it("Tarefa 2", function() {
		// Teste com os valores 3, 8, 12 e 15.	
    expect( nomeMes(3) ).toBe("março");
    expect( nomeMes(8) ).toBe("agosto");
    expect( nomeMes(12) ).toBe("dezembro");
    expect( nomeMes(15) ).toBe("Mês inválido");
  });

  it("Tarefa 3", function() {
    expect( tabelaPeriodica("Zn") ).toBe("zinco");
    expect( tabelaPeriodica("Pt") ).toBe("platina");
    expect( tabelaPeriodica("Sn") ).toBe("estanho");
    expect( tabelaPeriodica("Br") ).toBe("bromo");
  });
    


});
