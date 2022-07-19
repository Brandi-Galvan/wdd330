const requestURL = 'https://brandi-galvan.github.io/wdd330/week11/json/data.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  var mainImage = document.getElementById("vaseBase");

  for (var i = 0; i < data.length; i++) {
  }

  mainContainer.appendChild(div);
        
    // function seaGlass() {
    // document.getElementById("vaseBase").src = (response.color1);}
    // when the picture of the glaze is clicked, the vase image changes to a picture with corresponding glaze.