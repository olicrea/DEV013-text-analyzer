const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //- SEUDO-CÓDIGO:
    //- Separar las palabras a través de algún método
    //- Tomar en cuenta las palabras con letras sin excluir las que contengan números de alguna forma
    const words = text.trim().split(' ');
    //- Retornar el conteo de palabras
    return words.length;
  },
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
    const words = text.trim().split(' '); //(recuerda: split arroja un array)
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
    //- SEUDO CÓDIGO:
    //- descartar todo lo que no sea número
    //- contar cuántos números hay, no cuánto suman entre ellos
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers) {
      return numbers.length;
    }
    else {
      return 0;
    }
  },
  //______________________________


  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //- SEUDO CÓDIGO:
    //- dividir en palabras
    const words = text.trim().split(' ');
    //- ver qué palabras son números (cifras válidas) antes de sumarlo (agregarlo al acumulador)
    let sum = 0
    for (let i = 0; i < (words.length); i++) {
      if (Number(words[i])) { //Number() se utiliza para convertir un valor a su equivalente numérico.
        //- sumar las cifras válidas, incluyendo las que tengan decimales
        sum += parseFloat(words[i])
      } // parseFloat() permite convertir una cadena a un número porque permite la conversión de cadenas con decimales.
    }
    return sum.toFixed(2);
  },
  /* Esta función no suma decimales ni cifras como tal, solo los dígitos encontrados, uno por uno:

  const onlyNumbers = text.replace(/[^0-9]/g, '');
    const figures = onlyNumbers.split(' ');
  
    let sum = 0;
    for (let i = 0; i < onlyNumbers.length; i++) {
      sum += parseFloat(onlyNumbers[i]);
    }
    return sum;*/
}

/*console.log(analyzer.getWordCount('Felicidad y paz 123 oli89 para234guas interior'));//7
console.log(analyzer.getCharacterCount('abc def hij 123 456'));//19
console.log(analyzer.getCharacterCountExcludingSpaces(' Felicidad 123 ;- oli345 y paz '));//22
console.log(analyzer.getCharacterCountExcludingSpaces(' Felicidad 123 ;- y paz '));//16
console.log(analyzer.getAverageWordLength(' luci mar oscar '));//4
console.log(analyzer.getNumberCount(' luci322 6 7 89 ma7ri oscar '));//8
console.log(analyzer.getNumberSum(' saco3 casa 2.1 2 '));//4.1*/


/*const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const TEST_TEXT_DECIMALS = 'Calcular la suma de 1.65 más 0.15 y más 1.10';*/

export default analyzer;
