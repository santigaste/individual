const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const AUTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

// AHORA AGREGO COD PARA EDITAR BARRA

let array = [];

function mostrar(){
  let contenido = ``
  if(localStorage.getItem('userName')){
      array = JSON.parse(localStorage.getItem('userName'))

      array.forEach(element => {
          contenido += `<h3>${element}</h3>`
      });
  } else {
      localStorage.setItem('userName', '')
  }
  document.getElementById('username').innerHTML = contenido;
}



document.addEventListener("DOMContentLoaded", ()=>{
  mostrar();
  //función para agregar el texto del input
  document.getElementById('regBtn').addEventListener("click", (e)=>{
      e.preventDefault();
      let item = document.getElementById('email')
      if(item.value){
          array.push(item.value)
          localStorage.setItem('userName',JSON.stringify(array));
          mostrar();
          item.value = '';
      }
  })
  
  //función para limpiar el localstorage y el contenedor
  document.getElementById('limpiar').addEventListener('click', (e)=>{
      e.preventDefault();
      localStorage.setItem('userName','')
      array = [];
      mostrar();
  })
})