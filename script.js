const textBox = document.getElementsByTagName('textBox');
const resultado = document.querySelector('.nome-traduzido h3');

for (let i = 0; i < textBox.length; i++) {
	textBox[i].setAttribute(
		"style",
		"height:" + textBox[i].scrollHeight + "px;overflow-y:hidden;"
	);
	textArea[i].addEventListener("input", OnInput, false);
}

function entrada() {
	this.style.height = 0;
	this.style.height = this.scrollHeight + "px";
}


resultado.addEventListener("click", function () {
	document.execCommand("copy");
});


resultado.addEventListener("copy", function (event) {
	if (event.clipboardData) {
		event.clipboardData.setData("text/plain", result.textContent);
		alert("Nome copiado.");
	}
	event.preventDefault();
});