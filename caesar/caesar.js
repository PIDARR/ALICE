const shift = 3;

function encryptCaesar() {
  const inputText = document.getElementById('inputText').value;
  let encryptedText = '';
  
  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    if (char.match(/[a-zA-Z]/)) {
      const startCode = (char === char.toLowerCase()) ? 97 : 65;
      encryptedText += String.fromCharCode((char.charCodeAt(0) - startCode + shift) % 26 + startCode);
    } else {
      encryptedText += char;
    }
  }

  document.getElementById('outputText').value = encryptedText;
}

function decryptCaesar() {
  const inputText = document.getElementById('inputText').value;
  let decryptedText = '';

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    if (char.match(/[a-zA-Z]/)) {
      const startCode = (char === char.toLowerCase()) ? 97 : 65;
      decryptedText += String.fromCharCode((char.charCodeAt(0) - startCode - shift + 26) % 26 + startCode);
    } else {
      decryptedText += char;
    }
  }

  document.getElementById('outputText').value = decryptedText;
}
