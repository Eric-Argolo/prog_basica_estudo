var Pessoa = function (){
	//atributos públicos
	this.nome;
	this.cpf;
	this.endereco;

	//atributo privado
	var mensagem = "mensagem privada!"

	//método público
	this.mostrarInfo = function(){
		alert("Nome: "+ this.nome+"\nCPF: "+this.cpf+"\nEndereço: "+this.endereco);
	}

	this.mostrarMsgPrivada = function(){ //método público utilizando atributo privado
		alert(mensagem);	
	}

	var formataCPF = function(cpfS){ //método privado que não pode ser acessado diretamente por um objeto 
		return cpfS.substring(0,3)+"."+cpfS.substring(3,6)+"."+cpfS.substring(6,9)+"-"+cpfS.substring(9);
	}

	this.cpfFormatado = function(){ //método público para acessar um método privado recebe o cpf do objeto (Pessoa) como parâmetro
		alert (formataCPF(this.cpf));
	}
}