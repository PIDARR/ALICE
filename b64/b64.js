function encodeText() {
    const input = document.getElementById("inputText").value;
    const encoded = btoa(input);
    document.getElementById("outputText").value = encoded;
  }
  

  function decodeText() {
    const input = document.getElementById("inputText").value;
    try {
      const decoded = atob(input);
      document.getElementById("outputText").value = decoded;
    } catch (e) {
      document.getElementById("outputText").value = "Invalid Base64 input";
    }
  }
  