// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'What does not kill you, makes you stronger.';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - nuevoNum === 5; // Jejejejeje

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
    return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
    var resultado;
    resultado = x + y;
    return resultado;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
    var resultado_resta;
    resultado_resta = x - y;
    return resultado_resta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
    var resultado_multiplicacion;
    resultado_multiplicacion = x * y;
    return resultado_multiplicacion;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
    var resultado_division;
    resultado_division = x / y;
    return resultado_division;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
    var igualdad;
    if (x == y) {
      igualdad = true;
    } else {
      igualdad = false;
    }
    return igualdad;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var misma_longitud;
  if (str1.length == str2.length) {
    misma_longitud = true;
  } else {
    misma_longitud = false;
  }
  return misma_longitud;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    var menor90;
    if (num < 90) {
      menor90 = true;
      return menor90;
    } else {
      menor90 = false;
      return menor90;
    }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var mayor50;
  if (num > 50) {
    mayor50 = true;
    return mayor50;
  } else {
    mayor50 = false;
    return mayor50;
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
    var resto = x % y;
    return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
    var par_si;
    if (num % 2 == 0) {
      par_si = true;
    } else {
      par_si = false;
    }
    return par_si;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
    var par_no;
    if (num % 2 > 0) {
      par_no = true;
    } else {
      par_no = false;
    }
    return par_no;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
    var cuadrado = Math.pow(num, 2);
    return cuadrado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
    var cubo = Math.pow(num, 3);
    return cubo;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
    var exponente = Math.pow(num, exponent);
    return exponente;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
    var red_cercano = Math.round(num);
    return red_cercano;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
    var red_arriba = Math.ceil(num);
    return red_arriba;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
    var aleatorio = Math.random();
    return aleatorio;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
    var pos_neg;
    if (numero > 0) {
        pos_neg = 'Es positivo';
        return pos_neg;
    } else if (numero < 0) {
        pos_neg = 'Es negativo';
        return pos_neg;
    } else {
        pos_neg = false;
        return pos_neg;
    }
      
    }
  

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
    var exclama = str + '!';
    return exclama;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
    var nombreapellido = nombre + ' ' + apellido;
    return nombreapellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
    var saludo = 'Hola ' + nombre + '!';
    return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
    var area = alto * ancho;
    return area;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
    var perimetro = lado * 4;
    return perimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
    var areatri = base * altura / 2;
    return areatri;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
    var cambio = euro * 1.2;
    return cambio;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
    var datoincorrecto;
    var esvocal;
    console.log(letra.length);
    if (letra.length > 1) {
      datoincorrecto = 'Dato incorrecto';
      return datoincorrecto;
    } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      esvocal = 'Es vocal';
      return esvocal;
    } else {
      datoincorrecto = 'Dato incorrecto';
      return datoincorrecto;
    }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
