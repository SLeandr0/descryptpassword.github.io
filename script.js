function encryptPassword() {
    var encryptInput = document.getElementById('encryptInput');
    var encryptedPasswordInput = document.getElementById('encryptedPassword');
    var copyMessage = document.getElementById('copyMessage');

    // Simulando a criptografia
    var encryptedPassword = btoa(encryptInput.value);

    // Exibindo a senha criptografada
    encryptedPasswordInput.value = encryptedPassword;
    copyMessage.innerHTML = 'Encrypted password with success!';

    // Enviar a senha criptografada para o servidor e salvar no banco de dados
    saveEncryptedPassword(encryptedPassword);
}

function decryptPassword() {
    var decryptInput = document.getElementById('decryptInput');
    var decryptedPasswordInput = document.getElementById('decryptedPassword');
    var copyMessage = document.getElementById('copyMessage');

    // Obtendo a senha criptografada
    var encryptedPassword = decryptInput.value;

    // Simulando a descriptografia
    var decryptedPassword = atob(encryptedPassword);

    // Exibindo a senha descriptografada
    decryptedPasswordInput.value = decryptedPassword;
    copyMessage.innerHTML = 'Decrypted password with success!';
}

function copyToClipboard(inputId) {
    var input = document.getElementById(inputId);
    input.select();
    document.execCommand('copy');

    var copyMessage = document.getElementById('copyMessage');
    copyMessage.innerHTML = 'Copied to clipboard!';
}

function saveEncryptedPassword(encryptedPassword) {
    console.log('Enviando requisição para salvar senha criptografada...');

    fetch('savePassword.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'encryptedPassword=' + encodeURIComponent(encryptedPassword),
    })
    .then(response => response.text())
    .then(responseText => {
        console.log('Resposta do servidor:', responseText);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}
