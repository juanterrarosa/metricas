function mostrarReferencia(){
	var ruta = document.getElementById('radiodesafio');
	if (ruta.checked == true) {
	document.getElementById('activar-desafio').style.display='initial';
	document.getElementById('team').required = true;
	document.getElementById('steam').required = true;
	document.getElementById('rango1').required = true;
	document.getElementById('rango2').required = true;
	document.getElementById('rango3').required = true;
	document.getElementById('rango4').required = true;
	document.getElementById('rango5').required = true;
	} else {
	document.getElementById('activar-desafio').style.display='none';
	document.getElementById('team').required = false;
	document.getElementById('steam').required = false;
	document.getElementById('rango1').required = false;
	document.getElementById('rango2').required = false;
	document.getElementById('rango3').required = false;
	document.getElementById('rango4').required = false;
	document.getElementById('rango5').required = false;

	}
	

}