
let pokemon = []

let pokaFetch = async () => {
  await fetch("https://api.pokemontcg.io/v1/cards")
  .then(res => res.json())
  .then(res => pokemon.res)
}

console.log(pokemon)
let renderPoka = async (p) =>{
  await console.log(p[name])
  let li = document.createElement("li")
  li.innerHTML = 
    `<a href="/cards/xy7-4">
    <img
      src="https://images.pokemontcg.io/xy7/4.png"
      class="hvr-grow"
      alt="Bellossom"
    />
  </a>
    `
}


pokaFetch()