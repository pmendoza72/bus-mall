// Array of images
var productsArray = [];
var threeImages = [];
var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog_duck', 'dragon', 'pen', 'pet_sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Products(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicks = 0;
}

// creates ALL the product images

(function() {
  for (var i = 0; i < productImageNames.length; i++) {
    new Products(productImageNames[i], 'img/' + productImageNames[i] + '.jpg');
  }
})();


// Tracker object that controls functionality

var tracker = {
  tdOneEl: document.getElementById('td1'),
  newImgOne: document.createElement('img1'),
  tdTwoEl: document.getElementById('td2'),
  newImgTwo: document.createElement('img2'),
  tdThreeEl: document.getElementById('td3'),
  newImgThree: document.createElement('img3'),
  showResultsEl: document.getElementById('show-results'),
  resultsEl: document.getElementById('results'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,
  clicks: 0,

  // Gets random index

  randomImage: function() {
    return Math.floor(Math.random() * productsArray.length);
  },

  displayImages: function() {
    this.imgObjOne = productsArray[this.randomImage()];
    this.imgObjTwo = productsArray[this.randomImage()];
    this.imgObjThree = productsArray[this.randomImage()];

    if(this.imgObjOne === this.imgObjTwo || this.imgObjTwo === this.imgObjThree || this.imgObjOne === this.imgObjThree) {
      this.displayImages();
    }

    this.newImgOne.src = this.imgObjOne.path;
    this.newImgOne.id = this.imgObjOne.name;
    this.newImgTwo.src = this.imgObjTwo.path;
    this.newImgTwo.id = this.imgObjTwo.name;
    this.newImgThree.src = this.imgObjThree.path;
    this.newImgThree.id = this.imgObjThree.name;
  },

  checkClicks: function() {
    console.log(this.clicks);
    if(this.clicks > 15) {
      this.imageContainerEl.removeEventListener('click', this.clickHandler);
      this.showResultsEl.addEventListener('click', function(e) {
        e.preventDefault();
        tracker.renderResults();
      });
    }
  },

  clickHandler: function(e) {
    tracker.checkClicks();
    if(
      e.target.id === tracker.imgObjOne.name ||
      e.target.id === tracker.imgObjTwo.name ||
      e.target.id === tracker.imgObjThree.name
    ) {

      tracker.clicks++;
      tracker.tallyVotes(e.target.id);
      tracker.displayImages();
    }
  },



}


//
// function drawPictures() {
//   for (var i = 0; i < 3; i++) {
//     var newEl = document.createElement('td');
//     var elem = document.createElement('img');
//
//     var randIndex = randomImage();
//     console.log('random index: ', randIndex);
//
//     var randProduct = productsArray[randIndex];
//     console.log('random product: ', randProduct);
//
//     elem.src = randProduct.path;
//     console.log('random path: ', elem.src);
//
//     newEl.appendChild(elem);
//     document.getElementById('picture').appendChild(newEl).appendChild(elem);
//
//     threeImages.push(randProduct);
//
//   }
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

drawPictures();
