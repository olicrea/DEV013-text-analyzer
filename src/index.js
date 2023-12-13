import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Uso de selectores del DOM

const textarea = document.querySelector("textarea") //querySelector seleccionará el primer elemento que coincida con la etiqueta textarea. Si hubiese más de un elemento que coincida lo mejor sería usar identificador único 

const button = document.getElementById("reset-button");

//Manejo de eventos del DOM

button.addEventListener("click", resetTextarea);
textarea.addEventListener("keyup", appAnalyzer);

function resetTextarea() {
  textarea.value = "";
  textarea.placeholder = "Write what you want to analyze...";
}

function appAnalyzer() {
  //
}
