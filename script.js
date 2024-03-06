function encryptPassword() {
    var passwordInput = document.getElementById('password');
    var encryptedPasswordInput = document.getElementById('encryptedPassword');
    var copyMessage = document.getElementById('copyMessage');

    // Simples exemplo de criptografia (não use em produção real)
    var encryptedPassword = btoa(passwordInput.value);

    encryptedPasswordInput.value = encryptedPassword;
    copyMessage.innerHTML = "<p>Copied to clipboard!</p>";
}

function decryptPassword() {
    var encryptedPasswordInput = document.getElementById('encryptedPassword');
    var decryptedPasswordInput = document.getElementById('decryptedPassword');
    var displayDecryptedPasswordInput = document.getElementById('displayDecryptedPassword');
    var copyMessage = document.getElementById('copyMessage');

    // Simples exemplo de descriptografia (não use em produção real)
    var decryptedPassword = atob(encryptedPasswordInput.value);

    decryptedPasswordInput.value = decryptedPassword;
    displayDecryptedPasswordInput.value = decryptedPassword;
    copyMessage.innerHTML = ""; // Limpa a mensagem de cópia
}

function copyToClipboard(inputId) {
    var input = document.getElementById(inputId);
    input.select();
    document.execCommand("copy");

    var copyMessage = document.getElementById('copyMessage');
    copyMessage.innerHTML = "<p>Copied to clipboard!</p>";
}
