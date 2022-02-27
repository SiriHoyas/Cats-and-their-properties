const catInfoContainer = document.querySelector(".cat-info");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const catName = params.get("name");
console.log(catName);

let url = "https://api.thecatapi.com/v1/breeds/search?q=" + catName;

console.log(url);

async function getSingleCat() {
  try {
    const response = await fetch(url, { headers: { "x-api-key": "2adf32de-40c6-454a-856c-6b412348e384" } });
    const catJson = await response.json();
    const cat = catJson[0];
    console.log(cat);
    catInfoContainer.innerHTML = "";
    document.querySelector("title").innerHTML = cat.name;
    createHTML(cat);
  } catch (error) {
    catInfoContainer.innerHTML = `<div class="cat-error">Cat has gone incognito &#128576; Cannot fetch cat info.</div>`;
  }
}

getSingleCat();

function createHTML(cat) {
  const dogFriendlyEmoji = "&#128054"; // 🐶
  const energyLevelEmoji = "&#128572"; // 😼

  catInfoContainer.innerHTML = `
  <div class="cat-description">
    <h1>${cat.name}</h1>
    <p>${cat.description}</p>
    <p>Temperament: ${cat.temperament}</p>
  </div>
  <div class="cat-ratings">
    <h2>Dog friendly:</h2>
    <p class="cat-ratings">${dogFriendlyEmoji.repeat(cat.dog_friendly)}</p>
    <h2>Energy level:</h2>
    <p class="cat-ratings">${energyLevelEmoji.repeat(cat.energy_level)}</p>
    <h2>Hypoallergenic:</h2>
    <p class="cat-ratings">${checkAllergies(cat)}</p>
  </div>`;
}

function checkAllergies(details) {
  if (details.hypoallergenic === 1) {
    return "&#128570"; // 😺
  } else {
    return "&#128574"; // 😾
  }
}
