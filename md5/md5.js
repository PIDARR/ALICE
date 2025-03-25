function encryptMD5() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const hashedText = CryptoJS.MD5(inputText).toString();
        document.getElementById('outputText').value = hashedText;
    } else {
        alert("Please enter text to encrypt.");
    }
}

function decryptMD5() {
    alert("MD5 is a one-way hash function. Decryption is not possible.");
}
