<?php

$names = 1;
$phone = $_POST['phone'];
$street = $_POST['street'];
$number_house = $_POST['number_house'];
$pid = $_POST['pid'];





$token = "1943097935:AAEMomJGzrU_8RXADyunYxOKQ8z1LOxfZIQ";
$chat_id = "-557494888";
$arr = array(
  'Имя пользователя: ' => $names,
    'Телефон: ' => $phone,
  'Вулиця: ' => $street,
    ' Номер будинку: ' => $number_house,
        ' Номер підїзду : ' => $pid,








);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
     alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');

} else {
   alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
}
?>