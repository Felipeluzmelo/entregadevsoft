const nome = document.querySelector('#nome');
const botaoTraduzir = document.querySelector('.textarea__wrapper button');

var nomeArray = [];
var normaArray = [];

function quebrarNome() {
	return (nomeArray = nome.value.split(' '));
}

function ultimoSobrenome() {
	quebrarNome();
	console.log(nomeArray);
	normaArray = nomeArray;
	return normaArray.unshift(
		normaArray.pop(normaArray[normaArray.length - 1]).toUpperCase() + ','
	);
}

function sobrenomeMeio() {
	quebrarNome();
	ultimoSobrenome();

	if (normaArray.length > 2) {
		const tempArray = normaArray.slice(2, normaArray.length);

		normaArray.splice(2, normaArray.length - 2);
		tempArray.forEach(element => {
			let abrev = element.charAt();

				if (
				element == 'das' ||
				element == 'do' ||
				element == 'dos' ||
				element == 'de' ||
				element == 'da' ||
				element == 'e'
			) {
			} else {
				normaArray[normaArray.length] = `${abrev.toUpperCase()}.`;
			}
		});
		resultado.textContent = normaArray.join(' ');
	}
}


botaoTraduzir.addEventListener('click', sobrenomeMeio);