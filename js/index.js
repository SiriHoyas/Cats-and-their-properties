const url = "https://api.thecatapi.com/v1/breeds";
const catsContainer = document.querySelector(".cats-container");

async function getCats() {
  try {
    const response = await fetch(url, { headers: { "x-api-key": "2adf32de-40c6-454a-856c-6b412348e384" } });
    const catsJson = await response.json();

    console.log(catsJson);

    catsContainer.innerHTML = "";
    catsContainer.classList.add("after");
    for (let i = 0; i < catsJson.length; i++) {
      try {
        createHTML(catsJson[i]);
      } catch (error) {
        //Jeg valgte å hoppe over resultater som manglet verdier i stedet for å lage html for en missing cat
        console.log("Oh no! Cat-values are missing. Cannot make HTML for cat.");
      }
    }
  } catch (error) {
    catsContainer.innerHTML = `<div class="cat-error">Who let the cat out?? Cannot fetch cats</div>`;
    console.log(error);
  }
}

getCats();

function createHTML(cat) {
  catsContainer.innerHTML += `
  <a href="details.html?name=${cat.name}" class="cat-card">
    <img src="${cat.image.url}" class="cat-img" alt="Image of ${cat.name}">
    <span class="cat-name">${cat.name}</span>
    <span class="cat-origin">Origin: ${cat.origin}</span>
  </a>`;
}
