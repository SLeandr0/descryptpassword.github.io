    <?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $encryptedPassword = $_POST['encryptedPassword'];

    // Substitua as informações do banco de dados pelos seus dados reais
    $servername = "localhost";
    $username = "root";
    $password_db = "root";
    $dbname = "local";

    // Tentar estabelecer a conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password_db, $dbname);

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Utilize a função htmlspecialchars para evitar SQL Injection
    $encryptedPassword = htmlspecialchars($encryptedPassword, ENT_QUOTES, 'UTF-8');

    $sql = "INSERT INTO passwords (encrypted_password) VALUES ('$encryptedPassword')";

    // Executar a query SQL e verificar se ela foi bem-sucedida
    if ($conn->query($sql) === TRUE) {
        echo 'Password saved successfully!';
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Fechar a conexão com o banco de dados
    $conn->close();
}

?>


