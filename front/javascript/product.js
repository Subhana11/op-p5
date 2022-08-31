// récupération URL actuelle
const currentUrl = window.location.href;
const url = new URL(currentUrl);
// récupération de l'id du produit à partir de l'url actuelle pour pouvoir contacter l'API
const id = url.searchParams.get('id');

//Ajouter image du produit
function addProductImage(data) {
  let image = document.createElement('img');
  image.setAttribute('src', data.imageUrl);
  image.setAttribute('alt', data.altTxt);
  document.getElementsByClassName('item__img')[0].appendChild(image);
}

//Ajouter titre du produit
function addProductTitle(data) {
  let productTitle = document.getElementById('title');
  productTitle.textContent = data.name;
  document
    .getElementsByClassName('item__content__titlePrice')[0]
    .appendChild(productTitle);
}

// Ajouter prix du produit
function addProductPrice(data) {
  let productPrice = document.getElementById('price');
  productPrice.textContent = data.price;
}

// Ajouter une description du produit
function addProductDescription(data) {
  let productDescription = document.getElementById('description');
  productDescription.textContent = data.description;
}

// Ajouter un selecteur de couleur au produit
function addOptionValue(data, index) {
  let optionValue = document.createElement('option');
  optionValue.setAttribute('value', data.colors[index]);
  document.getElementById('colors').appendChild(optionValue);
  optionValue.textContent = data.colors[index];
}

