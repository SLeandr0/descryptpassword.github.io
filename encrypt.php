<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'];

    // Simulando a criptografia (substitua isso pela lógica real)
    $encryptedPassword = base64_encode($password);

    // Substitua as informações do banco de dados pelos seus dados reais
    $servername = "localhost";
    $username = "root";
    $password_db = "";
    $dbname = "local";

    // Tentar estabelecer a conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password_db, $dbname);

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO passwords (encrypted_password) VALUES ('$encryptedPassword')";

    // Executar a query SQL e verificar se ela foi bem-sucedida
    if ($conn->query($sql) === TRUE) {
        echo $encryptedPassword;
    } else {
        // Imprimir mensagens de erro caso a query não seja bem-sucedida
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Fechar a conexão com o banco de dados
    $conn->close();
}

?>

