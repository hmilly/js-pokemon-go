
let pokaFetch = async (url) => {
  const data = await fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error))
  return data
}


let renderPoka = async () => {
  let data = await pokaFetch("https://api.pokemontcg.io/v1/cards")
  let cards = document.querySelector(".gallery")

  data.cards.forEach(item => {
    if (item.nationalPokedexNumber == undefined) item.nationalPokedexNumber = "-";
    let div = document.createElement("div")
    div.className = "pokadiv";
    div.innerHTML =
      `
    <div class="pokacard">
      <img
        src="${item.imageUrl}"
        alt="${item.name}"
      />
    </div>
    <div class="pokadetails">
      <p class="txt">Pokédex Number:<br> ${item.nationalPokedexNumber}</p>
      <p class="txt">Number:<br> ${item.number}</p>
      <p class="txt">Rarity:<br> ${item.rarity}</p>
      <p class="txt">Series:<br> ${item.series}</p>
      <p class="txt">Set:<br> ${item.set}</p>
    </div>
    `
    cards.appendChild(div)
  })
}

renderPoka()
