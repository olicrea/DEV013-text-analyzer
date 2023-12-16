const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //EXPLICACIÓN: este código divide el texto en palabras utilizando el método split() donde los espacios servirán como separadores y luego usando return, devuelve el número de palabras del array con length 
    //- SEUDO-CÓDIGO:
    //- Separar las palabras a través de algún método
    //- Tomar en cuenta las palabras con letras sin excluir las que contengan números de alguna forma
    const words = text.trim().split(' ');
    //- Retornar el conteo de palabras
    return words.length;
  },
  //VARIANTES
  // const words = text.trim().split(" ").filter(testword => /^[a-zA-Z]+$/g.test(testword)); devuelve un arreglo de palabras y excluye las que contengan números
  // /^[a-zA-Z]+$/g incluye palabras que contengan letras y números mientras que /[a-zA-Z]+/g) solo toma en cuenta las que sean solo números
  // const words = text.split(" ").match(/[a-zA-Z]+/g); No funcionó porque .split devuelve array y .match solo funciona con cadenas de texto y no con arrays
  //______________________________
  
  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //- SEUDO CÓDIGO:
    //- obtener cada caracter sin distinción, incluyendo espacios
    return text.length;
  },
  //______________________________


  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //- SEUDO CÓDIGO:
    //- obtener cada caracter excluyendo espacios y signos de puntuación
    const letters = text.replace(/[^a-zA-Z\d]/g, '');
    // console.log(letters);
    return letters.length;
  },
  // ABCDáéíó   
  // const letters = text.replace(/[^a-zA-Z]/g,'').split('').filter(testword => /^[a-zA-Z]+$/g.test(testword));
  // const letters = text.trim().replace(/[^a-zA-Z]/g,'').filter(testword => /^[a-zA-Z]+$/g.test(testword));
  //______________________________


  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //- SEUDO CÓDIGO:
    //- saber cuántas palabras hay separándolas a través de los espacios entre ellas y alrededor de ellas
    const words = text.trim().split(' ');
    //- saber la cantidad de palabras en el array
    const totalWords = words.length;
    //- sumar los largos de las palabras uno por uno a través de iteración
    let totalSum = 0;
    for (let i = 0; i < totalWords; i++) {
      totalSum += words[i].length;
    }
    //- calcular promedio
    const averageWordLength = totalSum / totalWords;
    //- retornar el promedio, con 2 decimales
    return Number(averageWordLength.toFixed(2));
  },
  //______________________________
  
  
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.replace(/[^0-9]/g, '');
    return numbers.length;
  },
  //______________________________


  /*getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },*/
};
console.log(analyzer.getWordCount('Felicidad y paz 123 oli89 para234guas interior'));//7
console.log(analyzer.getCharacterCount('abc def hij 123 456'));//19
console.log(analyzer.getCharacterCountExcludingSpaces(' Felicidad 123 ;- oli345 y paz '));//22
console.log(analyzer.getCharacterCountExcludingSpaces(' Felicidad 123 ;- y paz '));//16
console.log(analyzer.getAverageWordLength(' luci mar oscar '));//4
console.log(analyzer.getNumberCount(' luci122 6 7 89 ma7ri oscar '));//8


export default analyzer;
