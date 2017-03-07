function fecharSemestre(){
	var alunos=[];	
	var num_alunos = parseInt(prompt("Digite o numero de alunos da turma: "));

	preencheDados(num_alunos, alunos);	

	exibeDados(alunos);	
}

function preencheDados(num_alunos, alunos){
	for(i=0;i<num_alunos;i++){
		
		nome = prompt("Digite o nome do aluno "+(i+1)+":");

		nota1=-1;
		while(validaNota(nota1)==false){
			nota1 = parseFloat(prompt("Digite a nota 1 do aluno "+nome));
		}

		nota2=-1;
		while(validaNota(nota2)!=true){
			nota2 = parseFloat(prompt("Digite a nota 2 do aluno "+nome));
		}

		media = (nota1+nota2)/2;
		situacao = verificaSituacao(media);

		aluno = {
			nome: nome,
			nota1: nota1,
			nota2: nota2,
			media: media,
			situacao: situacao
		}
		alunos.push(aluno);
	}
	return alunos;
}

function validaNota(nota){
	if(nota<0 || nota>10){
		return false;
	}
	else{
		return true;
	}
}

function verificaSituacao(media){
	if(media>=7){
		return "Aprovado";
	}

	else if(media>=1.5){
		return "Em prova final";
	}

	else{
		return "Reprovado";		
	}
}

function exibeDados(alunos){
	document.write("<br><table border><tr><th>Nome</th><th>Nota 1</th><th>Nota 2</th><th>Media</th><th>Situacao</th></tr>");
	media_turma=0;
	numero_reprovados=0;
	numero_aprovados=0;
	numero_emfinal=0;
	for(i=0;i<alunos.length;i++){
		if(alunos[i].situacao=="Aprovado"){
			numero_aprovados++;
		}
		else if(alunos[i].situacao=="Em prova final"){
			numero_emfinal++;
		}
		else{
			numero_reprovados++;
		}
		document.write("<tr><td>"+alunos[i].nome+"</td>"+"<td>"+alunos[i].nota1+"</td>"+"<td>"
		+alunos[i].nota2+"</td><td>"+alunos[i].media+"</td><td>"+alunos[i].situacao+"</td></tr>");
		media_turma=media_turma+alunos[i].media;
	}
	document.write("</table><br>");
	document.write("Media da classe = "+parseFloat((media_turma/alunos.length))+"<br>");
	document.write("Numero de aprovados = "+numero_aprovados+"<br>");
	document.write("Numero de alunos em prova final = "+numero_emfinal+"<br>");
	document.write("Numero de reprovados = "+numero_reprovados+"<br>");
}