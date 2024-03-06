<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $encryptedPassword = $_POST['encryptedPassword'];

    // Simulando a descriptografia (substitua isso pela lógica real)
    $decryptedPassword = base64_decode($encryptedPassword);

    echo $decryptedPassword;
}

?>
