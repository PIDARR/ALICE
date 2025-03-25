function encryptSHA256() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const hashedText = CryptoJS.SHA256(inputText).toString();
        document.getElementById('outputText').value = hashedText;
    } else {
        alert("Please enter text to encrypt.");
    }
}

function decryptSHA256() {
    alert("SHA-256 is a one-way hash function. Decryption is not possible.");
}
