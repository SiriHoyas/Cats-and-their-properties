const url = "https://api.thecatapi.com/v1/breeds";
const catsContainer = document.querySelector(".cats-container");

async function getCats() {
  try {
    const response = await fetch(url, { headers: { "x-api-key": "?2adf32de-40c6-454a-856c-6b412348e384" } });
    const result = await response.json();

    console.log(result);

    catsContainer.innerHTML = "";
    catsContainer.classList.add("after");
    for (let i = 0; i < result.length; i++) {
      try {
        createHTML(result[i]);
      } catch (error) {
        console.log("Oh no! Cannot find image of a cat. Cannot make HTML for cat.");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getCats();

function createHTML(cat) {
  catsContainer.innerHTML += `<a href="details.html?q=${cat.name}" class="cat-card"><img src="${cat.image.url}" class="cat-img">
  <h2 class="cat-name">${cat.name}</h2><h3 class="cat-origin">Origin: ${cat.origin}</h3></a>`;
}
