<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kravchukmaxym@gmail.com';          // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Rhfdxer1988';                      // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('kravchukmaxym@gmail.com');            // От кого будет уходить письмо?
$mail->addAddress('kravchukmaxym@gmail.com');         // Кому будет уходить письмо
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name. ' оставил заявку, его телефон ' .$phone;
$mail->AltBody = '';

if($mail->send()) {
  echo 'Mail send';
} else {
  echo 'Error';
}
?>