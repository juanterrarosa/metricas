<?php

$email_to = "info@fenix-arg.com.ar";
$email_subject = "Eligio: " . $_POST['desafiomensaje'];

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "Apellido: " . $_POST['mail'] . "\n";
$email_message .= "E-mail: " . $_POST['steam'] . "\n";
$email_message .= "Teléfono: " . $_POST['team'] . "\n";
$email_message .= "Mensaje: " . $_POST['mensaje'] . "\n";
$email_message .= "Rango Jugador 1: " . $_POST['rango1'] . "\n";
$email_message .= "Rango Jugador 2: " . $_POST['rango2'] . "\n";
$email_message .= "Rango Jugador 3: " . $_POST['rango3'] . "\n";
$email_message .= "Rango Jugador 4: " . $_POST['rango4'] . "\n";
$email_message .= "Rango Jugador 5: " . $_POST['rango5'] . "\n";


if (mail($email_to, $email_subject, $email_message)){
	echo "El mensaje se envio con exito";
}else{
	echo "Hubo un error al enviar el mensaje, intentelo nuevamente";
}

header('Location: http://www.fenix-arg.com.ar/');
?>