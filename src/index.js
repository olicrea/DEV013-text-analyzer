import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Uso de selectores del DOM

const textarea = document.querySelector("textarea") //querySelector seleccionará el primer elemento que coincida con la etiqueta textarea. Si hubiese más de un elemento que coincida lo mejor sería usar identificador único 

const button = document.getElementById("reset-button");

//Manejo de eventos del DOM

function resetTextarea() {
  textarea.value = "";
  textarea.placeholder = "Write what you want to analyze...";
}

button.addEventListener("click", resetTextarea);

textarea.addEventListener("keyup", function() {

  const wordCount = analyzer.getWordCount(textarea.value);
  document.querySelector('li.item-odd:nth-child(1)').textContent = 'Word count: ' + wordCount;

  const characterCount = analyzer.getCharacterCount(textarea.value);
  document.querySelector('li.item-pair:nth-child(2)').textContent = 'Character count: ' + characterCount;

  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  document.querySelector('li.item-odd:nth-child(3)').textContent = 'Character no spaces count: ' + characterCountExcludingSpaces;

  const numberCount = analyzer.getNumberCount(textarea.value);
  document.querySelector('li.item-pair:nth-child(4)').textContent = 'Number count: ' + numberCount;

  const numberSum = analyzer.getNumberSum(textarea.value);
  document.querySelector('li.item-odd:nth-child(5)').textContent = 'Number sum: ' + numberSum;

  const averageWordLength = analyzer.getAverageWordLength(textarea.value);
  document.querySelector('li.item-pair:nth-child(6)').textContent = 'Word length average: ' + averageWordLength;

});