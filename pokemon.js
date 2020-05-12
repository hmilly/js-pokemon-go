
let pokaFetch = (url) => {
  const data = fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error))
  return data
}


let renderPoka = async () => {
  let data = await pokaFetch("https://api.pokemontcg.io/v1/cards")
  
  data.cards.forEach(item => {
    let gallery = document.querySelector(".gallery")
    console.log()
    let div = document.createElement("div")
    div.className = "pokadiv";

    if(item.nationalPokedexNumber == undefined) item.nationalPokedexNumber = "-";

    div.innerHTML =
      `
    <div class="pokacard">
      <img
        src="${item.imageUrl}"
        alt="${item.name}"
      />
    </div>
    <div class="pokadetails">
      <p class="txt">Pokadex Number:<br> ${item.nationalPokedexNumber}</p>
      <p class="txt">Number:<br> ${item.number}</p>
      <p class="txt">Rarity:<br> ${item.rarity}</p>
      <p class="txt">Series:<br> ${item.series}</p>
      <p class="txt">Set:<br> ${item.set}</p>
    </div>
    `
    return gallery.appendChild(div)
  })
}




renderPoka()