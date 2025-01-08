// Function to encode the input text to Base64
function encodeText() {
    const input = document.getElementById("inputText").value;
    const encoded = btoa(input); // `btoa` encodes the input to Base64
    document.getElementById("outputText").value = encoded; // Display the encoded result
  }
  
  // Function to decode the Base64 input text
  function decodeText() {
    const input = document.getElementById("inputText").value;
    try {
      const decoded = atob(input); // `atob` decodes Base64 to original text
      document.getElementById("outputText").value = decoded; // Display the decoded result
    } catch (e) {
      document.getElementById("outputText").value = "Invalid Base64 input"; // Handle error if input is not valid Base64
    }
  }
  