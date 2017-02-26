// Array of images
var productsArray = [];
var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog_duck', 'dragon', 'pen', 'pet_sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];

// 3 Random Images
function randomImage() {
  return Math.floor(Math.random() * productImageNames.length);
};


function drawPictures() {
  for (var i = 0; i < 3; i++) {
    var newEl = document.createElement('td');
    var elem = document.createElement('img');

    var randIndex = randomImage();
    console.log('random index: ', randIndex);

    var randProduct = productsArray[randIndex];
    console.log('random product: ', randProduct);

    elem.src = randProduct.path;
    console.log('random path: ', elem.src);

    newEl.appendChild(elem);
    document.getElementById('picture').appendChild(newEl).appendChild(elem);

  }
}


function Products(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicks = 0;
}

for (var i = 0; i < productImageNames.length; i++) {
  var product = new Products(productImageNames[i], 'img/' + productImageNames[i] + '.jpg');
  productsArray.push(product);
}
console.log(productsArray);



//
// // a simple IIFE to build all the product images
// (function() {
//   // build the objects
// })()
//
// // Object Literal for managing functionality
// // of app
//
// var tracker = {
//   // lots of properties and methods
// }
//
// someEl.addEventListener('click', function(e) {
//   // does some stuff on click
// })

drawPictures();
