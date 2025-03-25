const key = 'your-key-here-16';

function encryptAES() {
  const inputText = document.getElementById('inputText').value;
  const encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
  document.getElementById('outputText').value = encryptedText;
}

function decryptAES() {
  const encryptedText = document.getElementById('inputText').value;
  const bytes = CryptoJS.AES.decrypt(encryptedText, key);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  document.getElementById('outputText').value = decryptedText;
}
