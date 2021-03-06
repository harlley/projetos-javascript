/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada numerosAte20 que deve retornar todos os números
		de 0 a 20 devidamente separados por espaço.
		Exemplo: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
	
*******************************************************************************/




/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada numerosImpares, que recebe um parâmetro chamado
		limite. Essa função deve retornar todos os números ímpares devidamente sepa-
		rados por espaço até o limite definido pelo valor passado no parâmetro.
		Exemplo: numerosImpares(9) deve retornar 1 3 5 7 9
*******************************************************************************/




/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada contagemRegressiva. Essa função vai retornar todos
		os números em ordem regressiva de 100 a 0, devidamente separados por espaço.
		Exemplo: 100 99 98 97 96 95 94 93 92 91 90 89 .. 7 6 5 4 3 2 1 0
*******************************************************************************/







/* ************************************* */
/* O código abaixo não deve ser alterado */
/* ************************************* */

describe("Projeto 05", function() {

  it("Tarefa 1", function() {
    expect( numerosAte20().trim() ).toBe("0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20");
  });

  it("Tarefa 2", function() {
    expect( numerosImpares(9).trim() ).toBe("1 3 5 7 9");
  });

  it("Tarefa 3", function() {
    let resultado = "100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78 77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49 48 47 46 45 44 43 42 41 40 39 38 37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0";
    expect( contagemRegressiva().trim() ).toBe(resultado);
  });
    


});

