import { useEffect, useRef, useState } from 'react';
import './App.css';
import CapturePokemonList from './components/CapturePokemon/CapturePokemonList';
import SearchPokemon from './components/SearchPokemon/searchPokemon';
import './styles.css';

document.title="Pokedex"

function App() {

  const normalPoke = []
  const firePoke = []
  const waterPoke = []
  const electricPoke = []
  const grassPoke = []
  const icePoke = []
  const fightingPoke = []
  const poisonPoke = []
  const groundPoke = []
  const psychicPoke = []
  const bugPoke = []
  const ghostPoke = []
  const dragonPoke = []
  const darkPoke = []
  const steelPoke = []
  const fairyPoke = []

  const [pokemon, setPokemon] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) {
      const pokemonSorted = pokemon.sort(function(a, b) {
        return a.id - b.id 
      })
      

      for (const data of pokemonSorted) {

        switch (data.types[0].type.name){
          case"normal":
            normalPoke.push(data)
            break;
          case"fire":
            firePoke.push(data)
            break;
          case"water":
            waterPoke.push(data)
            break;
          case"electric":
            electricPoke.push(data)
            break;
          case"grass":
            grassPoke.push(data)
            break;
          case"ice":
            icePoke.push(data)
            break;
          case"fighting":
            fightingPoke.push(data)
            break;
          case"poison":
            poisonPoke.push(data)
            break;
          case"psychic":
            psychicPoke.push(data)
            break;
          case"bug":
            bugPoke.push(data)
            break;
          case"ghost":
            ghostPoke.push(data)
            break;
          case"dragon":
            dragonPoke.push(data)
            break;
          case"dark":
            darkPoke.push(data)
            break;
          case"steel":
            steelPoke.push(data)
            break;
          case"fairy":
            fairyPoke.push(data)
            break;
          case"ground":
            groundPoke.push(data)
            break;
          
        }
      }
      
      setPokemon(p => pokemonSorted)
    }
    else {
      
        console.log(pokemon.length)
        for(let i = 1; i < 152; i++) {
          console.log("fetch")
          fetch("https://pokeapi.co/api/v2/pokemon/" + i)
          .then(response => response.json())
          .then(data => {
            setPokemon(previousPokemon => [...previousPokemon, data])
          })
          if (i === 151) {
            console.log("load")
            setLoaded(true)
            console.log("Chargement terminé");
          }  

      }
        
      }
      }, [loaded])
         
    
  const filterPokemon = function(normal, fire, water, electric, grass, ice, fighting, poison, ground, psychic, bug,
    ghost, dragon, dark, steel, fairy) {
      console.log(pokemon)
      let newPokeList = []
      for (const poke of pokemon) {
        if (normal && poke.types[0].type.name === "normal") {
          newPokeList.push(poke)
        } 
      }
      setPokemon(prev => newPokeList)
    }
    
  

  return (
    <div className="App">
      

        {
          loaded ? (
            <div>
              <SearchPokemon onSearch={filterPokemon}></SearchPokemon>
              <CapturePokemonList pokemon={pokemon}></CapturePokemonList>
            </div>
          ) : (
            <div>
              <img src="https://cdn.dribbble.com/users/1081076/screenshots/2832850/pokemongo.gif" />
              <h1>Chargement...</h1>
            </div>
          )
        }
        
      
    </div>
  );
}

export default App;
