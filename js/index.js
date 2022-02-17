const key = "?2adf32de-40c6-454a-856c-6b412348e384";
const url = "https://api.thecatapi.com/v1/breeds" + key;

async function getCats() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    const catsContainer = document.querySelector(".cats-container");
    catsContainer.innerHTML = "";
    catsContainer.classList.add("after");
    for (let i = 0; i < result.length; i++) {
      console.log(i);

      catsContainer.innerHTML += `<a href="details.html?q=${result[i].name}" class="cat-card"><img src="${result[i].image.url}" class="cat-img"><h2 class="cat-name">${result[i].name}</h2><h3 class="cat-origin">Origin: ${result[i].origin}</h3></a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getCats();

// function createHTML(details){
//     document.querySelector(
//         ".cats-container"
//       ).innerHTML = `<img src="${result[i].image.url}" class="cat-img"><h2 class="cat-name">${result[i].name}</h2>`
// }

let myvar = "&#128540";
let result = myvar.repeat(5);
