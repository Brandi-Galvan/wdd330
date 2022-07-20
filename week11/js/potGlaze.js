const requestURL = 'https://brandi-galvan.github.io/wdd330/week11/json/data.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    display_image(data.message);
  })


function seaGlass() {
document.getElementById('vaseBase').src="./images/vase-sea-glass.png";
}

function sand() {
    document.getElementById('vaseBase').src="./images/vase-sand.png";
    }

function cinnamon() {
    document.getElementById('vaseBase').src="./images/vase-cinnamon.png";
    }

function teal() {
    document.getElementById('vaseBase').src="./images/vase-med-teal.png";
    }

function medBlue() {
    document.getElementById('vaseBase').src="./images/vase-med-blue.png";
    }