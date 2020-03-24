
var itens_valor = [],itens_peso = []



function add_item() {
	

	var itens = document.getElementById('itens'),valor = document.getElementById('valor'),peso = document.getElementById('peso')


	if(valor.value > 0 && peso.value > 0){

		if(itens_valor.indexOf(valor.value) == -1 || itens_peso.indexOf(peso.value) == -1){
			
			var op = document.createElement('OPTION')

			op.text = `VALOR = $${valor.value} PESO = ${peso.value}KG`

			itens.appendChild(op)
			itens_valor.push(valor.value)
			itens_peso.push(peso.value)

		}else{

		   window.alert("Número repetido!. Informe um novo número")

		}

	}else{

		window.alert("Entradas inválidas")

	}


      
}


function add_peso_mochila(){

	var capacidade = document.getElementById('cap')

	return capacidade.value

}



function inserir() {


	var resultado = document.getElementById("resultado")

	mochila_peso = add_peso_mochila()
	quantidade_itens = itens_valor.length

	var tabela = []

	if(mochila_peso > 0 && quantidade_itens > 0){
		
		for (var i = 0; i < quantidade_itens + 1; i++) {
			

			tabela[i] = new Array(mochila_peso + 1)

		}


		for (var l = 0; l <= quantidade_itens; l++) {
			
			tabela[l][0] = 0

		}


		for (var c = 0; c <= mochila_peso; c++) {
			
			tabela[0][c] = 0

		}


		for(var lin= 1; lin <= quantidade_itens; lin++){


			for(var col = 1; col <= mochila_peso; col++){

				if(itens_peso[lin - 1] <= col){

					var sub = col - itens_peso[lin - 1]
					var indice = tabela[lin - 1][sub]
					tabela[lin][col] = itens_valor[lin - 1] + indice


				}else{

					if(tabela[lin - 1][col] > 0){

						tabela[lin][col] = tabela[lin - 1][col]

					}else{

						tabela[lin][col] = 0

					}

				}

			}

		}

		var linha = quantidade_itens
		var coluna = mochila_peso
		var total = 0


		while(linha > 0){

			if(tabela[linha][coluna] > tabela[linha - 1][coluna]){

				total+=Number(itens_valor[linha - 1])
				add(itens_valor[linha - 1],itens_peso[linha - 1])
				var subtr = coluna - itens_peso[linha - 1]
				coluna = subtr

			}

			linha--

		}

		resultado.innerHTML = "$"+ total

	}else{

	 	window.alert("Adicione os paramêtros nos campos determinados")

	}

}



function add(v,p) {
			
		var itens2 = document.getElementById("itens2")
		var op = document.createElement("OPTION")

		op.innerHTML = `VALOR:$${v} PESO:${p}KG`
		itens2.appendChild(op)

}