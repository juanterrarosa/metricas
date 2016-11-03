$(function() {

	var imagenes = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg', 'fondo5.jpg', 'fondo6.jpg', 'fondo7.jpg', 'fondo8.jpg', 'fondo9.jpg', 'fondo10.jpg'];

		$('body.landing #page-wrapper').css({'background-image': '-moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/fondo/' + imagenes[Math.floor(Math.random() * imagenes.length)]});
	 	$('body.landing #page-wrapper').css({'background-image': '-webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/fondo/' + imagenes[Math.floor(Math.random() * imagenes.length)]});
		$('body.landing #page-wrapper').css({'background-image': '-ms-linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/fondo' + imagenes[Math.floor(Math.random() * imagenes.length)]});
		$('body.landing #page-wrapper').css({'background-image': 'linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/fondo/' + imagenes[Math.floor(Math.random() * imagenes.length)]});

  		$('body.is-mobile.landing #banner, body.is-mobile.landing .wrapper.style4').css({'background-image': '-moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/fondo/' + imagenes[Math.floor(Math.random() * imagenes.length)]});
  		$('body.is-mobile.landing #banner, body.is-mobile.landing .wrapper.style4').css({'background-image': '-webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/fondo/' + imagenes[Math.floor(Math.random() * imagenes.length)]});
		$('body.is-mobile.landing #banner, body.is-mobile.landing .wrapper.style4').css({'background-image': '-ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/fondo/' + imagenes[Math.floor(Math.random() * imagenes.length)]});
		$('body.is-mobile.landing #banner, body.is-mobile.landing .wrapper.style4').css({'background-image': 'linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/fondo/' + imagenes[Math.floor(Math.random() * imagenes.length)]});
});