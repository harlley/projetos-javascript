/*******************************************************************************
	
	Tarefa 1:

		Defina uma classe com o nome Motor. Essa classe quando instanciada, receberá
		os parâmetros cilindradas e combustivel através do método construtor.
		Essa classe terá 2 métodos, um chamado ligar e outro chamado desligar, que 
		retorna strings conforme mostrado nos exemplos abaixo:

		new Motor(2000, 'gasolina').ligar() 
		~> "Motor 2000 cilindradas a gasolina está ligado"
		
		new Motor(1000, 'álcool').desligar() 
		~> "Motor 1000 cilindradas a álcool está desligado"

*******************************************************************************/








/*******************************************************************************
 
	Tarefa 2:

		Defina uma classe chamada Calculadora, que recebe 2 números como parâmetro
		no método construtor. Essa classe faz cálculos com esses 2 números através
		de 4 métodos: somar, subtrair, multiplicar, dividir. Exemplo de uso:

		new Calculadora(10, 2).somar()
		~> 12

		new Calculadora(10, 2).subtrair()
		~> 8

		new Calculadora(10, 2).multiplicar()
		~> 20

		new Calculadora(10, 2).dividir()
		~> 5
		
*******************************************************************************/







/*******************************************************************************
	
	Tarefa 3:

		Defina a classe Calendario. Ela deve ter 2 métodos estáticos. O primeiro
		método chamado nomeDias deve retornar um array com os dias da semana,
		começando com domingo.

		Calendario.nomeDias()
		~> ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

		O segundo método estático chamado diaSemana deve receber como parâmetro uma 
		string contendo uma data no formato brasileiro (ex: 31/12/2019) e deve 
		retornar o nome do dia da semana que essa data se refere:

		Calendario.diaSemana('31/12/2019')
		~> "terça-feira"

		O método diaSemana deve obrigatoriamente fazer chamada ao método nomeDias
		que contém uma lista com os nomes dos dias da semana. Para criar esse método
		será necessário também entender como se usa a classe Date disponível nativa-
		mente no Javascript, conforme referência abaixo:

		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

*******************************************************************************/









/*******************************************************************************
	
	Tarefa 4:

		Defina a classe CalendarioIngles. Essa classe deve herdar os métodos da
		classe Calendario, criado na tarefa anterior. Agora subscreva apenas o método 
		nomeDias, para que ele retorne uma lista de dias da semana em inglês

		CalendarioIngles.nomeDias()
		~> ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

		Fazendo isso, o o outro método diaSemana, passa a trazer os resultados em 
		inglês mesmo sem você ter alterado ele diretamente. Essa é a grande vantagem 
		de se usar orientação a objetos para reutilização de código:

		Calendario.diaSemana('31/12/2019')
		~> "tuesday"

*******************************************************************************/








/*******************************************************************************
 
	Tarefa 5:

		Defina a classe Agenda. Ela deve ter uma propriedade chamada contatos 
		inicializada com um array vazio. Deve ter um método chamado adicionaContato 
		que recebe os parâmetros nome, telefone e cria um objeto a ser adicionado na
		propriedade contatos. Essa classe deve ter também o método listaContatos que 
		retorna a lista de contatos armazenada na propriedade contatos.
		
*******************************************************************************/









/* ************************************* */
/* O código abaixo não deve ser alterado */
/* ************************************* */

describe("Programa 1", function() {

  it("Tarefa 1", function() {
    const motor1 = new Motor(2000, 'gasolina');
    const mensagem1 = 'Motor 2000 cilindradas a gasolina está ligado';
    expect( motor1.ligar() ).toEqual(mensagem1);
    
    const motor2 = new Motor(1000, 'àlcool');
    const mensagem2 = 'Motor 1000 cilindradas a àlcool está desligado';
    expect( motor2.desligar() ).toEqual(mensagem2);

  });

  it("Tarefa 2", function() {
    const calculadora = new Calculadora(10, 2);
    expect( calculadora.somar() ).toEqual(12);
    expect( calculadora.subtrair() ).toEqual(8);
    expect( calculadora.multiplicar() ).toEqual(20);
    expect( calculadora.dividir() ).toEqual(5);
  });

  it("Tarefa 3", function() {
    expect( Calendario.diaSemana('06/06/2019') ).toEqual('quinta-feira');
    expect( Calendario.diaSemana('31/12/2019') ).toEqual('terça-feira');
    expect( Calendario.diaSemana('21/08/2019') ).toEqual('quarta-feira');
  });

  it("Tarefa 4", function() {
    expect( CalendarioIngles.diaSemana('06/06/2019') ).toEqual('thursday');
    expect( CalendarioIngles.diaSemana('31/12/2019') ).toEqual('tuesday');
    expect( CalendarioIngles.diaSemana('21/08/2019') ).toEqual('wednesday');
  });

  it("Tarefa 5", function() {
    const agenda = new Agenda()
    agenda.adicionaContato('Maria', '+55 31 9988-7755')
    agenda.adicionaContato('João', '+55 31 7755-9988')
    expect( agenda.listaContatos()[0].nome ).toEqual('Maria');
    expect( agenda.listaContatos()[1].telefone ).toEqual('+55 31 7755-9988');
  });

});
