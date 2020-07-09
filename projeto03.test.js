/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada termostato. Essa função deve receber um número no
		parâmetro temperatura. Se a temperatura for menor que zero, a função retorna
		a mensagem "Temperatura negativa". Se for maior que zero, retorna a mensagem
		"Temperatura positiva"
*******************************************************************************/







/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada boletimEscolar. Essa função deve receber um número
		no parâmetro nota. As notas válidas são de 0 a 10. Se o usuário digitar uma
		nota inválida a função deve retornar "Nota inválida". Depois de receber uma
		nota válida, a função deve retornar "Aprovado" ou "Reprovado". A média para
		aprovação é 60%.
*******************************************************************************/







/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada calcularFrete que recebe a sigla do estado como
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo
		com a seguinte tabela de preços:
		- MG     -> 12,50
		- SP     -> 23,90
		- RJ     -> 18,20
		- Outros -> 35,90
*******************************************************************************/







/*******************************************************************************
	Tarefa 4:
		Crie uma função com o nome calcularAltura. Essa função deve receber um
		parâmetro altura e retornar uma mensagem de acordo com a tabela:
		- menos que 1,60 -> "baixinho"
		- de 1,60 a 1,85 -> "altura normal"
		- mais de um 1,85 -> "joga basquete?"
*******************************************************************************/







/*******************************************************************************
	Tarefa 5:
		Crie uma função chamada validarSenha. Se a senha for "123456", a função
		retorna a mensagem "Login efetuado com sucesso", senão, retorna a mensagem
		"Senha inválida".
*******************************************************************************/









/* ************************************* */
/* O código abaixo não deve ser alterado */
/* ************************************* */


describe("Projeto 03", function() {

  it("Tarefa 1", function() {
    // Teste sua função com as temperaturas 0, -8 e 25.
    expect( termostato(0) ).toBe("Temperatura positiva");
    expect( termostato(-8) ).toBe("Temperatura negativa");
    expect( termostato(25) ).toBe("Temperatura positiva");
  });

  it("Tarefa 2", function() {
    // Teste sua função com as notas -5, 0, 7, 3 e 19    
    expect( boletimEscolar(-5) ).toBe("Nota inválida");
    expect( boletimEscolar(0) ).toBe("Reprovado");
    expect( boletimEscolar(7) ).toBe("Aprovado");
    expect( boletimEscolar(3) ).toBe("Reprovado");
    expect( boletimEscolar(19) ).toBe("Nota inválida");
  });

  it("Tarefa 3", function() {
    //Teste com os estados MG, SP, RJ e CE    
    expect( calcularFrete("MG") ).toBe(12.5);
    expect( calcularFrete("SP") ).toBe(23.9);
    expect( calcularFrete("RJ") ).toBe(18.2);
    expect( calcularFrete("CE") ).toBe(35.9);
  });
  
  it("Tarefa 4", function() {
    //Teste com os valores 1,40  1,70  1,85 e  2,00
    expect( calcularAltura(1.4) ).toBe("baixinho");
    expect( calcularAltura(1.7) ).toBe("altura normal");
    expect( calcularAltura(1.85) ).toBe("altura normal");
    expect( calcularAltura(2) ).toBe("joga basquete?");
  });

  it("Tarefa 5", function() {
    expect( validarSenha("123456") ).toBe("Login efetuado com sucesso");
    expect( validarSenha("123456789") ).toBe("Senha inválida");
  });
  


});
