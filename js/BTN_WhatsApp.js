/* button  #BTN_REMOVE_PEDIDO */
    $(document).on("click", "#BT_CHAMAWHATSAPP", function(evt){
	
	var nome_cli = document.getElementById("nome").value ;
	var telefone_cli = document.getElementById("telefone").value ;
	var empresa_cli = document.getElementById("empresa").value ;
		
	if(nome_cli == ""){
		 alert("Qual o seu nome?");
		 document.getElementById('nome').focus();
			
		}
		
	else if(telefone_cli == ""){
			
		alert("Qual o numero do seu telefone?");
		document.getElementById('telefone').focus();
			
		}
		


	else{
			
			var dados_cliente = [];
		    dados_cliente += "Olá, estou em busca de um fornecedor de joias de prata 925";
			dados_cliente += "%0A";
			dados_cliente += "*-----MEUS DADOS-----*";
			dados_cliente += "%0A";
			dados_cliente += "Nome: " + "*" + nome_cli + "*";
			dados_cliente += "%0A";
			dados_cliente += "Celular: " + telefone_cli;
		
			window.open("https://api.whatsapp.com/send?l=pt_BR&phone=5514991058411&text="+ dados_cliente);
		}
	
		
	});

