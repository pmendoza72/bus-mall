// Array of images
var productsArray = [];
var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog_duck', 'dragon', 'pen', 'pet_sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];
var productColors = function() {
  var hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  return hexColor;
};
document.getElementById('show-results').style.visibility='hidden';



// myChart.data.datasets[0].data => will get you the data array
var chartData = {
  type: 'bar',
  data: {
    labels: productImageNames, // This will hold the name of each product image
    datasets: [{
      label: '# of Votes',
      data: [], // This will hold the votes for each product image
      backgroundColor: [],
      borderColor: '#e00412',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          fontColor: '#fff'
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#fff'
        },
      }]
    }
  }
};

function Products(name, path, color) {
  this.name = name;
  this.path = path;
  this.color = color;
  this.votes = 0;
  productsArray.push(this);
  chartData.data.datasets[0].data.push(this.votes);
  chartData.data.datasets[0].backgroundColor.push(this.color);
}

// creates ALL the product images

(function() {
  for (var i = 0; i < productImageNames.length; i++) {
    new Products(productImageNames[i], 'img/' + productImageNames[i] + '.jpg', productColors());
  }
})();


// Tracker object that controls functionality

var tracker = {
  newImgOne: document.getElementById('img1'),
  newImgTwo: document.getElementById('img2'),
  newImgThree: document.getElementById('img3'),
  showResultsEl: document.getElementById('show-results'),
  resultsEl: document.getElementById('results'),
  imageContainerEl: document.getElementById('image-container'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,
  clicks: 1,

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
    if(this.clicks > 14) {
      document.getElementById('show-results').style.visibility='visible';
      this.imageContainerEl.removeEventListener('click', this.clickHandler);
      this.showResultsEl.addEventListener('click', function(e) {
        e.preventDefault();
        tracker.getResults();
        tracker.changeBgColor();
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
      tracker.addVotes(e.target.id);
      tracker.displayImages();
    }
  },

  addVotes: function(elId) {
    for(var i in productsArray) {
      if(elId === productsArray[i].name) {
        productsArray[i].votes +=1;
        myChart.data.datasets[0].data[i]++;
        myChart.update();
      }
    }
  },

  changeBgColor: function() {
    document.getElementById('aside-bg').style.background = '#f8facf';
  },

  getResults: function() {
    var pEl = document.createElement('p');
    pEl.textContent = 'Results';
    var ulEl = document.createElement('ul');

    for(var i in productsArray) {
      var liEl = document.createElement('li');
      if(productsArray[i].votes > 1 || productsArray[i].votes === 0) {
        liEl.textContent = productsArray[i].name + ': ' + productsArray[i].votes + ' votes';
      } else {
        liEl.textContent = productsArray[i].name + ': ' + productsArray[i].votes + ' vote';
      }

      ulEl.appendChild(liEl);
    }
    this.resultsEl.appendChild(pEl);
    this.resultsEl.appendChild(ulEl);
  }

};

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, chartData);

tracker.imageContainerEl.addEventListener('click', tracker.clickHandler);
tracker.displayImages();

var changeChart = document.getElementById("myChart").style.width = "100%";
var changeChart = document.getElementById("myChart").style.color = "#fff";
var render = changeChart.getContext('2d');
