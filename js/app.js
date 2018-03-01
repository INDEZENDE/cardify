
// Escribe tu código aqui----
const element = document.getElementById("gallery");
const array = Array.from(element.getElementsByTagName("img")); //Toma el elemento html y lo regresa en un arreglo
//Función que crea y agrega a DOM

let createElements = (img, alt, element) => {
  let imgArray=Array.from(img);
  let altArray=Array.from(alt);
  console.log(img[0], alt[0]);
 document.body.removeChild(element);
  for(let i=0; i<img.length; i++){
      let figure = document.createElement('figure');
      figure.setAttribute('align', 'center');
      let img =document.createElement('img');
      img.setAttribute('src', imgArray[i]);
      img.setAttribute('width', '300px');

      figure.appendChild(img);
      let figcaption =document.createElement('figcaption');
      figcaption.innerHTML= altArray[i];
      figure.appendChild(figcaption);
      document.body.appendChild(figure);
      // console.log(element);
    }
return element;
}

//funcion get and save src y alt
let fGetSaveSrc = (array, element) => {
  let $arraySrc=[];
  let $arrayAlt=[];
  array.forEach(element => {
    $arraySrc.push(element.getAttribute("src"));//Extrae el valor de cada uno de los atributos src
    $arrayAlt.push(element.getAttribute("alt"));//Extrae el valor de cada uno de los atributos src
  });
  console.log($arraySrc);
  console.log($arrayAlt);
createElements($arraySrc, $arrayAlt, element);

 return ($arraySrc);
}

// Función  que borra el contenedor
let fDelete = element => {
  element.innerHTML = '';
  return element;
}

fGetSaveSrc(array, element);
fDelete(element);
