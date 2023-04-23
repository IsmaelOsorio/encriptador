let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let copiar = document.getElementById("copiar");

/**
 * Encripta el texto que puso el usuario
 * @param {string} texto texto a encriptar
 * @returns texto encriptado
 */
function encriptarTexto(texto) {
  /**
   * La letra "e" es convertida para "enter"
   * La letra "i" es convertida para "imes"
   * La letra "a" es convertida para "ai"
   * La letra "o" es convertida para "ober"
   * La letra "u" es convertida para "ufat"
   */
  texto = texto.replaceAll("e", "enter");
  texto = texto.replaceAll("i", "imes");
  texto = texto.replaceAll("a", "ai");
  texto = texto.replaceAll("o", "ober");
  texto = texto.replaceAll("u", "ufat");

  return texto;
}

/**
 * Desencripta el texto que puso el usuario
 * @param {string} texto texto a desencriptar
 * @returns texto desencriptando
 */
function desencriptarTexto(texto) {
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");

  return texto;
}

function aparecerResultado() {
  /**
   * Desaparece la imagen y los textos cuando no se ha encriptado nada
   */
  document.getElementById("muneca").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").style.display = "none";

  /**
   * Aparece la caja de texto con el resultado
   */
  document.getElementById("resultado").style.display = "block";

  /**
   * Enecuentra el tamaño de la pantalla para editar el css
   */
  if (anchoPantalla == 768) {
    document.getElementById("textoEncriptado").style.height = "343px";
  }

  if (anchoPantalla == 375) {
    document.getElementById("textoEncriptado").style.height = "595px";
  }
}

encriptar.addEventListener('click', function () {
  let textoEncriptar = document.getElementById("textoArea").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""); // Convierte el texto en minusculas y quita los acentos 
  let anchoPantalla = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // Obtiene el tamaño de la pantalla. NOTA: Intente con window.innerWidth pero no me daba el tamaño correcto cuando se trata de celulares

  if (textoEncriptar.length > 0) {
    document.getElementById("textoResultado").value = encriptarTexto(textoEncriptar); // Manda el texto a la funcion para encriptarlo y coloca el resultado en el textarea
    document.getElementById("textoArea").value = ""; // Limpia el textarea
    aparecerResultado();  
  } else {
    alert("No ha escrito algo");
  }
});

desencriptar.addEventListener('click', function () {
  let textoDesencriptar = document.getElementById("textoArea").value;

  if (textoDesencriptar.length > 0) {
    document.getElementById("textoResultado").value = desencriptarTexto(textoDesencriptar); // Manda el texto a la funcion para desencriptarlo y coloca el resultado en el textarea
    document.getElementById("textoArea").value = ""; // Limpia el textarea
    aparecerResultado();
  } else {
    alert("No ha escrito algo");
  }
});

copiar.addEventListener('click', function () {
  let textArea = document.getElementById("textoResultado");
  textArea.select();
  document.execCommand('copy');
});