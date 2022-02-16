const key = "?2adf32de-40c6-454a-856c-6b412348e384";
const url = "https://api.thecatapi.com/v1/breeds" + key;

async function getCats() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
    console.log(result[i].image);
  }
}

getCats();
