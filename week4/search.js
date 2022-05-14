// JavaScript for the Searching Example
/* const form = document.forms['search'];

const input = form.elements.searchInput;

//input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);

//input.addEventListener('change', () => alert('changed'), false);

form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.value = 'Search Here';

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false); */

// JavaScript for the Hero Project

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}