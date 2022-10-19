// Exercício 01

function cubicSquare(){

  for(let square = 1; square <= 10; square++){
    console.log(square*square*square);
  }

}
cubicSquare()

// Exercício 02

function divisiblesFor() {
  let limitador = parseFloat(prompt("digite um número"));
  let divisor = parseFloat(prompt("digite um número"));
  let restoDivisao = limitador / divisor;

  for (numero = 1; numero <= limitador; numero++) {
    if (numero % restoDivisao == 0) {
      console.log(numero);
    }
  }
}
divisiblesFor()

// Exercício 03

function stringElement(string, numero){
  for(let elemento = 0; elemento<string.length; elemento++){

if(string[elemento] == numero){
  return (`Retorna ${string[elemento].toUpperCase()} pois esta é a letra da posição ${elemento}`)
}

  }
return "Não foi encontrado"

}

let retornoElemento = stringElement("banana", "b")
console.log (retornoElemento)

// Exercício 04

function stringSlicer (str, nm){
  let lett = ""
  for (let cs = 0; cs<nm; cs++){
    if(str[cs] === nm){
      str[cs] = ""
    }
    else{
      lett += str[cs]
    }
  }
  return (`Retorna ${lett} pois são os ${nm} caracteres da string`)
}

let rstd = stringSlicer("boneca", 3);
console.log(rstd)



// Exercício 05

function stringRest(stringS, numeroS) {
  let palavra = "";
  let subs = 0;

  for (let sli = 0; sli < stringS.length; sli++) {
    palavra += stringS[sli];
    subs = palavra.substring(numeroS);
  }
  return (` Retorna "${subs}", pois são os caracteres da posição ${numeroS}`);
}

let retornoSli = stringRest("calopsita", 5);
console.log(retornoSli);

// Exercício 06

function countVowels(script) {
  let contadorLetra = 0;

  for (let cont = 0; cont < script.length; cont++)
    if (
      script[cont] == "a" ||
      script[cont] == "e" ||
      script[cont] == "i" ||
      script[cont] == "o" ||
      script[cont] == "u"
    ) {
      contadorLetra++;
    }
  return contadorLetra;
}
let result = countVowels("abobora");
console.log(`Retorna ${result} pois tem ${result} na palavra`)

// Exercício 07

function countTextOccurrences(texto, letr){
  let contarLetras = 0
for (let c = 0; c<texto.length; c++){
if(texto[c] ===  letr){
  contarLetras++
}

}
return (`Retorna ${contarLetras}, pois a letra ${letr}, aparece ${contarLetras}`)

}
let textoOcorrencia = countTextOccurrences("morango", "m")
console.log(textoOcorrencia)

// Exercício 08

function textBackwards(contra){
  let inicial = "";
  for(let inv = contra.length -1; inv > 0; inv--){
    inicial += contra[inv]

  }
console.log(inicial)

}

textBackwards("abacaxi")

// Exercício 09

function removeBlank(remove){
  let blank= ""

  for(rb = 0; rb <remove.length; rb++){
    if(remove[rb] !== " "){
      blank += remove[rb]
    }
  }
  return blank
}

let conversao = removeBlank("Não ficará espaço em branco");
console.log(conversao)

// Exercicio 10

function encryptText(text){



let frase = ""
for(ind = 0; ind <text.length; ind++){

  if(text[ind] == "a"){
    frase += "x"
  }
  else if(text[ind] == "e"){
    frase += "y"
  }
  else if(text[ind] == "i"){
    frase += "w"
  }
  else if(text[ind] == "o"){
    frase += "k"
  }
  else if (text[ind] == "u"){
    frase += "z"
  }

  else{
    frase += text[ind]
  }
  
}

return frase

}

let fraseCompleta = encryptText("eu gosto de biscoito e amoras");
console.log(fraseCompleta)