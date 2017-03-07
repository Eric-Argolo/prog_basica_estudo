var Cliente = function (codCliente, nomeCliente, cpfCliente, enderecoCliente){ // construção do objeto utilizando parâmetros passados
	this.TIPO_CLIENTE = "Vip"; // atributo constante
	this.codCliente = codCliente;
	this.nome = nomeCliente;
	this.cpf = cpfCliente;
	this.endereco = enderecoCliente;
}

this.mostrarInfo = function(){ // apesar de Cliente herdar mostrarInfo() de Pessoa, este mostrarInfo() de Cliente é que será utilizado 
		alert("Código: "+ this.codCliente+"\nNome: "+ this.nome+"\nCPF: "+this.cpf+"\nEndereço: "+this.endereco);
	}

Cliente.prototype = new Pessoa();

Cliente.TIPO_CLIENTE = "Vip Estático" // atributo estático

// atributos e métodos estáticos não são herdados