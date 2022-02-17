const catInfoContainer = document.querySelector(".cat-info");
const queryString = document.location.search;
console.log(queryString);

const key = "2adf32de-40c6-454a-856c-6b412348e384";
let url = "https://api.thecatapi.com/v1/breeds/search" + queryString;

console.log(url);

console.log(url);

async function getSingleCat() {
  const response = await fetch(url);
  const result = await response.json();
  const cat = result[0];
  console.log(cat);
  catInfoContainer.innerHTML = "";
  createHTML(cat);
}

getSingleCat();

function createHTML(result) {
  document.querySelector(
    ".cat-info"
  ).innerHTML = `<div class="cat-description"><h1>${result.name}</h1>
  <p>${result.description}</p>
  <p>Temperament: ${result.temperament}</p></div>
  <div class="cat-ratings"><h2>Dog friendly: ${result.dog_friendly}</h2>
  <h2>Energy level: ${result.energy_level}</h2>
  <h2>Hypoallergenic: ${result.hypoallergenic} </h2></div>`;
}
