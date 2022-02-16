const key = "?2adf32de-40c6-454a-856c-6b412348e384";
const url = "https://api.thecatapi.com/v1/breeds" + key;

async function getCats() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
    console.log(result[i].image.url);
    document.querySelector(
      ".cats-container"
    ).innerHTML += `<img src="${result[i].image.url}" class="cat-img"><h2 class="cat-name">${result[i].name}</h2><h3>Origin: ${result[i].origin}</h3>`;
  }
}

getCats();

// function createHTML(details){
//     document.querySelector(
//         ".cats-container"
//       ).innerHTML = `<img src="${result[i].image.url}" class="cat-img"><h2 class="cat-name">${result[i].name}</h2>`
// }
