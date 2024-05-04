function inverterTexto() {
      const inputText = document.getElementById('inverter').value;
      const reversedText = inputText.split('').reverse().join('');
      document.getElementById('result').value = reversedText;
      return false;
}

function limparInputs() {
      document.getElementById('inverter').value = "";
      document.getElementById('result').value = "";
}