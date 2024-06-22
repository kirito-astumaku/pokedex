let pokedex = document.getElementById("pokedex")
let imgcontent = document.getElementById("img")
let pokemoName = document.getElementById("pokemon_name")
let generar = document.getElementById("GENERAR")
let type_name = document.getElementById('type_name')
 
console.log(pokedex, imgcontent, pokemoName)
let pokearray;
let data;

document.addEventListener('DOMContentLoaded', () => {
  getpokemon();
});

const getpokemon = async () => {
    try{
         pokearray = [];
        for(let id = 1; id < 257; id++){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            data = await response.json()
            pokearray.push(data) 
            console.log(data);
           const container = document.getElementById('pokedex-continer');
          const div = document.createElement('div');
          div.classList.add('data1');
          div.setAttribute('data-pokemon-id', id);
          div.innerHTML =`
                      <img src="${data.sprites.front_default}" alt="">
                      <h1>${data.name}</h1> 
          `;

          div.addEventListener('click', (event) => {
            const pokemonId = event.currentTarget.getAttribute('data-pokemon-id'); // Obtener el id del atributo data
            mas(pokemonId);
        });
          container.appendChild(div);
        }
         console.log(pokearray) 
    }catch(error){
      console.log(error)
    }
}


/* generar.addEventListener("click", () => getpokemon()); */
/* 
function mas(){
  imgcontent.src = data.sprites.front_default;
    img1content.src = data.sprites.back_default
    img2content.src = data.sprites.front_shiny
    img3content.src = data.sprites.back_shiny
    testo1.textContent = `tipo: ${data.types[0].type.name},${data.types[1].type.name}`
    testo2.textContent= `habilidades: ${data.abilities[0].ability.name},${data.abilities[1].ability.name}`
    testo3.textContent = `Experiensa base: ${data.base_experience}`
    testo4.textContent = `Altura ${data.height}`
} */

    function mas(id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(response => response.json())
          .then(data => {
              // Actualizar los elementos del DOM con los datos del Pokémon
              document.getElementById('img1').src = data.sprites.back_default;
              document.getElementById('img2').src = data.sprites.front_shiny;
              document.getElementById('img3').src = data.sprites.back_shiny;
              document.getElementById('texto1').textContent = `Tipo: ${data.types.map(type => type.type.name).join(', ')}`;
              document.getElementById('texto2').textContent = `Habilidades: ${data.abilities.map(ability => ability.ability.name).join(', ')}`;
              document.getElementById('texto3').textContent = `Experiencia base: ${data.base_experience}`;
              document.getElementById('texto4').textContent = `Altura: ${data.height}`;
              /* -------------------------------------------------------------- */
              document.getElementById('texto12').textContent = `Nombre: ${data.name}`
              document.getElementById('texto_1').textContent = `${data.stats[0].stat.name}: ${data.stats[0].base_stat}`
              document.getElementById('texto_2').textContent = `${data.stats[1].stat.name}: ${data.stats[1].base_stat}`
              document.getElementById('texto_3').textContent = `${data.stats[2].stat.name}: ${data.stats[2].base_stat}`
              document.getElementById('texto_4').textContent = `${data.stats[3].stat.name}: ${data.stats[3].base_stat}`
              document.getElementById('texto_5').textContent = `${data.stats[4].stat.name}: ${data.stats[4].base_stat}`
              document.getElementById('texto_6').textContent = `${data.stats[5].stat.name}: ${data.stats[5].base_stat}`
          })
          .catch(error => console.error('Error al obtener los datos del Pokémon:', error));
  }



  /* estilos-------------------- */

  function estilos(){
    document.getElementById('pokedex-continer').style.opacity = '0.2'
    document.getElementById('datos').style.display = 'block'
  }


  function estilos2(){
    document.getElementById('pokedex-continer').style.opacity = '1'
    document.getElementById('datos').style.display = 'none'
  }
  
  

 


    
   


 



