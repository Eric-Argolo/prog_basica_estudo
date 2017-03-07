function fecharSemestre(){
	num_alunos = parseInt(prompt("Digite o numero de alunos da turma: "));
	media_turma = 0.0;
	numero_aprovados = 0;
	numero_emfinal = 0;
	numero_reprovados = 0;

	alunos=[]

	for(i=0;i<num_alunos;i++){
		
		nome = prompt("Digite o nome do aluno "+(i+1)+":");

		nota1=-1;
		while(nota1<0 || nota1>10){
			nota1 = parseFloat(prompt("Digite a nota 1 do aluno "+nome));
		}

		nota2=-1;
		while(nota2<0 || nota2>10){
			nota2 = parseFloat(prompt("Digite a nota 2 do aluno "+nome));
		}

		media = (nota1+nota2)/2;
		if(media>=7){
			situacao = "Aprovado"
			numero_aprovados++;
		}

		else if(media>=1.5){
			situacao = "Em prova final"
			numero_emfinal++;
		}

		else{
			situacao = "Reprovado"
			numero_reprovados++;
		}

		aluno = {
			nome: nome,
			nota1: nota1,
			nota2: nota2,
			media: media,
			situacao: situacao
		}

		alunos.push(aluno);
	}

	document.write("<br><table border><tr><th>Nome</th><th>Nota 1</th><th>Nota 2</th><th>Media</th><th>Situacao</th></tr>");
	for(i=0;i<num_alunos;i++){
		document.write("<tr><td>"+alunos[i].nome+"</td>"+"<td>"+alunos[i].nota1+"</td>"+"<td>"
		+alunos[i].nota2+"</td><td>"+alunos[i].media+"</td><td>"+alunos[i].situacao+"</td></tr>");
		media_turma=media_turma+alunos[i].media
	}
	document.write("</table><br>");
	document.write("Media da classe = "+parseFloat((media_turma/num_alunos))+"<br>");
	document.write("Numero de aprovados = "+numero_aprovados+"<br>");
	document.write("Numero de alunos em prova final = "+numero_emfinal+"<br>");
	document.write("Numero de reprovados = "+numero_reprovados+"<br>");
}