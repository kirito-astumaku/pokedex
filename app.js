let pokedex = document.getElementById("pokedex")
let imgcontent = document.getElementById("img")
let pokemoName = document.getElementById("pokemon_name")
let generar = document.getElementById("GENERAR")
let type_name = document.getElementById('type_name')
let img1content = document.getElementById("img1")
let img2content = document.getElementById("img2")
let img3content = document.getElementById("img3")
let testo1 = document.getElementById("texto1")
let testo2 = document.getElementById("texto2")
let testo3 = document.getElementById("texto3")
let testo4 = document.getElementById("texto4")


console.log(pokedex, imgcontent, pokemoName)
let pokearray;
let data;
const getpokemon = async () => {
    try{
         pokearray = [];
        for(let id = 1; id < 251; id++){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            data = await response.json()
            pokemoName.innerHTML = data.name;
             imgcontent.src = data.sprites.front_default;
            pokearray.push(data) 
            console.log(data);
        }
         /* let response = await fetch("https://pokeapi.co/api/v2/pokemon/250")
        let data = await response.json()
         pokemoName.innerHTML = data.name;
         imgcontent.src = data.sprites.front_default;
        console.log(data) 
         console.log(pokearray) */
    }catch(error){
      console.log(error)
    }
}

generar.addEventListener("click",() => getpokemon())


function mas(){
    imgcontent.src = data.sprites.front_default;
    img1content.src = data.sprites.back_default
    img2content.src = data.sprites.front_shiny
    img3content.src = data.sprites.back_shiny
    testo1.textContent = `tipo: ${data.types[0].type.name},${data.types[1].type.name}`
    testo2.textContent= `habilidades: ${data.abilities[0].ability.name},${data.abilities[1].ability.name}`
    testo3.textContent = `Experiensa base: ${data.base_experience}`
    testo4.textContent = `Altura ${data.height}` 

}




