const requestURL = 'https://brandi-galvan.github.io/wdd330/week11/json/data.json';


fetch(requestURL)
    .then (response => response.json())
    .then (data => {
        console.log(data)
    })
        
        
    function seaGlass() {
    document.querySelector("#vaseBase").src = data.color1;
    var image = document.getElementById('vaseBase');
    image.src = glaze.color1;
}