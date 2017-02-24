var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog_duck', 'dragon', 'pen', 'pet_sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];

// for (var i = 0; i < productImageNames.length ; i++) {
//   var newEl = document.createElement('td');
//   var elem = document.createElement('img');
//   elem.src = 'img/' + productImageNames[i] + '.jpg';
//   newEl.appendChild(elem);
//   document.getElementById('picture').appendChild(newEl).appendChild(elem);
// }


var displayImage = function() {
    return Math.floor(Math.random() * productImageNames.length);
}


var newEl = document.createElement('td');
var elem = document.createElement('img');
elem.src = 'img/' + displayImage() + '.jpg';
newEl.appendChild(elem);
document.getElementById('picture').appendChild(newEl).appendChild(elem);


//
// this.customersPerHour = function(min, max) {
//     return Math.floor(Math.random() * productImageNames.length);
//   };
//
//
//   this.customersPerHour = function(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     };

// var productsArray = [];
//
// function Products(name, path) {
//   this.name = name;
//   this.path = path;
//   this.shown = 0;
//   this.clicks = 0;
// }
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
