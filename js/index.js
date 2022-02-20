const key = "?2adf32de-40c6-454a-856c-6b412348e384";
const url = "https://api.thecatapi.com/v1/breeds" + key;
const catsContainer = document.querySelector(".cats-container");

async function getCats() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    catsContainer.innerHTML = "";
    catsContainer.classList.add("after");

    for (let i = 0; i < result.length; i++) {
      createHTML(result[i]);
    }
  } catch (error) {
    console.log(error);
  }
}

getCats();

function createHTML(result) {
  catsContainer.innerHTML += `<a href="details.html?q=${result.name}" class="cat-card"><img src="${result.image.url}" class="cat-img">
  <h2 class="cat-name">${result.name}</h2><h3 class="cat-origin">Origin: ${result.origin}</h3></a>`;
}

let myvar = "😻";
let result = myvar.repeat(5);
console.log(result);
